/* eslint-disable @typescript-eslint/no-unused-vars */
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({ req });
  const isTokenOk = Boolean(token);
  const isUserAdmin = token?.role == "admin"
  const isAdminSpecificRoute = req.nextUrl.pathname.startsWith("/add-course");

  if (isAdminSpecificRoute && !isUserAdmin) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname)
    return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url))
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*"],
};
