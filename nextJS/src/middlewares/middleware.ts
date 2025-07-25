// middleware.ts
export { auth as middleware } from "@/components/auth/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // bảo vệ tất cả routes trừ các thư mục hệ thống
};
