"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Quantifiers2({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📊 Quantifiers: Advanced">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Quantifiers — Количественные определители
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              **Quantifiers** = слова, которые показывают **количество**! В этой
              теме мы изучим **продвинутые** количественные определители: plenty
              of, a great deal of, heaps of, loads of, tons of и другие!
            </p>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg p-5 border-2 border-cyan-400 mb-4">
              <h3 className="font-bold text-cyan-900 mb-3 text-lg text-center">
                🔑 Основные категории
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900">
                    Universal (оба типа)
                  </p>
                  <p className="text-xs text-zinc-600">
                    a lot of, lots of, plenty of
                  </p>
                  <p className="text-xs text-zinc-600 italic mt-1">
                    С countable И uncountable!
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900">
                    Formal (формальные)
                  </p>
                  <p className="text-xs text-zinc-600">
                    a great deal of, a large amount of
                  </p>
                  <p className="text-xs text-zinc-600 italic mt-1">
                    Для официальных текстов!
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-purple-900">
                    Informal (разговорные)
                  </p>
                  <p className="text-xs text-zinc-600">
                    loads of, heaps of, tons of
                  </p>
                  <p className="text-xs text-zinc-600 italic mt-1">
                    Для неформального общения!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                ⚠️ Критическое различие
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900">
                    Countable (исчисляемые)
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    books, people, cars, ideas
                  </p>
                  <p className="text-sm italic">
                    <strong className="text-blue-700">Lots of</strong> books
                  </p>
                  <p className="text-sm italic">
                    <strong className="text-blue-700">Loads of</strong> people
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900">
                    Uncountable (неисчисляемые)
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    water, money, time, information
                  </p>
                  <p className="text-sm italic">
                    <strong className="text-green-700">Plenty of</strong> time
                  </p>
                  <p className="text-sm italic">
                    <strong className="text-green-700">A great deal of</strong>{" "}
                    money
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
              <h4 className="font-bold text-amber-900 mb-3 text-center">
                💡 В этой теме мы изучим:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
                <div>
                  <p>✅ Universal quantifiers (a lot of, plenty of)</p>
                  <p>✅ Formal quantifiers (a great deal of)</p>
                  <p>✅ Informal quantifiers (loads of, heaps of, tons of)</p>
                </div>
                <div>
                  <p>✅ Различия countable vs uncountable</p>
                  <p>✅ 50+ примеров использования</p>
                  <p>✅ Типичные ошибки русскоговорящих</p>
                </div>
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
        <Section title="🌍 Universal Quantifiers">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              A LOT OF / LOTS OF / PLENTY OF — Универсальные!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти quantifiers можно использовать **с любыми** существительными —
              как исчисляемыми, так и неисчисляемыми!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  1. A LOT OF / LOTS OF — много
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    A lot of = Lots of (одинаковое значение!)
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    Можно использовать в **любых** предложениях!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="font-bold text-blue-900 mb-2 text-sm">
                      С Countable (мн. число)
                    </p>
                    <p className="text-sm italic">
                      I have <strong>a lot of</strong> friends.
                    </p>
                    <p className="text-xs text-zinc-600">У меня много друзей</p>
                    <p className="text-sm italic mt-2">
                      She knows <strong>lots of</strong> people.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она знает много людей
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="font-bold text-green-900 mb-2 text-sm">
                      С Uncountable
                    </p>
                    <p className="text-sm italic">
                      We need <strong>a lot of</strong> time.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Нам нужно много времени
                    </p>
                    <p className="text-sm italic mt-2">
                      He has <strong>lots of</strong> money.
                    </p>
                    <p className="text-xs text-zinc-600">У него много денег</p>
                  </div>
                </div>

                <div className="bg-white rounded p-3 mt-3">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    <p>A lot of books</p>
                    <p>Lots of information</p>
                    <p>A lot of water</p>
                    <p>Lots of ideas</p>
                    <p>A lot of questions</p>
                    <p>Lots of advice</p>
                    <p>A lot of cars</p>
                    <p>Lots of work</p>
                    <p>A lot of problems</p>
                    <p>Lots of experience</p>
                    <p>A lot of tourists</p>
                    <p>Lots of traffic</p>
                    <p>A lot of opportunities</p>
                    <p>Lots of evidence</p>
                    <p>A lot of students</p>
                    <p>Lots of furniture</p>
                    <p>A lot of mistakes</p>
                    <p>Lots of luggage</p>
                    <p>A lot of customers</p>
                    <p>Lots of equipment</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  2. PLENTY OF — более чем достаточно
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-purple-900 mb-2">
                    Plenty of = more than enough!
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    Не просто "много", а "**достаточно** и даже **больше**"!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="font-bold text-blue-900 mb-2 text-sm">
                      С Countable
                    </p>
                    <p className="text-sm italic">
                      We have <strong>plenty of</strong> chairs.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У нас достаточно стульев (и даже больше)
                    </p>
                    <p className="text-sm italic mt-2">
                      There are <strong>plenty of</strong> options.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Есть достаточно вариантов
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="font-bold text-green-900 mb-2 text-sm">
                      С Uncountable
                    </p>
                    <p className="text-sm italic">
                      Don't worry, we have <strong>plenty of</strong> time.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Не волнуйся, у нас достаточно времени
                    </p>
                    <p className="text-sm italic mt-2">
                      She has <strong>plenty of</strong> experience.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У неё достаточно опыта
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded p-3 mt-3">
                  <p className="font-bold text-purple-900 mb-2">15 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    <p>Plenty of space</p>
                    <p>Plenty of opportunities</p>
                    <p>Plenty of food</p>
                    <p>Plenty of reasons</p>
                    <p>Plenty of money</p>
                    <p>Plenty of evidence</p>
                    <p>Plenty of room</p>
                    <p>Plenty of examples</p>
                    <p>Plenty of water</p>
                    <p>Plenty of support</p>
                    <p>Plenty of energy</p>
                    <p>Plenty of volunteers</p>
                    <p>Plenty of information</p>
                    <p>Plenty of ideas</p>
                    <p>Plenty of time</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Ключевое различие
                </h4>
                <div className="space-y-2 text-sm text-zinc-700">
                  <p>
                    <strong>A lot of / Lots of</strong> = просто "много"
                  </p>
                  <p>
                    <strong>Plenty of</strong> = "достаточно и даже больше"
                    (более оптимистично!)
                  </p>
                  <p className="text-xs text-zinc-600 mt-2">
                    💡 Все три работают с countable И uncountable!
                  </p>
                </div>
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
        <Section title="🎩 Formal Quantifiers">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Формальные количественные определители
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти quantifiers используются в **официальных** текстах, научных
              статьях, деловой переписке и формальной речи!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  A GREAT DEAL OF — очень много (только Uncountable!)
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-red-900 mb-2">
                    ⚠️ ТОЛЬКО с Uncountable!
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    НЕ используй с countable существительными!
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">15 примеров</p>
                  <div className="space-y-1">
                    <p className="text-sm italic">
                      He spent{" "}
                      <strong className="text-blue-700">a great deal of</strong>{" "}
                      time on this project.
                    </p>
                    <p className="text-sm italic">
                      The company invested{" "}
                      <strong className="text-blue-700">a great deal of</strong>{" "}
                      money.
                    </p>
                    <p className="text-sm italic">
                      She has{" "}
                      <strong className="text-blue-700">a great deal of</strong>{" "}
                      experience.
                    </p>
                    <p className="text-sm italic">
                      This requires{" "}
                      <strong className="text-blue-700">a great deal of</strong>{" "}
                      effort.
                    </p>
                    <p className="text-sm italic">
                      We need{" "}
                      <strong className="text-blue-700">a great deal of</strong>{" "}
                      patience.
                    </p>
                    <p className="text-sm italic">
                      There was{" "}
                      <strong className="text-blue-700">a great deal of</strong>{" "}
                      evidence.
                    </p>
                    <p className="text-sm italic">
                      He showed{" "}
                      <strong className="text-blue-700">a great deal of</strong>{" "}
                      courage.
                    </p>
                    <p className="text-sm italic">
                      It caused{" "}
                      <strong className="text-blue-700">a great deal of</strong>{" "}
                      damage.
                    </p>
                    <p className="text-sm italic">
                      She gave{" "}
                      <strong className="text-blue-700">a great deal of</strong>{" "}
                      attention.
                    </p>
                    <p className="text-sm italic">
                      We faced{" "}
                      <strong className="text-blue-700">a great deal of</strong>{" "}
                      opposition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  A LARGE AMOUNT OF / A LARGE NUMBER OF
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="font-bold text-green-900 mb-2">
                      A LARGE AMOUNT OF
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      ТОЛЬКО с Uncountable!
                    </p>
                    <p className="text-sm italic">
                      A large amount of <strong>money</strong>
                    </p>
                    <p className="text-sm italic">
                      A large amount of <strong>information</strong>
                    </p>
                    <p className="text-sm italic">
                      A large amount of <strong>data</strong>
                    </p>
                    <p className="text-sm italic">
                      A large amount of <strong>work</strong>
                    </p>
                    <p className="text-sm italic">
                      A large amount of <strong>equipment</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-bold text-blue-900 mb-2">
                      A LARGE NUMBER OF
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      ТОЛЬКО с Countable (мн. число)!
                    </p>
                    <p className="text-sm italic">
                      A large number of <strong>people</strong>
                    </p>
                    <p className="text-sm italic">
                      A large number of <strong>students</strong>
                    </p>
                    <p className="text-sm italic">
                      A large number of <strong>companies</strong>
                    </p>
                    <p className="text-sm italic">
                      A large number of <strong>participants</strong>
                    </p>
                    <p className="text-sm italic">
                      A large number of <strong>applicants</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">
                  ⚠️ Критическая ошибка!
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ A great deal of{" "}
                      <strong className="text-red-700">people</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильно! People = countable!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ A large number of{" "}
                      <strong className="text-green-700">people</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! People = countable!
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

  if (step === 4) {
    return (
      <>
        <Section title="💬 Informal Quantifiers">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300 mb-4">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              LOADS OF / HEAPS OF / TONS OF — Разговорные!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти quantifiers используются в **неформальной** речи и означают
              "**очень много**"! Они работают с countable И uncountable!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  LOADS OF — куча, масса (очень разговорное!)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="font-bold text-blue-900 mb-2 text-sm">
                      С Countable
                    </p>
                    <p className="text-sm italic">
                      I've got <strong>loads of</strong> friends.
                    </p>
                    <p className="text-xs text-zinc-600">У меня куча друзей</p>
                    <p className="text-sm italic mt-2">
                      She has <strong>loads of</strong> books.
                    </p>
                    <p className="text-xs text-zinc-600">У неё куча книг</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-bold text-green-900 mb-2 text-sm">
                      С Uncountable
                    </p>
                    <p className="text-sm italic">
                      We have <strong>loads of</strong> time.
                    </p>
                    <p className="text-xs text-zinc-600">У нас куча времени</p>
                    <p className="text-sm italic mt-2">
                      He's got <strong>loads of</strong> money.
                    </p>
                    <p className="text-xs text-zinc-600">У него куча денег</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  HEAPS OF — горы, куча (британский английский)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">10 примеров</p>
                  <div className="space-y-1">
                    <p className="text-sm italic">
                      There are{" "}
                      <strong className="text-green-700">heaps of</strong>{" "}
                      things to do.
                    </p>
                    <p className="text-sm italic">
                      I've got{" "}
                      <strong className="text-green-700">heaps of</strong> work.
                    </p>
                    <p className="text-sm italic">
                      She has{" "}
                      <strong className="text-green-700">heaps of</strong>{" "}
                      experience.
                    </p>
                    <p className="text-sm italic">
                      We have{" "}
                      <strong className="text-green-700">heaps of</strong> time.
                    </p>
                    <p className="text-sm italic">
                      He knows{" "}
                      <strong className="text-green-700">heaps of</strong>{" "}
                      people.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  TONS OF — тонны, масса (американский английский)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">10 примеров</p>
                  <div className="space-y-1">
                    <p className="text-sm italic">
                      I've got{" "}
                      <strong className="text-purple-700">tons of</strong>{" "}
                      homework.
                    </p>
                    <p className="text-sm italic">
                      She has{" "}
                      <strong className="text-purple-700">tons of</strong>{" "}
                      energy.
                    </p>
                    <p className="text-sm italic">
                      We need{" "}
                      <strong className="text-purple-700">tons of</strong>{" "}
                      supplies.
                    </p>
                    <p className="text-sm italic">
                      There are{" "}
                      <strong className="text-purple-700">tons of</strong>{" "}
                      options.
                    </p>
                    <p className="text-sm italic">
                      He has{" "}
                      <strong className="text-purple-700">tons of</strong>{" "}
                      ideas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Когда использовать?
                </h4>
                <div className="space-y-2 text-sm text-zinc-700">
                  <p>
                    <strong>Loads of / Heaps of / Tons of</strong> = очень
                    разговорные!
                  </p>
                  <p>
                    ✅ Используй с друзьями, в неформальной обстановке, в чатах
                  </p>
                  <p>
                    ❌ НЕ используй в официальных письмах, деловой переписке,
                    научных статьях
                  </p>
                  <p className="text-xs text-zinc-600 mt-2">
                    💡 Все три работают с countable И uncountable!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 5) {
    const items: FillItem[] = [
      {
        left: "She has",
        answers: ["a great deal of", "a lot of", "lots of", "plenty of"],
        right: "experience.",
        explanation:
          "Experience = uncountable → можно использовать a great deal of / a lot of / lots of / plenty of",
      },
      {
        left: "We need",
        answers: ["a large number of", "a lot of", "lots of", "loads of"],
        right: "volunteers.",
        explanation:
          "Volunteers = countable → a large number of / a lot of / lots of / loads of",
      },
      {
        left: "There's",
        answers: ["plenty of", "a lot of", "lots of", "loads of"],
        right: "time.",
        explanation:
          "Time = uncountable → plenty of / a lot of / lots of / loads of",
      },
      {
        left: "I have",
        answers: ["tons of", "loads of", "heaps of", "a lot of", "lots of"],
        right: "homework.",
        explanation:
          "Homework = uncountable → tons of / loads of / heaps of / a lot of / lots of",
      },
      {
        left: "He knows",
        answers: ["a lot of", "lots of", "loads of", "heaps of", "tons of"],
        right: "people.",
        explanation:
          "People = countable → a lot of / lots of / loads of / heaps of / tons of",
      },
      {
        left: "The company invested",
        answers: ["a great deal of", "a large amount of"],
        right: "money.",
        explanation:
          "Money = uncountable + formal → a great deal of / a large amount of",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение: Quantifiers">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 border-2 border-blue-400 mb-4">
            <p className="font-bold text-blue-900 mb-2 text-lg">
              🎯 Вставь подходящий quantifier!
            </p>
            <p className="text-sm text-zinc-700">
              Используй правильный quantifier в зависимости от типа
              существительного (countable / uncountable) и стиля (formal /
              informal)!
            </p>
          </div>

          <CheckableExercise
            title="Quantifiers — 6 вопросов"
            instruction="Вставь подходящий quantifier."
            items={items}
          />
        </Section>
      </>
    );
  }

  if (step === 6) {
    return (
      <>
        <Section title="⚠️ Типичные ошибки">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              10 критических ошибок с Quantifiers
            </h3>

            <div className="space-y-3">
              {[
                {
                  title: "Ошибка 1: A great deal of + countable",
                  wrong: "A great deal of people",
                  correct: "A large number of people / A lot of people",
                  rule: "A great deal of ТОЛЬКО с uncountable!",
                },
                {
                  title: "Ошибка 2: A large amount of + countable",
                  wrong: "A large amount of students",
                  correct: "A large number of students",
                  rule: "A large amount of ТОЛЬКО с uncountable!",
                },
                {
                  title: "Ошибка 3: A large number of + uncountable",
                  wrong: "A large number of money",
                  correct: "A large amount of money / A great deal of money",
                  rule: "A large number of ТОЛЬКО с countable!",
                },
                {
                  title: "Ошибка 4: Informal quantifiers в официальных текстах",
                  wrong: "The company has loads of clients. (в деловом отчёте)",
                  correct: "The company has a large number of clients.",
                  rule: "Loads of / Heaps of / Tons of — только для неформальной речи!",
                },
                {
                  title: "Ошибка 5: Забывают OF после quantifier",
                  wrong: "I have plenty time.",
                  correct: "I have plenty OF time.",
                  rule: "Всегда используй OF после quantifier!",
                },
                {
                  title: "Ошибка 6: A lot + uncountable без OF",
                  wrong: "She has a lot money.",
                  correct: "She has a lot OF money.",
                  rule: "A lot / Lots всегда с OF!",
                },
                {
                  title:
                    "Ошибка 7: Formal quantifiers в разговорной речи (перебор)",
                  wrong: "I have a great deal of friends. (разговор с другом)",
                  correct:
                    "I have a lot of friends. / I have loads of friends.",
                  rule: "A great deal of — слишком формально для разговорной речи!",
                },
                {
                  title: "Ошибка 8: Much вместо A lot of в утверждениях",
                  wrong: "She has much money.",
                  correct: "She has a lot of money. / She has lots of money.",
                  rule: "Much используется в вопросах и отрицаниях, в утверждениях — a lot of!",
                },
                {
                  title: "Ошибка 9: Смешивают countable и uncountable",
                  wrong: "I need many information.",
                  correct:
                    "I need a lot of information. / I need much information.",
                  rule: "Information = uncountable! Many ТОЛЬКО с countable!",
                },
                {
                  title: "Ошибка 10: Забывают про OF в Plenty",
                  wrong: "We have plenty money.",
                  correct: "We have plenty OF money.",
                  rule: "Plenty всегда с OF!",
                },
              ].map((error, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded p-4 border-l-4 border-red-500"
                >
                  <p className="font-bold text-red-900 mb-2">
                    ❌ {error.title}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-red-100 rounded p-2">
                      <p className="text-sm">❌ {error.wrong}</p>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">✅ {error.correct}</p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-600 mt-2">💡 {error.rule}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 7) {
    const items: FillItem[] = [
      {
        left: "We have",
        answers: ["plenty of", "a lot of", "lots of"],
        right: "time.",
        explanation: "Time = uncountable",
      },
      {
        left: "He has",
        answers: ["a great deal of", "a large amount of"],
        right: "experience. (formal)",
        explanation: "Experience = uncountable + formal context",
      },
      {
        left: "There are",
        answers: ["loads of", "tons of", "heaps of", "a lot of", "lots of"],
        right: "things to do. (informal)",
        explanation: "Things = countable + informal",
      },
      {
        left: "She knows",
        answers: ["a large number of", "a lot of", "lots of"],
        right: "people.",
        explanation: "People = countable",
      },
      {
        left: "I've got",
        answers: ["tons of", "loads of", "heaps of", "lots of", "a lot of"],
        right: "homework.",
        explanation: "Homework = uncountable",
      },
      {
        left: "The research requires",
        answers: ["a great deal of", "a large amount of"],
        right: "data. (formal)",
        explanation: "Data = uncountable + formal",
      },
    ];

    return (
      <>
        <Section title="🎯 Финальный тест + Шпаргалка">
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              Финальный тест: Quantifiers
            </h3>
          </div>

          <CheckableExercise
            title="Финальный тест — 6 вопросов"
            instruction="Вставь правильный quantifier."
            items={items}
          />

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 mt-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📋 Шпаргалка: Quantifiers
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">
                  1️⃣ Universal (оба типа)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>A lot of / Lots of / Plenty of</strong> — с countable
                  И uncountable
                </p>
                <p className="text-xs text-zinc-600 italic">
                  A lot of books / Plenty of time
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">
                  2️⃣ Formal (формальные)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>A great deal of</strong> — ТОЛЬКО uncountable
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>A large amount of</strong> — ТОЛЬКО uncountable
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>A large number of</strong> — ТОЛЬКО countable
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-purple-900 mb-2">
                  3️⃣ Informal (разговорные)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Loads of / Heaps of / Tons of</strong> — с countable И
                  uncountable
                </p>
                <p className="text-xs text-zinc-600 italic">
                  Loads of friends / Tons of homework
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded p-4">
                <p className="font-bold text-red-900 mb-2 text-center">
                  🔑 Золотое правило
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  Всегда используй <strong>OF</strong> после quantifier!
                </p>
                <p className="text-xs text-zinc-600 text-center mt-1">
                  A lot OF, Plenty OF, Loads OF, etc.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return <div>Creating step {step}...</div>;
}
