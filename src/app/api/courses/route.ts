import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const courses = await dbConnect("courses").then((col) =>
      col.find().toArray()
    );

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
  try {
    const postedData = await req.json();

    if (!postedData || typeof postedData !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid data submitted." },
        { status: 400 }
      );
    }

    const result = await dbConnect("courses").then((col) =>
      col.insertOne(postedData)
    );

    return NextResponse.json(
      { success: true, message: "Course inserted successfully.", data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /courses error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
