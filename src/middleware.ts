import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Не кэшируем SSR и API прогресса
  if (
    req.nextUrl.pathname.startsWith("/learn") ||
    req.nextUrl.pathname.startsWith("/api/assessment")
  ) {
    res.headers.set("Cache-Control", "no-store");
  }
  return res;
}

export const config = {
  matcher: ["/learn/:path*", "/api/assessment/:path*"],
};












