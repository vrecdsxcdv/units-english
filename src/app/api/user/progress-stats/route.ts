import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { level: null, completedLessons: 0, totalLessons: 0, monthProgress: 0, streak: 0, todayCompleted: false },
        { status: 200 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email.toLowerCase() },
      include: { assessmentProgress: true },
    });

    if (!user) {
      return NextResponse.json(
        { level: null, completedLessons: 0, totalLessons: 0, monthProgress: 0, streak: 0, todayCompleted: false },
        { status: 200 }
      );
    }

    // Получаем уровень и баллы из результатов теста
    const level = user.assessmentProgress?.level || null;
    const testScore = user.assessmentProgress?.score || null;
    const testCompleted = !!user.assessmentProgress?.completedAt;
    // Точность теста (из 148 баллов максимум)
    const testAccuracy = testScore !== null ? Math.round((testScore / 148) * 100) : null;

    // Прогресс из User.progress (JSON: { a1: ["topic1", "topic2"], b1: ["topic3"] })
    type ProgressData = { [level: string]: string[] };
    let progressData: ProgressData = {};
    try {
      progressData = user.progress ? JSON.parse(user.progress) : {};
    } catch {
      progressData = {};
    }

    // Считаем все завершённые топики по всем уровням
    const completedLessons = Object.values(progressData).reduce(
      (total, topics) => total + (Array.isArray(topics) ? topics.length : 0),
      0
    );

    // Общее количество уроков
    const totalLessons = 150;

    // Прогресс в процентах от общего количества
    const monthProgress = Math.round((completedLessons / totalLessons) * 100);

    // Streak из User (проверяем активность)
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
    const isStreakActive = user.lastActiveDate === today || user.lastActiveDate === yesterday;
    const streak = isStreakActive ? (user.streak || 0) : 0;
    const todayCompleted = user.lastActiveDate === today;

    return NextResponse.json({
      level,
      testScore,
      testAccuracy,
      testCompleted,
      completedLessons,
      totalLessons,
      monthProgress,
      streak,
      todayCompleted,
    });
  } catch (error) {
    console.error("Error fetching progress stats:", error);
    return NextResponse.json(
      { level: null, completedLessons: 0, totalLessons: 0, monthProgress: 0, streak: 0, todayCompleted: false },
      { status: 500 }
    );
  }
}
