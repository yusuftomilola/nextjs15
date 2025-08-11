import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// STRAIGHT FORWARD REDIRECT APPROACH
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/test",
// };

export function middleware(request: NextRequest) {
  // CONDITIONAL REDIRECT APPROACH
  //   if (request.nextUrl.pathname === "/test") {
  //     return NextResponse.redirect(new URL("/", request. nextUrl));
  //   }

  // GLOBAL COOKIES
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  // GLOBAL HEADERS
  response.headers.set("custom-header", "custom-value");

  return response;
}

// NextResponse.rewrite - It is used when you dont want to redirect a user to a different url to show a different content but rather, you want to use the same url to show a different content from what is there before. Best for SEO.
