"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { mutate } from "swr";
import { A1_TOPICS, B1_TOPICS, B2_TOPICS } from "@/lib/topics";

type Props = {
  currentTopic: string;
  isLastTopic: boolean;
  level?: string;
};

// Функция для отметки темы как пройденной с оптимистичным обновлением
async function markTopicComplete(level: string, topicId: string) {
  const today = new Date().toISOString().split("T")[0];

  // Оптимистичное обновление progress-stats
  mutate("/api/user/progress-stats", (currentData: Record<string, unknown> | undefined) => {
    if (!currentData) return currentData;
    return {
      ...currentData,
      completedLessons: (currentData.completedLessons as number || 0) + 1,
      monthProgress: Math.round(((currentData.completedLessons as number || 0) + 1) / (currentData.totalLessons as number || 150) * 100),
      streak: currentData.lastActiveDate === today
        ? currentData.streak
        : (currentData.streak as number || 0) + 1,
      todayCompleted: true,
    };
  }, false);

  // Оптимистичное обновление progress для уровня
  mutate(`/api/progress/${level}`, (currentData: Record<string, unknown> | undefined) => {
    if (!currentData) return { completedTopics: [topicId] };
    const topics = (currentData.completedTopics as string[]) || [];
    if (!topics.includes(topicId)) {
      return { ...currentData, completedTopics: [...topics, topicId] };
    }
    return currentData;
  }, false);

  try {
    const res = await fetch("/api/progress/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ level, topicId }),
    });

    if (res.ok) {
      // Ревалидируем данные с сервера в фоне
      mutate(`/api/progress/${level}`);
      mutate("/api/user/progress-stats");
      mutate("/api/user/streak");
    } else {
      // Откатываем оптимистичное обновление при ошибке
      mutate(`/api/progress/${level}`);
      mutate("/api/user/progress-stats");
    }

    return res.ok;
  } catch (error) {
    console.error("Error marking topic complete:", error);
    // Откатываем при ошибке
    mutate(`/api/progress/${level}`);
    mutate("/api/user/progress-stats");
    return false;
  }
}

// Получить список тем для уровня
function getTopicsForLevel(level: string) {
  switch (level) {
    case "a1":
      return A1_TOPICS;
    case "b1":
      return B1_TOPICS;
    case "c2":
      return B2_TOPICS;
    default:
      return A1_TOPICS;
  }
}

export default function CompletionButton({ currentTopic, isLastTopic, level = "a1" }: Props) {
  const topicOrder = getTopicsForLevel(level).map(t => t.id);
  const [showCongrats, setShowCongrats] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleComplete = async (nextUrl?: string) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      if (session?.user) {
        await markTopicComplete(level, currentTopic);
      }

      // Принудительно обновляем страницу для загрузки новых данных
      router.refresh();

      if (nextUrl) {
        // Небольшая задержка для обновления данных
        setTimeout(() => {
          router.push(nextUrl);
        }, 300);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getNextTopic = () => {
    const currentIndex = topicOrder.indexOf(currentTopic);
    if (currentIndex === -1 || currentIndex === topicOrder.length - 1) {
      return null;
    }
    return topicOrder[currentIndex + 1];
  };

  if (isLastTopic && currentTopic === "finaltest") {
    return (
      <>
        <button
          onClick={async () => {
            await handleComplete();
            setShowCongrats(true);
          }}
          disabled={isLoading}
          className="px-6 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition disabled:opacity-50"
        >
          {isLoading ? "Сохранение..." : "✓ Завершено"}
        </button>

        {showCongrats && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative">
              <button
                onClick={() => setShowCongrats(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
                title="Закрыть"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="text-center space-y-6">
                <div className="text-8xl">🎉</div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Поздравляем!
                </h2>
                <div className="space-y-3 text-lg text-gray-700">
                  <p>
                    <b>Вы огромный молодец!</b> 🌟
                  </p>
                  <p>
                    Вы успешно завершили{" "}
                    <b>весь курс английского языка уровня A1</b>!
                  </p>
                  <p>
                    Теперь вы можете уверенно общаться на английском языке на
                    базовом уровне <b>A1-A2</b>.
                  </p>
                  <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 mt-4">
                    <p className="text-green-900 font-semibold">
                      ✓ Вы освоили основы грамматики
                    </p>
                    <p className="text-green-900 font-semibold">
                      ✓ Изучили базовую лексику
                    </p>
                    <p className="text-green-900 font-semibold">
                      ✓ Можете строить простые предложения
                    </p>
                    <p className="text-green-900 font-semibold">
                      ✓ Понимаете основные времена
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/blocks/b1"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition"
                  >
                    🚀 Перейти к изучению B1
                  </Link>
                </div>

                <p className="text-sm text-gray-500 pt-2">
                  Продолжайте изучать английский и достигайте новых высот! 📚
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // For all other topics - navigate to next topic
  const nextTopic = getNextTopic();
  if (nextTopic) {
    return (
      <button
        onClick={() => handleComplete(`/blocks/${level}?t=${nextTopic}&s=1`)}
        disabled={isLoading}
        className="px-6 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition disabled:opacity-50"
      >
        {isLoading ? "Сохранение..." : "✓ Завершено"}
      </button>
    );
  }

  // Fallback for topics without next topic
  return (
    <button
      onClick={() => handleComplete()}
      disabled={isLoading}
      className="px-6 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition disabled:opacity-50"
    >
      {isLoading ? "Сохранение..." : "✓ Завершено"}
    </button>
  );
}
