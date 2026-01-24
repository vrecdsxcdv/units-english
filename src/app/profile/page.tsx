"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR, { mutate } from "swr";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

const skillLabels: { key: keyof SkillsData["skills"]; label: string; icon: string }[] = [
  { key: "grammar", label: "Грамматика", icon: "📝" },
  { key: "vocabulary", label: "Словарный запас", icon: "📚" },
  { key: "pronunciation", label: "Произношение", icon: "🗣️" },
  { key: "listening", label: "Аудирование", icon: "👂" },
  { key: "speaking", label: "Разговорный", icon: "💬" },
  { key: "slang", label: "Сленг", icon: "🔥" },
  { key: "wordFormation", label: "Словообразование", icon: "🧩" },
  { key: "fluency", label: "Беглость", icon: "⚡" },
  { key: "writing", label: "Письмо", icon: "✍️" },
  { key: "comprehension", label: "Понимание", icon: "🧠" },
];

// Circular Progress Ring
function ProgressRing({ progress, size = 120, strokeWidth = 8, color = "#8B5CF6" }: {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          strokeDasharray: circumference,
        }}
      />
    </svg>
  );
}

// Skill Bar with animation
function SkillBar({ skill, value, delay }: { skill: typeof skillLabels[0]; value: number; delay: number }) {
  const percent = Math.round(value * 100);
  const getColor = (p: number) => {
    if (p >= 80) return "from-emerald-400 to-emerald-500";
    if (p >= 60) return "from-blue-400 to-blue-500";
    if (p >= 40) return "from-violet-400 to-violet-500";
    return "from-orange-400 to-orange-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-gray-700 text-sm font-medium">{skill.label}</span>
        </div>
        <span className="text-gray-900 font-bold text-sm">{percent}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${getColor(percent)}`}
        />
      </div>
    </motion.div>
  );
}

export default function ProfilePage() {
  const { data: session, status, update: updateSession } = useSession();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

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

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Пожалуйста, выберите изображение");
      return;
    }

    // Validate file size (2MB max)
    if (file.size > 2 * 1024 * 1024) {
      alert("Изображение слишком большое (максимум 2MB)");
      return;
    }

    setUploading(true);

    try {
      // Convert to base64
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = event.target?.result as string;

        // Upload to server
        const response = await fetch("/api/user/avatar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: base64 }),
        });

        if (response.ok) {
          await updateSession();
        } else {
          alert("Не удалось загрузить аватар");
        }
        setUploading(false);
      };
      reader.readAsDataURL(file);
    } catch {
      alert("Ошибка при загрузке аватара");
      setUploading(false);
    }
  };

  const handleRemoveAvatar = async () => {
    if (!confirm("Удалить аватар?")) return;

    setUploading(true);
    try {
      const response = await fetch("/api/user/avatar", { method: "DELETE" });
      if (response.ok) {
        await updateSession();
      }
    } catch {
      alert("Ошибка при удалении аватара");
    }
    setUploading(false);
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 border-3 border-violet-200 border-t-violet-500 rounded-full"
        />
      </div>
    );
  }

  if (!session?.user) return null;

  const displayName = session.user.name || session.user.email?.split("@")[0] || "User";
  const email = session.user.email || "";
  const initials = displayName.slice(0, 2).toUpperCase();

  const avgSkill = skillsData?.skills
    ? Math.round(
        (Object.values(skillsData.skills).reduce((a, b) => a + b, 0) / 10) * 100
      )
    : 0;

  const lessonsProgress = stats?.totalLessons
    ? Math.round((stats.completedLessons / stats.totalLessons) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-violet-50">
      <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Личный кабинет
            </h1>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 transition-all flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 shadow-sm"
            >
              <LogoutIcon />
              Выйти
            </motion.button>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl p-8 bg-white shadow-sm border border-gray-100"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Avatar & Info */}
              <div className="flex flex-col sm:flex-row items-center gap-6 flex-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                  {session.user.image ? (
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={session.user.image}
                        alt="Avatar"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      {uploading && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
                      }}
                    >
                      {uploading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        initials
                      )}
                    </div>
                  )}
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2 rounded-full bg-white/90 hover:bg-white text-gray-700 mr-1"
                      title="Загрузить фото"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                    {session.user.image && (
                      <button
                        onClick={handleRemoveAvatar}
                        className="p-2 rounded-full bg-white/90 hover:bg-white text-red-500"
                        title="Удалить фото"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </div>
                </motion.div>

                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {displayName}
                  </h2>
                  <p className="text-gray-500 mb-3">{email}</p>
                  <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-700">
                      {stats?.level || "Новичок"}
                    </span>
                    {stats?.streak && stats.streak > 0 && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 flex items-center gap-1">
                        🔥 {stats.streak} дней
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Stats Circles */}
              <div className="flex items-center gap-6">
                <div className="text-center relative">
                  <ProgressRing progress={lessonsProgress} color="#8B5CF6" size={100} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-xl font-bold text-gray-900">{lessonsProgress}%</span>
                    <span className="text-[10px] text-gray-500">Уроки</span>
                  </div>
                </div>
                <div className="text-center relative">
                  <ProgressRing progress={avgSkill} color="#6366F1" size={100} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-xl font-bold text-gray-900">{avgSkill}%</span>
                    <span className="text-[10px] text-gray-500">Навыки</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: "📚",
                title: "Продолжить",
                subtitle: nextLessonData?.nextLesson?.title || "Вернуться к урокам",
                bg: "bg-gradient-to-br from-violet-500 to-indigo-600",
                textColor: "text-white",
                subtitleColor: "text-white/80",
                onClick: () => {
                  const nextLesson = nextLessonData?.nextLesson;
                  if (nextLesson) {
                    router.push(`/blocks/${nextLesson.level}?topic=${nextLesson.topicId}`);
                  } else {
                    router.push("/learn");
                  }
                },
              },
              {
                icon: "✅",
                title: "Тест уровня",
                subtitle: "Проверьте знания",
                bg: "bg-white border border-gray-200",
                textColor: "text-gray-900",
                subtitleColor: "text-gray-500",
                onClick: () => router.push("/assessment"),
              },
              {
                icon: "🤖",
                title: "AI Репетитор",
                subtitle: "Персональные занятия",
                bg: "bg-white border border-gray-200",
                textColor: "text-gray-900",
                subtitleColor: "text-gray-500",
                onClick: () => router.push("/tutor"),
              },
            ].map((action, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={action.onClick}
                className={`p-6 rounded-2xl text-left shadow-sm hover:shadow-md transition-all ${action.bg}`}
              >
                <div className="text-3xl mb-3">{action.icon}</div>
                <div className={`text-lg font-bold ${action.textColor}`}>{action.title}</div>
                <div className={`text-sm ${action.subtitleColor}`}>{action.subtitle}</div>
              </motion.button>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Пройдено", value: stats?.completedLessons || 0, suffix: "уроков", icon: "📖" },
              { label: "Точность", value: stats?.testAccuracy || 0, suffix: "%", icon: "🎯" },
              { label: "За месяц", value: stats?.monthProgress || 0, suffix: "%", icon: "📈" },
              { label: "Серия", value: stats?.streak || 0, suffix: "дней", icon: "🔥" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm text-center"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.suffix}</div>
                <div className="text-sm text-gray-600 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-3xl p-8 bg-white border border-gray-100 shadow-sm"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-900">Навыки</h3>
              <div className="px-4 py-2 rounded-full bg-violet-50 border border-violet-100">
                <span className="text-violet-600 text-sm font-medium">Средний: </span>
                <span className="text-violet-700 font-bold">{avgSkill}%</span>
              </div>
            </div>

            {skillsData?.skills ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {skillLabels.map((skill, i) => (
                  <SkillBar
                    key={skill.key}
                    skill={skill}
                    value={skillsData.skills[skill.key]}
                    delay={0.5 + i * 0.05}
                  />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center py-12">
                <div className="text-gray-400 text-center">
                  <div className="text-4xl mb-3">📊</div>
                  <p>Загрузка данных о навыках...</p>
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}

function LogoutIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  );
}
