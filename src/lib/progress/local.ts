// src/lib/progress/local.ts
// Lightweight namespaced localStorage helpers.
// Safe in SSR: no-ops if window is undefined.

const NS = "app:progress:";

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function getItem<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  return safeParse<T>(window.localStorage.getItem(NS + key), fallback);
}

export function setItem<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(NS + key, JSON.stringify(value));
  } catch {}
}

// primitive string helpers (avoid JSON double wrapping)
export function getStr(key: string, fallback = ""): string {
  if (typeof window === "undefined") return fallback;
  const v = window.localStorage.getItem(NS + key);
  return v ?? fallback;
}
export function setStr(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(NS + key, value);
  } catch {}
}

// Convenience:
// - task map per lesson: { [taskId]: boolean }
// - lesson completion flag: true/false
export function tasksKey(lessonId: string) {
  return `lesson:${lessonId}:tasks`;
}
export function doneKey(lessonId: string) {
  return `lesson:${lessonId}:done`;
}
export function lastSectionKey(lessonId: string) {
  return `lesson:${lessonId}:lastSection`;
}
