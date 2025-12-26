import { NextResponse } from "next/server";
import { getPublicByIndex, loadQuestionsOnce } from "@/lib/placement/questions";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: Request) {
  try {
    const questions = await loadQuestionsOnce();
    const total = questions.length;
    const url = new URL(req.url);
    const n = Number(url.searchParams.get("n") ?? 0);
    if (!Number.isFinite(n) || n < 0 || n >= total) {
      return NextResponse.json({ error: "OUT_OF_RANGE" }, { status: 400 });
    }
    const question = await getPublicByIndex(n);
    if (!question)
      return NextResponse.json({ error: "NO_QUESTIONS" }, { status: 500 });
    return NextResponse.json({ n, total, question }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "NO_QUESTIONS" }, { status: 500 });
  }
}
