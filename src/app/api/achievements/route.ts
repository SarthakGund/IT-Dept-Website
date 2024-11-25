import { NextResponse } from "next/server";
// import Achievement from "@/models/Achievement";
import Achievement from "../../../../models/Achievement";
import User from "../../../../models/user";
import { connectMongoDB } from "../../../../lib/mongodb";

// In your /api/achievements POST handler
export async function POST(req: Request) {
    try {
      const { title, description, userId } = await req.json();
  
      // Look up user by email to get ObjectId
      const user = await User.findOne({ email: userId }); // userId here is the email
      if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
      }
  
      const newAchievement = new Achievement({
        title,
        description,
        userId: user._id,  // Use the ObjectId of the user
      });
  
      await newAchievement.save();
  
      return NextResponse.json(newAchievement, { status: 201 });
    } catch (error) {
      console.log("Error:", error);
      return NextResponse.json({ message: "An error occurred while adding." }, { status: 500 });
    }
  }
  