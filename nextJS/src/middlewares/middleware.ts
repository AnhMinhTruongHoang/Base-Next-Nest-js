// middleware.ts
export { auth as middleware } from "@/components/auth/auth";

export const config = {
  matcher: [
    // '/((?!auth).*)(.+)|/verify',
    // "/((?!api|_next/static|_next/image|favicon.ico|/|/auth).*)",
    "/((?!api|_next/static|_next/image|favicon.ico|auth|verify|$).*)",
  ],
};
