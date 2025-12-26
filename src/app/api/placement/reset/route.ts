import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { loadQuestionsOnce } from "@/lib/placement/questions";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST() {
  try {
    await loadQuestionsOnce(); // warmup
    const session = await getServerSession(authOptions).catch(() => null);
    if (!session?.user?.id)
      return NextResponse.json({ ok: true }, { status: 200 });

    const userId = String((session.user as { id: string }).id);
    await prisma.assessmentProgress.upsert({
      where: { userId },
      update: { totalIndex: 0, totalScore: 0 },
      create: { userId, totalIndex: 0, totalScore: 0 },
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "DB_FAIL" }, { status: 500 });
  }
}
