export type TrackKey = "a1" | "b1" | "c2";

export const TRACKS: Record<
  TrackKey,
  {
    title: string;
    subtitle: string;
    pill: string;
    hero: string;
    slug: string;
  }
> = {
  a1: {
    title: "Начальный",
    subtitle:
      "Фундаментальные основы: алфавит, базовая грамматика, лексика A1-A2",
    pill: "A1-A2 • Elementary",
    hero: "Старт для тех, кто начинает с нуля или хочет восстановить базу.",
    slug: "a1",
  },
  b1: {
    title: "Базовый",
    subtitle: "Укрепите времена, лексические темы и связность речи (B1–B2)",
    pill: "B1-B2 • Intermediate",
    hero: "Системный прогресс: времена, устойчивые сочетания, практика говорения.",
    slug: "b1",
  },
  b2: {
    title: "Продвинутый",
    subtitle: "Сложная грамматика, академический английский и профессиональное общение (C1–C2)",
    pill: "C1-C2 • Advanced",
    hero: "Мастерство языка: сложные конструкции, нюансы, профессиональный уровень.",
    slug: "c2",
  },
};
