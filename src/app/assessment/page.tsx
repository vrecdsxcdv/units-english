"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import GlassShell from "@/components/assessment/GlassShell";
import GlassCard from "@/components/assessment/GlassCard";
import ProgressPill from "@/components/assessment/ProgressPill";
import CollapsibleProgress from "@/components/assessment/CollapsibleProgress";
import PreTestIntro from "@/components/assessment/PreTestIntro";
import QuestionCard, {
  PublicQuestion,
} from "@/components/assessment/QuestionCard";
import { getSectionMetaByIndex } from "@/lib/placement/sections";

type PublicItem = {
  id: string;
  type: "mcq" | "gap" | "reading_mcq" | "listening_matching";
  question?: string;
  text?: string;
  passage?: string;
  choices?: string[];
  prompt?: string;
  weight?: number;
  audioUrl?: string;
  instruction?: string;
  speakers?: number[];
  options?: { label: string; text: string }[];
};

type State = {
  totalIndex: number;
  totalScore: number;
};

const LOCAL_KEY = "units-placement-100";

// Максимальный балл: 148 (128 + 20 за listening)
// A1: 0-15% (0-22)
// A2: 16-35% (23-52)
// B1: 36-55% (53-81)
// B2: 56-75% (82-111)
// C1: 76%+ (112+)
function computeLevel(score: number): string {
  const percent = (score / 148) * 100;
  if (percent >= 76) return "C1";
  if (percent >= 56) return "B2";
  if (percent >= 36) return "B1";
  if (percent >= 16) return "A2";
  return "A1";
}

function computeAccuracy(score: number): number {
  return Math.round((score / 148) * 100);
}

export default function AssessmentPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<PublicItem[]>([]);
  const [index, setIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [introOpen, setIntroOpen] = useState(false);
  const [answered, setAnswered] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState<{ active: boolean; daysLeft: number; nextAvailable: string } | null>(null);

  const total = items.length;
  const current = items[index];
  const isFinished = index >= total;
  const index1 = index + 1; // 1-based index for section mapping
  const section = getSectionMetaByIndex(index1);

  // Загрузка данных при монтировании
  useEffect(() => {
    async function loadData() {
      try {
        setError(null);

        // Загружаем вопросы
        const questionsRes = await fetch("/api/assessment/questions");
        const questionsData = await questionsRes.json();

        if (questionsData.error) {
          throw new Error(questionsData.reason || "Failed to load questions");
        }

        setItems(questionsData.items || []);

        // Загружаем состояние
        const stateRes = await fetch("/api/assessment/state");
        const stateData = await stateRes.json();

        if (stateData.error) {
          throw new Error(stateData.reason || "Failed to load state");
        }

        if (stateData.auth && stateData.state) {
          // Авторизованный пользователь - используем данные с сервера
          setIndex(stateData.state.totalIndex || 0);
          setTotalScore(stateData.state.totalScore || 0);
          // Загружаем информацию о кулдауне
          if (stateData.cooldown) {
            setCooldown(stateData.cooldown);
          }
        } else {
          // Гость - загружаем из localStorage
          const localData = localStorage.getItem(LOCAL_KEY);
          if (localData) {
            try {
              const parsed = JSON.parse(localData);
              setIndex(parsed.totalIndex || 0);
              setTotalScore(parsed.totalScore || 0);
              setAnswered(parsed.answered || {});
            } catch (e) {
              console.warn("Failed to parse localStorage data:", e);
            }
          }
        }

        // Показываем модалку только один раз за сессию страницы
        const introShown = sessionStorage.getItem("placementIntroShown");
        if (!introShown) {
          setIntroOpen(true);
        }
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to load data");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Сохранение прогресса в localStorage для гостей
  useEffect(() => {
    if (!session && total > 0) {
      const data = {
        totalIndex: index,
        totalScore,
        answered,
      };
      localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
    }
  }, [index, totalScore, answered, session, total]);

  const handleStart = () => {
    setIntroOpen(false);
    sessionStorage.setItem("placementIntroShown", "1");
    if (!session) {
      // Для гостей сбрасываем локальный прогресс
      setIndex(0);
      setTotalScore(0);
      setAnswered({});
      localStorage.removeItem(LOCAL_KEY);
    }
  };

  const handleContinue = () => {
    setIntroOpen(false);
    sessionStorage.setItem("placementIntroShown", "1");
  };

  const handleRestart = async () => {
    if (session) {
      // Для авторизованных пользователей сбрасываем через API
      try {
        const res = await fetch("/api/assessment/reset", { method: "POST" });
        const data = await res.json();

        if (data.error === "COOLDOWN") {
          // Установить кулдаун и показать сообщение
          setCooldown({
            active: true,
            daysLeft: data.daysLeft,
            nextAvailable: data.nextAvailable,
          });
          return; // Не сбрасываем прогресс
        }

        setIndex(0);
        setTotalScore(0);
        setAnswered({});
        setCooldown(null);
      } catch (e) {
        console.error("Failed to reset progress:", e);
      }
    } else {
      // Для гостей сбрасываем локально
      setIndex(0);
      setTotalScore(0);
      setAnswered({});
      localStorage.removeItem(LOCAL_KEY);
    }
    setIntroOpen(false);
    sessionStorage.setItem("placementIntroShown", "1");
  };

  const handleAnswer = async (payload: Record<string, unknown>) => {
    if (!current || submitting) return;

    setSubmitting(true);

    try {
      let requestPayload;

      if (current.type === "gap") {
        requestPayload = {
          questionId: current.id,
          payload: { type: "gap", user: payload.user },
        };
      } else if (current.type === "listening_matching") {
        requestPayload = {
          questionId: current.id,
          payload: { type: "listening_matching", matching: payload.matching },
        };
      } else {
        requestPayload = {
          questionId: current.id,
          payload: { type: current.type, chosen: payload.chosen },
        };
      }

      const res = await fetch("/api/assessment/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestPayload),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.reason || "Failed to submit answer");
      }

      // Обновляем состояние
      setAnswered((prev) => ({
        ...prev,
        [current.id]: payload.user || payload.chosen,
      }));

      if (session && data.state) {
        // Авторизованный пользователь - используем данные с сервера
        setIndex(data.state.totalIndex || index + 1);
        setTotalScore(
          data.state.totalScore || totalScore + (data.correct ? data.weight : 0)
        );
      } else {
        // Гость - обновляем локально
        setIndex((prev) => prev + 1);
        setTotalScore((prev) => prev + (data.correct ? data.weight : 0));
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to submit answer");
    } finally {
      setSubmitting(false);
    }
  };

  const handleFinish = async () => {
    const level = computeLevel(totalScore);
    const accuracy = computeAccuracy(totalScore);

    if (session) {
      // Для авторизованных пользователей сохраняем результат на сервере
      try {
        await fetch("/api/assessment/finish", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            score: totalScore,
            level,
            rec: { accuracy, timestamp: new Date().toISOString() },
          }),
        });
      } catch (e) {
        console.error("Failed to save result:", e);
      }
    } else {
      // Сохраняем результат для гостей
      localStorage.setItem(
        "placementLast",
        JSON.stringify({ level, score: totalScore })
      );
    }

    // Переходим на страницу результатов
    router.replace("/learn");
  };

  if (loading) {
    return (
      <GlassShell>
        <GlassCard>
          <div className="text-gray-800">Загрузка…</div>
        </GlassCard>
      </GlassShell>
    );
  }

  if (error) {
    return (
      <GlassShell>
        <GlassCard>
          <div className="text-red-600">Ошибка: {error}</div>
        </GlassCard>
      </GlassShell>
    );
  }

  if (total === 0) {
    return (
      <GlassShell>
        <GlassCard>
          <div className="text-gray-800">Вопросы не найдены</div>
        </GlassCard>
      </GlassShell>
    );
  }

  // Модалка введения
  if (introOpen) {
    return (
      <PreTestIntro
        open={introOpen}
        onStart={handleStart}
        onContinue={handleContinue}
        onRestart={handleRestart}
        hasProgress={index > 0}
        isAuthenticated={!!session}
      />
    );
  }

  // Результат теста
  if (isFinished) {
    const level = computeLevel(totalScore);
    const accuracy = computeAccuracy(totalScore);

    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          {/* Celebration Header */}
          <div className="text-center mb-8">
            <div className="text-8xl mb-4 animate-bounce">🎉</div>
            <h1 className="text-5xl font-bold text-gray-800 mb-3">
              Поздравляем!
            </h1>
            <p className="text-xl text-gray-600">
              Вы успешно завершили тест на определение уровня
            </p>
          </div>

          {/* Main Result Card */}
          <div className="
            rounded-3xl p-8 mb-6
            bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80
            backdrop-blur-xl
            border-2 border-white/60
            shadow-xl shadow-blue-100/50
          ">
            {/* Circular Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {/* Level Circle - Main */}
              <div className="flex flex-col items-center">
                <div className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide">
                  Ваш уровень
                </div>
                <div className="
                  w-40 h-40 rounded-full
                  bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500
                  border-4 border-white
                  flex flex-col items-center justify-center
                  shadow-2xl shadow-indigo-300/50
                  relative
                ">
                  <span className="text-6xl font-bold text-white">
                    {level}
                  </span>
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-green-400 border-4 border-white flex items-center justify-center shadow-lg">
                    <span className="text-2xl">✓</span>
                  </div>
                </div>
              </div>

              {/* Accuracy Circle */}
              <div className="flex flex-col items-center">
                <div className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide">
                  Точность
                </div>
                <div className="
                  w-32 h-32 rounded-full
                  bg-white/80 backdrop-blur-sm
                  border-2 border-green-200
                  flex flex-col items-center justify-center
                  shadow-lg
                ">
                  <span className="text-3xl font-bold text-green-600">
                    {accuracy}%
                  </span>
                </div>
              </div>

              {/* Score Circle */}
              <div className="flex flex-col items-center">
                <div className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide">
                  Баллы
                </div>
                <div className="
                  w-32 h-32 rounded-full
                  bg-white/80 backdrop-blur-sm
                  border-2 border-purple-200
                  flex flex-col items-center justify-center
                  shadow-lg
                ">
                  <span className="text-3xl font-bold text-purple-600">
                    {totalScore}
                  </span>
                  <span className="text-sm text-gray-500">из 148</span>
                </div>
              </div>
            </div>

            {/* Level Description */}
            <div className="text-center p-6 rounded-2xl bg-white/60 border-2 border-indigo-200/50">
              <p className="text-lg text-gray-700">
                {level === "C1" && "Отличный результат! Вы владеете языком на продвинутом уровне."}
                {level === "B2" && "Превосходно! У вас уровень выше среднего, вы можете свободно общаться."}
                {level === "B1" && "Хороший результат! Вы владеете языком на среднем уровне."}
                {level === "A2" && "Вы на правильном пути! Базовые знания есть, продолжайте изучение."}
                {level === "A1" && "Отличное начало! Мы поможем вам заложить крепкую основу."}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleFinish}
              className="
                px-8 py-4 rounded-2xl text-lg font-bold
                bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600
                text-white shadow-xl
                transition-all duration-200 hover:scale-105
                flex items-center justify-center gap-3
              "
            >
              <span>🚀</span>
              Начать обучение
            </button>
            {cooldown?.active ? (
              <div className="px-8 py-4 rounded-2xl text-lg font-medium bg-gray-100 border-2 border-gray-200 text-gray-500 flex items-center justify-center gap-3">
                <span>⏳</span>
                Повторный тест через {cooldown.daysLeft} {cooldown.daysLeft === 1 ? "день" : cooldown.daysLeft < 5 ? "дня" : "дней"}
              </div>
            ) : (
              <button
                onClick={handleRestart}
                className="
                  px-8 py-4 rounded-2xl text-lg font-bold
                  bg-white/80 backdrop-blur-sm
                  border-2 border-gray-200
                  text-gray-700
                  hover:bg-gray-50 hover:border-gray-300
                  transition-all duration-200 hover:scale-105
                  flex items-center justify-center gap-3
                "
              >
                <span>🔄</span>
                Пройти заново
              </button>
            )}
          </div>

          {/* Next Steps */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-yellow-50/80 via-orange-50/60 to-pink-50/80 backdrop-blur-xl border-2 border-white/60 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>💡</span>
              Что дальше?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-lg">✓</span>
                <span>Получите персонализированный план обучения на основе вашего уровня</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">✓</span>
                <span>Проходите интерактивные уроки и упражнения</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">✓</span>
                <span>Отслеживайте свой прогресс в личном кабинете</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Вопрос
  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {/* Верхний прогресс */}
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-600">
          Вопрос {index1} / {total}
        </div>
        <div className="h-2 flex-1 mx-4 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-violet-600 transition-[width] duration-300"
            style={{ width: `${(index / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Заголовок секции */}
      <div className="mb-4 text-xl font-semibold">{section.title}</div>

      <div className="rounded-2xl bg-white/70 p-6 shadow-sm backdrop-blur">
        <QuestionCard
          key={current.id}
          q={current as PublicQuestion}
          disabled={submitting}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}
