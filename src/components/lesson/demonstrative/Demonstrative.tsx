"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Demonstrative({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Теория — What are Demonstrative Pronouns? ===== */
function Step1() {
  return (
    <>
      <UiSection title="1. What are Demonstrative Pronouns? (Что такое указательные местоимения?)">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <b>Указательные местоимения (Demonstrative Pronouns)</b> — это слова,
          которые указывают на конкретные предметы или людей и показывают их
          расположение относительно говорящего (близко или далеко). В английском
          языке есть четыре основных указательных местоимения:{" "}
          <b>this, that, these, those</b>.
        </p>

        <div className="bg-indigo-50/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-zinc-900 mb-3">
            Примеры предложений с указательными местоимениями
          </h4>

          <div className="space-y-4">
            <ExampleBlock
              number={1}
              title='С "this" (единственное число, близко)'
              en="This is my book."
              ru="Это моя книга. (Книга находится близко к говорящему.)"
              explanation={
                <>
                  <b>"This"</b> используется для указания на предмет в
                  единственном числе (singular), который находится близко к
                  говорящему. Это может быть что-то, что вы держите в руке или
                  что-то рядом с вами. <b>"This"</b> = этот/эта/это (близко).
                </>
              }
            />

            <ExampleBlock
              number={2}
              title='С "that" (единственное число, далеко)'
              en="That is your car."
              ru="То твоя машина. (Машина находится далеко от говорящего.)"
              explanation={
                <>
                  <b>"That"</b> используется для указания на предмет в
                  единственном числе (singular), который находится далеко от
                  говорящего. Это может быть что-то на другом конце комнаты или
                  на расстоянии. <b>"That"</b> = тот/та/то (далеко).
                </>
              }
            />

            <ExampleBlock
              number={3}
              title='С "these" (множественное число, близко)'
              en="These are my friends."
              ru="Эти мои друзья. (Друзья находятся близко к говорящему.)"
              explanation={
                <>
                  <b>"These"</b> — множественная форма (plural) от "this".
                  Используется для указания на несколько предметов или людей,
                  которые находятся близко к говорящему. <b>"These"</b> = эти
                  (близко, множественное число).
                </>
              }
            />

            <ExampleBlock
              number={4}
              title='С "those" (множественное число, далеко)'
              en="Those are expensive cars."
              ru="То дорогие машины. (Машины находятся далеко от говорящего.)"
              explanation={
                <>
                  <b>"Those"</b> — множественная форма (plural) от "that".
                  Используется для указания на несколько предметов или людей,
                  которые находятся далеко от говорящего. <b>"Those"</b> = те
                  (далеко, множественное число).
                </>
              }
            />
          </div>
        </div>
      </UiSection>

      <UiSection title="2. Правила использования (Rules for Using Demonstrative Pronouns)">
        <div className="space-y-6">
          <TypeBlock
            title="This / That (Единственное число)"
            description={
              <>
                <b>This</b> и <b>that</b> используются с существительными в
                единственном числе или когда указательное местоимение стоит
                отдельно (без существительного).
              </>
            }
            rules={[
              {
                title: "This (этот/эта/это) — близко",
                text: (
                  <>
                    Используй <b>this</b>, когда предмет находится рядом с тобой
                    <br />
                    Можно сказать: "This is..." или "This book is..."
                    <br />
                    <i>This</i> показывает близость в пространстве или времени
                  </>
                ),
              },
              {
                title: "That (тот/та/то) — далеко",
                text: (
                  <>
                    Используй <b>that</b>, когда предмет находится далеко от
                    тебя
                    <br />
                    Можно сказать: "That is..." или "That car is..."
                    <br />
                    <i>That</i> показывает удалённость в пространстве или
                    времени
                  </>
                ),
              },
            ]}
            examples={[
              { en: "This is a pen.", ru: "Это ручка. (в моей руке)" },
              { en: "This phone is new.", ru: "Этот телефон новый. (рядом)" },
              { en: "That is a tree.", ru: "То дерево. (вдали)" },
              {
                en: "That building is tall.",
                ru: "То здание высокое. (далеко)",
              },
            ]}
          />

          <TypeBlock
            title="These / Those (Множественное число)"
            description={
              <>
                <b>These</b> и <b>those</b> используются с существительными во
                множественном числе или когда указывают на несколько предметов.
              </>
            }
            rules={[
              {
                title: "These (эти) — близко",
                text: (
                  <>
                    <b>These</b> — форма множественного числа от "this"
                    <br />
                    Используй, когда несколько предметов находятся рядом
                    <br />
                    Можно сказать: "These are..." или "These books are..."
                  </>
                ),
              },
              {
                title: "Those (те) — далеко",
                text: (
                  <>
                    <b>Those</b> — форма множественного числа от "that"
                    <br />
                    Используй, когда несколько предметов находятся далеко
                    <br />
                    Можно сказать: "Those are..." или "Those cars are..."
                  </>
                ),
              },
            ]}
            examples={[
              { en: "These are my keys.", ru: "Эти мои ключи. (в руке)" },
              {
                en: "These shoes are comfortable.",
                ru: "Эти туфли удобные. (на мне)",
              },
              { en: "Those are birds.", ru: "То птицы. (в небе, далеко)" },
              {
                en: "Those mountains are beautiful.",
                ru: "Те горы красивые. (вдали)",
              },
            ]}
          />

          <TypeBlock
            title="Расстояние и время"
            description={
              <>
                Указательные местоимения указывают не только на физическое
                расстояние, но и на время (настоящее vs прошлое/будущее).
              </>
            }
            rules={[
              {
                title: "This/These для настоящего времени",
                text: "This morning (этим утром), these days (в эти дни) — о настоящем или недавнем прошлом",
              },
              {
                title: "That/Those для прошлого",
                text: "That day (в тот день), those years (в те годы) — о далёком прошлом",
              },
            ]}
            examples={[
              { en: "This week is busy.", ru: "Эта неделя занятая." },
              {
                en: "That was a great party.",
                ru: "Та вечеринка была отличной.",
              },
              { en: "These days are difficult.", ru: "Эти дни трудные." },
              { en: "Those were good times.", ru: "То были хорошие времена." },
            ]}
          />
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Практика для This/That и These/Those ===== */
function Step2() {
  const fillInItems: FillItem[] = [
    {
      left: "",
      right: "is my pen.",
      answers: ["This", "this"],
      explanation: "Единственное число, близко — используй 'This'.",
    },
    {
      left: "",
      right: "is your car.",
      answers: ["That", "that"],
      explanation: "Единственное число, далеко — используй 'That'.",
    },
    {
      left: "",
      right: "are my friends.",
      answers: ["These", "these"],
      explanation: "Множественное число, близко — используй 'These'.",
    },
    {
      left: "",
      right: "are expensive cars.",
      answers: ["Those", "those"],
      explanation: "Множественное число, далеко — используй 'Those'.",
    },
    {
      left: "",
      right: "book is interesting.",
      answers: ["This", "this"],
      explanation: "Singular noun, близко — используй 'This'.",
    },
    {
      left: "",
      right: "building is tall.",
      answers: ["That", "that"],
      explanation: "Singular noun, далеко — используй 'That'.",
    },
    {
      left: "",
      right: "shoes are comfortable.",
      answers: ["These", "these"],
      explanation: "Plural noun, близко — используй 'These'.",
    },
    {
      left: "",
      right: "mountains are beautiful.",
      answers: ["Those", "those"],
      explanation: "Plural noun, далеко — используй 'Those'.",
    },
    {
      left: "",
      right: "is my phone.",
      answers: ["This", "this"],
      explanation: "В руке, близко — используй 'This'.",
    },
    {
      left: "",
      right: "is a tree.",
      answers: ["That", "that"],
      explanation: "Вдали — используй 'That'.",
    },
    {
      left: "",
      right: "are my keys.",
      answers: ["These", "these"],
      explanation: "Несколько предметов, близко — используй 'These'.",
    },
    {
      left: "",
      right: "are birds.",
      answers: ["Those", "those"],
      explanation: "Несколько предметов, далеко — используй 'Those'.",
    },
    {
      left: "",
      right: "week is busy.",
      answers: ["This", "this"],
      explanation: "Текущая неделя (время, близко) — используй 'This'.",
    },
    {
      left: "",
      right: "was a great day.",
      answers: ["That", "that"],
      explanation: "Прошлое время (далеко) — используй 'That'.",
    },
    {
      left: "",
      right: "days are difficult.",
      answers: ["These", "these"],
      explanation: "Текущие дни (множественное, близко) — используй 'These'.",
    },
    {
      left: "",
      right: "were good times.",
      answers: ["Those", "those"],
      explanation: "Прошлое (множественное, далеко) — используй 'Those'.",
    },
    {
      left: "",
      right: "chair is mine.",
      answers: ["This", "this"],
      explanation: "Рядом со мной — используй 'This'.",
    },
    {
      left: "",
      right: "chair is yours.",
      answers: ["That", "that"],
      explanation: "Далеко от меня — используй 'That'.",
    },
    {
      left: "",
      right: "apples are fresh.",
      answers: ["These", "these"],
      explanation: "В корзине рядом (plural) — используй 'These'.",
    },
    {
      left: "",
      right: "apples are rotten.",
      answers: ["Those", "those"],
      explanation: "Там, вдали (plural) — используй 'Those'.",
    },
  ];

  return (
    <>
      <UiSection title="Практика для Demonstrative Pronouns">
        <p className="text-zinc-700 mb-4">
          Вставьте правильное указательное местоимение (<b>this, that, these</b>{" "}
          или <b>those</b>) в предложения ниже. Помните: this/these — близко,
          that/those — далеко; this/that — единственное число, these/those —
          множественное.
        </p>

        <div className="bg-blue-50/50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-2">💡 Подсказка:</h4>
          <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
            <li>
              <b>This</b> (этот/эта/это) — единственное число, близко
            </li>
            <li>
              <b>That</b> (тот/та/то) — единственное число, далеко
            </li>
            <li>
              <b>These</b> (эти) — множественное число, близко
            </li>
            <li>
              <b>Those</b> (те) — множественное число, далеко
            </li>
            <li>
              <b>Важно:</b> Смотри на число (singular/plural) и расстояние
              (near/far)!
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="Задание: Вставь правильное указательное местоимение"
        instruction="Заполните пропуски. Нажмите Enter, чтобы перейти к следующему полю."
        items={fillInItems}
      />

      <UiSection title="Словарь для запоминания">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              word: "this",
              ipa: "ðɪs",
              ru: "этот/эта/это",
              desc: "singular, near",
            },
            {
              word: "that",
              ipa: "ðæt",
              ru: "тот/та/то",
              desc: "singular, far",
            },
            {
              word: "these",
              ipa: "ðiːz",
              ru: "эти",
              desc: "plural, near",
            },
            {
              word: "those",
              ipa: "ðoʊz",
              ru: "те",
              desc: "plural, far",
            },
          ].map((item) => (
            <div
              key={item.word}
              className="rounded-lg border border-zinc-200 bg-white p-4"
            >
              <div className="font-medium text-zinc-900 text-lg">
                <span className="text-indigo-600">{item.word}</span>
              </div>
              <div className="text-xs text-zinc-500 mt-1">[{item.ipa}]</div>
              <div className="text-sm text-zinc-600 mt-1">{item.ru}</div>
              <div className="text-xs text-emerald-600 mt-2 font-medium">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Сравнение и практика ===== */
function Step3() {
  const comparisonItems: FillItem[] = [
    {
      left: "",
      right: "pen is mine, and",
      answers: ["This", "this"],
      explanation: "Ручка рядом со мной (near) — используй 'This'.",
    },
    {
      left: "This pen is mine, and",
      right: "pen is yours.",
      answers: ["that"],
      explanation: "Сравнение: эта (близко) vs та (далеко) — 'that'.",
    },
    {
      left: "",
      right: "shoes are new, but",
      answers: ["These", "these"],
      explanation: "Обувь на мне (near, plural) — 'These'.",
    },
    {
      left: "These shoes are new, but",
      right: "shoes are old.",
      answers: ["those"],
      explanation: "Сравнение: эти vs те — 'those'.",
    },
    {
      left: "",
      right: "is a good idea.",
      answers: ["This", "this"],
      explanation: "Текущая идея (near) — 'This'.",
    },
    {
      left: "",
      right: "are my parents.",
      answers: ["These", "these"],
      explanation: "Люди рядом (near, plural) — 'These'.",
    },
    {
      left: "",
      right: "building over there is a bank.",
      answers: ["That", "that"],
      explanation: "'Over there' указывает на удалённость — 'That'.",
    },
    {
      left: "",
      right: "birds in the sky are beautiful.",
      answers: ["Those", "those"],
      explanation: "В небе (far, plural) — 'Those'.",
    },
    {
      left: "",
      right: "morning I woke up early.",
      answers: ["This", "this"],
      explanation: "Текущее утро (time, near) — 'This'.",
    },
    {
      left: "",
      right: "day was amazing.",
      answers: ["That", "that"],
      explanation: "Прошлый день (time, far) — 'That'.",
    },
    {
      left: "I like",
      right: "book here.",
      answers: ["this"],
      explanation: "'Here' = рядом — 'this'.",
    },
    {
      left: "I don't like",
      right: "book over there.",
      answers: ["that"],
      explanation: "'Over there' = далеко — 'that'.",
    },
    {
      left: "",
      right: "problems are difficult.",
      answers: ["These", "these"],
      explanation: "Текущие проблемы (near, plural) — 'These'.",
    },
    {
      left: "",
      right: "problems were easy.",
      answers: ["Those", "those"],
      explanation: "Прошлые проблемы (far, plural) — 'Those'.",
    },
    {
      left: "Is",
      right: "your phone?",
      answers: ["this"],
      explanation: "Вопрос о предмете рядом — 'this'.",
    },
  ];

  return (
    <>
      <UiSection title="Сравнение и контраст: This vs That, These vs Those">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Часто мы используем указательные местоимения для сравнения: один
          предмет близко, другой далеко. Научимся различать их в контексте.
        </p>

        <div className="space-y-4">
          <ComparisonBlock
            title="Singular: This vs That"
            items={[
              {
                label: "This (near)",
                description: "Предмет рядом со мной, в моих руках, здесь",
                example: "This is my book. (Вот эта книга — моя)",
              },
              {
                label: "That (far)",
                description: "Предмет вдали, там, не рядом",
                example: "That is your book. (Та книга — твоя)",
              },
            ]}
          />

          <ComparisonBlock
            title="Plural: These vs Those"
            items={[
              {
                label: "These (near)",
                description: "Несколько предметов рядом, здесь",
                example: "These are my keys. (Вот эти ключи — мои)",
              },
              {
                label: "Those (far)",
                description: "Несколько предметов вдали, там",
                example: "Those are your keys. (Те ключи — твои)",
              },
            ]}
          />

          <ComparisonBlock
            title="Контраст в одном предложении"
            items={[
              {
                label: "This vs That",
                description: "Сравнение двух предметов",
                example: "This pen is mine, that pen is yours.",
              },
              {
                label: "These vs Those",
                description: "Сравнение двух групп",
                example: "These shoes are new, those shoes are old.",
              },
            ]}
          />
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Выбери правильное местоимение"
        instruction="Вставьте правильное указательное местоимение в контексте сравнения."
        items={comparisonItems}
      />

      <UiSection title="Частые ошибки и как их избежать">
        <div className="space-y-3">
          <ErrorBlock
            wrong="These is my book"
            correct="This is my book"
            explanation="'These' — для множественного числа. Для одной книги используй 'This'."
          />
          <ErrorBlock
            wrong="That are my keys"
            correct="Those are my keys"
            explanation="'That' — для единственного числа. Для нескольких ключей используй 'Those'."
          />
          <ErrorBlock
            wrong="This books are good"
            correct="These books are good"
            explanation="'Books' — множественное число, поэтому 'These', не 'This'."
          />
          <ErrorBlock
            wrong="Those is a tree"
            correct="That is a tree"
            explanation="'Those' — для множественного числа. Для одного дерева используй 'That'."
          />
        </div>

        <div className="mt-6 bg-emerald-50/50 rounded-lg p-4">
          <h4 className="font-semibold text-emerald-900 mb-2">📝 Памятка</h4>
          <ul className="space-y-1 text-sm text-emerald-900">
            <li>
              <b>This</b> (это) — singular, near → This is my pen
            </li>
            <li>
              <b>That</b> (то) — singular, far → That is your car
            </li>
            <li>
              <b>These</b> (эти) — plural, near → These are my friends
            </li>
            <li>
              <b>Those</b> (те) — plural, far → Those are your books
            </li>
            <li>
              <b>Правило:</b> Число существительного = число местоимения!
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
            <div className="font-medium text-indigo-600 min-w-[120px]">
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
