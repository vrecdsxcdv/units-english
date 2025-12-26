"use client";

import * as React from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import RecommendationCards from "@/components/learn/RecommendationCards";
import { BookOpen, Layers, BadgeCheck, Sparkles } from "lucide-react";

type CEFR = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

type PlacementState = {
  ok: boolean;
  result?: { level: CEFR; score: number };
  finished?: boolean;
  progress?: { index: number; total: number };
};

const fetcher = (url: string) =>
  fetch(url, { credentials: "include", cache: "no-store" }).then((r) => {
    if (!r.ok) throw new Error("STATE_FAIL");
    return r.json();
  });

function PathCard({
  icon: Icon,
  title,
  description,
  onClick,
  buttonText,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick: () => void;
  buttonText: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-indigo-600" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600 text-sm leading-relaxed">{description}</p>
      <div className="mt-5">
        <button
          onClick={onClick}
          className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
}

export default function LearnPage() {
  const router = useRouter();
  const { status } = useSession();
  const isAuth = status === "authenticated";

  const { data, error, isLoading, mutate } = useSWR<PlacementState>(
    "/api/assessment/state",
    fetcher,
    {
      revalidateOnFocus: true,
      revalidateIfStale: true,
      revalidateOnReconnect: true,
    }
  );

  const done = !!(data?.finished || data?.result);
  const hasProgress =
    !done && !!data?.progress && typeof data.progress.index === "number";
  const beforeStart = !done && !hasProgress;

  // Скелетон/загрузка
  if (isLoading) {
    return (
      <div className="mx-auto max-w-3xl p-6">
        <div className="animate-pulse rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <div className="h-6 w-1/3 bg-slate-200 rounded mb-4" />
          <div className="h-4 w-2/3 bg-slate-200 rounded mb-2" />
          <div className="h-4 w-1/2 bg-slate-200 rounded" />
        </div>
      </div>
    );
  }

  // Ошибка загрузки
  if (error) {
    return (
      <div className="mx-auto max-w-3xl p-6">
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">
            Не удалось загрузить состояние
          </h2>
          <p className="mt-2 text-slate-600">
            Произошла ошибка при получении прогресса. Попробуйте обновить
            страницу. Если проблема сохраняется — начните тест заново.
          </p>
          <div className="mt-4 flex gap-3">
            <button
              className="rounded-full h-11 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
              onClick={() => router.push("/assessment")}
            >
              Перейти к тесту
            </button>
            <button
              className="rounded-full h-11 px-6 border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium transition-colors"
              onClick={() => mutate()}
            >
              Обновить
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ✅ После завершения теста
  if (done) {
    const level = data?.result?.level as CEFR;
    const score =
      typeof data?.result?.score === "number" ? data!.result!.score : 0;
    return (
      <div className="mx-auto max-w-4xl p-6 bg-white min-h-screen">
        <RecommendationCards level={level} score={score} />
      </div>
    );
  }

  // ▶️ Тест начат, но не завершён
  if (hasProgress) {
    const idx = data!.progress!.index + 1;
    const total = data!.progress!.total ?? 100;
    return (
      <div className="mx-auto max-w-3xl p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
        >
          <h1 className="text-2xl font-bold text-slate-800">
            Продолжить тест
          </h1>
          <p className="mt-2 text-slate-600">
            Вы остановились на вопросе {idx} из {total}.
          </p>
          <div className="mt-6">
            <button
              onClick={() => router.push("/assessment")}
              className="rounded-full h-11 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
            >
              Перейти к тесту
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // 🆕 До начала
  if (beforeStart) {
    return (
      <div
        className="min-h-[100svh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/wmremove-transformed-3.jpeg')" }}
      >
        {/* Hero Section */}
        <section className="relative px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/40"
                style={{
                  background: "rgba(255,255,255,0.25)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.4)",
                }}
              >
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <span className="text-base font-semibold text-slate-800">
                  Units English
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none mb-6"
                style={{
                  textShadow: "0 4px 30px rgba(0,0,0,0.4)",
                  letterSpacing: "-0.02em",
                }}
              >
                {isAuth
                  ? "Определите свой уровень"
                  : "Выберите свой путь обучения"}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-slate-700 max-w-2xl mx-auto"
              >
                {isAuth
                  ? "Пройдите тест на определение уровня, чтобы получить персональные рекомендации"
                  : "Повторяйте темы, проходите блоки или определите уровень"}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              >
                <button
                  onClick={() => router.push("/assessment")}
                  className="h-14 rounded-full px-8 text-base font-semibold text-white transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                    boxShadow: "0 10px 32px rgba(99,102,241,0.4)",
                  }}
                >
                  Начать тест
                </button>
                {!isAuth && (
                  <button
                    onClick={() => router.push("/catalog")}
                    className="h-14 rounded-full px-8 text-base font-semibold text-slate-800 transition-all hover:scale-105 border border-white/40"
                    style={{
                      background: "rgba(255,255,255,0.3)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.5)",
                    }}
                  >
                    Открыть каталог
                  </button>
                )}
              </motion.div>
            </div>

            {/* Cards with icons */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={() => router.push("/topics")}
                className="cursor-pointer rounded-3xl p-8 border border-white/40 transition-all"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.5)",
                }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-indigo-100">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Учиться по темам</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Выберите интересующую тему и начните обучение с любого шага
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={() => router.push("/catalog?mode=blocks")}
                className="cursor-pointer rounded-3xl p-8 border border-white/40 transition-all"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.5)",
                }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-purple-100">
                  <Layers className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Обучение по блокам</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Проходите курс структурированными блоками с чёткими целями
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={() => router.push("/assessment")}
                className="cursor-pointer rounded-3xl p-8 border border-white/40 transition-all"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.5)",
                }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-green-100">
                  <BadgeCheck className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Пройти тест уровня</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Узнайте свой текущий уровень, чтобы подобрать подходящий путь
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Нейтральный фолбек
  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800">Учёба</h1>
        <p className="mt-2 text-slate-600">
          Выберите, с чего начать: пройти тест уровня или открыть темы.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="/assessment"
            className="rounded-full h-11 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium inline-flex items-center transition-colors"
          >
            Пройти тест уровня
          </a>
          <a
            href="/catalog#topics"
            className="rounded-full h-11 px-6 border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium inline-flex items-center transition-colors"
          >
            Открыть темы
          </a>
        </div>
      </div>
    </div>
  );
}
