import { NextResponse } from "next/server";
export const runtime = "nodejs";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getServerSession(authOptions as never).catch(
      () => null
    );
    const userId = (session as { user?: { id?: string } })?.user?.id;
    if (!userId) return NextResponse.json({ auth: false });

    // Ensure AssessmentProgress exists (container for answers)
    let progress = await prisma.assessmentProgress.findFirst({
      where: { userId },
    });
    if (!progress) {
      progress = await prisma.assessmentProgress.create({ data: { userId } });
    }

    // Store placement progress in AssessmentAnswer as a single JSON doc
    const existing = await prisma.assessmentAnswer.findFirst({
      where: {
        progressId: progress.id,
        block: "DONE",
        questionId: "PLACEMENT_PROGRESS",
      },
    });

    if (!existing) {
      await prisma.assessmentAnswer.create({
        data: {
          progressId: progress.id,
          block: "DONE",
          questionId: "PLACEMENT_PROGRESS",
          userAnswer: { totalIndex: 0, totalScore: 0 },
          correct: true,
          weight: 0,
        },
      });
      return NextResponse.json({
        auth: true,
        state: { totalIndex: 0, totalScore: 0 },
      });
    }

    const payload = (existing.userAnswer as Record<string, unknown>) || {};
    const totalIndex = Number(payload.totalIndex ?? 0);
    const totalScore = Number(payload.totalScore ?? 0);

    return NextResponse.json({ auth: true, state: { totalIndex, totalScore } });
  } catch (e) {
    console.error("[placement/state] error:", e);
    return NextResponse.json({ auth: false });
  }
}
