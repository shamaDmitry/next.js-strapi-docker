import { getUserMeLoader } from "@/data/services/get-user-me-loader";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/", "/login", "/register"];

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;
  const user = await getUserMeLoader();

  if (publicRoutes.includes(currentPath)) {
    if (
      user.ok === true &&
      (currentPath === "/login" || currentPath === "/register")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }

  if (user.ok === false) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
