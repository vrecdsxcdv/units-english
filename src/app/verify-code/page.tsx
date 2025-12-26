"use client";

import { useState, useRef, useEffect, KeyboardEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import GlassPanel from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";

function VerifyCodeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailFromUrl = searchParams.get("email") || "";

  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setMessage(null);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    // Check if pasted data is 6 digits
    if (/^\d{6}$/.test(pastedData)) {
      const newCode = pastedData.split("");
      setCode(newCode);
      setMessage(null);
      // Focus last input
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const codeString = code.join("");

    if (codeString.length !== 6) {
      setMessage("Введите все 6 цифр кода");
      return;
    }

    if (!emailFromUrl) {
      setMessage("Email не найден. Вернитесь на страницу регистрации.");
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailFromUrl,
          code: codeString
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Ошибка верификации");
        // Clear code on error
        setCode(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      console.error("Verification error:", err);
      setMessage("Ошибка при проверке кода");
      setCode(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="relative flex min-h-[100svh] items-center justify-center bg-white dark:bg-[#0c0c0e]">
        <main className="relative z-10 mx-4 my-10 w-full">
          <GlassPanel
            title="Email подтверждён!"
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
          title="Подтверждение email"
          subtitle="Units English"
          className="mx-auto"
          footer={
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Не получили код?{" "}
              <button
                type="button"
                onClick={() => router.push("/register")}
                className="font-medium text-indigo-600 hover:underline"
              >
                Зарегистрироваться снова
              </button>
            </p>
          }
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              Введите 6-значный код, отправленный на<br />
              <span className="font-medium text-gray-900 dark:text-white">{emailFromUrl}</span>
            </div>

            {/* Code input boxes */}
            <div className="flex justify-center gap-2" onPaste={handlePaste}>
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`h-14 w-12 rounded-lg border-2 bg-white/50 text-center text-2xl font-bold transition-all dark:bg-gray-800/50 ${
                    message
                      ? "border-red-500 dark:border-red-500"
                      : "border-gray-300 focus:border-indigo-500 dark:border-gray-600 dark:focus:border-indigo-400"
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20`}
                  disabled={isLoading}
                />
              ))}
            </div>

            {message && (
              <div className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                {message}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading || code.join("").length !== 6}
              className="w-full"
            >
              {isLoading ? "Проверка..." : "Подтвердить"}
            </Button>
          </form>
        </GlassPanel>
      </main>
    </div>
  );
}

export default function VerifyCodePage() {
  return (
    <Suspense fallback={
      <div className="relative flex min-h-[100svh] items-center justify-center bg-white dark:bg-[#0c0c0e]">
        <div className="text-gray-500">Загрузка...</div>
      </div>
    }>
      <VerifyCodeContent />
    </Suspense>
  );
}
