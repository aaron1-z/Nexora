import { NextResponse } from "next/server";
import { briefs } from "@/lib/briefs";

export async function GET() {
  return NextResponse.json(briefs);
}

