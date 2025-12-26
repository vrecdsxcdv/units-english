"use client";

import * as React from "react";
import {
  getItem,
  setItem,
  tasksKey,
  doneKey,
  getStr,
  setStr,
  lastSectionKey,
} from "@/lib/progress/local";

export function useTaskMap(lessonId: string) {
  const [ready, setReady] = React.useState(false);
  const [map, setMap] = React.useState<Record<string, boolean>>({});

  React.useEffect(() => {
    const initial = getItem<Record<string, boolean>>(tasksKey(lessonId), {});
    setMap(initial);
    setReady(true);
  }, [lessonId]);

  const setTask = React.useCallback(
    (id: string, ok: boolean) => {
      setMap((prev) => {
        if (prev[id] === ok) return prev;
        const next = { ...prev, [id]: ok };
        setItem(tasksKey(lessonId), next);
        return next;
      });
    },
    [lessonId]
  );

  return { ready, map, setTask };
}

export function useLessonDone(lessonId: string) {
  const [ready, setReady] = React.useState(false);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    setDone(getItem<boolean>(doneKey(lessonId), false));
    setReady(true);
  }, [lessonId]);

  const markDone = React.useCallback(() => {
    setDone((prev) => {
      if (prev) return prev;
      setItem(doneKey(lessonId), true);
      return true;
    });
  }, [lessonId]);

  return { ready, done, markDone };
}

// NEW: last viewed section per lesson
export function useLastSection(lessonId: string) {
  const [ready, setReady] = React.useState(false);
  const [last, setLast] = React.useState<string>("");

  React.useEffect(() => {
    setLast(getStr(lastSectionKey(lessonId), ""));
    setReady(true);
  }, [lessonId]);

  const set = React.useCallback(
    (sectionId: string) => {
      setLast((prev) => {
        if (prev === sectionId) return prev;
        setStr(lastSectionKey(lessonId), sectionId);
        return sectionId;
      });
    },
    [lessonId]
  );

  const clear = React.useCallback(() => {
    setLast("");
    setStr(lastSectionKey(lessonId), "");
  }, [lessonId]);

  return { ready, last, set, clear };
}
