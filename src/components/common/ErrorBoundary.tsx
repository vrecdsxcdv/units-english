"use client";
import React from "react";

type State = { hasError: boolean; info?: string };

export default class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallback?: React.ReactNode }>,
  State
> {
  state: State = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Логируем безопасно
    console.error("[ErrorBoundary]", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4">
            <div className="font-semibold text-red-800">
              Что-то пошло не так.
            </div>
            <div className="text-sm text-red-700 mt-1">
              Страница урока не смогла отрендериться. Обновите страницу или
              вернитесь позже.
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
