import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const {username, email, password} = await req.json();
        console.log("Username: ", username)
        return NextResponse.json({message: "User registered."}, {status: 201})
    }
    catch(error){
        return NextResponse.json({messgae: "An error occured while registering the user"}, {status: 500})
    }
}