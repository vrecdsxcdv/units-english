"use client";

import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
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

  // Найдём текущую тему для отображения
  const currentTopic = topics.find(t => t.id === activeTopic);

  const getGradientClasses = () => {
    return "from-indigo-50/80 via-sky-50/60 to-white/60";
  };

  const getActiveClasses = () => {
    return "bg-indigo-100 text-indigo-800 font-semibold border border-indigo-300";
  };

  const getProgressColor = () => {
    return "bg-gradient-to-r from-green-400 to-emerald-500";
  };

  return (
    <>
      {/* Mobile: Link to contents page */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200">
        <Link
          href={`/blocks/${level}/contents?current=${activeTopic}`}
          className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
        >
          <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <div className="flex-1 min-w-0 text-left">
            <div className="text-xs text-zinc-500 mb-0.5">Содержание</div>
            <div className="text-sm font-medium text-zinc-900 truncate">
              {currentTopic?.title || levelTitle}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-emerald-600">{percentage}%</span>
            <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Desktop: Toggle Button */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
        >
          <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <div className="flex-1 min-w-0 text-left">
            <div className="text-xs text-zinc-500 mb-0.5">Содержание</div>
            <div className="text-sm font-medium text-zinc-900 truncate">
              {currentTopic?.title || levelTitle}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-emerald-600">{percentage}%</span>
            <svg className={`w-4 h-4 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Desktop: Overlay */}
      {isOpen && (
        <div
          className="hidden md:block fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Desktop: Sidebar */}
      <aside
        className={`
          hidden md:flex fixed top-0 left-0 h-screen z-50
          bg-gradient-to-b ${getGradientClasses()} backdrop-blur-sm border-r border-zinc-200
          w-80 flex-shrink-0 flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Close button */}
        <div className="flex justify-end p-3">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-white/50 text-zinc-500"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

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
                onClick={() => setIsOpen(false)}
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
    </>
  );
}
