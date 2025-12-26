import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { checkAnswerById, loadQuestionsOnce } from "@/lib/placement/questions";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req: Request) {
  try {
    const questions = await loadQuestionsOnce();
    const total = questions.length;
    const body = await req.json().catch(() => null);
    const { questionId, payload } = body ?? {};
    if (!questionId || !payload?.type) {
      return NextResponse.json({ error: "ANSWER_FAIL" }, { status: 400 });
    }
    const { correct, weight } = await checkAnswerById(questionId, payload);

    let session = null;
    try {
      session = await getServerSession(authOptions);
    } catch {}
    if (!session?.user?.id) {
      return NextResponse.json({ correct, weight }, { status: 200 });
    }

    const userId = String((session.user as { id: string }).id);
    const updated = await prisma.$transaction(async (tx) => {
      const cur =
        (await tx.assessmentProgress.findUnique({ where: { userId } })) ??
        (await tx.assessmentProgress.create({ data: { userId } }));

      const nextIndex = Math.min(cur.totalIndex + 1, total);
      const nextScore = cur.totalScore + (correct ? weight : 0);

      await tx.assessmentProgress.update({
        where: { userId },
        data: { totalIndex: nextIndex, totalScore: nextScore },
      });
      await tx.placementAnswer.create({
        data: {
          userId,
          questionId,
          choice:
            payload.type === "gap"
              ? String(payload.user ?? "")
              : String(payload.chosen ?? ""),
          correct,
          weight,
        },
      });
      return { nextIndex, nextScore };
    });

    return NextResponse.json(
      {
        correct,
        weight,
        state: {
          currentIndex: updated.nextIndex,
          totalScore: updated.nextScore,
          total,
        },
      },
      { status: 200 }
    );
  } catch (e: unknown) {
    console.error("[placement/answer] error:", e);
    return NextResponse.json({ error: "DB_FAIL" }, { status: 500 });
  }
}
