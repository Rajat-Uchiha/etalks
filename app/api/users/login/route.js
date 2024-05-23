import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  return NextResponse.json(
    { message: "this is the login route" },
    { status: 200 }
  );
};
