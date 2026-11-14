import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_ORIGIN } from "@/lib/site";

const WWW_HOST = "www.oldfont.net";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  const { pathname, search } = request.nextUrl;
  const isWww = host === WWW_HOST;
  const hasExtraSlash = pathname.length > 1 && pathname.endsWith("/");
  if (!isWww && !hasExtraSlash) return NextResponse.next();

  const canonicalPath = hasExtraSlash ? pathname.slice(0, -1) : pathname;
  if (isWww) {
    return NextResponse.redirect(new URL(`${canonicalPath}${search}`, SITE_ORIGIN), 301);
  }

  const hostHeader = request.headers.get("host") ?? request.nextUrl.host;
  return NextResponse.redirect(new URL(`${canonicalPath}${search}`, `${request.nextUrl.protocol}//${hostHeader}`), 301);
}

export const config = {
  matcher: "/:path*",
};
