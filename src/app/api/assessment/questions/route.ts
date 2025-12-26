import { NextResponse } from "next/server";
import { loadQuestionsOnce } from "@/lib/placement/questions";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const items = await loadQuestionsOnce();
    // Вернуть только public-часть (без решений) — клиент сам режет при рендере, но лишнее не отдаём:
    const pub = items.map((item: Record<string, unknown>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { answer, solution, ...rest } = item;
      return rest;
    });
    return NextResponse.json({ items: pub }, { status: 200 });
  } catch (e: unknown) {
    return NextResponse.json(
      {
        error: "NO_QUESTIONS",
        reason: e instanceof Error ? e.message : "unknown",
      },
      { status: 200 }
    );
  }
}
