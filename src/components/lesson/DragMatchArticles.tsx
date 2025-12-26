"use client";
import React from "react";
import clsx from "clsx";

type Bucket = "a" | "an" | "the";
type Item = {
  id: string;
  label: string;
  correct: Bucket;
};

type Props = {
  items: Item[];
  onComplete?: (allCorrect: boolean) => void;
};

export default function DragMatchArticles({ items, onComplete }: Props) {
  const [placed, setPlaced] = React.useState<Record<string, Bucket | null>>({});
  const [status, setStatus] = React.useState<"idle" | "checked">("idle");

  React.useEffect(() => {
    // init
    const init: Record<string, Bucket | null> = {};
    items.forEach((it) => (init[it.id] = null));
    setPlaced(init);
  }, [items]);

  const [draggingId, setDraggingId] = React.useState<string | null>(null);

  function handleDrop(bucket: Bucket) {
    if (!draggingId) return;
    setPlaced((prev) => ({ ...prev, [draggingId!]: bucket }));
    setDraggingId(null);
    setStatus("idle");
  }

  function resetAll() {
    const init: Record<string, Bucket | null> = {};
    items.forEach((it) => (init[it.id] = null));
    setPlaced(init);
    setStatus("idle");
    onComplete?.(false);
  }

  function check() {
    let ok = true;
    for (const it of items) {
      if (placed[it.id] !== it.correct) ok = false;
    }
    setStatus("checked");
    onComplete?.(ok);
  }

  const pool = items.filter((it) => placed[it.id] === null);
  const buckets: Bucket[] = ["a", "an", "the"];

  return (
    <div className="grid gap-6">
      {/* Pool */}
      <div>
        <h4 className="text-lg font-semibold mb-3">
          Перетащите словосочетания к нужному артиклю
        </h4>
        <div className="rounded-lg border border-zinc-200 p-3">
          {pool.length === 0 ? (
            <p className="text-sm text-zinc-500">
              Все карточки разложены по колонкам.
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {pool.map((it) => (
                <button
                  key={it.id}
                  draggable
                  onDragStart={() => setDraggingId(it.id)}
                  onDragEnd={() => setDraggingId(null)}
                  className="cursor-grab rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-zinc-50 active:cursor-grabbing"
                  aria-label={`Перетащить "${it.label}"`}
                >
                  {it.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Buckets */}
      <div className="grid md:grid-cols-3 gap-4">
        {buckets.map((b) => (
          <BucketCol
            key={b}
            title={b.toUpperCase()}
            onDrop={() => handleDrop(b)}
            onDragOver={(e) => e.preventDefault()}
            items={items.filter((it) => placed[it.id] === b)}
            checked={status === "checked"}
            isCorrect={(id) => items.find((x) => x.id === id)!.correct === b}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          className="rounded-md bg-indigo-600 text-white px-4 py-2 disabled:opacity-50"
          onClick={check}
          disabled={Object.values(placed).some((v) => v === null)}
        >
          Проверить
        </button>
        <button
          className="rounded-md border border-zinc-200 bg-white px-4 py-2"
          onClick={resetAll}
        >
          Сбросить
        </button>
      </div>
    </div>
  );
}

function BucketCol({
  title,
  onDrop,
  onDragOver,
  items,
  checked,
  isCorrect,
}: {
  title: string;
  onDrop: () => void;
  onDragOver: (e: React.DragEvent) => void;
  items: { id: string; label: string }[];
  checked: boolean;
  isCorrect: (id: string) => boolean;
}) {
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      className="rounded-lg border border-zinc-200 bg-zinc-50/60 p-3 min-h-[140px]"
    >
      <div className="text-sm font-semibold text-zinc-700 mb-2">{title}</div>
      <div className="flex flex-wrap gap-2">
        {items.length === 0 ? (
          <div className="text-xs text-zinc-400">Перетащите карточки сюда</div>
        ) : (
          items.map((it) => (
            <span
              key={it.id}
              className={clsx(
                "rounded-md border px-2.5 py-1 text-sm bg-white",
                checked
                  ? isCorrect(it.id)
                    ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                    : "border-rose-300 bg-rose-50 text-rose-800"
                  : "border-zinc-200"
              )}
              title={
                checked ? (isCorrect(it.id) ? "Верно" : "Неверно") : undefined
              }
            >
              {it.label}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
