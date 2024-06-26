import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://cms:1337";
}

export function getAssetURL() {
  return process.env.NEXT_PUBLIC_STRAPI_ASSET_URL ?? "http://localhost:1337";
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}

interface getStrapiComponentProps {
  componentsData: Array<any>;
  componentName: string;
}

export function getStrapiComponent({
  componentsData,
  componentName,
}: getStrapiComponentProps) {
  const findedComponent = componentsData.filter(
    (item) => item["__component"] === componentName
  );

  if (findedComponent.length) {
    return findedComponent[0];
  }

  return findedComponent;
}

export const uuid = () => v4();

export function flattenAttributes(data: any): any {
  // Check if data is a plain object; return as is if not
  if (
    typeof data !== "object" ||
    data === null ||
    data instanceof Date ||
    typeof data === "function"
  ) {
    return data;
  }

  // If data is an array, apply flattenAttributes to each element and return as array
  if (Array.isArray(data)) {
    return data.map((item) => flattenAttributes(item));
  }

  // Initialize an object with an index signature for the flattened structure
  let flattened: { [key: string]: any } = {};

  // Iterate over each key in the object
  for (let key in data) {
    // Skip inherited properties from the prototype chain
    if (!data.hasOwnProperty(key)) continue;

    // If the key is 'attributes' or 'data', and its value is an object, merge their contents
    if (
      (key === "attributes" || key === "data") &&
      typeof data[key] === "object" &&
      !Array.isArray(data[key])
    ) {
      Object.assign(flattened, flattenAttributes(data[key]));
    } else {
      // For other keys, copy the value, applying flattenAttributes if it's an object
      flattened[key] = flattenAttributes(data[key]);
    }
  }

  return flattened;
}

export async function getPageData(path: string, query: string) {
  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);
  url.search = query;

  try {
    const response = await fetch(url.href, { cache: "no-store" });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAssetData(path: string, query: string) {
  const baseUrl = getAssetURL();

  const url = new URL(path, baseUrl);
  url.search = query;

  try {
    const response = await fetch(url.href, { cache: "no-store" });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
