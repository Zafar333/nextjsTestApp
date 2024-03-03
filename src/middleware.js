import { NextResponse } from "next/server";
const session = false;
export function middleware(request) {
  console.log(" i am middleware 2");
  //   if (request.nextUrl.pathname != "/mainLayout/login")
  if (session == false) {
    return NextResponse.redirect(new URL("/mainLayout/login", request.url));
  } else {
    // if (request.nextUrl.pathname != "/mainLayout/home") {
    return;
    //   NextResponse.redirect(new URL("/mainLayout/home", request.url));
    // }
  }
}
export const config = {
  matcher: "/mainLayout/home/:path*",
  //   matcher: ["/mainLayout/home/:path*", "/mainLayout/about/:path*"]
};
