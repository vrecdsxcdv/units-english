import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import {
  getQuestionById,
  checkAnswer,
  loadQuestionsOnce,
} from "@/lib/placement/questions";
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req: Request) {
  try {
    const { questionId, payload } = await req.json();
    if (!questionId)
      return NextResponse.json({ error: "BAD_INPUT" }, { status: 200 });

    const q = await getQuestionById(questionId);
    if (!q)
      return NextResponse.json({ error: "NO_SUCH_QUESTION" }, { status: 200 });

    const result = checkAnswer(q, payload);
    const { correct, partialScore } = result;
    // Для matching используем partialScore, для остальных — weight если correct
    const weight = partialScore !== undefined ? partialScore : (correct ? result.weight : 0);

    const session = await getServerSession(authOptions);
    const total = (await loadQuestionsOnce()).length;

    // Если нет авторизации — работаем без БД, клиент хранит в localStorage
    if (!session?.user?.email) {
      return NextResponse.json(
        { correct, weight, state: null, nextIndex: null, total },
        { status: 200 }
      );
    }

    const email = session.user.email.toLowerCase();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
      return NextResponse.json(
        { error: "AUTH_USER_NOT_FOUND" },
        { status: 200 }
      );

    // upsert ответа
    const choiceValue = payload?.matching
      ? JSON.stringify(payload.matching)
      : String(payload?.user ?? payload?.chosen ?? "");

    await prisma.placementAnswer.upsert({
      where: { userId_questionId: { userId: user.id, questionId } },
      update: {
        choice: choiceValue,
        correct,
        weight,
      },
      create: {
        userId: user.id,
        questionId,
        choice: choiceValue,
        correct,
        weight,
      },
    });

    // обновление прогресса
    const prev = await prisma.assessmentProgress.findUnique({
      where: { userId: user.id },
    });
    const nextIndex = Math.min((prev?.index ?? 0) + 1, total);
    // Для matching добавляем partialScore, для остальных — weight если correct
    const scoreToAdd = partialScore !== undefined ? partialScore : (correct ? result.weight : 0);
    const nextScore = (prev?.score ?? 0) + scoreToAdd;

    const updated = await prisma.assessmentProgress.upsert({
      where: { userId: user.id },
      update: { index: nextIndex, score: nextScore },
      create: {
        userId: user.id,
        index: 1,
        score: scoreToAdd,
      },
    });

    return NextResponse.json(
      {
        correct,
        weight,
        state: { totalIndex: updated.index, totalScore: updated.score },
        nextIndex,
        total,
      },
      { status: 200 }
    );
  } catch (e: unknown) {
    return NextResponse.json(
      {
        error: "ANSWER_FAIL",
        reason: e instanceof Error ? e.message : "unknown",
      },
      { status: 200 }
    );
  }
}
