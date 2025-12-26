export type CEFR = "A1" | "A2" | "B1" | "B2" | "C1";

export function levelLabel(l: CEFR) {
  switch (l) {
    case "A1":
      return "Начальный (A1)";
    case "A2":
      return "Базовый (A2)";
    case "B1":
      return "Средний (B1)";
    case "B2":
      return "Upper-Intermediate (B2)";
    case "C1":
      return "Продвинутый (C1)";
  }
}

export function recommendedBlockName(level: CEFR): string {
  switch (level) {
    case "A1":
      return "Базовые конструкции и лексика";
    case "A2":
      return "Расширение словаря и времена Present";
    case "B1":
      return "Грамматика среднего уровня и разговорная практика";
    case "B2":
      return "Сложные времена и академический английский";
    case "C1":
      return "Профессиональный и академический английский";
  }
}

export function recommendedBlockPath(level: CEFR): string {
  switch (level) {
    case "A1":
      return "/blocks/a1-intro";
    case "A2":
      return "/blocks/a2-present";
    case "B1":
      return "/blocks/b1-grammar";
    case "B2":
      return "/blocks/c2-advanced";
    case "C1":
      return "/blocks/c1-pro";
  }
}

export function persuasiveBullets(level: CEFR): string[] {
  switch (level) {
    case "A1":
      return ["Освоите основы", "Начнёте строить простые предложения"];
    case "A2":
      return [
        "Расширите словарный запас",
        "Научитесь уверенно использовать времена Present",
      ];
    case "B1":
      return ["Закрепите времена", "Прокачаете разговорный навык"];
    case "B2":
      return [
        "Будете свободно читать и слушать сложные тексты",
        "Научитесь писать эссе и статьи",
      ];
    case "C1":
      return [
        "Продвинутые навыки письма и речи",
        "Подготовка к международным экзаменам",
      ];
  }
}
