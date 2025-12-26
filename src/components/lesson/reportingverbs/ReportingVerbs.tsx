"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ReportingVerbs({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="🎯 Reporting Verbs — Глаголы для передачи речи">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Разнообразие глаголов для Reported Speech
            </h2>
            <p className="text-sm text-zinc-700 mb-3">
              Вместо простого <strong>SAY</strong> и <strong>TELL</strong>{" "}
              английский язык предлагает более 20 специальных глаголов, которые
              точнее передают смысл сказанного.
            </p>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-200 mb-4">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">
                📣 Зачем нужны Reporting Verbs?
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  • <strong>Точность:</strong> Передают намерение говорящего
                  (совет, обещание, предупреждение)
                </p>
                <p>
                  • <strong>Богатство речи:</strong> Делают английский более
                  выразительным
                </p>
                <p>
                  • <strong>Академический стиль:</strong> Необходимы для IELTS,
                  эссе, презентаций
                </p>
                <p>
                  • <strong>Избегание повторений:</strong> SAY/TELL звучат
                  скучно и примитивно
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2">
                  ❌ Скучно и бедно:
                </h4>
                <p className="text-sm mb-2">
                  He <strong>said</strong> that I should rest.
                </p>
                <p className="text-sm">
                  She <strong>told</strong> me that she would come.
                </p>
                <p className="text-xs text-zinc-600 mt-2">
                  Всегда одни и те же слова!
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2">
                  ✅ Точно и красиво:
                </h4>
                <p className="text-sm mb-2">
                  He <strong>advised</strong> me to rest.
                </p>
                <p className="text-sm">
                  She <strong>promised</strong> to come.
                </p>
                <p className="text-xs text-zinc-600 mt-2">
                  Точно передаём смысл!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-300">
              <h4 className="font-bold text-purple-900 mb-3 text-center text-lg">
                🔑 Ключевая идея
              </h4>
              <p className="text-sm text-zinc-700 text-center">
                Каждый Reporting Verb имеет свою <strong>структуру</strong>:
                verb + that / verb + to / verb + -ing / verb + object + to
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 text-center">
                Verb + THAT
              </h4>
              <p className="text-sm text-center">
                He <strong>admitted that</strong> he was wrong.
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                Утверждения, факты
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <h4 className="font-semibold text-green-900 mb-2 text-center">
                Verb + TO
              </h4>
              <p className="text-sm text-center">
                She <strong>promised to</strong> help.
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                Обещания, планы
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2 text-center">
                Verb + -ING
              </h4>
              <p className="text-sm text-center">
                He <strong>suggested going</strong> home.
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                Предложения
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
        <Section title="🗣️ Категория 1: Советы и рекомендации">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              ADVISE, RECOMMEND, SUGGEST — Советы
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2 text-lg">
                  1️⃣ ADVISE — советовать (формально)
                </h4>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: advise + object + TO + infinitive
                    </p>
                    <p className="text-sm">📣 "You should see a doctor."</p>
                    <p className="text-sm text-green-700">
                      💭 He <strong>advised me to see</strong> a doctor.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Совет кому-то конкретно
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: advise + THAT + should/shouldn't
                    </p>
                    <p className="text-sm">📣 "You should rest."</p>
                    <p className="text-sm text-green-700">
                      💭 He <strong>advised that I should rest</strong>.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">Общий совет</p>
                  </div>

                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: advise + -ING (общий совет)
                    </p>
                    <p className="text-sm">📣 "Don't smoke!"</p>
                    <p className="text-sm text-green-700">
                      💭 Doctors <strong>advise not smoking</strong>.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Общая рекомендация (не кому-то конкретно)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2 text-lg">
                  2️⃣ RECOMMEND — рекомендовать
                </h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: recommend + THAT + should
                    </p>
                    <p className="text-sm">
                      📣 "You should try this restaurant."
                    </p>
                    <p className="text-sm text-blue-700">
                      💭 She <strong>recommended that I should try</strong> this
                      restaurant.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: recommend + -ING
                    </p>
                    <p className="text-sm">📣 "Read this book!"</p>
                    <p className="text-sm text-blue-700">
                      💭 He <strong>recommended reading</strong> this book.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-900 mb-2 text-lg">
                  3️⃣ SUGGEST — предлагать
                </h4>
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: suggest + -ING
                    </p>
                    <p className="text-sm">📣 "Let's go to the cinema."</p>
                    <p className="text-sm text-purple-700">
                      💭 She <strong>suggested going</strong> to the cinema.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Suggest НЕ используется с TO!
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: suggest + THAT + should
                    </p>
                    <p className="text-sm">📣 "Maybe we should leave early."</p>
                    <p className="text-sm text-purple-700">
                      💭 He <strong>suggested that we should leave</strong>{" "}
                      early.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-5 border-2 border-red-300">
            <h4 className="font-bold text-red-900 mb-3 text-center">
              ⚠️ КРИТИЧЕСКАЯ ОШИБКА!
            </h4>
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ She suggested <strong>to go</strong> to the cinema.
                </p>
                <p className="text-xs text-zinc-600 mb-3">
                  SUGGEST НЕ использует TO + infinitive!
                </p>
                <p className="text-sm text-green-700">
                  ✅ She suggested <strong>going</strong> to the cinema.
                </p>
                <p className="text-xs text-zinc-600">
                  После SUGGEST используем -ING!
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <Section title="💪 Категория 2: Обещания и согласия">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              PROMISE, AGREE, OFFER, REFUSE — Обещания и решения
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2 text-lg">
                  1️⃣ PROMISE — обещать
                </h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: promise + TO + infinitive
                    </p>
                    <p className="text-sm">📣 "I will help you."</p>
                    <p className="text-sm text-blue-700">
                      💭 He <strong>promised to help</strong> me.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Обещание что-то сделать
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: promise + THAT + will/would
                    </p>
                    <p className="text-sm">📣 "I will call you tomorrow."</p>
                    <p className="text-sm text-blue-700">
                      💭 She <strong>promised that she would call</strong> me
                      the next day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2 text-lg">
                  2️⃣ AGREE — соглашаться
                </h4>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: agree + TO + infinitive
                    </p>
                    <p className="text-sm">📣 "OK, I'll help."</p>
                    <p className="text-sm text-green-700">
                      💭 He <strong>agreed to help</strong>.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: agree + THAT
                    </p>
                    <p className="text-sm">📣 "Yes, you're right."</p>
                    <p className="text-sm text-green-700">
                      💭 She <strong>agreed that I was right</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <h4 className="font-semibold text-orange-900 mb-2 text-lg">
                  3️⃣ OFFER — предлагать (помощь)
                </h4>
                <div className="space-y-3">
                  <div className="bg-orange-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: offer + TO + infinitive
                    </p>
                    <p className="text-sm">📣 "I'll help you."</p>
                    <p className="text-sm text-orange-700">
                      💭 He <strong>offered to help</strong> me.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Предложение помощи
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2 text-lg">
                  4️⃣ REFUSE — отказываться
                </h4>
                <div className="space-y-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: refuse + TO + infinitive
                    </p>
                    <p className="text-sm">📣 "I won't do it!"</p>
                    <p className="text-sm text-red-700">
                      💭 She <strong>refused to do</strong> it.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Категорический отказ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 mb-3 text-center">
              💡 Запомни структуры!
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-blue-900">PROMISE + TO</p>
                <p className="text-xs text-zinc-600">He promised to come.</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-green-900">AGREE + TO</p>
                <p className="text-xs text-zinc-600">She agreed to help.</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-orange-900">OFFER + TO</p>
                <p className="text-xs text-zinc-600">I offered to pay.</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-red-900">REFUSE + TO</p>
                <p className="text-xs text-zinc-600">He refused to go.</p>
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
        <Section title="⚠️ Категория 3: Предупреждения и угрозы">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300 mb-4">
            <h3 className="text-xl font-bold text-orange-900 mb-4">
              WARN, THREATEN — Предупреждения и угрозы
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <h4 className="font-semibold text-orange-900 mb-2 text-lg">
                  1️⃣ WARN — предупреждать
                </h4>
                <div className="space-y-3">
                  <div className="bg-orange-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: warn + object + (NOT) TO + infinitive
                    </p>
                    <p className="text-sm">📣 "Don't go there!"</p>
                    <p className="text-sm text-orange-700">
                      💭 He <strong>warned me not to go</strong> there.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: warn + object + THAT
                    </p>
                    <p className="text-sm">📣 "It's dangerous!"</p>
                    <p className="text-sm text-orange-700">
                      💭 She <strong>warned me that it was dangerous</strong>.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: warn + object + ABOUT + noun
                    </p>
                    <p className="text-sm">📣 "Be careful of the traffic!"</p>
                    <p className="text-sm text-orange-700">
                      💭 He <strong>warned me about the traffic</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2 text-lg">
                  2️⃣ THREATEN — угрожать
                </h4>
                <div className="space-y-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: threaten + TO + infinitive
                    </p>
                    <p className="text-sm">📣 "I'll call the police!"</p>
                    <p className="text-sm text-red-700">
                      💭 He <strong>threatened to call</strong> the police.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">Угроза</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 5) {
    return (
      <>
        <Section title="🙏 Категория 4: Просьбы и требования">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-xl font-bold text-purple-900 mb-4">
              ASK, BEG, DEMAND, INSIST, URGE — Просьбы и требования
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2 text-lg">
                  1️⃣ ASK — просить
                </h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: ask + object + TO + infinitive
                    </p>
                    <p className="text-sm">📣 "Please help me."</p>
                    <p className="text-sm text-blue-700">
                      💭 She <strong>asked me to help</strong> her.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-900 mb-2 text-lg">
                  2️⃣ BEG — умолять
                </h4>
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: beg + object + TO + infinitive
                    </p>
                    <p className="text-sm">📣 "Please don't leave!"</p>
                    <p className="text-sm text-purple-700">
                      💭 He <strong>begged me not to leave</strong>.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Эмоциональная просьба
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2 text-lg">
                  3️⃣ DEMAND — требовать
                </h4>
                <div className="space-y-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: demand + THAT + should
                    </p>
                    <p className="text-sm">📣 "Give me my money back!"</p>
                    <p className="text-sm text-red-700">
                      💭 He <strong>demanded that they should give</strong> his
                      money back.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: demand + TO + infinitive
                    </p>
                    <p className="text-sm">
                      📣 "I want to speak to the manager!"
                    </p>
                    <p className="text-sm text-red-700">
                      💭 She <strong>demanded to speak</strong> to the manager.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <h4 className="font-semibold text-orange-900 mb-2 text-lg">
                  4️⃣ INSIST — настаивать
                </h4>
                <div className="space-y-3">
                  <div className="bg-orange-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: insist + THAT + should
                    </p>
                    <p className="text-sm">📣 "You must come with me!"</p>
                    <p className="text-sm text-orange-700">
                      💭 He <strong>insisted that I should come</strong> with
                      him.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: insist + ON + -ING
                    </p>
                    <p className="text-sm">📣 "I'll pay for dinner!"</p>
                    <p className="text-sm text-orange-700">
                      💭 She <strong>insisted on paying</strong> for dinner.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2 text-lg">
                  5️⃣ URGE — настоятельно просить
                </h4>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: urge + object + TO + infinitive
                    </p>
                    <p className="text-sm">📣 "You should hurry!"</p>
                    <p className="text-sm text-green-700">
                      💭 He <strong>urged me to hurry</strong>.
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

  if (step === 6) {
    return (
      <>
        <Section title="💬 Категория 5: Утверждения и признания">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-xl font-bold text-cyan-900 mb-4">
              ADMIT, DENY, CLAIM, EXPLAIN, COMPLAIN — Утверждения
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2 text-lg">
                  1️⃣ ADMIT — признавать
                </h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: admit + THAT
                    </p>
                    <p className="text-sm">📣 "I was wrong."</p>
                    <p className="text-sm text-blue-700">
                      💭 He <strong>admitted that he was wrong</strong>.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: admit + -ING
                    </p>
                    <p className="text-sm">📣 "I stole the money."</p>
                    <p className="text-sm text-blue-700">
                      💭 He <strong>admitted stealing</strong> the money.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2 text-lg">
                  2️⃣ DENY — отрицать
                </h4>
                <div className="space-y-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: deny + THAT
                    </p>
                    <p className="text-sm">📣 "I didn't do it!"</p>
                    <p className="text-sm text-red-700">
                      💭 She <strong>denied that she had done</strong> it.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: deny + -ING
                    </p>
                    <p className="text-sm">📣 "I didn't steal it!"</p>
                    <p className="text-sm text-red-700">
                      💭 He <strong>denied stealing</strong> it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-900 mb-2 text-lg">
                  3️⃣ CLAIM — утверждать
                </h4>
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: claim + THAT
                    </p>
                    <p className="text-sm">📣 "I'm the best!"</p>
                    <p className="text-sm text-purple-700">
                      💭 He <strong>claimed that he was the best</strong>.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: claim + TO + infinitive
                    </p>
                    <p className="text-sm">📣 "I can speak 10 languages!"</p>
                    <p className="text-sm text-purple-700">
                      💭 She <strong>claimed to speak</strong> 10 languages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2 text-lg">
                  4️⃣ EXPLAIN — объяснять
                </h4>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: explain + THAT
                    </p>
                    <p className="text-sm">📣 "The train was late."</p>
                    <p className="text-sm text-green-700">
                      💭 He{" "}
                      <strong>explained that the train had been late</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <h4 className="font-semibold text-orange-900 mb-2 text-lg">
                  5️⃣ COMPLAIN — жаловаться
                </h4>
                <div className="space-y-3">
                  <div className="bg-orange-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: complain + THAT
                    </p>
                    <p className="text-sm">📣 "The service is terrible!"</p>
                    <p className="text-sm text-orange-700">
                      💭 She{" "}
                      <strong>complained that the service was terrible</strong>.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Структура: complain + ABOUT + noun
                    </p>
                    <p className="text-sm">📣 "The noise is annoying!"</p>
                    <p className="text-sm text-orange-700">
                      💭 He <strong>complained about the noise</strong>.
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

  if (step === 7) {
    const items: FillItem[] = [
      {
        left: "",
        answers: [
          "He advised me to see a doctor",
          "He advised me to see a doctor.",
        ],
        right: "",
        explanation: 'Direct: "You should see a doctor." → advised me TO see',
      },
      {
        left: "",
        answers: [
          "She suggested going to the cinema",
          "She suggested going to the cinema.",
        ],
        right: "",
        explanation:
          'Direct: "Let\'s go to the cinema." → suggested GOING (не TO!)',
      },
      {
        left: "",
        answers: [
          "He promised to help me",
          "He promised to help me.",
          "He promised to help her",
          "He promised to help her.",
        ],
        right: "",
        explanation: 'Direct: "I will help you." → promised TO help',
      },
      {
        left: "",
        answers: ["She refused to do it", "She refused to do it."],
        right: "",
        explanation: 'Direct: "I won\'t do it!" → refused TO do',
      },
      {
        left: "",
        answers: [
          "He warned me not to go there",
          "He warned me not to go there.",
        ],
        right: "",
        explanation: 'Direct: "Don\'t go there!" → warned me NOT TO go',
      },
      {
        left: "",
        answers: [
          "She admitted that she was wrong",
          "She admitted that she was wrong.",
          "She admitted being wrong",
          "She admitted being wrong.",
        ],
        right: "",
        explanation: 'Direct: "I was wrong." → admitted THAT she was wrong',
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Преобразуй с Reporting Verbs">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border-2 border-blue-300 mb-4">
            <p className="font-bold text-blue-900 mb-2 text-lg">
              📣 → 💭 Преобразуй прямую речь, используя Reporting Verbs
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дана прямая речь и подсказка (глагол). Напиши косвенную речь,
              используя правильную структуру!
            </p>
            <p className="text-xs text-zinc-600">
              Не забудь: каждый глагол имеет свою структуру (to/that/-ing)
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Direct: "You should see a doctor." (He advised...)
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
                2️⃣ Direct: "Let's go to the cinema." (She suggested...)
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
                3️⃣ Direct: "I will help you." (He promised...)
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
                4️⃣ Direct: "I won't do it!" (She refused...)
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
                5️⃣ Direct: "Don't go there!" (He warned...)
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
                6️⃣ Direct: "I was wrong." (She admitted...)
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

  if (step === 8) {
    return (
      <>
        <Section title="⚠️ Типичные ошибки с Reporting Verbs">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-xl font-bold text-red-900 mb-4">
              Самые частые ошибки и как их избежать
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 1: SUGGEST + TO (неправильно!)
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ She suggested <strong>to go</strong> home.
                    </p>
                    <p className="text-xs text-zinc-600">
                      SUGGEST НЕ используется с TO!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ She suggested <strong>going</strong> home.
                    </p>
                    <p className="text-xs text-zinc-600">SUGGEST + -ING ✅</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 2: ADVISE без объекта
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He advised <strong>to see</strong> a doctor.
                    </p>
                    <p className="text-xs text-zinc-600">Забыли "me"!</p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He advised <strong>me to see</strong> a doctor.
                    </p>
                    <p className="text-xs text-zinc-600">
                      ADVISE + object + TO ✅
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 3: PROMISE + -ING (неправильно!)
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ She promised <strong>helping</strong> me.
                    </p>
                    <p className="text-xs text-zinc-600">
                      PROMISE НЕ используется с -ING!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ She promised <strong>to help</strong> me.
                    </p>
                    <p className="text-xs text-zinc-600">PROMISE + TO ✅</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 4: INSIST + TO (неправильно!)
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He insisted <strong>to pay</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      INSIST НЕ используется с TO!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He insisted <strong>on paying</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      INSIST + ON + -ING ✅
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 5: DENY + TO (неправильно!)
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ She denied <strong>to steal</strong> it.
                    </p>
                    <p className="text-xs text-zinc-600">
                      DENY НЕ используется с TO!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ She denied <strong>stealing</strong> it.
                    </p>
                    <p className="text-xs text-zinc-600">DENY + -ING ✅</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-300">
            <h4 className="font-bold text-blue-900 mb-3">
              🆚 Сравнение с русским языком
            </h4>
            <div className="space-y-3 text-sm text-zinc-700">
              <p>
                • <strong>В русском:</strong> "Он предложил пойти в кино"
              </p>
              <p>
                • <strong>В английском:</strong> "He suggested GOING to the
                cinema" — НЕ "to go"!
              </p>
              <p className="mt-3">
                • <strong>В русском:</strong> структура всегда одинаковая
              </p>
              <p>
                • <strong>В английском:</strong> каждый глагол имеет СВОЮ
                структуру (to/-ing/that)
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
        left: "",
        answers: ["She suggested going home", "She suggested going home."],
        right: "",
        explanation: 'Исправлено: "to go" → "going" (SUGGEST + -ING!)',
      },
      {
        left: "",
        answers: [
          "He advised me to see a doctor",
          "He advised me to see a doctor.",
        ],
        right: "",
        explanation: 'Исправлено: добавили "me", advised + object + TO',
      },
      {
        left: "",
        answers: ["She promised to help me", "She promised to help me."],
        right: "",
        explanation: 'Исправлено: "helping" → "to help" (PROMISE + TO!)',
      },
      {
        left: "",
        answers: ["He insisted on paying", "He insisted on paying."],
        right: "",
        explanation: 'Исправлено: "to pay" → "on paying" (INSIST + ON + -ING!)',
      },
      {
        left: "",
        answers: ["She denied stealing it", "She denied stealing it."],
        right: "",
        explanation: 'Исправлено: "to steal" → "stealing" (DENY + -ING!)',
      },
      {
        left: "",
        answers: [
          "He recommended reading this book",
          "He recommended reading this book.",
        ],
        right: "",
        explanation: 'Исправлено: "to read" → "reading" (RECOMMEND + -ING!)',
      },
    ];

    return (
      <>
        <Section title="❌ Упражнение 2: Исправь ошибки">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-300 mb-4">
            <p className="font-bold text-red-900 mb-2 text-lg">
              ❌ → ✅ Найди и исправь ошибки!
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Каждое предложение содержит ОШИБКУ в структуре Reporting Verb.
              Напиши ПРАВИЛЬНЫЙ вариант полностью!
            </p>
            <p className="text-xs text-zinc-600">
              Проверяй: правильная структура (to/-ing/that), объект (me/him/her)
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                She suggested <strong className="text-red-700">to go</strong>{" "}
                home.
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
                He advised <strong className="text-red-700">to see</strong> a
                doctor.
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
                She promised <strong className="text-red-700">helping</strong>{" "}
                me.
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
                He insisted <strong className="text-red-700">to pay</strong>.
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
                She denied <strong className="text-red-700">to steal</strong>{" "}
                it.
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
                He recommended <strong className="text-red-700">to read</strong>{" "}
                this book.
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

  if (step === 10) {
    const items: FillItem[] = [
      {
        left: "",
        answers: [
          "He advised me to see a doctor",
          "He advised me to see a doctor.",
        ],
        right: "",
        explanation: "Он посоветовал мне пойти к врачу",
      },
      {
        left: "",
        answers: ["She suggested going home", "She suggested going home."],
        right: "",
        explanation: "Она предложила пойти домой",
      },
      {
        left: "",
        answers: [
          "He promised to help me",
          "He promised to help me.",
          "He promised to help her",
          "He promised to help her.",
        ],
        right: "",
        explanation: "Он обещал помочь мне",
      },
      {
        left: "",
        answers: ["She refused to go there", "She refused to go there."],
        right: "",
        explanation: "Она отказалась идти туда",
      },
      {
        left: "",
        answers: [
          "He admitted that he was wrong",
          "He admitted that he was wrong.",
          "He admitted being wrong",
          "He admitted being wrong.",
        ],
        right: "",
        explanation: "Он признал, что был неправ",
      },
      {
        left: "",
        answers: [
          "She complained about the noise",
          "She complained about the noise.",
        ],
        right: "",
        explanation: "Она пожаловалась на шум",
      },
    ];

    return (
      <>
        <Section title="🇷🇺 Упражнение 3: Перевод с русского">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-300 mb-4">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              🇷🇺 → 🇬🇧 Переведи на английский, используя Reporting Verbs
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дано предложение на русском языке. Переведи его на английский,
              используя правильный Reporting Verb и структуру!
            </p>
            <p className="text-xs text-zinc-600">
              Не забудь: каждый глагол имеет свою структуру (to/-ing/that)
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Он посоветовал мне пойти к врачу.
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
                2️⃣ Она предложила пойти домой.
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
                3️⃣ Он обещал помочь мне.
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
                4️⃣ Она отказалась идти туда.
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
                5️⃣ Он признал, что был неправ.
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
                6️⃣ Она пожаловалась на шум.
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
        left: "1. She",
        answers: ["suggested going", "suggested going to"],
        right: 'the cinema. (Direct: "Let\'s go to the cinema.")',
        explanation: "Suggest + -ING",
      },
      {
        left: "2. He",
        answers: ["advised me to see"],
        right: 'a doctor. (Direct: "You should see a doctor.")',
        explanation: "Advise + object + TO",
      },
      {
        left: "3. She",
        answers: ["promised to help"],
        right: 'me. (Direct: "I will help you.")',
        explanation: "Promise + TO",
      },
      {
        left: "4. He",
        answers: ["refused to do"],
        right: 'it. (Direct: "I won\'t do it!")',
        explanation: "Refuse + TO",
      },
      {
        left: "5. She",
        answers: ["admitted that she was wrong", "admitted being wrong"],
        right: '(Direct: "I was wrong.")',
        explanation: "Admit + THAT / Admit + -ING",
      },
      {
        left: "6. He",
        answers: ["warned me not to go"],
        right: 'there. (Direct: "Don\'t go there!")',
        explanation: "Warn + object + NOT TO",
      },
    ];

    return (
      <>
        <Section title="🏆 Финальный тест">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-400 mb-4">
            <h3 className="text-2xl font-bold text-yellow-900 mb-3">
              Финальная проверка знаний!
            </h3>
            <p className="text-sm text-zinc-700 mb-2">
              6 вопросов на **ВСЕ категории Reporting Verbs**. Преобразуй прямую
              речь в косвенную!
            </p>
            <p className="text-sm font-semibold text-yellow-900">
              Цель: 5/6 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (6 вопросов)"
            instruction="Заполни пропуски, используя правильный Reporting Verb."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы освоили Reporting Verbs! Теперь вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>✅ Использовать 20+ Reporting Verbs вместо SAY/TELL</li>
              <li>
                ✅ Правильно применять структуры: verb + to / verb + -ing / verb
                + that
              </li>
              <li>✅ Точно передавать намерение говорящего</li>
              <li>
                ✅ Использовать ADVISE, SUGGEST, PROMISE, REFUSE, WARN и другие
              </li>
              <li>✅ Избегать типичных ошибок (suggest to, promise -ing)</li>
              <li>✅ Делать речь богаче и выразительнее</li>
              <li>✅ Говорить и писать на академическом уровне</li>
            </ul>
          </div>
        </Section>

        <Section title="📚 Vocabulary — 20 Reporting Verbs">
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">
              20 самых полезных Reporting Verbs
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border-l-4 border-green-400">
                <p className="text-sm font-semibold text-green-900">
                  1. advise — советовать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>advised</strong> me to rest. (advise + obj + TO)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-blue-400">
                <p className="text-sm font-semibold text-blue-900">
                  2. suggest — предлагать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>suggested</strong> going. (suggest + -ING)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-purple-400">
                <p className="text-sm font-semibold text-purple-900">
                  3. recommend — рекомендовать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>recommended</strong> reading. (recommend + -ING)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-blue-400">
                <p className="text-sm font-semibold text-blue-900">
                  4. promise — обещать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>promised</strong> to help. (promise + TO)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-green-400">
                <p className="text-sm font-semibold text-green-900">
                  5. agree — соглашаться
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>agreed</strong> to go. (agree + TO)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400">
                <p className="text-sm font-semibold text-orange-900">
                  6. offer — предлагать (помощь)
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>offered</strong> to pay. (offer + TO)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-red-400">
                <p className="text-sm font-semibold text-red-900">
                  7. refuse — отказываться
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>refused</strong> to do it. (refuse + TO)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400">
                <p className="text-sm font-semibold text-orange-900">
                  8. warn — предупреждать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>warned</strong> me not to go. (warn + obj + NOT
                  TO)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-red-400">
                <p className="text-sm font-semibold text-red-900">
                  9. threaten — угрожать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>threatened</strong> to call police. (threaten + TO)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-blue-400">
                <p className="text-sm font-semibold text-blue-900">
                  10. ask — просить
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>asked</strong> me to help. (ask + obj + TO)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-purple-400">
                <p className="text-sm font-semibold text-purple-900">
                  11. beg — умолять
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>begged</strong> me to stay. (beg + obj + TO)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-red-400">
                <p className="text-sm font-semibold text-red-900">
                  12. demand — требовать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>demanded</strong> that I leave. (demand + THAT)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400">
                <p className="text-sm font-semibold text-orange-900">
                  13. insist — настаивать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>insisted</strong> on paying. (insist + ON + -ING)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-green-400">
                <p className="text-sm font-semibold text-green-900">
                  14. urge — настоятельно просить
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>urged</strong> me to hurry. (urge + obj + TO)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-blue-400">
                <p className="text-sm font-semibold text-blue-900">
                  15. admit — признавать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>admitted</strong> stealing. (admit + -ING)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-red-400">
                <p className="text-sm font-semibold text-red-900">
                  16. deny — отрицать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>denied</strong> doing it. (deny + -ING)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-purple-400">
                <p className="text-sm font-semibold text-purple-900">
                  17. claim — утверждать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>claimed</strong> that he was right. (claim + THAT)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-green-400">
                <p className="text-sm font-semibold text-green-900">
                  18. explain — объяснять
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>explained</strong> that she was late. (explain +
                  THAT)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400">
                <p className="text-sm font-semibold text-orange-900">
                  19. complain — жаловаться
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>complained</strong> about the noise. (complain +
                  ABOUT)
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-blue-400">
                <p className="text-sm font-semibold text-blue-900">
                  20. encourage — подбадривать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>encouraged</strong> me to try. (encourage + obj +
                  TO)
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="📋 Краткая памятка">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 mb-3 text-center text-lg">
              Reporting Verbs — 3 основные структуры
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                <h5 className="font-semibold text-green-900 mb-2 text-center">
                  Verb + TO
                </h5>
                <div className="space-y-1 text-sm">
                  <p>• promise</p>
                  <p>• agree</p>
                  <p>• offer</p>
                  <p>• refuse</p>
                  <p>• threaten</p>
                  <p>• claim</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-2 text-center">
                  Verb + -ING
                </h5>
                <div className="space-y-1 text-sm">
                  <p>• suggest</p>
                  <p>• recommend</p>
                  <p>• admit</p>
                  <p>• deny</p>
                  <p>• insist on</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                <h5 className="font-semibold text-purple-900 mb-2 text-center">
                  Verb + obj + TO
                </h5>
                <div className="space-y-1 text-sm">
                  <p>• advise</p>
                  <p>• warn</p>
                  <p>• ask</p>
                  <p>• beg</p>
                  <p>• urge</p>
                  <p>• encourage</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300 mt-4">
            <h4 className="font-bold text-red-900 mb-2 text-center">
              🚫 Главные ошибки:
            </h4>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • ❌ suggest <strong>TO GO</strong> → ✅ suggest{" "}
                <strong>GOING</strong>
              </li>
              <li>
                • ❌ advise <strong>TO SEE</strong> → ✅ advise{" "}
                <strong>ME TO SEE</strong>
              </li>
              <li>
                • ❌ promise <strong>HELPING</strong> → ✅ promise{" "}
                <strong>TO HELP</strong>
              </li>
              <li>
                • ❌ insist <strong>TO PAY</strong> → ✅ insist{" "}
                <strong>ON PAYING</strong>
              </li>
              <li>
                • ❌ deny <strong>TO STEAL</strong> → ✅ deny{" "}
                <strong>STEALING</strong>
              </li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  return null;
}
