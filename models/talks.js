// models/User.js
import mongoose from "mongoose";

const talkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Talk = mongoose.models.talks || mongoose.model("talk", talkSchema);

export default Talk;
