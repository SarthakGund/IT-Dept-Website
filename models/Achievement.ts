import mongoose, { Document, Model, Schema } from "mongoose";

// Define an interface for the Achievement document
export interface IAchievement extends Document {
  achievementName: string;
  description: string;
}

// Define the schema for the Achievement model
const AchievementSchema: Schema = new mongoose.Schema({
  achievementName: { type: String, required: true },
  description: { type: String, required: true },
});

// Create or retrieve the Achievement model
const Achievement: Model<IAchievement> =
  mongoose.models.Achievement || mongoose.model<IAchievement>("Achievement", AchievementSchema);

export default Achievement;
