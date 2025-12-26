"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PastParticiple({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="✨ Past Participle Clauses — Причастные обороты (-ed/V3)">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              Что такое Past Participle Clauses?
            </h2>
            <p className="text-sm text-zinc-700 mb-3">
              **Past Participle Clauses** (причастные обороты с -ed/V3) — это
              способ сделать речь элегантнее, заменяя пассивные конструкции и
              придаточные предложения на краткие причастные обороты.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2">
                  ❌ Длинно и сложно:
                </h4>
                <p className="text-sm mb-2">
                  The book <strong>which was written</strong> by Tolstoy is
                  famous.
                </p>
                <p className="text-sm">
                  <strong>Because it was built</strong> in 1900, the house is
                  old.
                </p>
                <p className="text-xs text-zinc-600 mt-2">
                  Много слов, пассив!
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-900 mb-2">
                  ✅ Кратко и элегантно:
                </h4>
                <p className="text-sm mb-2">
                  The book <strong>written</strong> by Tolstoy is famous.
                </p>
                <p className="text-sm">
                  <strong>Built</strong> in 1900, the house is old.
                </p>
                <p className="text-xs text-zinc-600 mt-2">
                  Компактно и красиво!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-300 mb-4">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">
                🎯 Главная особенность Past Participle:
              </h3>
              <p className="text-sm text-zinc-700 mb-2">
                Past Participle Clauses ВСЕГДА имеют **ПАССИВНОЕ** значение!
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  • <strong>Written</strong> by Tolstoy = которая БЫЛА НАПИСАНА
                  Толстым
                </p>
                <p>
                  • <strong>Built</strong> in 1900 = который БЫЛ ПОСТРОЕН в 1900
                </p>
                <p>
                  • <strong>Made</strong> of wood = которая СДЕЛАНА из дерева
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-300">
              <h4 className="font-bold text-amber-900 mb-3 text-center text-lg">
                💡 Ключевая формула
              </h4>
              <p className="text-sm text-zinc-700 text-center mb-2">
                Past Participle (-ed/V3) + дополнение, Subject + Main Verb
              </p>
              <p className="text-sm text-zinc-700 text-center">
                <strong>Важно:</strong> действие совершается НАД объектом
                (пассив!)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2 text-center">
                Описание
              </h4>
              <p className="text-sm text-center">
                The book <strong>written</strong> by him...
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                Книга, написанная им
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 text-center">
                Причина
              </h4>
              <p className="text-sm text-center">
                <strong>Broken</strong> by John, the vase...
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                Разбитая Джоном
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <h4 className="font-semibold text-green-900 mb-2 text-center">
                Время
              </h4>
              <p className="text-sm text-center">
                <strong>Finished</strong> in 2020...
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                Завершённый в 2020
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
        <Section title="📖 Функция 1: Описательные конструкции">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Даём дополнительную информацию (который БЫЛ...)
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Past Participle Clause заменяет относительное придаточное с
              пассивным значением (which/that + was/were + V3).
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <div className="bg-blue-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 The book <strong>which was written</strong> by Tolstoy is
                    famous.
                  </p>
                  <p className="text-sm text-blue-700">
                    💡 The book <strong>written</strong> by Tolstoy is famous.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Книга, написанная Толстым, известна
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <div className="bg-green-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 The house <strong>which was built</strong> in 1900 is
                    old.
                  </p>
                  <p className="text-sm text-green-700">
                    💡 The house <strong>built</strong> in 1900 is old.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Дом, построенный в 1900, старый
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <div className="bg-purple-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 The car <strong>which was stolen</strong> yesterday was
                    found.
                  </p>
                  <p className="text-sm text-purple-700">
                    💡 The car <strong>stolen</strong> yesterday was found.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Машина, украденная вчера, была найдена
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <div className="bg-orange-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 The letter <strong>which was sent</strong> last week
                    arrived today.
                  </p>
                  <p className="text-sm text-orange-700">
                    💡 The letter <strong>sent</strong> last week arrived today.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Письмо, отправленное на прошлой неделе, пришло сегодня
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-300">
            <h4 className="font-bold text-amber-900 mb-3">
              💬 В русском языке
            </h4>
            <p className="text-sm text-zinc-700 mb-2">
              Это страдательные причастия прошедшего времени!
            </p>
            <div className="space-y-2 text-sm">
              <p>
                • written → <strong>написанный</strong>
              </p>
              <p>
                • built → <strong>построенный</strong>
              </p>
              <p>
                • stolen → <strong>украденный</strong>
              </p>
              <p>
                • sent → <strong>отправленный</strong>
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
        <Section title="💡 Функция 2: Причина (вместо Because)">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              Объясняем ПРИЧИНУ с помощью Past Participle
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда объект подвергся какому-то действию (пассив), мы можем
              использовать Past Participle для объяснения причины.
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <p className="text-sm font-semibold mb-2">
                  Because it was broken → Broken
                </p>
                <div className="bg-green-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>Because it was broken</strong>, I couldn't use
                    it.
                  </p>
                  <p className="text-sm text-green-700">
                    💡 <strong>Broken</strong>, I couldn't use it.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Будучи сломанным, я не мог его использовать
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <p className="text-sm font-semibold mb-2">
                  Because it was damaged → Damaged
                </p>
                <div className="bg-blue-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>Because it was damaged</strong> in the accident,
                    the car was sold.
                  </p>
                  <p className="text-sm text-blue-700">
                    💡 <strong>Damaged</strong> in the accident, the car was
                    sold.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Повреждённая в аварии, машина была продана
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <p className="text-sm font-semibold mb-2">
                  Because he was tired → Tired
                </p>
                <div className="bg-purple-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>Because he was tired</strong>, he went to bed.
                  </p>
                  <p className="text-sm text-purple-700">
                    💡 <strong>Tired</strong>, he went to bed.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Уставший, он лёг спать (tired = прилагательное из причастия!)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <p className="text-sm font-semibold mb-2">
                  Because it was made of wood → Made of wood
                </p>
                <div className="bg-orange-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>Because it was made</strong> of wood, the table
                    was light.
                  </p>
                  <p className="text-sm text-orange-700">
                    💡 <strong>Made</strong> of wood, the table was light.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Сделанный из дерева, стол был лёгким
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-5 border-2 border-red-300">
            <h4 className="font-bold text-red-900 mb-3 text-center">
              ⚠️ ВАЖНОЕ ОТЛИЧИЕ от Present Participle!
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-green-900 mb-1">
                  Present Participle (-ING)
                </p>
                <p className="text-sm mb-1">
                  <strong>Breaking</strong> the vase, he apologized.
                </p>
                <p className="text-xs text-zinc-600">
                  ОН сломал вазу (активное действие)
                </p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-semibold text-purple-900 mb-1">
                  Past Participle (-ED/V3)
                </p>
                <p className="text-sm mb-1">
                  <strong>Broken</strong> by him, the vase...
                </p>
                <p className="text-xs text-zinc-600">
                  Ваза БЫЛА СЛОМАНА им (пассивное действие)
                </p>
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
        <Section title="⏰ Функция 3: Время и условие">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-xl font-bold text-purple-900 mb-4">
              Показываем КОГДА или ПРИ КАКОМ УСЛОВИИ
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Past Participle Clause может показывать время или условие, при
              котором что-то происходит.
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <p className="text-sm font-semibold mb-2">
                  When finished → Finished
                </p>
                <div className="bg-green-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>When finished</strong>, the project will be
                    presented.
                  </p>
                  <p className="text-sm text-green-700">
                    💡 <strong>Finished</strong>, the project will be presented.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Когда будет завершён, проект будет представлен
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <p className="text-sm font-semibold mb-2">
                  Once opened → Opened
                </p>
                <div className="bg-blue-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>Once opened</strong>, the bottle should be
                    refrigerated.
                  </p>
                  <p className="text-sm text-blue-700">
                    💡 <strong>Opened</strong>, the bottle should be
                    refrigerated.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  После открытия бутылка должна храниться в холодильнике
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <p className="text-sm font-semibold mb-2">
                  If left alone → Left alone
                </p>
                <div className="bg-purple-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>If left</strong> alone, the child will cry.
                  </p>
                  <p className="text-sm text-purple-700">
                    💡 <strong>Left</strong> alone, the child will cry.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Если оставить одного, ребёнок будет плакать
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <p className="text-sm font-semibold mb-2">
                  When heated → Heated
                </p>
                <div className="bg-orange-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>When heated</strong>, water turns into steam.
                  </p>
                  <p className="text-sm text-orange-700">
                    💡 <strong>Heated</strong>, water turns into steam.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  При нагревании вода превращается в пар
                </p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-5 border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 mb-3 text-center">
              📝 Позиция Past Participle Clause
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-green-900 mb-1">В начале</p>
                <p className="text-sm">
                  <strong>Written</strong> by Tolstoy, the book is famous.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  Причина, время, условие
                </p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-semibold text-orange-900 mb-1">
                  После существительного
                </p>
                <p className="text-sm">
                  The book <strong>written</strong> by Tolstoy...
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  Описание (который был...)
                </p>
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
        left: "",
        answers: [
          "The book written by Tolstoy is famous",
          "The book written by Tolstoy is famous.",
        ],
        right: "",
        explanation:
          'From: "The book which was written by Tolstoy..." → written',
      },
      {
        left: "",
        answers: [
          "The house built in 1900 is old",
          "The house built in 1900 is old.",
        ],
        right: "",
        explanation: 'From: "The house which was built in 1900..." → built',
      },
      {
        left: "",
        answers: ["Broken, I couldn't use it", "Broken, I couldn't use it."],
        right: "",
        explanation: 'From: "Because it was broken..." → Broken',
      },
      {
        left: "",
        answers: [
          "Made of wood, the table was light",
          "Made of wood, the table was light.",
        ],
        right: "",
        explanation: 'From: "Because it was made of wood..." → Made',
      },
      {
        left: "",
        answers: [
          "Finished, the project will be presented",
          "Finished, the project will be presented.",
        ],
        right: "",
        explanation: 'From: "When finished..." → Finished',
      },
      {
        left: "",
        answers: [
          "The car stolen yesterday was found",
          "The car stolen yesterday was found.",
        ],
        right: "",
        explanation: 'From: "The car which was stolen..." → stolen',
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Преобразуй предложения">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-300 mb-4">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              📝 → 💡 Преобразуй с помощью Past Participle Clause
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дано длинное предложение с пассивом. Замени на Past Participle
              Clause!
            </p>
            <p className="text-xs text-zinc-600">
              Не забудь: Past Participle (-ed/V3), пассивное значение
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ The book which was written by Tolstoy is famous.
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
                2️⃣ The house which was built in 1900 is old.
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
                3️⃣ Because it was broken, I couldn't use it.
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
                4️⃣ Because it was made of wood, the table was light.
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
                5️⃣ When finished, the project will be presented.
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
                6️⃣ The car which was stolen yesterday was found.
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

  if (step === 6) {
    return (
      <>
        <Section title="🔍 Регулярные и неправильные глаголы">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-xl font-bold text-cyan-900 mb-4">
              Формы Past Participle
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Past Participle имеет две формы: регулярную (-ed) и неправильную
              (V3).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-3 text-lg">
                  Регулярные глаголы (-ED)
                </h4>
                <div className="space-y-2 text-sm">
                  <p>
                    • build → <strong>built</strong>
                  </p>
                  <p>
                    • finish → <strong>finished</strong>
                  </p>
                  <p>
                    • damage → <strong>damaged</strong>
                  </p>
                  <p>
                    • paint → <strong>painted</strong>
                  </p>
                  <p>
                    • open → <strong>opened</strong>
                  </p>
                  <p>
                    • close → <strong>closed</strong>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-3 text-lg">
                  Неправильные глаголы (V3)
                </h4>
                <div className="space-y-2 text-sm">
                  <p>
                    • write → <strong>written</strong>
                  </p>
                  <p>
                    • break → <strong>broken</strong>
                  </p>
                  <p>
                    • steal → <strong>stolen</strong>
                  </p>
                  <p>
                    • make → <strong>made</strong>
                  </p>
                  <p>
                    • take → <strong>taken</strong>
                  </p>
                  <p>
                    • give → <strong>given</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <p className="text-sm font-semibold mb-2">
                  Примеры с регулярными глаголами:
                </p>
                <div className="space-y-1 text-sm">
                  <p>
                    The house <strong>built</strong> in 1900... (построенный)
                  </p>
                  <p>
                    <strong>Finished</strong> in 2020, the project...
                    (завершённый)
                  </p>
                  <p>
                    <strong>Damaged</strong> in the accident... (повреждённый)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <p className="text-sm font-semibold mb-2">
                  Примеры с неправильными глаголами:
                </p>
                <div className="space-y-1 text-sm">
                  <p>
                    The book <strong>written</strong> by him... (написанная)
                  </p>
                  <p>
                    <strong>Broken</strong> by John... (разбитая)
                  </p>
                  <p>
                    The car <strong>stolen</strong> yesterday... (украденная)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 7) {
    return (
      <>
        <Section title="📚 20 самых употребляемых Past Participles">
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">
              Глаголы для Past Participle Clauses
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border-l-4 border-green-400">
                <p className="text-sm font-semibold text-green-900">
                  1. written — написанный
                </p>
                <p className="text-xs text-zinc-600">
                  The book <strong>written</strong> by him...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-blue-400">
                <p className="text-sm font-semibold text-blue-900">
                  2. made — сделанный
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Made</strong> of wood...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-purple-400">
                <p className="text-sm font-semibold text-purple-900">
                  3. built — построенный
                </p>
                <p className="text-xs text-zinc-600">
                  The house <strong>built</strong> in 1900...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400">
                <p className="text-sm font-semibold text-orange-900">
                  4. broken — сломанный
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Broken</strong> by John...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-red-400">
                <p className="text-sm font-semibold text-red-900">
                  5. stolen — украденный
                </p>
                <p className="text-xs text-zinc-600">
                  The car <strong>stolen</strong> yesterday...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-teal-400">
                <p className="text-sm font-semibold text-teal-900">
                  6. taken — взятый
                </p>
                <p className="text-xs text-zinc-600">
                  The photo <strong>taken</strong> last year...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-cyan-400">
                <p className="text-sm font-semibold text-cyan-900">
                  7. given — данный
                </p>
                <p className="text-xs text-zinc-600">
                  The advice <strong>given</strong> to me...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-pink-400">
                <p className="text-sm font-semibold text-pink-900">
                  8. sent — отправленный
                </p>
                <p className="text-xs text-zinc-600">
                  The letter <strong>sent</strong> yesterday...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-lime-400">
                <p className="text-sm font-semibold text-lime-900">
                  9. finished — завершённый
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Finished</strong> in 2020...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-amber-400">
                <p className="text-sm font-semibold text-amber-900">
                  10. opened — открытый
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Opened</strong> last week...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-rose-400">
                <p className="text-sm font-semibold text-rose-900">
                  11. closed — закрытый
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Closed</strong> for repairs...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-sky-400">
                <p className="text-sm font-semibold text-sky-900">
                  12. damaged — повреждённый
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Damaged</strong> in the fire...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-violet-400">
                <p className="text-sm font-semibold text-violet-900">
                  13. painted — окрашенный
                </p>
                <p className="text-xs text-zinc-600">
                  The wall <strong>painted</strong> blue...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-emerald-400">
                <p className="text-sm font-semibold text-emerald-900">
                  14. sold — проданный
                </p>
                <p className="text-xs text-zinc-600">
                  The car <strong>sold</strong> yesterday...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-fuchsia-400">
                <p className="text-sm font-semibold text-fuchsia-900">
                  15. bought — купленный
                </p>
                <p className="text-xs text-zinc-600">
                  The house <strong>bought</strong> last year...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-slate-400">
                <p className="text-sm font-semibold text-slate-900">
                  16. found — найденный
                </p>
                <p className="text-xs text-zinc-600">
                  The keys <strong>found</strong> under the bed...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-stone-400">
                <p className="text-sm font-semibold text-stone-900">
                  17. lost — потерянный
                </p>
                <p className="text-xs text-zinc-600">
                  The wallet <strong>lost</strong> last week...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-zinc-400">
                <p className="text-sm font-semibold text-zinc-900">
                  18. created — созданный
                </p>
                <p className="text-xs text-zinc-600">
                  The painting <strong>created</strong> in 1950...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-neutral-400">
                <p className="text-sm font-semibold text-neutral-900">
                  19. designed — спроектированный
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Designed</strong> by a famous architect...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-gray-400">
                <p className="text-sm font-semibold text-gray-900">
                  20. invented — изобретённый
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Invented</strong> in the 19th century...
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 8) {
    return (
      <>
        <Section title="⚠️ Типичные ошибки с Past Participle">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-xl font-bold text-red-900 mb-4">
              Самые частые ошибки и как их избежать
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 1: Использовали -ING вместо -ED/V3
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ The book <strong>writing</strong> by Tolstoy...
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильная форма! Нужен Past Participle!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ The book <strong>written</strong> by Tolstoy...
                    </p>
                    <p className="text-xs text-zinc-600">
                      Past Participle (V3) для пассива!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 2: Неправильная форма V3
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ The car <strong>stealed</strong> yesterday...
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильная форма! Steal → stolen (не stealed!)
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ The car <strong>stolen</strong> yesterday...
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильная форма V3!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 3: Забыли про пассивное значение
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ <strong>Written</strong> the book, Tolstoy became
                      famous.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Толстой НЕ БЫЛ НАПИСАН! Он НАПИСАЛ (активное действие!)
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ <strong>Writing</strong> the book, Tolstoy became
                      famous.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Толстой ПИСАЛ (активное действие) → -ING!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 4: Оставили BE в причастном обороте
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ The book <strong>was written</strong> by Tolstoy...
                    </p>
                    <p className="text-xs text-zinc-600">
                      Оставили "was" — это НЕ Participle Clause!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ The book <strong>written</strong> by Tolstoy...
                    </p>
                    <p className="text-xs text-zinc-600">
                      Убираем BE, оставляем только V3!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 5: Перепутали Active и Passive
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ <strong>Broken</strong> the vase, he apologized.
                    </p>
                    <p className="text-xs text-zinc-600">
                      ОН сломал (активное) → нужен -ING!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ <strong>Breaking</strong> the vase, he apologized.
                    </p>
                    <p className="text-xs text-zinc-600">
                      ОН сломал (активное действие) → -ING!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-300">
            <h4 className="font-bold text-blue-900 mb-3">
              🔑 Как выбрать: -ING или -ED/V3?
            </h4>
            <div className="space-y-3 text-sm text-zinc-700">
              <p>
                • <strong>Задай вопрос:</strong> Кто/что ДЕЛАЕТ действие?
              </p>
              <p>
                • <strong>Если подлежащее ДЕЛАЕТ:</strong> используй -ING
                (активное)
              </p>
              <p>
                • <strong>Если НАД подлежащим делают:</strong> используй -ED/V3
                (пассивное)
              </p>
              <p className="mt-3 font-semibold text-blue-900">
                Пример: The man <strong>breaking</strong> the window was
                arrested. (Мужчина РАЗБИВАЕТ) vs The window{" "}
                <strong>broken</strong> by the man... (Окно БЫЛО РАЗБИТО)
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
        answers: [
          "The book written by Tolstoy is famous",
          "The book written by Tolstoy is famous.",
        ],
        right: "",
        explanation: 'Исправлено: "writing" → "written" (Past Participle!)',
      },
      {
        left: "",
        answers: [
          "The car stolen yesterday was found",
          "The car stolen yesterday was found.",
        ],
        right: "",
        explanation: 'Исправлено: "stealed" → "stolen" (правильная форма V3!)',
      },
      {
        left: "",
        answers: [
          "Writing the book, Tolstoy became famous",
          "Writing the book, Tolstoy became famous.",
        ],
        right: "",
        explanation:
          'Исправлено: "Written" → "Writing" (Толстой ПИСАЛ - активное действие!)',
      },
      {
        left: "",
        answers: [
          "The book written by Tolstoy is famous",
          "The book written by Tolstoy is famous.",
        ],
        right: "",
        explanation: 'Исправлено: убрали "was" → только "written"!',
      },
      {
        left: "",
        answers: [
          "Breaking the vase, he apologized",
          "Breaking the vase, he apologized.",
        ],
        right: "",
        explanation:
          'Исправлено: "Broken" → "Breaking" (ОН сломал - активное!)',
      },
      {
        left: "",
        answers: [
          "Made of wood, the table was light",
          "Made of wood, the table was light.",
        ],
        right: "",
        explanation: 'Исправлено: "Making" → "Made" (стол СДЕЛАН - пассивное!)',
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
              Каждое предложение содержит ОШИБКУ в Past Participle Clause.
              Напиши ПРАВИЛЬНЫЙ вариант полностью!
            </p>
            <p className="text-xs text-zinc-600">
              Проверяй: Past Participle (V3), пассивное значение, без BE
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                The book writing by Tolstoy is famous.
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
                The car stealed yesterday was found.
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
                Written the book, Tolstoy became famous.
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
                The book was written by Tolstoy is famous.
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
                Broken the vase, he apologized.
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
                Making of wood, the table was light.
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
          "The book written by Tolstoy is famous",
          "The book written by Tolstoy is famous.",
        ],
        right: "",
        explanation: "Книга, написанная Толстым, известна",
      },
      {
        left: "",
        answers: [
          "The house built in 1900 is old",
          "The house built in 1900 is old.",
        ],
        right: "",
        explanation: "Дом, построенный в 1900, старый",
      },
      {
        left: "",
        answers: [
          "Made of wood, the table was light",
          "Made of wood, the table was light.",
        ],
        right: "",
        explanation: "Сделанный из дерева, стол был лёгким",
      },
      {
        left: "",
        answers: ["Broken, I couldn't use it", "Broken, I couldn't use it."],
        right: "",
        explanation: "Будучи сломанным, я не мог его использовать",
      },
      {
        left: "",
        answers: [
          "The car stolen yesterday was found",
          "The car stolen yesterday was found.",
        ],
        right: "",
        explanation: "Машина, украденная вчера, была найдена",
      },
      {
        left: "",
        answers: [
          "Finished, the project will be presented",
          "Finished, the project will be presented.",
        ],
        right: "",
        explanation: "Завершённый, проект будет представлен",
      },
    ];

    return (
      <>
        <Section title="🇷🇺 Упражнение 3: Перевод с русского">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-300 mb-4">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              🇷🇺 → 🇬🇧 Переведи на английский с Past Participle
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дано предложение на русском языке со страдательным причастием.
              Переведи его на английский, используя Past Participle Clause!
            </p>
            <p className="text-xs text-zinc-600">
              Не забудь: Past Participle (-ed/V3), пассивное значение
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Книга, написанная Толстым, известна.
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
                2️⃣ Дом, построенный в 1900, старый.
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
                3️⃣ Сделанный из дерева, стол был лёгким.
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
                4️⃣ Будучи сломанным, я не мог его использовать.
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
                5️⃣ Машина, украденная вчера, была найдена.
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
                6️⃣ Завершённый, проект будет представлен.
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
        left: "1. The book",
        answers: ["written by Tolstoy"],
        right: "is famous.",
        explanation: "Описание (which was written)",
      },
      {
        left: "2.",
        answers: ["Made of wood"],
        right: ", the table was light.",
        explanation: "Причина (because it was made)",
      },
      {
        left: "3.",
        answers: ["Finished", "Finished in 2020"],
        right: ", the project will be presented.",
        explanation: "Время (when finished)",
      },
      {
        left: "4. The car",
        answers: ["stolen yesterday"],
        right: "was found.",
        explanation: "Описание (which was stolen)",
      },
      {
        left: "5.",
        answers: ["Broken"],
        right: ", I couldn't use it.",
        explanation: "Причина (because it was broken)",
      },
      {
        left: "6. The letter",
        answers: ["sent last week"],
        right: "arrived today.",
        explanation: "Описание (which was sent)",
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
              6 вопросов на **ВСЕ функции Past Participle Clauses**. Заполни
              пропуски!
            </p>
            <p className="text-sm font-semibold text-yellow-900">
              Цель: 5/6 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (6 вопросов)"
            instruction="Заполни пропуски, используя Past Participle Clause."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы освоили Past Participle Clauses! Теперь вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>✅ Использовать Past Participle (-ed/V3) для описания</li>
              <li>✅ Заменять пассивные конструкции на причастные обороты</li>
              <li>✅ Выражать причину (Broken..., I couldn't use it)</li>
              <li>
                ✅ Показывать время и условие (Finished..., it will be...)
              </li>
              <li>✅ Давать описания (The book written by Tolstoy...)</li>
              <li>
                ✅ Различать активное (-ING) и пассивное (-ED/V3) значение
              </li>
              <li>✅ Использовать регулярные и неправильные формы</li>
              <li>
                ✅ Избегать типичных ошибок (stealed, writing вместо written)
              </li>
              <li>✅ Делать речь элегантнее и компактнее!</li>
            </ul>
          </div>
        </Section>

        <Section title="📋 Краткая памятка">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 mb-3 text-center text-lg">
              Past Participle Clauses — Главные правила
            </h4>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-indigo-900 mb-2">Формула:</h5>
                <p className="text-center font-bold text-lg text-indigo-900">
                  Past Participle (-ed/V3) + дополнение
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-purple-900 mb-1">Описание</p>
                  <p className="text-sm">The book written by Tolstoy...</p>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-blue-900 mb-1">Причина</p>
                  <p className="text-sm">Broken, I couldn't use it.</p>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-green-900 mb-1">Время</p>
                  <p className="text-sm">Finished, it will be presented.</p>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-orange-900 mb-1">Условие</p>
                  <p className="text-sm">Left alone, the child will cry.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300 mt-4">
            <h4 className="font-bold text-red-900 mb-2 text-center">
              🔑 Главные правила:
            </h4>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • ✅ <strong>Past Participle (V3)</strong> — не -ING!
              </li>
              <li>
                • ✅ <strong>ПАССИВНОЕ значение</strong> — действие НАД
                объектом!
              </li>
              <li>
                • ✅ <strong>Без BE</strong> — не "was written", а просто
                "written"!
              </li>
              <li>
                • ✅ <strong>Правильная форма V3</strong> — stolen, не stealed!
              </li>
              <li>
                • ✅ <strong>-ING для активного</strong>,{" "}
                <strong>V3 для пассивного</strong>!
              </li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  return null;
}
