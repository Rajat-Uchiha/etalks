import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/db/connection";
import bcryptjs from "bcryptjs";
import userValidationSchema from "@/validations/users";
import User from "@/models/users";

connectDb();

export const POST = async (NextRequest) => {
  try {
    const { email, password } = await NextRequest.json();

    await userValidationSchema.validate({ email, password });

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { message: "User already exists", code: 409 },
        { status: 409 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // !send verification mail

    // await sendEmail;
    // ({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json(
      {
        isValid: true,
        message: "User registered successfully",
        code: 200,
        savedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
