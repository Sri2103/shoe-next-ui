import { withAuth } from "next-auth/middleware"

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// export default withAuth({
//   // Matches the pages config in `[...nextauth]`
//   pages: {
//     signIn: '/login',
//   }
// })


export const config = { matcher: ["/"] }

export async function middleware(request: NextRequest) {
    const token = await getToken({
      req: request,
      secret: process?.env?.NEXTAUTH_SECRET,
      cookieName: "next-auth.session-token", // next-auth.session-token
    });
    // redirect user without access to login
    if (token?.accessToken && Date.now() / 1000 >  token?.accessExpiry  ) {
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.rewrite(url)
    }
  
    // redirect user without admin access to login
    // if (!token?.isAdmin) {
    //   return NextResponse.redirect("/login");
    // }
  
    return NextResponse.next();
  }