import mongoose from "mongoose";

const likedTalksSchema = new mongoose.Schema(
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

const LikedTalks =
  mongoose.models.likedTalks || mongoose.model("likedTalks", likedTalksSchema);

export default LikedTalks;
