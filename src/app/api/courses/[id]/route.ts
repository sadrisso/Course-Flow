import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: { [key: string]: string } }
) {
  const id = context.params.id;

  return NextResponse.json({id, method: "get"})
}

export async function DELETE(
  req: Request,
  context: { params: { [key: string]: string } }
) {
  const id = context.params.id;

  return NextResponse.json({id, method: "delete"})
}

export async function PATCH(
  req: Request,
  context: { params: { [key: string]: string } }
) {
  const id = context.params.id;

  return NextResponse.json({id, method: "patch"})
}
