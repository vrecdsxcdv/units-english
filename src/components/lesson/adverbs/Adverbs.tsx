"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Adverbs({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

/* ===== СТРАНИЦА 1: Введение в наречия ===== */
function Step1() {
  return (
    <>
      <UiSection title="1. Что такое наречия? (What are Adverbs?)">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <b>Наречия (Adverbs)</b> — это слова, которые описывают или
          модифицируют глаголы (verbs), прилагательные (adjectives), другие
          наречия или целые предложения. Они отвечают на вопросы:{" "}
          <strong>как?</strong> (how?), <strong>когда?</strong> (when?),{" "}
          <strong>где?</strong> (where?), <strong>насколько?</strong> (to what
          extent?) или <strong>как часто?</strong> (how often?).
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          В этой теме мы сосредоточимся на двух типах: наречиях способа действия
          (manner) и частоты (frequency).
        </p>
      </UiSection>

      <UiSection title="2. Наречия способа действия (Adverbs of Manner)">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Эти наречия описывают, <strong>как</strong> выполняется действие
          (gladly, sadly, quickly, slowly). Они часто образуются от
          прилагательных путём добавления <strong>-ly</strong> (quick →
          quickly), но есть исключения (hard, fast).
        </p>
        <div className="bg-indigo-50/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-zinc-900 mb-3">Примеры:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Slowly</strong> [ˈsloʊli] — Медленно
            </li>
            <li>
              <strong>Quickly</strong> [ˈkwɪkli] — Быстро
            </li>
            <li>
              <strong>Carefully</strong> [ˈkɛərfəli] — Осторожно
            </li>
            <li>
              <strong>Happily</strong> [ˈhæpɪli] — Счастливо
            </li>
            <li>
              <strong>Well</strong> [wɛl] — Хорошо (исключение от good)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="3. Наречия частоты (Adverbs of Frequency)">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Эти наречия указывают, <strong>как часто</strong> происходит действие
          (always, usually, often, sometimes, seldom, rarely, never). Они
          помогают показать повторяемость действий.
        </p>
        <div className="bg-indigo-50/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-zinc-900 mb-3">Шкала частоты:</h4>
          <ul className="list-none pl-0 space-y-1">
            <li>
              <strong>100%</strong> — always [ˈɔːlweɪz] (всегда)
            </li>
            <li>
              <strong>80%</strong> — usually [ˈjuːʒuəli] (обычно)
            </li>
            <li>
              <strong>70%</strong> — often [ˈɔːfn] (часто)
            </li>
            <li>
              <strong>50%</strong> — sometimes [ˈsʌmtaɪmz] (иногда)
            </li>
            <li>
              <strong>20%</strong> — rarely [ˈrɛərli] (редко)
            </li>
            <li>
              <strong>0%</strong> — never [ˈnɛvər] (никогда)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="4. Зачем нужны наречия?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Наречия manner делают описание действий более живым и точным (e.g.,
            "He runs quickly" вместо "He runs" — Он бежит быстро).
          </li>
          <li>
            Наречия frequency уточняют привычки или рутину (e.g., "I always
            drink coffee" — Я всегда пью кофе, показывая ежедневную привычку).
          </li>
          <li>
            Они важны для повседневной речи, рассказов и описаний, чтобы
            избежать монотонности.
          </li>
        </ul>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Примеры предложений ===== */
function Step2() {
  return (
    <>
      <UiSection title="Примеры с наречиями способа действия (Manner)">
        <div className="space-y-4">
          <ExampleBlock
            number={1}
            en="He walks slowly to school."
            ru="Он идёт медленно в школу."
            explanation={
              <>
                <strong>"Slowly"</strong> описывает КАК он идёт (медленно).
                Стоит после глагола walks.
              </>
            }
          />

          <ExampleBlock
            number={2}
            en="She eats quickly before work."
            ru="Она ест быстро перед работой."
            explanation={
              <>
                <strong>"Quickly"</strong> модифицирует глагол eats, показывая
                КАК она ест (быстро).
              </>
            }
          />

          <ExampleBlock
            number={3}
            en="Drive carefully on the road."
            ru="Веди осторожно по дороге."
            explanation={
              <>
                <strong>"Carefully"</strong> описывает КАК вести машину
                (осторожно).
              </>
            }
          />
        </div>
      </UiSection>

      <UiSection title="Примеры с наречиями частоты (Frequency)">
        <div className="space-y-4">
          <ExampleBlock
            number={4}
            en="I always brush my teeth."
            ru="Я всегда чищу зубы."
            explanation={
              <>
                <strong>"Always"</strong> показывает КАК ЧАСТО (всегда, 100%
                частоту). Стоит перед основным глаголом brush.
              </>
            }
          />

          <ExampleBlock
            number={5}
            en="We sometimes watch movies."
            ru="Мы иногда смотрим фильмы."
            explanation={
              <>
                <strong>"Sometimes"</strong> указывает среднюю частоту (~50%).
                Стоит перед глаголом watch.
              </>
            }
          />

          <ExampleBlock
            number={6}
            en="He never smokes."
            ru="Он никогда не курит."
            explanation={
              <>
                <strong>"Never"</strong> показывает 0% частоту. Стоит перед
                глаголом smokes. "Never" отрицательное, поэтому не используйте с
                not.
              </>
            }
          />
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Наречия способа действия подробно ===== */
function Step3() {
  const fillItems: FillItem[] = [
    {
      id: "1",
      prompt: "1. slow →",
      answer: "slowly",
      hint: "добавьте -ly",
    },
    {
      id: "2",
      prompt: "2. happy →",
      answer: "happily",
      hint: "y → ily",
    },
    {
      id: "3",
      prompt: "3. careful →",
      answer: "carefully",
      hint: "добавьте -ly",
    },
    {
      id: "4",
      prompt: "4. basic →",
      answer: "basically",
      hint: "добавьте -ally",
    },
    {
      id: "5",
      prompt: "5. fast → (исключение)",
      answer: "fast",
      hint: "без изменений",
    },
  ];

  const mistakesItems: FillItem[] = [
    {
      id: "6",
      prompt: "1. She sings beautiful.",
      answer: "She sings beautifully.",
      hint: "используйте наречие",
    },
    {
      id: "7",
      prompt: "2. He runs quick to school.",
      answer: "He runs quickly to school.",
      hint: "добавьте -ly",
    },
    {
      id: "8",
      prompt: "3. She looks happily. (с linking verb)",
      answer: "She looks happy.",
      hint: "с linking verb используйте adjective",
    },
  ];

  return (
    <>
      <UiSection title="Формирование наречий способа действия">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>Основное правило:</strong> Большинство наречий manner
          образуются добавлением <strong>-ly</strong> к прилагательному.
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>slow → slowly (медленно)</li>
          <li>quick → quickly (быстро)</li>
          <li>careful → carefully (осторожно)</li>
        </ul>

        <div className="bg-amber-50/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-zinc-900 mb-3">Тонкости:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Если прилагательное на <strong>-y</strong>, замените на{" "}
              <strong>-ily</strong>: happy → happily
            </li>
            <li>
              На <strong>-ic</strong>: добавьте <strong>-ally</strong>: basic →
              basically
            </li>
            <li>
              <strong>Исключения без -ly:</strong> fast, hard, late, early
            </li>
            <li>
              <strong>Двойные формы:</strong> hard (усердно) / hardly (едва);
              late (поздно) / lately (недавно)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Позиция в предложении">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>После глагола/объекта:</strong> He read the book carefully.
          </li>
          <li>
            <strong>Перед глаголом для акцента:</strong> Carefully open the
            door.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Когда НЕ использовать">
        <div className="bg-red-50/50 rounded-lg p-4 mb-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Не с linking verbs (look, feel):</strong>
              <div className="text-red-600">Wrong: She looks happily</div>
              <div className="text-green-600">Right: She looks happy</div>
            </li>
            <li>
              <strong>Не используйте adjective как adverb:</strong>
              <div className="text-red-600">Wrong: He runs quick</div>
              <div className="text-green-600">Right: He runs quickly</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        scope="adverbs-manner-formation"
        title="📝 Упражнение 1: Образуйте наречия от прилагательных"
        items={fillItems}
      />

      <CheckableExercise
        scope="adverbs-manner-mistakes"
        title="📝 Упражнение 2: Исправьте ошибки"
        items={mistakesItems}
      />
    </>
  );
}

/* ===== СТРАНИЦА 4: Наречия частоты подробно ===== */
function Step4() {
  const positionItems: FillItem[] = [
    {
      id: "1",
      prompt: "1. I brush my teeth. (always)",
      answer: "I always brush my teeth.",
      hint: "перед основным глаголом",
    },
    {
      id: "2",
      prompt: "2. He is late. (never)",
      answer: "He is never late.",
      hint: "после глагола be",
    },
    {
      id: "3",
      prompt: "3. They go to the park. (sometimes)",
      answer: "They sometimes go to the park.",
      hint: "перед основным глаголом",
    },
    {
      id: "4",
      prompt: "4. She can help. (usually)",
      answer: "She can usually help.",
      hint: "после модального глагола",
    },
  ];

  const contextItems: FillItem[] = [
    {
      id: "5",
      prompt: "1. Я пью кофе каждый день (100%):",
      answer: "I always drink coffee.",
      hint: "100% = always",
    },
    {
      id: "6",
      prompt: "2. Он не ходит в кино (0%):",
      answer: "He never goes to the cinema.",
      hint: "0% = never",
    },
    {
      id: "7",
      prompt: "3. Мы играем в футбол раз в неделю (~20%):",
      answer: "We rarely play football.",
      hint: "20% = rarely или seldom",
    },
  ];

  return (
    <>
      <UiSection title="Шкала наречий частоты">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Наречия frequency показывают, КАК ЧАСТО происходит действие. Вот шкала
          от 100% до 0%:
        </p>
        <div className="bg-indigo-50/50 rounded-lg p-4 mb-4">
          <ul className="list-none pl-0 space-y-1">
            <li>
              <strong>100%</strong> — always (всегда)
            </li>
            <li>
              <strong>80%</strong> — usually (обычно)
            </li>
            <li>
              <strong>70%</strong> — often (часто)
            </li>
            <li>
              <strong>50%</strong> — sometimes (иногда)
            </li>
            <li>
              <strong>20%</strong> — rarely/seldom (редко)
            </li>
            <li>
              <strong>0%</strong> — never (никогда)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Позиция в предложении">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Перед основным глаголом:</strong> She usually sleeps late.
          </li>
          <li>
            <strong>После глагола be:</strong> He is always late.
          </li>
          <li>
            <strong>После модальных/auxiliary:</strong> I can sometimes help.
          </li>
          <li>
            <strong>В начале/конце для акцента:</strong> Sometimes I forget.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Важные правила">
        <div className="bg-amber-50/50 rounded-lg p-4 mb-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Не используйте с not:</strong>
              <div className="text-red-600">Wrong: not always</div>
              <div className="text-green-600">
                Right: sometimes not или never
              </div>
            </li>
            <li>
              <strong>Never/hardly ever</strong> — отрицательные, не используйте
              двойное отрицание
            </li>
            <li>
              <strong>В вопросах:</strong> Do you ever go? (Ты когда-нибудь
              ходишь?)
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        scope="adverbs-frequency-position"
        title="📝 Упражнение 1: Вставьте наречие в правильное место"
        items={positionItems}
      />

      <CheckableExercise
        scope="adverbs-frequency-context"
        title="📝 Упражнение 2: Выберите правильное наречие"
        items={contextItems}
      />
    </>
  );
}

/* ===== СТРАНИЦА 5: Комплексные упражнения ===== */
function Step5() {
  const multipleChoice: FillItem[] = [
    {
      left: "1. She walks",
      right: "to school because she has a lot of time.",
      answers: ["slowly", "a", "a)"],
      explanation:
        "Ответ: (a) slowly — Наречие образа действия, описывает, как она идет (медленно, так как есть время).",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2. He",
      right: "drinks coffee in the morning.",
      answers: ["always", "b", "b)"],
      explanation:
        "Ответ: (b) always — Наречие частотности, показывает, как часто он пьет кофе (всегда утром).",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3. They",
      right: "run to catch the bus.",
      answers: ["quickly", "b", "b)"],
      explanation:
        "Ответ: (b) quickly — Наречие образа действия, описывает, как они бегут (быстро, чтобы успеть на автобус).",
      ariaLabel: "Вопрос 3",
    },
    {
      left: "4. I",
      right: "forget my homework.",
      answers: ["never", "b", "b)"],
      explanation:
        "Ответ: (b) never — Наречие частотности, показывает, как часто забывается домашняя работа (никогда).",
      ariaLabel: "Вопрос 4",
    },
    {
      left: "5. He speaks",
      right: "because he is nervous.",
      answers: ["quickly", "c", "c)"],
      explanation:
        "Ответ: (c) quickly — Наречие образа действия, описывает, как он говорит (быстро из-за нервов).",
      ariaLabel: "Вопрос 5",
    },
  ];

  const fillBlanks: FillItem[] = [
    {
      left: "1. She",
      right: "reads books in the evening. (Читает каждый вечер)",
      answers: ["always"],
      explanation:
        "Ответ: always — Читает каждый вечер (частотность, регулярное действие).",
      ariaLabel: "Заполните 1",
    },
    {
      left: "2. He drives",
      right: "because the road is dangerous. (Едет осторожно)",
      answers: ["slowly", "carefully"],
      explanation:
        "Ответ: slowly — Едет осторожно, то есть медленно (образ действия).",
      ariaLabel: "Заполните 2",
    },
    {
      left: "3. They",
      right: "go to the park on weekends. (Ходят не каждый раз)",
      answers: ["sometimes"],
      explanation: "Ответ: sometimes — Ходят нерегулярно (частотность).",
      ariaLabel: "Заполните 3",
    },
    {
      left: "4. I",
      right: "eat fast food. (Никогда не ем)",
      answers: ["never"],
      explanation: "Ответ: never — Никогда не ем (частотность).",
      ariaLabel: "Заполните 4",
    },
    {
      left: "5. The dog runs",
      right: "to catch the ball. (Бежит за мячом)",
      answers: ["quickly"],
      explanation:
        "Ответ: quickly — Бежит за мячом, то есть быстро (образ действия).",
      ariaLabel: "Заполните 5",
    },
  ];

  const correctMistakes: FillItem[] = [
    {
      left: "1. ❌ She always slowly walks to school. → Исправленное:",
      right: "",
      answers: [
        "She slowly walks to school",
        "She slowly walks to school.",
        "She walks slowly to school",
        "She walks slowly to school.",
      ],
      explanation:
        'Исправление: She slowly walks to school. — "Always" (частотность) не подходит, так как предложение описывает КАК она идет (образ действия), поэтому "slowly".',
      ariaLabel: "Исправьте 1",
    },
    {
      left: "2. ❌ He quickly never runs. → Исправленное:",
      right: "",
      answers: ["He never runs quickly", "He never runs quickly."],
      explanation:
        "Исправление: He never runs quickly. — Наречия частотности (never) ставятся перед глаголом, а образа действия (quickly) — после. Порядок важен.",
      ariaLabel: "Исправьте 2",
    },
    {
      left: "3. ❌ I sometimes is late. → Исправленное:",
      right: "",
      answers: ["I am sometimes late", "I am sometimes late."],
      explanation:
        'Исправление: I am sometimes late. — Наречия частотности (sometimes) ставятся после глагола "to be" (am), а не перед ним.',
      ariaLabel: "Исправьте 3",
    },
    {
      left: "4. ❌ They never speaks loudly. → Исправленное:",
      right: "",
      answers: ["They never speak loudly", "They never speak loudly."],
      explanation:
        'Исправление: They never speak loudly. — Глагол "speak" для множественного числа (they) должен быть без "s". "Never" правильно перед глаголом.',
      ariaLabel: "Исправьте 4",
    },
    {
      left: "5. ❌ We always quick eat breakfast. → Исправленное:",
      right: "",
      answers: [
        "We quickly eat breakfast",
        "We quickly eat breakfast.",
        "We eat breakfast quickly",
        "We eat breakfast quickly.",
      ],
      explanation:
        'Исправление: We quickly eat breakfast. — "Quick" должно быть наречием "quickly" (образ действия). "Always" не подходит по смыслу.',
      ariaLabel: "Исправьте 5",
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения по наречиям">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Эти упражнения помогут вам закрепить использование наречий образа
          действия (slowly, quickly) и частотности (always, sometimes, never) в
          английском языке. Каждое задание включает четкие инструкции, примеры и
          объяснения правильных ответов.
        </p>
      </UiSection>

      <div className="rounded-xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/50 to-white p-5">
        <h3 className="text-lg md:text-xl font-semibold mb-3">
          📝 Упражнение 1: Выберите правильное наречие (Multiple Choice)
        </h3>
        <p className="text-zinc-700 mb-4">
          <strong>Инструкции:</strong> Выберите правильное наречие для каждого
          предложения. Подумайте, описывает ли наречие образ действия (как?) или
          частотность (как часто?).
        </p>

        <div className="bg-white/80 rounded-lg p-4 mb-4 border border-indigo-100">
          <p className="font-semibold text-indigo-900 mb-2">
            🔤 Варианты ответов:
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              (a) slowly
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              (b) quickly
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              (c) always
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              (d) sometimes
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              (e) never
            </span>
          </div>
        </div>

        <CheckableExercise 
          title="📝 Упражнение 1: Multiple Choice" 
          instruction="Вставьте правильную букву (a, b, c, d или e) в поле ввода." 
          items={multipleChoice} 
        />
      </div>

      <div className="mt-4 bg-blue-50/50 rounded-lg p-3 text-sm">
        <strong>💡 Визуал для запоминания:</strong> Человек идет медленно
        (slowly), другой бежит быстро (quickly); календарь с отметками "always"
        (каждый день), "sometimes" (иногда), "never" (никогда).
      </div>

      <CheckableExercise
        title="📝 Упражнение 2: Заполните пропуски (Fill in the Blanks)"
        instruction="Вставьте правильное наречие (slowly, quickly, always, sometimes, never) в пропуски. Обратите внимание на контекст (образ действия или частотность)."
        items={fillBlanks}
      />
      <div className="mt-4 bg-amber-50/50 rounded-lg p-3 text-sm">
        <strong>💡 Совет:</strong> Если предложение описывает КАК что-то
        делается — выбирайте slowly/quickly. Если КАК ЧАСТО —
        always/sometimes/never.
      </div>
      <div className="mt-2 bg-blue-50/50 rounded-lg p-3 text-sm">
        <strong>🔄 Повторение:</strong> Наречия образа действия обычно после
        глагола, частотности — перед основным глаголом (кроме to be).
      </div>

      <CheckableExercise
        title="📝 Упражнение 3: Исправьте ошибки (Correct the Mistakes)"
        instruction="Найдите и исправьте ошибки в предложениях. Напишите правильный вариант целиком."
        items={correctMistakes}
        wideInputs={true}
      />
      <div className="mt-4 bg-amber-50/50 rounded-lg p-3 text-sm">
        <strong>🔄 Повторение:</strong> Проверяйте, что описывает наречие (КАК?
        или КАК ЧАСТО?), и ставьте его в правильное место в предложении.
      </div>

      <UiSection title="🎊 Поздравляем!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили тему "Наречия способа действия и частоты"! Теперь вы
          знаете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Как образовывать наречия manner от прилагательных (+ -ly)</li>
          <li>
            Где ставить наречия manner (после глагола) и frequency (перед
            глаголом)
          </li>
          <li>Шкалу частоты: always (100%) → never (0%)</li>
          <li>Исключения: fast, hard, well</li>
          <li>Как избегать распространённых ошибок</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Наречия образа действия (slowly, quickly):</strong>{" "}
              Описывают, как выполняется действие. Обычно стоят после глагола.
              Пример: She walks slowly.
            </li>
            <li>
              <strong>Наречия частотности (always, sometimes, never):</strong>{" "}
              Описывают, как часто происходит действие. Стоят перед основным
              глаголом, но после "to be". Пример: I always read. / She is
              sometimes late.
            </li>
            <li>
              <strong>Произношение:</strong> Slowly [ˈsloʊli], Quickly
              [ˈkwɪkli], Always [ˈɔːlweɪz], Sometimes [ˈsʌmtaɪmz], Never
              [ˈnɛvər].
            </li>
            <li>
              <strong>Типичные ошибки:</strong> Неправильная позиция (Wrong: I
              slowly always walk; Right: I always walk slowly.)
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Практикуйте произношение: slowly, quickly, always, sometimes,
              never.
            </li>
            <li>
              Описывайте свои действия (как и как часто вы что-то делаете) с
              этими наречиями.
            </li>
            <li>
              Повторяйте упражнения, если допустили ошибки, чтобы закрепить
              правила.
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== Helper Components ===== */
function ExampleBlock({
  number,
  en,
  ru,
  explanation,
}: {
  number: number;
  en: string;
  ru: string;
  explanation: React.ReactNode;
}) {
  return (
    <div className="border-l-4 border-indigo-400 pl-4 py-2">
      <div className="font-mono text-sm text-zinc-500 mb-1">
        Example {number}
      </div>
      <p className="text-lg font-semibold text-zinc-900">{en}</p>
      <p className="text-zinc-600 italic">{ru}</p>
      <p className="text-sm text-zinc-700 mt-2">{explanation}</p>
    </div>
  );
}
