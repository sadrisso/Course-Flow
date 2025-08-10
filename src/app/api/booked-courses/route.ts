/* eslint-disable @typescript-eslint/no-explicit-any */
import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email");

    // Build filter object based on query params
    const filter: Record<string, any> = {};
    if (email) filter.email = email;

    const bookedCourses = await dbConnect("booked-courses").then((col) =>
      col.find(filter).toArray()
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