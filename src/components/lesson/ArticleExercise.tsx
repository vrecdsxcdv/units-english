"use client";

import * as React from "react";

/** LEGACY item: one correct answer per blank */
type ItemLegacy = {
  text: string; // sentence with "..." placeholders
  answers: string[]; // LEGACY: one answer per blank
  explanation: string; // shown if at least one blank is wrong
};

/** NEW item: multiple valid variants per blank */
type ItemNew = {
  text: string;
  answers: string[][]; // NEW: per blank list of variants
  explanation: string;
};

type Item = ItemLegacy | ItemNew;

type Props = {
  title?: string;
  items: Item[];
};

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}
function normalizeDash(s: string) {
  const n = normalize(s);
  if (n === "-" || n === "—" || n === "–") return "—";
  return n;
}

/** Normalize answers to string[][] internally */
function toVariantsArray(it: Item): string[][] {
  const a: any = it.answers;
  if (Array.isArray(a) && a.every((x: any) => Array.isArray(x)))
    return a as string[][];
  if (Array.isArray(a) && a.every((x: any) => typeof x === "string"))
    return (a as string[]).map((s) => [s]);
  return [];
}

export default function ArticleExercise({
  title = "Вставьте артикли там, где это необходимо",
  items,
}: Props) {
  const itemsSafe = Array.isArray(items) ? items : [];
  const norm = React.useMemo(() => itemsSafe.map(toVariantsArray), [itemsSafe]);

  const [vals, setVals] = React.useState<string[][]>(() =>
    norm.map((ans) => Array(ans.length).fill(""))
  );
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Re-init state if items changed
  React.useEffect(() => {
    setVals((prev) =>
      norm.map((ans, i) => {
        const prevRow = prev[i] ?? [];
        const row = Array(ans.length).fill("");
        for (let j = 0; j < ans.length; j++) row[j] = prevRow[j] ?? "";
        return row;
      })
    );
    setChecked(false);
  }, [norm]);

  function onChange(i: number, j: number, v: string) {
    setVals((prev) => {
      const next = prev.map((row) => row.slice());
      next[i][j] = v;
      return next;
    });
  }

  function isBlankCorrect(i: number, j: number) {
    const given = normalizeDash(vals[i][j]);
    const variants = norm[i][j] ?? [];
    return variants.some((ans) => normalizeDash(ans) === given);
  }
  function isRowCorrect(i: number) {
    return norm[i].every((_, j) => isBlankCorrect(i, j));
  }

  function handleCheck() {
    setChecked(true);
  }
  function handleReset() {
    setVals(norm.map((ans) => Array(ans.length).fill("")));
    setChecked(false);
    // focus first input
    const inputs = containerRef.current?.querySelectorAll<HTMLInputElement>(
      "input[data-blank-idx]"
    );
    inputs && inputs[0]?.focus();
  }

  function focusNext(currentEl: HTMLInputElement) {
    const inputs = Array.from(
      containerRef.current?.querySelectorAll<HTMLInputElement>(
        "input[data-blank-idx]"
      ) ?? []
    );
    const idx = inputs.indexOf(currentEl);
    const next = inputs[idx + 1];
    if (next) next.focus();
    else {
      // last blank → trigger Check
      document
        .getElementById("check-btn")
        ?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  }

  return (
    <section className="space-y-5" ref={containerRef}>
      <h2 className="text-[18px] font-semibold">{title}</h2>

      <div className="space-y-4">
        {items.map((it, i) => {
          const parts = it.text.split("...");
          const answersVariants = norm[i];
          return (
            <div key={i} className="leading-7">
              <p className="text-[15px]">
                {parts.map((part, j) => {
                  const hasBlank = j < answersVariants.length;
                  const value = vals[i]?.[j] ?? "";
                  const correct = hasBlank && isBlankCorrect(i, j);
                  const showState = checked && hasBlank;

                  // width based on first variant length (a/an/the/—)
                  const firstVariant = answersVariants[j]?.[0] ?? "a";
                  const ch = Math.max(2, String(firstVariant).length);

                  const base =
                    "mx-1 inline-block align-baseline bg-transparent outline-none text-[14px] text-center";
                  const border =
                    "border-b transition-colors duration-150 " +
                    (showState
                      ? correct
                        ? "border-emerald-500 text-emerald-700"
                        : "border-rose-500 text-rose-700"
                      : "border-zinc-400 focus:border-indigo-500");

                  return (
                    <React.Fragment key={j}>
                      <span>{part}</span>
                      {hasBlank && (
                        <input
                          data-blank-idx
                          value={value}
                          onChange={(e) => onChange(i, j, e.target.value)}
                          disabled={checked}
                          placeholder="…"
                          className={`${base} ${border}`}
                          style={{ width: `${ch + 1.5}ch` }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              focusNext(e.currentTarget);
                            }
                          }}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </p>

              {checked && !isRowCorrect(i) && (
                <p className="mt-1 text-[13px] text-rose-700">
                  {it.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex gap-8">
        {!checked ? (
          <button
            id="check-btn"
            type="button"
            onClick={handleCheck}
            className="rounded-md bg-indigo-600 text-white px-3.5 py-1.5 text-[14px] hover:bg-indigo-500"
          >
            Проверить
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReset}
            className="rounded-md bg-zinc-800 text-white px-3.5 py-1.5 text-[14px] hover:bg-zinc-700"
          >
            Пройти заново
          </button>
        )}
      </div>
    </section>
  );
}
