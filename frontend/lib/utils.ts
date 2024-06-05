import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://cms:1337";
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}

export function getStrapiData(dataObj: { data: any; meta: any }) {
  return dataObj.data.attributes;
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
