export type SectionMeta = {
  key: string;
  title: string;
  subtitle?: string;
  cefr: "A1" | "A2" | "B1" | "B2" | "C1";
};

type Range = { start: number; end: number; meta: SectionMeta };

// 29 вопросов:
// 1-12: Grammar (A1×2, A2×2, B1×3, B2×3, C1×2)
// 13-20: Vocabulary (A2×2, B1×2, B2×2, C1×2)
// 21-23: Reading Text 1 (A2-B1)
// 24-28: Reading Text 2 (B2-C1)
// 29: Listening Matching (B1-B2)
const RANGES: Range[] = [
  {
    start: 1,
    end: 4,
    meta: { key: "grammar-a1a2", title: "Grammar (A1–A2)", cefr: "A2" },
  },
  {
    start: 5,
    end: 7,
    meta: { key: "grammar-b1", title: "Grammar (B1)", cefr: "B1" },
  },
  {
    start: 8,
    end: 10,
    meta: { key: "grammar-b2", title: "Grammar (B2)", cefr: "B2" },
  },
  {
    start: 11,
    end: 12,
    meta: { key: "grammar-c1", title: "Grammar (C1)", cefr: "C1" },
  },
  {
    start: 13,
    end: 14,
    meta: { key: "vocab-a2", title: "Vocabulary (A2)", cefr: "A2" },
  },
  {
    start: 15,
    end: 16,
    meta: { key: "vocab-b1", title: "Vocabulary (B1)", cefr: "B1" },
  },
  {
    start: 17,
    end: 18,
    meta: { key: "vocab-b2", title: "Vocabulary (B2)", cefr: "B2" },
  },
  {
    start: 19,
    end: 20,
    meta: { key: "vocab-c1", title: "Vocabulary (C1)", cefr: "C1" },
  },
  {
    start: 21,
    end: 23,
    meta: { key: "reading-1", title: "Reading (Text 1)", subtitle: "Everyday Life", cefr: "B1" },
  },
  {
    start: 24,
    end: 28,
    meta: { key: "reading-2", title: "Reading (Text 2)", subtitle: "Technology & Society", cefr: "C1" },
  },
  {
    start: 29,
    end: 29,
    meta: { key: "listening", title: "Listening", subtitle: "Hobbies & Activities", cefr: "B1" },
  },
];

export function getSectionMetaByIndex(index1based: number): SectionMeta {
  const f = RANGES.find((r) => index1based >= r.start && index1based <= r.end);
  return f?.meta ?? { key: "default", title: "Grammar & Use", cefr: "A1" };
}
