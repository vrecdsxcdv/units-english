import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { A1_TOPICS, B1_TOPICS, B2_TOPICS } from "@/lib/topics";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ nextLesson: null }, { status: 200 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email.toLowerCase() },
    });

    if (!user) {
      return NextResponse.json({ nextLesson: null }, { status: 200 });
    }

    // Получаем весь прогресс пользователя
    const lessonProgressRecords = await prisma.lessonProgress.findMany({
      where: {
        userId: user.id,
      },
      select: {
        level: true,
        completedTopics: true,
      },
    });

    // Создаём Set для быстрой проверки завершённых топиков
    const completedSet = new Set<string>();
    lessonProgressRecords.forEach(record => {
      record.completedTopics?.forEach(topic => {
        completedSet.add(`${record.level}:${topic}`);
      });
    });

    // Ищем первый непройденный урок по порядку: A1 → B1 → B2
    const allLevels = [
      { level: "a1", topics: A1_TOPICS },
      { level: "b1", topics: B1_TOPICS },
      { level: "c2", topics: B2_TOPICS },
    ];

    for (const { level, topics } of allLevels) {
      for (const topic of topics) {
        const key = `${level}:${topic.id}`;
        if (!completedSet.has(key)) {
          return NextResponse.json({
            nextLesson: {
              level,
              topicId: topic.id,
              title: topic.title,
            },
          });
        }
      }
    }

    // Если все уроки пройдены, возвращаем первый урок A1
    return NextResponse.json({
      nextLesson: {
        level: "a1",
        topicId: A1_TOPICS[0].id,
        title: A1_TOPICS[0].title,
      },
    });
  } catch (error) {
    console.error("Error fetching next lesson:", error);
    return NextResponse.json({ nextLesson: null }, { status: 500 });
  }
}
