import { NextResponse } from 'next/server';
import Achievement from '../../../../models/Achievement';

// Handle GET requests
export async function GET() {
  try {
    const achievements = await Achievement.find();
    return NextResponse.json(achievements, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Handle POST requests
export async function POST(req: Request) {
  try {
    const { title, description }: { title: string; description?: string } = await req.json();
    
    // Check for missing title or description (optional)
    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const newAchievement = new Achievement({
      title,
      description,
    });

    const savedAchievement = await newAchievement.save();
    return NextResponse.json(savedAchievement, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
