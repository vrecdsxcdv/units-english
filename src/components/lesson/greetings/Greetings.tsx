"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Greetings({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Теория — What are Greetings? ===== */
function Step1() {
  return (
    <>
      <UiSection title="1. What are Greetings? (Что такое приветствия?)">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <b>Приветствия (Greetings)</b> — это слова или фразы, которые мы
          используем, чтобы начать разговор, поприветствовать кого-то или
          показать вежливость. Они помогают установить контакт и сделать общение
          дружелюбным.
        </p>

        <div className="bg-indigo-50/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-zinc-900 mb-3">
            Примеры предложений с приветствиями
          </h4>

          <div className="space-y-4">
            <ExampleBlock
              number={1}
              title='Общее приветствие "Hello"'
              en="Hello, how are you?"
              ru="Привет, как дела?"
              explanation={
                <>
                  <b>"Hello"</b> — нейтральное приветствие для любого времени и
                  ситуации, часто с вопросом о самочувствии. Используется с
                  незнакомцами или друзьями.
                </>
              }
            />

            <ExampleBlock
              number={2}
              title='Неформальное "Hi"'
              en="Hi, friend!"
              ru="Привет, друг!"
              explanation={
                <>
                  <b>"Hi"</b> — короткое, дружеское приветствие для близких
                  людей или неформальных ситуаций, как с друзьями или коллегами.
                </>
              }
            />

            <ExampleBlock
              number={3}
              title='Утреннее "Good morning"'
              en="Good morning, teacher."
              ru="Доброе утро, учитель."
              explanation={
                <>
                  Используется утром (до 12:00), формально или вежливо,
                  например, в школе или на работе.
                </>
              }
            />

            <ExampleBlock
              number={4}
              title='Дневное "Good afternoon"'
              en="Good afternoon, everyone."
              ru="Добрый день, все."
              explanation={
                <>
                  Для дня (с 12:00 до 18:00), в формальных ситуациях, как на
                  встречах.
                </>
              }
            />

            <ExampleBlock
              number={5}
              title='Вечернее "Good evening"'
              en="Good evening, sir."
              ru="Добрый вечер, сэр."
              explanation={
                <>
                  Для вечера (после 18:00), формально, например, в ресторане или
                  на мероприятии.
                </>
              }
            />

            <ExampleBlock
              number={6}
              title='Вопрос "How are you?" и ответ'
              en="How are you? — I'm fine, thanks."
              ru="Как дела? — Я в порядке, спасибо."
              explanation={
                <>
                  <b>"How are you?"</b> — распространённый вопрос после
                  приветствия, ответ короткий и вежливый.
                </>
              }
            />
          </div>
        </div>
      </UiSection>

      <UiSection title="2. Типы приветствий (Types of Greetings)">
        <div className="space-y-6">
          <TypeBlock
            title="2.1. Formal Greetings — Формальные приветствия"
            description={
              <>
                <b>Formal greetings</b> — вежливые слова для официальных
                ситуаций, с незнакомцами, старшими или на работе. Они показывают
                уважение.
              </>
            }
            rules={[
              {
                title: "Когда использовать?",
                text: "В бизнесе, школе, с начальником или пожилыми. Утром: Good morning; днём: Good afternoon; вечером: Good evening. Добавляй имя или титул: Good morning, Mr. Smith.",
              },
              {
                title: "Правила:",
                text: (
                  <>
                    Используй с "Sir/Madam" (сэр/мадам) для незнакомцев. После —
                    вопрос: How are you? или How do you do? (старомодно). Ответ:
                    Fine, thank you. And you?
                  </>
                ),
              },
              {
                title: "Произношение:",
                text: (
                  <>
                    Good morning [ɡʊd ˈmɔːrnɪŋ], Good afternoon [ɡʊd
                    ˌæftərˈnuːn], Good evening [ɡʊd ˈiːvnɪŋ]
                  </>
                ),
              },
            ]}
            examples={[
              {
                en: "Good morning, doctor.",
                ru: "Доброе утро, доктор. — Утром в клинике.",
              },
              {
                en: "Good afternoon, boss.",
                ru: "Добрый день, босс. — Днём на работе.",
              },
              {
                en: "Good evening, guests.",
                ru: "Добрый вечер, гости. — Вечером на ужине.",
              },
              {
                en: "Hello, Mrs. Johnson. How are you?",
                ru: "Привет, миссис Джонсон. Как дела? — Формально с именем.",
              },
              {
                en: "How do you do?",
                ru: "Как поживаете? — Старомодно, в очень формальных встречах.",
              },
            ]}
          />

          <TypeBlock
            title="2.2. Informal Greetings — Неформальные приветствия"
            description={
              <>
                <b>Informal greetings</b> — дружеские слова для друзей, семьи
                или ровесников. Они короткие и расслабленные, как "Hi" или
                "Hey".
              </>
            }
            rules={[
              {
                title: "Когда использовать?",
                text: 'С друзьями, в чате, на улице. "Hi" или "Hello" без титула. Добавляй: What\'s up? (Что нового?) или How\'s it going? (Как дела?).',
              },
              {
                title: "Правила:",
                text: "Нет титулов. Ответ: Good, you? или Not bad. Можно с именами: Hi, Tom!",
              },
              {
                title: "Произношение:",
                text: "Hi [haɪ], Hey [heɪ], What's up? [wɒts ʌp]",
              },
            ]}
            examples={[
              { en: "Hi, buddy!", ru: "Привет, приятель! — С другом." },
              {
                en: "Hey, how's it going?",
                ru: "Эй, как дела? — Неформально на встрече.",
              },
              {
                en: "Hello, everyone!",
                ru: "Привет, все! — В группе друзей.",
              },
              {
                en: "What's up?",
                ru: "Что нового? — В чате или по телефону.",
              },
              {
                en: "Yo, man!",
                ru: "Йо, чувак! — Очень casual, с молодёжью.",
              },
            ]}
          />

          <TypeBlock
            title="2.3. Responses to Greetings — Ответы на приветствия"
            description={
              <>
                <b>Responses</b> — слова, которые мы говорим после приветствия,
                чтобы продолжить разговор. Они вежливые и короткие.
              </>
            }
            rules={[
              {
                title: "Когда использовать?",
                text: "После любого greeting: Hello — Hello; How are you? — Fine, thanks. В формальном: And you? В informal: Good, you?",
              },
              {
                title: "Правила:",
                text: "Будь позитивным. Если плохо — Not too bad. Нет длинных историй.",
              },
              {
                title: "Произношение:",
                text: "I'm fine [aɪm faɪn], Thanks [θæŋks]",
              },
            ]}
            examples={[
              {
                en: "How are you? — I'm good, thanks.",
                ru: "Как дела? — Хорошо, спасибо.",
              },
              {
                en: "Good morning! — Good morning!",
                ru: "Доброе утро! — Доброе утро!",
              },
              { en: "Hi! — Hey!", ru: "Привет! — Эй!" },
              {
                en: "What's up? — Not much.",
                ru: "Что нового? — Ничего особенного.",
              },
              {
                en: "How's it going? — Pretty good.",
                ru: "Как дела? — Довольно хорошо.",
              },
            ]}
          />
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Практика для приветствий ===== */
function Step2() {
  // Задание 2: Fill-in-the-blanks — Вставь приветствие в предложения
  const fillInItems: FillItem[] = [
    {
      left: "",
      right: ", teacher.",
      answers: ["Good morning"],
      explanation: "Formal, morning — используй 'Good morning'.",
    },
    {
      left: "",
      right: ", friend!",
      answers: ["Hi"],
      explanation: "Informal — используй 'Hi'.",
    },
    {
      left: "",
      right: ", everyone.",
      answers: ["Good afternoon"],
      explanation: "Afternoon — используй 'Good afternoon'.",
    },
    {
      left: "",
      right: ", sir.",
      answers: ["Good evening"],
      explanation: "Evening — используй 'Good evening'.",
    },
    {
      left: "",
      right: ", how are you?",
      answers: ["Hello"],
      explanation: "General — используй 'Hello'.",
    },
    {
      left: "",
      right: ", buddy!",
      answers: ["Hey"],
      explanation: "Casual — используй 'Hey'.",
    },
    {
      left: "",
      right: "? — Fine, thanks.",
      answers: ["How are you"],
      explanation: "Question — используй 'How are you'.",
    },
    {
      left: "",
      right: ", mom.",
      answers: ["Good morning"],
      explanation: "Family, morning — используй 'Good morning'.",
    },
    {
      left: "",
      right: ", boss.",
      answers: ["Good afternoon"],
      explanation: "Work — используй 'Good afternoon'.",
    },
    {
      left: "",
      right: ", guests.",
      answers: ["Good evening"],
      explanation: "Formal — используй 'Good evening'.",
    },
    {
      left: "",
      right: "! What's up?",
      answers: ["Hi"],
      explanation: "Informal — используй 'Hi'.",
    },
    {
      left: "",
      right: ", doctor.",
      answers: ["Hello"],
      explanation: "Formal — используй 'Hello'.",
    },
    {
      left: "",
      right: ", team.",
      answers: ["Hey"],
      explanation: "Group — используй 'Hey'.",
    },
    {
      left: "",
      right: " do you do?",
      answers: ["How"],
      explanation: "Old formal — используй 'How'.",
    },
    {
      left: "",
      right: " morning, class.",
      answers: ["Good"],
      explanation: "School — используй 'Good'.",
    },
    {
      left: "",
      right: ", neighbor.",
      answers: ["Good evening"],
      explanation: "Polite — используй 'Good evening'.",
    },
    {
      left: "",
      right: "'s up?",
      answers: ["What"],
      explanation: "Casual — используй 'What'.",
    },
    {
      left: "",
      right: ", John.",
      answers: ["Hi"],
      explanation: "With name — используй 'Hi'.",
    },
    {
      left: "",
      right: " afternoon, madam.",
      answers: ["Good"],
      explanation: "Formal — используй 'Good'.",
    },
    {
      left: "",
      right: ", how's it going?",
      answers: ["Hey"],
      explanation: "Informal — используй 'Hey'.",
    },
  ];

  return (
    <>
      <UiSection title="Практика для приветствий (Practice for Greetings)">
        <p className="text-zinc-700 mb-4">
          Вставьте правильное приветствие в предложения ниже. Помните:{" "}
          <b>Good morning/afternoon/evening</b> — формальные,{" "}
          <b>Hi/Hey/What's up</b> — неформальные.
        </p>

        <div className="bg-blue-50/50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-2">💡 Подсказка:</h4>
          <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
            <li>
              <b>Formal:</b> Good morning (утро), Good afternoon (день), Good
              evening (вечер)
            </li>
            <li>
              <b>Informal:</b> Hi, Hey, What's up? (для друзей)
            </li>
            <li>
              <b>Responses:</b> I'm fine, Good, Thanks (ответы на приветствия)
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="Задание: Вставь правильное приветствие"
        instruction="Заполните пропуски. Нажмите Enter, чтобы перейти к следующему полю."
        items={fillInItems}
      />

      <UiSection title="Словарь для запоминания">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            ["Good morning", "ɡʊd ˈmɔːrnɪŋ", "доброе утро", "formal"],
            ["Good afternoon", "ɡʊd ˌæftərˈnuːn", "добрый день", "formal"],
            ["Good evening", "ɡʊd ˈiːvnɪŋ", "добрый вечер", "formal"],
            ["Hello", "həˈloʊ", "привет", "neutral"],
            ["Hi", "haɪ", "привет", "informal"],
            ["Hey", "heɪ", "эй/привет", "informal"],
            ["How are you?", "haʊ ɑːr juː", "как дела?", "question"],
            ["What's up?", "wɒts ʌp", "что нового?", "informal"],
            ["How's it going?", "haʊz ɪt ˈɡoʊɪŋ", "как дела?", "informal"],
            ["I'm fine", "aɪm faɪn", "я в порядке", "response"],
            ["Thanks", "θæŋks", "спасибо", "response"],
            ["Not bad", "nɒt bæd", "неплохо", "response"],
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

/* ===== СТРАНИЦА 3: Сравнение приветствий ===== */
function Step3() {
  const comparisonItems: FillItem[] = [
    {
      left: "",
      right: ", boss. (formal, work)",
      answers: ["Good morning", "Good afternoon"],
      explanation: "Work — formal greeting.",
    },
    {
      left: "",
      right: ", friend! (casual)",
      answers: ["Hi", "Hey"],
      explanation: "Friend — informal greeting.",
    },
    {
      left: "How are you? —",
      right: ", thanks. (response)",
      answers: ["Fine", "Good", "I'm fine", "I'm good"],
      explanation: "Response — I'm fine or Good.",
    },
    {
      left: "",
      right: ", stranger. (polite)",
      answers: ["Hello"],
      explanation: "Stranger — neutral Hello.",
    },
    {
      left: "",
      right: ", everyone! (meeting)",
      answers: ["Good morning", "Good afternoon", "Hello"],
      explanation: "Meeting — formal greeting.",
    },
    {
      left: "",
      right: "'s up? (casual question)",
      answers: ["What"],
      explanation: "Casual — What's up?",
    },
    {
      left: "",
      right: " do you do? (old formal)",
      answers: ["How"],
      explanation: "Old formal — How do you do?",
    },
    {
      left: "Hi! —",
      right: "! (response)",
      answers: ["Hi", "Hey", "Hello"],
      explanation: "Response — repeat greeting.",
    },
  ];

  return (
    <>
      <UiSection title="Сравнение приветствий: Formal vs Informal vs Responses">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Теперь сравним все типы приветствий и научимся различать, когда какой
          использовать.
        </p>

        <div className="space-y-4">
          <ComparisonBlock
            title="Formal vs Informal"
            items={[
              {
                label: "Formal",
                description: "Для официоза: работа, школа, незнакомцы, пожилые",
                example: "Good morning, boss. / Good evening, sir.",
              },
              {
                label: "Informal",
                description: "Для друзей, семьи, casual ситуаций",
                example: "Hi, buddy! / Hey, what's up?",
              },
            ]}
          />

          <ComparisonBlock
            title="Сравнение по времени дня"
            items={[
              {
                label: "Утро (до 12:00)",
                description: "Good morning (formal) / Hi (informal)",
                example: "Good morning, teacher. / Hi, mom.",
              },
              {
                label: "День (12:00-18:00)",
                description: "Good afternoon (formal) / Hello (neutral)",
                example: "Good afternoon, everyone. / Hello, friend.",
              },
              {
                label: "Вечер (после 18:00)",
                description: "Good evening (formal) / Hey (informal)",
                example: "Good evening, guests. / Hey, guys.",
              },
            ]}
          />

          <ComparisonBlock
            title="Responses (Ответы)"
            items={[
              {
                label: "Formal responses",
                description: "Fine, thank you. And you?",
                example: "How are you? — Fine, thank you.",
              },
              {
                label: "Informal responses",
                description: "Good, you? / Not bad. / Pretty good.",
                example: "What's up? — Not much. / How's it going? — Good.",
              },
            ]}
          />

          <ComparisonBlock
            title="Сравнение по контексту"
            items={[
              {
                label: "Work/School",
                description: "Formal greetings (Good morning, Hello)",
                example: "Good morning, doctor. / Hello, teacher.",
              },
              {
                label: "Friends/Family",
                description: "Informal greetings (Hi, Hey)",
                example: "Hi, friend! / Hey, mom!",
              },
              {
                label: "Strangers",
                description: "Neutral greetings (Hello)",
                example: "Hello, excuse me...",
              },
            ]}
          />
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Выбери правильное приветствие"
        instruction="Вставьте правильное приветствие в зависимости от контекста."
        items={comparisonItems}
      />

      <UiSection title="Частые ошибки и как их избежать">
        <div className="space-y-3">
          <ErrorBlock
            wrong="Hi, boss"
            correct="Good morning, boss"
            explanation="На работе с начальником используй formal greeting."
          />
          <ErrorBlock
            wrong="Good morning, friend (casual situation)"
            correct="Hi, friend"
            explanation="С друзьями звучит слишком формально, используй Hi или Hey."
          />
          <ErrorBlock
            wrong="No response to greeting"
            correct="Always reply"
            explanation="Всегда отвечай на приветствие — это вежливо."
          />
          <ErrorBlock
            wrong="Good evening in morning"
            correct="Good morning"
            explanation="Проверяй время дня: morning — утро, evening — вечер."
          />
        </div>

        <div className="mt-6 bg-emerald-50/50 rounded-lg p-4">
          <h4 className="font-semibold text-emerald-900 mb-2">📝 Памятка</h4>
          <ul className="space-y-1 text-sm text-emerald-900">
            <li>
              <b>Formal</b> — Good morning/afternoon/evening (работа,
              незнакомцы)
            </li>
            <li>
              <b>Informal</b> — Hi, Hey, What's up? (друзья, семья)
            </li>
            <li>
              <b>Responses</b> — I'm fine, Good, Thanks (всегда отвечай!)
            </li>
            <li>
              <b>Время дня важно</b> — morning (утро), afternoon (день), evening
              (вечер)
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
            <div className="font-medium text-indigo-600 min-w-[140px]">
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
