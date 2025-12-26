"use client";

import Link from "next/link";
import { getTopicsByLevel, getLevelTitle } from "@/lib/topics";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type ProgressData = {
  level: string;
  totalTopics: number;
  completedTopics: number;
  percentage: number;
  completedIds: string[];
};

type Props = { activeTopic?: string; level?: string };

export default function Sidebar({ activeTopic = "", level = "a1" }: Props) {
  const topics = getTopicsByLevel(level);
  const levelTitle = getLevelTitle(level);

  const { data: progress } = useSWR<ProgressData>(
    `/api/progress/${level}`,
    fetcher,
    {
      revalidateOnFocus: true,
      revalidateOnMount: true,
      dedupingInterval: 0,
      refreshInterval: 1000,
      revalidateOnReconnect: true,
    }
  );

  const completedIds = progress?.completedIds || [];
  const percentage = progress?.percentage || 0;

  // Определяем цвет градиента в зависимости от уровня
  const getGradientClasses = () => {
    switch (level) {
      case "b1":
        return "from-indigo-50/80 via-sky-50/60 to-white/60";
      case "c2":
        return "from-indigo-50/80 via-sky-50/60 to-white/60";
      default:
        return "from-indigo-50/80 via-sky-50/60 to-white/60";
    }
  };

  const getActiveClasses = () => {
    switch (level) {
      case "b1":
        return "bg-indigo-100 text-indigo-800 font-semibold border border-indigo-300";
      case "c2":
        return "bg-indigo-100 text-indigo-800 font-semibold border border-indigo-300";
      default:
        return "bg-indigo-100 text-indigo-800 font-semibold border border-indigo-300";
    }
  };

  const getProgressColor = () => {
    return "bg-gradient-to-r from-green-400 to-emerald-500";
  };

  return (
    <aside
      className={`md:sticky md:top-0 md:h-screen bg-gradient-to-b ${getGradientClasses()} backdrop-blur-sm border-r border-zinc-200 md:w-64 flex-shrink-0 flex flex-col`}
    >
      <div className="px-4 py-5 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="text-[11px] uppercase tracking-wider text-zinc-600">
            {levelTitle}
          </div>
          <div className="text-[11px] font-medium text-emerald-600">
            {percentage}%
          </div>
        </div>
        <div className="mt-2 h-2 rounded-full bg-zinc-200/80 overflow-hidden">
          <div
            className={`h-2 rounded-full ${getProgressColor()} transition-all duration-500`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {progress && (
          <div className="mt-1 text-[10px] text-zinc-500">
            {progress.completedTopics} / {progress.totalTopics} тем
          </div>
        )}
      </div>

      <nav className="space-y-1 px-4 pb-5 overflow-y-auto flex-1">
        {topics.map((topic, idx) => {
          const isCompleted = completedIds.includes(topic.id);
          return (
            <Link
              key={topic.id}
              href={`/blocks/${level}?t=${topic.id}&s=1`}
              className={`w-full text-left rounded-lg px-3 py-2 text-[15px] transition block relative ${
                activeTopic === topic.id
                  ? getActiveClasses()
                  : isCompleted
                  ? "hover:bg-white/40 text-zinc-700 border border-emerald-200 bg-emerald-50/50"
                  : "hover:bg-white/40 text-zinc-700 border border-transparent"
              }`}
            >
              <span className="mr-2 tabular-nums text-zinc-500">{idx + 1}.</span>
              {topic.title}
              {isCompleted && (
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-emerald-500">
                  ✓
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
