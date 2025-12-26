"use client";

import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  topicId: string;
  topicTitle: string;
  step: number;
  onNextStep: () => void;
  onPrevStep: () => void;
  totalSteps: number;
  children: React.ReactNode;
};

export default function TopicModal({
  isOpen,
  onClose,
  topicTitle,
  step,
  onNextStep,
  onPrevStep,
  totalSteps,
  children,
}: Props) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">{topicTitle}</h2>
            <p className="text-sm text-gray-500 mt-1">
              Шаг {step} из {totalSteps}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
            title="Закрыть"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">{children}</div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onPrevStep}
            disabled={step === 1}
            className="px-6 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            ← Назад
          </button>

          <div className="flex gap-2">
            {Array.from({ length: Math.min(totalSteps, 10) }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i + 1 === step
                    ? "bg-indigo-600"
                    : i + 1 < step
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              />
            ))}
            {totalSteps > 10 && (
              <span className="text-xs text-gray-500 ml-1">
                +{totalSteps - 10}
              </span>
            )}
          </div>

          {step < totalSteps ? (
            <button
              onClick={onNextStep}
              className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Далее →
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
            >
              ✓ Завершить
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
