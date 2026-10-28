import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/site-config";

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(",")[0]?.split("-")[0]?.toLowerCase();
    if (preferred && (locales as readonly string[]).includes(preferred)) {
      return preferred;
    }
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale) return;

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|images|cv|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
