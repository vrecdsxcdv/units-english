import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { loadQuestionsOnce } from "@/lib/placement/questions";
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Минимальный интервал между прохождениями теста (в днях)
const COOLDOWN_DAYS = 10;

export async function GET() {
  try {
    const total = (await loadQuestionsOnce()).length;
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json(
        { auth: false, state: { totalIndex: 0, totalScore: 0 }, total },
        { status: 200 }
      );
    }
    const user = await prisma.user.findUnique({
      where: { email: session.user.email.toLowerCase() },
    });
    if (!user) {
      return NextResponse.json({
        auth: false,
        state: { totalIndex: 0, totalScore: 0 },
        total,
      });
    }
    let progress = await prisma.assessmentProgress.findUnique({
      where: { userId: user.id },
    });
    if (!progress) {
      progress = await prisma.assessmentProgress.create({
        data: { userId: user.id, index: 0, total: 100 },
      });
    }

    // Вычисляем информацию о кулдауне
    let cooldown = null;
    if (progress.completedAt) {
      const lastCompleted = new Date(progress.completedAt);
      const now = new Date();
      const diffMs = now.getTime() - lastCompleted.getTime();
      const diffDays = diffMs / (1000 * 60 * 60 * 24);

      if (diffDays < COOLDOWN_DAYS) {
        const daysLeft = Math.ceil(COOLDOWN_DAYS - diffDays);
        cooldown = {
          active: true,
          daysLeft,
          nextAvailable: new Date(lastCompleted.getTime() + COOLDOWN_DAYS * 24 * 60 * 60 * 1000).toISOString(),
        };
      }
    }

    return NextResponse.json(
      {
        auth: true,
        state: {
          totalIndex: progress.index,
          totalScore: progress.score || 0,
          finished: !!progress.completedAt,
          level: progress.level,
        },
        total,
        cooldown,
      },
      { status: 200 }
    );
  } catch (e: unknown) {
    return NextResponse.json(
      {
        error: "STATE_FAIL",
        reason: e instanceof Error ? e.message : "unknown",
      },
      { status: 200 }
    );
  }
}
