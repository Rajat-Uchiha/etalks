import { NextResponse } from "next/server";
import User from "@/models/users";
import connectDb from "@/db/connection";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
connectDb();
export const POST = async (NextRequest) => {
  const cookieStore = cookies();
  try {
    const { email, password } = await NextRequest.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User doesn't exists", code: 401 },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Email or password is wrong" },
        { status: 401 }
      );
    } else {
      const token = jwt.sign({ id: user._id }, process.env.SRCT_SIGN);
      cookieStore.set("access_token", token, { secure: true });
      cookieStore.set("user_image", user.image, { secure: true });
      return NextResponse.json({ access_token: token }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error });
  }
};
