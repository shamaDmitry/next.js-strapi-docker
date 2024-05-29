import { getStrapiURL } from "@/lib/utils";
import { getToken } from "./get-token";

export async function getUserMeLoader() {
  const authToken = await getToken();

  if (!authToken) return { ok: false, data: null, error: null };

  try {
    const baseUrl = getStrapiURL();
    const url = new URL("/api/users/me", baseUrl);

    const response = await fetch(url.href, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-cache",
    });

    const data = await response.json();

    if (data.error) return { ok: false, data: null, error: data.error };

    return { ok: true, data: data, error: null };
  } catch (error) {
    console.log(error);

    return { ok: false, data: null, error: error };
  }
}
