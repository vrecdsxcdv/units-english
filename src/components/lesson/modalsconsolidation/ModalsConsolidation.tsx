"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ModalsConsolidation({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

/* ===== СТРАНИЦА 1: Обзор всех модальных глаголов ===== */
function Step1() {
  return (
    <>
      <UiSection title="Закрепление: Все модальные глаголы">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Давайте повторим все модальные глаголы, которые вы изучили. Это
          поможет закрепить знания и научиться правильно использовать их в
          разных ситуациях.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">Can / Can't</h4>
            <p className="text-sm text-zinc-700">Способность / возможность</p>
            <p className="text-xs text-blue-700 mt-2 italic">
              I can swim. — Я умею плавать.
            </p>
          </div>

          <div className="bg-indigo-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">Must / Mustn't</h4>
            <p className="text-sm text-zinc-700">Обязанность / запрет</p>
            <p className="text-xs text-indigo-700 mt-2 italic">
              You must study. — Ты обязан учиться.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">
              Have to / Don't have to
            </h4>
            <p className="text-sm text-zinc-700">Необходимость / отсутствие</p>
            <p className="text-xs text-green-700 mt-2 italic">
              I have to work. — Мне нужно работать.
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">Should</h4>
            <p className="text-sm text-zinc-700">Совет</p>
            <p className="text-xs text-amber-700 mt-2 italic">
              You should rest. — Тебе следует отдохнуть.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Ключевые различия">
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-4 border border-zinc-200">
            <p className="font-semibold text-zinc-900 mb-2">Must vs Have to</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-700">
              <li>
                <strong>Must</strong> — личная обязанность (я так решил)
              </li>
              <li>
                <strong>Have to</strong> — внешняя необходимость (правила,
                закон)
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 border border-zinc-200">
            <p className="font-semibold text-zinc-900 mb-2">
              Mustn't vs Don't have to
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-700">
              <li>
                <strong>Mustn't</strong> — запрещено (нельзя)
              </li>
              <li>
                <strong>Don't have to</strong> — не обязательно (можно не
                делать)
              </li>
            </ul>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Практика Can / Could ===== */
function Step2() {
  const items: FillItem[] = [
    {
      left: "She",
      right: "speak three languages fluently.",
      answers: ["can"],
      explanation: "Она может говорить на трёх языках свободно.",
    },
    {
      left: "",
      right: "you help me with this task?",
      answers: ["Could", "could"],
      explanation: "Не могли бы вы помочь мне с этим заданием?",
    },
    {
      left: "I",
      right: "ride a bike when I was five.",
      answers: ["could"],
      explanation: "Я умел кататься на велосипеде, когда мне было пять.",
    },
    {
      left: "He",
      right: "play the piano very well.",
      answers: ["can"],
      explanation: "Он умеет играть на пианино очень хорошо.",
    },
    {
      left: "",
      right: "I borrow your pen, please?",
      answers: ["Could", "could"],
      explanation: "Могу я одолжить вашу ручку, пожалуйста?",
    },
  ];

  return (
    <>
      <UiSection title="Практика: Can / Could">
        <p className="text-zinc-700 mb-4">
          Вставьте <strong>can</strong> или <strong>could</strong> в пропуски.
        </p>
        <CheckableExercise
          title="📝 Упражнение: Can или Could"
          instruction="Заполните пропуски правильной формой модального глагола."
          items={items}
        />
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Практика Must / Have to ===== */
function Step3() {
  const items: FillItem[] = [
    {
      left: "You",
      right: "wear a uniform at school. It's a rule.",
      answers: ["have to"],
      explanation: "Ты должен носить форму в школе. Это правило.",
    },
    {
      left: "I",
      right: "finish this project today. I promised my boss.",
      answers: ["must"],
      explanation: "Я должен закончить этот проект сегодня. Я обещал начальнику.",
    },
    {
      left: "Students",
      right: "arrive on time for the exam.",
      answers: ["have to"],
      explanation: "Студенты должны прийти вовремя на экзамен.",
    },
    {
      left: "We",
      right: "be quiet in the library.",
      answers: ["must"],
      explanation: "Мы должны быть тихими в библиотеке.",
    },
    {
      left: "Do you",
      right: "work on weekends?",
      answers: ["have to"],
      explanation: "Тебе приходится работать по выходным?",
    },
  ];

  return (
    <>
      <UiSection title="Практика: Must / Have to">
        <p className="text-zinc-700 mb-4">
          Вставьте <strong>must</strong> или <strong>have to</strong> в
          пропуски.
        </p>
        <CheckableExercise
          title="📝 Упражнение: Must или Have to"
          instruction="Заполните пропуски правильным модальным глаголом."
          items={items}
        />
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Практика Mustn't / Don't have to ===== */
function Step4() {
  const items: FillItem[] = [
    {
      left: "You",
      right: "smoke in the hospital. It's forbidden.",
      answers: ["mustn't", "must not"],
      explanation: "Нельзя курить в больнице. Это запрещено.",
    },
    {
      left: "You",
      right: "come if you're busy. It's optional.",
      answers: ["don't have to", "do not have to"],
      explanation: "Тебе необязательно приходить, если занят. Это необязательно.",
    },
    {
      left: "Students",
      right: "use phones during the test.",
      answers: ["mustn't", "must not"],
      explanation: "Студентам нельзя использовать телефоны во время теста.",
    },
    {
      left: "You",
      right: "bring food. We have enough.",
      answers: ["don't have to", "do not have to"],
      explanation: "Тебе необязательно приносить еду. У нас достаточно.",
    },
    {
      left: "We",
      right: "tell anyone about this. It's a secret.",
      answers: ["mustn't", "must not"],
      explanation: "Мы не должны никому рассказывать об этом. Это секрет.",
    },
  ];

  return (
    <>
      <UiSection title="Практика: Mustn't vs Don't have to">
        <p className="text-zinc-700 mb-4">
          Вставьте <strong>mustn't</strong> или <strong>don't have to</strong> в
          пропуски.
        </p>
        <CheckableExercise
          title="📝 Упражнение: Mustn't или Don't have to"
          instruction="Выберите правильную форму - запрет или отсутствие необходимости."
          items={items}
        />
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Практика Should ===== */
function Step5() {
  const items: FillItem[] = [
    {
      left: "You",
      right: "eat more vegetables. They're healthy.",
      answers: ["should"],
      explanation: "Тебе следует есть больше овощей. Они полезные.",
    },
    {
      left: "She",
      right: "study harder if she wants to pass.",
      answers: ["should"],
      explanation: "Ей следует учиться усерднее, если она хочет сдать.",
    },
    {
      left: "We",
      right: "leave now. It's getting late.",
      answers: ["should"],
      explanation: "Нам следует уйти сейчас. Становится поздно.",
    },
    {
      left: "You",
      right: "see a doctor about that cough.",
      answers: ["should"],
      explanation: "Тебе следует показаться врачу из-за этого кашля.",
    },
    {
      left: "They",
      right: "apologize for being rude.",
      answers: ["should"],
      explanation: "Им следует извиниться за грубость.",
    },
  ];

  return (
    <>
      <UiSection title="Практика: Should">
        <p className="text-zinc-700 mb-4">
          Вставьте <strong>should</strong> в пропуски.
        </p>
        <CheckableExercise
          title="📝 Упражнение: Should (Советы)"
          instruction="Вставьте should для выражения совета или рекомендации."
          items={items}
        />
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Смешанная практика ===== */
function Step6() {
  const items: FillItem[] = [
    {
      left: "You",
      right: "drive carefully in the rain.",
      answers: ["should"],
      explanation: "Тебе следует водить осторожно под дождём.",
    },
    {
      left: "I",
      right: "finish this work by tomorrow. It's urgent.",
      answers: ["must"],
      explanation: "Я должен закончить эту работу к завтра. Это срочно.",
    },
    {
      left: "",
      right: "you open the window, please?",
      answers: ["Could", "could"],
      explanation: "Не могли бы вы открыть окно, пожалуйста?",
    },
    {
      left: "We",
      right: "pay taxes. It's the law.",
      answers: ["have to"],
      explanation: "Мы обязаны платить налоги. Это закон.",
    },
    {
      left: "You",
      right: "touch that! It's hot.",
      answers: ["mustn't", "must not"],
      explanation: "Не трогай это! Оно горячее.",
    },
    {
      left: "She",
      right: "cook tonight. We're going out.",
      answers: ["doesn't have to", "does not have to"],
      explanation: "Ей не нужно готовить сегодня вечером. Мы идём в ресторан.",
    },
  ];

  return (
    <>
      <UiSection title="Смешанная практика">
        <p className="text-zinc-700 mb-4">
          Выберите правильный модальный глагол для каждого предложения.
        </p>
        <CheckableExercise
          title="📝 Упражнение: Смешанная практика"
          instruction="Вставьте правильный модальный глагол (can, could, must, have to, should, mustn't)."
          items={items}
        />
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Вопросительные предложения ===== */
function Step7() {
  return (
    <>
      <UiSection title="Вопросы с модальными глаголами">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Модальные глаголы в вопросах ставятся{" "}
          <strong>перед подлежащим</strong>.
        </p>

        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">Can / Could</p>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Can</strong> you help me? — Ты можешь помочь мне?
              </li>
              <li>
                <strong>Could</strong> I use your phone? — Могу я
                воспользоваться твоим телефоном?
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">Must</p>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Must</strong> I finish this now? — Я должен закончить
                это сейчас?
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">Have to</p>
            <ul className="space-y-2 text-sm">
              <li>
                Do you <strong>have to</strong> work tomorrow? — Тебе нужно
                работать завтра?
              </li>
              <li>
                Does she <strong>have to</strong> wear glasses? — Ей нужно
                носить очки?
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">Should</p>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Should</strong> I call him? — Мне следует позвонить ему?
              </li>
            </ul>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Практика вопросов ===== */
function Step8() {
  const items: FillItem[] = [
    {
      left: "",
      right: "I sit here?",
      answers: ["Can", "can"],
      explanation: "Могу я сесть здесь?",
    },
    {
      left: "Do you",
      right: "wear a suit to work?",
      answers: ["have to"],
      explanation: "Тебе нужно носить костюм на работу?",
    },
    {
      left: "",
      right: "we leave early today?",
      answers: ["Should", "should"],
      explanation: "Нам следует уйти пораньше сегодня?",
    },
    {
      left: "",
      right: "you speak louder, please?",
      answers: ["Could", "could"],
      explanation: "Не могли бы вы говорить громче, пожалуйста?",
    },
    {
      left: "",
      right: "they come to the meeting?",
      answers: ["Must", "must"],
      explanation: "Они должны прийти на встречу?",
    },
  ];

  return (
    <>
      <UiSection title="Практика: Вопросы с модальными глаголами">
        <p className="text-zinc-700 mb-4">
          Составьте вопросы, вставив правильный модальный глагол.
        </p>
        <CheckableExercise
          title="📝 Упражнение: Вопросы"
          instruction="Создайте вопросительные предложения с модальными глаголами."
          items={items}
        />
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Отрицательные предложения ===== */
function Step9() {
  return (
    <>
      <UiSection title="Отрицательные формы">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Отрицания с модальными глаголами образуются добавлением{" "}
          <strong>not</strong> после модального глагола.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-zinc-200">
            <p className="font-semibold text-zinc-900 mb-2">
              Can → Cannot / Can't
            </p>
            <p className="text-sm text-zinc-700">
              I <strong>can't</strong> swim. — Я не умею плавать.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-zinc-200">
            <p className="font-semibold text-zinc-900 mb-2">Could → Couldn't</p>
            <p className="text-sm text-zinc-700">
              He <strong>couldn't</strong> find his keys. — Он не мог найти свои
              ключи.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-zinc-200">
            <p className="font-semibold text-zinc-900 mb-2">Must → Mustn't</p>
            <p className="text-sm text-zinc-700">
              You <strong>mustn't</strong> be late. — Ты не должен опаздывать.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-zinc-200">
            <p className="font-semibold text-zinc-900 mb-2">
              Have to → Don't have to
            </p>
            <p className="text-sm text-zinc-700">
              I <strong>don't have to</strong> work today. — Мне не нужно
              работать сегодня.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-zinc-200">
            <p className="font-semibold text-zinc-900 mb-2">
              Should → Shouldn't
            </p>
            <p className="text-sm text-zinc-700">
              You <strong>shouldn't</strong> eat too much sugar. — Тебе не
              следует есть много сахара.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Важно помнить">
        <div className="bg-amber-50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            <strong>Mustn't ≠ Don't have to</strong>
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>
              <strong>Mustn't</strong> = запрещено (You mustn't smoke here.)
            </li>
            <li>
              <strong>Don't have to</strong> = не обязательно (You don't have to
              come.)
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговая практика ===== */
function Step10() {
  const items: FillItem[] = [
    {
      left: "You",
      right: "forget to lock the door.",
      answers: ["mustn't", "must not"],
      explanation: "Ты не должен забыть закрыть дверь на ключ.",
    },
    {
      left: "She",
      right: "play the guitar when she was younger.",
      answers: ["could"],
      explanation: "Она умела играть на гитаре, когда была моложе.",
    },
    {
      left: "We",
      right: "take off our shoes in the temple.",
      answers: ["have to"],
      explanation: "Мы должны снять обувь в храме.",
    },
    {
      left: "You",
      right: "try this restaurant. It's amazing!",
      answers: ["should"],
      explanation: "Тебе стоит попробовать этот ресторан. Он потрясающий!",
    },
    {
      left: "I",
      right: "bring my own lunch. The cafeteria is open.",
      answers: ["don't have to", "do not have to"],
      explanation: "Мне не нужно приносить свой обед. Столовая открыта.",
    },
    {
      left: "",
      right: "you pass me the salt, please?",
      answers: ["Could", "could"],
      explanation: "Не могли бы вы передать мне соль, пожалуйста?",
    },
    {
      left: "Children",
      right: "play with matches.",
      answers: ["mustn't", "must not"],
      explanation: "Детям нельзя играть со спичками.",
    },
    {
      left: "I",
      right: "study more if I want good grades.",
      answers: ["must"],
      explanation: "Я должен учиться больше, если хочу хорошие оценки.",
    },
  ];

  return (
    <>
      <UiSection title="Итоговая практика">
        <p className="text-zinc-700 mb-4">
          Финальное упражнение! Вставьте правильный модальный глагол в каждое
          предложение.
        </p>
        <CheckableExercise
          title="📝 Итоговое упражнение: Все модальные глаголы"
          instruction="Используйте can, could, must, have to, should, mustn't или don't have to."
          items={items}
        />
      </UiSection>

      <UiSection title="Поздравляем! 🎉">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
          <p className="text-zinc-700 leading-relaxed mb-3">
            Вы успешно закрепили тему <strong>модальных глаголов</strong>!
          </p>
          <p className="text-sm text-zinc-600">
            Теперь вы можете уверенно использовать can, could, must, have to,
            should и понимаете разницу между ними.
          </p>
        </div>
      </UiSection>
    </>
  );
}
