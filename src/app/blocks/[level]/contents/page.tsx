"use client";

import { useParams, useSearchParams } from "next/navigation";
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

export default function ContentsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const level = (params.level as string) || "a1";
  const currentTopic = searchParams.get("current") || "";

  const topics = getTopicsByLevel(level);
  const levelTitle = getLevelTitle(level);

  const { data: progress } = useSWR<ProgressData>(
    `/api/progress/${level}`,
    fetcher
  );

  const completedIds = progress?.completedIds || [];
  const percentage = progress?.percentage || 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-zinc-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link
            href={`/blocks/${level}?t=${currentTopic || topics[0]?.id}&s=1`}
            className="p-2 -ml-2 rounded-lg hover:bg-zinc-100 text-zinc-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-zinc-900">Содержание</h1>
            <p className="text-xs text-zinc-500">{levelTitle}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-emerald-600">{percentage}%</div>
            <div className="text-xs text-zinc-500">
              {progress?.completedTopics || 0} / {progress?.totalTopics || topics.length}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-2 rounded-full bg-zinc-200 overflow-hidden">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Topics list */}
      <div className="p-4 space-y-2">
        {topics.map((topic, idx) => {
          const isCompleted = completedIds.includes(topic.id);
          const isActive = currentTopic === topic.id;

          return (
            <Link
              key={topic.id}
              href={`/blocks/${level}?t=${topic.id}&s=1`}
              className={`block rounded-xl p-4 transition ${
                isActive
                  ? "bg-indigo-50 border-2 border-indigo-300"
                  : isCompleted
                  ? "bg-emerald-50 border border-emerald-200"
                  : "bg-zinc-50 border border-zinc-200 hover:bg-zinc-100"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-zinc-500'}`}>
                  {idx + 1}.
                </span>
                <div className="flex-1 min-w-0">
                  <div className={`font-medium ${isActive ? 'text-indigo-900' : 'text-zinc-900'}`}>
                    {topic.title}
                  </div>
                </div>
                {isCompleted && (
                  <span className="text-emerald-500 text-lg">✓</span>
                )}
                {isActive && !isCompleted && (
                  <span className="text-indigo-500 text-sm">▶</span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
