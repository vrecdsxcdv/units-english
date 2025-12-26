"use client";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDestructive?: boolean;
}

export function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  onConfirm,
  onCancel,
  isDestructive = false,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Modal */}
      <div className="relative glass-outline p-6 w-full max-w-md animate-in fade-in zoom-in-95 duration-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500 mb-6">{message}</p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="
              px-5 py-2.5 rounded-xl font-medium
              bg-gray-100 text-gray-700 border border-gray-200
              hover:bg-gray-200 transition-colors
            "
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`
              px-5 py-2.5 rounded-xl font-medium text-white
              transition-colors
              ${isDestructive
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
              }
            `}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
