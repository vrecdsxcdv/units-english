"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

type ConfirmDialogProps = {
  open: boolean;
  title?: string;
  description?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onClose: () => void;
};

export default function ConfirmDialog({
  open,
  title = "Подтвердите действие",
  description,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  onConfirm,
  onClose,
}: ConfirmDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  // Close on ESC
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
      onMouseDown={(e) => {
        // click outside to close
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Panel */}
      <div
        ref={dialogRef}
        className={cn(
          "relative mx-4 w-full max-w-md rounded-2xl border border-gray-200",
          "bg-white shadow-2xl"
        )}
      >
        <div className="p-6">
          <h2 id="confirm-title" className="text-lg font-semibold">
            {title}
          </h2>
          {description && (
            <div className="mt-2 text-sm text-gray-700">{description}</div>
          )}
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
            >
              {cancelText}
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-black/90"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
