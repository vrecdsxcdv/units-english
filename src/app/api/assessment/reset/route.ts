import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Минимальный интервал между прохождениями теста (в днях)
const COOLDOWN_DAYS = 10;

export async function POST() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email)
      return NextResponse.json({ ok: true }, { status: 200 });

    const email = session.user.email.toLowerCase();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return NextResponse.json({ ok: true }, { status: 200 });

    // Проверяем, когда был завершён последний тест
    const progress = await prisma.assessmentProgress.findUnique({
      where: { userId: user.id },
    });

    if (progress?.completedAt) {
      const lastCompleted = new Date(progress.completedAt);
      const now = new Date();
      const diffMs = now.getTime() - lastCompleted.getTime();
      const diffDays = diffMs / (1000 * 60 * 60 * 24);

      if (diffDays < COOLDOWN_DAYS) {
        const daysLeft = Math.ceil(COOLDOWN_DAYS - diffDays);
        return NextResponse.json(
          {
            ok: false,
            error: "COOLDOWN",
            daysLeft,
            nextAvailable: new Date(lastCompleted.getTime() + COOLDOWN_DAYS * 24 * 60 * 60 * 1000).toISOString()
          },
          { status: 200 }
        );
      }
    }

    await prisma.placementAnswer.deleteMany({ where: { userId: user.id } });
    await prisma.assessmentProgress.upsert({
      where: { userId: user.id },
      update: { index: 0, score: 0, completedAt: null, level: null },
      create: { userId: user.id, index: 0, score: 0 },
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
