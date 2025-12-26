export type CEFR = "A1" | "A2" | "B1" | "B2" | "C1";

/**
 * Вычисляет уровень CEFR на основе суммы баллов (0-100)
 * C1: ≥ 80; B2: ≥ 65; B1: ≥ 45; A2: ≥ 25; иначе A1
 */
export function computeLevel(score: number): CEFR {
  if (score >= 80) return "C1";
  if (score >= 65) return "B2";
  if (score >= 45) return "B1";
  if (score >= 25) return "A2";
  return "A1";
}

/**
 * Вычисляет процент точности на основе суммы баллов
 */
export function computeAccuracy(score: number): number {
  return Math.round((score / 100) * 100);
}











