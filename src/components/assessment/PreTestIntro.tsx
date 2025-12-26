"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function PreTestIntro({
  open,
  canResume,
  onStart,
  onResume,
  onRestart,
  className,
}: {
  open: boolean;
  canResume: boolean;
  onStart: () => void;
  onResume?: () => void;
  onRestart?: () => void;
  className?: string;
}) {
  const [agree, setAgree] = React.useState(false);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pretest-title"
      className={cn(
        "fixed inset-0 z-40 flex items-center justify-center",
        "bg-[rgba(0,0,0,0.45)] backdrop-blur-sm",
        className
      )}
    >
      <div className="mx-4 w-full max-w-3xl rounded-3xl border border-gray-200 bg-white shadow-2xl">
        <div className="grid gap-0 md:grid-cols-[1fr]">
          <div className="p-6 md:p-8">
            <h1
              id="pretest-title"
              className="text-2xl md:text-3xl font-semibold tracking-tight"
            >
              Тест на определение уровня
            </h1>
            <p className="mt-2 text-gray-600">
              Длительность: <b>≈ 1 час</b>. 100 вопросов (A1–C1). Результат
              поможет подобрать подходящую программу.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                  1
                </span>
                <p className="text-gray-700">
                  Отвечайте честно: <b>пропуск недоступен</b>, для каждого
                  задания нужен ответ.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                  2
                </span>
                <p className="text-gray-700">
                  Один вопрос на экран. Для вопросов с вводом — кнопка
                  «Проверить».
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                  3
                </span>
                <p className="text-gray-700">
                  Прогресс сохраняется автоматически: <b>авторизованные</b> — на
                  сервере, <b>гости</b> — временно в браузере.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                  4
                </span>
                <p className="text-gray-700">
                  Можно сделать паузу и вернуться позже — продолжите с того же
                  места.
                </p>
              </div>
            </div>

            <label className="mt-6 flex items-center gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                aria-describedby="agree-desc"
              />
              <span id="agree-desc">
                Я готов(а) начать и понимаю правила теста
              </span>
            </label>

            <div className="mt-6 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:justify-between">
              <Link
                href="/learn"
                prefetch={false}
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
              >
                Вернуться на /learn
              </Link>

              <div className="flex items-center gap-3">
                {canResume ? (
                  <>
                    {onRestart && (
                      <button
                        onClick={onRestart}
                        className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Начать сначала
                      </button>
                    )}
                    {onResume && (
                      <button
                        onClick={onResume}
                        className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-black/90"
                      >
                        Продолжить тест
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    onClick={onStart}
                    disabled={!agree}
                    aria-disabled={!agree}
                    className={cn(
                      "rounded-full px-5 py-2.5 text-sm font-medium",
                      agree
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "bg-indigo-200 text-white cursor-not-allowed"
                    )}
                  >
                    Начать тест
                  </button>
                )}
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Совет: выделите спокойный час, подготовьте наушники (для аудио в
              будущих заданиях) и выключите отвлекающие уведомления.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
