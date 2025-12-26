"use client";

import type { AdminReview } from "@/types/review";

interface AdminReviewCardProps {
  review: AdminReview;
  onApprove: (reviewId: string) => void;
  onReject: (reviewId: string) => void;
  onDelete: (reviewId: string) => void;
  isLoading?: boolean;
}

export function AdminReviewCard({
  review,
  onApprove,
  onReject,
  onDelete,
  isLoading,
}: AdminReviewCardProps) {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="glass-outline p-5 flex flex-col sm:flex-row sm:items-start gap-4">
      {/* Avatar & Info */}
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-sm font-medium shrink-0">
          {review.id.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-sm font-medium text-gray-700">
              {review.id}
            </span>
            <span
              className={`
                px-2 py-0.5 rounded-full text-xs font-medium
                ${review.isTrue
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-gray-100 text-gray-600"
                }
              `}
            >
              {review.isTrue ? "Одобрен" : "На модерации"}
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-2 break-words">
            {review.text}
          </p>
          <span className="text-xs text-gray-400">
            {formatDate(review.createdAt)}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 shrink-0 sm:self-center">
        {!review.isTrue ? (
          <button
            onClick={() => onApprove(review.reviewId)}
            disabled={isLoading}
            className="
              px-4 py-2 rounded-xl text-sm font-medium
              bg-emerald-50 text-emerald-600 border border-emerald-200
              hover:bg-emerald-100 transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            Одобрить
          </button>
        ) : (
          <button
            onClick={() => onReject(review.reviewId)}
            disabled={isLoading}
            className="
              px-4 py-2 rounded-xl text-sm font-medium
              bg-amber-50 text-amber-600 border border-amber-200
              hover:bg-amber-100 transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            Отклонить
          </button>
        )}
        <button
          onClick={() => onDelete(review.reviewId)}
          disabled={isLoading}
          className="
            px-4 py-2 rounded-xl text-sm font-medium
            bg-red-50 text-red-600 border border-red-200
            hover:bg-red-100 transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          Удалить
        </button>
      </div>
    </div>
  );
}
