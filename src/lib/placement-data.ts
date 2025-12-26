import fs from "fs";
import path from "path";

export type MCQ = {
  id: string;
  type: "mcq";
  question: string;
  choices: string[];
  answer: string;
  weight?: number;
};
export type GAP = {
  id: string;
  type: "gap";
  text: string;
  solution: string | string[];
  prompt?: string;
  weight?: number;
};
export type READING = {
  id: string;
  type: "reading_mcq";
  passage: string;
  question: string;
  choices: string[];
  answer: string;
  weight?: number;
};
export type PlacementQ = MCQ | GAP | READING;

function rootJoin(...p: string[]) {
  return path.join(process.cwd(), ...p);
}

export function loadPlacement(): PlacementQ[] {
  const file = rootJoin("content/assessment/placement-100.json");
  try {
    const raw = fs.readFileSync(file, "utf8");
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data as PlacementQ[];
  } catch (e) {
    console.error("[placement] read error:", file, e);
    return [];
  }
}

export function getTotalCount(): number {
  return 100;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function norm(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

export function isCorrectMcq(q: MCQ | READING, chosen: string): boolean {
  return norm(chosen) === norm(q.answer);
}

export function isCorrectGap(q: GAP, user: string): boolean {
  const u = norm(user);
  const sols = Array.isArray(q.solution) ? q.solution : [q.solution];
  return sols.map((s) => norm(String(s))).includes(u);
}

export function publicize(q: PlacementQ): any {
  if (q.type === "mcq") {
    return {
      id: q.id,
      type: q.type,
      question: q.question,
      choices: shuffle(q.choices),
    };
  }
  if (q.type === "reading_mcq") {
    return {
      id: q.id,
      type: q.type,
      passage: q.passage,
      question: q.question,
      choices: shuffle(q.choices),
    };
  }
  return {
    id: q.id,
    type: q.type,
    text: q.text,
    prompt: (q as GAP).prompt,
  };
}


