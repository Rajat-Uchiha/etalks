import { NextResponse } from "next/server";
import connectDb from "@/db/connection";
import bcryptjs from "bcryptjs";
import userValidationSchema from "@/validations/users";
import User from "@/models/users";

// import sendEmail from "@/emails/sendemail";

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
    const otp = Math.floor(1000 + Math.random() * 9000);
    const subject = "Account verification - etalks";

    //! await sendEmail(email, subject, otp); => working perfectly only domain needs to be considered.

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
    return NextResponse.json({ error });
  }
};
