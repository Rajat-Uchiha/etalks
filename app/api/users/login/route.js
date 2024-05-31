import { NextRequest, NextResponse } from "next/server";
import User from "@/models/users";
export const GET = async (NextRequest) => {
  try {
    const { email, password } = await NextRequest.json();

    await userValidationSchema.validate({ email, password });

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User doesn't exists", code: 401 },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: "User logged in successfully",
        code: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
};
