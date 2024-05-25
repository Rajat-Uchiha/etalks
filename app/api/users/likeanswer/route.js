import { NextResponse } from "next/server";
import { headers } from "next/headers";
import connectDb from "@/db/connection";
import LikedAnswers from "@/models/likedanswers";
connectDb();

export const POST = async (NextRequest) => {
  try {
    // ! extract talkID from header
    const headersList = headers();
    const answerId = headersList.get("answerID");

    //! extract the userID from header
    const userID = headersList.get("userID");

    // ! check if the user has already liked the talk
    const isAnswerLiked = await LikedAnswers.find({
      AnswerId: answerId,
      likedBy: userID,
    });

    if (isAnswerLiked.length !== 0) {
      //! remove the liked talk from the collection/Table
      await LikedAnswers.findOneAndDelete({
        AnswerId: answerId,
        likedBy: userID,
      });

      return NextResponse.json({ message: "Answer is unliked successfully" });
    } else {
      // ! Store it in the talklikes collection
      const newLikedAnswer = await LikedAnswers({
        AnswerId: answerId,
        likedBy: userID,
      });

      await newLikedAnswer.save();

      return NextResponse.json(
        {
          isValid: true,
          message: "Answer liked successfully",
          newLikedAnswer,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

// answerID : 6651c518adc0586dd9d6b00c

// userID : 664f4e70678580d907d898fe
