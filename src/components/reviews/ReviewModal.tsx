"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { createReview } from "@/lib/reviewsApi";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function ReviewModal({ isOpen, onClose, onSuccess }: ReviewModalProps) {
  const { data: session } = useSession();
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ text?: string }>({});

  const validate = () => {
    const newErrors: { text?: string } = {};

    if (text.length < 10 || text.length > 500) {
      newErrors.text = "Текст должен быть от 10 до 500 символов";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const userName = session?.user?.name || "Аноним";

    setIsSubmitting(true);

    try {
      await createReview({ id: userName, text, rating });
      setText("");
      setRating(5);
      setErrors({});
      onSuccess();
      onClose();
    } catch (error) {
      setErrors({ text: "Ошибка при отправке. Попробуйте позже." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass-outline p-8 w-full max-w-lg animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Оставить отзыв
        </h2>
        <p className="text-gray-500 mb-6">
          Ваш отзыв будет опубликован после модерации
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Ваша оценка
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110 focus:outline-none"
                >
                  <svg
                    className="w-10 h-10 transition-colors"
                    fill={star <= (hoveredRating || rating) ? "#fbbf24" : "#e5e7eb"}
                    stroke="#fbbf24"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {rating} из 5
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Текст отзыва
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Напишите ваш отзыв..."
              rows={4}
              className={`
                w-full px-4 py-3 rounded-xl border bg-white/50 resize-none
                focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400
                transition-all
                ${errors.text ? "border-red-300" : "border-gray-200"}
              `}
            />
            <div className="flex justify-between mt-1">
              {errors.text ? (
                <p className="text-sm text-red-500">{errors.text}</p>
              ) : (
                <span />
              )}
              <span className={`text-sm ${text.length > 500 ? "text-red-500" : "text-gray-400"}`}>
                {text.length}/500
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-3 px-6 rounded-xl font-medium text-white
              bg-gradient-to-r from-blue-500 to-indigo-500
              hover:from-blue-600 hover:to-indigo-600
              focus:outline-none focus:ring-2 focus:ring-blue-500/50
              transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Отправка...
              </span>
            ) : (
              "Отправить отзыв"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
