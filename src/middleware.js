import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // Example: protect /dashboard routes
  if (request.nextUrl.pathname.startsWith("/about")) {
    const token = request.cookies.get("auth-token");

    if (!token) {
      // redirect to login if not authenticated
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/about/:path*",
};
