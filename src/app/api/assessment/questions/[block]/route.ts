import { NextResponse } from "next/server";
export const runtime = "nodejs";

import { loadBlock, mapParamToBlock } from "@/lib/assessment-data";

export async function GET(
  _: Request,
  ctx: { params: Promise<{ block: string }> }
) {
  try {
    const { block: param } = await ctx.params;
    const block = mapParamToBlock(param);
    if (!block) {
      return NextResponse.json({ error: "INVALID_BLOCK" }, { status: 400 });
    }
    const arr = loadBlock(block);
    if (!arr.length) {
      return NextResponse.json({ error: "NO_CONTENT" }, { status: 404 });
    }
    const pub = arr.map((q: Record<string, unknown>) => {
      const { id, type, prompt, question, text, choices, base } = q;
      return { id, type, prompt, question, text, choices, base };
    });
    return NextResponse.json({ items: pub });
  } catch (e) {
    console.error("[questions] error:", e);
    return NextResponse.json({ error: "QUESTIONS_FAIL" }, { status: 500 });
  }
}
