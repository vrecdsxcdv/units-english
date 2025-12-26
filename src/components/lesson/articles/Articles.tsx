"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Articles({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Теория — What are Articles? ===== */
function Step1() {
  return (
    <>
      <UiSection title="1. What are Articles? (Что такое артикли?)">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <b>Артикли (Articles)</b> — это маленькие слова, стоящие перед
          существительным. Они помогают показать, о каком существительном мы
          говорим: об общем или конкретном.
        </p>

        <div className="bg-indigo-50/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-zinc-900 mb-3">
            Примеры предложений с артиклями
          </h4>

          <div className="space-y-4">
            <ExampleBlock
              number={1}
              title='С неопределенным артиклем "a"'
              en="A dog barks in the park."
              ru="Собака лает в парке. (Здесь подразумевается 'какая-то собака', не конкретная.)"
              explanation={
                <>
                  <b>"A"</b> используется перед единственным исчисляемым
                  существительным <i>"dog"</i> (собака), потому что это общее
                  упоминание — любая собака, первый раз говорится о ней. "Dog"
                  начинается на согласный звук [d], так что <b>"a"</b>, а не
                  "an".
                </>
              }
            />

            <ExampleBlock
              number={2}
              title='С неопределенным артиклем "an"'
              en="An apple is on the table."
              ru="Яблоко лежит на столе. (Подразумевается 'какое-то яблоко'.)"
              explanation={
                <>
                  <b>"An"</b> перед единственным исчисляемым <i>"apple"</i>{" "}
                  (яблоко), потому что это общее, первое упоминание. "Apple"
                  начинается на гласный звук [æ], так что <b>"an"</b>, а не "a".
                </>
              }
            />

            <ExampleBlock
              number={3}
              title='С определенным артиклем "the"'
              en="The book is interesting."
              ru="Книга интересная. (Подразумевается 'эта конкретная книга'.)"
              explanation={
                <>
                  <b>"The"</b> используется перед <i>"book"</i> (книга), потому
                  что это конкретная книга — та, о которой уже знают.{" "}
                  <b>"The"</b> показывает, что это "та самая" книга, уникальная
                  в контексте.
                </>
              }
            />

            <ExampleBlock
              number={4}
              title="Без артикля (no article / zero article)"
              en="Cats like milk."
              ru="Кошки любят молоко."
              explanation={
                <>
                  Нет артикля перед множественным <i>"cats"</i> (кошки) и
                  неисчисляемым <i>"milk"</i> (молоко), потому что это общее
                  утверждение — о кошках и молоке в целом, не о конкретных.
                </>
              }
            />
          </div>
        </div>
      </UiSection>

      <UiSection title="2. Типы артиклей (Types of Articles)">
        <div className="space-y-6">
          <TypeBlock
            title="Indefinite Articles — A/An (Неопределённые артикли)"
            description={
              <>
                <b>A/An</b> — для "любой один", не "этот конкретный". Они
                показывают, что существительное — это просто пример, не
                уникальный.
              </>
            }
            rules={[
              {
                title: "Когда использовать?",
                text: "Только с единственным числом исчисляемых существительных (singular countable nouns). Не используй a/an с множественным числом (plural) или неисчисляемыми (uncountable).",
              },
              {
                title: "Правила выбора A или An:",
                text: (
                  <>
                    Это зависит от <b>звука</b>, а не от буквы!
                    <br />
                    <b>"A"</b> — перед согласным звуком (consonant sound)
                    <br />
                    <b>"An"</b> — перед гласным звуком (vowel sound)
                    <br />
                    <i>Например:</i> "university" → <b>a</b> university (звук
                    [juː]); "hour" → <b>an</b> hour (немая h, звук [aʊər])
                  </>
                ),
              },
            ]}
            examples={[
              { en: "A job is important.", ru: "Работа важна." },
              {
                en: "An idea can change the world.",
                ru: "Идея может изменить мир.",
              },
              {
                en: "An hour feels long sometimes.",
                ru: "Час иногда кажется долгим.",
              },
            ]}
          />

          <TypeBlock
            title="Definite Article — The (Определённый артикль)"
            description={
              <>
                <b>The</b> — для "the specific one", не для общего.
                Используется, когда оба (говорящий и слушатель) знают, о каком
                именно предмете речь.
              </>
            }
            rules={[
              {
                title: "Когда использовать?",
                text: "С любыми существительными: singular, plural, countable, uncountable. Ключевые случаи: второе упоминание, единственные в мире (the sun, the moon), конкретные группы (the books on the table).",
              },
              {
                title: "Произношение:",
                text: (
                  <>
                    <b>[ðə]</b> перед согласным звуком (the book)
                    <br />
                    <b>[ði]</b> перед гласным звуком (the apple)
                  </>
                ),
              },
            ]}
            examples={[
              {
                en: "The job I have is good.",
                ru: "Работа, которая у меня есть, хорошая.",
              },
              { en: "The sun is hot today.", ru: "Солнце сегодня горячее." },
              {
                en: "The books on the shelf are old.",
                ru: "Книги на полке старые.",
              },
            ]}
          />

          <TypeBlock
            title="No Article (Zero Article) — Без артикля"
            description={
              <>
                <b>No article</b> — когда артикль вообще не нужен. Используется
                для общего смысла (general), особенно с множественным числом или
                неисчисляемыми существительными.
              </>
            }
            rules={[
              {
                title: "Когда использовать?",
                text: "Общее множественное (Cats are animals), неисчисляемое (Water is important), собственные имена (John lives in Russia), языки (I speak English), приёмы пищи (have breakfast), спорт (play football).",
              },
            ]}
            examples={[
              { en: "Cats like milk.", ru: "Кошки любят молоко." },
              {
                en: "Water boils at 100 degrees.",
                ru: "Вода кипит при 100 градусах.",
              },
              {
                en: "I learn English every day.",
                ru: "Я учу английский каждый день.",
              },
            ]}
          />
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Практика для A и An ===== */
function Step2() {
  const fillInItems: FillItem[] = [
    {
      left: "I need",
      right: "new phone.",
      answers: ["a"],
      explanation: "Phone начинается на согласный [f], используй 'a'.",
    },
    {
      left: "She bought",
      right: "umbrella.",
      answers: ["an"],
      explanation: "Umbrella начинается на гласный звук [ʌ], используй 'an'.",
    },
    {
      left: "It took",
      right: "hour.",
      answers: ["an"],
      explanation: "Hour — немая h, гласный звук [aʊ], используй 'an'.",
    },
    {
      left: "He is",
      right: "engineer.",
      answers: ["an"],
      explanation: "Engineer начинается на гласный [ɛ], используй 'an'.",
    },
    {
      left: "We saw",
      right: "university campus.",
      answers: ["a"],
      explanation: "University звучит как [juː] (согласный), используй 'a'.",
    },
    {
      left: "This is",
      right: "egg.",
      answers: ["an"],
      explanation: "Egg начинается на гласный [ɛ], используй 'an'.",
    },
    {
      left: "I have",
      right: "cat.",
      answers: ["a"],
      explanation: "Cat начинается на согласный [k], используй 'a'.",
    },
    {
      left: "She ate",
      right: "apple.",
      answers: ["an"],
      explanation: "Apple начинается на гласный [æ], используй 'an'.",
    },
    {
      left: "He is",
      right: "user from Europe.",
      answers: ["a"],
      explanation: "User звучит как [juː] (согласный), используй 'a'.",
    },
    {
      left: "We need",
      right: "university guide.",
      answers: ["a"],
      explanation: "University звучит как [juː] (согласный), используй 'a'.",
    },
    {
      left: "I saw",
      right: "owl.",
      answers: ["an"],
      explanation: "Owl начинается на гласный [aʊ], используй 'an'.",
    },
    {
      left: "She has",
      right: "house.",
      answers: ["a"],
      explanation: "House начинается на согласный [h], используй 'a'.",
    },
    {
      left: "It's",
      right: "idea.",
      answers: ["an"],
      explanation: "Idea начинается на гласный [aɪ], используй 'an'.",
    },
    {
      left: "He drives",
      right: "car.",
      answers: ["a"],
      explanation: "Car начинается на согласный [k], используй 'a'.",
    },
    {
      left: "This is",
      right: "orange.",
      answers: ["an"],
      explanation: "Orange начинается на гласный [ɒ], используй 'an'.",
    },
    {
      left: "I need",
      right: "pen.",
      answers: ["a"],
      explanation: "Pen начинается на согласный [p], используй 'a'.",
    },
    {
      left: "She is",
      right: "teacher.",
      answers: ["a"],
      explanation: "Teacher начинается на согласный [t], используй 'a'.",
    },
    {
      left: "He bought",
      right: "office desk.",
      answers: ["an"],
      explanation: "Office начинается на гласный [ɒ], используй 'an'.",
    },
    {
      left: "I see",
      right: "bird.",
      answers: ["a"],
      explanation: "Bird начинается на согласный [b], используй 'a'.",
    },
    {
      left: "She needs",
      right: "chair.",
      answers: ["a"],
      explanation: "Chair начинается на согласный [tʃ], используй 'a'.",
    },
  ];

  return (
    <>
      <UiSection title="Практика для A и An (Practice for A and An)">
        <p className="text-zinc-700 mb-4">
          Вставьте правильный артикль (<b>a</b> или <b>an</b>) в предложения
          ниже. Помните: <b>"an"</b> используется перед гласным звуком,{" "}
          <b>"a"</b> — перед согласным.
        </p>

        <div className="bg-blue-50/50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-2">💡 Подсказка:</h4>
          <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
            <li>
              <b>Гласные звуки:</b> a, e, i, o, u (например:{" "}
              <i>an apple, an hour</i>)
            </li>
            <li>
              <b>Согласные звуки:</b> все остальные (например:{" "}
              <i>a book, a university</i>)
            </li>
            <li>
              <b>Важно:</b> Смотри на <b>звук</b>, а не на букву! (
              <i>an hour</i> — h немая)
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="Задание: Вставь a или an"
        instruction="Заполните пропуски правильным артиклем. Нажмите Enter, чтобы перейти к следующему полю."
        items={fillInItems}
      />

      <UiSection title="Словарь для запоминания">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            ["apple", "ˈæpl", "яблоко", "an"],
            ["book", "bʊk", "книга", "a"],
            ["cat", "kæt", "кошка", "a"],
            ["egg", "ɛg", "яйцо", "an"],
            ["hour", "aʊər", "час", "an"],
            ["idea", "aɪˈdɪə", "идея", "an"],
            ["job", "dʒɒb", "работа", "a"],
            ["office", "ˈɒfɪs", "офис", "an"],
            ["pen", "pɛn", "ручка", "a"],
            ["umbrella", "ʌmˈbrɛlə", "зонт", "an"],
            ["university", "ˌjuːnɪˈvɜːrsɪti", "университет", "a"],
            ["user", "ˈjuːzər", "пользователь", "a"],
          ].map(([word, trans, ru, article]) => (
            <div
              key={word}
              className="rounded-lg border border-zinc-200 bg-white p-3"
            >
              <div className="font-medium text-zinc-900">
                <span className="text-indigo-600">{article}</span> {word}
              </div>
              <div className="text-xs text-zinc-500 mt-1">[{trans}]</div>
              <div className="text-sm text-zinc-600">{ru}</div>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Сравнение артиклей ===== */
function Step3() {
  const comparisonItems: FillItem[] = [
    {
      left: "",
      right: "water is cold.",
      answers: ["the"],
      explanation: "Конкретная вода, используй 'the'.",
    },
    {
      left: "This is",
      right: "apple.",
      answers: ["an"],
      explanation: "Общее упоминание, гласный звук, используй 'an'.",
    },
    {
      left: "He went to",
      right: "school.",
      answers: ["—", ""],
      explanation: "Общее значение 'в школу как учреждение', артикль не нужен.",
    },
    {
      left: "",
      right: "sun is bright.",
      answers: ["the"],
      explanation: "Уникальный объект, используй 'the'.",
    },
    {
      left: "I read",
      right: "interesting book.",
      answers: ["an"],
      explanation: "Первое упоминание, гласный звук, используй 'an'.",
    },
    {
      left: "",
      right: "cats like milk.",
      answers: ["—", ""],
      explanation: "Общее множественное, артикль не нужен.",
    },
    {
      left: "She is",
      right: "doctor.",
      answers: ["a"],
      explanation: "Профессия, согласный звук, используй 'a'.",
    },
    {
      left: "",
      right: "book on the table is mine.",
      answers: ["the"],
      explanation: "Конкретная книга (на столе), используй 'the'.",
    },
    {
      left: "I need",
      right: "information.",
      answers: ["—", ""],
      explanation:
        "Неисчисляемое существительное в общем смысле, артикль не нужен.",
    },
    {
      left: "He bought",
      right: "car.",
      answers: ["a"],
      explanation: "Первое упоминание, согласный звук, используй 'a'.",
    },
    {
      left: "",
      right: "moon is beautiful tonight.",
      answers: ["the"],
      explanation: "Уникальный объект, используй 'the'.",
    },
    {
      left: "I speak",
      right: "English.",
      answers: ["—", ""],
      explanation: "Язык, артикль не нужен.",
    },
    {
      left: "She has",
      right: "dog.",
      answers: ["a"],
      explanation: "Первое упоминание, согласный звук, используй 'a'.",
    },
    {
      left: "",
      right: "dog is friendly.",
      answers: ["the"],
      explanation: "Второе упоминание (конкретная собака), используй 'the'.",
    },
    {
      left: "I have",
      right: "breakfast at 8.",
      answers: ["—", ""],
      explanation: "Приём пищи в общем смысле, артикль не нужен.",
    },
  ];

  return (
    <>
      <UiSection title="Сравнение артиклей: A/An vs The vs No Article">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Теперь сравним все три типа артиклей и научимся различать, когда какой
          использовать.
        </p>

        <div className="space-y-4">
          <ComparisonBlock
            title="A/An (Неопределённые) vs The (Определённый)"
            items={[
              {
                label: "A/An",
                description:
                  "Для 'один из многих', первое упоминание, общий смысл",
                example: "I saw a cat. (Какую-то кошку)",
              },
              {
                label: "The",
                description:
                  "Для 'этот конкретный', второе упоминание, известный",
                example: "The cat is black. (Та самая кошка)",
              },
            ]}
          />

          <ComparisonBlock
            title="Сравнение по типам существительных"
            items={[
              {
                label: "Singular countable",
                description: "A/an для общего, the для конкретного",
                example: "a book / the book",
              },
              {
                label: "Plural countable",
                description: "No article для общего, the для конкретного",
                example: "books / the books",
              },
              {
                label: "Uncountable",
                description: "No article для общего, the для конкретного",
                example: "water / the water",
              },
            ]}
          />

          <ComparisonBlock
            title="Особые случаи без артикля"
            items={[
              {
                label: "Собственные имена",
                description: "John, London, Russia",
                example: "John lives in London.",
              },
              {
                label: "Языки",
                description: "English, Russian, Spanish",
                example: "I speak English.",
              },
              {
                label: "Приёмы пищи",
                description: "breakfast, lunch, dinner",
                example: "I have breakfast at 8.",
              },
              {
                label: "Спорт",
                description: "football, tennis, basketball",
                example: "I play football.",
              },
            ]}
          />
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Выбери правильный артикль"
        instruction="Вставьте правильный артикль: a, an, the или — (если артикль не нужен, оставьте поле пустым или поставьте прочерк)."
        items={comparisonItems}
      />

      <UiSection title="Частые ошибки и как их избежать">
        <div className="space-y-3">
          <ErrorBlock
            wrong="an university"
            correct="a university"
            explanation="University звучит как [juː] (согласный звук), поэтому используй 'a'."
          />
          <ErrorBlock
            wrong="a hour"
            correct="an hour"
            explanation="Hour — немая h, звук [aʊ] (гласный), поэтому используй 'an'."
          />
          <ErrorBlock
            wrong="the cats like milk"
            correct="Cats like milk"
            explanation="Общее утверждение о кошках в целом, артикль не нужен."
          />
          <ErrorBlock
            wrong="a water"
            correct="water / the water"
            explanation="Water — неисчисляемое, не используй 'a'. Для конкретной воды используй 'the'."
          />
        </div>

        <div className="mt-6 bg-emerald-50/50 rounded-lg p-4">
          <h4 className="font-semibold text-emerald-900 mb-2">📝 Памятка</h4>
          <ul className="space-y-1 text-sm text-emerald-900">
            <li>
              <b>A/An</b> — один из многих, первое упоминание
            </li>
            <li>
              <b>The</b> — конкретный, известный, второе упоминание
            </li>
            <li>
              <b>No article</b> — общее множественное, неисчисляемое, имена,
              языки, спорт
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
