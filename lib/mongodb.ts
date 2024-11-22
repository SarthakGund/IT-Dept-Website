import mongoose from "mongoose";

export const connectMongoDB = async (): Promise<void> => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log(":Connected to MongoDB.");
  } catch (error) {
    console.error("Connection failed: ", error);
  }
};
