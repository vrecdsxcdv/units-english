import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Получить дату в формате YYYY-MM-DD
function getDateString(date: Date): string {
  return date.toISOString().split("T")[0];
}

// Получить вчерашнюю дату
function getYesterdayString(): string {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return getDateString(yesterday);
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ streak: 0, isActive: false });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email.toLowerCase() },
      select: { streak: true, lastActiveDate: true },
    });

    if (!user) {
      return NextResponse.json({ streak: 0, isActive: false });
    }

    const today = getDateString(new Date());
    const yesterday = getYesterdayString();

    // Проверяем, активен ли стрик
    const isActive = user.lastActiveDate === today || user.lastActiveDate === yesterday;

    // Если стрик неактивен (пропущен день), возвращаем 0
    const streak = isActive ? (user.streak || 0) : 0;

    return NextResponse.json({
      streak,
      isActive,
      lastActiveDate: user.lastActiveDate,
      todayCompleted: user.lastActiveDate === today,
    });
  } catch (error) {
    console.error("Error fetching streak:", error);
    return NextResponse.json({ streak: 0, isActive: false }, { status: 500 });
  }
}
