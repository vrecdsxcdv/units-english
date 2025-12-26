"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Causative({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="🔧 Causative Structures — Каузативные конструкции">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Что такое Causative?
            </h2>
            <p className="text-sm text-zinc-700 mb-3">
              **Causative** (каузативные конструкции) используются, когда мы
              **НЕ САМИ** делаем что-то, а **заставляем/просим/нанимаем**
              кого-то сделать это за нас.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2">
                  ❌ Обычное действие
                </h4>
                <p className="text-sm mb-2">
                  I <strong>cut</strong> my hair.
                </p>
                <p className="text-xs text-zinc-600">
                  Я постригся (сам себя порезал).
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2">
                  ✅ Causative
                </h4>
                <p className="text-sm mb-2">
                  I <strong>had my hair cut</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Мне постригли волосы (в салоне).
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
              <p className="font-bold text-amber-900 mb-2">
                💡 Основные структуры:
              </p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • <strong>have sth done</strong> — кто-то сделал для нас
                  (услуга)
                </li>
                <li>
                  • <strong>get sth done</strong> — то же, но менее формально
                </li>
                <li>
                  • <strong>get sb to do</strong> — убедить кого-то сделать
                </li>
                <li>
                  • <strong>have sb do</strong> — заставить кого-то сделать
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
              <p className="text-sm mb-2">
                🚗 I <strong>had my car repaired</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Мне отремонтировали машину (в сервисе).
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
              <p className="text-sm mb-2">
                💇 She <strong>gets her nails done</strong> every week.
              </p>
              <p className="text-xs text-zinc-600">
                Ей делают маникюр каждую неделю.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
              <p className="text-sm mb-2">
                🏠 We <strong>had the house painted</strong> last month.
              </p>
              <p className="text-xs text-zinc-600">
                Нам покрасили дом в прошлом месяце.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
              <p className="text-sm mb-2">
                📱 I need to <strong>get my phone fixed</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Мне нужно починить телефон.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <Section title="🔨 HAVE STH DONE — Формула">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">
              HAVE + OBJECT + V3 (Past Participle)
            </h3>

            <div className="bg-white rounded-lg p-5 border-2 border-indigo-200 mb-4">
              <h4 className="font-semibold text-indigo-900 mb-3">
                Как работает формула:
              </h4>
              <div className="space-y-3">
                <div className="bg-indigo-50 rounded p-3">
                  <p className="text-sm font-semibold text-indigo-900 mb-1">
                    I <span className="text-red-700">have</span>{" "}
                    <span className="text-blue-700">my car</span>{" "}
                    <span className="text-green-700">repaired</span>.
                  </p>
                  <div className="text-xs text-zinc-600 mt-2 space-y-1">
                    <p>
                      • <span className="text-red-700">have</span> — меняется по
                      временам
                    </p>
                    <p>
                      • <span className="text-blue-700">my car</span> — объект
                      (что делают)
                    </p>
                    <p>
                      • <span className="text-green-700">repaired</span> — V3
                      (действие)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400 mb-3">
              <h4 className="font-semibold text-blue-900 mb-2">
                Present Simple
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  I <strong>have</strong> my car <strong>washed</strong> weekly.
                </p>
                <p className="text-xs text-zinc-600">
                  Мне моют машину еженедельно.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400 mb-3">
              <h4 className="font-semibold text-orange-900 mb-2">
                Past Simple
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  I <strong>had</strong> my car <strong>washed</strong>{" "}
                  yesterday.
                </p>
                <p className="text-xs text-zinc-600">
                  Мне помыли машину вчера.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-green-400 mb-3">
              <h4 className="font-semibold text-green-900 mb-2">Future</h4>
              <div className="space-y-2 text-sm">
                <p>
                  I <strong>will have</strong> my car <strong>washed</strong>{" "}
                  tomorrow.
                </p>
                <p className="text-xs text-zinc-600">
                  Мне помоют машину завтра.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-900 mb-2">
                Present Perfect
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  I <strong>have had</strong> my car <strong>washed</strong>.
                </p>
                <p className="text-xs text-zinc-600">Мне помыли машину.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
            <p className="font-bold text-amber-900 mb-2">💡 Важно:</p>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • <strong>have</strong> меняется по временам (have/had/will
                have)
              </li>
              <li>
                • <strong>V3</strong> (третья форма) всегда остаётся неизменной
              </li>
              <li>• Используется для **профессиональных услуг**</li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <Section title="💈 Услуги и сервисы">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-xl font-bold text-cyan-900 mb-4">
              Где используем HAVE STH DONE
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эта конструкция **очень часто** используется для разговоров о
              **услугах** и **сервисах**.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
              <h4 className="font-semibold text-cyan-900 mb-2">
                💇 Салон красоты
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  I <strong>had my hair cut</strong>.
                </p>
                <p className="text-xs text-zinc-600">Я подстриглась.</p>
                <p className="mt-2">
                  She <strong>has her nails done</strong> regularly.
                </p>
                <p className="text-xs text-zinc-600">
                  Она регулярно делает маникюр.
                </p>
                <p className="mt-2">
                  He <strong>got his beard trimmed</strong>.
                </p>
                <p className="text-xs text-zinc-600">Он подровнял бороду.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
              <h4 className="font-semibold text-cyan-900 mb-2">
                🚗 Автосервис
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  I <strong>had my car serviced</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Мне обслужили машину (ТО).
                </p>
                <p className="mt-2">
                  We <strong>had the tyres changed</strong>.
                </p>
                <p className="text-xs text-zinc-600">Нам поменяли шины.</p>
                <p className="mt-2">
                  He <strong>had his car repaired</strong>.
                </p>
                <p className="text-xs text-zinc-600">Ему починили машину.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
              <h4 className="font-semibold text-cyan-900 mb-2">🏠 Дом</h4>
              <div className="space-y-2 text-sm">
                <p>
                  We <strong>had the house painted</strong>.
                </p>
                <p className="text-xs text-zinc-600">Нам покрасили дом.</p>
                <p className="mt-2">
                  They <strong>had the roof fixed</strong>.
                </p>
                <p className="text-xs text-zinc-600">Им починили крышу.</p>
                <p className="mt-2">
                  I <strong>had new windows installed</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Мне установили новые окна.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
              <h4 className="font-semibold text-cyan-900 mb-2">
                📱 Технологии
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  I <strong>had my phone fixed</strong>.
                </p>
                <p className="text-xs text-zinc-600">Мне починили телефон.</p>
                <p className="mt-2">
                  She <strong>had her laptop upgraded</strong>.
                </p>
                <p className="text-xs text-zinc-600">Ей улучшили ноутбук.</p>
                <p className="mt-2">
                  He <strong>had the software installed</strong>.
                </p>
                <p className="text-xs text-zinc-600">Ему установили софт.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
              <h4 className="font-semibold text-cyan-900 mb-2">👔 Одежда</h4>
              <div className="space-y-2 text-sm">
                <p>
                  I <strong>had my suit dry-cleaned</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Я отдал костюм в химчистку.
                </p>
                <p className="mt-2">
                  She <strong>had her dress altered</strong>.
                </p>
                <p className="text-xs text-zinc-600">Ей ушили платье.</p>
                <p className="mt-2">
                  He <strong>had his trousers shortened</strong>.
                </p>
                <p className="text-xs text-zinc-600">Ему укоротили брюки.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
              <h4 className="font-semibold text-cyan-900 mb-2">🏥 Медицина</h4>
              <div className="space-y-2 text-sm">
                <p>
                  I <strong>had my eyes tested</strong>.
                </p>
                <p className="text-xs text-zinc-600">Я проверил зрение.</p>
                <p className="mt-2">
                  She <strong>had her teeth cleaned</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Ей почистили зубы (у дантиста).
                </p>
                <p className="mt-2">
                  He <strong>had his blood pressure checked</strong>.
                </p>
                <p className="text-xs text-zinc-600">Ему измерили давление.</p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <Section title="🆚 GET STH DONE">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              GET + OBJECT + V3
            </h3>

            <div className="bg-white rounded-lg p-4 border-l-4 border-green-400 mb-3">
              <h4 className="font-semibold text-green-900 mb-2">
                GET = HAVE (но менее формально)
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                <strong>Get sth done</strong> означает **то же самое**, что и
                have sth done, но звучит **менее формально** и более
                **разговорно**.
              </p>
              <div className="space-y-2">
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm mb-1">
                    I <strong>got my hair cut</strong>. (разговорно)
                  </p>
                  <p className="text-xs text-zinc-600">Я подстриглась.</p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm mb-1">
                    I <strong>had my hair cut</strong>. (формально)
                  </p>
                  <p className="text-xs text-zinc-600">Я подстриглась.</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mb-4">
              <p className="font-bold text-amber-900 mb-2">💡 Важно:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • <strong>GET</strong> более популярен в разговорной речи
                </li>
                <li>
                  • <strong>HAVE</strong> чаще в формальных текстах
                </li>
                <li>• Значение одинаковое!</li>
                <li>
                  • GET также может означать "**успеть сделать**" (с акцентом на
                  результат)
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-1">
                🚗 I need to <strong>get my car fixed</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Мне нужно починить машину.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-1">
                📱 She <strong>got her phone repaired</strong> yesterday.
              </p>
              <p className="text-xs text-zinc-600">
                Ей починили телефон вчера.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-1">
                🏠 We're <strong>getting the house renovated</strong>.
              </p>
              <p className="text-xs text-zinc-600">Нам ремонтируют дом.</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-1">
                💇 He <strong>gets his hair dyed</strong> every month.
              </p>
              <p className="text-xs text-zinc-600">
                Он красит волосы каждый месяц.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-1">
                👔 I must <strong>get my suit cleaned</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Я должен почистить костюм.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <p className="text-sm mb-1">
                🦷 She <strong>got her teeth whitened</strong>.
              </p>
              <p className="text-xs text-zinc-600">Ей отбелили зубы.</p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 5) {
    const items: FillItem[] = [
      {
        left: "1. I",
        answers: ["had my car washed", "got my car washed"],
        right: "last week.",
        explanation: "Мне помыли машину (услуга) — have/get sth done",
      },
      {
        left: "2. She",
        answers: ["had her hair cut", "got her hair cut"],
        right: "yesterday.",
        explanation: "Ей подстригли волосы (в салоне)",
      },
      {
        left: "3. We need to",
        answers: ["have the roof repaired", "get the roof repaired"],
        right: "soon.",
        explanation: "Нужно починить крышу (нанять кого-то)",
      },
      {
        left: "4. He",
        answers: ["had his suit dry-cleaned", "got his suit dry-cleaned"],
        right: "for the wedding.",
        explanation: "Он отдал костюм в химчистку",
      },
      {
        left: "5. They",
        answers: [
          "are having the house painted",
          "are getting the house painted",
        ],
        right: "this month.",
        explanation: "Им красят дом (процесс идёт)",
      },
      {
        left: "6. I",
        answers: ["had my eyes tested", "got my eyes tested"],
        right: "at the optician's.",
        explanation: "Я проверил зрение (у специалиста)",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Have/Get sth done">
          <div className="bg-indigo-50 rounded-lg p-4 border-2 border-indigo-200 mb-4">
            <p className="text-sm font-semibold text-indigo-900 mb-2">
              📝 Задание:
            </p>
            <p className="text-sm text-zinc-700">
              Составь предложения, используя <strong>have sth done</strong> или{" "}
              <strong>get sth done</strong>. Оба варианта правильные!
            </p>
          </div>

          <CheckableExercise
            title="Have/Get + Object + V3"
            instruction="Вставь правильную конструкцию."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 6) {
    return (
      <>
        <Section title="👤 GET SB TO DO — Убедить кого-то">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-6 border-2 border-rose-300 mb-4">
            <h3 className="text-xl font-bold text-rose-900 mb-4">
              GET + SOMEBODY + TO DO
            </h3>

            <div className="bg-white rounded-lg p-4 border-l-4 border-rose-400 mb-3">
              <h4 className="font-semibold text-rose-900 mb-2">
                Убедить / Уговорить кого-то сделать
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                <strong>Get sb to do</strong> = **убедить**, **уговорить**,
                **заставить** кого-то сделать что-то. Человек делает САМ (не
                услуга).
              </p>
              <div className="space-y-2">
                <div className="bg-rose-50 rounded p-3">
                  <p className="text-sm mb-1">
                    I <strong>got my brother to help me</strong>.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я уговорил брата помочь мне. (брат сам помог)
                  </p>
                </div>
                <div className="bg-rose-50 rounded p-3">
                  <p className="text-sm mb-1">
                    She <strong>got her friend to lend her some money</strong>.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Она уговорила друга одолжить ей денег.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
              <p className="font-bold text-amber-900 mb-2">💡 Важно:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • <strong>GET SB TO DO</strong> — человек делает сам
                </li>
                <li>
                  • <strong>GET STH DONE</strong> — услуга (кто-то делает за
                  деньги)
                </li>
                <li>• После TO используем инфинитив (do, help, come)</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-1">
                👨‍👩‍👦 I <strong>got my kids to clean their room</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Я заставил детей убрать комнату.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-1">
                🚗 Can you <strong>get Tom to drive us</strong>?
              </p>
              <p className="text-xs text-zinc-600">
                Ты можешь попросить Тома отвезти нас?
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-1">
                📧 She <strong>got her assistant to send the email</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Она попросила ассистента отправить письмо.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-1">
                📚 I can't <strong>get him to study</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Я не могу заставить его учиться.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-1">
                💼 He <strong>got his colleague to cover for him</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Он попросил коллегу подменить его.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-1">
                🎉 We <strong>got everyone to come to the party</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Мы уговорили всех прийти на вечеринку.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 7) {
    return (
      <>
        <Section title="⚡ HAVE SB DO — Заставить кого-то">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border-2 border-orange-300 mb-4">
            <h3 className="text-xl font-bold text-orange-900 mb-4">
              HAVE + SOMEBODY + DO (без TO!)
            </h3>

            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400 mb-3">
              <h4 className="font-semibold text-orange-900 mb-2">
                Заставить / Попросить (более формально)
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                <strong>Have sb do</strong> = **попросить** кого-то сделать
                (обычно человек под вашим контролем: подчинённый, ребёнок).
              </p>
              <div className="space-y-2">
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-sm mb-1">
                    I'll <strong>have my assistant call you</strong>.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я попрошу ассистента позвонить вам.
                  </p>
                </div>
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-sm mb-1">
                    She <strong>had her son wash the car</strong>.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Она заставила сына помыть машину.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300 mb-3">
              <p className="font-bold text-red-900 mb-2">⚠️ Внимание:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-red-700 font-bold">❌</span>
                  <div>
                    <p className="text-sm">
                      I had him{" "}
                      <strong className="text-red-700">to help</strong> me.
                    </p>
                    <p className="text-xs text-zinc-600">
                      НЕПРАВИЛЬНО! После have sb НЕТ "to"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">✅</span>
                  <div>
                    <p className="text-sm">
                      I had him <strong className="text-green-700">help</strong>{" "}
                      me.
                    </p>
                    <p className="text-xs text-zinc-600">
                      ПРАВИЛЬНО! Инфинитив без "to"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
              <p className="font-bold text-amber-900 mb-2">💡 Сравнение:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • <strong>GET sb TO do</strong> — убедить (с "to")
                </li>
                <li>
                  • <strong>HAVE sb do</strong> — заставить/попросить (без "to")
                </li>
                <li>• HAVE более формально и авторитетно</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <p className="text-sm mb-1">
                💼 I'll <strong>have my secretary arrange it</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Я попрошу секретаря организовать это.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <p className="text-sm mb-1">
                👨‍💼 The boss <strong>had us work overtime</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Босс заставил нас работать сверхурочно.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <p className="text-sm mb-1">
                📞 I'll <strong>have someone call you back</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Я попрошу кого-нибудь перезвонить вам.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <p className="text-sm mb-1">
                🏠 She <strong>had the kids clean up</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Она заставила детей убраться.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 8) {
    return (
      <>
        <Section title="📊 Сравнение всех структур">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-xl font-bold text-purple-900 mb-4 text-center">
              4 основные Causative структуры
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-300">
              <h4 className="font-bold text-blue-900 mb-3">
                1️⃣ HAVE STH DONE (формально)
              </h4>
              <p className="text-sm text-zinc-700 mb-2">
                Формула: <strong>have + object + V3</strong>
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Профессиональная услуга (формально)
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  I <strong>had my car repaired</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Мне починили машину (в сервисе).
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border-2 border-green-300">
              <h4 className="font-bold text-green-900 mb-3">
                2️⃣ GET STH DONE (разговорно)
              </h4>
              <p className="text-sm text-zinc-700 mb-2">
                Формула: <strong>get + object + V3</strong>
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Услуга (менее формально)
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  I <strong>got my car repaired</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Я починил машину (= нанял мастера).
                </p>
              </div>
            </div>

            <div className="bg-rose-50 rounded-lg p-5 border-2 border-rose-300">
              <h4 className="font-bold text-rose-900 mb-3">
                3️⃣ GET SB TO DO (убедить)
              </h4>
              <p className="text-sm text-zinc-700 mb-2">
                Формула: <strong>get + sb + TO do</strong>
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Убедить, уговорить кого-то
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  I <strong>got my brother to help me</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Я уговорил брата помочь мне.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-300">
              <h4 className="font-bold text-orange-900 mb-3">
                4️⃣ HAVE SB DO (заставить)
              </h4>
              <p className="text-sm text-zinc-700 mb-2">
                Формула: <strong>have + sb + do</strong> (без TO!)
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Попросить/заставить (формально)
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  I <strong>had my assistant call you</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Я попросил ассистента позвонить вам.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-300 mt-4">
            <h4 className="font-bold text-amber-900 mb-3">
              🔑 Ключевые различия:
            </h4>
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                • <strong>V3</strong> (done/repaired) = услуга, работа выполнена
                ЗА вас
              </p>
              <p>
                • <strong>TO do</strong> (get sb to do) = уговорить, человек
                делает САМ
              </p>
              <p>
                • <strong>do</strong> без TO (have sb do) = попросить/заставить
                (власть)
              </p>
              <p>
                • <strong>HAVE</strong> — формально, <strong>GET</strong> —
                разговорно
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 9) {
    const items: FillItem[] = [
      {
        left: "1. I",
        answers: ["got my friend to help"],
        right: "me move. (уговорил друга)",
        explanation: "GET sb TO do — убедить кого-то сделать",
      },
      {
        left: "2. She",
        answers: ["had her nails done"],
        right: "at the salon. (услуга)",
        explanation: "HAVE sth done — профессиональная услуга",
      },
      {
        left: "3. I'll",
        answers: ["have my assistant send"],
        right: "you the documents. (попросить)",
        explanation: "HAVE sb do — попросить подчинённого (без TO!)",
      },
      {
        left: "4. We",
        answers: ["got the house renovated"],
        right: "last year. (нанимали рабочих)",
        explanation: "GET sth done — услуга (разговорно)",
      },
      {
        left: "5. Can you",
        answers: ["get him to call"],
        right: "me back? (убедить)",
        explanation: "GET sb TO do — убедить позвонить",
      },
      {
        left: "6. The teacher",
        answers: ["had us write"],
        right: "an essay. (заставил)",
        explanation: "HAVE sb do — заставить (власть, без TO!)",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 2: Все структуры">
          <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200 mb-4">
            <p className="text-sm font-semibold text-purple-900 mb-2">
              📝 Задание:
            </p>
            <p className="text-sm text-zinc-700">
              Определи, какая структура нужна, и заполни пропуски. Подсказка в
              скобках!
            </p>
          </div>

          <CheckableExercise
            title="Различаем 4 структуры"
            instruction="Вставь правильную causative конструкцию."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 10) {
    const items: FillItem[] = [
      {
        left: "",
        answers: [
          "I had my car washed yesterday",
          "I got my car washed yesterday",
        ],
        right: "",
        explanation: "Мне помыли машину вчера (услуга) — have/get sth done",
      },
      {
        left: "",
        answers: [
          "She is having her house painted",
          "She is getting her house painted",
        ],
        right: "",
        explanation: "Ей красят дом (услуга в процессе)",
      },
      {
        left: "",
        answers: ["I got my brother to help me"],
        right: "",
        explanation: "Я уговорил брата помочь мне — get sb to do",
      },
      {
        left: "",
        answers: [
          "We had our roof repaired last month",
          "We got our roof repaired last month",
        ],
        right: "",
        explanation: "Нам починили крышу в прошлом месяце (услуга)",
      },
      {
        left: "",
        answers: ["I will have my secretary call you"],
        right: "",
        explanation: "Я попрошу секретаря позвонить вам — have sb do (без TO!)",
      },
      {
        left: "",
        answers: [
          "He had his teeth cleaned at the dentist",
          "He got his teeth cleaned at the dentist",
        ],
        right: "",
        explanation: "Ему почистили зубы у дантиста (услуга)",
      },
    ];

    return (
      <>
        <Section title="🌍 Упражнение 3: Перевод с русского">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300 mb-4">
            <p className="font-bold text-indigo-900 mb-2 text-lg">
              🇷🇺 → 🇬🇧 Переведи с русского на английский
            </p>
            <p className="text-sm text-zinc-700">
              Это новый тип упражнения! Дано предложение на русском языке —
              переведи его на английский, используя causative структуры.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Мне помыли машину вчера.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[0]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                2️⃣ Ей красят дом (сейчас).
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[1]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                3️⃣ Я уговорил брата помочь мне.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[2]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                4️⃣ Нам починили крышу в прошлом месяце.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[3]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                5️⃣ Я попрошу секретаря позвонить вам.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[4]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                6️⃣ Ему почистили зубы у дантиста.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[5]]}
                wideInputs
              />
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 11) {
    const items: FillItem[] = [
      {
        left: "",
        answers: ["I had my hair cut", "I got my hair cut"],
        right: "",
        explanation: "cut = V3! Все три формы одинаковые: cut-cut-cut",
      },
      {
        left: "",
        answers: ["She had her dress altered", "She got her dress altered"],
        right: "",
        explanation:
          "altered = V3 (изменена). Глагол alter (изменять) → altered",
      },
      {
        left: "",
        answers: ["I got my friend to lend me money"],
        right: "",
        explanation: "lend = инфинитив (одолжить). После TO — инфинитив!",
      },
      {
        left: "",
        answers: [
          "We had new windows installed",
          "We got new windows installed",
        ],
        right: "",
        explanation: "installed = V3 (установлены). install → installed",
      },
      {
        left: "",
        answers: ["The boss had us work overtime"],
        right: "",
        explanation: "work = инфинитив без TO! После have sb — голый инфинитив",
      },
      {
        left: "",
        answers: [
          "I need to have my laptop repaired",
          "I need to get my laptop repaired",
        ],
        right: "",
        explanation: "repaired = V3. repair → repaired",
      },
    ];

    return (
      <>
        <Section title="🔧 Упражнение 4: Исправь ошибки">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-300 mb-4">
            <p className="font-bold text-red-900 mb-2 text-lg">
              ❌ → ✅ Найди и исправь ошибку!
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Это новый тип упражнения! Каждое предложение содержит ОШИБКУ.
              Найди её и напиши ПРАВИЛЬНЫЙ вариант.
            </p>
            <p className="text-xs text-zinc-600">
              Подсказка: проверяй форму глагола (V3 или инфинитив) и наличие TO.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                I had my hair <strong className="text-red-700">cutting</strong>.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[0]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                She had her dress{" "}
                <strong className="text-red-700">alter</strong>.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[1]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                I got my friend{" "}
                <strong className="text-red-700">lend me money</strong>.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[2]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                We had new windows{" "}
                <strong className="text-red-700">install</strong>.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[3]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                The boss had us{" "}
                <strong className="text-red-700">to work</strong> overtime.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[4]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                I need to have my laptop{" "}
                <strong className="text-red-700">repair</strong>.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[5]]}
                wideInputs
              />
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 12) {
    const items: FillItem[] = [
      {
        left: "",
        answers: [
          "She is getting her hair dyed blonde",
          "She is having her hair dyed blonde",
        ],
        right: "",
        explanation: "Ей красят волосы в блондинку (услуга в процессе)",
      },
      {
        left: "",
        answers: ["Can you get your dad to drive us to the airport"],
        right: "",
        explanation:
          "Можешь попросить папу отвезти нас в аэропорт? — get sb to do",
      },
      {
        left: "",
        answers: [
          "I had my watch fixed at the jeweler's",
          "I got my watch fixed at the jeweler's",
        ],
        right: "",
        explanation: "Я починил часы у ювелира (услуга)",
      },
      {
        left: "",
        answers: ["The manager had everyone stay late"],
        right: "",
        explanation: "Менеджер заставил всех остаться допоздна — have sb do",
      },
      {
        left: "",
        answers: [
          "We need to get the kitchen renovated",
          "We need to have the kitchen renovated",
        ],
        right: "",
        explanation: "Нам нужно отремонтировать кухню (нанять рабочих)",
      },
      {
        left: "",
        answers: ["I got my sister to lend me her dress"],
        right: "",
        explanation: "Я уговорила сестру одолжить мне платье — get sb to do",
      },
      {
        left: "",
        answers: [
          "He had his blood pressure checked",
          "He got his blood pressure checked",
        ],
        right: "",
        explanation: "Ему измерили давление (у врача)",
      },
      {
        left: "",
        answers: [
          "I will have my assistant prepare the report",
          "I will get my assistant to prepare the report",
        ],
        right: "",
        explanation:
          "Я попрошу ассистента подготовить отчёт (have sb do или get sb to do)",
      },
    ];

    return (
      <>
        <Section title="🌍 Упражнение 5: Большой перевод">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-300 mb-4">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              🇷🇺 → 🇬🇧 Переведи сложные предложения
            </p>
            <p className="text-sm text-zinc-700">
              Усложнённый перевод! Используй все изученные causative структуры.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Ей красят волосы в блондинку (сейчас).
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[0]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                2️⃣ Можешь попросить папу отвезти нас в аэропорт?
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[1]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                3️⃣ Я починил часы у ювелира.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[2]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                4️⃣ Менеджер заставил всех остаться допоздна.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[3]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                5️⃣ Нам нужно отремонтировать кухню.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[4]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                6️⃣ Я уговорила сестру одолжить мне платье.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[5]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                7️⃣ Ему измерили давление (у врача).
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[6]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                8️⃣ Я попрошу ассистента подготовить отчёт.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[7]]}
                wideInputs
              />
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 13) {
    return (
      <>
        <Section title="⚠️ Типичные ошибки">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-xl font-bold text-red-900 mb-4">
              Распространённые ошибки с Causative
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 1: Неправильная форма глагола
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ I had my car <strong>repairing</strong>.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ I had my car <strong>repaired</strong>. (V3!)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 2: Лишнее TO после have sb
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ I had him <strong>to help</strong> me.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ I had him <strong>help</strong> me. (без TO!)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 3: Отсутствие TO после get sb
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ I got him <strong>help</strong> me.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ I got him <strong>to help</strong> me. (с TO!)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 4: Путать "by" и прямое дополнение
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ I had my car washed <strong>by the mechanic</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      (В causative не указываем, КТО сделал)
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ I had my car washed. / I had my car washed{" "}
                      <strong>at the garage</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 5: Использовать V1 вместо V3
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ I need to get my phone <strong>fix</strong>.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ I need to get my phone <strong>fixed</strong>. (V3!)
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

  if (step === 14) {
    return (
      <>
        <Section title="📚 Vocabulary — Услуги и действия">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">
              20 глаголов для Causative
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                1. repair — ремонтировать
              </p>
              <p className="text-xs text-zinc-600">
                I <strong>had my car repaired</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                2. fix — чинить, починить
              </p>
              <p className="text-xs text-zinc-600">
                She <strong>got her phone fixed</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                3. cut — стричь, резать
              </p>
              <p className="text-xs text-zinc-600">
                I <strong>had my hair cut</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                4. paint — красить
              </p>
              <p className="text-xs text-zinc-600">
                We <strong>had the house painted</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                5. install — устанавливать
              </p>
              <p className="text-xs text-zinc-600">
                I <strong>had new software installed</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                6. service — обслуживать (ТО)
              </p>
              <p className="text-xs text-zinc-600">
                I <strong>had my car serviced</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                7. clean — чистить
              </p>
              <p className="text-xs text-zinc-600">
                She <strong>had her teeth cleaned</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                8. dry-clean — отдать в химчистку
              </p>
              <p className="text-xs text-zinc-600">
                I <strong>had my suit dry-cleaned</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                9. alter — ушить, изменить (одежду)
              </p>
              <p className="text-xs text-zinc-600">
                She <strong>had her dress altered</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                10. shorten — укоротить
              </p>
              <p className="text-xs text-zinc-600">
                He <strong>had his trousers shortened</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                11. upgrade — улучшить, обновить
              </p>
              <p className="text-xs text-zinc-600">
                I <strong>had my laptop upgraded</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                12. renovate — отремонтировать (дом)
              </p>
              <p className="text-xs text-zinc-600">
                We <strong>had the kitchen renovated</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                13. test — проверить, протестировать
              </p>
              <p className="text-xs text-zinc-600">
                I <strong>had my eyes tested</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                14. deliver — доставить
              </p>
              <p className="text-xs text-zinc-600">
                I <strong>had the package delivered</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                15. dye — красить (волосы)
              </p>
              <p className="text-xs text-zinc-600">
                She <strong>had her hair dyed</strong> blonde.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                16. trim — подровнять
              </p>
              <p className="text-xs text-zinc-600">
                He <strong>had his beard trimmed</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                17. whiten — отбелить
              </p>
              <p className="text-xs text-zinc-600">
                She <strong>had her teeth whitened</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                18. replace — заменить
              </p>
              <p className="text-xs text-zinc-600">
                I <strong>had the battery replaced</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                19. check — проверить
              </p>
              <p className="text-xs text-zinc-600">
                He <strong>had his blood pressure checked</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold text-indigo-900">
                20. pierce — проколоть (уши)
              </p>
              <p className="text-xs text-zinc-600">
                She <strong>had her ears pierced</strong>.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
            <h4 className="font-bold text-amber-900 mb-2">
              🎯 Дополнительные слова:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
              <p>
                • <strong>at the salon</strong> — в салоне
              </p>
              <p>
                • <strong>at the garage</strong> — в автосервисе
              </p>
              <p>
                • <strong>at the dentist's</strong> — у дантиста
              </p>
              <p>
                • <strong>at the optician's</strong> — у оптика
              </p>
              <p>
                • <strong>at the jeweler's</strong> — у ювелира
              </p>
              <p>
                • <strong>at the tailor's</strong> — у портного
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 15) {
    const items: FillItem[] = [
      {
        left: "1. I",
        answers: ["had my car serviced", "got my car serviced"],
        right: "last week.",
        explanation: "Мне обслужили машину (ТО)",
      },
      {
        left: "2. Can you",
        answers: ["get your brother to help"],
        right: "us move?",
        explanation: "Можешь попросить брата помочь? — get sb to do",
      },
      {
        left: "3. She",
        answers: ["had her nails done", "got her nails done"],
        right: "at the salon.",
        explanation: "Ей сделали маникюр в салоне",
      },
      {
        left: "4. I'll",
        answers: ["have my secretary arrange"],
        right: "the meeting.",
        explanation: "Я попрошу секретаря организовать встречу — have sb do",
      },
      {
        left: "5. We need to",
        answers: ["get the roof fixed", "have the roof fixed"],
        right: "before winter.",
        explanation: "Нужно починить крышу (нанять рабочих)",
      },
      {
        left: "6. I",
        answers: ["got my friend to lend"],
        right: "me his car.",
        explanation: "Я уговорил друга одолжить машину — get sb to do",
      },
      {
        left: "7. He",
        answers: ["had his suit dry-cleaned", "got his suit dry-cleaned"],
        right: "yesterday.",
        explanation: "Он отдал костюм в химчистку",
      },
      {
        left: "8. The teacher",
        answers: ["had us write"],
        right: "an essay.",
        explanation: "Учитель заставил нас написать эссе — have sb do",
      },
      {
        left: "9. She",
        answers: [
          "is having her house painted",
          "is getting her house painted",
        ],
        right: "this month.",
        explanation: "Ей красят дом (процесс)",
      },
      {
        left: "10. I",
        answers: ["had my eyes tested", "got my eyes tested"],
        right: "at the optician's.",
        explanation: "Я проверил зрение у оптика",
      },
      {
        left: "11. Can you",
        answers: ["get him to call"],
        right: "me back?",
        explanation: "Можешь попросить его перезвонить? — get sb to do",
      },
      {
        left: "12. We",
        answers: ["had new windows installed", "got new windows installed"],
        right: "last month.",
        explanation: "Нам установили новые окна",
      },
    ];

    return (
      <>
        <Section title="🏆 Финальный супер-тест">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-400 mb-4">
            <h3 className="text-2xl font-bold text-yellow-900 mb-3">
              Финальная проверка!
            </h3>
            <p className="text-sm text-zinc-700 mb-2">
              12 предложений на **ВСЕ causative структуры**. Покажи, что ты всё
              понял!
            </p>
            <p className="text-sm font-semibold text-yellow-900">
              Цель: 10/12 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (12 вопросов)"
            instruction="Вставь правильную causative конструкцию."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы освоили все Causative структуры! Теперь вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>✅ Использовать have/get sth done (услуги)</li>
              <li>✅ Использовать get sb to do (убедить кого-то)</li>
              <li>✅ Использовать have sb do (попросить/заставить)</li>
              <li>✅ Различать формальное и разговорное</li>
              <li>✅ Правильно выбирать V3 или инфинитив</li>
              <li>✅ Говорить о профессиональных услугах</li>
              <li>✅ Переводить с русского на английский</li>
              <li>✅ Исправлять типичные ошибки</li>
            </ul>
          </div>
        </Section>

        <Section title="📋 Краткая памятка">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
              <h4 className="font-bold text-blue-900 mb-2">
                have/get sth done
              </h4>
              <p className="text-xs text-zinc-700">Услуга</p>
              <p className="text-xs text-zinc-600 mt-1">
                I had my car repaired.
              </p>
            </div>

            <div className="bg-rose-50 rounded-lg p-4 border-2 border-rose-300">
              <h4 className="font-bold text-rose-900 mb-2">get sb to do</h4>
              <p className="text-xs text-zinc-700">Убедить</p>
              <p className="text-xs text-zinc-600 mt-1">
                I got him to help me.
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
              <h4 className="font-bold text-orange-900 mb-2">have sb do</h4>
              <p className="text-xs text-zinc-700">Попросить/заставить</p>
              <p className="text-xs text-zinc-600 mt-1">
                I had him help me. (без TO!)
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
              <h4 className="font-bold text-green-900 mb-2">
                have = get (но...)
              </h4>
              <p className="text-xs text-zinc-700">
                have — формально, get — разговорно
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
            <h4 className="font-bold text-amber-900 mb-2">
              🔑 Ключевые правила:
            </h4>
            <ul className="text-xs text-zinc-700 space-y-1">
              <li>• После STH всегда V3 (done, repaired, cut)</li>
              <li>• После GET SB обязательно TO</li>
              <li>• После HAVE SB БЕЗ TO!</li>
              <li>• GET — разговорный, HAVE — формальный</li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  return null;
}
