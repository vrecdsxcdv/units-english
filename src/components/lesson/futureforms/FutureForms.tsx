"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function FutureForms({ step }: Props) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    case 6:
      return <Step6 />;
    case 7:
      return <Step7 />;
    case 8:
      return <Step8 />;
    case 9:
      return <Step9 />;
    case 10:
      return <Step10 />;
    case 11:
      return <Step11 />;
    case 12:
      return <Step12 />;
    default:
      return <Step1 />;
  }
}

/* ===== STEP 1: FUTURE ROADMAP ===== */
function Step1() {
  return (
    <>
      <UiSection title="🌐 Future Forms Masterplan">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-2xl border border-indigo-100 p-6 mb-6">
          <p className="text-lg text-zinc-800 leading-relaxed">
            В этом модуле мы разберём пять способов говорить о будущем и
            научимся
            <strong> автоматически подбирать</strong> правильную форму под
            задачу:
          </p>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Present Continuous",
                emoji: "📅",
                desc: "Личные договорённости со временем и местом.",
              },
              {
                title: "Be going to",
                emoji: "🧠",
                desc: "Планы + очевидные намерения или прогнозы.",
              },
              {
                title: "Will / shall",
                emoji: "⚡",
                desc: "Момент решения, обещания, предложения помощи.",
              },
              {
                title: "Future Continuous",
                emoji: "⏳",
                desc: "Процесс в конкретный момент будущего.",
              },
              {
                title: "Future Perfect",
                emoji: "✅",
                desc: "Результат, который завершится к дедлайну.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl bg-white/80 border border-white shadow-sm p-4"
              >
                <div className="text-3xl">{card.emoji}</div>
                <h4 className="mt-2 font-semibold text-indigo-900">
                  {card.title}
                </h4>
                <p className="text-sm text-zinc-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="🧭 Таймлайн будущего">
        <div className="bg-white rounded-2xl border border-zinc-100 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-1">
              <p className="text-sm text-zinc-700 leading-relaxed">
                Представьте линейку времени. Настоящее — это отправная точка. Мы
                можем описывать:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-800">
                <li>
                  <strong>🎟️ Назначенные встречи</strong> — present continuous
                </li>
                <li>
                  <strong>🧭 Намерения</strong> — be going to
                </li>
                <li>
                  <strong>⚡ Спонтанные идеи</strong> — will
                </li>
                <li>
                  <strong>📽️ Процессы</strong> — future continuous
                </li>
                <li>
                  <strong>🏁 Готовые результаты</strong> — future perfect
                </li>
              </ul>
            </div>
            <div className="flex-1 rounded-xl bg-gradient-to-r from-indigo-100 via-emerald-50 to-amber-100 p-4">
              <p className="font-semibold text-indigo-800 mb-2">
                Серия шагов урока
              </p>
              <ol className="space-y-1 text-sm text-zinc-700">
                <li>1–4: фундамент и быстрые решения.</li>
                <li>5–7: длинные процессы и дедлайны.</li>
                <li>8–11: много практики и автоматическая проверка.</li>
                <li>12: самооценка и чек-листы качества.</li>
              </ol>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== STEP 2: PRESENT CONTINUOUS ===== */
function Step2() {
  const pcItems: FillItem[] = [
    {
      left: "1. I'm sorry, I can't come tonight — I",
      right: "dentist at 18:00.",
      answers: [
        "am seeing the",
        "am seeing a dentist",
        "am seeing the dentist",
      ],
      explanation: "Есть точное время → личная договорённость.",
      wide: true,
    },
    {
      left: "2. We",
      right: "our partners in Berlin next Tuesday.",
      answers: [
        "are meeting",
        "are meeting",
        "are seeing",
        "are visiting",
        "are meeting with",
      ],
      explanation: "Календарь встречи подтверждён.",
    },
    {
      left: "3. They",
      right: "to Madrid on Friday morning.",
      answers: ["are flying", "are travelling", "are going"],
      explanation: "Билеты куплены → present continuous.",
    },
    {
      left: "4. My sister",
      right: "a webinar at 9 p.m., so don't call her.",
      answers: ["is hosting", "is running", "is presenting"],
      explanation: "Запланированное действие на будущее.",
    },
  ];

  return (
    <>
      <UiSection title="📅 Present Continuous for Arrangements">
        <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-6">
          <ul className="text-sm text-zinc-800 space-y-2">
            <li>
              ✅ Формула: <strong>am/is/are + V-ing</strong>
            </li>
            <li>
              ✅ Обязателен <strong>контекст времени/места</strong>: tomorrow,
              at 6, on Friday, this weekend.
            </li>
            <li>
              ✅ Используем, когда <strong>всё забронировано</strong>: билеты,
              встречи, переговорки.
            </li>
            <li>
              ⚠️ Не путать с обычным Present Continuous (что происходит сейчас).
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Present Continuous"
        instruction="Вставьте форму глагола в Present Continuous."
        items={pcItems}
        wideInputs
      />
    </>
  );
}

/* ===== STEP 3: BE GOING TO ===== */
function Step3() {
  const goingTo: FillItem[] = [
    {
      left: "1. Look at those clouds! It",
      right: "soon.",
      answers: ["is going to rain", "s going to rain"],
      explanation: "Очевидный прогноз по фактам.",
    },
    {
      left: "2. I'm",
      right: "start a design blog next month.",
      answers: ["going to", "gonna"],
      explanation: "Личное намерение — план есть.",
      wide: true,
    },
    {
      left: "3. She has all ingredients on the table. She",
      right: "bake a cake.",
      answers: ["is going to", "s going to"],
      explanation: "Приготовления уже начались.",
    },
    {
      left: "4. We aren't sure yet. We",
      right: "decide after the call.",
      answers: ["are going to", "re going to"],
      explanation: "Намерение принять решение.",
    },
  ];

  return (
    <>
      <UiSection title="🧠 Be going to — планы и логичные выводы">
        <div className="bg-gradient-to-r from-emerald-50 to-white rounded-2xl border border-emerald-100 p-6 space-y-4">
          <p className="text-sm text-zinc-800">
            <strong>Формула:</strong> am/is/are + going to + V1.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-xl p-4 border border-emerald-100">
              <p className="font-semibold text-emerald-900">✅ Когда?</p>
              <ul className="list-disc pl-4 mt-2 text-zinc-700 space-y-1">
                <li>Чёткое намерение («я придумал и собираюсь»)</li>
                <li>Прогноз по фактам (облака → дождь)</li>
                <li>Сценарии «что будет дальше»</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-emerald-100">
              <p className="font-semibold text-emerald-900">⚠️ Не путайте</p>
              <ul className="list-disc pl-4 mt-2 text-zinc-700 space-y-1">
                <li>Не используем для расписаний (там Present Simple)</li>
                <li>Если решение спонтанное → will</li>
                <li>Если уже всё забронировано → present continuous</li>
              </ul>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: be going to"
        instruction="Заполните предложения формой be going to."
        items={goingTo}
      />
    </>
  );
}

/* ===== STEP 4: WILL / SHALL ===== */
function Step4() {
  const willItems: FillItem[] = [
    {
      left: "1. I'm a bit cold. — OK, I",
      right: "close the window.",
      answers: ["will", "'ll"],
      explanation: "Решение прямо сейчас.",
    },
    {
      left: '"Will you help me move this sofa?" — "Sure, I',
      right: 'you."',
      answers: ["will help", "'ll help"],
      explanation: "Обещание/предложение.",
    },
    {
      left: "3. Don't worry, we",
      right: "call you as soon as we land.",
      answers: ["will", "'ll"],
      explanation: "Обещание.",
    },
    {
      left: "4. I'm not sure it",
      right: "work, but we can try.",
      answers: ["will", "'ll"],
      explanation: "Мнение/прогноз без оснований.",
    },
  ];

  return (
    <>
      <UiSection title='⚡ Will — decisions & promises ("решил — сказал")'>
        <div className="rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-white p-6">
          <ul className="text-sm text-zinc-800 space-y-2">
            <li>
              <strong>Спонтанное решение:</strong> phone rings → "I'll answer."
            </li>
            <li>
              <strong>Обещания/угрозы:</strong> "I'll send the report tonight."
            </li>
            <li>
              <strong>Мнения/предположения:</strong> "I think it will snow."
            </li>
            <li>
              <strong>Formal offers:</strong> "Shall we begin?"
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Will"
        instruction="Вставьте will/'ll в нужное место."
        items={willItems}
      />
    </>
  );
}

/* ===== STEP 5: DECISION ENGINE ===== */
function Step5() {
  const decision: FillItem[] = [
    {
      left: "1. The train",
      right: "at 7:45 tomorrow. (расписание)",
      answers: ["leaves", "departs"],
      explanation: "Расписание → Present Simple.",
    },
    {
      left: "2. I can't talk now, I",
      right: "with our lawyer at 3.",
      answers: ["am meeting", "m meeting"],
      explanation: "Договорённость.",
    },
    {
      left: "3. Watch out! You",
      right: "drop the glass!",
      answers: ["are going to", "re going to"],
      explanation: "Очевидный прогноз.",
    },
    {
      left: "4. Fine, I",
      right: "pay for dinner then.",
      answers: ["will", "'ll"],
      explanation: "Спонтанное решение.",
    },
    {
      left: "5. This time tomorrow we",
      right: "over the Atlantic.",
      answers: ["will be flying", "'ll be flying"],
      explanation: "Процесс в момент будущего.",
    },
  ];

  return (
    <>
      <UiSection title="🤖 Future Form Decision Tree">
        <div className="bg-white rounded-2xl border border-zinc-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-zinc-800">
            <div className="rounded-lg border border-indigo-100 p-4">
              <p className="font-semibold text-indigo-900 mb-2">
                1. Есть ли договорённость?
              </p>
              <p>Да → Present Continuous. Нет → идём дальше.</p>
            </div>
            <div className="rounded-lg border border-emerald-100 p-4">
              <p className="font-semibold text-emerald-900 mb-2">
                2. Это план/намерение?
              </p>
              <p>
                Да → be going to. Если только что решили → will. Если расписание
                → Present Simple.
              </p>
            </div>
            <div className="rounded-lg border border-amber-100 p-4">
              <p className="font-semibold text-amber-900 mb-2">
                3. Нужна длительность или результат?
              </p>
              <p>
                Длительность → Future Continuous. Результат → Future Perfect.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Потренируй дерево решений"
        instruction="Выбери грамматику, которая подходит."
        items={decision}
        wideInputs
      />
    </>
  );
}

/* ===== STEP 6: FUTURE CONTINUOUS ===== */
function Step6() {
  const fcItems: FillItem[] = [
    {
      left: "1. Don't call at midnight — I",
      right: "sleeping.",
      answers: ["will be", "'ll be"],
      explanation: "Процесс в конкретное время.",
    },
    {
      left: "2. At this time next summer they",
      right: "in Bali.",
      answers: ["will be living", "'ll be living", "will be staying"],
      explanation: "Длительное пребывание.",
    },
    {
      left: "3. When you arrive, we",
      right: "dinner.",
      answers: [
        "will be having",
        "'ll be having",
        "will be eating",
        "'ll be eating",
      ],
      explanation: "Фоновое действие.",
    },
    {
      left: "4. This time tomorrow I",
      right: "on the stage presenting the report.",
      answers: ["will be", "'ll be"],
      explanation: "Процесс в запланированный момент.",
    },
  ];

  return (
    <>
      <UiSection title="⏳ Future Continuous — действия в процессе">
        <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-6">
          <p className="text-sm text-zinc-800">
            <strong>Формула:</strong> will be + V-ing.
          </p>
          <ul className="list-disc pl-5 mt-3 text-sm text-zinc-700 space-y-1">
            <li>Фон, который будет происходить, когда случится что-то ещё.</li>
            <li>
              Вежливые вопросы о планах: "Will you be using the car tonight?"
            </li>
            <li>Демонстрация «официальности» или расписанности.</li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Future Continuous"
        instruction="Добавьте will be + V-ing."
        items={fcItems}
        wideInputs
      />
    </>
  );
}

/* ===== STEP 7: FUTURE PERFECT ===== */
function Step7() {
  const fpItems: FillItem[] = [
    {
      left: "1. By 2030 we",
      right: "launch five new products.",
      answers: ["will have", "'ll have"],
      explanation: "Результат к дедлайну.",
      wide: true,
    },
    {
      left: "2. She",
      right: "finished the thesis by May.",
      answers: ["will have", "'ll have"],
      explanation: "Завершённость.",
    },
    {
      left: "3. Will you",
      right: "completed the course by Friday?",
      answers: ["have"],
      explanation: "Вопросительная форма.",
    },
    {
      left: "4. They",
      right: "driven 1,000 km by the time they reach Berlin.",
      answers: ["will have", "'ll have"],
      explanation: "Общий результат.",
    },
  ];

  return (
    <>
      <UiSection title="🏁 Future Perfect — результат к дедлайну">
        <div className="rounded-2xl border border-amber-100 bg-gradient-to-r from-amber-50 to-white p-6">
          <p className="text-sm text-zinc-800">
            <strong>Формула:</strong> will have + V3.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-800">
            <li>Используем вместе с by, by the time, before, until.</li>
            <li>Показываем завершённость: проект будет уже закончен.</li>
            <li>В бизнес-контексте → прогнозы готовности, отчёты.</li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Future Perfect"
        instruction="Сформируйте will have + V3."
        items={fpItems}
      />
    </>
  );
}

/* ===== STEP 8: MIX & MATCH ===== */
function Step8() {
  const mixItems: FillItem[] = [
    {
      left: "1. By this time tomorrow, the jury",
      right: "the winner.",
      answers: ["will have announced", "'ll have announced"],
      explanation: "Результат к моменту.",
    },
    {
      left: "2. At 7 p.m. sharp we",
      right: "with investors, so please be on time.",
      answers: ["are meeting", "will be meeting", "'ll be meeting"],
      explanation: "Встреча → present continuous или future continuous.",
    },
    {
      left: "3. Hey, I forgot my badge. I",
      right: "borrow yours for a minute.",
      answers: ["will", "'ll"],
      explanation: "Спонтанное просьба-решение.",
    },
    {
      left: "4. She looks pale. She",
      right: "faint.",
      answers: ["is going to", "s going to"],
      explanation: "Очевидный прогноз.",
    },
  ];

  return (
    <>
      <UiSection title="🎯 Mixed Future Lab">
        <p className="text-sm text-zinc-700 mb-4">
          Здесь смешаны все формы. Определи контекст → выбери форму → получи
          мгновенную обратную связь.
        </p>
      </UiSection>

      <CheckableExercise
        title="Смешанная практика"
        instruction="Выберите подходящую форму будущего."
        items={mixItems}
        wideInputs
      />
    </>
  );
}

/* ===== STEP 9: CASE STUDY ===== */
function Step9() {
  const caseItems: FillItem[] = [
    {
      left: "1. Our UX team",
      right: "the prototype to stakeholders at 10:00.",
      answers: ["is presenting", "will be presenting"],
      explanation: "Фиксированная встреча → present continuous / future cont.",
    },
    {
      left: "2. By Friday we",
      right: "gather enough feedback.",
      answers: ["will have", "'ll have"],
      explanation: "Результат к дедлайну.",
    },
    {
      left: "3. Don't worry, I",
      right: "send you the deck tonight.",
      answers: ["will", "'ll"],
      explanation: "Обещание.",
    },
    {
      left: "4. This time next week we",
      right: "user interviews in Warsaw.",
      answers: ["will be running", "'ll be running"],
      explanation: "Длительный процесс.",
    },
    {
      left: "5. We",
      right: "release the beta in March. Tickets booked.",
      answers: ["are going to", "are launching", "are releasing"],
      explanation: "План, почти решено.",
    },
  ];

  return (
    <>
      <UiSection title="📊 Case Study: Product Launch">
        <div className="rounded-2xl border border-zinc-100 bg-white p-6">
          <p className="text-sm text-zinc-700">
            Представим, что вы продакт-менеджер. Завершите обновление плана,
            выбирая форму будущего, которая точно отражает смысл.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Product Launch Board"
        instruction="Заполните пропуски корректными формами."
        items={caseItems}
        wideInputs
      />
    </>
  );
}

/* ===== STEP 10: TRANSFORMER ===== */
function Step10() {
  const transform: FillItem[] = [
    {
      left: "1. (decision now) OK, I ______ (call) him right away.",
      answers: ["will call", "'ll call"],
      explanation: "Решение в момент речи.",
      wide: true,
    },
    {
      left: "2. (evidence) Those dark clouds ______ (bring) a storm.",
      answers: ["are going to bring", "'re going to bring"],
      explanation: "Прогноз по фактам.",
    },
    {
      left: "3. (process) This time tomorrow we ______ (drive) across the Alps.",
      answers: ["will be driving", "'ll be driving"],
      explanation: "Процесс в будущем.",
    },
    {
      left: "4. (deadline) By 2040, scientists ______ (find) a cure.",
      answers: ["will have found", "'ll have found"],
      explanation: "Результат к будущему времени.",
    },
  ];

  return (
    <>
      <UiSection title="🛠️ Transformer Drill">
        <p className="text-sm text-zinc-700 mb-4">
          Перефразируйте подсказки в правильные предложения. Сосредоточьтесь на
          контексте подсказки в скобках.
        </p>
      </UiSection>

      <CheckableExercise
        title="Transform & Check"
        instruction="Вставьте полные будущие формы."
        items={transform}
        wideInputs
      />
    </>
  );
}

/* ===== STEP 11: MINI-TEST ===== */
function Step11() {
  const test: FillItem[] = [
    {
      left: "1.",
      right: "you be joining us for dinner tomorrow? (вежливый вопрос)",
      answers: ["will"],
      explanation: "Future Continuous/Will → Will you be joining...?",
      wide: true,
    },
    {
      left: "2. By the time you wake up, I",
      right: "already left.",
      answers: ["will have", "'ll have"],
      explanation: "Future Perfect.",
    },
    {
      left: "3. Oh no! I forgot to reply. I",
      right: "write back now.",
      answers: ["will", "'ll"],
      explanation: "Решение сейчас.",
    },
    {
      left: "4. We",
      right: "a team call at 11, can you join?",
      answers: ["are having", "have", "are holding"],
      explanation: "Запланированная встреча.",
    },
    {
      left: "5. Look at Leo! He",
      right: "win this race.",
      answers: ["is going to", "s going to"],
      explanation: "Очевидный прогноз.",
    },
    {
      left: "6. This time next Monday I",
      right: "in the Maldives.",
      answers: ["will be", "'ll be"],
      explanation: "Future Continuous.",
    },
    {
      left: "7. If it rains, we'll stay home. — OK, I",
      right: "cook something tasty.",
      answers: ["will", "'ll"],
      explanation: "Обещание/решение.",
    },
    {
      left: "8. Will you",
      right: "finished by noon?",
      answers: ["have"],
      explanation: "Future Perfect question.",
    },
  ];

  return (
    <>
      <UiSection title="🧪 Mini-test на автоматизм">
        <p className="text-sm text-zinc-700">
          8 вопросов — 8 сигналов контекста. Держите планку 7/8 и выше.
        </p>
      </UiSection>

      <CheckableExercise
        title="Mini Test"
        instruction="Заполните пропуски."
        items={test}
        wideInputs
      />
    </>
  );
}

/* ===== STEP 12: SELF-EVAL ===== */
function Step12() {
  return (
    <>
      <UiSection title="🏆 Future Forms Scoreboard">
        <div className="rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-emerald-50 p-6 space-y-4 text-sm text-zinc-800">
          <p>
            Пройдите все упражнения, нажмите «Проверить» в каждом блоке и
            запишите результат. Оцените себя по трём метрикам:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Accuracy</strong> — % правильных ответов (цель ≥85%).
            </li>
            <li>
              <strong>Speed</strong> — сколько секунд на одно предложение
              (целевое значение &lt; 25 сек).
            </li>
            <li>
              <strong>Confidence</strong> — субъективно: 0 (сомневаюсь), 1
              (готов использовать), 2 (объясню другому).
            </li>
          </ol>
          <p>
            Если любая метрика ниже цели — вернитесь к нужному шагу (особенно
            5–11) и повторите.
          </p>
        </div>
      </UiSection>

      <UiSection title="🗂️ Чек-лист «сама проверка»">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Я могу объяснить разницу",
              bullets: [
                "Present Continuous vs be going to",
                "be going to vs will",
                "Future Continuous vs Future Perfect",
              ],
            },
            {
              title: "У меня есть примеры",
              bullets: [
                "1 предложение на каждую форму",
                "1 ситуация из работы / жизни",
                "1 типичный маркер времени",
              ],
            },
            {
              title: "Уровень автоматизма",
              bullets: [
                "реакция без перевода на русский",
                "могу исправить чужую ошибку",
                "вставляю форму на слух",
              ],
            },
            {
              title: "Переход к следующему шагу",
              bullets: [
                "записать голосовое с future forms",
                "написать письмо о планах",
                "создать карточки в Quizlet",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-zinc-100 p-4"
            >
              <h4 className="font-semibold text-indigo-900 mb-2">
                {card.title}
              </h4>
              <ul className="list-disc pl-4 text-sm text-zinc-700 space-y-1">
                {card.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

