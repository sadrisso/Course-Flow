import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const postedData = await req.json();

    if (!postedData || typeof postedData !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid data submitted." },
        { status: 400 }
      );
    }

    const result = await dbConnect("registered-users").then((col) =>
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