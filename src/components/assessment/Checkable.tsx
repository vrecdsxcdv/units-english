"use client";

import React, { useId, useMemo, useState } from "react";

type NormalizeFn = (s: string) => string;

const defaultNormalize: NormalizeFn = (s) =>
  s.trim().replace(/\s+/g, " ").toLowerCase();

type Answer = string | readonly string[];

type AnswerFieldProps = {
  name: string;
  correct: string | string[];
  scope: string;
  placeholder?: string;
  hint?: string;
  normalize?: (s: string) => string; // по умолчанию trim + toLowerCase
  initialValue?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function AnswerField({
  name,
  correct,
  scope,
  placeholder,
  hint,
  normalize = defaultNormalize,
  initialValue = "",
  size = "md",
  className,
}: AnswerFieldProps) {
  const reactId = useId();

  // Уникальные идентификаторы для input и подсказки
  const inputId = `${scope}-input-${reactId}`;
  const hintId = hint ? `${scope}-hint-${reactId}` : undefined;

  const [value, setValue] = useState(initialValue);
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const expectedList = useMemo<string[]>(
    () => (Array.isArray(correct) ? correct : [correct]).map(normalize),
    [correct, normalize]
  );

  // Сохраняем в DOM те значения, которые нужны для массовой проверки по scope
  const serializedExpected = JSON.stringify(expectedList);

  const base =
    size === "sm"
      ? "h-9 px-3 text-sm"
      : size === "lg"
      ? "h-12 px-4 text-base"
      : "h-10 px-3 text-base";

  const borderByStatus =
    status === "ok"
      ? "border-[var(--ok)] focus:ring-[var(--ok)]/20"
      : status === "err"
      ? "border-[var(--err)] focus:ring-[var(--err)]/20"
      : "border-[var(--border)] focus:ring-[var(--border)]/20";

  return (
    <div
      data-scope={scope}
      className={["w-full", className].filter(Boolean).join(" ")}
    >
      <input
        id={inputId}
        name={name}
        aria-describedby={hintId}
        data-scope={scope}
        data-answer={serializedExpected}
        data-normalize="default"
        className={[
          "w-full rounded-xl border outline-none transition-all duration-120 focus:ring-4 focus:scale-[1.01]",
          base,
          borderByStatus,
        ].join(" ")}
        placeholder={placeholder ?? "Введите ответ"}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (status !== "idle") {
            setStatus("idle");
            setMessage(null);
          }
        }}
      />

      {hint && (
        <div
          id={hintId}
          className="mt-2 text-sm text-[var(--sub)] leading-relaxed"
        >
          <span className="mr-1">💡</span>
          {hint}
        </div>
      )}

      {message && (
        <div
          className={[
            "mt-2 text-sm",
            status === "ok" ? "text-[var(--ok)]" : "text-[var(--err)]",
          ].join(" ")}
        >
          {message}
        </div>
      )}
    </div>
  );
}

type CheckButtonProps = {
  scope: string;
  label?: string; // "Проверить" по умолчанию
  showAnswers?: boolean; // false по умолчанию
  className?: string;
  // Кастомная нормализация (если вдруг для шага нужно иначе)
  normalize?: NormalizeFn;
  // Кастомная проверка одного поля (если надо сложнее)
  match?: (user: string, expectedList: string[]) => boolean;
};

export function CheckButton({
  scope,
  label = "Проверить",
  showAnswers = false,
  className,
  normalize = defaultNormalize,
  match,
}: CheckButtonProps) {
  const onClick = () => {
    const root = document.querySelector<HTMLElement>(`[data-scope="${scope}"]`);
    if (!root) return;

    // Ищем только поля с данным scope
    const inputs = root.querySelectorAll<HTMLInputElement>(
      "input[data-answer][data-scope]"
    );

    let allOk = true;

    inputs.forEach((input) => {
      const expectedStr = input.getAttribute("data-answer") ?? "[]";
      const expectedList: string[] = JSON.parse(expectedStr);
      const user = normalize(input.value);
      const ok = match
        ? match(user, expectedList)
        : expectedList.some((e) => e === user);

      // Помечаем визуально поле (меняем border через data-атрибут класса)
      // Для простоты — ставим inline-стили цветов (UI у нас уже аккуратный)
      if (ok) {
        input.classList.remove("border-[var(--err)]");
        input.classList.add("border-[var(--ok)]");
        (input as any)._statusMessage = "Верно!";
        (input as any)._status = "ok";
      } else {
        input.classList.remove("border-[var(--ok)]");
        input.classList.add("border-[var(--err)]");
        (input as any)._statusMessage = showAnswers
          ? `Правильно: ${expectedList[0]}`
          : "Проверьте ответ";
        (input as any)._status = "err";
        allOk = false;
      }

      // Ререндера React тут нет, но нам и не требуется.
      // Сообщение показываем через «подсказки» рядом — здесь не выводим.
    });

    // Дополнительно можно прокрутить к первому неверному
    if (!allOk) {
      const firstBad = root.querySelector<HTMLInputElement>(
        "input[data-answer].border-\\[var\\(--err\\)\\]"
      );
      firstBad?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <button
      type="button"
      data-scope={scope}
      onClick={onClick}
      className={[
        "mt-4 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 transition-all duration-200",
        className ?? "",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
