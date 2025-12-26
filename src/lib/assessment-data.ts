import fs from "fs";
import path from "path";

export type Block = "GRAMMAR" | "VOCAB" | "WORDFORMS";
type Mcq = {
  id: string;
  type: "mcq";
  prompt?: string;
  question: string;
  choices: string[];
  answerIndex: number;
  weight?: number;
};
type Gap = {
  id: string;
  type: "gap";
  prompt?: string;
  text?: string;
  base?: string;
  solution: string | string[];
  weight?: number;
};
export type Q = Mcq | Gap;

function rootJoin(...p: string[]) {
  return path.join(process.cwd(), ...p);
}

function readJsonArray(rel: string): any[] {
  const full = rootJoin(rel);
  if (!fs.existsSync(full)) {
    console.error(`[assessment-data] Missing content file: ${full}`);
    return [];
  }
  const raw = fs.readFileSync(full, "utf-8");
  try {
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) {
      console.error(`[assessment-data] Not an array: ${full}`);
      return [];
    }
    return data;
  } catch (e) {
    console.error(`[assessment-data] JSON parse error: ${full}`, e);
    return [];
  }
}

export function getBlockLength(block: Block): number {
  switch (block) {
    case "GRAMMAR":
      return 30;
    case "VOCAB":
      return 15;
    case "WORDFORMS":
      return 15;
  }
}

export function loadBlock(block: Block): Q[] {
  switch (block) {
    case "GRAMMAR":
      return readJsonArray("content/assessment/grammar.json") as Q[];
    case "VOCAB":
      return readJsonArray("content/assessment/vocab.json") as Q[];
    case "WORDFORMS":
      return readJsonArray("content/assessment/wordforms.json") as Q[];
  }
}

function norm(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

export function checkAnswer(q: Q, payload: any): { correct: boolean } {
  try {
    if (q.type === "mcq") {
      const idx = Number(payload?.userIndex);
      return {
        correct: Number.isInteger(idx) && idx === (q as Mcq).answerIndex,
      };
    }
    if (q.type === "gap") {
      const user = norm(String(payload?.user || ""));
      const sol = (q as Gap).solution;
      if (Array.isArray(sol)) {
        return { correct: sol.map((s) => norm(String(s))).includes(user) };
      }
      return { correct: norm(String(sol)) === user };
    }
  } catch (e) {
    console.error("[assessment-data] checkAnswer error:", e);
  }
  return { correct: false };
}

export function mapParamToBlock(param: string | undefined): Block | null {
  const v = (param || "").toLowerCase();
  if (v === "grammar") return "GRAMMAR";
  if (v === "vocab") return "VOCAB";
  if (v === "wordforms") return "WORDFORMS";
  return null;
}
