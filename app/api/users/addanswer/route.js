import { NextResponse } from "next/server";
import connectDb from "@/db/connection";
import Answer from "@/models/answer";
connectDb();

export const POST = async (NextRequest) => {
  try {
    const { content } = await NextRequest.json();

    const userID = "664f4e70678580d907d898fe"; //get value from params || cookie

    const newAnswer = new Answer({ content, author: userID });

    const savedAnswer = await newAnswer.save();

    // * EXTRACT ALL THE HASHTAGS FROM TITLE AS WELL AS FROM DESCRIPTION AND SAVE IT IN HASHTAGS COLLECTION

    return NextResponse.json(
      {
        isValid: true,
        message: "Answer added successfully",
        savedAnswer,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
