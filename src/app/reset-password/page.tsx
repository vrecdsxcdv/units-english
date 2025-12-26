"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import GlassPanel from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setStatus("error");
      setMessage("Пароли не совпадают");
      return;
    }

    if (password.length < 6) {
      setStatus("error");
      setMessage("Пароль должен содержать минимум 6 символов");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message);
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        setStatus("error");
        setMessage(data.error || "Ошибка сброса пароля");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Ошибка подключения к серверу");
    }
  };

  if (!token) {
    return (
      <div className="relative flex min-h-[100svh] items-center justify-center bg-white dark:bg-[#0c0c0e]">
        <main className="relative z-10 mx-4 my-10 w-full">
          <GlassPanel
            title="Недействительная ссылка"
            subtitle="Units English"
            className="mx-auto text-center"
          >
            <div className="space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                <svg
                  className="h-8 w-8 text-red-600 dark:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Токен не найден. Пожалуйста, запросите новую ссылку для восстановления пароля.
              </p>

              <Button
                onClick={() => router.push("/forgot-password")}
                className="w-full"
              >
                Запросить новую ссылку
              </Button>
            </div>
          </GlassPanel>
        </main>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="relative flex min-h-[100svh] items-center justify-center bg-white dark:bg-[#0c0c0e]">
        <main className="relative z-10 mx-4 my-10 w-full">
          <GlassPanel
            title="Пароль изменён!"
            subtitle="Units English"
            className="mx-auto text-center"
          >
            <div className="space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <svg
                  className="h-8 w-8 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {message}
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-500">
                Перенаправление на страницу входа...
              </p>
            </div>
          </GlassPanel>
        </main>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[100svh] items-center justify-center bg-white dark:bg-[#0c0c0e]">
      <main className="relative z-10 mx-4 my-10 w-full">
        <GlassPanel
          title="Новый пароль"
          subtitle="Units English"
          className="mx-auto"
          footer={
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Вспомнили пароль?{" "}
              <Link
                href="/login"
                className="font-medium text-indigo-600 hover:underline"
              >
                Войти
              </Link>
            </p>
          }
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              Введите новый пароль для вашего аккаунта
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Новый пароль</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                placeholder="Минимум 6 символов"
                disabled={status === "loading"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                placeholder="Повторите пароль"
                disabled={status === "loading"}
              />
            </div>

            {status === "error" && (
              <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
                <p className="text-sm text-red-800 dark:text-red-200">{message}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={status === "loading"}
              className="h-11 w-full rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
            >
              {status === "loading" ? "Сохранение..." : "Сохранить новый пароль"}
            </Button>
          </form>
        </GlassPanel>
      </main>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="relative flex min-h-[100svh] items-center justify-center bg-white dark:bg-[#0c0c0e]">
      <main className="relative z-10 mx-4 my-10 w-full">
        <GlassPanel
          title="Загрузка..."
          subtitle="Units English"
          className="mx-auto text-center"
        >
          <div className="flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600 dark:border-gray-600 dark:border-t-indigo-400" />
          </div>
        </GlassPanel>
      </main>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ResetPasswordContent />
    </Suspense>
  );
}
