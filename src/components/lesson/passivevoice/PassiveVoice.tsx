"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PassiveVoice({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="🔄 Passive Voice — Страдательный залог">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 border-2 border-purple-300">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              Что такое Passive Voice?
            </h2>
            <p className="text-sm text-zinc-700 mb-3">
              В **активном залоге** (Active Voice) важно, **кто** делает
              действие:
            </p>
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400 mb-3">
              <p className="text-sm mb-1">
                <strong>Active:</strong> John <strong>writes</strong> a letter.
              </p>
              <p className="text-xs text-zinc-600">
                Джон пишет письмо. (Джон — главное)
              </p>
            </div>

            <p className="text-sm text-zinc-700 mb-3">
              В **страдательном залоге** (Passive Voice) важно **что**
              происходит с объектом:
            </p>
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400 mb-3">
              <p className="text-sm mb-1">
                <strong>Passive:</strong> A letter <strong>is written</strong>{" "}
                (by John).
              </p>
              <p className="text-xs text-zinc-600">
                Письмо написано (Джоном). (Письмо — главное)
              </p>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
              <p className="font-bold text-amber-900 mb-2">
                💡 Когда используем Passive:
              </p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>• Когда не знаем, кто выполняет действие</li>
                <li>• Когда не важно, кто выполняет действие</li>
                <li>• Когда хотим подчеркнуть объект, а не субъект</li>
                <li>• В научных текстах, новостях, инструкциях</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
              <h4 className="font-semibold text-blue-900 mb-2">
                Active Voice (Активный)
              </h4>
              <p className="text-sm mb-2">Субъект + Глагол + Объект</p>
              <p className="text-sm text-zinc-700">
                <strong>The chef</strong> cooks <strong>the meal</strong>.
              </p>
              <p className="text-xs text-zinc-600">Повар готовит еду.</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
              <h4 className="font-semibold text-purple-900 mb-2">
                Passive Voice (Страдательный)
              </h4>
              <p className="text-sm mb-2">Объект + be + V3 (+ by Субъект)</p>
              <p className="text-sm text-zinc-700">
                <strong>The meal</strong> is cooked (by the chef).
              </p>
              <p className="text-xs text-zinc-600">Еда готовится (поваром).</p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <Section title="📐 Формула Passive Voice">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">
              BE + V3 (Past Participle)
            </h3>

            <div className="bg-white rounded-lg p-5 border-2 border-indigo-200">
              <p className="text-sm text-zinc-700 mb-3">
                Форма глагола <strong>BE</strong> меняется в зависимости от
                времени:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  • Present:{" "}
                  <strong className="text-indigo-700">am/is/are</strong> + V3
                </p>
                <p>
                  • Past: <strong className="text-indigo-700">was/were</strong>{" "}
                  + V3
                </p>
                <p>
                  • Future: <strong className="text-indigo-700">will be</strong>{" "}
                  + V3
                </p>
                <p>
                  • Present Perfect:{" "}
                  <strong className="text-indigo-700">has/have been</strong> +
                  V3
                </p>
                <p>
                  • Past Perfect:{" "}
                  <strong className="text-indigo-700">had been</strong> + V3
                </p>
                <p>
                  • Modal:{" "}
                  <strong className="text-indigo-700">
                    must/can/should be
                  </strong>{" "}
                  + V3
                </p>
              </div>
            </div>
          </div>

          <div className="bg-rose-50 rounded-lg p-5 border-2 border-rose-300 mb-4">
            <h4 className="font-bold text-rose-900 mb-3">
              🔄 Трансформация Active → Passive
            </h4>
            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">
                  Active: <span className="text-blue-700">They</span> clean{" "}
                  <span className="text-purple-700">the office</span> every day.
                </p>
                <p className="text-xs text-zinc-600 mb-3">
                  Они убирают офис каждый день.
                </p>
                <p className="text-sm font-semibold text-purple-900">
                  Passive: <span className="text-purple-700">The office</span>{" "}
                  <strong>is cleaned</strong> every day.
                </p>
                <p className="text-xs text-zinc-600">
                  Офис убирается каждый день.
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
                <p className="text-xs text-zinc-700">
                  <strong>Шаг 1:</strong> Объект (the office) становится
                  подлежащим
                </p>
                <p className="text-xs text-zinc-700">
                  <strong>Шаг 2:</strong> Глагол превращается в be + V3 (is
                  cleaned)
                </p>
                <p className="text-xs text-zinc-700">
                  <strong>Шаг 3:</strong> Субъект (they) опускается или ставится
                  после "by"
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">
                <strong className="text-blue-700">Active:</strong> She paints
                the picture.
              </p>
              <p className="text-sm">
                <strong className="text-purple-700">Passive:</strong> The
                picture <strong>is painted</strong> (by her).
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">
                <strong className="text-blue-700">Active:</strong> He wrote the
                book.
              </p>
              <p className="text-sm">
                <strong className="text-purple-700">Passive:</strong> The book{" "}
                <strong>was written</strong> (by him).
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <Section title="📝 Present Simple Passive">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              AM / IS / ARE + V3
            </h3>

            <div className="bg-white rounded-lg p-4 border-l-4 border-green-400 mb-3">
              <h4 className="font-semibold text-green-900 mb-2">
                Утвердительная форма
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  The car <strong className="text-green-700">is washed</strong>{" "}
                  every week.
                </p>
                <p className="text-xs text-zinc-600">
                  Машину моют каждую неделю.
                </p>
                <p>
                  These products{" "}
                  <strong className="text-green-700">are made</strong> in China.
                </p>
                <p className="text-xs text-zinc-600">
                  Эти продукты произведены в Китае.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-red-400 mb-3">
              <h4 className="font-semibold text-red-900 mb-2">
                Отрицательная форма
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  The office{" "}
                  <strong className="text-red-700">is not cleaned</strong> on
                  Sundays.
                </p>
                <p className="text-xs text-zinc-600">
                  Офис не убирают по воскресеньям.
                </p>
                <p>
                  These books{" "}
                  <strong className="text-red-700">aren't sold</strong> here.
                </p>
                <p className="text-xs text-zinc-600">
                  Эти книги здесь не продаются.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-900 mb-2">
                Вопросительная форма
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-blue-700">Is</strong> English{" "}
                  <strong className="text-blue-700">spoken</strong> in Canada?
                </p>
                <p className="text-xs text-zinc-600">
                  На английском говорят в Канаде?
                </p>
                <p>
                  <strong className="text-blue-700">Are</strong> the emails{" "}
                  <strong className="text-blue-700">sent</strong> automatically?
                </p>
                <p className="text-xs text-zinc-600">
                  Письма отправляются автоматически?
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-1">
                📰 The newspaper{" "}
                <strong className="text-green-700">is published</strong> daily.
              </p>
              <p className="text-xs text-zinc-600">
                Газета издается ежедневно.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-1">
                🍕 Pizza{" "}
                <strong className="text-green-700">is delivered</strong> within
                30 minutes.
              </p>
              <p className="text-xs text-zinc-600">
                Пиццу доставляют за 30 минут.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-1">
                🏢 The building{" "}
                <strong className="text-green-700">is located</strong> in the
                city center.
              </p>
              <p className="text-xs text-zinc-600">
                Здание расположено в центре города.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-1">
                🎬 Movies <strong className="text-green-700">are shown</strong>{" "}
                at 7 PM.
              </p>
              <p className="text-xs text-zinc-600">
                Фильмы показывают в 7 вечера.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <Section title="⏳ Present Continuous Passive">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-xl font-bold text-cyan-900 mb-4">
              AM / IS / ARE + BEING + V3
            </h3>

            <div className="bg-white rounded-lg p-4 border-l-4 border-cyan-400 mb-3">
              <h4 className="font-semibold text-cyan-900 mb-2">
                Используем, когда действие происходит СЕЙЧАС
              </h4>
              <div className="space-y-3">
                <div className="bg-cyan-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The house{" "}
                    <strong className="text-cyan-700">is being built</strong>{" "}
                    right now.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Дом строится прямо сейчас.
                  </p>
                </div>
                <div className="bg-cyan-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The car{" "}
                    <strong className="text-cyan-700">is being repaired</strong>{" "}
                    at the moment.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Машину ремонтируют в данный момент.
                  </p>
                </div>
                <div className="bg-cyan-50 rounded p-3">
                  <p className="text-sm mb-1">
                    New employees{" "}
                    <strong className="text-cyan-700">are being trained</strong>{" "}
                    this week.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Новых сотрудников обучают на этой неделе.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
              <p className="font-bold text-amber-900 mb-2">💡 Важно:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • <strong>being</strong> — ключевое слово для Continuous
                  Passive
                </li>
                <li>• Подчёркивает процесс, который идёт СЕЙЧАС</li>
                <li>• Часто с: now, at the moment, currently, today</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
              <p className="text-sm mb-1">
                🍳 Dinner{" "}
                <strong className="text-cyan-700">is being cooked</strong> right
                now.
              </p>
              <p className="text-xs text-zinc-600">
                Ужин готовится прямо сейчас.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
              <p className="text-sm mb-1">
                📧 The email{" "}
                <strong className="text-cyan-700">is being sent</strong> as we
                speak.
              </p>
              <p className="text-xs text-zinc-600">
                Письмо отправляется прямо сейчас.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
              <p className="text-sm mb-1">
                🏗️ A new bridge{" "}
                <strong className="text-cyan-700">is being constructed</strong>.
              </p>
              <p className="text-xs text-zinc-600">Новый мост строится.</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
              <p className="text-sm mb-1">
                📱 Your phone{" "}
                <strong className="text-cyan-700">is being charged</strong>.
              </p>
              <p className="text-xs text-zinc-600">Твой телефон заряжается.</p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 5) {
    return (
      <>
        <Section title="✅ Present Perfect Passive">
          <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-300 mb-4">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">
              HAS / HAVE + BEEN + V3
            </h3>

            <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-400 mb-3">
              <h4 className="font-semibold text-emerald-900 mb-2">
                Действие завершено, результат виден
              </h4>
              <div className="space-y-3">
                <div className="bg-emerald-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The work{" "}
                    <strong className="text-emerald-700">
                      has been finished
                    </strong>
                    .
                  </p>
                  <p className="text-xs text-zinc-600">Работа закончена.</p>
                </div>
                <div className="bg-emerald-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The letter{" "}
                    <strong className="text-emerald-700">has been sent</strong>.
                  </p>
                  <p className="text-xs text-zinc-600">Письмо отправлено.</p>
                </div>
                <div className="bg-emerald-50 rounded p-3">
                  <p className="text-sm mb-1">
                    All tickets{" "}
                    <strong className="text-emerald-700">have been sold</strong>
                    .
                  </p>
                  <p className="text-xs text-zinc-600">Все билеты проданы.</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
              <p className="font-bold text-amber-900 mb-2">
                💡 Когда используем:
              </p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>• Действие завершено, результат важен СЕЙЧАС</li>
                <li>• Часто с: just, already, yet, recently, lately</li>
                <li>• Не важно, когда именно произошло</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
              <p className="text-sm mb-1">
                🏠 The house{" "}
                <strong className="text-emerald-700">has been sold</strong>.
              </p>
              <p className="text-xs text-zinc-600">Дом продан.</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
              <p className="text-sm mb-1">
                🚗 My car{" "}
                <strong className="text-emerald-700">has been stolen</strong>!
              </p>
              <p className="text-xs text-zinc-600">Мою машину украли!</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
              <p className="text-sm mb-1">
                📧 The email{" "}
                <strong className="text-emerald-700">has been received</strong>.
              </p>
              <p className="text-xs text-zinc-600">Письмо получено.</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
              <p className="text-sm mb-1">
                🛠️ The problem{" "}
                <strong className="text-emerald-700">has been fixed</strong>.
              </p>
              <p className="text-xs text-zinc-600">Проблема решена.</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
              <p className="text-sm mb-1">
                🍽️ Dinner{" "}
                <strong className="text-emerald-700">has been prepared</strong>.
              </p>
              <p className="text-xs text-zinc-600">Ужин приготовлен.</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
              <p className="text-sm mb-1">
                💼 The deal{" "}
                <strong className="text-emerald-700">has been completed</strong>
                .
              </p>
              <p className="text-xs text-zinc-600">Сделка завершена.</p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 6) {
    const items: FillItem[] = [
      {
        left: "1. The house",
        answers: ["is painted"],
        right: "every five years. (paint)",
        explanation: "Present Simple Passive: регулярное действие",
      },
      {
        left: "2. The report",
        answers: ["is being written"],
        right: "right now. (write)",
        explanation: "Present Continuous Passive: происходит сейчас",
      },
      {
        left: "3. The project",
        answers: ["has been finished"],
        right: "successfully. (finish)",
        explanation: "Present Perfect Passive: завершено, результат виден",
      },
      {
        left: "4. These shoes",
        answers: ["are made"],
        right: "in Italy. (make)",
        explanation: "Present Simple Passive: постоянный факт",
      },
      {
        left: "5. New employees",
        answers: ["are being hired"],
        right: "this month. (hire)",
        explanation: "Present Continuous Passive: процесс идёт",
      },
      {
        left: "6. All the cookies",
        answers: ["have been eaten"],
        right: "by the children. (eat)",
        explanation: "Present Perfect Passive: завершено",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Present Tenses">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-300 mb-4">
            <p className="font-bold text-green-900 mb-2">
              📝 Различаем три Present Passive
            </p>
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                • <strong>is/are + V3</strong> — регулярно, постоянно
              </p>
              <p>
                • <strong>is/are being + V3</strong> — сейчас, в процессе
              </p>
              <p>
                • <strong>has/have been + V3</strong> — завершено, результат
                важен
              </p>
            </div>
          </div>

          <CheckableExercise
            title="Выбери правильную форму"
            instruction="Поставь глагол в нужную форму Passive Voice."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 7) {
    return (
      <>
        <Section title="⏮️ Past Simple Passive">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300 mb-4">
            <h3 className="text-xl font-bold text-orange-900 mb-4">
              WAS / WERE + V3
            </h3>

            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400 mb-3">
              <h4 className="font-semibold text-orange-900 mb-2">
                Действие произошло в прошлом
              </h4>
              <div className="space-y-3">
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The letter{" "}
                    <strong className="text-orange-700">was sent</strong>{" "}
                    yesterday.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Письмо было отправлено вчера.
                  </p>
                </div>
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The pyramids{" "}
                    <strong className="text-orange-700">were built</strong>{" "}
                    thousands of years ago.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Пирамиды были построены тысячи лет назад.
                  </p>
                </div>
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The movie{" "}
                    <strong className="text-orange-700">was filmed</strong> in
                    2020.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Фильм был снят в 2020 году.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
              <p className="font-bold text-amber-900 mb-2">💡 Маркеры:</p>
              <p className="text-sm text-zinc-700">
                yesterday, last week, in 2010, ago, when I was young
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <p className="text-sm mb-1">
                📚 The book{" "}
                <strong className="text-orange-700">was written</strong> in
                1920.
              </p>
              <p className="text-xs text-zinc-600">
                Книга была написана в 1920 году.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <p className="text-sm mb-1">
                🏆 The prize{" "}
                <strong className="text-orange-700">was won</strong> by my team.
              </p>
              <p className="text-xs text-zinc-600">
                Приз был выигран моей командой.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <p className="text-sm mb-1">
                🚗 The car{" "}
                <strong className="text-orange-700">was stolen</strong> last
                night.
              </p>
              <p className="text-xs text-zinc-600">
                Машину угнали прошлой ночью.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <p className="text-sm mb-1">
                🍰 The cake{" "}
                <strong className="text-orange-700">was eaten</strong> by the
                kids.
              </p>
              <p className="text-xs text-zinc-600">Торт съели дети.</p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 8) {
    return (
      <>
        <Section title="⏳ Past Continuous Passive">
          <div className="bg-rose-50 rounded-lg p-6 border-2 border-rose-300 mb-4">
            <h3 className="text-xl font-bold text-rose-900 mb-4">
              WAS / WERE + BEING + V3
            </h3>

            <div className="bg-white rounded-lg p-4 border-l-4 border-rose-400 mb-3">
              <h4 className="font-semibold text-rose-900 mb-2">
                Процесс был в разгаре в определённый момент прошлого
              </h4>
              <div className="space-y-3">
                <div className="bg-rose-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The house{" "}
                    <strong className="text-rose-700">was being painted</strong>{" "}
                    at 3 PM yesterday.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Дом красили вчера в 3 часа дня.
                  </p>
                </div>
                <div className="bg-rose-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The patient{" "}
                    <strong className="text-rose-700">
                      was being examined
                    </strong>{" "}
                    when I arrived.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Пациента осматривали, когда я прибыл.
                  </p>
                </div>
                <div className="bg-rose-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The roads{" "}
                    <strong className="text-rose-700">
                      were being repaired
                    </strong>{" "}
                    all day.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Дороги ремонтировали весь день.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
              <p className="font-bold text-amber-900 mb-2">💡 Важно:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>• Подчёркивает ПРОЦЕСС в прошлом</li>
                <li>• Часто с: at that moment, when, while, all day</li>
                <li>• Используется редко (звучит громоздко)</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-1">
                🍳 Lunch{" "}
                <strong className="text-rose-700">was being cooked</strong> when
                the power went out.
              </p>
              <p className="text-xs text-zinc-600">
                Обед готовился, когда отключили свет.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-1">
                🏗️ The building{" "}
                <strong className="text-rose-700">was being demolished</strong>{" "}
                last month.
              </p>
              <p className="text-xs text-zinc-600">
                Здание сносили в прошлом месяце.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-1">
                📝 The contract{" "}
                <strong className="text-rose-700">was being signed</strong> at
                that time.
              </p>
              <p className="text-xs text-zinc-600">
                Контракт подписывался в тот момент.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-1">
                📺 The interview{" "}
                <strong className="text-rose-700">was being broadcast</strong>{" "}
                live.
              </p>
              <p className="text-xs text-zinc-600">
                Интервью транслировалось в прямом эфире.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 9) {
    return (
      <>
        <Section title="✅ Past Perfect Passive">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-xl font-bold text-purple-900 mb-4">
              HAD + BEEN + V3
            </h3>

            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400 mb-3">
              <h4 className="font-semibold text-purple-900 mb-2">
                Действие завершилось ДО другого действия в прошлом
              </h4>
              <div className="space-y-3">
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The room{" "}
                    <strong className="text-purple-700">
                      had been cleaned
                    </strong>{" "}
                    before the guests arrived.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Комнату убрали до того, как гости прибыли.
                  </p>
                </div>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The book{" "}
                    <strong className="text-purple-700">
                      had been published
                    </strong>{" "}
                    before the author died.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Книга была опубликована до смерти автора.
                  </p>
                </div>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The work{" "}
                    <strong className="text-purple-700">
                      had been completed
                    </strong>{" "}
                    by 5 PM.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Работа была завершена к 5 вечера.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
              <p className="font-bold text-amber-900 mb-2">
                💡 Когда используем:
              </p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>• Два действия в прошлом: одно произошло РАНЬШЕ другого</li>
                <li>• Часто с: before, after, by the time, already, when</li>
                <li>• Подчёркивает предшествование</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <p className="text-sm mb-1">
                🍽️ The dinner{" "}
                <strong className="text-purple-700">had been prepared</strong>{" "}
                before we arrived.
              </p>
              <p className="text-xs text-zinc-600">
                Ужин был приготовлен до нашего прибытия.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <p className="text-sm mb-1">
                🚗 The car{" "}
                <strong className="text-purple-700">had been repaired</strong>{" "}
                by the time I came back.
              </p>
              <p className="text-xs text-zinc-600">
                Машину отремонтировали к моему возвращению.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <p className="text-sm mb-1">
                📧 The email{" "}
                <strong className="text-purple-700">had been sent</strong>{" "}
                before I noticed the error.
              </p>
              <p className="text-xs text-zinc-600">
                Письмо было отправлено до того, как я заметил ошибку.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <p className="text-sm mb-1">
                🏠 The house{" "}
                <strong className="text-purple-700">had been sold</strong>{" "}
                before we made an offer.
              </p>
              <p className="text-xs text-zinc-600">
                Дом продали до того, как мы сделали предложение.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 10) {
    const items: FillItem[] = [
      {
        left: "1. The letter",
        answers: ["was delivered"],
        right: "yesterday morning. (deliver)",
        explanation: "Past Simple Passive: действие в прошлом",
      },
      {
        left: "2. The road",
        answers: ["was being repaired"],
        right: "when I passed by. (repair)",
        explanation: "Past Continuous Passive: процесс был в разгаре",
      },
      {
        left: "3. The report",
        answers: ["had been finished"],
        right: "before the meeting started. (finish)",
        explanation: "Past Perfect Passive: завершено до другого действия",
      },
      {
        left: "4. The Mona Lisa",
        answers: ["was painted"],
        right: "by Leonardo da Vinci. (paint)",
        explanation: "Past Simple Passive: исторический факт",
      },
      {
        left: "5. The patient",
        answers: ["was being treated"],
        right: "at 6 PM. (treat)",
        explanation: "Past Continuous Passive: процесс в момент",
      },
      {
        left: "6. All the tickets",
        answers: ["had been sold"],
        right: "by the time we arrived. (sell)",
        explanation: "Past Perfect Passive: завершено к моменту",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 2: Past Tenses">
          <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-5 border-2 border-orange-300 mb-4">
            <p className="font-bold text-orange-900 mb-2">
              📝 Различаем три Past Passive
            </p>
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                • <strong>was/were + V3</strong> — произошло в прошлом
              </p>
              <p>
                • <strong>was/were being + V3</strong> — процесс был в разгаре
              </p>
              <p>
                • <strong>had been + V3</strong> — завершено ДО другого действия
              </p>
            </div>
          </div>

          <CheckableExercise
            title="Выбери правильную форму"
            instruction="Поставь глагол в нужную форму Past Passive."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 11) {
    return (
      <>
        <Section title="🔮 Future Passive">
          <div className="bg-sky-50 rounded-lg p-6 border-2 border-sky-300 mb-4">
            <h3 className="text-xl font-bold text-sky-900 mb-4">
              WILL + BE + V3
            </h3>

            <div className="bg-white rounded-lg p-4 border-l-4 border-sky-400 mb-3">
              <h4 className="font-semibold text-sky-900 mb-2">
                Future Simple Passive
              </h4>
              <div className="space-y-3">
                <div className="bg-sky-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The project{" "}
                    <strong className="text-sky-700">will be completed</strong>{" "}
                    next month.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Проект будет завершён в следующем месяце.
                  </p>
                </div>
                <div className="bg-sky-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The results{" "}
                    <strong className="text-sky-700">will be announced</strong>{" "}
                    tomorrow.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Результаты будут объявлены завтра.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-teal-400 mb-3">
              <h4 className="font-semibold text-teal-900 mb-2">
                BE GOING TO + BE + V3
              </h4>
              <div className="space-y-3">
                <div className="bg-teal-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The house{" "}
                    <strong className="text-teal-700">
                      is going to be sold
                    </strong>
                    .
                  </p>
                  <p className="text-xs text-zinc-600">
                    Дом собираются продать.
                  </p>
                </div>
                <div className="bg-teal-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The meeting{" "}
                    <strong className="text-teal-700">
                      is going to be postponed
                    </strong>
                    .
                  </p>
                  <p className="text-xs text-zinc-600">
                    Встречу собираются отложить.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-400">
              <h4 className="font-semibold text-indigo-900 mb-2">
                Future Perfect Passive: WILL HAVE BEEN + V3
              </h4>
              <div className="space-y-3">
                <div className="bg-indigo-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The work{" "}
                    <strong className="text-indigo-700">
                      will have been finished
                    </strong>{" "}
                    by Friday.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Работа будет завершена к пятнице.
                  </p>
                </div>
                <div className="bg-indigo-50 rounded p-3">
                  <p className="text-sm mb-1">
                    The book{" "}
                    <strong className="text-indigo-700">
                      will have been published
                    </strong>{" "}
                    by next year.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Книга будет опубликована к следующему году.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-sky-200">
              <p className="text-sm mb-1">
                🏗️ A new school{" "}
                <strong className="text-sky-700">will be built</strong> here.
              </p>
              <p className="text-xs text-zinc-600">
                Здесь построят новую школу.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-sky-200">
              <p className="text-sm mb-1">
                📧 The invitations{" "}
                <strong className="text-sky-700">will be sent</strong> next
                week.
              </p>
              <p className="text-xs text-zinc-600">
                Приглашения будут отправлены на следующей неделе.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-teal-200">
              <p className="text-sm mb-1">
                🏠 The house{" "}
                <strong className="text-teal-700">
                  is going to be renovated
                </strong>
                .
              </p>
              <p className="text-xs text-zinc-600">
                Дом собираются отремонтировать.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
              <p className="text-sm mb-1">
                📚 The books{" "}
                <strong className="text-indigo-700">
                  will have been delivered
                </strong>{" "}
                by tomorrow.
              </p>
              <p className="text-xs text-zinc-600">
                Книги доставят к завтрашнему дню.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 12) {
    return (
      <>
        <Section title="🔧 Modal Passive">
          <div className="bg-violet-50 rounded-lg p-6 border-2 border-violet-300 mb-4">
            <h3 className="text-xl font-bold text-violet-900 mb-4">
              MODAL + BE + V3
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-violet-400">
                <h4 className="font-semibold text-violet-900 mb-2">
                  MUST / SHOULD / CAN / COULD / MAY / MIGHT + BE + V3
                </h4>
                <div className="space-y-3">
                  <div className="bg-violet-50 rounded p-3">
                    <p className="text-sm mb-1">
                      This work{" "}
                      <strong className="text-violet-700">must be done</strong>{" "}
                      today.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Эта работа должна быть сделана сегодня.
                    </p>
                  </div>
                  <div className="bg-violet-50 rounded p-3">
                    <p className="text-sm mb-1">
                      The rules{" "}
                      <strong className="text-violet-700">
                        should be followed
                      </strong>
                      .
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правила должны соблюдаться.
                    </p>
                  </div>
                  <div className="bg-violet-50 rounded p-3">
                    <p className="text-sm mb-1">
                      English{" "}
                      <strong className="text-violet-700">
                        can be learned
                      </strong>{" "}
                      online.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Английский можно выучить онлайн.
                    </p>
                  </div>
                  <div className="bg-violet-50 rounded p-3">
                    <p className="text-sm mb-1">
                      The problem{" "}
                      <strong className="text-violet-700">may be solved</strong>{" "}
                      soon.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Проблема может быть решена скоро.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-rose-400">
                <h4 className="font-semibold text-rose-900 mb-2">
                  Modal Perfect Passive: MODAL + HAVE BEEN + V3
                </h4>
                <div className="space-y-3">
                  <div className="bg-rose-50 rounded p-3">
                    <p className="text-sm mb-1">
                      The work{" "}
                      <strong className="text-rose-700">
                        should have been finished
                      </strong>{" "}
                      yesterday.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Работа должна была быть закончена вчера.
                    </p>
                  </div>
                  <div className="bg-rose-50 rounded p-3">
                    <p className="text-sm mb-1">
                      The letter{" "}
                      <strong className="text-rose-700">
                        could have been sent
                      </strong>{" "}
                      earlier.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Письмо могло быть отправлено раньше.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-violet-200">
              <p className="text-sm mb-1">
                📱 Phones{" "}
                <strong className="text-violet-700">must be turned off</strong>{" "}
                during the exam.
              </p>
              <p className="text-xs text-zinc-600">
                Телефоны должны быть выключены во время экзамена.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-violet-200">
              <p className="text-sm mb-1">
                🚗 The car{" "}
                <strong className="text-violet-700">can be rented</strong> for
                $50 a day.
              </p>
              <p className="text-xs text-zinc-600">
                Машину можно арендовать за $50 в день.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-violet-200">
              <p className="text-sm mb-1">
                💊 This medicine{" "}
                <strong className="text-violet-700">should be taken</strong>{" "}
                twice a day.
              </p>
              <p className="text-xs text-zinc-600">
                Это лекарство нужно принимать дважды в день.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-violet-200">
              <p className="text-sm mb-1">
                🎫 Tickets{" "}
                <strong className="text-violet-700">may be purchased</strong>{" "}
                online.
              </p>
              <p className="text-xs text-zinc-600">
                Билеты можно купить онлайн.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 13) {
    const items: FillItem[] = [
      {
        left: "1. The house",
        answers: ["is cleaned"],
        right: "every week. (clean, Present Simple)",
        explanation: "Регулярное действие — Present Simple Passive",
      },
      {
        left: "2. The car",
        answers: ["was stolen"],
        right: "last night. (steal, Past Simple)",
        explanation: "Конкретное действие в прошлом — Past Simple Passive",
      },
      {
        left: "3. A new hospital",
        answers: ["will be built"],
        right: "next year. (build, Future Simple)",
        explanation: "Действие в будущем — Future Simple Passive",
      },
      {
        left: "4. The report",
        answers: ["is being written"],
        right: "right now. (write, Present Continuous)",
        explanation: "Происходит сейчас — Present Continuous Passive",
      },
      {
        left: "5. All the cookies",
        answers: ["have been eaten"],
        right: "by the children. (eat, Present Perfect)",
        explanation: "Завершено, результат виден — Present Perfect Passive",
      },
      {
        left: "6. The room",
        answers: ["had been cleaned"],
        right: "before the guests arrived. (clean, Past Perfect)",
        explanation: "Завершено до другого действия — Past Perfect Passive",
      },
      {
        left: "7. The road",
        answers: ["was being repaired"],
        right: "when I drove by. (repair, Past Continuous)",
        explanation: "Процесс был в разгаре — Past Continuous Passive",
      },
      {
        left: "8. The problem",
        answers: ["must be solved"],
        right: "immediately. (solve, Modal)",
        explanation: "С модальным глаголом — Modal Passive",
      },
      {
        left: "9. The project",
        answers: ["will have been completed"],
        right: "by next month. (complete, Future Perfect)",
        explanation:
          "Завершится к определённому моменту — Future Perfect Passive",
      },
      {
        left: "10. English",
        answers: ["is spoken"],
        right: "all over the world. (speak, Present Simple)",
        explanation: "Общий факт — Present Simple Passive",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 3: Все времена">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-300 mb-4">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              🎯 Мега-тест на все времена Passive!
            </p>
            <p className="text-sm text-zinc-700">
              Определи, какое время нужно использовать, и поставь глагол в
              Passive Voice. Это главная проверка!
            </p>
          </div>

          <CheckableExercise
            title="Все времена Passive Voice"
            instruction="Поставь глагол в правильную форму Passive Voice (время указано в скобках)."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 14) {
    return (
      <>
        <Section title="🆚 BY vs WITH в Passive">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Кто или чем сделано?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-5 border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-900 mb-3">BY — Кто</h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Используем <strong>by</strong>, когда говорим о **КТО** или
                  **ЧТО** выполнило действие (агент, деятель).
                </p>
                <div className="space-y-2">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm mb-1">
                      The book was written <strong>by Shakespeare</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Книга написана Шекспиром.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm mb-1">
                      The house was destroyed <strong>by a fire</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Дом уничтожен пожаром.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border-l-4 border-cyan-400">
                <h4 className="font-bold text-cyan-900 mb-3">WITH — Чем</h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Используем <strong>with</strong>, когда говорим о **ЧЕМ**
                  (инструмент, орудие).
                </p>
                <div className="space-y-2">
                  <div className="bg-cyan-50 rounded p-3">
                    <p className="text-sm mb-1">
                      The door was opened <strong>with a key</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Дверь открыли ключом.
                    </p>
                  </div>
                  <div className="bg-cyan-50 rounded p-3">
                    <p className="text-sm mb-1">
                      The cake was decorated <strong>with flowers</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Торт украсили цветами.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
              <p className="font-bold text-amber-900 mb-2">💡 Запомни:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • <strong>BY</strong> — кто/что ВЫПОЛНИЛ действие (агент)
                </li>
                <li>
                  • <strong>WITH</strong> — чем ВЫПОЛНИЛ (инструмент, материал)
                </li>
                <li>• BY + человек, животное, природное явление</li>
                <li>• WITH + инструмент, материал, средство</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <p className="text-sm mb-1">
                🎨 The painting was created <strong>by Picasso</strong>.
              </p>
              <p className="text-xs text-zinc-600">Картину создал Пикассо.</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
              <p className="text-sm mb-1">
                🔪 The bread was cut <strong>with a knife</strong>.
              </p>
              <p className="text-xs text-zinc-600">Хлеб порезали ножом.</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <p className="text-sm mb-1">
                📧 The email was sent <strong>by my colleague</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Письмо отправил мой коллега.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
              <p className="text-sm mb-1">
                ✍️ The form was filled out <strong>with a pen</strong>.
              </p>
              <p className="text-xs text-zinc-600">Форму заполнили ручкой.</p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 15) {
    const items: FillItem[] = [
      {
        left: "1. The package",
        answers: ["will be delivered"],
        right: "tomorrow. (deliver)",
        explanation: "Future Simple Passive",
      },
      {
        left: "2. The window",
        answers: ["was broken"],
        right: "by a ball. (break)",
        explanation: "Past Simple Passive с by",
      },
      {
        left: "3. The food",
        answers: ["is being prepared"],
        right: "in the kitchen right now. (prepare)",
        explanation: "Present Continuous Passive",
      },
      {
        left: "4. This song",
        answers: ["was written"],
        right: "by John Lennon. (write)",
        explanation: "Past Simple Passive с by",
      },
      {
        left: "5. The car",
        answers: ["must be washed"],
        right: "before the trip. (wash)",
        explanation: "Modal Passive",
      },
      {
        left: "6. The homework",
        answers: ["has been completed"],
        right: "by all students. (complete)",
        explanation: "Present Perfect Passive",
      },
      {
        left: "7. The house",
        answers: ["had been sold"],
        right: "before we arrived. (sell)",
        explanation: "Past Perfect Passive",
      },
      {
        left: "8. The problem",
        answers: ["can be solved"],
        right: "easily. (solve)",
        explanation: "Modal Passive",
      },
      {
        left: "9. New employees",
        answers: ["are hired"],
        right: "every month. (hire)",
        explanation: "Present Simple Passive",
      },
      {
        left: "10. The building",
        answers: ["was being demolished"],
        right: "when we passed by. (demolish)",
        explanation: "Past Continuous Passive",
      },
      {
        left: "11. The work",
        answers: ["will have been finished"],
        right: "by 5 PM. (finish)",
        explanation: "Future Perfect Passive",
      },
      {
        left: "12. The message",
        answers: ["should be sent"],
        right: "immediately. (send)",
        explanation: "Modal Passive",
      },
    ];

    return (
      <>
        <Section title="🏆 Финальный супер-тест">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-400 mb-4">
            <h3 className="text-2xl font-bold text-yellow-900 mb-3">
              Последняя проверка!
            </h3>
            <p className="text-sm text-zinc-700 mb-2">
              12 предложений на **ВСЕ времена и формы Passive Voice**. Это
              финал!
            </p>
            <p className="text-sm font-semibold text-yellow-900">
              Цель: 10/12 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (12 вопросов)"
            instruction="Поставь глагол в правильную форму Passive Voice."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы освоили Passive Voice во всех временах! Теперь вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>✅ Использовать Present Simple/Continuous/Perfect Passive</li>
              <li>✅ Использовать Past Simple/Continuous/Perfect Passive</li>
              <li>✅ Использовать Future Simple/Perfect Passive</li>
              <li>✅ Использовать Modal Passive (must/can/should be done)</li>
              <li>✅ Различать by (кто) и with (чем)</li>
              <li>✅ Трансформировать Active в Passive</li>
              <li>✅ Применять в реальных ситуациях</li>
            </ul>
          </div>
        </Section>

        <Section title="📚 Vocabulary — Глаголы для Passive">
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">
              15 важных глаголов, часто используемых в Passive
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  1. produce — производить
                </p>
                <p className="text-xs text-zinc-600">
                  Cars are <strong>produced</strong> in this factory.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  2. manufacture — изготавливать
                </p>
                <p className="text-xs text-zinc-600">
                  These phones are <strong>manufactured</strong> in China.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  3. publish — издавать, публиковать
                </p>
                <p className="text-xs text-zinc-600">
                  The book was <strong>published</strong> in 2020.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  4. deliver — доставлять
                </p>
                <p className="text-xs text-zinc-600">
                  The package will be <strong>delivered</strong> tomorrow.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  5. construct — строить
                </p>
                <p className="text-xs text-zinc-600">
                  A new bridge is being <strong>constructed</strong>.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  6. demolish — сносить
                </p>
                <p className="text-xs text-zinc-600">
                  The old building was <strong>demolished</strong> last year.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  7. repair — ремонтировать
                </p>
                <p className="text-xs text-zinc-600">
                  My car is being <strong>repaired</strong> now.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  8. announce — объявлять
                </p>
                <p className="text-xs text-zinc-600">
                  The results will be <strong>announced</strong> tomorrow.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  9. postpone — откладывать
                </p>
                <p className="text-xs text-zinc-600">
                  The meeting has been <strong>postponed</strong>.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  10. cancel — отменять
                </p>
                <p className="text-xs text-zinc-600">
                  The flight was <strong>cancelled</strong> due to bad weather.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  11. organize — организовывать
                </p>
                <p className="text-xs text-zinc-600">
                  The event is <strong>organized</strong> by volunteers.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  12. examine — осматривать, проверять
                </p>
                <p className="text-xs text-zinc-600">
                  The patient is being <strong>examined</strong> by a doctor.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  13. renovate — ремонтировать, обновлять
                </p>
                <p className="text-xs text-zinc-600">
                  The hotel is going to be <strong>renovated</strong>.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  14. investigate — расследовать
                </p>
                <p className="text-xs text-zinc-600">
                  The crime is being <strong>investigated</strong>.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  15. broadcast — транслировать
                </p>
                <p className="text-xs text-zinc-600">
                  The match will be <strong>broadcast</strong> live.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="📋 Краткая памятка">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
              <h4 className="font-bold text-green-900 mb-2">Present</h4>
              <ul className="text-xs text-zinc-700 space-y-1">
                <li>• is/are + V3 (Simple)</li>
                <li>• is/are being + V3 (Cont.)</li>
                <li>• has/have been + V3 (Perf.)</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
              <h4 className="font-bold text-orange-900 mb-2">Past</h4>
              <ul className="text-xs text-zinc-700 space-y-1">
                <li>• was/were + V3 (Simple)</li>
                <li>• was/were being + V3 (Cont.)</li>
                <li>• had been + V3 (Perfect)</li>
              </ul>
            </div>

            <div className="bg-sky-50 rounded-lg p-4 border-2 border-sky-300">
              <h4 className="font-bold text-sky-900 mb-2">Future</h4>
              <ul className="text-xs text-zinc-700 space-y-1">
                <li>• will be + V3 (Simple)</li>
                <li>• will have been + V3 (Perf.)</li>
                <li>• modal + be + V3 (Modal)</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300 mt-4">
            <h4 className="font-bold text-blue-900 mb-2">BY vs WITH:</h4>
            <p className="text-xs text-zinc-700">
              <strong>BY</strong> — кто выполнил | <strong>WITH</strong> — чем
              выполнил
            </p>
          </div>
        </Section>
      </>
    );
  }

  return null;
}

