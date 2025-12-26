"use client";

import { useState, useEffect, useRef } from "react";
import { getApprovedReviews } from "@/lib/reviewsApi";
import { ReviewsGrid } from "@/components/reviews/ReviewsGrid";
import { ReviewModal } from "@/components/reviews/ReviewModal";
import { Toast, useToast } from "@/components/ui/Toast";
import type { Review } from "@/types/review";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toasts, showToast, removeToast } = useToast();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    async function fetchReviews() {
      try {
        const data = await getApprovedReviews();
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        showToast("Ошибка загрузки отзывов", "error");
      } finally {
        setIsLoading(false);
      }
    }

    fetchReviews();
  }, []);

  const handleReviewSuccess = () => {
    showToast("Отзыв отправлен на модерацию", "success");
  };

  return (
    <div className="page-bg min-h-screen pb-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-2xl">⭐</span>
            <span className="text-sm font-medium text-blue-600">Отзывы наших студентов</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Что говорят о нас
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Реальные отзывы от людей, которые учат английский вместе с нами
          </p>
        </div>

        {/* Stats */}
        {!isLoading && reviews.length > 0 && (
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="glass-bubble px-6 py-3 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 border-2 border-white" />
              </div>
              <div>
                <div className="font-bold text-gray-800">{reviews.length}+</div>
                <div className="text-xs text-gray-500">отзывов</div>
              </div>
            </div>
            <div className="glass-bubble px-6 py-3">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="text-sm text-gray-600 font-medium">5.0</span>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <ReviewsGrid reviews={reviews} isLoading={isLoading} />
      </div>

      {/* Floating CTA Button */}
      <div className="fixed bottom-8 left-0 right-0 z-20 flex justify-center px-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="
            group relative
            px-8 py-4 rounded-2xl font-semibold text-white
            bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
            hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600
            shadow-2xl shadow-blue-500/30
            transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40
            flex items-center gap-3
          "
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          <span className="text-lg">Оставить отзыв</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        </button>
      </div>

      {/* Modal */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleReviewSuccess}
      />

      {/* Toasts */}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}
