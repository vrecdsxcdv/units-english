"use client";

export type StepSavePayload = {
  track: string;
  lesson: string;
  stepIndex: number;
  completed?: boolean;
  answers?: any;
};

async function postJSON(url: string, data: any) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res;
}

export async function saveStepToServer(payload: StepSavePayload) {
  try {
    const res = await postJSON("/api/progress/lesson", {
      track: payload.track,
      lessonSlug: payload.lesson,
      stepIndex: payload.stepIndex,
      completed: !!payload.completed,
      answers: payload.answers ?? null,
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function loadAllStepsFromServer(track: string, lesson: string) {
  try {
    const res = await fetch(
      `/api/progress/lesson?track=${encodeURIComponent(
        track
      )}&lesson=${encodeURIComponent(lesson)}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json.rows as Array<{
      stepIndex: number;
      completed: boolean;
      answersJson: any;
    }>;
  } catch {
    return null;
  }
}

// Local fallback
const NS = "app:progress:";
export function saveLocal(
  track: string,
  lesson: string,
  stepIndex: number,
  data: any
) {
  if (typeof window === "undefined") return;
  const key = `${NS}${track}:${lesson}:step:${stepIndex}`;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {}
}

export function loadLocal(track: string, lesson: string) {
  if (typeof window === "undefined") return {} as Record<number, any>;
  const prefix = `${NS}${track}:${lesson}:step:`;
  const out: Record<number, any> = {};
  for (let i = 0; i < 5; i++) {
    const raw = localStorage.getItem(prefix + i);
    if (raw) {
      try {
        out[i] = JSON.parse(raw);
      } catch {}
    }
  }
  return out;
}

