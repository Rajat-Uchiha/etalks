// models/User.js
import mongoose from "mongoose";

const talkLikeSchema = new mongoose.Schema(
  {
    talkId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Talk",
      required: true,
    },
    likedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    unique: true, // This ensures that a combination of talkId and userId is unique
  }
);

const TalkLikes =
  mongoose.models.talkLikes || mongoose.model("talkLikes", talkLikeSchema);

export default TalkLikes;
