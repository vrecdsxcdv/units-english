"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import GlassPanel from "@/components/ui/glass-panel";
import Link from "next/link";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  // Automatically verify token when component mounts
  useEffect(() => {
    if (token) {
      verifyToken(token);
    } else {
      setStatus("error");
      setMessage("Токен верификации отсутствует в ссылке");
    }
  }, [token]);

  const verifyToken = async (verificationToken: string) => {
    setStatus("loading");
    setMessage("Проверяем ваш email...");

    try {
      const response = await fetch(`/api/auth/verify-email?token=${encodeURIComponent(verificationToken)}`, {
        method: "GET",
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Email успешно подтверждён!");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setStatus("error");
        setMessage(data.error || "Неверный или истёкший токен верификации");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Ошибка подключения к серверу");
    }
  };

  // Success state
  if (status === "success") {
    return (
      <div className="relative flex min-h-[100svh] items-center justify-center bg-white dark:bg-[#0c0c0e]">
        <main className="relative z-10 mx-4 my-10 w-full">
          <GlassPanel
            title="Email подтверждён!"
            subtitle="Вы успешно подтвердили свой email"
            className="mx-auto max-w-md text-center"
          >
            <div className="space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>

              <p className="text-xs text-gray-500 dark:text-gray-500">
                Перенаправление на страницу входа...
              </p>
            </div>
          </GlassPanel>
        </main>
      </div>
    );
  }

  // Error state
  if (status === "error") {
    return (
      <div className="relative flex min-h-[100svh] items-center justify-center bg-white dark:bg-[#0c0c0e]">
        <main className="relative z-10 mx-4 my-10 w-full">
          <GlassPanel
            title="Ошибка верификации"
            subtitle="Не удалось подтвердить email"
            className="mx-auto max-w-md text-center"
            footer={
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Нужна помощь?{" "}
                <Link
                  href="/login"
                  className="font-medium text-indigo-600 hover:underline"
                >
                  Войти
                </Link>
              </p>
            }
          >
            <div className="space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                <svg className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>

              <Button
                onClick={() => router.push("/register")}
                className="h-11 w-full rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Перейти к регистрации
              </Button>
            </div>
          </GlassPanel>
        </main>
      </div>
    );
  }

  // Loading state (initial)
  return (
    <div className="relative flex min-h-[100svh] items-center justify-center bg-white dark:bg-[#0c0c0e]">
      <main className="relative z-10 mx-4 my-10 w-full">
        <GlassPanel
          title="Подтверждение email..."
          subtitle="Пожалуйста, подождите"
          className="mx-auto max-w-md text-center"
        >
          <div className="space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600 dark:border-gray-600 dark:border-t-indigo-400" />
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>
          </div>
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
          subtitle=""
          className="mx-auto max-w-md text-center"
        >
          <div className="flex items-center justify-center py-8">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600 dark:border-gray-600 dark:border-t-indigo-400" />
          </div>
        </GlassPanel>
      </main>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <VerifyEmailContent />
    </Suspense>
  );
}
