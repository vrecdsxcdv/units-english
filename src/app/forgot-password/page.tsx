"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GlassPanel from "@/components/ui/glass-panel";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.error || "Ошибка отправки");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Ошибка подключения к серверу");
    }
  };

  if (status === "success") {
    return (
      <div className="relative flex min-h-[100svh] items-center justify-center bg-white dark:bg-[#0c0c0e]">
        <main className="relative z-10 mx-4 my-10 w-full">
          <GlassPanel
            title="Письмо отправлено!"
            subtitle="Units English"
            className="mx-auto text-center"
          >
            <div className="space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>

              <Button
                onClick={() => router.push("/login")}
                className="h-11 w-full rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Вернуться к входу
              </Button>
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
          title="Забыли пароль?"
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
              Введите email для восстановления доступа
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
              {status === "loading" ? "Отправка..." : "Отправить ссылку"}
            </Button>
          </form>
        </GlassPanel>
      </main>
    </div>
  );
}
