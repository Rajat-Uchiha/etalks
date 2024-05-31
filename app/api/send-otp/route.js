import { NextResponse } from "next/server";
import connectDb from "@/db/connection";

connectDb();
export const GET = async () => {
  return NextResponse.json({
    message: "send-otp here",
  });
};
