import { NextResponse } from 'next/server';

export async function GET() {
  const data = { status: 200, error: false };

  return NextResponse.json(data);
}


export async function POST(req: Request) {
  const postedData = await req.json();

  return NextResponse.json({ postedData });
}

