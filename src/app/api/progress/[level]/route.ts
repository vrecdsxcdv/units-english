import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { getTopicsByLevel } from "@/lib/topics";

const prisma = new PrismaClient();

// Отключаем кэширование для этого роута
export const dynamic = 'force-dynamic';
export const revalidate = 0;

type ProgressData = {
  [level: string]: string[];
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ level: string }> }
) {
  try {
    const { level } = await params;
    const topics = getTopicsByLevel(level);
    const totalTopics = topics.length;

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({
        level,
        totalTopics,
        completedTopics: 0,
        percentage: 0,
        completedIds: [],
      });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email.toLowerCase() },
    });

    if (!user) {
      return NextResponse.json({
        level,
        totalTopics,
        completedTopics: 0,
        percentage: 0,
        completedIds: [],
      });
    }

    // Парсим прогресс из JSON поля
    let progress: ProgressData = {};
    try {
      progress = user.progress ? JSON.parse(user.progress) : {};
    } catch {
      progress = {};
    }

    const completedIds = progress[level] || [];
    const completedTopics = completedIds.length;
    const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    return NextResponse.json({
      level,
      totalTopics,
      completedTopics,
      percentage,
      completedIds,
    });
  } catch (error) {
    console.error("Error fetching progress:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
