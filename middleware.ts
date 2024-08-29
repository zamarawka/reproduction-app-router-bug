import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default function middleware(res) {
  const c = cookies();

  console.log(c);

  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      // skip
      // - all public directories
      // - _next
      // - favicons
      source:
        '/((?!api|_next|favicon.ico|site.webmanifest|manifest.webmanifest|browserconfig.xml|favicon-polee.png|favicon-16x16.png|favicon-32x32.png|android-chrome-192x192.png|android-chrome-256x256.png).*)',
    },
  ],
};
