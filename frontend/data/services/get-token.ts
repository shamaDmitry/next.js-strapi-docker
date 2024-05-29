import { JWT_TOKEN_NAME } from "@/setup";
import { cookies } from "next/headers";

export async function getToken() {
  const authToken = cookies().get(JWT_TOKEN_NAME)?.value;
  return authToken;
}
