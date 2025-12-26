// src/lib/placement/articles/grandCanyonData.ts
export const GRAND_CANYON_PASSAGE = `
Задание: вставьте артикли a / an / the или оставьте пусто (нулевой артикль).

The Grand Canyon is {{1}} geological and scenic wonder that is known throughout {{2}} world.
Located in {{3}} United States in {{4}} Northern Arizona, it is 446 kilometres long,
up to 29 kilometres wide and has {{5}} depth of up to 1.8 kilometres.

The Grand Canyon is {{6}} world-famous geological site. {{7}} canyon's walls contain rock layers
that expose nearly two billion years of {{8}} Earth's history. Geologic studies began in {{9}} 19th century
and continue today. One of {{10}} biggest questions is how {{11}} Colorado River chose its course
and began carving {{12}} canyon. {{13}} area contains several major ecosystems and is home to over
1500 plant and over 400 animal species.

For thousands of years, {{14}} area has been inhabited by {{15}} Native Americans. In the early 1800s,
{{16}} United States government started to send expeditions to explore and map {{17}} canyon.
{{18}} area received federal protection in 1893 as {{19}} forest reserve. Later, in 1919, it received
national park status. Today {{20}} Grand Canyon National Park receives almost five million visitors each year.
`.trim();

export const GRAND_CANYON_ANSWERS = [
  "a", // 1 a geological wonder
  "the", // 2 the world
  "the", // 3 the United States
  "", // 4 (in) Northern Arizona — без артикля
  "a", // 5 a depth
  "a", // 6 a world-famous site
  "the", // 7 the canyon's walls
  "the", // 8 the Earth's history
  "the", // 9 the 19th century
  "the", //10 one of the biggest questions
  "the", //11 the Colorado River
  "the", //12 carving the canyon
  "the", //13 the area contains...
  "the", //14 for thousands of years, the area...
  "", //15 (by) Native Americans — без артикля
  "the", //16 the United States government
  "the", //17 the canyon
  "the", //18 the area received...
  "a", //19 as a forest reserve
  "", //20 Today (—) Grand Canyon National Park... (допускаем и "the" — см. hints)
];

export const GRAND_CANYON_HINTS = [
  "Впервые упоминается исчисляемый объект → неопределённый артикль.",
  "Уникальный объект: the world.",
  "Государство с определением — устойчиво: the United States.",
  "Топоним «Northern Arizona» в роли региона чаще без артикля.",
  "Словосочетание «a depth of …».",
  "Впервые упоминаемый тип/класс объекта → a.",
  "Дальше говорим о конкретном каньоне → the.",
  "История Земли — конкретная реальность → the Earth's history.",
  "Порядковые/века: the 19th century.",
  "Конструкция «one of the + superlative + plural» → the.",
  "Географические названия рек: the Colorado River.",
  "Конкретный каньон → the canyon.",
  "Уже известная читателю область → the area.",
  "Продолжаем о той же области → the.",
  "Названия народов во множественном числе — без артикля.",
  "Конкретный субъект: the United States government.",
  "Речь о том же каньоне → the.",
  "Опять о той же области → the.",
  "«as a forest reserve» — новый тип/статус → a.",
  "Обычно без артикля в «Grand Canyon National Park». Если пользователь введёт «the», можно засчитать — см. расширения ниже.",
];

// Дополнительно (необязательно): расширить принятие ответов для 20-го места:
export const GRAND_CANYON_ACCEPT_ALTERNATIVES: Record<number, string[]> = {
  20: ["", "the"], // принимать и пусто, и "the"
};
