"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ParticipleClauses({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="🎯 Participle Clauses — ПОЛНОЕ СРАВНЕНИЕ">
          <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-lg p-6 border-2 border-orange-400">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">
              Present vs Past Participle — Главное различие!
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              Это финальная и самая важная тема! Здесь мы объединим всё, что
              изучили, и научимся **БЕЗОШИБОЧНО** выбирать между **-ING** и
              **-ED/V3**, а также освоим продвинутые формы **HAVING + V3** и
              **BEING + V3**!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h3 className="text-xl font-bold text-green-900 mb-3 text-center">
                  ✅ Present Participle (-ING)
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-green-900">
                    🔑 АКТИВНОЕ значение
                  </p>
                  <p className="text-zinc-700">
                    Подлежащее **САМО ДЕЛАЕТ** действие
                  </p>
                  <div className="bg-white rounded p-3 mt-2">
                    <p className="text-sm mb-1">
                      <strong className="text-green-700">Walking</strong> down
                      the street, I saw John.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я ШЁЛ (сам делал) → активное!
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-green-700">Breaking</strong> the
                      vase, he apologized.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Он СЛОМАЛ (сам делал) → активное!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h3 className="text-xl font-bold text-purple-900 mb-3 text-center">
                  ✅ Past Participle (-ED/V3)
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-purple-900">
                    🔑 ПАССИВНОЕ значение
                  </p>
                  <p className="text-zinc-700">
                    **НАД** подлежащим совершают действие
                  </p>
                  <div className="bg-white rounded p-3 mt-2">
                    <p className="text-sm mb-1">
                      The book{" "}
                      <strong className="text-purple-700">written</strong> by
                      Tolstoy...
                    </p>
                    <p className="text-xs text-zinc-600">
                      Книга БЫЛА НАПИСАНА (пассив) → -ED/V3!
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-purple-700">Broken</strong> by
                      him, the vase...
                    </p>
                    <p className="text-xs text-zinc-600">
                      Ваза БЫЛА СЛОМАНА (пассив) → -ED/V3!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-400">
              <h3 className="font-bold text-blue-900 mb-3 text-lg text-center">
                🎯 ЗОЛОТОЕ ПРАВИЛО выбора!
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <p className="text-center font-semibold text-lg">
                  Задай вопрос: <strong>"Кто ДЕЛАЕТ действие?"</strong>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  <div className="bg-green-100 rounded p-3 border-2 border-green-500">
                    <p className="font-semibold text-green-900 mb-1">
                      → Подлежащее ДЕЛАЕТ?
                    </p>
                    <p className="text-sm">
                      Используй <strong>-ING</strong>
                    </p>
                  </div>
                  <div className="bg-purple-100 rounded p-3 border-2 border-purple-500">
                    <p className="font-semibold text-purple-900 mb-1">
                      → НАД подлежащим делают?
                    </p>
                    <p className="text-sm">
                      Используй <strong>-ED/V3</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <h4 className="font-semibold text-green-900 mb-2 text-center">
                -ING (Активное)
              </h4>
              <p className="text-sm text-center">
                <strong>Seeing</strong> him, I waved.
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                Я УВИДЕЛ его
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2 text-center">
                -ED/V3 (Пассивное)
              </h4>
              <p className="text-sm text-center">
                <strong>Seen</strong> by him, I waved.
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                УВИДЕННЫЙ им, я помахал
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2 text-center">
                Вопрос
              </h4>
              <p className="text-sm text-center">Кто УВИДЕЛ? → Я! (-ING)</p>
              <p className="text-sm text-center mt-1">
                Кого УВИДЕЛИ? → Меня! (-ED/V3)
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
        <Section title="🔥 20 ПАРНЫХ примеров: -ING vs -ED/V3">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4 text-center">
              Сравни ОДИН глагол в ДВУХ формах!
            </h3>
            <p className="text-sm text-zinc-700 mb-3 text-center">
              Каждый пример показывает, как ОДИН и ТОТ ЖЕ глагол меняет смысл с
              -ING на -ED/V3!
            </p>

            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 mb-1">
                    1. BREAK (ломать)
                  </p>
                  <p className="text-sm mb-1">
                    <strong className="text-green-700">Breaking</strong> the
                    vase, he apologized.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Он СЛОМАЛ (сам сломал) → активное
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-900 mb-1">
                    1. BREAK (ломать)
                  </p>
                  <p className="text-sm mb-1">
                    <strong className="text-purple-700">Broken</strong> by him,
                    the vase was expensive.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Ваза БЫЛА СЛОМАНА (пассив) → пассивное
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 mb-1">
                    2. WRITE (писать)
                  </p>
                  <p className="text-sm mb-1">
                    <strong className="text-green-700">Writing</strong> the
                    book, Tolstoy became famous.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Толстой ПИСАЛ (сам писал) → активное
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-900 mb-1">
                    2. WRITE (писать)
                  </p>
                  <p className="text-sm mb-1">
                    The book{" "}
                    <strong className="text-purple-700">written</strong> by
                    Tolstoy is famous.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Книга БЫЛА НАПИСАНА (пассив) → пассивное
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 mb-1">
                    3. SEE (видеть)
                  </p>
                  <p className="text-sm mb-1">
                    <strong className="text-green-700">Seeing</strong> him, I
                    waved.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я УВИДЕЛ его (сам увидел) → активное
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-900 mb-1">
                    3. SEE (видеть)
                  </p>
                  <p className="text-sm mb-1">
                    <strong className="text-purple-700">Seen</strong> by many
                    people, the actor...
                  </p>
                  <p className="text-xs text-zinc-600">
                    Актёр БЫЛ УВИДЕН многими (пассив) → пассивное
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 mb-1">
                    4. HEAR (слышать)
                  </p>
                  <p className="text-sm mb-1">
                    <strong className="text-green-700">Hearing</strong> the
                    news, I was shocked.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я УСЛЫШАЛ новости (сам услышал) → активное
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-900 mb-1">
                    4. HEAR (слышать)
                  </p>
                  <p className="text-sm mb-1">
                    The sound <strong className="text-purple-700">heard</strong>{" "}
                    by everyone...
                  </p>
                  <p className="text-xs text-zinc-600">
                    Звук БЫЛ УСЛЫШАН всеми (пассив) → пассивное
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 mb-1">
                    5. OPEN (открывать)
                  </p>
                  <p className="text-sm mb-1">
                    <strong className="text-green-700">Opening</strong> the
                    door, I saw him.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я ОТКРЫЛ дверь (сам открыл) → активное
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-900 mb-1">
                    5. OPEN (открывать)
                  </p>
                  <p className="text-sm mb-1">
                    <strong className="text-purple-700">Opened</strong> last
                    week, the shop...
                  </p>
                  <p className="text-xs text-zinc-600">
                    Магазин БЫЛ ОТКРЫТ (пассив) → пассивное
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
            <h4 className="font-bold text-amber-900 mb-3 text-center text-lg">
              💡 Видишь паттерн?
            </h4>
            <div className="space-y-2 text-sm text-zinc-700">
              <p className="text-center">
                • <strong>-ING:</strong> Подлежащее — ДЕЯТЕЛЬ (он ломает, пишет,
                видит)
              </p>
              <p className="text-center">
                • <strong>-ED/V3:</strong> Подлежащее — ОБЪЕКТ (его ломают,
                пишут, видят)
              </p>
              <p className="text-center mt-3 font-semibold text-amber-900">
                Это фундаментальная разница! Запомни её раз и навсегда! 🔥
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
        <Section title="🚀 Продвинутая форма: HAVING + V3">
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              HAVING + V3 — Завершённое действие ДО главного
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда одно действие **полностью завершилось** ПЕРЕД началом
              второго, мы используем **HAVING + V3** (Perfect Participle).
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-400 mb-4">
              <h4 className="font-bold text-blue-900 mb-3">
                📌 Формула HAVING + V3:
              </h4>
              <p className="text-center font-bold text-lg mb-3">
                HAVING + V3 + объект, Subject + Main Verb
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    📝 <strong>After he finished</strong> his work, he went
                    home.
                  </p>
                  <p className="text-sm text-blue-700">
                    💡 <strong>Having finished</strong> his work, he went home.
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    СНАЧАЛА закончил работу (полностью!), ПОТОМ пошёл домой
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    📝 <strong>After I read</strong> the book, I returned it.
                  </p>
                  <p className="text-sm text-blue-700">
                    💡 <strong>Having read</strong> the book, I returned it.
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    СНАЧАЛА прочитал (полностью!), ПОТОМ вернул
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    📝 <strong>After she ate</strong> dinner, she watched TV.
                  </p>
                  <p className="text-sm text-blue-700">
                    💡 <strong>Having eaten</strong> dinner, she watched TV.
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    СНАЧАЛА поела (полностью!), ПОТОМ смотрела TV
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-5 border-2 border-red-300">
              <h4 className="font-bold text-red-900 mb-3">
                🆚 HAVING + V3 vs -ING — В чём разница?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3 border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 mb-1">
                    Verb + -ING
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Opening</strong> the door, I saw him.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Открываю И вижу (одновременно или почти одновременно)
                  </p>
                </div>

                <div className="bg-white rounded p-3 border-l-4 border-indigo-500">
                  <p className="font-semibold text-indigo-900 mb-1">
                    HAVING + V3
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Having opened</strong> the door, I saw him.
                  </p>
                  <p className="text-xs text-zinc-600">
                    СНАЧАЛА открыл (полностью!), ПОТОМ увидел (чёткая
                    последовательность)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold mb-2">
                6. HAVING lived (прожив)
              </p>
              <p className="text-sm">
                <strong>Having lived</strong> in London for 10 years, I know it
                well.
              </p>
              <p className="text-xs text-zinc-600">
                Прожив в Лондоне 10 лет (это завершённый опыт), я знаю его
                хорошо
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
              <p className="text-sm font-semibold mb-2">
                7. HAVING studied (изучив)
              </p>
              <p className="text-sm">
                <strong>Having studied</strong> medicine, she became a doctor.
              </p>
              <p className="text-xs text-zinc-600">
                Изучив медицину (полностью завершила обучение), она стала врачом
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
              <p className="text-sm font-semibold mb-2">
                8. HAVING worked (проработав)
              </p>
              <p className="text-sm">
                <strong>Having worked</strong> all day, he was exhausted.
              </p>
              <p className="text-xs text-zinc-600">
                Проработав весь день (завершённое действие), он был измотан
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
        <Section title="💎 Продвинутая форма: BEING + V3">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              BEING + V3 — Пассивное действие В ПРОЦЕССЕ
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда действие **пассивное** (НАД объектом делают что-то) И
              происходит **одновременно** с главным действием, мы используем
              **BEING + V3**.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-5 border-2 border-pink-400 mb-4">
              <h4 className="font-bold text-pink-900 mb-3">
                📌 Формула BEING + V3:
              </h4>
              <p className="text-center font-bold text-lg mb-3">
                BEING + V3, Subject + Main Verb
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    📝 <strong>Because it is built</strong> of wood, the house
                    is warm.
                  </p>
                  <p className="text-sm text-pink-700">
                    💡 <strong>Being built</strong> of wood, the house is warm.
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    Будучи построенным из дерева (пассив + состояние), дом
                    тёплый
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    📝 <strong>Because he is tired</strong>, he went to bed.
                  </p>
                  <p className="text-sm text-pink-700">
                    💡 <strong>Being tired</strong>, he went to bed.
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    Будучи уставшим (состояние), он лёг спать
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    📝 <strong>As it was written</strong> in 1950, the book...
                  </p>
                  <p className="text-sm text-pink-700">
                    💡 <strong>Being written</strong> in 1950, the book...
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    Будучи написанной в 1950 (пассив), книга...
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-300">
              <h4 className="font-bold text-amber-900 mb-3">
                🔑 Когда использовать BEING + V3?
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  1. **Причина с пассивом:** Being built of stone... (т.к.
                  построен из камня)
                </p>
                <p>
                  2. **Состояние:** Being tired... (будучи уставшим), Being
                  ill... (будучи больным)
                </p>
                <p>
                  3. **Характеристика:** Being a doctor... (будучи врачом),
                  Being young... (будучи молодым)
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
              <p className="text-sm font-semibold mb-2">
                9. BEING located (будучи расположенным)
              </p>
              <p className="text-sm">
                <strong>Being located</strong> near the sea, the town is
                popular.
              </p>
              <p className="text-xs text-zinc-600">
                Будучи расположенным у моря, город популярен
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-pink-400">
              <p className="text-sm font-semibold mb-2">
                10. BEING made (будучи сделанным)
              </p>
              <p className="text-sm">
                <strong>Being made</strong> of plastic, it's cheap.
              </p>
              <p className="text-xs text-zinc-600">
                Будучи сделанным из пластика, оно дешёвое
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-rose-400">
              <p className="text-sm font-semibold mb-2">
                11. BEING a student (будучи студентом)
              </p>
              <p className="text-sm">
                <strong>Being a student</strong>, I get discounts.
              </p>
              <p className="text-xs text-zinc-600">
                Будучи студентом, я получаю скидки
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 5) {
    return (
      <>
        <Section title="🎯 Продвинутая форма: HAVING BEEN + V3">
          <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-2xl font-bold text-cyan-900 mb-4">
              HAVING BEEN + V3 — Пассивное действие, ЗАВЕРШЁННОЕ до главного
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Это **МАКСИМАЛЬНО** продвинутая форма! **HAVING BEEN + V3**
              комбинирует Perfect (завершённое действие) И Passive (пассивное
              значение).
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border-2 border-blue-400 mb-4">
              <h4 className="font-bold text-blue-900 mb-3 text-lg">
                📌 Формула HAVING BEEN + V3:
              </h4>
              <p className="text-center font-bold text-lg mb-3">
                HAVING BEEN + V3, Subject + Main Verb
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    📝 <strong>After it had been repaired</strong>, the car ran
                    well.
                  </p>
                  <p className="text-sm text-blue-700">
                    💡 <strong>Having been repaired</strong>, the car ran well.
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    ПОСЛЕ ТОГО КАК машину отремонтировали (пассив + завершённое
                    действие), она хорошо ехала
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    📝 <strong>After he had been told</strong> the news, he
                    left.
                  </p>
                  <p className="text-sm text-blue-700">
                    💡 <strong>Having been told</strong> the news, he left.
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    ПОСЛЕ ТОГО КАК ему сообщили новости (пассив + завершённое),
                    он ушёл
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    📝 <strong>After it had been published</strong>, the book
                    became famous.
                  </p>
                  <p className="text-sm text-blue-700">
                    💡 <strong>Having been published</strong>, the book became
                    famous.
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    ПОСЛЕ ПУБЛИКАЦИИ (пассив + завершённое действие), книга
                    стала известной
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-5 border-2 border-yellow-400">
              <h4 className="font-bold text-yellow-900 mb-3 text-center">
                🔥 ВСЕ 4 формы — ПОЛНАЯ КАРТИНА!
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-green-900 mb-1">
                    1. Verb + -ING
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Opening</strong> the door...
                  </p>
                  <p className="text-xs text-zinc-600">
                    Активное, одновременное
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-purple-900 mb-1">
                    2. V3 (Past Participle)
                  </p>
                  <p className="text-sm mb-1">
                    The door <strong>opened</strong>...
                  </p>
                  <p className="text-xs text-zinc-600">
                    Пассивное, одновременное
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-indigo-900 mb-1">
                    3. HAVING + V3
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Having opened</strong> the door...
                  </p>
                  <p className="text-xs text-zinc-600">
                    Активное, ЗАВЕРШЁННОЕ до главного
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-cyan-900 mb-1">
                    4. HAVING BEEN + V3
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Having been opened</strong>...
                  </p>
                  <p className="text-xs text-zinc-600">
                    Пассивное, ЗАВЕРШЁННОЕ до главного
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 6) {
    const items: FillItem[] = [
      {
        left: "",
        answers: ["Breaking", "breaking"],
        right: "",
        explanation: "Он СЛОМАЛ вазу (сам делал) → активное действие → -ING!",
      },
      {
        left: "",
        answers: ["written", "Written"],
        right: "",
        explanation: "Книга БЫЛА НАПИСАНА Толстым (пассив) → Past Participle!",
      },
      {
        left: "",
        answers: ["Seeing", "seeing"],
        right: "",
        explanation: "Я УВИДЕЛ его (сам делал) → активное действие → -ING!",
      },
      {
        left: "",
        answers: ["stolen", "Stolen"],
        right: "",
        explanation: "Машина БЫЛА УКРАДЕНА (пассив) → Past Participle!",
      },
      {
        left: "",
        answers: ["Having finished", "having finished"],
        right: "",
        explanation:
          "СНАЧАЛА закончил работу (полностью!), ПОТОМ пошёл → HAVING + V3!",
      },
      {
        left: "",
        answers: ["Being tired", "being tired"],
        right: "",
        explanation: "Будучи уставшим (состояние) → BEING + V3!",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Выбери правильную форму">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-5 border-2 border-orange-400 mb-4">
            <p className="font-bold text-orange-900 mb-2 text-lg">
              🎯 Вставь правильную форму причастия!
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Выбери между -ING, -ED/V3, HAVING + V3, BEING + V3. Задай вопрос:
              "Кто ДЕЛАЕТ действие?"
            </p>
            <p className="text-xs text-zinc-600">
              Не забудь: активное → -ING, пассивное → -ED/V3
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ ___________ (break) the vase, he apologized.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Подсказка: Он СЛОМАЛ вазу (сам делал) — активное или пассивное?
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
                2️⃣ The book ___________ (write) by Tolstoy is famous.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Подсказка: Книга БЫЛА НАПИСАНА — активное или пассивное?
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
                3️⃣ ___________ (see) him, I waved.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Подсказка: Я УВИДЕЛ его — активное или пассивное?
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
                4️⃣ The car ___________ (steal) yesterday was found.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Подсказка: Машина БЫЛА УКРАДЕНА — активное или пассивное?
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
                5️⃣ ___________ (finish) his work, he went home.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Подсказка: СНАЧАЛА закончил работу (полностью!), ПОТОМ пошёл —
                используй HAVING!
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
                6️⃣ ___________ (be) tired, he went to bed.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Подсказка: Будучи уставшим (состояние) — используй BEING!
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

  if (step === 7) {
    const items: FillItem[] = [
      {
        left: "",
        answers: [
          "Breaking the vase, he apologized",
          "Breaking the vase, he apologized.",
        ],
        right: "",
        explanation:
          'Исправлено: "Broken" → "Breaking" (ОН сломал - активное действие!)',
      },
      {
        left: "",
        answers: [
          "The book written by Tolstoy is famous",
          "The book written by Tolstoy is famous.",
        ],
        right: "",
        explanation:
          'Исправлено: "writing" → "written" (книга БЫЛА НАПИСАНА - пассив!)',
      },
      {
        left: "",
        answers: ["Seeing him, I waved", "Seeing him, I waved."],
        right: "",
        explanation:
          'Исправлено: "Seen" → "Seeing" (Я УВИДЕЛ - активное действие!)',
      },
      {
        left: "",
        answers: [
          "Having finished his work, he went home",
          "Having finished his work, he went home.",
        ],
        right: "",
        explanation:
          'Исправлено: "Finishing" → "Having finished" (СНАЧАЛА закончил полностью, ПОТОМ пошёл!)',
      },
      {
        left: "",
        answers: [
          "Being tired, he went to bed",
          "Being tired, he went to bed.",
        ],
        right: "",
        explanation:
          'Исправлено: "tired" → "Being tired" (нужна форма BEING для состояния!)',
      },
      {
        left: "",
        answers: [
          "The car stolen yesterday was found",
          "The car stolen yesterday was found.",
        ],
        right: "",
        explanation:
          'Исправлено: "stealing" → "stolen" (машина БЫЛА УКРАДЕНА - пассив!)',
      },
    ];

    return (
      <>
        <Section title="❌ Упражнение 2: Исправь КРИТИЧЕСКИЕ ошибки">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
            <p className="font-bold text-red-900 mb-2 text-lg">
              ❌ → ✅ Найди ошибку в выборе формы!
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Каждое предложение содержит КРИТИЧЕСКУЮ ошибку в выборе между -ING
              и -ED/V3 или продвинутыми формами. Напиши ПРАВИЛЬНЫЙ вариант!
            </p>
            <p className="text-xs text-zinc-600">
              Проверяй: активное/пассивное, одновременное/завершённое
            </p>
          </div>

          <div className="space-y-4">
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
                items={[items[0]]}
                wideInputs
              />
            </div>

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
                items={[items[1]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">Seen him, I waved.</p>
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
                Finishing his work, he went home.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант (используй HAVING!):
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
                Tired, he went to bed.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант (используй BEING!):
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
                The car stealing yesterday was found.
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

  if (step === 8) {
    const items: FillItem[] = [
      {
        left: "",
        answers: [
          "Breaking the vase, he apologized",
          "Breaking the vase, he apologized.",
        ],
        right: "",
        explanation: "Сломав вазу, он извинился (он СЛОМАЛ - активное)",
      },
      {
        left: "",
        answers: [
          "The book written by Tolstoy is famous",
          "The book written by Tolstoy is famous.",
        ],
        right: "",
        explanation:
          "Книга, написанная Толстым, известна (БЫЛА НАПИСАНА - пассив)",
      },
      {
        left: "",
        answers: [
          "Having finished his work, he went home",
          "Having finished his work, he went home.",
        ],
        right: "",
        explanation:
          "Закончив работу, он пошёл домой (СНАЧАЛА закончил полностью, ПОТОМ пошёл)",
      },
      {
        left: "",
        answers: ["Seeing him, I waved", "Seeing him, I waved."],
        right: "",
        explanation: "Увидев его, я помахал (я УВИДЕЛ - активное)",
      },
      {
        left: "",
        answers: [
          "Being tired, he went to bed",
          "Being tired, he went to bed.",
        ],
        right: "",
        explanation: "Будучи уставшим, он лёг спать (состояние)",
      },
      {
        left: "",
        answers: [
          "The car stolen yesterday was found",
          "The car stolen yesterday was found.",
        ],
        right: "",
        explanation:
          "Машина, украденная вчера, была найдена (БЫЛА УКРАДЕНА - пассив)",
      },
    ];

    return (
      <>
        <Section title="🇷🇺 Упражнение 3: Перевод с русского — МАСТЕР-УРОВЕНЬ">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-400 mb-4">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              🇷🇺 → 🇬🇧 Переведи ПРАВИЛЬНО выбирая форму!
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дано предложение на русском. Переведи его, ПРАВИЛЬНО выбрав между
              -ING, -ED/V3, HAVING + V3, BEING + V3!
            </p>
            <p className="text-xs text-zinc-600">
              Это финальная проверка! Докажи, что ты МАСТЕР Participle Clauses!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Сломав вазу, он извинился.
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
                2️⃣ Книга, написанная Толстым, известна.
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
                3️⃣ Закончив работу, он пошёл домой.
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
                4️⃣ Увидев его, я помахал.
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
                5️⃣ Будучи уставшим, он лёг спать.
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
                6️⃣ Машина, украденная вчера, была найдена.
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

  if (step === 9) {
    return (
      <>
        <Section title="⚠️ 10 КРИТИЧЕСКИХ ошибок, которые делают ВСЕ">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-400 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4 text-center">
              Типичные ошибки с Participle Clauses
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 1: Перепутали Active и Passive
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ <strong>Written</strong> the book, Tolstoy became famous.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Толстой НЕ БЫЛ НАПИСАН! Он САМ ПИСАЛ!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ <strong>Writing</strong> the book, Tolstoy became famous.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 2: Забыли про HAVING для завершённого действия
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ <strong>Finishing</strong> his work, he went home.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Нет чёткой последовательности! СНАЧАЛА закончил, ПОТОМ
                    пошёл!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ <strong>Having finished</strong> his work, he went home.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 3: Забыли BEING для состояния
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ <strong>Tired</strong>, he went to bed.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Нужна форма Participle Clause!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ <strong>Being tired</strong>, he went to bed.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 4: Разные подлежащие
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ <strong>Walking</strong> down the street, my phone rang.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Телефон НЕ ХОДИТ! Разные подлежащие!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ <strong>Walking</strong> down the street, I heard my
                    phone ring.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 5: Неправильная форма V3
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ The car <strong>stealed</strong> yesterday...
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    steal → stolen (НЕ stealed!)
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ The car <strong>stolen</strong> yesterday...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-400">
            <h4 className="font-bold text-blue-900 mb-3 text-center">
              🔑 Главный вопрос для выбора формы:
            </h4>
            <p className="text-center text-lg font-semibold text-blue-900">
              "Кто/что ДЕЛАЕТ действие?"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-green-900 mb-1">
                  → Подлежащее ДЕЛАЕТ
                </p>
                <p className="text-sm">
                  Используй <strong>-ING</strong>
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-purple-900 mb-1">
                  → НАД подлежащим делают
                </p>
                <p className="text-sm">
                  Используй <strong>-ED/V3</strong>
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 10) {
    return (
      <>
        <Section title="🎯 Реальные ситуации — Где это используется?">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border-2 border-emerald-400 mb-4">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">
              Participle Clauses в реальной жизни
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-900 mb-2 text-lg">
                  1. Новости и СМИ
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong className="text-blue-700">Built</strong> in 1900,
                    the building is now a museum.
                  </p>
                  <p>
                    <strong className="text-blue-700">Located</strong> in the
                    city center, the hotel is popular.
                  </p>
                  <p>
                    <strong className="text-blue-700">Having won</strong> the
                    election, he became president.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <p className="font-semibold text-green-900 mb-2 text-lg">
                  2. Научные тексты
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong className="text-green-700">Heated</strong> to 100°C,
                    water boils.
                  </p>
                  <p>
                    <strong className="text-green-700">Mixed</strong> with
                    water, the powder dissolves.
                  </p>
                  <p>
                    <strong className="text-green-700">
                      Having been tested
                    </strong>
                    , the drug was approved.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                <p className="font-semibold text-purple-900 mb-2 text-lg">
                  3. Литература и повествование
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong className="text-purple-700">Opening</strong> the
                    door, he saw her standing there.
                  </p>
                  <p>
                    <strong className="text-purple-700">Knowing</strong> the
                    truth, I couldn't stay silent.
                  </p>
                  <p>
                    <strong className="text-purple-700">Having lived</strong> in
                    Paris, she spoke French fluently.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                <p className="font-semibold text-orange-900 mb-2 text-lg">
                  4. Описания товаров и услуг
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong className="text-orange-700">Made</strong> of
                    high-quality leather, the bag is durable.
                  </p>
                  <p>
                    <strong className="text-orange-700">Designed</strong> by a
                    famous architect, the house is unique.
                  </p>
                  <p>
                    <strong className="text-orange-700">
                      Being eco-friendly
                    </strong>
                    , the product is popular.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  5. Инструкции и руководства
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong className="text-red-700">Once opened</strong>, the
                    bottle should be refrigerated.
                  </p>
                  <p>
                    <strong className="text-red-700">When heated</strong>, the
                    material expands.
                  </p>
                  <p>
                    <strong className="text-red-700">
                      Having been assembled
                    </strong>
                    , the product is ready to use.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
            <h4 className="font-bold text-yellow-900 mb-3 text-center">
              💡 Почему это важно?
            </h4>
            <div className="space-y-2 text-sm text-zinc-700">
              <p className="text-center">Participle Clauses делают речь:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>✅ **Более элегантной** — меньше слов, больше смысла</li>
                <li>✅ **Более профессиональной** — уровень C1-C2</li>
                <li>✅ **Более компактной** — экономия времени и места</li>
                <li>✅ **Более выразительной** — акцент на главном действии</li>
              </ul>
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
        answers: ["Breaking", "breaking"],
        right: "the vase, he apologized.",
        explanation: "Активное действие (он СЛОМАЛ)",
      },
      {
        left: "2. The book",
        answers: ["written", "Written"],
        right: "by Tolstoy is famous.",
        explanation: "Пассивное описание (БЫЛА НАПИСАНА)",
      },
      {
        left: "3.",
        answers: ["Having finished", "having finished"],
        right: "his work, he went home.",
        explanation: "Завершённое действие ДО главного",
      },
      {
        left: "4.",
        answers: ["Seeing", "seeing"],
        right: "him, I waved.",
        explanation: "Активное одновременное действие",
      },
      {
        left: "5.",
        answers: ["Being tired", "being tired"],
        right: ", he went to bed.",
        explanation: "Состояние (BEING + прилагательное)",
      },
      {
        left: "6. The car",
        answers: ["stolen", "Stolen"],
        right: "yesterday was found.",
        explanation: "Пассивное описание (БЫЛА УКРАДЕНА)",
      },
      {
        left: "7.",
        answers: ["Opened", "opened"],
        right: "last week, the shop is popular.",
        explanation: "Пассивное (магазин БЫЛ ОТКРЫТ)",
      },
      {
        left: "8.",
        answers: ["Having lived", "having lived"],
        right: "in Paris, she speaks French well.",
        explanation: "Завершённый опыт (ПРОЖИЛА - и этот опыт важен)",
      },
    ];

    return (
      <>
        <Section title="🏆 МЕГА-ФИНАЛ: Супер-тест на ВСЕ формы">
          <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-lg p-6 border-2 border-orange-500 mb-4">
            <h3 className="text-3xl font-bold text-orange-900 mb-3 text-center">
              🔥 Финальная битва с Participle Clauses! 🔥
            </h3>
            <p className="text-sm text-zinc-700 mb-2 text-center">
              8 вопросов на **ВСЕ формы**: -ING, -ED/V3, HAVING + V3, BEING +
              V3. Заполни пропуски!
            </p>
            <p className="text-sm font-semibold text-orange-900 text-center">
              Цель: 7/8 и выше! Это уровень МАСТЕРА! 🎯
            </p>
          </div>

          <CheckableExercise
            title="МЕГА-ФИНАЛ (8 вопросов)"
            instruction="Заполни пропуски правильной формой Participle Clause."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-6 border-2 border-green-500 mt-6">
            <h3 className="text-2xl font-bold text-green-900 mb-3 text-center">
              🎉 ПОЗДРАВЛЯЕМ, МАСТЕР PARTICIPLE CLAUSES! 🎉
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы прошли ВСЕ 3 темы и освоили Participle Clauses ПОЛНОСТЬЮ!
              Теперь вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>✅ **БЕЗОШИБОЧНО** выбирать между -ING и -ED/V3</li>
              <li>
                ✅ Использовать Present Participle (-ING) для активных действий
              </li>
              <li>
                ✅ Использовать Past Participle (-ED/V3) для пассивных действий
              </li>
              <li>✅ Использовать HAVING + V3 для завершённых действий</li>
              <li>✅ Использовать BEING + V3 для пассивных состояний</li>
              <li>
                ✅ Использовать HAVING BEEN + V3 для завершённых пассивных
                действий
              </li>
              <li>
                ✅ Делать речь элегантной и профессиональной (C1-C2 уровень!)
              </li>
              <li>✅ Писать как носитель языка!</li>
              <li>✅ Избегать 10 критических ошибок, которые делают все</li>
              <li>✅ Применять Participle Clauses в реальной жизни!</li>
            </ul>
          </div>
        </Section>

        <Section title="📋 ПОЛНАЯ памятка — Все формы">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-400">
            <h4 className="font-bold text-indigo-900 mb-4 text-center text-xl">
              Participle Clauses — ВСЕ 4 формы
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-green-400">
                <p className="font-semibold text-green-900 mb-2 text-lg">
                  1. Present Participle (-ING)
                </p>
                <p className="text-sm mb-2">
                  <strong>Активное</strong>, одновременное действие
                </p>
                <p className="text-sm">
                  <strong>Walking</strong> down the street, I saw John.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  Я ШЁЛ (сам делал) И увидел
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-400">
                <p className="font-semibold text-purple-900 mb-2 text-lg">
                  2. Past Participle (-ED/V3)
                </p>
                <p className="text-sm mb-2">
                  <strong>Пассивное</strong>, описание/причина
                </p>
                <p className="text-sm">
                  The book <strong>written</strong> by Tolstoy is famous.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  Книга БЫЛА НАПИСАНА (пассив)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-indigo-400">
                <p className="font-semibold text-indigo-900 mb-2 text-lg">
                  3. HAVING + V3
                </p>
                <p className="text-sm mb-2">
                  <strong>Активное</strong>, ЗАВЕРШЁННОЕ до главного
                </p>
                <p className="text-sm">
                  <strong>Having finished</strong> his work, he went home.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  СНАЧАЛА закончил полностью, ПОТОМ пошёл
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-pink-400">
                <p className="font-semibold text-pink-900 mb-2 text-lg">
                  4. BEING + V3
                </p>
                <p className="text-sm mb-2">
                  <strong>Пассивное</strong>, состояние/причина
                </p>
                <p className="text-sm">
                  <strong>Being tired</strong>, he went to bed.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  Будучи уставшим (состояние)
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-5 border-2 border-yellow-400 mt-4">
              <h4 className="font-bold text-yellow-900 mb-3 text-center text-lg">
                🔑 ЗОЛОТОЕ ПРАВИЛО
              </h4>
              <p className="text-center font-bold text-lg text-yellow-900">
                Задай вопрос: "Кто ДЕЛАЕТ действие?"
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <div className="bg-green-100 rounded p-3 border-2 border-green-500">
                  <p className="font-semibold text-green-900 text-center">
                    Подлежащее ДЕЛАЕТ → -ING
                  </p>
                </div>
                <div className="bg-purple-100 rounded p-3 border-2 border-purple-500">
                  <p className="font-semibold text-purple-900 text-center">
                    НАД подлежащим делают → -ED/V3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return null;
}
