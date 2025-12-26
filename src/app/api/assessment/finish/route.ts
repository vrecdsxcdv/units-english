import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    // Поддержка обоих вариантов: session.user.id или поиск по email
    let userId = session?.user?.id;

    if (!userId && session?.user?.email) {
      const user = await prisma.user.findUnique({
        where: { email: session.user.email.toLowerCase() },
      });
      userId = user?.id;
    }

    if (!userId) {
      return NextResponse.json({ error: "UNAUTH" }, { status: 401 });
    }

    const { score, level, rec } = await req.json();

    // Проверяем, существует ли уже запись (первый ли это тест)
    const existing = await prisma.assessmentProgress.findUnique({
      where: { userId },
    });

    const isFirstTest = !existing || !existing.completedAt;

    await prisma.assessmentProgress.upsert({
      where: { userId },
      create: {
        userId,
        index: 100,
        total: 100,
        answersJson: [],
        completedAt: new Date(),
        score,
        level,
        startLevel: level,
        recJson: rec ?? {},
      },
      update: {
        index: 100,
        completedAt: new Date(),
        score,
        level,
        ...(isFirstTest ? { startLevel: level } : {}),
        recJson: rec ?? {},
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error in finish:", error);
    return NextResponse.json({ error: "FAIL", reason: String(error) }, { status: 500 });
  }
}
