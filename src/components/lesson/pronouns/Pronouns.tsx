"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Pronouns({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Теория — What are Pronouns? ===== */
function Step1() {
  return (
    <>
      <UiSection title="1. What are Pronouns? (Что такое местоимения?)">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <b>Местоимения (Pronouns)</b> — это слова, которые заменяют
          существительные (nouns), чтобы избежать повторений. Они помогают
          сделать речь короче и естественнее, показывая, кто делает действие, на
          кого оно направлено или кому принадлежит вещь.
        </p>

        <div className="bg-indigo-50/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-zinc-900 mb-3">
            Примеры предложений с местоимениями
          </h4>

          <div className="space-y-4">
            <ExampleBlock
              number={1}
              title='С личным местоимением "I" (personal pronoun)'
              en="I go to school every day."
              ru="Я хожу в школу каждый день."
              explanation={
                <>
                  <b>"I"</b> — это personal pronoun (личное местоимение) в роли
                  subject (подлежащее), оно заменяет имя говорящего (например,
                  "John" вместо "I"). <b>"I"</b> всегда с большой буквы,
                  используется для первого лица singular (я), чтобы показать,
                  кто делает действие.
                </>
              }
            />

            <ExampleBlock
              number={2}
              title='С личным местоимением "you" (personal pronoun)'
              en="You are my friend."
              ru="Ты мой друг. (Или 'Вы мой друг' — в зависимости от контекста.)"
              explanation={
                <>
                  <b>"You"</b> — personal pronoun в роли subject, заменяет имя
                  слушателя. Оно одинаково для singular (ты) и plural (вы),
                  используется для второго лица, чтобы обратиться напрямую. Нет
                  разницы в форме для polite/informal.
                </>
              }
            />

            <ExampleBlock
              number={3}
              title='С объектным местоимением "him" (object pronoun)'
              en="I see him in the park."
              ru="Я вижу его в парке."
              explanation={
                <>
                  <b>"Him"</b> — object pronoun (объектное местоимение),
                  заменяет male noun (мужское существительное) в роли object
                  (дополнение). Оно показывает, на кого направлено действие (see
                  — видеть), и используется вместо "the boy" или имени, чтобы
                  избежать повторения.
                </>
              }
            />

            <ExampleBlock
              number={4}
              title='С притяжательным местоимением "my" (possessive pronoun)'
              en="This is my phone."
              ru="Это мой телефон."
              explanation={
                <>
                  <b>"My"</b> — possessive pronoun (притяжательное местоимение),
                  показывает владение (ownership). Оно стоит перед noun "phone"
                  (телефон), заменяя "John's phone", для первого лица singular
                  (мой/моя/моё). Нет gender у "my".
                </>
              }
            />
          </div>
        </div>
      </UiSection>

      <UiSection title="2. Типы местоимений (Types of Pronouns)">
        <div className="space-y-6">
          <TypeBlock
            title="Personal Pronouns — I, You, He/She/It, We, They (Личные местоимения)"
            description={
              <>
                <b>Personal pronouns</b> — это слова, которые заменяют имена
                людей, вещей или групп в роли subject (подлежащее — кто делает
                действие). Они делают предложения короче, избегая повторений
                имён.
              </>
            }
            rules={[
              {
                title: "Когда использовать?",
                text: "В начале предложения или как подлежащее глагола. Для людей (he/she/they), вещей (it), групп (we/they). Только для subjects, не для objects.",
              },
              {
                title: "Правила:",
                text: (
                  <>
                    <b>I</b> — всегда с большой буквы
                    <br />
                    <b>You</b> — одинаково singular/plural
                    <br />
                    <b>He</b> — male, <b>she</b> — female, <b>it</b> —
                    things/animals
                    <br />
                    <b>They</b> — plural или gender-neutral singular
                    <br />
                    <i>Выбирай по gender и number (число: singular/plural)</i>
                  </>
                ),
              },
            ]}
            examples={[
              { en: "I like music.", ru: "Я люблю музыку." },
              { en: "You play games.", ru: "Ты играешь в игры." },
              { en: "He runs fast.", ru: "Он бежит быстро." },
              { en: "She reads books.", ru: "Она читает книги." },
              { en: "It works well.", ru: "Оно работает хорошо." },
              { en: "We go home.", ru: "Мы идём домой." },
              { en: "They are friends.", ru: "Они друзья." },
            ]}
          />

          <TypeBlock
            title="Object Pronouns — Me, You, Him, Her, It, Us, Them (Объектные местоимения)"
            description={
              <>
                <b>Object pronouns</b> — это слова, которые заменяют nouns в
                роли object (дополнение — на кого/что направлено действие). Они
                стоят после глагола или предлога.
              </>
            }
            rules={[
              {
                title: "Когда использовать?",
                text: "После verbs (see me) или prepositions (give to him). Соответствуют personal: me (I), you (you), him (he), her (she), it (it), us (we), them (they).",
              },
              {
                title: "Правила:",
                text: (
                  <>
                    Нет capital, кроме в начале предложения
                    <br />
                    <b>Him/her</b> — gender-specific
                    <br />
                    <b>It</b> — neutral, <b>them</b> — plural
                  </>
                ),
              },
            ]}
            examples={[
              { en: "Call me later.", ru: "Позвони мне позже." },
              { en: "Tell you a secret.", ru: "Расскажу тебе секрет." },
              { en: "Help him now.", ru: "Помоги ему сейчас." },
              { en: "Give her a gift.", ru: "Дай ей подарок." },
              { en: "Fix it quickly.", ru: "Почини это быстро." },
              { en: "Join us soon.", ru: "Присоединяйся к нам скоро." },
              { en: "See them there.", ru: "Увидишь их там." },
            ]}
          />

          <TypeBlock
            title="Possessive Pronouns — My, Your, His/Her, Our, Their (Притяжательные местоимения)"
            description={
              <>
                <b>Possessive pronouns</b> — это слова, показывающие владение
                (ownership — кому принадлежит). Есть adjectives (перед noun: my
                book) и standalone pronouns (отдельно: mine).
              </>
            }
            rules={[
              {
                title: "Когда использовать?",
                text: "Adjectives перед noun (my phone). Standalone после (The phone is mine). My (I), your (you), his (he), her (she), its (it), our (we), their (they).",
              },
              {
                title: "Правила:",
                text: (
                  <>
                    Нет apostrophe ('s — для nouns, не pronouns)
                    <br />
                    <b>His/her</b> — gender, <b>its</b> — no gender
                    <br />
                    Standalone: mine, yours, his, hers, ours, theirs
                  </>
                ),
              },
            ]}
            examples={[
              { en: "This is my car.", ru: "Это моя машина." },
              { en: "Is it your turn?", ru: "Это твоя очередь?" },
              { en: "His phone rings.", ru: "Его телефон звонит." },
              { en: "Her bag is here.", ru: "Её сумка здесь." },
              { en: "Our team wins.", ru: "Наша команда побеждает." },
              { en: "Their house is big.", ru: "Их дом большой." },
              { en: "The car is mine.", ru: "Машина моя." },
            ]}
          />
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Практика для Personal и Object Pronouns ===== */
function Step2() {
  const fillInItems: FillItem[] = [
    {
      left: "",
      right: "go to school every day.",
      answers: ["I"],
      explanation: "Subject первого лица — используй 'I'.",
    },
    {
      left: "",
      right: "are my friend.",
      answers: ["You"],
      explanation: "Subject второго лица — используй 'You'.",
    },
    {
      left: "",
      right: "runs fast.",
      answers: ["He"],
      explanation: "Subject третьего лица male — используй 'He'.",
    },
    {
      left: "",
      right: "reads books.",
      answers: ["She"],
      explanation: "Subject третьего лица female — используй 'She'.",
    },
    {
      left: "",
      right: "works well.",
      answers: ["It"],
      explanation: "Subject для вещи — используй 'It'.",
    },
    {
      left: "",
      right: "go home.",
      answers: ["We"],
      explanation: "Subject первого лица plural — используй 'We'.",
    },
    {
      left: "",
      right: "are friends.",
      answers: ["They"],
      explanation: "Subject третьего лица plural — используй 'They'.",
    },
    {
      left: "Call",
      right: "later.",
      answers: ["me"],
      explanation: "Object первого лица — используй 'me'.",
    },
    {
      left: "Help",
      right: "now.",
      answers: ["him"],
      explanation: "Object третьего лица male — используй 'him'.",
    },
    {
      left: "Give",
      right: "a gift.",
      answers: ["her"],
      explanation: "Object третьего лица female — используй 'her'.",
    },
    {
      left: "Fix",
      right: "quickly.",
      answers: ["it"],
      explanation: "Object для вещи — используй 'it'.",
    },
    {
      left: "Join",
      right: "soon.",
      answers: ["us"],
      explanation: "Object первого лица plural — используй 'us'.",
    },
    {
      left: "See",
      right: "there.",
      answers: ["them"],
      explanation: "Object третьего лица plural — используй 'them'.",
    },
    {
      left: "Tell",
      right: "a secret.",
      answers: ["you"],
      explanation: "Object второго лица — используй 'you'.",
    },
    {
      left: "",
      right: "like pizza.",
      answers: ["I"],
      explanation: "Subject первого лица — используй 'I'.",
    },
    {
      left: "Show",
      right: "the way.",
      answers: ["me"],
      explanation: "Object первого лица — используй 'me'.",
    },
    {
      left: "",
      right: "plays football.",
      answers: ["He"],
      explanation: "Subject третьего лица male — используй 'He'.",
    },
    {
      left: "Ask",
      right: "for help.",
      answers: ["her"],
      explanation: "Object третьего лица female — используй 'her'.",
    },
    {
      left: "",
      right: "study together.",
      answers: ["We"],
      explanation: "Subject первого лица plural — используй 'We'.",
    },
    {
      left: "Meet",
      right: "at the cafe.",
      answers: ["us"],
      explanation: "Object первого лица plural — используй 'us'.",
    },
  ];

  return (
    <>
      <UiSection title="Практика для Personal и Object Pronouns">
        <p className="text-zinc-700 mb-4">
          Вставьте правильное местоимение (<b>personal</b> для subjects или{" "}
          <b>object</b> для objects) в предложения ниже. Помните: personal
          pronouns — кто делает действие, object pronouns — на кого направлено.
        </p>

        <div className="bg-blue-50/50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-2">💡 Подсказка:</h4>
          <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
            <li>
              <b>Subject pronouns:</b> I, you, he, she, it, we, they (в начале
              предложения)
            </li>
            <li>
              <b>Object pronouns:</b> me, you, him, her, it, us, them (после
              глагола)
            </li>
            <li>
              <b>Важно:</b> Смотри на роль в предложении — subject или object!
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="Задание: Вставь правильное местоимение"
        instruction="Заполните пропуски. Нажмите Enter, чтобы перейти к следующему полю."
        items={fillInItems}
      />

      <UiSection title="Словарь для запоминания">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            ["I", "aɪ", "я", "subject"],
            ["me", "miː", "меня/мне", "object"],
            ["you", "juː", "ты/вы", "both"],
            ["he", "hiː", "он", "subject"],
            ["him", "hɪm", "его/ему", "object"],
            ["she", "ʃiː", "она", "subject"],
            ["her", "hɜːr", "её/ей", "object"],
            ["it", "ɪt", "оно", "both"],
            ["we", "wiː", "мы", "subject"],
            ["us", "ʌs", "нас/нам", "object"],
            ["they", "ðeɪ", "они", "subject"],
            ["them", "ðɛm", "их/им", "object"],
          ].map(([word, trans, ru, type]) => (
            <div
              key={word}
              className="rounded-lg border border-zinc-200 bg-white p-3"
            >
              <div className="font-medium text-zinc-900">
                <span className="text-indigo-600">{word}</span>
              </div>
              <div className="text-xs text-zinc-500 mt-1">[{trans}]</div>
              <div className="text-sm text-zinc-600">{ru}</div>
              <div className="text-xs text-emerald-600 mt-1">{type}</div>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Сравнение местоимений ===== */
function Step3() {
  const comparisonItems: FillItem[] = [
    {
      left: "",
      right: "car is new.",
      answers: ["My", "my"],
      explanation: "Possessive adjective перед noun — используй 'my'.",
    },
    {
      left: "This book is",
      right: ".",
      answers: ["mine"],
      explanation: "Standalone possessive (без noun после) — используй 'mine'.",
    },
    {
      left: "",
      right: "phone rings.",
      answers: ["His", "his"],
      explanation: "Possessive для male — используй 'his'.",
    },
    {
      left: "",
      right: "bag is here.",
      answers: ["Her", "her"],
      explanation: "Possessive для female — используй 'her'.",
    },
    {
      left: "Is this",
      right: "turn?",
      answers: ["your"],
      explanation: "Possessive для второго лица — используй 'your'.",
    },
    {
      left: "",
      right: "team wins.",
      answers: ["Our", "our"],
      explanation: "Possessive для первого лица plural — используй 'our'.",
    },
    {
      left: "",
      right: "house is big.",
      answers: ["Their", "their"],
      explanation: "Possessive для третьего лица plural — используй 'their'.",
    },
    {
      left: "",
      right: "like music.",
      answers: ["I"],
      explanation: "Personal subject первого лица — используй 'I'.",
    },
    {
      left: "Call",
      right: "later.",
      answers: ["me"],
      explanation: "Object первого лица — используй 'me'.",
    },
    {
      left: "",
      right: "runs fast.",
      answers: ["He", "he"],
      explanation: "Personal subject male — используй 'He'.",
    },
    {
      left: "Help",
      right: "now.",
      answers: ["him"],
      explanation: "Object male — используй 'him'.",
    },
    {
      left: "The car is",
      right: ".",
      answers: ["hers"],
      explanation: "Standalone possessive female — используй 'hers'.",
    },
    {
      left: "",
      right: "go home.",
      answers: ["We", "we"],
      explanation: "Personal subject plural первого лица — используй 'We'.",
    },
    {
      left: "Join",
      right: "soon.",
      answers: ["us"],
      explanation: "Object первого лица plural — используй 'us'.",
    },
    {
      left: "This is",
      right: ".",
      answers: ["yours"],
      explanation: "Standalone possessive второго лица — используй 'yours'.",
    },
  ];

  return (
    <>
      <UiSection title="Сравнение местоимений: Personal vs Object vs Possessive">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Теперь сравним все три типа местоимений и научимся различать, когда
          какое использовать.
        </p>

        <div className="space-y-4">
          <ComparisonBlock
            title="Сравнение по ролям"
            items={[
              {
                label: "Subject",
                description: "Personal pronouns (кто делает)",
                example: "I run, He eats, They play",
              },
              {
                label: "Object",
                description: "Object pronouns (на кого направлено)",
                example: "Call me, Help him, See them",
              },
              {
                label: "Ownership",
                description: "Possessive pronouns (кому принадлежит)",
                example: "My car, His book, Their house",
              },
            ]}
          />

          <ComparisonBlock
            title="Сравнение по лицам"
            items={[
              {
                label: "First person",
                description: "I/me/my (mine), We/us/our (ours)",
                example: "I call me with my phone — it's mine",
              },
              {
                label: "Second person",
                description: "You/you/your (yours) — одинаково singular/plural",
                example: "You call you with your phone — it's yours",
              },
              {
                label: "Third person",
                description:
                  "He/him/his, She/her/her(hers), It/it/its, They/them/their(theirs)",
                example: "He calls him with his phone — it's his",
              },
            ]}
          />

          <ComparisonBlock
            title="Possessive: Adjective vs Standalone"
            items={[
              {
                label: "Adjective",
                description: "Перед noun: my, your, his, her, its, our, their",
                example: "This is my book",
              },
              {
                label: "Standalone",
                description:
                  "Без noun: mine, yours, his, hers, its, ours, theirs",
                example: "This book is mine",
              },
            ]}
          />
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Выбери правильное местоимение"
        instruction="Вставьте правильное местоимение: personal, object или possessive."
        items={comparisonItems}
      />

      <UiSection title="Частые ошибки и как их избежать">
        <div className="space-y-3">
          <ErrorBlock
            wrong="Him runs fast"
            correct="He runs fast"
            explanation="Subject нужен personal pronoun 'He', не object 'him'."
          />
          <ErrorBlock
            wrong="Call I later"
            correct="Call me later"
            explanation="После verb нужен object pronoun 'me', не personal 'I'."
          />
          <ErrorBlock
            wrong="This is mines book"
            correct="This is my book"
            explanation="Перед noun используй adjective 'my', не standalone 'mine'."
          />
          <ErrorBlock
            wrong="Her runs fast"
            correct="She runs fast"
            explanation="Subject для female — 'She', 'her' — это object или possessive."
          />
        </div>

        <div className="mt-6 bg-emerald-50/50 rounded-lg p-4">
          <h4 className="font-semibold text-emerald-900 mb-2">📝 Памятка</h4>
          <ul className="space-y-1 text-sm text-emerald-900">
            <li>
              <b>Personal</b> — для subjects (кто делает): I, you, he, she, it,
              we, they
            </li>
            <li>
              <b>Object</b> — для objects (на кого): me, you, him, her, it, us,
              them
            </li>
            <li>
              <b>Possessive</b> — для ownership (чьё): my/mine, your/yours, his,
              her/hers, its, our/ours, their/theirs
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
