export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function GET() {
  // TODO: implement real lookup for authenticated users
  return NextResponse.json({ done: false });
}
