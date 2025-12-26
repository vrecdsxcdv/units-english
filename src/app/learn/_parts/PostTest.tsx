"use client";

import RecommendationCards from "@/components/learn/RecommendationCards";

interface PostTestProps {
  score: number;
  level: string;
  rec: Record<string, unknown>;
}

export default function PostTest({ score, level }: PostTestProps) {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-start justify-center px-4 py-10 bg-white">
      <RecommendationCards
        level={level as "A1" | "A2" | "B1" | "B2" | "C1"}
        score={score}
      />
    </div>
  );
}
