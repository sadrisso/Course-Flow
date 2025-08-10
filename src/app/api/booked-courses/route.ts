import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const bookedCourses = await dbConnect("booked-courses").then((col) =>
      col.find().toArray()
    );

    return NextResponse.json(bookedCourses);
  } catch (error) {
    console.error("Error fetching booked courses:", error);
    return NextResponse.json(
      { error: "Failed to load booked courses" },
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

    const result = await dbConnect("booked-courses").then((col) =>
      col.insertOne(postedData)
    );

    return NextResponse.json(
      { success: true, message: "Booked Course inserted successfully.", data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /booked-courses error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}