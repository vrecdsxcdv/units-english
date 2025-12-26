import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

type ProgressData = {
  [level: string]: string[];
};

function getDateString(date: Date): string {
  return date.toISOString().split("T")[0];
}

function getYesterdayString(): string {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return getDateString(yesterday);
}

function calculateStreak(currentStreak: number, lastActiveDate: string | null): number {
  const today = getDateString(new Date());
  const yesterday = getYesterdayString();

  if (lastActiveDate === today) {
    return currentStreak;
  } else if (lastActiveDate === yesterday) {
    return currentStreak + 1;
  } else {
    return 1;
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    console.log("[complete] Session:", session?.user?.email || "NO SESSION");

    if (!session?.user?.email) {
      console.log("[complete] Unauthorized - no session");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { level, topicId } = await req.json();
    console.log("[complete] Request:", { level, topicId });

    if (!level || !topicId) {
      return NextResponse.json({ error: "Missing level or topicId" }, { status: 400 });
    }

    console.log("[complete] Finding user...");
    const user = await prisma.user.findUnique({
      where: { email: session.user.email.toLowerCase() },
    });
    console.log("[complete] User found:", user?.id || "NOT FOUND");

    if (!user) {
      console.log("[complete] User not found!");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    let progress: ProgressData = {};
    try {
      progress = user.progress ? JSON.parse(user.progress) : {};
    } catch {
      progress = {};
    }
    console.log("[complete] Current progress:", progress);

    if (!progress[level]) {
      progress[level] = [];
    }

    if (!progress[level].includes(topicId)) {
      progress[level].push(topicId);
    }

    const newStreak = calculateStreak(user.streak || 0, user.lastActiveDate);
    const today = getDateString(new Date());
    console.log("[complete] Updating user with streak:", newStreak);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        progress: JSON.stringify(progress),
        streak: newStreak,
        lastActiveDate: today,
      },
    });

    console.log("[complete] Success! Updated progress:", progress[level], "streak:", newStreak);

    return NextResponse.json({
      message: "Topic completed",
      progress: progress[level],
      level,
      topicId,
      streak: newStreak,
    });
  } catch (error) {
    console.error("Error completing topic:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
