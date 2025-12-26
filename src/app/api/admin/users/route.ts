import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Список email-адресов администраторов
const ADMIN_EMAILS = ["admin@units-english.ru", "lifematvej9@gmail.com", "bahanke678@gmail.com"];

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    // Проверка авторизации
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Проверка прав администратора
    if (!ADMIN_EMAILS.includes(session.user.email)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Получить всех пользователей
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        isBanned: true,
        createdAt: true,
        streak: true,
        lastActiveDate: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Получить прогресс и streak для каждого пользователя
    const usersWithProgress = await Promise.all(
      users.map(async (user) => {
        // Получить прогресс по уровням
        const progressData = await prisma.lessonProgress.findMany({
          where: { userId: user.id },
          select: {
            level: true,
            completedTopics: true,
          },
        });

        // Подсчитать процент прогресса для каждого уровня
        const a1Topics = 40; // Общее количество тем A1
        const b1Topics = 25; // Общее количество тем B1
        const b2Topics = 25; // Общее количество тем B2

        const a1Progress = progressData.find((p) => p.level === "a1");
        const b1Progress = progressData.find((p) => p.level === "b1");
        const b2Progress = progressData.find((p) => p.level === "b2");

        const a1Percentage = a1Progress
          ? Math.round((a1Progress.completedTopics.length / a1Topics) * 100)
          : 0;
        const b1Percentage = b1Progress
          ? Math.round((b1Progress.completedTopics.length / b1Topics) * 100)
          : 0;
        const b2Percentage = b2Progress
          ? Math.round((b2Progress.completedTopics.length / b2Topics) * 100)
          : 0;

        // Используем streak напрямую из User
        const today = new Date().toISOString().split("T")[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
        const isStreakActive = user.lastActiveDate === today || user.lastActiveDate === yesterday;
        const currentStreak = isStreakActive ? (user.streak || 0) : 0;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
          isBanned: user.isBanned,
          createdAt: user.createdAt,
          lastActive: user.lastActiveDate ? new Date(user.lastActiveDate) : null,
          progress: {
            a1: a1Percentage,
            b1: b1Percentage,
            b2: b2Percentage,
          },
          streak: currentStreak,
        };
      })
    );

    return NextResponse.json({ users: usersWithProgress });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
