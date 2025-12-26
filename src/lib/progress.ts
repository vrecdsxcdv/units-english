// src/lib/progress.ts
"use client";

export type TopicProgress = {
  totalSteps: number;
  currentStep: number;
  completed?: boolean;
};

const STORAGE_KEY = "__topic_progress_v1__";

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

function readAll(): Record<string, TopicProgress> {
  if (!isBrowser()) return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, TopicProgress>) : {};
  } catch {
    return {};
  }
}

function writeAll(map: Record<string, TopicProgress>) {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // ignore
  }
}

function key(track: string, slug: string): string {
  return `${track}:${slug}`;
}

export function getTopicProgress(
  track: string,
  slug: string
): TopicProgress | undefined {
  const map = readAll();
  return map[key(track, slug)];
}

export function setTopicProgress(
  track: string,
  slug: string,
  progress: TopicProgress
): void {
  const map = readAll();
  map[key(track, slug)] = progress;
  writeAll(map);
}

