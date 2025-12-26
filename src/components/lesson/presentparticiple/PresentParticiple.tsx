"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PresentParticiple({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="✨ Present Participle Clauses — Причастные обороты (-ing)">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Что такое Present Participle Clauses?
            </h2>
            <p className="text-sm text-zinc-700 mb-3">
              **Present Participle Clauses** (причастные обороты с -ing) — это
              способ сделать речь короче и элегантнее, заменяя целые придаточные
              предложения одним словом с -ing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2">
                  ❌ Длинно и скучно:
                </h4>
                <p className="text-sm mb-2">
                  <strong>Because I was tired</strong>, I went to bed early.
                </p>
                <p className="text-sm">
                  I opened the door and I <strong>saw</strong> him.
                </p>
                <p className="text-xs text-zinc-600 mt-2">
                  2 предложения, много слов!
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2">
                  ✅ Кратко и элегантно:
                </h4>
                <p className="text-sm mb-2">
                  <strong>Being tired</strong>, I went to bed early.
                </p>
                <p className="text-sm">
                  <strong>Opening</strong> the door, I saw him.
                </p>
                <p className="text-xs text-zinc-600 mt-2">
                  Одно предложение, компактно!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-300 mb-4">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">
                🎯 5 главных функций Present Participle Clauses:
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  1. **Одновременные действия** — два действия происходят
                  одновременно
                </p>
                <p>
                  2. **Причина** — объясняем причину (вместо because/as/since)
                </p>
                <p>
                  3. **Время** — когда что-то произошло (вместо
                  when/while/after)
                </p>
                <p>
                  4. **Описание** — даём дополнительную информацию (который...)
                </p>
                <p>5. **Результат** — одно действие ведёт к другому</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-300">
              <h4 className="font-bold text-amber-900 mb-3 text-center text-lg">
                💡 Ключевая идея
              </h4>
              <p className="text-sm text-zinc-700 text-center">
                Participle Clause = Verb + -ING + остальное предложение
              </p>
              <p className="text-sm text-zinc-700 text-center mt-2">
                <strong>Важно:</strong> подлежащее у обоих действий должно быть
                ОДНО И ТО ЖЕ!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <h4 className="font-semibold text-green-900 mb-2 text-center">
                Одновременность
              </h4>
              <p className="text-sm text-center">
                <strong>Walking</strong> down the street, I saw John.
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                Шёл И увидел
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 text-center">
                Причина
              </h4>
              <p className="text-sm text-center">
                <strong>Being tired</strong>, I went home.
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                Потому что устал
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2 text-center">
                Время
              </h4>
              <p className="text-sm text-center">
                <strong>Arriving</strong> home, I made tea.
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                Когда пришёл
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
        <Section title="🔄 Функция 1: Одновременные действия">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Два действия происходят ОДНОВРЕМЕННО
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда два действия выполняются одним человеком одновременно, мы
              можем заменить одно из них на **-ing форму**.
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <p className="text-sm font-semibold mb-2">
                  Формула: Verb + -ing, Subject + Main Verb
                </p>
                <div className="bg-blue-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 I was walking down the street <strong>and I saw</strong>{" "}
                    John.
                  </p>
                  <p className="text-sm text-blue-700">
                    💡 <strong>Walking</strong> down the street, I saw John.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Шёл по улице И увидел Джона (одновременно)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <div className="bg-green-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 She was listening to music{" "}
                    <strong>and she was doing</strong> homework.
                  </p>
                  <p className="text-sm text-green-700">
                    💡 <strong>Listening to music</strong>, she was doing
                    homework.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Слушала музыку И делала ДЗ (одновременно)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <div className="bg-purple-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 He was sitting in the garden{" "}
                    <strong>and he was reading</strong> a book.
                  </p>
                  <p className="text-sm text-purple-700">
                    💡 <strong>Sitting in the garden</strong>, he was reading a
                    book.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Сидел в саду И читал книгу
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <div className="bg-orange-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 I was driving home <strong>and I heard</strong> the news.
                  </p>
                  <p className="text-sm text-orange-700">
                    💡 <strong>Driving home</strong>, I heard the news.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Ехал домой И услышал новости
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-300">
            <h4 className="font-bold text-amber-900 mb-3 text-center">
              ⚠️ ВАЖНОЕ ПРАВИЛО!
            </h4>
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ <strong>Walking</strong> down the street, my phone rang.
                </p>
                <p className="text-xs text-zinc-600 mb-3">
                  ОШИБКА! Телефон НЕ ходит по улице! Подлежащие РАЗНЫЕ!
                </p>
                <p className="text-sm text-green-700">
                  ✅ <strong>Walking</strong> down the street, I heard my phone
                  ring.
                </p>
                <p className="text-xs text-zinc-600">
                  Правильно! Я шёл И услышал — одно подлежащее (I)
                </p>
              </div>

              <div className="bg-amber-100 rounded p-3 border-2 border-amber-400">
                <p className="font-semibold text-amber-900 text-center">
                  Подлежащее у ОБОИХ действий должно быть ОДИНАКОВОЕ!
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
        <Section title="💡 Функция 2: Причина (вместо Because)">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              Объясняем ПРИЧИНУ с помощью -ing
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Participle Clause может заменять придаточные предложения причины
              (because/as/since).
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <p className="text-sm font-semibold mb-2">
                  Because I was tired → Being tired
                </p>
                <div className="bg-green-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>Because I was tired</strong>, I went to bed
                    early.
                  </p>
                  <p className="text-sm text-green-700">
                    💡 <strong>Being tired</strong>, I went to bed early.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Будучи уставшим, я лёг спать рано
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <p className="text-sm font-semibold mb-2">
                  Since I didn't have money → Not having money
                </p>
                <div className="bg-blue-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>Since I didn't have money</strong>, I couldn't
                    buy it.
                  </p>
                  <p className="text-sm text-blue-700">
                    💡 <strong>Not having money</strong>, I couldn't buy it.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Не имея денег, я не мог купить это
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <p className="text-sm font-semibold mb-2">
                  As she was feeling ill → Feeling ill
                </p>
                <div className="bg-purple-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>As she was feeling ill</strong>, she stayed home.
                  </p>
                  <p className="text-sm text-purple-700">
                    💡 <strong>Feeling ill</strong>, she stayed home.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Чувствуя себя плохо, она осталась дома
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <p className="text-sm font-semibold mb-2">
                  Because I knew him → Knowing him well
                </p>
                <div className="bg-orange-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>Because I knew him well</strong>, I could trust
                    him.
                  </p>
                  <p className="text-sm text-orange-700">
                    💡 <strong>Knowing him well</strong>, I could trust him.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Хорошо зная его, я мог ему доверять
                </p>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 rounded-lg p-5 border-2 border-cyan-300">
            <h4 className="font-bold text-cyan-900 mb-3">
              💬 Сравнение с русским
            </h4>
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                • <strong>В русском:</strong> "Будучи уставшим...", "Не имея
                денег...", "Чувствуя себя плохо..."
              </p>
              <p>
                • <strong>В английском:</strong> Being tired, Not having money,
                Feeling ill
              </p>
              <p className="mt-3 font-semibold text-cyan-900">
                Структура очень похожа! Это деепричастие в русском языке.
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
        <Section title="⏰ Функция 3: Время (вместо When/While/After)">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-xl font-bold text-purple-900 mb-4">
              Показываем КОГДА произошло действие
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Participle Clause может заменять временные союзы
              (when/while/after).
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <p className="text-sm font-semibold mb-2">
                  When I arrived → Arriving
                </p>
                <div className="bg-green-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>When I arrived</strong> at the station, I called
                    her.
                  </p>
                  <p className="text-sm text-green-700">
                    💡 <strong>Arriving</strong> at the station, I called her.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Прибыв на станцию, я позвонил ей
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <p className="text-sm font-semibold mb-2">
                  While I was waiting → Waiting
                </p>
                <div className="bg-blue-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>While I was waiting</strong> for the bus, I read
                    a book.
                  </p>
                  <p className="text-sm text-blue-700">
                    💡 <strong>Waiting</strong> for the bus, I read a book.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Ожидая автобус, я читал книгу
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <p className="text-sm font-semibold mb-2">
                  After finishing → Having finished
                </p>
                <div className="bg-purple-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>After I finished</strong> my work, I went home.
                  </p>
                  <p className="text-sm text-purple-700">
                    💡 <strong>Having finished</strong> my work, I went home.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Закончив работу, я пошёл домой (СНАЧАЛА закончил, ПОТОМ пошёл)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <p className="text-sm font-semibold mb-2">
                  When I opened → Opening
                </p>
                <div className="bg-orange-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 <strong>When I opened</strong> the door, I saw him.
                  </p>
                  <p className="text-sm text-orange-700">
                    💡 <strong>Opening</strong> the door, I saw him.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Открыв дверь, я увидел его
                </p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-5 border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 mb-3 text-center">
              🔑 Важное различие!
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-green-900 mb-1">Verb + -ING</p>
                <p className="text-sm mb-1">
                  <strong>Opening</strong> the door, I saw him.
                </p>
                <p className="text-xs text-zinc-600">
                  Одновременные или почти одновременные действия
                </p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-semibold text-purple-900 mb-1">
                  HAVING + V3
                </p>
                <p className="text-sm mb-1">
                  <strong>Having opened</strong> the door, I saw him.
                </p>
                <p className="text-xs text-zinc-600">
                  Одно действие ЗАВЕРШИЛОСЬ, потом началось второе
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
          "Walking down the street, I saw John",
          "Walking down the street, I saw John.",
        ],
        right: "",
        explanation:
          'From: "I was walking down the street and I saw John." → Walking',
      },
      {
        left: "",
        answers: [
          "Being tired, I went to bed early",
          "Being tired, I went to bed early.",
        ],
        right: "",
        explanation:
          'From: "Because I was tired, I went to bed early." → Being tired',
      },
      {
        left: "",
        answers: [
          "Arriving home, I made tea",
          "Arriving home, I made tea.",
          "Arriving at home, I made tea",
          "Arriving at home, I made tea.",
        ],
        right: "",
        explanation: 'From: "When I arrived home, I made tea." → Arriving',
      },
      {
        left: "",
        answers: [
          "Not having money, I couldn't buy it",
          "Not having money, I couldn't buy it.",
        ],
        right: "",
        explanation:
          "From: \"Since I didn't have money, I couldn't buy it.\" → Not having",
      },
      {
        left: "",
        answers: [
          "Listening to music, she was doing homework",
          "Listening to music, she was doing homework.",
        ],
        right: "",
        explanation:
          'From: "She was listening to music and doing homework." → Listening',
      },
      {
        left: "",
        answers: [
          "Opening the door, I saw him",
          "Opening the door, I saw him.",
        ],
        right: "",
        explanation: 'From: "When I opened the door, I saw him." → Opening',
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Преобразуй предложения">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-300 mb-4">
            <p className="font-bold text-green-900 mb-2 text-lg">
              📝 → 💡 Преобразуй с помощью Participle Clause (-ing)
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дано длинное предложение. Замени одну часть на Participle Clause!
            </p>
            <p className="text-xs text-zinc-600">
              Не забудь: одно подлежащее, глагол + -ing
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ I was walking down the street and I saw John.
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
                2️⃣ Because I was tired, I went to bed early.
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
                3️⃣ When I arrived home, I made tea.
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
                4️⃣ Since I didn't have money, I couldn't buy it.
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
                5️⃣ She was listening to music and she was doing homework.
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
                6️⃣ When I opened the door, I saw him.
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
        <Section title="📖 Функция 4: Описательные конструкции">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-xl font-bold text-cyan-900 mb-4">
              Даём дополнительную информацию (который...)
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Participle Clause может давать дополнительную информацию о
              существительном (похоже на относительное придаточное с who/which).
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <div className="bg-blue-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 The girl <strong>who is sitting</strong> over there is my
                    sister.
                  </p>
                  <p className="text-sm text-blue-700">
                    💡 The girl <strong>sitting</strong> over there is my
                    sister.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Девушка, сидящая там, — моя сестра
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <div className="bg-green-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 The man <strong>who is wearing</strong> a hat is my
                    father.
                  </p>
                  <p className="text-sm text-green-700">
                    💡 The man <strong>wearing</strong> a hat is my father.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Мужчина в шляпе — мой отец
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <div className="bg-purple-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 The students <strong>who are taking</strong> the exam are
                    nervous.
                  </p>
                  <p className="text-sm text-purple-700">
                    💡 The students <strong>taking</strong> the exam are
                    nervous.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Студенты, сдающие экзамен, нервничают
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <div className="bg-orange-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 Do you know the woman <strong>who is talking</strong> to
                    John?
                  </p>
                  <p className="text-sm text-orange-700">
                    💡 Do you know the woman <strong>talking</strong> to John?
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Ты знаешь женщину, разговаривающую с Джоном?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-300">
            <h4 className="font-bold text-amber-900 mb-3">
              💬 В русском языке
            </h4>
            <p className="text-sm text-zinc-700 mb-2">
              Это те же самые причастия, что и в русском!
            </p>
            <div className="space-y-2 text-sm">
              <p>
                • sitting → <strong>сидящий</strong>
              </p>
              <p>
                • wearing → <strong>носящий</strong>
              </p>
              <p>
                • taking → <strong>сдающий</strong>
              </p>
              <p>
                • talking → <strong>говорящий</strong>
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
        <Section title="🎯 Функция 5: Результат и последовательность">
          <div className="bg-rose-50 rounded-lg p-6 border-2 border-rose-300 mb-4">
            <h3 className="text-xl font-bold text-rose-900 mb-4">
              Одно действие ведёт к другому
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Participle Clause может показывать, что одно действие приводит к
              результату или является следствием.
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <div className="bg-red-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 He fell asleep <strong>and he missed</strong> the train.
                  </p>
                  <p className="text-sm text-red-700">
                    💡 He fell asleep, <strong>missing</strong> the train.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Он заснул, пропустив поезд (результат)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <div className="bg-orange-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 She worked hard <strong>and she passed</strong> the exam.
                  </p>
                  <p className="text-sm text-orange-700">
                    💡 She worked hard, <strong>passing</strong> the exam.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Она упорно работала, сдав экзамен
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                <div className="bg-yellow-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 He left the house <strong>and he forgot</strong> his
                    keys.
                  </p>
                  <p className="text-sm text-yellow-700">
                    💡 He left the house, <strong>forgetting</strong> his keys.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Он вышел из дома, забыв ключи
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <div className="bg-green-50 rounded p-3 mb-2">
                  <p className="text-sm mb-1">
                    📝 She ran out of the room <strong>and she slammed</strong>{" "}
                    the door.
                  </p>
                  <p className="text-sm text-green-700">
                    💡 She ran out of the room, <strong>slamming</strong> the
                    door.
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  Она выбежала из комнаты, хлопнув дверью
                </p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-5 border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 mb-3 text-center">
              📝 Позиция Participle Clause
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-green-900 mb-1">В начале</p>
                <p className="text-sm">
                  <strong>Walking</strong> down the street, I saw John.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  Причина, время, одновременность
                </p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-semibold text-orange-900 mb-1">В конце</p>
                <p className="text-sm">
                  I saw John, <strong>walking</strong> down the street.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  Результат, дополнительная информация
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
        <Section title="⚠️ Типичные ошибки с Present Participle">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-xl font-bold text-red-900 mb-4">
              Самые частые ошибки и как их избежать
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 1: Разные подлежащие
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ <strong>Walking</strong> down the street, my phone
                      rang.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Телефон НЕ ходит! Разные подлежащие!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ <strong>Walking</strong> down the street, I heard my
                      phone ring.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я шёл И услышал — одно подлежащее!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 2: Забыли запятую
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ Walking down the street I saw John.
                    </p>
                    <p className="text-xs text-zinc-600">Нет запятой!</p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ Walking down the street<strong>,</strong> I saw John.
                    </p>
                    <p className="text-xs text-zinc-600">
                      После Participle Clause НУЖНА запятая!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 3: Неправильная форма -ing
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ <strong>Opend</strong> the door, I saw him.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильная форма! Нужна -ing!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ <strong>Opening</strong> the door, I saw him.
                    </p>
                    <p className="text-xs text-zinc-600">Verb + -ING форма!</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 4: Использовали TO вместо -ING
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ <strong>To walk</strong> down the street, I saw John.
                    </p>
                    <p className="text-xs text-zinc-600">
                      TO + infinitive НЕ используется!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ <strong>Walking</strong> down the street, I saw John.
                    </p>
                    <p className="text-xs text-zinc-600">-ING форма!</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 5: Неправильное отрицание
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ <strong>Didn't having</strong> money, I couldn't buy
                      it.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильное отрицание!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ <strong>Not having</strong> money, I couldn't buy it.
                    </p>
                    <p className="text-xs text-zinc-600">
                      NOT + -ING (без didn't/don't!)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-300">
            <h4 className="font-bold text-blue-900 mb-3">
              🆚 Сравнение с русским
            </h4>
            <div className="space-y-3 text-sm text-zinc-700">
              <p>
                • <strong>В русском:</strong> деепричастия (идя, сидя, открыв)
              </p>
              <p>
                • <strong>В английском:</strong> Verb + -ING (walking, sitting,
                opening)
              </p>
              <p className="mt-3 font-semibold text-blue-900">
                Логика очень похожа! НО в английском ОБЯЗАТЕЛЬНО одно
                подлежащее!
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
          "Walking down the street, I heard my phone ring",
          "Walking down the street, I heard my phone ring.",
        ],
        right: "",
        explanation:
          'Исправлено: "my phone rang" → "I heard my phone ring" (одно подлежащее I)',
      },
      {
        left: "",
        answers: [
          "Walking down the street, I saw John",
          "Walking down the street, I saw John.",
        ],
        right: "",
        explanation: "Исправлено: добавили запятую после Participle Clause",
      },
      {
        left: "",
        answers: [
          "Opening the door, I saw him",
          "Opening the door, I saw him.",
        ],
        right: "",
        explanation: 'Исправлено: "Opend" → "Opening" (Verb + -ING!)',
      },
      {
        left: "",
        answers: [
          "Walking down the street, I saw John",
          "Walking down the street, I saw John.",
        ],
        right: "",
        explanation: 'Исправлено: "To walk" → "Walking" (-ING, не TO!)',
      },
      {
        left: "",
        answers: [
          "Not having money, I couldn't buy it",
          "Not having money, I couldn't buy it.",
        ],
        right: "",
        explanation:
          'Исправлено: "Didn\'t having" → "Not having" (NOT + -ING!)',
      },
      {
        left: "",
        answers: [
          "Arriving home, I made tea",
          "Arriving home, I made tea.",
          "Arriving at home, I made tea",
          "Arriving at home, I made tea.",
        ],
        right: "",
        explanation: 'Исправлено: "arrived" → "Arriving" (нужна -ING форма!)',
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
              Каждое предложение содержит ОШИБКУ в Participle Clause. Напиши
              ПРАВИЛЬНЫЙ вариант полностью!
            </p>
            <p className="text-xs text-zinc-600">
              Проверяй: одно подлежащее, -ING форма, запятая, NOT (не didn't)
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                Walking down the street, my phone rang.
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
                Walking down the street I saw John.
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
                Opend the door, I saw him.
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
                To walk down the street, I saw John.
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
                Didn't having money, I couldn't buy it.
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
                When I arrived home, I made tea.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант (используй Participle Clause):
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
          "Walking down the street, I saw John",
          "Walking down the street, I saw John.",
        ],
        right: "",
        explanation: "Идя по улице, я увидел Джона",
      },
      {
        left: "",
        answers: [
          "Being tired, I went to bed early",
          "Being tired, I went to bed early.",
        ],
        right: "",
        explanation: "Будучи уставшим, я лёг спать рано",
      },
      {
        left: "",
        answers: [
          "Not having money, I couldn't buy it",
          "Not having money, I couldn't buy it.",
        ],
        right: "",
        explanation: "Не имея денег, я не мог купить это",
      },
      {
        left: "",
        answers: [
          "Opening the door, I saw him",
          "Opening the door, I saw him.",
        ],
        right: "",
        explanation: "Открыв дверь, я увидел его",
      },
      {
        left: "",
        answers: [
          "Feeling ill, she stayed home",
          "Feeling ill, she stayed home.",
        ],
        right: "",
        explanation: "Чувствуя себя плохо, она осталась дома",
      },
      {
        left: "",
        answers: [
          "Listening to music, she was doing homework",
          "Listening to music, she was doing homework.",
        ],
        right: "",
        explanation: "Слушая музыку, она делала домашнее задание",
      },
    ];

    return (
      <>
        <Section title="🇷🇺 Упражнение 3: Перевод с русского">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-300 mb-4">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              🇷🇺 → 🇬🇧 Переведи на английский с Participle Clause
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дано предложение на русском языке с деепричастием. Переведи его на
              английский, используя Participle Clause!
            </p>
            <p className="text-xs text-zinc-600">
              Не забудь: Verb + -ING + , + main clause
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Идя по улице, я увидел Джона.
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
                2️⃣ Будучи уставшим, я лёг спать рано.
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
                3️⃣ Не имея денег, я не мог купить это.
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
                4️⃣ Открыв дверь, я увидел его.
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
                5️⃣ Чувствуя себя плохо, она осталась дома.
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
                6️⃣ Слушая музыку, она делала домашнее задание.
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
        left: "1.",
        answers: ["Walking down the street"],
        right: ", I saw John.",
        explanation: "Одновременные действия",
      },
      {
        left: "2.",
        answers: ["Being tired"],
        right: ", I went home.",
        explanation: "Причина (because I was tired)",
      },
      {
        left: "3.",
        answers: ["Arriving home", "Arriving at home"],
        right: ", I made tea.",
        explanation: "Время (when I arrived)",
      },
      {
        left: "4.",
        answers: ["Not having money"],
        right: ", I couldn't buy it.",
        explanation: "Отрицательная причина (NOT + -ING)",
      },
      {
        left: "5. The girl",
        answers: ["sitting over there"],
        right: "is my sister.",
        explanation: "Описание (who is sitting)",
      },
      {
        left: "6. He fell asleep,",
        answers: ["missing the train", "missing his train"],
        right: "",
        explanation: "Результат",
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
              6 вопросов на **ВСЕ функции Present Participle Clauses**. Заполни
              пропуски!
            </p>
            <p className="text-sm font-semibold text-yellow-900">
              Цель: 5/6 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (6 вопросов)"
            instruction="Заполни пропуски, используя Present Participle Clause."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы освоили Present Participle Clauses! Теперь вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>✅ Объединять предложения с помощью -ING форм</li>
              <li>
                ✅ Показывать одновременные действия (Walking..., I saw...)
              </li>
              <li>✅ Выражать причину (Being tired..., I went home)</li>
              <li>✅ Показывать время (Arriving home..., I made tea)</li>
              <li>✅ Давать описания (The girl sitting there is my sister)</li>
              <li>
                ✅ Показывать результат (He fell asleep, missing the train)
              </li>
              <li>✅ Использовать отрицание (Not having money...)</li>
              <li>✅ Избегать типичных ошибок (разные подлежащие, запятая)</li>
              <li>✅ Делать речь короче и элегантнее!</li>
            </ul>
          </div>
        </Section>

        <Section title="📚 Vocabulary — Полезные глаголы для Participle Clauses">
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">
              20 глаголов, которые часто используются в Participle Clauses
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border-l-4 border-green-400">
                <p className="text-sm font-semibold text-green-900">
                  1. walk — идти, ходить
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Walking</strong> down the street...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-blue-400">
                <p className="text-sm font-semibold text-blue-900">
                  2. sit — сидеть
                </p>
                <p className="text-xs text-zinc-600">
                  The girl <strong>sitting</strong> there...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-purple-400">
                <p className="text-sm font-semibold text-purple-900">
                  3. open — открывать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Opening</strong> the door...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400">
                <p className="text-sm font-semibold text-orange-900">
                  4. arrive — прибывать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Arriving</strong> home...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-red-400">
                <p className="text-sm font-semibold text-red-900">
                  5. feel — чувствовать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Feeling</strong> ill...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-teal-400">
                <p className="text-sm font-semibold text-teal-900">
                  6. listen — слушать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Listening</strong> to music...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-cyan-400">
                <p className="text-sm font-semibold text-cyan-900">
                  7. know — знать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Knowing</strong> him well...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-pink-400">
                <p className="text-sm font-semibold text-pink-900">
                  8. drive — ехать (на машине)
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Driving</strong> home...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-lime-400">
                <p className="text-sm font-semibold text-lime-900">
                  9. wait — ждать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Waiting</strong> for the bus...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-amber-400">
                <p className="text-sm font-semibold text-amber-900">
                  10. work — работать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Working</strong> hard...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-rose-400">
                <p className="text-sm font-semibold text-rose-900">
                  11. forget — забывать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Forgetting</strong> his keys...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-sky-400">
                <p className="text-sm font-semibold text-sky-900">
                  12. run — бежать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Running</strong> out...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-violet-400">
                <p className="text-sm font-semibold text-violet-900">
                  13. take — брать, сдавать
                </p>
                <p className="text-xs text-zinc-600">
                  Students <strong>taking</strong> the exam...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-emerald-400">
                <p className="text-sm font-semibold text-emerald-900">
                  14. talk — говорить
                </p>
                <p className="text-xs text-zinc-600">
                  The woman <strong>talking</strong> to John...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-fuchsia-400">
                <p className="text-sm font-semibold text-fuchsia-900">
                  15. wear — носить (одежду)
                </p>
                <p className="text-xs text-zinc-600">
                  The man <strong>wearing</strong> a hat...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-slate-400">
                <p className="text-sm font-semibold text-slate-900">
                  16. read — читать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Reading</strong> a book...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-stone-400">
                <p className="text-sm font-semibold text-stone-900">
                  17. leave — уходить, покидать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Leaving</strong> the house...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-zinc-400">
                <p className="text-sm font-semibold text-zinc-900">
                  18. finish — заканчивать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Finishing</strong> my work...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-neutral-400">
                <p className="text-sm font-semibold text-neutral-900">
                  19. miss — пропускать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Missing</strong> the train...
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-gray-400">
                <p className="text-sm font-semibold text-gray-900">
                  20. slam — хлопать
                </p>
                <p className="text-xs text-zinc-600">
                  <strong>Slamming</strong> the door...
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="📋 Краткая памятка">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 mb-3 text-center text-lg">
              Present Participle Clauses — Главные правила
            </h4>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-indigo-900 mb-2">Формула:</h5>
                <p className="text-center font-bold text-lg text-indigo-900">
                  Verb + -ING + , + Main Clause
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-green-900 mb-1">
                    Одновременность
                  </p>
                  <p className="text-sm">Walking..., I saw John.</p>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-blue-900 mb-1">Причина</p>
                  <p className="text-sm">Being tired..., I went home.</p>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-purple-900 mb-1">Время</p>
                  <p className="text-sm">Arriving home..., I made tea.</p>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-orange-900 mb-1">Описание</p>
                  <p className="text-sm">The girl sitting there...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300 mt-4">
            <h4 className="font-bold text-red-900 mb-2 text-center">
              🚫 Главные правила:
            </h4>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • ✅ <strong>Одно подлежащее</strong> у обоих действий!
              </li>
              <li>
                • ✅ <strong>Запятая</strong> после Participle Clause!
              </li>
              <li>
                • ✅ <strong>Verb + -ING</strong> форма (не TO + infinitive!)
              </li>
              <li>
                • ✅ <strong>NOT + -ING</strong> для отрицания (не didn't
                having!)
              </li>
              <li>
                • ✅ <strong>Having + V3</strong> для завершённого действия
              </li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  return null;
}
