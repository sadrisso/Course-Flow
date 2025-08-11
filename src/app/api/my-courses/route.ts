import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  const courseId = searchParams.get("courseId");

  if (!email || !courseId) {
    return NextResponse.json(
      { success: false, message: "Email and courseId are required" },
      { status: 400 }
    );
  }

  if (!ObjectId.isValid(courseId)) {
    return NextResponse.json(
      { success: false, message: "Invalid courseId format" },
      { status: 400 }
    );
  }

  try {
    const course = await dbConnect("booked-courses").then((col) =>
      col.findOne({ email, _id: new ObjectId(courseId) })
    );

    if (!course) {
      return NextResponse.json(
        { success: false, message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: course }, { status: 200 });
  } catch (error) {
    console.error("GET /api/my-courses error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
