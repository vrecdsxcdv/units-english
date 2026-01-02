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

type SkillsData = {
  skills: {
    grammar: number;
    vocabulary: number;
    pronunciation: number;
    listening: number;
    speaking: number;
    slang: number;
    wordFormation: number;
    fluency: number;
    writing: number;
    comprehension: number;
  };
  lastAssessedAt: string | null;
};

// Skill labels in Russian
const skillLabels: { key: keyof SkillsData["skills"]; label: string; shortLabel: string }[] = [
  { key: "grammar", label: "Грамматика", shortLabel: "Грам." },
  { key: "vocabulary", label: "Словарный запас", shortLabel: "Слова" },
  { key: "pronunciation", label: "Произношение", shortLabel: "Произн." },
  { key: "listening", label: "Аудирование", shortLabel: "Аудир." },
  { key: "speaking", label: "Разговорный", shortLabel: "Разг." },
  { key: "slang", label: "Сленг", shortLabel: "Сленг" },
  { key: "wordFormation", label: "Словообразование", shortLabel: "Словообр." },
  { key: "fluency", label: "Беглость", shortLabel: "Бегл." },
  { key: "writing", label: "Письмо", shortLabel: "Письмо" },
  { key: "comprehension", label: "Понимание", shortLabel: "Поним." },
];

// Radar Chart Component
function RadarChart({ skills }: { skills: SkillsData["skills"] }) {
  const size = 280;
  const center = size / 2;
  const maxRadius = 100;
  const levels = 5;
  const numSkills = skillLabels.length;
  const angleStep = (2 * Math.PI) / numSkills;

  // Calculate point positions for a given radius
  const getPoint = (index: number, radius: number) => {
    const angle = angleStep * index - Math.PI / 2;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  // Generate grid lines
  const gridLines = [];
  for (let level = 1; level <= levels; level++) {
    const radius = (maxRadius / levels) * level;
    const points = skillLabels.map((_, i) => {
      const p = getPoint(i, radius);
      return `${p.x},${p.y}`;
    }).join(" ");
    gridLines.push(
      <polygon
        key={level}
        points={points}
        fill="none"
        stroke="rgba(0,0,0,0.08)"
        strokeWidth="1"
      />
    );
  }

  // Generate axis lines
  const axisLines = skillLabels.map((_, i) => {
    const end = getPoint(i, maxRadius);
    return (
      <line
        key={i}
        x1={center}
        y1={center}
        x2={end.x}
        y2={end.y}
        stroke="rgba(0,0,0,0.05)"
        strokeWidth="1"
      />
    );
  });

  // Generate data polygon
  const dataPoints = skillLabels.map((skill, i) => {
    const value = skills[skill.key];
    const radius = maxRadius * value;
    const p = getPoint(i, radius);
    return `${p.x},${p.y}`;
  }).join(" ");

  // Generate labels
  const labels = skillLabels.map((skill, i) => {
    const p = getPoint(i, maxRadius + 25);
    const value = Math.round(skills[skill.key] * 100);
    return (
      <g key={i}>
        <text
          x={p.x}
          y={p.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#1d1d1f"
          fontSize="10"
          fontWeight="500"
        >
          {skill.shortLabel}
        </text>
        <text
          x={p.x}
          y={p.y + 12}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#86868b"
          fontSize="9"
        >
          {value}%
        </text>
      </g>
    );
  });

  // Generate data points (dots)
  const dataPointDots = skillLabels.map((skill, i) => {
    const value = skills[skill.key];
    const radius = maxRadius * value;
    const p = getPoint(i, radius);
    return (
      <circle
        key={i}
        cx={p.x}
        cy={p.y}
        r="4"
        fill="url(#pointGradient)"
        stroke="white"
        strokeWidth="2"
      />
    );
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      <defs>
        <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.6)" />
          <stop offset="100%" stopColor="rgba(139,92,246,0.6)" />
        </linearGradient>
        <linearGradient id="radarStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="pointGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>

      {/* Grid */}
      {gridLines}
      {axisLines}

      {/* Data area */}
      <polygon
        points={dataPoints}
        fill="url(#radarGradient)"
        stroke="url(#radarStroke)"
        strokeWidth="2"
        style={{ filter: "drop-shadow(0 0 10px rgba(59,130,246,0.3))" }}
      />

      {/* Data points */}
      {dataPointDots}

      {/* Labels */}
      {labels}
    </svg>
  );
}

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

  const { data: skillsData } = useSWR<SkillsData>(
    session?.user ? "/api/user/skills" : null,
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

  // Calculate average skill level
  const avgSkill = skillsData?.skills
    ? Math.round(
        (Object.values(skillsData.skills).reduce((a, b) => a + b, 0) / 10) * 100
      )
    : 0;

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1d1d1f]">
              Личный кабинет
            </h1>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-[#86868b] hover:text-[#1d1d1f] transition-all hover:scale-105 flex items-center gap-2 bg-white border border-[#d2d2d7]"
            >
              <LogoutIcon />
              Выйти
            </button>
          </div>

          {/* Profile Card */}
          <div className="rounded-3xl p-8 bg-white shadow-sm border border-[#d2d2d7]/50">
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
                <h2 className="text-2xl font-bold text-[#1d1d1f] mb-1">
                  {displayName}
                </h2>
                <p className="text-[#86868b]">{email}</p>
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
              className="p-6 rounded-2xl text-left transition-all hover:scale-105 bg-white border border-[#d2d2d7]/50 shadow-sm"
            >
              <div className="text-3xl mb-3">✅</div>
              <div className="text-lg font-bold text-[#1d1d1f]">Тест уровня</div>
              <div className="text-sm text-[#86868b]">Проверьте знания</div>
            </button>

            <button
              onClick={() => router.push("/tutor")}
              className="p-6 rounded-2xl text-left transition-all hover:scale-105 bg-white border border-[#d2d2d7]/50 shadow-sm"
            >
              <div className="text-3xl mb-3">🤖</div>
              <div className="text-lg font-bold text-[#1d1d1f]">AI Репетитор</div>
              <div className="text-sm text-[#86868b]">Персональные занятия</div>
            </button>
          </div>

          {/* Progress Section */}
          <div className="rounded-3xl p-8 bg-white shadow-sm border border-[#d2d2d7]/50">
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-6">
              Ваш прогресс
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#86868b]">Пройдено уроков</span>
                  <span className="text-[#1d1d1f] font-medium">
                    {stats?.completedLessons || 0} / {stats?.totalLessons || 0}
                  </span>
                </div>
                <div className="h-3 rounded-full overflow-hidden bg-[#f5f5f7]">
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

          {/* Skills Radar Chart */}
          <div className="rounded-3xl p-8 bg-white shadow-sm border border-[#d2d2d7]/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#1d1d1f]">
                Навыки
              </h3>
              <div className="px-4 py-2 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/50">
                <span className="text-[#86868b] text-sm">Средний уровень: </span>
                <span className="text-[#1d1d1f] font-bold">{avgSkill}%</span>
              </div>
            </div>

            {skillsData?.skills ? (
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Radar Chart */}
                <div className="flex-shrink-0">
                  <RadarChart skills={skillsData.skills} />
                </div>

                {/* Skills List */}
                <div className="flex-1 w-full">
                  <div className="grid grid-cols-2 gap-3">
                    {skillLabels.map((skill) => {
                      const value = skillsData.skills[skill.key];
                      const percent = Math.round(value * 100);
                      return (
                        <div key={skill.key} className="flex items-center gap-3">
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-[#86868b]">{skill.label}</span>
                              <span className="text-[#1d1d1f] font-medium">{percent}%</span>
                            </div>
                            <div className="h-2 rounded-full overflow-hidden bg-[#f5f5f7]">
                              <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                  width: `${percent}%`,
                                  background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center py-12">
                <div className="text-[#86868b] text-center">
                  <div className="text-4xl mb-3">📊</div>
                  <p>Загрузка данных о навыках...</p>
                </div>
              </div>
            )}
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
