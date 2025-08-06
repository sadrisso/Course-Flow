import { dbConnect } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const courses = await dbConnect("courses").then(col => col.find().toArray());

    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Failed to load courses" },
      { status: 500 }
    );
  }
}


export async function POST(req: Request) {
  const postedData = await req.json();

  return NextResponse.json({ postedData });
}

