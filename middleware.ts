import { JWT } from 'next-auth/jwt';
import { JWT as LocalJWT } from 'next-auth';
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token: JWT & LocalJWT | null = await getToken({ req });

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token?.user?.is_email_verified) {
      return NextResponse.redirect(new URL("/otp", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"]
}
