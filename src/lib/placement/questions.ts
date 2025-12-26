import fs from "node:fs/promises";
import path from "node:path";

export type Question = {
  id: string;
  type: "mcq" | "gap" | "reading_mcq" | "listening_mcq" | "listening_matching";
  question?: string;
  text?: string;
  passage?: string;
  audioUrl?: string; // для listening
  instruction?: string; // для listening_matching
  speakers?: number[]; // для listening_matching
  options?: { label: string; text: string }[]; // для listening_matching
  choices?: string[];
  answer?: string | Record<string, string>; // для mcq/reading_mcq/listening_mcq или matching
  solution?: string[]; // для gap
  weight?: number;
  category?: "reading" | "listening" | "grammar" | "vocabulary";
};

export type PublicQuestion = Omit<Question, "answer" | "solution">;

let questionsCache: Question[] | null = null;

export function getTotal() {
  return (questionsCache?.length ?? 0) || 28;
}

export async function loadQuestionsOnce(): Promise<Question[]> {
  if (questionsCache) return questionsCache;
  const file = path.join(
    process.cwd(),
    "content",
    "assessment",
    "placement-20.json"
  );
  const raw = await fs.readFile(file, "utf8");
  const list = JSON.parse(raw) as Question[];
  questionsCache = list.map((q) => ({ weight: 1, ...q }));
  return questionsCache;
}

export async function getPublicQuestionByIndex(
  idx: number
): Promise<PublicQuestion | null> {
  const items = await loadQuestionsOnce();
  if (idx < 0 || idx >= items.length) return null;
  const { answer, solution, ...pub } = items[idx];
  return pub;
}

export async function getQuestionById(id: string): Promise<Question | null> {
  const items = await loadQuestionsOnce();
  return items.find((q) => q.id === id) ?? null;
}

export function checkAnswer(
  q: Question,
  payload: any
): { correct: boolean; weight: number; partialScore?: number } {
  const weight = Number(q.weight ?? 1);
  if (q.type === "mcq" || q.type === "reading_mcq" || q.type === "listening_mcq") {
    const chosen = String(payload?.chosen ?? "");
    return { correct: chosen.trim() === String(q.answer ?? "").trim(), weight };
  }
  if (q.type === "gap") {
    const user = String(payload?.user ?? "")
      .trim()
      .toLowerCase();
    const sol = (q.solution ?? []).map((s) => s.trim().toLowerCase());
    return { correct: sol.includes(user), weight };
  }
  // Listening matching - частичная оценка
  if (q.type === "listening_matching") {
    const userMatching = payload?.matching as Record<string, string> | undefined;
    const correctAnswers = q.answer as Record<string, string>;

    if (!userMatching || !correctAnswers) {
      return { correct: false, weight: 0 };
    }

    // Считаем правильные ответы
    let correctCount = 0;
    const totalSpeakers = Object.keys(correctAnswers).length;

    for (const [speaker, correctAnswer] of Object.entries(correctAnswers)) {
      if (userMatching[speaker] === correctAnswer) {
        correctCount++;
      }
    }

    // Частичная оценка: 4 балла за каждый правильный ответ (5 спикеров × 4 = 20 баллов макс)
    const partialScore = correctCount * 4;
    const allCorrect = correctCount === totalSpeakers;

    return { correct: allCorrect, weight: partialScore, partialScore };
  }
  return { correct: false, weight };
}

// Alias для совместимости с API
export const getPublicByIndex = getPublicQuestionByIndex;

// Функция для проверки ответа по ID вопроса
export async function checkAnswerById(
  questionId: string,
  payload: any
): Promise<{ correct: boolean; weight: number }> {
  const question = await getQuestionById(questionId);
  if (!question) {
    return { correct: false, weight: 1 };
  }
  return checkAnswer(question, payload);
}
