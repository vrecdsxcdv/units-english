"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  adminGetAllReviews,
  adminApprove,
  adminReject,
  adminDelete,
} from "@/lib/reviewsApi";
import { AdminReviewCard } from "@/components/reviews/AdminReviewCard";
import { ConfirmModal } from "@/components/reviews/ConfirmModal";
import { Toast, useToast } from "@/components/ui/Toast";
import type { AdminReview, PaginationInfo } from "@/types/review";

type FilterType = "all" | "pending" | "approved";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<AdminReview[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");
  const [search, setSearch] = useState("");
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const { toasts, showToast, removeToast } = useToast();

  // Load token from sessionStorage on mount
  useEffect(() => {
    const savedToken = sessionStorage.getItem("admin_token");
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const fetchReviews = useCallback(async () => {
    if (!token) return;

    setIsLoading(true);
    try {
      const data = await adminGetAllReviews(token, currentPage, 50);
      setReviews(data.reviews);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
      if (error instanceof Error && error.message.includes("Unauthorized")) {
        setIsAuthenticated(false);
        sessionStorage.removeItem("admin_token");
        showToast("Неверный токен администратора", "error");
      } else {
        showToast("Ошибка загрузки отзывов", "error");
      }
    } finally {
      setIsLoading(false);
    }
  }, [token, currentPage]);

  useEffect(() => {
    if (isAuthenticated && token) {
      fetchReviews();
    }
  }, [isAuthenticated, token, fetchReviews]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (token.trim()) {
      sessionStorage.setItem("admin_token", token);
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_token");
    setToken("");
    setIsAuthenticated(false);
    setReviews([]);
  };

  const handleApprove = async (reviewId: string) => {
    setActionLoading(reviewId);
    try {
      await adminApprove(reviewId, token);
      // Only update UI on successful response
      showToast("Отзыв одобрен", "success");
      // Refetch to ensure consistency
      await fetchReviews();
    } catch (error) {
      showToast("Ошибка при одобрении", "error");
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (reviewId: string) => {
    setActionLoading(reviewId);
    try {
      await adminReject(reviewId, token);
      showToast("Отзыв отклонён", "success");
      // Refetch to ensure consistency
      await fetchReviews();
    } catch (error) {
      showToast("Ошибка при отклонении", "error");
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;

    setActionLoading(deleteTarget);
    try {
      await adminDelete(deleteTarget, token);
      showToast("Отзыв удалён", "success");
      // Refetch to ensure consistency
      await fetchReviews();
    } catch (error) {
      showToast("Ошибка при удалении", "error");
    } finally {
      setActionLoading(null);
      setDeleteTarget(null);
    }
  };

  // Filter and search reviews
  const filteredReviews = useMemo(() => {
    return reviews.filter((review) => {
      // Apply filter
      if (filter === "pending" && review.isTrue) return false;
      if (filter === "approved" && !review.isTrue) return false;

      // Apply search
      if (search) {
        const searchLower = search.toLowerCase();
        return (
          review.id.toLowerCase().includes(searchLower) ||
          review.text.toLowerCase().includes(searchLower)
        );
      }

      return true;
    });
  }, [reviews, filter, search]);

  // Counts
  const pendingCount = reviews.filter((r) => !r.isTrue).length;
  const approvedCount = reviews.filter((r) => r.isTrue).length;

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="page-bg min-h-screen flex items-center justify-center p-4">
        <div className="relative z-10 glass-outline p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Админ-панель
          </h1>
          <p className="text-gray-500 mb-6">
            Введите токен для доступа к модерации
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Admin token..."
              className="
                w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50
                focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400
                transition-all
              "
            />
            <button
              type="submit"
              className="
                w-full py-3 px-6 rounded-xl font-medium text-white
                bg-gradient-to-r from-blue-500 to-indigo-500
                hover:from-blue-600 hover:to-indigo-600
                transition-all
              "
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="page-bg min-h-screen">
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Модерация отзывов
            </h1>
            <p className="text-gray-500 mt-1">
              Управление отзывами пользователей
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="
              px-4 py-2 rounded-xl text-sm font-medium
              bg-gray-100 text-gray-600 border border-gray-200
              hover:bg-gray-200 transition-colors
            "
          >
            Выйти
          </button>
        </div>

        {/* Filters Panel */}
        <div className="glass-stats-panel p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск по имени или тексту..."
                className="
                  w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white/70
                  focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400
                  transition-all text-sm
                "
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2">
              {[
                { value: "all", label: "Все", count: reviews.length },
                { value: "pending", label: "На модерации", count: pendingCount },
                { value: "approved", label: "Одобренные", count: approvedCount },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value as FilterType)}
                  className={`
                    px-4 py-2 rounded-xl text-sm font-medium transition-all
                    ${filter === tab.value
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-white/50 text-gray-600 hover:bg-white/80 border border-gray-200"
                    }
                  `}
                >
                  {tab.label}
                  <span
                    className={`
                      ml-2 px-1.5 py-0.5 rounded-full text-xs
                      ${filter === tab.value
                        ? "bg-white/20"
                        : "bg-gray-100"
                      }
                    `}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="glass-outline p-5 animate-pulse">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-1/4" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredReviews.length === 0 ? (
          <div className="glass-outline p-12 text-center">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {search ? "Ничего не найдено" : "Нет отзывов"}
            </h3>
            <p className="text-gray-500">
              {search
                ? "Попробуйте изменить поисковый запрос"
                : "Отзывы появятся здесь после отправки пользователями"
              }
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredReviews.map((review) => (
              <AdminReviewCard
                key={review.reviewId}
                review={review}
                onApprove={handleApprove}
                onReject={handleReject}
                onDelete={(id) => setDeleteTarget(id)}
                isLoading={actionLoading === review.reviewId}
              />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {pagination && pagination.totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="
                px-4 py-2 rounded-xl text-sm font-medium
                bg-white/50 text-gray-600 border border-gray-200
                hover:bg-white/80 transition-colors
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              ← Назад
            </button>

            <div className="flex items-center gap-1">
              {[...Array(pagination.totalPages)].map((_, i) => {
                const pageNum = i + 1;
                // Show first, last, current, and pages around current
                const shouldShow =
                  pageNum === 1 ||
                  pageNum === pagination.totalPages ||
                  Math.abs(pageNum - currentPage) <= 1;

                if (!shouldShow) {
                  // Show ellipsis only once between gaps
                  if (
                    pageNum === 2 && currentPage > 3 ||
                    pageNum === pagination.totalPages - 1 && currentPage < pagination.totalPages - 2
                  ) {
                    return (
                      <span key={pageNum} className="px-2 text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return null;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`
                      w-10 h-10 rounded-xl text-sm font-medium transition-all
                      ${currentPage === pageNum
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                        : "bg-white/50 text-gray-600 hover:bg-white/80 border border-gray-200"
                      }
                    `}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(pagination.totalPages, p + 1))
              }
              disabled={currentPage === pagination.totalPages}
              className="
                px-4 py-2 rounded-xl text-sm font-medium
                bg-white/50 text-gray-600 border border-gray-200
                hover:bg-white/80 transition-colors
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              Вперёд →
            </button>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!deleteTarget}
        title="Удалить отзыв?"
        message="Это действие нельзя отменить. Отзыв будет удалён навсегда."
        confirmText="Удалить"
        cancelText="Отмена"
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
        isDestructive
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
