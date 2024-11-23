import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();
    // console.log("Username: ", username)

    const hashedPassword = await bcrypt.hash(password, 10); 

    await connectMongoDB();
    await User.create({ username, email, password: hashedPassword });
    // await User.create({ username, email, password});
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user" },
      { status: 500 }
    );
  }
}
