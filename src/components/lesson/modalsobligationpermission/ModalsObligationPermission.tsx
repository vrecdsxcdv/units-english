"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ModalsObligationPermission({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📋 Modals of Obligation & Permission">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Обязанность, Необходимость и Разрешение
            </h2>
            <p className="text-zinc-700 mb-3">
              Модальные глаголы помогают выразить:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-700">
              <li>**Обязанность** (obligation): must, have to, need to</li>
              <li>**Запрет** (prohibition): mustn't, can't</li>
              <li>
                **Отсутствие необходимости**: don't have to, don't need to,
                needn't
              </li>
              <li>**Разрешение** (permission): can, may, be allowed to</li>
            </ul>
          </div>
        </Section>

        <Section title="🗺️ Карта модальных глаголов">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-lg p-5 border-2 border-red-300">
              <h3 className="font-bold text-red-900 mb-3 text-lg">
                ⛔ Обязанность (MUST)
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <p>
                  <strong>must</strong> — сильная обязанность (я так считаю)
                </p>
                <p>
                  <strong>have to</strong> — внешняя обязанность (правило,
                  закон)
                </p>
                <p>
                  <strong>need to</strong> — необходимость
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-300">
              <h3 className="font-bold text-orange-900 mb-3 text-lg">
                🚫 Запрет (MUSTN'T)
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <p>
                  <strong>mustn't</strong> — запрет! (нельзя!)
                </p>
                <p>
                  <strong>can't</strong> — нельзя (менее формально)
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border-2 border-green-300">
              <h3 className="font-bold text-green-900 mb-3 text-lg">
                ✅ Нет необходимости
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <p>
                  <strong>don't have to</strong> — не обязательно
                </p>
                <p>
                  <strong>don't need to</strong> — не нужно
                </p>
                <p>
                  <strong>needn't</strong> — не нужно (британский)
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-300">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">
                ✔️ Разрешение
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <p>
                  <strong>can</strong> — можно (неформально)
                </p>
                <p>
                  <strong>may</strong> — можно (формально)
                </p>
                <p>
                  <strong>be allowed to</strong> — разрешено
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <Section title="⛔ MUST vs HAVE TO — Обязанность">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-xl font-bold text-red-900 mb-4">
              MUST и HAVE TO — В чём разница?
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-bold text-red-900 mb-2">
                  MUST — Личное мнение (я так считаю)
                </h4>
                <p className="text-sm text-zinc-700 mb-2">
                  Когда **я** считаю, что это важно. Субъективная обязанность.
                </p>
                <div className="bg-red-50 rounded p-3 mt-2">
                  <p className="text-sm mb-1">
                    You <strong>must</strong> see this film!
                  </p>
                  <p className="text-xs text-zinc-600">
                    Ты должен посмотреть этот фильм! (я так думаю, мой совет)
                  </p>
                </div>
                <div className="bg-red-50 rounded p-3 mt-2">
                  <p className="text-sm mb-1">
                    I <strong>must</strong> study harder.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я должен учиться усерднее. (я сам так решил)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <h4 className="font-bold text-orange-900 mb-2">
                  HAVE TO — Внешние правила (закон, правило)
                </h4>
                <p className="text-sm text-zinc-700 mb-2">
                  Когда есть **внешнее правило** или закон. Объективная
                  обязанность.
                </p>
                <div className="bg-orange-50 rounded p-3 mt-2">
                  <p className="text-sm mb-1">
                    You <strong>have to</strong> wear a seatbelt.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Ты должен пристегиваться. (закон требует)
                  </p>
                </div>
                <div className="bg-orange-50 rounded p-3 mt-2">
                  <p className="text-sm mb-1">
                    I <strong>have to</strong> go to work.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я должен идти на работу. (внешняя обязанность)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
              <p className="font-bold text-amber-900 mb-2">💡 Важно:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • <strong>Must</strong> — только в настоящем времени
                </li>
                <li>
                  • <strong>Have to</strong> — во всех временах (have to, had
                  to, will have to)
                </li>
                <li>• В прошлом: только had to (must нет!)</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <p className="text-sm mb-2">
                🏥 You <strong className="text-red-700">must</strong> see a
                doctor.
              </p>
              <p className="text-xs text-zinc-600">
                Тебе нужно к врачу. (я советую)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <p className="text-sm mb-2">
                🚗 You <strong className="text-orange-700">have to</strong> stop
                at red lights.
              </p>
              <p className="text-xs text-zinc-600">
                Нужно останавливаться на красный. (правило)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <p className="text-sm mb-2">
                📚 I <strong className="text-red-700">must</strong> finish this
                book.
              </p>
              <p className="text-xs text-zinc-600">
                Я должен закончить книгу. (я хочу)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <p className="text-sm mb-2">
                🎓 Students <strong className="text-orange-700">have to</strong>{" "}
                wear uniforms.
              </p>
              <p className="text-xs text-zinc-600">
                Студенты должны носить форму. (правило школы)
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
        <Section title="🚫 MUSTN'T — Запрет">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-6 border-2 border-red-400 mb-4">
            <h3 className="text-xl font-bold text-red-900 mb-4">
              MUSTN'T — Строгий запрет!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              <strong>Mustn't</strong> = **НЕЛЬЗЯ!** Это запрет, а не отсутствие
              необходимости!
            </p>

            <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
              <p className="font-bold text-red-900 mb-2">
                ⚠️ ВАЖНО! Не путайте:
              </p>
              <div className="space-y-3">
                <div className="bg-red-100 rounded p-3">
                  <p className="text-sm font-semibold text-red-900 mb-1">
                    MUSTN'T = НЕЛЬЗЯ (запрет)
                  </p>
                  <p className="text-sm">
                    You <strong>mustn't</strong> smoke here.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Нельзя здесь курить! (запрещено)
                  </p>
                </div>

                <div className="bg-green-100 rounded p-3">
                  <p className="text-sm font-semibold text-green-900 mb-1">
                    DON'T HAVE TO = НЕ ОБЯЗАТЕЛЬНО (выбор)
                  </p>
                  <p className="text-sm">
                    You <strong>don't have to</strong> come.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Тебе не обязательно приходить. (твой выбор)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-red-300">
              <p className="text-sm mb-2">
                🚭 You <strong className="text-red-700">mustn't</strong> smoke
                in the hospital.
              </p>
              <p className="text-xs text-zinc-600">Нельзя курить в больнице!</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-red-300">
              <p className="text-sm mb-2">
                📱 You <strong className="text-red-700">mustn't</strong> use
                your phone during the exam.
              </p>
              <p className="text-xs text-zinc-600">
                Нельзя пользоваться телефоном во время экзамена!
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-red-300">
              <p className="text-sm mb-2">
                🚗 You <strong className="text-red-700">mustn't</strong> park
                here.
              </p>
              <p className="text-xs text-zinc-600">Здесь нельзя парковаться!</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-red-300">
              <p className="text-sm mb-2">
                🔐 You <strong className="text-red-700">mustn't</strong> tell
                anyone my password.
              </p>
              <p className="text-xs text-zinc-600">
                Нельзя никому говорить мой пароль!
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-red-300">
              <p className="text-sm mb-2">
                🐕 Dogs <strong className="text-red-700">mustn't</strong> enter
                the restaurant.
              </p>
              <p className="text-xs text-zinc-600">
                Собакам нельзя входить в ресторан!
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-red-300">
              <p className="text-sm mb-2">
                🎭 You <strong className="text-red-700">mustn't</strong> be late
                for the meeting.
              </p>
              <p className="text-xs text-zinc-600">
                Нельзя опаздывать на встречу!
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300 mt-4">
            <p className="font-bold text-blue-900 mb-2">📝 Синонимы mustn't:</p>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • <strong>can't</strong> — нельзя (менее формально)
              </li>
              <li>
                • <strong>be not allowed to</strong> — не разрешено
              </li>
              <li>
                • <strong>be forbidden to</strong> — запрещено (очень формально)
              </li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <Section title="✅ DON'T HAVE TO / NEEDN'T — Нет необходимости">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              Отсутствие необходимости
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда что-то **не обязательно** делать, но **можно**, если хочешь.
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2">
                  DON'T HAVE TO — не обязательно
                </h4>
                <p className="text-sm mb-2">
                  You <strong>don't have to</strong> come to the party.
                </p>
                <p className="text-xs text-zinc-600">
                  Тебе не обязательно приходить на вечеринку. (но можешь, если
                  хочешь)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-400">
                <h4 className="font-semibold text-emerald-900 mb-2">
                  DON'T NEED TO — не нужно
                </h4>
                <p className="text-sm mb-2">
                  You <strong>don't need to</strong> bring food.
                </p>
                <p className="text-xs text-zinc-600">
                  Тебе не нужно приносить еду. (уже есть)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-teal-400">
                <h4 className="font-semibold text-teal-900 mb-2">
                  NEEDN'T — не нужно (британский английский)
                </h4>
                <p className="text-sm mb-2">
                  You <strong>needn't</strong> worry.
                </p>
                <p className="text-xs text-zinc-600">
                  Тебе не нужно волноваться. (более формально)
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
              <p className="font-bold text-amber-900 mb-2">💡 Важно:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • Все три формы означают **одно и то же**: нет необходимости
                </li>
                <li>
                  • <strong>don't have to</strong> — самый распространённый
                </li>
                <li>
                  • <strong>needn't</strong> — британский, формальный
                </li>
                <li>
                  • ⚠️ НЕ путать с <strong>mustn't</strong> (запрет!)
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-2">
                ⏰ You <strong className="text-green-700">don't have to</strong>{" "}
                get up early tomorrow.
              </p>
              <p className="text-xs text-zinc-600">
                Не обязательно рано вставать завтра.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-2">
                👔 We <strong className="text-green-700">don't need to</strong>{" "}
                wear suits.
              </p>
              <p className="text-xs text-zinc-600">
                Нам не нужно надевать костюмы.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-2">
                📞 You <strong className="text-green-700">needn't</strong> call
                me.
              </p>
              <p className="text-xs text-zinc-600">
                Тебе не нужно звонить мне.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-2">
                🎫 Children{" "}
                <strong className="text-green-700">don't have to</strong> pay.
              </p>
              <p className="text-xs text-zinc-600">Детям не нужно платить.</p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 5) {
    return (
      <>
        <Section title="📝 NEED TO / DON'T NEED TO">
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">
              NEED TO — Необходимость
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-400">
                <h4 className="font-semibold text-indigo-900 mb-2">
                  NEED TO — нужно (утвердительная форма)
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Похоже на <strong>have to</strong>, но подчёркивает
                  **нужность**, а не обязанность.
                </p>
                <div className="bg-indigo-50 rounded p-3 mt-2">
                  <p className="text-sm mb-1">
                    I <strong>need to</strong> buy milk.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Мне нужно купить молоко. (необходимость)
                  </p>
                </div>
                <div className="bg-indigo-50 rounded p-3 mt-2">
                  <p className="text-sm mb-1">
                    You <strong>need to</strong> see a dentist.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Тебе нужно к стоматологу.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-900 mb-2">
                  DON'T NEED TO — не нужно
                </h4>
                <p className="text-sm mb-2">
                  We <strong>don't need to</strong> hurry.
                </p>
                <p className="text-xs text-zinc-600">
                  Нам не нужно спешить. (есть время)
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
              <p className="font-bold text-amber-900 mb-2">
                💡 NEED TO vs HAVE TO:
              </p>
              <div className="space-y-2 text-sm text-zinc-700">
                <p>
                  • <strong>need to</strong> — акцент на необходимости (я
                  нуждаюсь)
                </p>
                <p>
                  • <strong>have to</strong> — акцент на обязанности (я должен)
                </p>
                <p>• Часто взаимозаменяемы!</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
              <p className="text-sm mb-2">
                🔋 I <strong className="text-indigo-700">need to</strong> charge
                my phone.
              </p>
              <p className="text-xs text-zinc-600">
                Мне нужно зарядить телефон.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
              <p className="text-sm mb-2">
                💊 She <strong className="text-indigo-700">needs to</strong>{" "}
                take medicine.
              </p>
              <p className="text-xs text-zinc-600">
                Ей нужно принять лекарство.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <p className="text-sm mb-2">
                🛒 We <strong className="text-purple-700">don't need to</strong>{" "}
                buy bread.
              </p>
              <p className="text-xs text-zinc-600">
                Нам не нужно покупать хлеб.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <p className="text-sm mb-2">
                ⏰ You{" "}
                <strong className="text-purple-700">don't need to</strong> rush.
              </p>
              <p className="text-xs text-zinc-600">Тебе не нужно торопиться.</p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 6) {
    return (
      <>
        <Section title="✔️ BE ALLOWED TO — Разрешение">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              BE ALLOWED TO — Разрешено
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              <strong>Be allowed to</strong> = **разрешено**, **можно** (кто-то
              разрешил)
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Утвердительная форма
                </h4>
                <div className="space-y-2">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm mb-1">
                      We <strong>are allowed to</strong> park here.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Нам разрешено здесь парковаться.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm mb-1">
                      Students <strong>are allowed to</strong> use the library.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Студентам разрешено пользоваться библиотекой.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2">
                  Отрицательная форма
                </h4>
                <div className="space-y-2">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      You <strong>are not allowed to</strong> smoke here.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Вам не разрешено курить здесь. (= mustn't)
                    </p>
                  </div>
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      We <strong>aren't allowed to</strong> use phones.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Нам не разрешено пользоваться телефонами.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
              <p className="font-bold text-amber-900 mb-2">💡 Важно:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • <strong>be allowed to</strong> работает во всех временах
                </li>
                <li>
                  • Past: <strong>was/were allowed to</strong>
                </li>
                <li>
                  • Future: <strong>will be allowed to</strong>
                </li>
                <li>• Более формально, чем can/may</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <p className="text-sm mb-2">
                📷 You <strong className="text-blue-700">are allowed to</strong>{" "}
                take photos.
              </p>
              <p className="text-xs text-zinc-600">
                Вам разрешено фотографировать.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <p className="text-sm mb-2">
                🏊 Children{" "}
                <strong className="text-blue-700">are allowed to</strong> swim
                here.
              </p>
              <p className="text-xs text-zinc-600">
                Детям разрешено купаться здесь.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <p className="text-sm mb-2">
                🚭 You{" "}
                <strong className="text-red-700">aren't allowed to</strong>{" "}
                smoke.
              </p>
              <p className="text-xs text-zinc-600">Вам не разрешено курить.</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <p className="text-sm mb-2">
                📱 We{" "}
                <strong className="text-red-700">aren't allowed to</strong> use
                phones in class.
              </p>
              <p className="text-xs text-zinc-600">
                Нам не разрешено пользоваться телефонами на уроке.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 7) {
    const items: FillItem[] = [
      {
        left: "1. You",
        answers: ["must", "have to", "need to"],
        right: "wear a helmet when you ride a bike.",
        explanation: "Обязанность для безопасности",
      },
      {
        left: "2. You",
        answers: ["mustn't", "can't"],
        right: "park here. It's forbidden.",
        explanation: "Запрет",
      },
      {
        left: "3. You",
        answers: ["don't have to", "don't need to", "needn't"],
        right: "come if you're busy.",
        explanation: "Нет необходимости, это твой выбор",
      },
      {
        left: "4. Students",
        answers: ["are allowed to"],
        right: "use the gym after classes.",
        explanation: "Разрешение",
      },
      {
        left: "5. I",
        answers: ["have to", "need to"],
        right: "finish this report by Friday.",
        explanation: "Обязанность или необходимость",
      },
      {
        left: "6. You",
        answers: ["mustn't"],
        right: "tell anyone about this. It's a secret!",
        explanation: "Строгий запрет",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Базовое различение">
          <div className="bg-indigo-50 rounded-lg p-4 border-2 border-indigo-200 mb-4">
            <p className="text-sm font-semibold text-indigo-900 mb-2">
              📝 Задание:
            </p>
            <p className="text-sm text-zinc-700">
              Выбери правильный модальный глагол. Подумай: это обязанность,
              запрет, отсутствие необходимости или разрешение?
            </p>
          </div>

          <CheckableExercise
            title="Определи тип"
            instruction="Вставь подходящий модальный глагол."
            items={items}
            wideInputs
          />

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
            <p className="font-bold text-amber-900 mb-2">💡 Подсказка:</p>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • Обязанность → <strong>must / have to / need to</strong>
              </li>
              <li>
                • Запрет → <strong>mustn't / can't</strong>
              </li>
              <li>
                • Нет необходимости →{" "}
                <strong>don't have to / don't need to / needn't</strong>
              </li>
              <li>
                • Разрешение → <strong>be allowed to / can / may</strong>
              </li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  if (step === 8) {
    return (
      <>
        <Section title="⏰ Прошедшее время">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-xl font-bold text-purple-900 mb-4">
              Модальные глаголы в прошлом
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2">
                  HAD TO — была обязанность
                </h4>
                <p className="text-sm text-zinc-700 mb-2">
                  ⚠️ <strong>Must</strong> не имеет прошедшей формы! Используем{" "}
                  <strong>had to</strong>.
                </p>
                <div className="bg-red-50 rounded p-3 mt-2">
                  <p className="text-sm mb-1">
                    I <strong>had to</strong> work late yesterday.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Мне пришлось работать допоздна вчера.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2">
                  DIDN'T HAVE TO — не было необходимости
                </h4>
                <div className="bg-green-50 rounded p-3 mt-2">
                  <p className="text-sm mb-1">
                    We <strong>didn't have to</strong> pay.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Нам не нужно было платить.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2">
                  WAS/WERE ALLOWED TO — было разрешено
                </h4>
                <div className="bg-blue-50 rounded p-3 mt-2">
                  <p className="text-sm mb-1">
                    We <strong>were allowed to</strong> leave early.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Нам разрешили уйти рано.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-rose-400">
                <h4 className="font-semibold text-rose-900 mb-2">
                  WASN'T/WEREN'T ALLOWED TO — не было разрешено
                </h4>
                <div className="bg-rose-50 rounded p-3 mt-2">
                  <p className="text-sm mb-1">
                    I <strong>wasn't allowed to</strong> go out.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Мне не разрешили выйти.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <p className="text-sm mb-2">
                📝 I <strong className="text-red-700">had to</strong> take an
                exam.
              </p>
              <p className="text-xs text-zinc-600">
                Мне пришлось сдавать экзамен.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-2">
                🎫 We <strong className="text-green-700">didn't have to</strong>{" "}
                buy tickets.
              </p>
              <p className="text-xs text-zinc-600">
                Нам не нужно было покупать билеты.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <p className="text-sm mb-2">
                📷 We <strong className="text-blue-700">were allowed to</strong>{" "}
                take photos.
              </p>
              <p className="text-xs text-zinc-600">
                Нам разрешили фотографировать.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-2">
                🚭 They{" "}
                <strong className="text-rose-700">weren't allowed to</strong>{" "}
                smoke.
              </p>
              <p className="text-xs text-zinc-600">Им не разрешили курить.</p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 9) {
    return (
      <>
        <Section title="🆚 MUSTN'T vs DON'T HAVE TO">
          <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-6 border-2 border-zinc-300 mb-4">
            <h3 className="text-xl font-bold text-zinc-900 mb-4 text-center">
              Критическая разница!
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-100 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3 text-lg">
                  MUSTN'T = ЗАПРЕТ 🚫
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  **Нельзя!** Это запрещено!
                </p>
                <div className="bg-white rounded p-3 mb-2">
                  <p className="text-sm">
                    You <strong>mustn't</strong> smoke here.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Нельзя курить здесь! ❌
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    You <strong>mustn't</strong> tell lies.
                  </p>
                  <p className="text-xs text-zinc-600">Нельзя лгать! ❌</p>
                </div>
              </div>

              <div className="bg-green-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="font-bold text-green-900 mb-3 text-lg">
                  DON'T HAVE TO = НЕ ОБЯЗАТЕЛЬНО ✅
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  **Не обязательно**, но можно, если хочешь!
                </p>
                <div className="bg-white rounded p-3 mb-2">
                  <p className="text-sm">
                    You <strong>don't have to</strong> come.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Необязательно приходить. (но можешь) ✓
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    You <strong>don't have to</strong> cook.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Необязательно готовить. (но можешь) ✓
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-amber-300 mt-4">
              <p className="font-bold text-amber-900 mb-3 text-center">
                🎯 Сравнение в одной ситуации:
              </p>
              <div className="space-y-2">
                <div className="bg-red-50 rounded p-3 border-l-4 border-red-400">
                  <p className="text-sm">
                    You <strong>mustn't</strong> eat this. It's poisonous!
                  </p>
                  <p className="text-xs text-zinc-600">
                    Нельзя это есть! Это ядовито! (ЗАПРЕТ)
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3 border-l-4 border-green-400">
                  <p className="text-sm">
                    You <strong>don't have to</strong> eat this if you don't
                    like it.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Не обязательно это есть, если не нравится. (ВЫБОР)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-rose-50 rounded-lg p-5 border-2 border-rose-300">
            <p className="font-bold text-rose-900 mb-3 text-center text-lg">
              ⚠️ Это самая частая ошибка!
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="text-sm mb-2 font-semibold">
                  ❌ Неправильно: You mustn't come to the party.
                </p>
                <p className="text-xs text-zinc-600 mb-2">
                  (Это звучит как запрет: "Тебе нельзя приходить на вечеринку!")
                </p>
                <p className="text-sm font-semibold text-green-700">
                  ✅ Правильно: You don't have to come to the party.
                </p>
                <p className="text-xs text-zinc-600">
                  (Не обязательно приходить, но можешь, если хочешь)
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 10) {
    const items: FillItem[] = [
      {
        left: "1. I",
        answers: ["had to"],
        right: "wake up early yesterday.",
        explanation: "Прошлое: была обязанность",
      },
      {
        left: "2. You",
        answers: ["mustn't"],
        right: "use your phone during the test.",
        explanation: "Запрет: нельзя!",
      },
      {
        left: "3. She",
        answers: ["doesn't have to", "doesn't need to", "needn't"],
        right: "work on Sundays.",
        explanation: "Нет необходимости работать",
      },
      {
        left: "4. We",
        answers: ["are allowed to"],
        right: "bring our own food.",
        explanation: "Разрешено приносить",
      },
      {
        left: "5. Children",
        answers: ["weren't allowed to"],
        right: "watch that movie.",
        explanation: "Прошлое: не было разрешено",
      },
      {
        left: "6. You",
        answers: ["don't have to"],
        right: "wear a tie, but you can if you want.",
        explanation: "Не обязательно, но можно",
      },
      {
        left: "7. I",
        answers: ["need to", "have to"],
        right: "see a doctor about my back pain.",
        explanation: "Необходимость",
      },
      {
        left: "8. You",
        answers: ["mustn't"],
        right: "touch that! It's hot!",
        explanation: "Запрет для безопасности",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 2: Все формы вместе">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300 mb-4">
            <p className="font-bold text-indigo-900 mb-2">
              📋 Большой тест на все модальные
            </p>
            <p className="text-sm text-zinc-700">
              Различай обязанность, запрет, отсутствие необходимости и
              разрешение. Не забывай про прошедшее время!
            </p>
          </div>

          <CheckableExercise
            title="Все модальные вместе"
            instruction="Вставь правильный модальный глагол."
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
        <Section title="❓ Вопросительные формы">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-xl font-bold text-cyan-900 mb-4">
              Как задавать вопросы
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2">
                  DO I HAVE TO...? — Я должен?
                </h4>
                <div className="space-y-2">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      <strong>Do I have to</strong> come?
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я должен прийти? (это обязательно?)
                    </p>
                  </div>
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      <strong>Do we need to</strong> bring anything?
                    </p>
                    <p className="text-xs text-zinc-600">
                      Нам нужно что-то принести?
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2">
                  AM I ALLOWED TO...? — Мне можно?
                </h4>
                <div className="space-y-2">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm mb-1">
                      <strong>Am I allowed to</strong> park here?
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне можно здесь припарковаться?
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm mb-1">
                      <strong>Are we allowed to</strong> use our phones?
                    </p>
                    <p className="text-xs text-zinc-600">
                      Нам можно пользоваться телефонами?
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2">
                  CAN I...? / MAY I...? — Могу я? (неформально/формально)
                </h4>
                <div className="space-y-2">
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm mb-1">
                      <strong>Can I</strong> use your pen?
                    </p>
                    <p className="text-xs text-zinc-600">
                      Могу я воспользоваться твоей ручкой? (неформально)
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm mb-1">
                      <strong>May I</strong> ask a question?
                    </p>
                    <p className="text-xs text-zinc-600">
                      Могу я задать вопрос? (формально)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
              <p className="font-bold text-amber-900 mb-2">💡 Ответы:</p>
              <div className="space-y-2 text-sm text-zinc-700">
                <p>
                  • Yes, you <strong>have to</strong>. / No, you{" "}
                  <strong>don't have to</strong>.
                </p>
                <p>
                  • Yes, you <strong>are (allowed to)</strong>. / No, you{" "}
                  <strong>aren't (allowed to)</strong>.
                </p>
                <p>
                  • Yes, you <strong>can</strong>. / No, you{" "}
                  <strong>can't</strong>.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 12) {
    return (
      <>
        <Section title="⚠️ Типичные ошибки">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-xl font-bold text-red-900 mb-4">
              Распространённые ошибки
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 1: Путать mustn't и don't have to
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ You <strong>mustn't</strong> come if you're busy.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ You <strong>don't have to</strong> come if you're busy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 2: Использовать must в прошлом
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ I <strong>must</strong> work yesterday.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ I <strong>had to</strong> work yesterday.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 3: Забывать "to" после need/have/allowed
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ I need <strong>go</strong> home.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ I need <strong>to go</strong> home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 4: Двойное отрицание с needn't
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ You <strong>needn't not</strong> worry.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ You <strong>needn't</strong> worry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 5: Неправильная форма вопроса с have to
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ <strong>Have I to</strong> come?
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ <strong>Do I have to</strong> come?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 13) {
    return (
      <>
        <Section title="🎭 Реальные ситуации">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-xl font-bold text-indigo-900 mb-3">
              Как использовать в жизни
            </h3>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <h4 className="font-bold text-zinc-900 mb-3 text-lg">
                🏥 В больнице
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  • You <strong>must</strong> take this medicine three times a
                  day.
                </p>
                <p>
                  • You <strong>mustn't</strong> drink alcohol with this
                  medicine.
                </p>
                <p>
                  • You <strong>don't have to</strong> stay in bed, but you
                  should rest.
                </p>
                <p>
                  • You <strong>need to</strong> come back in a week for a
                  check-up.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <h4 className="font-bold text-zinc-900 mb-3 text-lg">
                🏫 В школе/университете
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  • Students <strong>have to</strong> wear uniforms.
                </p>
                <p>
                  • You <strong>mustn't</strong> cheat on exams.
                </p>
                <p>
                  • You <strong>don't need to</strong> bring your own books.
                </p>
                <p>
                  • Students <strong>are allowed to</strong> use the library
                  after classes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <h4 className="font-bold text-zinc-900 mb-3 text-lg">
                ✈️ В аэропорту
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  • Passengers <strong>have to</strong> show their passports.
                </p>
                <p>
                  • You <strong>mustn't</strong> carry liquids over 100ml.
                </p>
                <p>
                  • You <strong>don't have to</strong> print your boarding pass.
                </p>
                <p>
                  • You <strong>are allowed to</strong> bring one carry-on bag.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <h4 className="font-bold text-zinc-900 mb-3 text-lg">
                💼 На работе
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  • Employees <strong>have to</strong> arrive on time.
                </p>
                <p>
                  • You <strong>mustn't</strong> share confidential information.
                </p>
                <p>
                  • You <strong>don't have to</strong> work on weekends.
                </p>
                <p>
                  • Staff <strong>are allowed to</strong> take a 30-minute lunch
                  break.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 14) {
    const items: FillItem[] = [
      {
        left: "1. Visitors",
        answers: ["have to", "must", "need to"],
        right: "show ID at the entrance.",
        explanation: "Обязанность по правилам",
      },
      {
        left: "2. You",
        answers: ["mustn't"],
        right: "take photos in the museum.",
        explanation: "Запрет",
      },
      {
        left: "3. I",
        answers: ["had to"],
        right: "wait two hours for the doctor yesterday.",
        explanation: "Прошлое: была необходимость",
      },
      {
        left: "4. Children",
        answers: ["don't have to", "don't need to", "needn't"],
        right: "pay for the tickets.",
        explanation: "Нет необходимости платить",
      },
      {
        left: "5. We",
        answers: ["are allowed to"],
        right: "use the pool from 9 AM to 9 PM.",
        explanation: "Разрешение",
      },
      {
        left: "6. You",
        answers: ["mustn't"],
        right: "be late for the interview!",
        explanation: "Сильный запрет/настоятельный совет",
      },
      {
        left: "7. Do I",
        answers: ["have to", "need to"],
        right: "bring my laptop to the meeting?",
        explanation: "Вопрос об обязанности",
      },
      {
        left: "8. She",
        answers: ["wasn't allowed to"],
        right: "enter the building without a pass.",
        explanation: "Прошлое: не было разрешения",
      },
      {
        left: "9. You",
        answers: ["don't have to"],
        right: "dress formally, but you can if you want.",
        explanation: "Нет обязанности, но есть выбор",
      },
      {
        left: "10. Students",
        answers: ["must", "have to", "need to"],
        right: "complete all assignments on time.",
        explanation: "Обязанность",
      },
      {
        left: "11. You",
        answers: ["mustn't"],
        right: "forget to lock the door!",
        explanation: "Важное предупреждение",
      },
      {
        left: "12. We",
        answers: ["didn't have to", "didn't need to"],
        right: "book in advance. There were plenty of seats.",
        explanation: "Прошлое: не было необходимости",
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
              Это последнее упражнение! Здесь смешаны **все модальные глаголы
              обязанности и разрешения**.
            </p>
            <p className="text-sm font-semibold text-yellow-900">
              Цель: 10/12 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (12 вопросов)"
            instruction="Вставь правильный модальный глагол."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы освоили модальные глаголы обязанности и разрешения! Теперь вы
              можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>✅ Выражать обязанность: must, have to, need to</li>
              <li>✅ Выражать запрет: mustn't</li>
              <li>
                ✅ Выражать отсутствие необходимости: don't have to, don't need
                to, needn't
              </li>
              <li>✅ Выражать разрешение: be allowed to, can, may</li>
              <li>✅ Различать mustn't и don't have to</li>
              <li>
                ✅ Использовать модальные в прошлом: had to, was allowed to
              </li>
              <li>✅ Задавать вопросы: Do I have to...? Am I allowed to...?</li>
              <li>✅ Применять в реальных ситуациях</li>
            </ul>
          </div>
        </Section>

        <Section title="📚 Краткая памятка">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
              <h4 className="font-bold text-red-900 mb-2">Обязанность</h4>
              <p className="text-xs text-zinc-700">must / have to / need to</p>
              <p className="text-xs text-zinc-600 mt-1">Я должен, мне нужно</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
              <h4 className="font-bold text-orange-900 mb-2">Запрет</h4>
              <p className="text-xs text-zinc-700">mustn't / can't</p>
              <p className="text-xs text-zinc-600 mt-1">Нельзя!</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
              <h4 className="font-bold text-green-900 mb-2">
                Нет необходимости
              </h4>
              <p className="text-xs text-zinc-700">
                don't have to / don't need to / needn't
              </p>
              <p className="text-xs text-zinc-600 mt-1">Не обязательно</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
              <h4 className="font-bold text-blue-900 mb-2">Разрешение</h4>
              <p className="text-xs text-zinc-700">be allowed to / can / may</p>
              <p className="text-xs text-zinc-600 mt-1">Можно, разрешено</p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300 mt-4">
            <h4 className="font-bold text-purple-900 mb-2">Прошедшее время:</h4>
            <ul className="text-xs text-zinc-700 space-y-1">
              <li>• had to (была обязанность)</li>
              <li>• didn't have to (не было необходимости)</li>
              <li>• was/were allowed to (было разрешено)</li>
              <li>• wasn't/weren't allowed to (не было разрешено)</li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  return null;
}

