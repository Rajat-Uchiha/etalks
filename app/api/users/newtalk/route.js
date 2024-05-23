import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/db/connection";
import talkvalidation from "@/validations/talks";
import Talk from "@/models/talks";
connectDb();

export const POST = async (NextRequest) => {
  try {
    const { title, description } = await NextRequest.json();
    await talkvalidation.validate({ title, description });

    const userID = "664f4e70678580d907d898fe"; //get value from params || cookie

    const newTalk = new Talk({ title, description, author: userID });

    const savedTalk = await newTalk.save();

    // * EXTRACT ALL THE HASHTAGS FROM TITLE AS WELL AS FROM DESCRIPTION AND SAVE IT IN HASHTAGS COLLECTION

    return NextResponse.json(
      {
        isValid: true,
        message: "Talk saved successfully",
        savedTalk,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
