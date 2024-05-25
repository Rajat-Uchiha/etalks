import { NextResponse } from "next/server";
import { headers } from "next/headers";
import connectDb from "@/db/connection";
import TalkLikes from "@/models/talklikes";
connectDb();

export const POST = async (NextRequest) => {
  try {
    // ! extract talkID from header
    const headersList = headers();
    const talkID = headersList.get("talkID");

    //! extract the userID from header
    const userID = headersList.get("userID");

    // ! check if the user has already liked the talk
    const isTalkLiked = await TalkLikes.find({
      talkId: talkID,
      likedBy: userID,
    });

    if (isTalkLiked.length !== 0) {
      //! remove the liked talk from the collection/Table
      await TalkLikes.findOneAndDelete({ talkId: talkID, likedBy: userID });

      return NextResponse.json({ message: "Talk is unliked successfully" });
    } else {
      // ! Store it in the talklikes collection
      const newLikedTalk = await TalkLikes({ talkId: talkID, likedBy: userID });

      await newLikedTalk.save();

      return NextResponse.json(
        {
          isValid: true,
          message: "Talk liked successfully",
          newLikedTalk,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

// talkID : 6650abf50257403b11e0ec13

// userID : 664f4e70678580d907d898fe
