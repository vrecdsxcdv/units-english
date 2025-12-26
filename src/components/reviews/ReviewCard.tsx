"use client";

import type { Review } from "@/types/review";

interface ReviewCardProps {
  review: Review;
  variant?: number;
}

const gradients = [
  "from-blue-400 to-indigo-500",
  "from-purple-400 to-pink-500",
  "from-green-400 to-emerald-500",
  "from-orange-400 to-red-500",
  "from-cyan-400 to-blue-500",
  "from-violet-400 to-purple-500",
];

const borderColors = [
  "border-blue-200/50 hover:border-blue-300",
  "border-purple-200/50 hover:border-purple-300",
  "border-green-200/50 hover:border-green-300",
  "border-orange-200/50 hover:border-orange-300",
  "border-cyan-200/50 hover:border-cyan-300",
  "border-violet-200/50 hover:border-violet-300",
];

export function ReviewCard({ review, variant = 0 }: ReviewCardProps) {
  const gradient = gradients[variant % gradients.length];
  const borderColor = borderColors[variant % borderColors.length];

  return (
    <div
      className={`
        relative group
        glass-outline p-6 flex flex-col gap-4
        transition-all duration-300
        hover:scale-[1.02] hover:shadow-xl
        border-2 ${borderColor}
      `}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-lg font-bold shadow-lg`}>
          {review.id.charAt(0).toUpperCase()}
        </div>
        <div>
          <div className="font-semibold text-gray-800">{review.id}</div>
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${star <= review.rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed text-[15px] relative z-10">
        "{review.text}"
      </p>

      {/* Bottom Badge */}
      <div className="flex items-center gap-2 mt-2">
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Проверенный отзыв</span>
        </div>
      </div>
    </div>
  );
}
