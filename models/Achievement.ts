import mongoose from "mongoose";

const achieveSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    image: {
      type: String,
      required: false, 
    },
  },
  { timestamps: true } 
);

const Achievement = mongoose.models.Achievement || mongoose.model("Achievement", achieveSchema);
export default Achievement;
