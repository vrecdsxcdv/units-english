"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function SoSuch({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📊 So / Such / Too / Enough">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              So / Such / Too / Enough — Усилители и ограничители
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              Эти слова показывают **степень** чего-то: насколько что-то сильно
              (so/such), слишком много (too) или достаточно (enough)!
            </p>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg p-5 border-2 border-cyan-400 mb-4">
              <h3 className="font-bold text-cyan-900 mb-3 text-lg text-center">
                🔑 Основные различия
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900">
                    SO + adjective/adverb
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    She's <strong>so</strong> beautiful!
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    He runs <strong>so</strong> fast!
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900">
                    SUCH + (a/an) + noun
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    She's <strong>such a</strong> beautiful girl!
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    It's <strong>such</strong> beautiful weather!
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-purple-900">
                    TOO + adjective/adverb
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    It's <strong>too</strong> expensive (негативно!)
                  </p>
                  <p className="text-xs text-zinc-600">
                    = Слишком дорого (не куплю)
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-orange-900">
                    adjective/adverb + ENOUGH
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    It's cheap <strong>enough</strong> (позитивно!)
                  </p>
                  <p className="text-xs text-zinc-600">
                    = Достаточно дёшево (куплю)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                ⚠️ Золотое правило
              </h3>
              <div className="space-y-2 text-sm text-zinc-700 text-center">
                <p className="text-lg font-bold text-blue-900">
                  <strong className="text-red-700">SO</strong> + прилагательное
                </p>
                <p className="text-lg font-bold text-green-900">
                  <strong className="text-red-700">SUCH</strong> +
                  существительное
                </p>
                <p className="text-lg font-bold text-purple-900">
                  <strong className="text-red-700">TOO</strong> + прилагательное
                  = слишком (плохо!)
                </p>
                <p className="text-lg font-bold text-orange-900">
                  прилагательное +{" "}
                  <strong className="text-red-700">ENOUGH</strong> = достаточно
                  (хорошо!)
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
              <h4 className="font-bold text-amber-900 mb-3 text-center">
                💡 В этой теме мы изучим:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
                <div>
                  <p>✅ SO + adjective/adverb (так, настолько)</p>
                  <p>✅ SUCH + noun (такой)</p>
                  <p>✅ TOO + adjective (слишком — негативно)</p>
                </div>
                <div>
                  <p>✅ ENOUGH + noun / adjective + ENOUGH</p>
                  <p>✅ 60+ примеров использования</p>
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
        <Section title="✨ SO — Так, настолько">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              SO + adjective / adverb
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **SO** используется с **прилагательными** и **наречиями**, чтобы
              показать **высокую степень**! Означает "**так**", "**настолько**"!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  1. SO + прилагательное
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    SO + adjective
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    She's **so** beautiful! = Она **такая** красивая!
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">30 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    <p className="italic">
                      She's <strong>so</strong> beautiful
                    </p>
                    <p className="italic">
                      He's <strong>so</strong> smart
                    </p>
                    <p className="italic">
                      It's <strong>so</strong> expensive
                    </p>
                    <p className="italic">
                      She's <strong>so</strong> talented
                    </p>
                    <p className="italic">
                      It's <strong>so</strong> difficult
                    </p>
                    <p className="italic">
                      He's <strong>so</strong> funny
                    </p>
                    <p className="italic">
                      It's <strong>so</strong> easy
                    </p>
                    <p className="italic">
                      She's <strong>so</strong> kind
                    </p>
                    <p className="italic">
                      It's <strong>so</strong> hot
                    </p>
                    <p className="italic">
                      He's <strong>so</strong> tired
                    </p>
                    <p className="italic">
                      It's <strong>so</strong> cold
                    </p>
                    <p className="italic">
                      She's <strong>so</strong> busy
                    </p>
                    <p className="italic">
                      It's <strong>so</strong> boring
                    </p>
                    <p className="italic">
                      He's <strong>so</strong> lucky
                    </p>
                    <p className="italic">
                      It's <strong>so</strong> interesting
                    </p>
                    <p className="italic">
                      She's <strong>so</strong> happy
                    </p>
                    <p className="italic">
                      It's <strong>so</strong> important
                    </p>
                    <p className="italic">
                      He's <strong>so</strong> tall
                    </p>
                    <p className="italic">
                      It's <strong>so</strong> bright
                    </p>
                    <p className="italic">
                      She's <strong>so</strong> young
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  2. SO + наречие
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">15 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    <p className="italic">
                      He runs <strong>so</strong> fast
                    </p>
                    <p className="italic">
                      She speaks <strong>so</strong> quickly
                    </p>
                    <p className="italic">
                      It happened <strong>so</strong> suddenly
                    </p>
                    <p className="italic">
                      He works <strong>so</strong> hard
                    </p>
                    <p className="italic">
                      She sings <strong>so</strong> beautifully
                    </p>
                    <p className="italic">
                      Time passes <strong>so</strong> slowly
                    </p>
                    <p className="italic">
                      He drives <strong>so</strong> carefully
                    </p>
                    <p className="italic">
                      She dances <strong>so</strong> gracefully
                    </p>
                    <p className="italic">
                      It ended <strong>so</strong> abruptly
                    </p>
                    <p className="italic">
                      He answered <strong>so</strong> politely
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. SO + much/many/little/few
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">
                    Специальные случаи
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="italic">
                      We have <strong>so much</strong> time
                    </p>
                    <p className="text-xs text-zinc-600">
                      У нас так много времени
                    </p>
                    <p className="italic mt-2">
                      There are <strong>so many</strong> people
                    </p>
                    <p className="text-xs text-zinc-600">Так много людей</p>
                    <p className="italic mt-2">
                      We have <strong>so little</strong> money
                    </p>
                    <p className="text-xs text-zinc-600">
                      У нас так мало денег
                    </p>
                    <p className="italic mt-2">
                      There are <strong>so few</strong> options
                    </p>
                    <p className="text-xs text-zinc-600">Так мало вариантов</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Запомни!
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>SO</strong> ВСЕГДА с прилагательными и наречиями!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  ✅ so beautiful, so fast, so much, so many
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  ❌ НЕ используй с существительными (для них — SUCH!)
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
        <Section title="🎯 SUCH — Такой">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              SUCH + (a/an) + (adjective) + noun
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **SUCH** используется с **существительными**, чтобы показать
              **высокую степень**! Означает "**такой**", "**такая**"!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. SUCH A/AN + исчисляемое существительное
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    SUCH + A/AN + noun
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    She's **such a** beautiful girl! = Она **такая** красивая
                    девушка!
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    <p className="italic">
                      <strong>Such a</strong> beautiful girl
                    </p>
                    <p className="italic">
                      <strong>Such a</strong> smart boy
                    </p>
                    <p className="italic">
                      <strong>Such a</strong> difficult task
                    </p>
                    <p className="italic">
                      <strong>Such an</strong> interesting book
                    </p>
                    <p className="italic">
                      <strong>Such a</strong> talented artist
                    </p>
                    <p className="italic">
                      <strong>Such a</strong> funny story
                    </p>
                    <p className="italic">
                      <strong>Such an</strong> expensive car
                    </p>
                    <p className="italic">
                      <strong>Such a</strong> kind person
                    </p>
                    <p className="italic">
                      <strong>Such a</strong> long day
                    </p>
                    <p className="italic">
                      <strong>Such an</strong> amazing opportunity
                    </p>
                    <p className="italic">
                      <strong>Such a</strong> big house
                    </p>
                    <p className="italic">
                      <strong>Such a</strong> great idea
                    </p>
                    <p className="italic">
                      <strong>Such a</strong> boring film
                    </p>
                    <p className="italic">
                      <strong>Such an</strong> important decision
                    </p>
                    <p className="italic">
                      <strong>Such a</strong> difficult question
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. SUCH + неисчисляемое / множественное число
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <p className="italic">
                      <strong>Such</strong> beautiful weather
                    </p>
                    <p className="text-xs text-zinc-600">
                      Такая красивая погода
                    </p>
                    <p className="italic mt-2">
                      <strong>Such</strong> good news
                    </p>
                    <p className="text-xs text-zinc-600">
                      Такие хорошие новости
                    </p>
                    <p className="italic mt-2">
                      <strong>Such</strong> wonderful people
                    </p>
                    <p className="text-xs text-zinc-600">Такие чудесные люди</p>
                    <p className="italic mt-2">
                      <strong>Such</strong> bad luck
                    </p>
                    <p className="text-xs text-zinc-600">Такое невезение</p>
                    <p className="italic mt-2">
                      <strong>Such</strong> interesting ideas
                    </p>
                    <p className="text-xs text-zinc-600">
                      Такие интересные идеи
                    </p>
                    <p className="italic mt-2">
                      <strong>Such</strong> important information
                    </p>
                    <p className="text-xs text-zinc-600">
                      Такая важная информация
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">
                  ⚠️ Критическое различие!
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-blue-900">
                      SO + прилагательное
                    </p>
                    <p className="text-sm italic">
                      She's <strong className="text-blue-700">so</strong>{" "}
                      beautiful
                    </p>
                    <p className="text-xs text-zinc-600">
                      НЕТ существительного!
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-green-900">
                      SUCH + существительное
                    </p>
                    <p className="text-sm italic">
                      She's <strong className="text-green-700">such a</strong>{" "}
                      beautiful girl
                    </p>
                    <p className="text-xs text-zinc-600">
                      ЕСТЬ существительное!
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
        <Section title="⚠️ TOO — Слишком (негативно!)">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              TOO + adjective/adverb = Слишком (это плохо!)
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **TOO** означает "**слишком**" и показывает **избыток**, что-то
              **негативное**! Это значит, что это **больше, чем нужно**!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  TOO + прилагательное
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <p className="italic">
                      It's <strong className="text-red-700">too</strong>{" "}
                      expensive
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком дорого (не куплю!)
                    </p>
                    <p className="italic mt-2">
                      She's <strong className="text-red-700">too</strong> young
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком молодая (не подходит)
                    </p>
                    <p className="italic mt-2">
                      It's <strong className="text-red-700">too</strong>{" "}
                      difficult
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком сложно (не смогу)
                    </p>
                    <p className="italic mt-2">
                      He's <strong className="text-red-700">too</strong> busy
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком занят (не придёт)
                    </p>
                    <p className="italic mt-2">
                      It's <strong className="text-red-700">too</strong> late
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком поздно (не успеем)
                    </p>
                    <p className="italic mt-2">
                      The room is <strong className="text-red-700">too</strong>{" "}
                      small
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком маленькая (не поместимся)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  TOO + much/many/little/few
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">
                    Специальные случаи
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="italic">
                      There's <strong className="text-red-700">too much</strong>{" "}
                      work
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком много работы
                    </p>
                    <p className="italic mt-2">
                      There are{" "}
                      <strong className="text-red-700">too many</strong> people
                    </p>
                    <p className="text-xs text-zinc-600">Слишком много людей</p>
                    <p className="italic mt-2">
                      We have{" "}
                      <strong className="text-red-700">too little</strong> time
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком мало времени
                    </p>
                    <p className="italic mt-2">
                      There are{" "}
                      <strong className="text-red-700">too few</strong> options
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком мало вариантов
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  TOO + adjective + TO + infinitive
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-orange-900 mb-2">
                    Конструкция "слишком... чтобы..."
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="italic">
                      It's{" "}
                      <strong className="text-red-700">too expensive</strong>{" "}
                      <strong className="text-blue-700">to buy</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком дорого, чтобы купить
                    </p>
                    <p className="italic mt-2">
                      She's <strong className="text-red-700">too young</strong>{" "}
                      <strong className="text-blue-700">to drive</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком молодая, чтобы водить
                    </p>
                    <p className="italic mt-2">
                      It's{" "}
                      <strong className="text-red-700">too difficult</strong>{" "}
                      <strong className="text-blue-700">to understand</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком сложно, чтобы понять
                    </p>
                    <p className="italic mt-2">
                      He's <strong className="text-red-700">too tired</strong>{" "}
                      <strong className="text-blue-700">to work</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком устал, чтобы работать
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Запомни!
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>TOO</strong> = слишком (это **плохо**, **избыток**!)
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  TOO всегда имеет **негативное** значение!
                </p>
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
        <Section title="✅ ENOUGH — Достаточно (позитивно!)">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              adjective/adverb + ENOUGH = Достаточно (это хорошо!)
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **ENOUGH** означает "**достаточно**" и показывает, что чего-то
              **хватает**! Это **позитивное** значение!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. Прилагательное/наречие + ENOUGH
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    adjective/adverb + ENOUGH
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    ENOUGH ПОСЛЕ прилагательного!
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <p className="italic">
                      It's cheap{" "}
                      <strong className="text-green-700">enough</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Достаточно дёшево (куплю!)
                    </p>
                    <p className="italic mt-2">
                      She's old{" "}
                      <strong className="text-green-700">enough</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Достаточно взрослая (подходит)
                    </p>
                    <p className="italic mt-2">
                      It's easy{" "}
                      <strong className="text-green-700">enough</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Достаточно легко (смогу)
                    </p>
                    <p className="italic mt-2">
                      He's tall{" "}
                      <strong className="text-green-700">enough</strong>
                    </p>
                    <p className="text-xs text-zinc-600">Достаточно высокий</p>
                    <p className="italic mt-2">
                      The room is big{" "}
                      <strong className="text-green-700">enough</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Комната достаточно большая
                    </p>
                    <p className="italic mt-2">
                      She runs fast{" "}
                      <strong className="text-green-700">enough</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она бегает достаточно быстро
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. ENOUGH + существительное
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    ENOUGH + noun
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    ENOUGH ПЕРЕД существительным!
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <p className="italic">
                      We have <strong className="text-green-700">enough</strong>{" "}
                      time
                    </p>
                    <p className="text-xs text-zinc-600">
                      У нас достаточно времени
                    </p>
                    <p className="italic mt-2">
                      There's <strong className="text-green-700">enough</strong>{" "}
                      money
                    </p>
                    <p className="text-xs text-zinc-600">Достаточно денег</p>
                    <p className="italic mt-2">
                      We have <strong className="text-green-700">enough</strong>{" "}
                      food
                    </p>
                    <p className="text-xs text-zinc-600">
                      У нас достаточно еды
                    </p>
                    <p className="italic mt-2">
                      There are{" "}
                      <strong className="text-green-700">enough</strong> chairs
                    </p>
                    <p className="text-xs text-zinc-600">Достаточно стульев</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. Adjective + ENOUGH + TO + infinitive
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">
                    Конструкция "достаточно... чтобы..."
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="italic">
                      It's{" "}
                      <strong className="text-green-700">cheap enough</strong>{" "}
                      <strong className="text-blue-700">to buy</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Достаточно дёшево, чтобы купить
                    </p>
                    <p className="italic mt-2">
                      She's{" "}
                      <strong className="text-green-700">old enough</strong>{" "}
                      <strong className="text-blue-700">to drive</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Достаточно взрослая, чтобы водить
                    </p>
                    <p className="italic mt-2">
                      It's{" "}
                      <strong className="text-green-700">easy enough</strong>{" "}
                      <strong className="text-blue-700">to understand</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Достаточно легко, чтобы понять
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">
                  ⚠️ Критическая разница!
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-red-900">
                      TOO (негативно!)
                    </p>
                    <p className="text-sm italic">
                      It's <strong className="text-red-700">too</strong>{" "}
                      expensive
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком дорого (НЕ куплю!)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-green-900">
                      ENOUGH (позитивно!)
                    </p>
                    <p className="text-sm italic">
                      It's cheap{" "}
                      <strong className="text-green-700">enough</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Достаточно дёшево (куплю!)
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
        <Section title="⚠️ Типичные ошибки">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              10 критических ошибок с So / Such / Too / Enough
            </h3>

            <div className="space-y-3">
              {[
                {
                  title: "Ошибка 1: So + существительное",
                  wrong: "She's so beautiful girl.",
                  correct: "She's such a beautiful girl. / She's so beautiful.",
                  rule: "SO только с прилагательными! С существительными — SUCH!",
                },
                {
                  title: "Ошибка 2: Such без A/AN",
                  wrong: "She's such beautiful girl.",
                  correct: "She's such a beautiful girl.",
                  rule: "SUCH + A/AN с исчисляемыми существительными!",
                },
                {
                  title: "Ошибка 3: Too вместо very",
                  wrong: "She's too beautiful. (комплимент)",
                  correct: "She's very beautiful. / She's so beautiful.",
                  rule: "TOO = слишком (негативно!)! Для комплимента — very/so!",
                },
                {
                  title: "Ошибка 4: Enough ПЕРЕД прилагательным",
                  wrong: "It's enough cheap.",
                  correct: "It's cheap enough.",
                  rule: "Adjective + ENOUGH (enough ПОСЛЕ прилагательного!)",
                },
                {
                  title: "Ошибка 5: Enough ПОСЛЕ существительного",
                  wrong: "We have time enough.",
                  correct: "We have enough time.",
                  rule: "ENOUGH + noun (enough ПЕРЕД существительным!)",
                },
                {
                  title: "Ошибка 6: Very + much/many",
                  wrong: "There are very many people.",
                  correct: "There are so many people.",
                  rule: "SO many/much (НЕ very many/much)!",
                },
                {
                  title: "Ошибка 7: Too much + исчисляемое",
                  wrong: "There are too much people.",
                  correct: "There are too many people.",
                  rule: "Too many + countable, Too much + uncountable!",
                },
                {
                  title: "Ошибка 8: Such с прилагательным без существительного",
                  wrong: "She's such beautiful.",
                  correct: "She's so beautiful. / She's such a beautiful girl.",
                  rule: "SUCH ТОЛЬКО с существительными!",
                },
                {
                  title: "Ошибка 9: So many/much в начале",
                  wrong: "Many so people came.",
                  correct: "So many people came.",
                  rule: "SO перед many/much!",
                },
                {
                  title: "Ошибка 10: Too для позитивных вещей",
                  wrong: "The weather is too nice! (восхищение)",
                  correct: "The weather is so nice! / very nice!",
                  rule: "TOO только для негатива! Для позитива — so/very!",
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
        left: "She's",
        answers: ["so"],
        right: "beautiful!",
        explanation: "SO + прилагательное (без существительного)",
      },
      {
        left: "She's",
        answers: ["such a", "such an"],
        right: "beautiful girl!",
        explanation: "SUCH + A/AN + noun",
      },
      {
        left: "It's",
        answers: ["too"],
        right: "expensive. (негативно)",
        explanation: "TOO = слишком (избыток, плохо)",
      },
      {
        left: "It's cheap",
        answers: ["enough"],
        right: ".",
        explanation: "Adjective + ENOUGH (enough после прилагательного)",
      },
      {
        left: "There are",
        answers: ["so many"],
        right: "people!",
        explanation: "SO many + countable plural",
      },
      {
        left: "We have",
        answers: ["enough"],
        right: "time.",
        explanation: "ENOUGH + noun (enough перед существительным)",
      },
    ];

    return (
      <>
        <Section title="🎯 Финальный тест + Шпаргалка">
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              Финальный тест: So / Such / Too / Enough
            </h3>
          </div>

          <CheckableExercise
            title="Финальный тест — 6 вопросов"
            instruction="Вставь правильное слово."
            items={items}
          />

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 mt-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📋 Шпаргалка: So / Such / Too / Enough
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">1️⃣ SO</p>
                <p className="text-sm text-zinc-700">
                  <strong>SO + adjective/adverb</strong> — so beautiful, so fast
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>SO + much/many</strong> — so much time, so many people
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">2️⃣ SUCH</p>
                <p className="text-sm text-zinc-700">
                  <strong>SUCH + A/AN + noun</strong> — such a beautiful girl
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>SUCH + noun</strong> — such beautiful weather
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-red-900 mb-2">3️⃣ TOO</p>
                <p className="text-sm text-zinc-700">
                  <strong>TOO + adjective</strong> — too expensive (негативно!)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>TOO + much/many</strong> — too much work, too many
                  people
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-orange-900 mb-2">4️⃣ ENOUGH</p>
                <p className="text-sm text-zinc-700">
                  <strong>Adjective + ENOUGH</strong> — cheap enough
                  (позитивно!)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>ENOUGH + noun</strong> — enough time, enough money
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded p-4">
                <p className="font-bold text-red-900 mb-2 text-center">
                  🔑 Золотые правила
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>SO</strong> + adjective | <strong>SUCH</strong> + noun
                </p>
                <p className="text-sm text-zinc-700 text-center mt-1">
                  <strong>TOO</strong> = слишком (плохо!) |{" "}
                  <strong>ENOUGH</strong> = достаточно (хорошо!)
                </p>
                <p className="text-sm text-zinc-700 text-center mt-1">
                  Adjective + <strong>ENOUGH</strong> | <strong>ENOUGH</strong>{" "}
                  + noun
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
