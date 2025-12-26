"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { useEffect } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type ProgressStats = {
  level: string | null;
  testScore: number | null;
  testAccuracy: number | null;
  testCompleted: boolean;
  completedLessons: number;
  totalLessons: number;
  monthProgress: number;
  streak: number;
  todayCompleted: boolean;
};

type NextLesson = {
  level: string;
  topicId: string;
  title: string;
} | null;

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { data: stats } = useSWR<ProgressStats>(
    session?.user ? "/api/user/progress-stats" : null,
    fetcher
  );

  const { data: nextLessonData } = useSWR<{ nextLesson: NextLesson }>(
    session?.user ? "/api/user/next-lesson" : null,
    fetcher
  );

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-gray-500 text-lg font-light tracking-wide">
          Загрузка...
        </div>
      </div>
    );
  }

  if (!session?.user) return null;

  const displayName = session.user.name || session.user.email?.split("@")[0] || "User";
  const email = session.user.email || "";
  const initials = displayName.slice(0, 2).toUpperCase();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/IMAGE 2025-12-21 20:48:13.jpg')" }}
    >
      <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Header */}
          <div className="flex items-center justify-between">
            <h1
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              Личный кабинет
            </h1>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white/90 hover:text-white transition-all hover:scale-105 flex items-center gap-2"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <LogoutIcon />
              Выйти
            </button>
          </div>

          {/* Profile Card */}
          <div
            className="rounded-3xl p-8"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.8) 0%, rgba(139,92,246,0.8) 100%)",
                  boxShadow: "0 8px 24px rgba(59,130,246,0.3)",
                }}
              >
                {initials}
              </div>

              {/* User Info */}
              <div className="text-center md:text-left flex-1">
                <h2
                  className="text-2xl font-bold text-white mb-1"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
                >
                  {displayName}
                </h2>
                <p className="text-white/60">{email}</p>
              </div>

              {/* Stats Pills */}
              <div className="flex flex-wrap justify-center gap-3">
                <div
                  className="px-6 py-4 rounded-3xl text-center transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(99,102,241,0.9) 0%, rgba(79,70,229,0.9) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "2px solid rgba(255,255,255,0.5)",
                    boxShadow: "0 10px 32px rgba(99,102,241,0.5), inset 0 0 24px rgba(255,255,255,0.2)",
                  }}
                >
                  <div className="text-3xl font-bold text-white drop-shadow-lg tracking-wide">{stats?.level || "—"}</div>
                  <div className="text-xs font-semibold text-white/95 mt-1 uppercase tracking-wider">Уровень</div>
                </div>
                {stats?.testAccuracy !== null && stats?.testAccuracy !== undefined && (
                  <div
                    className="px-5 py-3 rounded-2xl text-center transition-all hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, rgba(16,185,129,0.85) 0%, rgba(5,150,105,0.85) 100%)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "2px solid rgba(255,255,255,0.4)",
                      boxShadow: "0 8px 24px rgba(16,185,129,0.4), inset 0 0 20px rgba(255,255,255,0.15)",
                    }}
                  >
                    <div className="text-xl font-bold text-white drop-shadow-lg">{stats.testAccuracy}%</div>
                    <div className="text-xs font-medium text-white/90 mt-0.5">Тест</div>
                  </div>
                )}
                <div
                  className="px-5 py-3 rounded-2xl text-center transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.85) 0%, rgba(37,99,235,0.85) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "2px solid rgba(255,255,255,0.4)",
                    boxShadow: "0 8px 24px rgba(59,130,246,0.4), inset 0 0 20px rgba(255,255,255,0.15)",
                  }}
                >
                  <div className="text-xl font-bold text-white drop-shadow-lg">{stats?.monthProgress || 0}%</div>
                  <div className="text-xs font-medium text-white/90 mt-0.5">За месяц</div>
                </div>
                <div
                  className="px-5 py-3 rounded-2xl text-center transition-all hover:scale-105"
                  style={{
                    background: stats?.todayCompleted
                      ? "linear-gradient(135deg, rgba(251,146,60,0.9) 0%, rgba(249,115,22,0.9) 100%)"
                      : "linear-gradient(135deg, rgba(148,163,184,0.85) 0%, rgba(100,116,139,0.85) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: `2px solid ${stats?.todayCompleted ? "rgba(251,146,60,0.6)" : "rgba(255,255,255,0.4)"}`,
                    boxShadow: stats?.todayCompleted
                      ? "0 8px 24px rgba(251,146,60,0.5), inset 0 0 20px rgba(255,255,255,0.2)"
                      : "0 8px 24px rgba(148,163,184,0.4), inset 0 0 20px rgba(255,255,255,0.15)",
                  }}
                >
                  <div className="text-xl font-bold text-white drop-shadow-lg flex items-center justify-center gap-1">
                    <span className="text-2xl">🔥</span> {stats?.streak || 0}
                  </div>
                  <div className="text-xs font-medium text-white/90 mt-0.5">Серия</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => {
                const nextLesson = nextLessonData?.nextLesson;
                if (nextLesson) {
                  router.push(`/blocks/${nextLesson.level}?topic=${nextLesson.topicId}`);
                } else {
                  router.push("/learn");
                }
              }}
              className="p-6 rounded-2xl text-left transition-all hover:scale-105 group"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.8) 0%, rgba(139,92,246,0.8) 100%)",
                boxShadow: "0 8px 32px rgba(59,130,246,0.3)",
              }}
            >
              <div className="text-3xl mb-3">📚</div>
              <div className="text-lg font-bold text-white">Продолжить</div>
              <div className="text-sm text-white/70">
                {nextLessonData?.nextLesson?.title || "Вернуться к урокам"}
              </div>
            </button>

            <button
              onClick={() => router.push("/assessment")}
              className="p-6 rounded-2xl text-left transition-all hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <div className="text-3xl mb-3">✅</div>
              <div className="text-lg font-bold text-white">Тест уровня</div>
              <div className="text-sm text-white/60">Проверьте знания</div>
            </button>

            <button
              onClick={() => router.push("/reviews")}
              className="p-6 rounded-2xl text-left transition-all hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <div className="text-3xl mb-3">⭐</div>
              <div className="text-lg font-bold text-white">Отзывы</div>
              <div className="text-sm text-white/60">Поделитесь опытом</div>
            </button>
          </div>

          {/* Progress Section */}
          <div
            className="rounded-3xl p-8"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <h3
              className="text-xl font-bold text-white mb-6"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
            >
              Ваш прогресс
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/80">Пройдено уроков</span>
                  <span className="text-white font-medium">
                    {stats?.completedLessons || 0} / {stats?.totalLessons || 0}
                  </span>
                </div>
                <div
                  className="h-3 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${stats?.totalLessons ? ((stats.completedLessons || 0) / stats.totalLessons) * 100 : 0}%`,
                      background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ============================================
// ICONS
// ============================================

function LogoutIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  );
}
