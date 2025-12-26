"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Possessive({ step }: Props) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    default:
      return <Step1 />;
  }
}

/* ===== СТРАНИЦА 1: Теория — What are Possessive 's? ===== */
function Step1() {
  return (
    <>
      <UiSection title="1. What are Possessive 's? (Что такое Possessive 's?)">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <b>Possessive 's</b> (притяжательный 's) — это способ показать
          владение (ownership) или связь между существительными. Добавляем{" "}
          <b>'s</b> (апостроф + s) к существительному, чтобы сказать "чьё-то".
        </p>

        <div className="bg-indigo-50/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-zinc-900 mb-3">
            Примеры предложений с possessive 's
          </h4>

          <div className="space-y-4">
            <ExampleBlock
              number={1}
              title="С singular noun (единственное существительное)"
              en="The boy's toy is new."
              ru="Игрушка мальчика новая."
              explanation={
                <>
                  <b>'s</b> добавляется к singular noun "boy" (мальчик), чтобы
                  показать владение. Это один мальчик, так 's после слова.
                </>
              }
            />

            <ExampleBlock
              number={2}
              title="С plural noun ending on -s (множественное на -s)"
              en="The boys' toys are new."
              ru="Игрушки мальчиков новые."
              explanation={
                <>
                  Для plural nouns на -s (boys — мальчики), только апостроф{" "}
                  <b>'</b> после -s, без дополнительной s. Показывает владение
                  группы.
                </>
              }
            />

            <ExampleBlock
              number={3}
              title="С irregular plural (неправильное множественное)"
              en="The children's toys are fun."
              ru="Игрушки детей весёлые."
              explanation={
                <>
                  Для irregular plurals (children — дети, не на -s), добавляем{" "}
                  <b>'s</b> как для singular.
                </>
              }
            />

            <ExampleBlock
              number={4}
              title="С names ending on -s (имена на -s)"
              en="James' car is fast."
              ru="Машина Джеймса быстрая."
              explanation={
                <>
                  Для имён на -s (James), обычно только <b>'</b>, но иногда 's
                  (James's) — оба ок, но ' чаще в современном английском.
                </>
              }
            />

            <ExampleBlock
              number={5}
              title="Для времени или расстояния"
              en="Today's news is good."
              ru="Сегодняшние новости хорошие."
              explanation={
                <>
                  <b>'s</b> для времени (today's — сегодняшние), как владение
                  дня.
                </>
              }
            />

            <ExampleBlock
              number={6}
              title="Без 's для неодушевлённых (inanimate)"
              en="The door of the house is open. (Not: The house's door.)"
              ru="Дверь дома открыта."
              explanation={
                <>
                  Для вещей (house — дом) чаще <b>"of"</b>, не 's, чтобы
                  избежать неестественности. Но иногда 's ок для групп
                  (company's policy — политика компании).
                </>
              }
            />
          </div>
        </div>
      </UiSection>

      <UiSection title="2. Правила possessive 's (Rules of Possessive 's)">
        <div className="space-y-6">
          <TypeBlock
            title="2.1. Для singular nouns и имён (Singular Nouns and Names)"
            description={
              <>
                Для <b>singular countable nouns</b> (единственное исчисляемое
                существительное) или имён добавляем <b>'s</b>, чтобы показать
                владение. Это когда один владелец.
              </>
            }
            rules={[
              {
                title: "Когда использовать?",
                text: "Перед тем, что принадлежит: owner's thing (вещь владельца). Для людей/животных: the girl's dress (платье девочки). Для имён: Anna's phone (телефон Анны).",
              },
              {
                title: "Правила:",
                text: (
                  <>
                    Добавляй <b>'s</b> после слова. Если слово на -s (boss —
                    босс), всё равно 's (boss's office — офис босса). Но для
                    имён на -s (Chris) — Chris' или Chris's (оба ок).
                  </>
                ),
              },
              {
                title: "Произношение:",
                text: (
                  <>
                    's звучит [z] после гласных/звонких (boy's [bɔɪz]), [s]
                    после глухих (cat's [kæts]), [ɪz] после шипящих (judge's
                    [dʒʌdʒɪz])
                  </>
                ),
              },
            ]}
            examples={[
              {
                en: "The dog's bone is big.",
                ru: "Кость собаки большая. — 'Dog's' singular, владение животного.",
              },
              {
                en: "My friend's house is nice.",
                ru: "Дом моего друга красивый. — 'Friend's' singular person.",
              },
              {
                en: "The teacher's book is open.",
                ru: "Книга учителя открыта. — 'Teacher's' singular.",
              },
              {
                en: "Sarah's idea is great.",
                ru: "Идея Сары отличная. — 'Sarah's' name.",
              },
              {
                en: "The car's engine is loud.",
                ru: "Двигатель машины громкий. — 'Car's' для вещи (ок, но редко).",
              },
            ]}
          />

          <TypeBlock
            title="2.2. Для plural nouns (Plural Nouns — Множественные существительные)"
            description={
              <>
                Для <b>plural nouns</b> (множественное число) показываем
                владение группы. Если plural на -s, добавляем только <b>'</b>{" "}
                (апостроф). Если irregular (не на -s), добавляем <b>'s</b>.
              </>
            }
            rules={[
              {
                title: "Когда использовать?",
                text: "Для групп: the students' books (книги студентов). Для семей: the Smiths' home (дом Смитов).",
              },
              {
                title: "Правила:",
                text: (
                  <>
                    Если на -s (cats — кошки) — <b>cats'</b>. Если не на -s
                    (children — дети) — <b>children's</b>. Для compound
                    (сложные): my brother-in-law's car (машина зятя).
                  </>
                ),
              },
              {
                title: "Произношение:",
                text: "То же, как для singular: [z], [s], [ɪz].",
              },
            ]}
            examples={[
              {
                en: "The cats' food is ready.",
                ru: "Еда кошек готова. — 'Cats'' plural на -s.",
              },
              {
                en: "The children's games are fun.",
                ru: "Игры детей весёлые. — 'Children's' irregular plural.",
              },
              {
                en: "The teachers' room is big.",
                ru: "Комната учителей большая. — 'Teachers'' plural на -s.",
              },
              {
                en: "The families' cars are parked.",
                ru: "Машины семей припаркованы. — 'Families'' plural.",
              },
              {
                en: "The men's hats are old.",
                ru: "Шляпы мужчин старые. — 'Men's' irregular.",
              },
            ]}
          />

          <TypeBlock
            title="2.3. Другие случаи и альтернативы (Other Cases and Alternatives)"
            description={
              <>
                <b>'s</b> не только для людей: для времени (yesterday's news —
                вчерашние новости), расстояния (a mile's walk — прогулка в
                милю), групп (team's goal — цель команды). Альтернатива —{" "}
                <b>"of"</b> для неодушевлённых или формальности.
              </>
            }
            rules={[
              {
                title: "Когда использовать?",
                text: "Для времени: tomorrow's plan (завтрашний план). Для стоимости: two dollars' worth (на два доллара). С pronouns: one of my friend's (один из друзей моего).",
              },
              {
                title: "Правила:",
                text: (
                  <>
                    Не используй 's с possessive pronouns (my, his): Wrong: my
                    friend's his book; Right: my friend's book. Для joint
                    ownership: Ann and Bob's house (дом Анны и Боба — общий).
                    Separate: Ann's and Bob's houses (дома Анны и Боба —
                    разные).
                  </>
                ),
              },
            ]}
            examples={[
              {
                en: "Yesterday's weather was bad.",
                ru: "Вчерашняя погода была плохой. — Время.",
              },
              {
                en: "The company's policy is strict.",
                ru: "Политика компании строгая. — Группа.",
              },
              {
                en: "A week's vacation is short.",
                ru: "Отпуск в неделю короткий. — Время.",
              },
              {
                en: "The color of the car is red.",
                ru: "Цвет машины красный. — 'Of' для вещи.",
              },
              {
                en: "Tom and Mary's child is cute.",
                ru: "Ребёнок Тома и Мэри милый. — Joint.",
              },
            ]}
          />
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Практика для Possessive 's ===== */
function Step2() {
  // Задание 2: Fill-in-the-blanks — Вставь possessive форму в предложения
  const fillInItems: FillItem[] = [
    {
      left: "The",
      right: " (boy) toy is broken.",
      answers: ["boy's"],
      explanation: "Singular — используй 'boy's'.",
    },
    {
      left: "The",
      right: " (boys) toys are broken.",
      answers: ["boys'"],
      explanation: "Plural on -s — используй 'boys''.",
    },
    {
      left: "The",
      right: " (child) game is fun.",
      answers: ["child's"],
      explanation: "Singular — используй 'child's'.",
    },
    {
      left: "The",
      right: " (children) games are fun.",
      answers: ["children's"],
      explanation: "Irregular plural — используй 'children's'.",
    },
    {
      left: "The",
      right: " (dog) bone is big.",
      answers: ["dog's"],
      explanation: "Singular — используй 'dog's'.",
    },
    {
      left: "The",
      right: " (dogs) bones are big.",
      answers: ["dogs'"],
      explanation: "Plural on -s — используй 'dogs''.",
    },
    {
      left: "The",
      right: " (teacher) book is new.",
      answers: ["teacher's"],
      explanation: "Singular — используй 'teacher's'.",
    },
    {
      left: "The",
      right: " (teachers) books are new.",
      answers: ["teachers'"],
      explanation: "Plural on -s — используй 'teachers''.",
    },
    {
      left: "My",
      right: " (friend) house is big.",
      answers: ["friend's"],
      explanation: "Singular — используй 'friend's'.",
    },
    {
      left: "My",
      right: " (friends) houses are big.",
      answers: ["friends'"],
      explanation: "Plural on -s — используй 'friends''.",
    },
    {
      left: "The",
      right: " (cat) food is tasty.",
      answers: ["cat's"],
      explanation: "Singular — используй 'cat's'.",
    },
    {
      left: "The",
      right: " (cats) food is tasty.",
      answers: ["cats'"],
      explanation: "Plural on -s — используй 'cats''.",
    },
    {
      left: "The",
      right: " (man) hat is old.",
      answers: ["man's"],
      explanation: "Irregular singular — используй 'man's'.",
    },
    {
      left: "The",
      right: " (men) hats are old.",
      answers: ["men's"],
      explanation: "Irregular plural — используй 'men's'.",
    },
    {
      left: "The",
      right: " (woman) dress is pretty.",
      answers: ["woman's"],
      explanation: "Singular — используй 'woman's'.",
    },
    {
      left: "The",
      right: " (women) dresses are pretty.",
      answers: ["women's"],
      explanation: "Irregular plural — используй 'women's'.",
    },
    {
      left: "The",
      right: " (boss) office is clean.",
      answers: ["boss's", "boss'"],
      explanation: "Singular on -s — используй 'boss's' или 'boss''.",
    },
    {
      left: "The",
      right: " (bosses) offices are clean.",
      answers: ["bosses'"],
      explanation: "Plural on -s — используй 'bosses''.",
    },
    {
      left: "",
      right: " (James) car is fast.",
      answers: ["James'", "James's"],
      explanation: "Name on -s — используй 'James'' или 'James's'.",
    },
    {
      left: "The",
      right: " (company) policy is good.",
      answers: ["company's"],
      explanation: "Singular — используй 'company's'.",
    },
  ];

  return (
    <>
      <UiSection title="Практика для Possessive 's (Practice for Possessive 's)">
        <p className="text-zinc-700 mb-4">
          Вставьте правильную possessive форму слова из скобок в предложения
          ниже. Например: <i>(boy) → boy's</i>. Помните: <b>singular = 's</b>,{" "}
          <b>plural on -s = '</b>, <b>irregular = 's</b>.
        </p>

        <div className="bg-blue-50/50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-2">💡 Подсказка:</h4>
          <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
            <li>
              <b>Singular:</b> boy → boy's, dog → dog's, teacher → teacher's
            </li>
            <li>
              <b>Plural on -s:</b> boys → boys', dogs → dogs', teachers →
              teachers'
            </li>
            <li>
              <b>Irregular plural:</b> children → children's, men → men's, women
              → women's
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="Задание: Вставь правильную possessive форму"
        instruction="Преобразуйте слово из скобок в possessive форму. Нажмите Enter, чтобы перейти к следующему полю."
        items={fillInItems}
      />

      <UiSection title="Словарь для запоминания">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            ["boy's", "bɔɪz", "мальчика", "singular"],
            ["boys'", "bɔɪz", "мальчиков", "plural"],
            ["child's", "tʃaɪldz", "ребёнка", "singular"],
            ["children's", "ˈtʃɪldrənz", "детей", "irregular"],
            ["dog's", "dɒɡz", "собаки", "singular"],
            ["dogs'", "dɒɡz", "собак", "plural"],
            ["teacher's", "ˈtiːtʃərz", "учителя", "singular"],
            ["teachers'", "ˈtiːtʃərz", "учителей", "plural"],
            ["friend's", "frɛndz", "друга", "singular"],
            ["friends'", "frɛndz", "друзей", "plural"],
            ["man's", "mænz", "мужчины", "singular"],
            ["men's", "mɛnz", "мужчин", "irregular"],
          ].map(([word, trans, ru, type]) => (
            <div
              key={word}
              className="rounded-lg border border-zinc-200 bg-white p-3"
            >
              <div className="font-medium text-zinc-900">{word}</div>
              <div className="text-xs text-zinc-500 mt-1">[{trans}]</div>
              <div className="text-sm text-zinc-600">{ru}</div>
              <div className="text-xs text-indigo-600 mt-1">{type}</div>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Сравнение Possessive 's vs Pronouns vs Of ===== */
function Step3() {
  const comparisonItems: FillItem[] = [
    {
      left: "The",
      right: " book is new. (noun)",
      answers: ["boy's"],
      explanation: "Для noun используй 's — boy's.",
    },
    {
      left: "",
      right: " book is new. (pronoun)",
      answers: ["His", "My", "Your"],
      explanation: "Для pronoun используй his/my/your.",
    },
    {
      left: "The book of the",
      right: " is new. (of)",
      answers: ["boy"],
      explanation: "С 'of' используй простое существительное — boy.",
    },
    {
      left: "The",
      right: " toys are fun. (plural)",
      answers: ["children's"],
      explanation: "Irregular plural — children's.",
    },
    {
      left: "The door of the",
      right: " is open. (thing)",
      answers: ["house"],
      explanation: "Для вещей чаще 'of' — door of the house.",
    },
    {
      left: "",
      right: " news is good. (time)",
      answers: ["Today's"],
      explanation: "Для времени используй 's — Today's.",
    },
    {
      left: "The",
      right: " policy is strict. (group)",
      answers: ["company's"],
      explanation: "Для группы/организации — company's.",
    },
    {
      left: "Tom and Mary's",
      right: " is cute. (joint)",
      answers: ["child"],
      explanation: "Joint ownership — один 's после последнего имени.",
    },
  ];

  return (
    <>
      <UiSection title="Сравнение: Possessive 's vs Possessive Pronouns vs Of">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Теперь сравним три способа показать владение и научимся различать,
          когда какой использовать.
        </p>

        <div className="space-y-4">
          <ComparisonBlock
            title="Possessive 's vs Possessive Pronouns"
            items={[
              {
                label: "Possessive 's",
                description: "Для nouns: показывает владельца по имени/типу",
                example: "The boy's book / Sarah's phone / The dog's bone",
              },
              {
                label: "Possessive Pronouns",
                description: "Заменяют noun: короче и проще",
                example: "His book / Her phone / Its bone",
              },
            ]}
          />

          <ComparisonBlock
            title="Possessive 's vs Of"
            items={[
              {
                label: "Possessive 's",
                description:
                  "Для людей, животных, групп, времени (более естественно)",
                example: "The girl's dress / Today's news / The team's goal",
              },
              {
                label: "Of",
                description: "Для вещей, формальности, абстракций",
                example: "The door of the house / The meaning of life",
              },
            ]}
          />

          <ComparisonBlock
            title="Сравнение по позиции"
            items={[
              {
                label: "Possessive 's",
                description: "Owner + 's + Thing",
                example: "boy's book (owner перед thing)",
              },
              {
                label: "Possessive Pronouns",
                description: "Pronoun + Thing",
                example: "his book (pronoun перед thing)",
              },
              {
                label: "Of",
                description: "Thing + of + Owner",
                example: "book of the boy (thing перед owner)",
              },
            ]}
          />

          <ComparisonBlock
            title="Сравнение по контексту"
            items={[
              {
                label: "People/Animals",
                description: "'s или pronouns (boy's book / his book)",
                example: "The dog's bone = Its bone",
              },
              {
                label: "Things",
                description: "'of' чаще (door of the house)",
                example: "The house's door — звучит странно",
              },
              {
                label: "Time/Groups",
                description: "'s (today's news / company's policy)",
                example: "Yesterday's weather / The team's victory",
              },
            ]}
          />
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Выбери правильную форму владения"
        instruction="Вставьте правильную форму в зависимости от контекста."
        items={comparisonItems}
      />

      <UiSection title="Частые ошибки и как их избежать">
        <div className="space-y-3">
          <ErrorBlock
            wrong="The boys's toys"
            correct="The boys' toys"
            explanation="Plural на -s — только апостроф ', не добавляй лишнюю s."
          />
          <ErrorBlock
            wrong="My friend's his book"
            correct="My friend's book"
            explanation="Не используй двойное владение — либо 's, либо pronoun."
          />
          <ErrorBlock
            wrong="The house's door"
            correct="The door of the house"
            explanation="Для неодушевлённых вещей чаще используй 'of'."
          />
          <ErrorBlock
            wrong="Childrens' toys"
            correct="Children's toys"
            explanation="Irregular plural — добавляй 's, не только апостроф."
          />
        </div>

        <div className="mt-6 bg-emerald-50/50 rounded-lg p-4">
          <h4 className="font-semibold text-emerald-900 mb-2">📝 Памятка</h4>
          <ul className="space-y-1 text-sm text-emerald-900">
            <li>
              <b>Singular</b> — добавляй 's (boy's, dog's, teacher's)
            </li>
            <li>
              <b>Plural on -s</b> — только апостроф ' (boys', dogs', teachers')
            </li>
            <li>
              <b>Irregular plural</b> — добавляй 's (children's, men's, women's)
            </li>
            <li>
              <b>Names on -s</b> — ' или 's (James' или James's — оба ок)
            </li>
            <li>
              <b>Things</b> — используй 'of' (the door of the house)
            </li>
            <li>
              <b>Time</b> — используй 's (today's, yesterday's, tomorrow's)
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ===== */

function ExampleBlock({
  number,
  title,
  en,
  ru,
  explanation,
}: {
  number: number;
  title: string;
  en: string;
  ru: string;
  explanation: React.ReactNode;
}) {
  return (
    <div className="border-l-4 border-indigo-400 pl-4">
      <div className="text-sm font-semibold text-indigo-700 mb-1">
        Пример {number}: {title}
      </div>
      <div className="font-medium text-zinc-900">{en}</div>
      <div className="text-sm text-zinc-600 italic mb-2">{ru}</div>
      <div className="text-sm text-zinc-700">
        <b>Почему:</b> {explanation}
      </div>
    </div>
  );
}

function TypeBlock({
  title,
  description,
  rules,
  examples,
}: {
  title: string;
  description: React.ReactNode;
  rules: { title: string; text: React.ReactNode }[];
  examples: { en: string; ru: string }[];
}) {
  return (
    <div className="border border-zinc-200 rounded-lg p-4 bg-white/50">
      <h4 className="font-semibold text-lg text-zinc-900 mb-2">{title}</h4>
      <p className="text-zinc-700 mb-3">{description}</p>

      <div className="space-y-3 mb-4">
        {rules.map((rule, i) => (
          <div key={i}>
            <div className="text-sm font-medium text-zinc-800">
              {rule.title}
            </div>
            <div className="text-sm text-zinc-700 mt-1">{rule.text}</div>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-200 pt-3">
        <div className="text-sm font-medium text-zinc-800 mb-2">Примеры:</div>
        <div className="space-y-1">
          {examples.map((ex, i) => (
            <div key={i} className="text-sm">
              <span className="text-zinc-900">{ex.en}</span>
              <span className="text-zinc-500 ml-2">— {ex.ru}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComparisonBlock({
  title,
  items,
}: {
  title: string;
  items: { label: string; description: string; example: string }[];
}) {
  return (
    <div className="border border-zinc-200 rounded-lg p-4 bg-white/50">
      <h4 className="font-semibold text-zinc-900 mb-3">{title}</h4>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3">
            <div className="font-medium text-indigo-600 min-w-[160px]">
              {item.label}:
            </div>
            <div className="flex-1">
              <div className="text-sm text-zinc-700">{item.description}</div>
              <div className="text-sm text-zinc-500 italic mt-0.5">
                {item.example}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ErrorBlock({
  wrong,
  correct,
  explanation,
}: {
  wrong: string;
  correct: string;
  explanation: string;
}) {
  return (
    <div className="flex gap-3 items-start bg-zinc-50 rounded-lg p-3">
      <div className="flex-1">
        <div className="flex gap-3 text-sm mb-1">
          <span className="text-red-600">✗ {wrong}</span>
          <span className="text-emerald-600">✓ {correct}</span>
        </div>
        <div className="text-sm text-zinc-600">{explanation}</div>
      </div>
    </div>
  );
}
