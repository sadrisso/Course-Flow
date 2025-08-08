import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: { id: string } }) {
  const { id } = await context.params;

  try {
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid ID format." },
        { status: 400 }
      );
    }

    const singleData = await dbConnect("courses").then((col) =>
      col.findOne({ _id: new ObjectId(id) })
    );

    if (!singleData) {
      return NextResponse.json(
        { success: false, message: "Course not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: singleData },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /courses/:id error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  try {
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid ID format." },
        { status: 400 }
      );
    }

    const result = await dbConnect("courses").then((col) =>
      col.deleteOne({ _id: new ObjectId(id) })
    );

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Course not found or already deleted." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Course deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE /courses/:id error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, context: { params: { id: string } }) {
  const { id } = context.params;

  try {
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid ID format." },
        { status: 400 }
      );
    }

    const updateData = await req.json();

    if (!updateData || typeof updateData !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid update data." },
        { status: 400 }
      );
    }

    const result = await dbConnect("courses").then((col) =>
      col.updateOne({ _id: new ObjectId(id) }, { $set: updateData })
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Course not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Course updated successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("PATCH /courses/:id error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
