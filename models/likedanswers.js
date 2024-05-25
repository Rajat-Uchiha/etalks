import mongoose from "mongoose";

const likedAnswersSchema = new mongoose.Schema(
  {
    AnswerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Answer",
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

const LikedAnswers =
  mongoose.models.likedanswers ||
  mongoose.model("likedanswers", likedAnswersSchema);

export default LikedAnswers;
