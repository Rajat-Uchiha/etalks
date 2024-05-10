import { NextResponse } from "next/server";
export const middleware = (request) => {
  if (request.nextUrl.pathname !== "/login") return NextResponse.redirect("/");
};

export const config = {
  matcher: ["/api/users"],
};
