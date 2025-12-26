"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function AllConditionals({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📖 Все типы условных предложений">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              Conditionals 0, 1, 2, 3 & Mixed — Полное повторение
            </h2>
            <p className="text-zinc-700 mb-3">
              В английском языке есть **4 основных типа условных предложений** +
              **смешанные условные**. Каждый тип отвечает за свою ситуацию:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-700">
              <li>
                **Zero Conditional** — общие истины, законы природы, научные
                факты
              </li>
              <li>**First Conditional** — реальные условия в будущем</li>
              <li>
                **Second Conditional** — нереальные/маловероятные условия в
                настоящем или будущем
              </li>
              <li>
                **Third Conditional** — нереальные условия в прошлом (сожаления)
              </li>
              <li>**Mixed Conditionals** — комбинация прошлого и настоящего</li>
            </ul>
          </div>
        </Section>

        <Section title="🔍 Сравнительная таблица всех типов">
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-5 border-2 border-green-300">
              <h3 className="font-bold text-green-900 mb-2">
                0️⃣ Zero Conditional — Общие истины
              </h3>
              <p className="text-sm text-zinc-700 mb-2">
                **Формула:** If + Present Simple, Present Simple
              </p>
              <p className="text-sm text-zinc-600 mb-2">
                **Когда:** Всегда верно, научные факты, законы природы
              </p>
              <div className="bg-white rounded p-3 mt-2">
                <p className="text-sm">
                  If you <strong>heat</strong> water to 100°C, it{" "}
                  <strong>boils</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Если нагреваешь воду до 100°C, она кипит.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-300">
              <h3 className="font-bold text-blue-900 mb-2">
                1️⃣ First Conditional — Реальное будущее
              </h3>
              <p className="text-sm text-zinc-700 mb-2">
                **Формула:** If + Present Simple, will + V1
              </p>
              <p className="text-sm text-zinc-600 mb-2">
                **Когда:** Реальное условие, которое может произойти в будущем
              </p>
              <div className="bg-white rounded p-3 mt-2">
                <p className="text-sm">
                  If it <strong>rains</strong> tomorrow, I{" "}
                  <strong>will stay</strong> at home.
                </p>
                <p className="text-xs text-zinc-600">
                  Если завтра пойдёт дождь, я останусь дома.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-300">
              <h3 className="font-bold text-orange-900 mb-2">
                2️⃣ Second Conditional — Нереальное настоящее/будущее
              </h3>
              <p className="text-sm text-zinc-700 mb-2">
                **Формула:** If + Past Simple, would + V1
              </p>
              <p className="text-sm text-zinc-600 mb-2">
                **Когда:** Нереальное или маловероятное условие в
                настоящем/будущем
              </p>
              <div className="bg-white rounded p-3 mt-2">
                <p className="text-sm">
                  If I <strong>won</strong> the lottery, I{" "}
                  <strong>would buy</strong> a house.
                </p>
                <p className="text-xs text-zinc-600">
                  Если бы я выиграл в лотерею (но это нереально), я бы купил
                  дом.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-300">
              <h3 className="font-bold text-purple-900 mb-2">
                3️⃣ Third Conditional — Нереальное прошлое
              </h3>
              <p className="text-sm text-zinc-700 mb-2">
                **Формула:** If + had + V3, would have + V3
              </p>
              <p className="text-sm text-zinc-600 mb-2">
                **Когда:** Нереальное условие в прошлом (сожаление о том, что не
                произошло)
              </p>
              <div className="bg-white rounded p-3 mt-2">
                <p className="text-sm">
                  If I <strong>had studied</strong>, I{" "}
                  <strong>would have passed</strong> the exam.
                </p>
                <p className="text-xs text-zinc-600">
                  Если бы я учился (но не учился), я бы сдал экзамен (но не
                  сдал).
                </p>
              </div>
            </div>

            <div className="bg-pink-50 rounded-lg p-5 border-2 border-pink-300">
              <h3 className="font-bold text-pink-900 mb-2">
                🔀 Mixed Conditionals — Смешанные условные
              </h3>
              <p className="text-sm text-zinc-700 mb-2">
                **Формула 1:** If + had + V3, would + V1 (прошлое → настоящее)
              </p>
              <p className="text-sm text-zinc-700 mb-2">
                **Формула 2:** If + Past Simple, would have + V3 (настоящее →
                прошлое)
              </p>
              <div className="bg-white rounded p-3 mt-2">
                <p className="text-sm">
                  If I <strong>had studied</strong>, I{" "}
                  <strong>would know</strong> English now.
                </p>
                <p className="text-xs text-zinc-600">
                  Если бы я учился тогда, я бы знал английский сейчас.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 2) {
    const items: FillItem[] = [
      {
        left: "If you",
        answers: ["mix"],
        right: "(mix) red and blue, you get purple.",
        explanation: "Если смешиваешь красный и синий, получается фиолетовый.",
      },
      {
        left: "If I",
        answers: ["see"],
        right: "(see) her tomorrow, I will tell her.",
        explanation: "Если я увижу её завтра, я скажу ей.",
      },
      {
        left: "If I",
        answers: ["were"],
        right: "(be) you, I would accept the offer.",
        explanation: "Если бы я был на твоём месте, я бы принял предложение.",
      },
      {
        left: "If he",
        answers: ["had known"],
        right: "(know) about the meeting, he would have come.",
        explanation: "Если бы он знал о встрече, он бы пришёл.",
      },
      {
        left: "If she",
        answers: ["studies"],
        right: "(study) hard, she always passes her exams.",
        explanation: "Если она усердно занимается, она всегда сдаёт экзамены.",
      },
      {
        left: "If they",
        answers: ["invite"],
        right: "(invite) me, I will go to the party.",
        explanation: "Если они пригласят меня, я пойду на вечеринку.",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Определи тип">
          <div className="bg-indigo-50 rounded-lg p-4 border-2 border-indigo-200 mb-4">
            <p className="text-sm font-semibold text-indigo-900 mb-2">
              📝 Задание:
            </p>
            <p className="text-sm text-zinc-700">
              Поставь глагол в правильную форму. Определи, какой тип условного
              предложения в каждом примере.
            </p>
          </div>

          <CheckableExercise
            title="Базовое различение типов"
            instruction="Вставьте глагол в правильной форме."
            items={items}
            wideInputs
          />

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
            <p className="font-bold text-amber-900 mb-2">💡 Ключ к решению:</p>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • "always", "usually" → <strong>Zero Conditional</strong>
              </li>
              <li>
                • "tomorrow", "next week" → <strong>First Conditional</strong>
              </li>
              <li>
                • Past Simple + would → <strong>Second Conditional</strong>
              </li>
              <li>
                • had + V3 + would have → <strong>Third Conditional</strong>
              </li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  if (step === 3) {
    const items: FillItem[] = [
      {
        left: "If I",
        answers: ["had"],
        right: "(have) more money, I would travel the world.",
        explanation: "Если бы у меня было больше денег, я бы путешествовал по миру.",
      },
      {
        left: "If water",
        answers: ["reaches"],
        right: "(reach) 0°C, it freezes.",
        explanation: "Если вода достигает 0°C, она замерзает.",
      },
      {
        left: "If we",
        answers: ["leave"],
        right: "(leave) now, we will catch the train.",
        explanation: "Если мы выйдем сейчас, мы успеем на поезд.",
      },
      {
        left: "If she",
        answers: ["had listened"],
        right: "(listen) to my advice, she wouldn't have made that mistake.",
        explanation: "Если бы она послушала мой совет, она бы не сделала эту ошибку.",
      },
      {
        left: "If I",
        answers: ["were"],
        right: "(be) rich, I wouldn't work.",
        explanation: "Если бы я был богатым, я бы не работал.",
      },
      {
        left: "If you",
        answers: ["press"],
        right: "(press) this button, the machine stops.",
        explanation: "Если нажимаешь эту кнопку, машина останавливается.",
      },
      {
        left: "If it",
        answers: ["snows"],
        right: "(snow) tonight, we will go skiing tomorrow.",
        explanation: "Если сегодня пойдёт снег, мы пойдём кататься на лыжах завтра.",
      },
      {
        left: "If they",
        answers: ["had arrived"],
        right: "(arrive) earlier, they would have seen the show.",
        explanation: "Если бы они приехали раньше, они бы увидели шоу.",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 2: Смешанные типы">
          <div className="bg-rose-50 rounded-lg p-4 border-2 border-rose-200 mb-4">
            <p className="text-sm font-semibold text-rose-900">
              🎯 Цель: 8/8 правильных!
            </p>
          </div>

          <CheckableExercise
            title="Различение всех типов"
            instruction="Поставь глагол в правильную форму."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 4) {
    const items: FillItem[] = [
      {
        left: "If I",
        answers: ["had taken"],
        right: "(take) that job, I would be happy now.",
        explanation: "Если бы я взял ту работу, я был бы счастлив сейчас.",
      },
      {
        left: "If she",
        answers: ["spoke"],
        right: "(speak) English, she would have got the job.",
        explanation: "Если бы она говорила по-английски, она бы получила работу.",
      },
      {
        left: "If he",
        answers: ["had saved"],
        right: "(save) money, he would have enough now.",
        explanation: "Если бы он копил деньги, у него было бы достаточно сейчас.",
      },
      {
        left: "If I",
        answers: ["were"],
        right: "(be) more organized, I would have finished on time.",
        explanation: "Если бы я был более организованным, я бы закончил вовремя.",
      },
    ];

    return (
      <>
        <Section title="🔀 Mixed Conditionals — Прошлое и настоящее">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-xl font-bold text-purple-900 mb-3">
              Смешанные условные предложения
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Mixed Conditionals комбинируют разные времена, когда **прошлое
              влияет на настоящее** или **настоящее влияет на прошлое**.
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <p className="font-bold text-purple-900 mb-1">
                  Type 1: Past → Present
                </p>
                <p className="text-sm text-zinc-700 mb-2">
                  If + had + V3, would + V1
                </p>
                <p className="text-sm">
                  If I <strong>had studied</strong> harder, I{" "}
                  <strong>would know</strong> this now.
                </p>
                <p className="text-xs text-zinc-600">
                  Если бы я учился усерднее (тогда), я бы знал это (сейчас).
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-pink-400">
                <p className="font-bold text-pink-900 mb-1">
                  Type 2: Present → Past
                </p>
                <p className="text-sm text-zinc-700 mb-2">
                  If + Past Simple, would have + V3
                </p>
                <p className="text-sm">
                  If I <strong>were</strong> smarter, I{" "}
                  <strong>would have passed</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Если бы я был умнее (вообще), я бы сдал (тогда).
                </p>
              </div>
            </div>
          </div>

          <CheckableExercise
            title="Практика Mixed Conditionals"
            instruction="Определи тип и вставь правильную форму."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 5) {
    const items: FillItem[] = [
      {
        left: "If plants",
        answers: ["don't get"],
        right: "(not get) water, they die.",
        explanation: "Если растения не получают воду, они умирают.",
      },
      {
        left: "If you",
        answers: ["don't hurry"],
        right: "(not hurry), you will miss the bus.",
        explanation: "Если ты не поторопишься, ты пропустишь автобус.",
      },
      {
        left: "If I",
        answers: ["didn't have"],
        right: "(not have) to work, I would go to the beach.",
        explanation: "Если бы мне не нужно было работать, я бы пошёл на пляж.",
      },
      {
        left: "If she",
        answers: ["hadn't forgotten"],
        right: "(not forget) her passport, she would have caught the flight.",
        explanation: "Если бы она не забыла паспорт, она бы успела на рейс.",
      },
      {
        left: "If you",
        answers: ["don't exercise"],
        right: "(not exercise) regularly, you gain weight.",
        explanation: "Если не тренируешься регулярно, набираешь вес.",
      },
      {
        left: "If we",
        answers: ["don't book"],
        right: "(not book) now, we won't get tickets.",
        explanation: "Если мы не забронируем сейчас, мы не получим билеты.",
      },
    ];

    return (
      <>
        <Section title="❌ Отрицательные формы">
          <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200 mb-4">
            <h3 className="font-bold text-red-900 mb-2">
              Отрицания в условных предложениях
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              В каждом типе условных предложений можно использовать отрицание:
            </p>
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                • Zero: don't / doesn't → If you <strong>don't</strong> water
                plants, they die.
              </p>
              <p>
                • First: don't / doesn't → If it <strong>doesn't</strong> rain,
                we will go.
              </p>
              <p>
                • Second: didn't → If I <strong>didn't</strong> have work, I'd
                rest.
              </p>
              <p>
                • Third: hadn't + V3 → If she <strong>hadn't left</strong>,
                she'd be here.
              </p>
            </div>
          </div>

          <CheckableExercise
            title="Отрицательные условия"
            instruction="Поставь глагол в отрицательную форму."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 6) {
    const items: FillItem[] = [
      {
        left: "What",
        answers: ["will"],
        right: "you do (do) if you miss the train?",
        explanation: "Что ты сделаешь, если пропустишь поезд?",
      },
      {
        left: "What",
        answers: ["would"],
        right: "you buy (buy) if you won a million dollars?",
        explanation: "Что бы ты купил, если бы выиграл миллион долларов?",
      },
      {
        left: "What",
        answers: ["would"],
        right: "have happened (happen) if he had seen us?",
        explanation: "Что бы произошло, если бы он увидел нас?",
      },
      {
        left: "Where",
        answers: ["will"],
        right: "she go (go) if the weather is nice?",
        explanation: "Куда она пойдёт, если погода будет хорошей?",
      },
      {
        left: "Who",
        answers: ["would"],
        right: "you call (call) if you were in trouble?",
        explanation: "Кому бы ты позвонил, если бы был в беде?",
      },
      {
        left: "How",
        answers: ["would"],
        right: "you have felt (feel) if you had lost?",
        explanation: "Как бы ты себя почувствовал, если бы проиграл?",
      },
    ];

    return (
      <>
        <Section title="❓ Вопросительные формы">
          <div className="bg-cyan-50 rounded-lg p-4 border-2 border-cyan-200 mb-4">
            <h3 className="font-bold text-cyan-900 mb-2">
              Вопросы в условных предложениях
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              В главной части можно задать вопрос:
            </p>
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                • First: <strong>What will you do</strong> if...?
              </p>
              <p>
                • Second: <strong>What would you do</strong> if...?
              </p>
              <p>
                • Third: <strong>What would you have done</strong> if...?
              </p>
            </div>
          </div>

          <CheckableExercise
            title="Вопросы в условных"
            instruction="Вставь will/would/would have."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 7) {
    const items: FillItem[] = [
      {
        left: "If I",
        answers: ["see"],
        right: "(see) John, I'll give him your message.",
        explanation: "Если увижу Джона, передам ему твоё сообщение.",
      },
      {
        left: "If I",
        answers: ["were"],
        right: "(be) the president, I would lower taxes.",
        explanation: "Если бы я был президентом, я бы снизил налоги.",
      },
      {
        left: "If you",
        answers: ["heat"],
        right: "(heat) ice, it melts.",
        explanation: "Если нагреваешь лёд, он тает.",
      },
      {
        left: "If she",
        answers: ["had studied"],
        right: "(study) medicine, she would be a doctor now.",
        explanation: "Если бы она изучала медицину, она была бы врачом сейчас.",
      },
      {
        left: "If I",
        answers: ["had known"],
        right: "(know), I would have told you.",
        explanation: "Если бы я знал, я бы сказал тебе.",
      },
      {
        left: "If he",
        answers: ["calls"],
        right: "(call), tell him I'm busy.",
        explanation: "Если он позвонит, скажи, что я занят.",
      },
      {
        left: "If I",
        answers: ["had"],
        right: "(have) a car, I would drive to work.",
        explanation: "Если бы у меня была машина, я бы ездил на работу.",
      },
      {
        left: "If you",
        answers: ["don't sleep"],
        right: "(not sleep) enough, you feel tired.",
        explanation: "Если не спишь достаточно, чувствуешь усталость.",
      },
      {
        left: "If they",
        answers: ["had left"],
        right: "(leave) earlier, they would have arrived on time.",
        explanation: "Если бы они вышли раньше, они бы прибыли вовремя.",
      },
      {
        left: "If it",
        answers: ["rains"],
        right: "(rain) tomorrow, we will cancel the picnic.",
        explanation: "Если завтра пойдёт дождь, мы отменим пикник.",
      },
    ];

    return (
      <>
        <Section title="🎯 Мега-тест: Все типы вместе (1/3)">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300 mb-4">
            <p className="font-bold text-indigo-900 mb-2">
              📋 Большой тест на все типы условных
            </p>
            <p className="text-sm text-zinc-700">
              Определи тип условного предложения и поставь глагол в правильную
              форму. Здесь смешаны все типы: 0, 1, 2, 3 и Mixed.
            </p>
          </div>

          <CheckableExercise
            title="Мега-упражнение (часть 1)"
            instruction="Вставь глагол в правильной форме."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 8) {
    const items: FillItem[] = [
      {
        left: "If I",
        answers: ["were"],
        right: "(be) you, I would apologize.",
        explanation: "Если бы я был на твоём месте, я бы извинился.",
      },
      {
        left: "If you",
        answers: ["mix"],
        right: "(mix) yellow and blue, you get green.",
        explanation: "Если смешиваешь жёлтый и синий, получаешь зелёный.",
      },
      {
        left: "If we",
        answers: ["had known"],
        right: "(know) about the problem, we would have helped.",
        explanation: "Если бы мы знали о проблеме, мы бы помогли.",
      },
      {
        left: "If she",
        answers: ["arrives"],
        right: "(arrive) late, we will start without her.",
        explanation: "Если она опоздает, мы начнём без неё.",
      },
      {
        left: "If he",
        answers: ["had listened"],
        right: "(listen) to me, he wouldn't be in trouble now.",
        explanation: "Если бы он послушал меня, он не был бы сейчас в беде.",
      },
      {
        left: "If you",
        answers: ["drop"],
        right: "(drop) a glass, it breaks.",
        explanation: "Если роняешь стакан, он разбивается.",
      },
      {
        left: "If I",
        answers: ["had"],
        right: "(have) more time, I would learn another language.",
        explanation: "Если бы у меня было больше времени, я бы выучил другой язык.",
      },
      {
        left: "If they",
        answers: ["finish"],
        right: "(finish) early, they will join us.",
        explanation: "Если они закончат рано, они присоединятся к нам.",
      },
      {
        left: "If she",
        answers: ["had taken"],
        right: "(take) the medicine, she would have recovered faster.",
        explanation: "Если бы она приняла лекарство, она бы выздоровела быстрее.",
      },
      {
        left: "If I",
        answers: ["were"],
        right: "(be) taller, I would have played basketball professionally.",
        explanation: "Если бы я был выше, я бы играл в баскетбол профессионально.",
      },
    ];

    return (
      <>
        <Section title="🎯 Мега-тест: Все типы вместе (2/3)">
          <CheckableExercise
            title="Мега-упражнение (часть 2)"
            instruction="Вставь глагол в правильной форме."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 9) {
    const items: FillItem[] = [
      {
        left: "If you",
        answers: ["touch"],
        right: "(touch) fire, you get burned.",
        explanation: "Если прикасаешься к огню, обжигаешься.",
      },
      {
        left: "If it",
        answers: ["snows"],
        right: "(snow) heavily, we will cancel the trip.",
        explanation: "Если сильно пойдёт снег, мы отменим поездку.",
      },
      {
        left: "If I",
        answers: ["had"],
        right: "(have) wings, I would fly around the world.",
        explanation: "Если бы у меня были крылья, я бы облетел весь мир.",
      },
      {
        left: "If she",
        answers: ["had saved"],
        right: "(save) her work, she wouldn't have lost it.",
        explanation: "Если бы она сохранила свою работу, она бы её не потеряла.",
      },
      {
        left: "If he",
        answers: ["spoke"],
        right: "(speak) Chinese, he would have got the job.",
        explanation: "Если бы он говорил по-китайски, он бы получил работу.",
      },
      {
        left: "If the sun",
        answers: ["shines"],
        right: "(shine), plants grow.",
        explanation: "Если светит солнце, растения растут.",
      },
      {
        left: "If we",
        answers: ["don't leave"],
        right: "(not leave) soon, we will be late.",
        explanation: "Если мы не выйдем скоро, мы опоздаем.",
      },
      {
        left: "If I",
        answers: ["won"],
        right: "(win) the competition, I would be very happy.",
        explanation: "Если бы я выиграл соревнование, я был бы очень счастлив.",
      },
      {
        left: "If they",
        answers: ["had invited"],
        right: "(invite) us, we would have gone to the party.",
        explanation: "Если бы они пригласили нас, мы бы пошли на вечеринку.",
      },
      {
        left: "If she",
        answers: ["had studied"],
        right: "(study) harder, she would be at university now.",
        explanation: "Если бы она училась усерднее, она была бы сейчас в университете.",
      },
    ];

    return (
      <>
        <Section title="🎯 Мега-тест: Все типы вместе (3/3)">
          <CheckableExercise
            title="Мега-упражнение (часть 3)"
            instruction="Вставь глагол в правильной форме."
            items={items}
            wideInputs
          />

          <div className="bg-green-50 rounded-lg p-5 border-2 border-green-300 mt-4">
            <p className="font-bold text-green-900 mb-2">✅ Отличная работа!</p>
            <p className="text-sm text-zinc-700">
              Вы только что прошли через 30 предложений со всеми типами
              условных. Если вы набрали более 25/30, вы отлично понимаете
              conditionals!
            </p>
          </div>
        </Section>
      </>
    );
  }

  if (step === 10) {
    return (
      <>
        <Section title="🆚 Unless = If not">
          <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-300 mb-4">
            <h3 className="font-bold text-yellow-900 mb-3">
              Unless = Если НЕ (If not)
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **Unless** можно использовать во всех типах условных предложений
              вместо <strong>if not</strong>. Важно: после unless НЕ ставим
              отрицание!
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-zinc-900 mb-2">Zero & First:</p>
                <p className="text-sm mb-1">
                  If you <strong>don't</strong> hurry, you'll be late. =
                </p>
                <p className="text-sm text-indigo-700">
                  Unless you hurry, you'll be late.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-zinc-900 mb-2">Second:</p>
                <p className="text-sm mb-1">
                  If I <strong>didn't</strong> have to work, I'd travel. =
                </p>
                <p className="text-sm text-indigo-700">
                  Unless I had to work, I'd travel.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-zinc-900 mb-2">Third:</p>
                <p className="text-sm mb-1">
                  If she <strong>hadn't</strong> helped, I would have failed. =
                </p>
                <p className="text-sm text-indigo-700">
                  Unless she had helped, I would have failed.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
              <p className="text-sm font-semibold mb-2">
                Переведи используя unless:
              </p>
              <p className="text-sm text-zinc-700">
                1. Если ты не позвонишь, я буду волноваться.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                → Unless you call, I will worry.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
              <p className="text-sm text-zinc-700">
                2. Если бы у меня не было машины, я бы пользовался автобусом.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                → Unless I had a car, I would use the bus.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
              <p className="text-sm text-zinc-700">
                3. Если бы он не помог, мы бы не закончили вовремя.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                → Unless he had helped, we wouldn't have finished on time.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 11) {
    const items: FillItem[] = [
      {
        left: "If I",
        answers: ["see"],
        right: "(see) her, I will tell her the news.",
        explanation: "Если увижу её, я расскажу ей новость.",
      },
      {
        left: "If I",
        answers: ["saw"],
        right: "(see) her, I would tell her the news.",
        explanation: "Если бы я увидел её, я бы рассказал ей новость.",
      },
      {
        left: "If I",
        answers: ["had seen"],
        right: "(see) her, I would have told her the news.",
        explanation: "Если бы я увидел её, я бы рассказал ей новость (но не увидел).",
      },
      {
        left: "If he",
        answers: ["works"],
        right: "(work) hard, he always succeeds.",
        explanation: "Если он усердно работает, он всегда преуспевает.",
      },
      {
        left: "If he",
        answers: ["works"],
        right: "(work) hard, he will succeed.",
        explanation: "Если он будет усердно работать, он преуспеет.",
      },
      {
        left: "If he",
        answers: ["worked"],
        right: "(work) hard, he would succeed.",
        explanation: "Если бы он усердно работал, он бы преуспел.",
      },
      {
        left: "If he",
        answers: ["had worked"],
        right: "(work) hard, he would have succeeded.",
        explanation: "Если бы он усердно работал, он бы преуспел (но не работал).",
      },
      {
        left: "If you",
        answers: ["add"],
        right: "(add) salt to water, it dissolves.",
        explanation: "Если добавляешь соль в воду, она растворяется.",
      },
      {
        left: "If we",
        answers: ["hurry"],
        right: "(hurry), we will catch the bus.",
        explanation: "Если мы поторопимся, мы успеем на автобус.",
      },
      {
        left: "If I",
        answers: ["were"],
        right: "(be) rich, I would buy a yacht.",
        explanation: "Если бы я был богатым, я бы купил яхту.",
      },
      {
        left: "If she",
        answers: ["had known"],
        right: "(know) about it, she would have come.",
        explanation: "Если бы она знала об этом, она бы пришла.",
      },
      {
        left: "If they",
        answers: ["had studied"],
        right: "(study) harder, they would know English now.",
        explanation: "Если бы они учились усерднее, они знали бы английский сейчас.",
      },
    ];

    return (
      <>
        <Section title="🔄 Один глагол — разные времена">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-5 border-2 border-cyan-300 mb-4">
            <h3 className="font-bold text-cyan-900 mb-3">
              Как меняется смысл в зависимости от формы
            </h3>
            <p className="text-sm text-zinc-700">
              Посмотрим, как один и тот же глагол меняется в разных типах
              условных:
            </p>
          </div>

          <CheckableExercise
            title="Сравнение форм одного глагола"
            instruction="Поставь глагол в нужную форму по контексту."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 12) {
    const scenarios = [
      {
        situation: "🏖️ Вы выиграли путешествие на Мальдивы",
        zero: "—",
        first: "If I win a trip, I will go to the Maldives.",
        second: "If I won a trip, I would go to the Maldives.",
        third: "If I had won a trip, I would have gone to the Maldives.",
        mixed: "If I had won a trip, I would be there now.",
      },
      {
        situation: "📚 Сдача важного экзамена",
        zero: "If you study hard, you pass exams.",
        first: "If I study hard, I will pass the exam.",
        second: "If I studied hard, I would pass the exam.",
        third: "If I had studied hard, I would have passed the exam.",
        mixed: "If I had studied hard, I would be celebrating now.",
      },
      {
        situation: "💼 Получение работы мечты",
        zero: "—",
        first: "If I apply for the job, I will get it.",
        second: "If I applied for the job, I would get it.",
        third: "If I had applied for the job, I would have got it.",
        mixed: "If I had applied for the job, I would be working there now.",
      },
    ];

    return (
      <>
        <Section title="🎭 Реальные ситуации — все типы">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-xl font-bold text-indigo-900 mb-3">
              Как одна ситуация выражается во всех типах
            </h3>
            <p className="text-sm text-zinc-700">
              Рассмотрим, как одна и та же ситуация звучит в разных условных
              типах:
            </p>
          </div>

          <div className="space-y-4">
            {scenarios.map((scenario, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border-2 border-zinc-200"
              >
                <h4 className="font-bold text-zinc-900 mb-3">
                  {scenario.situation}
                </h4>
                <div className="space-y-2 text-sm">
                  {scenario.zero !== "—" && (
                    <div className="bg-green-50 rounded p-3">
                      <p className="font-semibold text-green-900">Zero:</p>
                      <p className="text-zinc-700">{scenario.zero}</p>
                    </div>
                  )}
                  <div className="bg-blue-50 rounded p-3">
                    <p className="font-semibold text-blue-900">First:</p>
                    <p className="text-zinc-700">{scenario.first}</p>
                  </div>
                  <div className="bg-orange-50 rounded p-3">
                    <p className="font-semibold text-orange-900">Second:</p>
                    <p className="text-zinc-700">{scenario.second}</p>
                  </div>
                  <div className="bg-purple-50 rounded p-3">
                    <p className="font-semibold text-purple-900">Third:</p>
                    <p className="text-zinc-700">{scenario.third}</p>
                  </div>
                  <div className="bg-pink-50 rounded p-3">
                    <p className="font-semibold text-pink-900">Mixed:</p>
                    <p className="text-zinc-700">{scenario.mixed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </>
    );
  }

  if (step === 13) {
    const items: FillItem[] = [
      {
        left: "If I",
        answers: ["were"],
        right: "(be) you, I would take the job. (Type: 2)",
        explanation: "Если бы я был на твоём месте, я бы взял работу.",
      },
      {
        left: "If she",
        answers: ["calls"],
        right: "(call), tell her I'm out. (Type: 1)",
        explanation: "Если она позвонит, скажи, что меня нет.",
      },
      {
        left: "If water",
        answers: ["boils"],
        right: "(boil), it turns to steam. (Type: 0)",
        explanation: "Если вода кипит, она превращается в пар.",
      },
      {
        left: "If they",
        answers: ["had left"],
        right:
          "(leave) earlier, they wouldn't be stuck in traffic now. (Type: Mixed)",
        explanation: "Если бы они вышли раньше, они бы не стояли сейчас в пробке.",
      },
      {
        left: "If I",
        answers: ["had known"],
        right: "(know) about the party, I would have come. (Type: 3)",
        explanation: "Если бы я знал о вечеринке, я бы пришёл.",
      },
      {
        left: "If you",
        answers: ["don't water"],
        right: "(not water) plants, they die. (Type: 0)",
        explanation: "Если не поливаешь растения, они умирают.",
      },
      {
        left: "If we",
        answers: ["win"],
        right: "(win) the match, we will celebrate. (Type: 1)",
        explanation: "Если мы выиграем матч, мы будем праздновать.",
      },
      {
        left: "If I",
        answers: ["had"],
        right: "(have) superpowers, I would help people. (Type: 2)",
        explanation: "Если бы у меня были суперспособности, я бы помогал людям.",
      },
      {
        left: "If she",
        answers: ["had practiced"],
        right: "(practice) more, she would have won. (Type: 3)",
        explanation: "Если бы она тренировалась больше, она бы выиграла.",
      },
      {
        left: "If he",
        answers: ["were"],
        right:
          "(be) more careful, he wouldn't have had the accident. (Type: Mixed)",
        explanation: "Если бы он был осторожнее, у него не было бы аварии.",
      },
      {
        left: "If it",
        answers: ["rains"],
        right: "(rain), the streets get wet. (Type: 0)",
        explanation: "Если идёт дождь, улицы становятся мокрыми.",
      },
      {
        left: "If they",
        answers: ["invite"],
        right: "(invite) us, we will go. (Type: 1)",
        explanation: "Если они пригласят нас, мы пойдём.",
      },
      {
        left: "If I",
        answers: ["lived"],
        right: "(live) by the sea, I would swim every day. (Type: 2)",
        explanation: "Если бы я жил у моря, я бы плавал каждый день.",
      },
      {
        left: "If we",
        answers: ["had booked"],
        right: "(book) earlier, we would have got better seats. (Type: 3)",
        explanation: "Если бы мы забронировали раньше, мы бы получили лучшие места.",
      },
      {
        left: "If she",
        answers: ["had saved"],
        right: "(save) money, she would have enough now. (Type: Mixed)",
        explanation: "Если бы она копила деньги, у неё было бы достаточно сейчас.",
      },
    ];

    return (
      <>
        <Section title="🏆 Финальный супер-тест">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-400 mb-4">
            <h3 className="text-2xl font-bold text-yellow-900 mb-3">
              Финальная проверка знаний
            </h3>
            <p className="text-sm text-zinc-700 mb-2">
              Это последнее упражнение! Здесь смешаны **все 5 типов** условных
              предложений.
            </p>
            <p className="text-sm font-semibold text-yellow-900">
              Цель: 13/15 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (15 вопросов)"
            instruction="Определи тип и вставь глагол в правильной форме."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы прошли полный курс по всем типам условных предложений! Теперь
              вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>✅ Различать все 5 типов условных предложений</li>
              <li>✅ Правильно использовать времена в каждом типе</li>
              <li>✅ Строить отрицания и вопросы</li>
              <li>✅ Использовать unless вместо if not</li>
              <li>✅ Применять Mixed Conditionals</li>
              <li>✅ Понимать, когда какой тип использовать</li>
            </ul>
          </div>
        </Section>

        <Section title="📚 Краткая памятка">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
              <h4 className="font-bold text-green-900 mb-2">
                Zero Conditional
              </h4>
              <p className="text-xs text-zinc-700">If + Present, Present</p>
              <p className="text-xs text-zinc-600 mt-1">
                Общие истины, законы природы
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
              <h4 className="font-bold text-blue-900 mb-2">
                First Conditional
              </h4>
              <p className="text-xs text-zinc-700">If + Present, will + V1</p>
              <p className="text-xs text-zinc-600 mt-1">
                Реальное условие в будущем
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
              <h4 className="font-bold text-orange-900 mb-2">
                Second Conditional
              </h4>
              <p className="text-xs text-zinc-700">If + Past, would + V1</p>
              <p className="text-xs text-zinc-600 mt-1">
                Нереальное настоящее/будущее
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
              <h4 className="font-bold text-purple-900 mb-2">
                Third Conditional
              </h4>
              <p className="text-xs text-zinc-700">
                If + had V3, would have V3
              </p>
              <p className="text-xs text-zinc-600 mt-1">Нереальное прошлое</p>
            </div>

            <div className="bg-pink-50 rounded-lg p-4 border-2 border-pink-300 md:col-span-2">
              <h4 className="font-bold text-pink-900 mb-2">
                Mixed Conditionals
              </h4>
              <p className="text-xs text-zinc-700">
                If + had V3, would V1 <em>(Past → Present)</em>
              </p>
              <p className="text-xs text-zinc-700">
                If + Past, would have V3 <em>(Present → Past)</em>
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                Комбинация времён: прошлое влияет на настоящее и наоборот
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return null;
}
