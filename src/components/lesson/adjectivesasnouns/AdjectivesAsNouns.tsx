"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function AdjectivesAsNouns({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="👥 Adjectives as Nouns — THE Rich, THE Poor">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Прилагательные как существительные!
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              В английском языке **THE + прилагательное** = **ГРУППА ЛЮДЕЙ** с
              этим признаком! Это очень продуктивная конструкция, которая
              **ВСЕГДА** воспринимается как **МНОЖЕСТВЕННОЕ ЧИСЛО**!
            </p>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                🔑 Золотое правило
              </h3>
              <p className="text-center text-lg font-semibold text-red-900 mb-2">
                THE + прилагательное = группа людей (множественное число!)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900">
                    <strong className="text-blue-700">THE rich</strong> =
                    богатые люди
                  </p>
                  <p className="text-xs text-zinc-600">
                    (all rich people, группа)
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900">
                    <strong className="text-green-700">THE poor</strong> =
                    бедные люди
                  </p>
                  <p className="text-xs text-zinc-600">
                    (all poor people, группа)
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h3 className="text-lg font-bold text-green-900 mb-3 text-center">
                  ✅ Правильно
                </h3>
                <div className="space-y-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      THE rich <strong className="text-green-700">ARE</strong>{" "}
                      getting richer.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Богатые становятся богаче (ARE = множественное!)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      THE poor <strong className="text-green-700">NEED</strong>{" "}
                      help.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Бедным нужна помощь (NEED = множественное!)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-lg p-5 border-2 border-red-400">
                <h3 className="text-lg font-bold text-red-900 mb-3 text-center">
                  ❌ Неправильно
                </h3>
                <div className="space-y-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ THE rich <strong className="text-red-700">IS</strong>{" "}
                      getting richer.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Нельзя IS! Только ARE (множественное)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ <strong className="text-red-700">Rich</strong> need
                      help.
                    </p>
                    <p className="text-xs text-zinc-600">Нужен артикль THE!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
              <h4 className="font-bold text-amber-900 mb-3 text-center">
                💡 В этой теме мы изучим:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
                <div>
                  <p>✅ Социальные группы (rich, poor, unemployed)</p>
                  <p>✅ Возрастные группы (young, elderly, old)</p>
                  <p>✅ Национальности (British, French, Spanish)</p>
                </div>
                <div>
                  <p>✅ Состояние здоровья (sick, disabled, injured)</p>
                  <p>✅ Абстрактные концепты (impossible, unknown)</p>
                  <p>✅ 80+ примеров!</p>
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
        <Section title="💰 Социальные и экономические группы">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              THE + прилагательное = социальная группа
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Самое частое использование! **Социальный статус, экономическое
              положение, образование, занятость.**
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  1. Экономический статус
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE rich</p>
                    <p className="text-xs text-zinc-600 mb-2">Богатые люди</p>
                    <p className="text-sm italic">
                      THE rich are getting richer.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE poor</p>
                    <p className="text-xs text-zinc-600 mb-2">Бедные люди</p>
                    <p className="text-sm italic">THE poor need our help.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE wealthy</p>
                    <p className="text-xs text-zinc-600 mb-2">Состоятельные</p>
                    <p className="text-sm italic">
                      THE wealthy pay more taxes.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE needy</p>
                    <p className="text-xs text-zinc-600 mb-2">Нуждающиеся</p>
                    <p className="text-sm italic">We should help THE needy.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE homeless</p>
                    <p className="text-xs text-zinc-600 mb-2">Бездомные</p>
                    <p className="text-sm italic">
                      THE homeless sleep on streets.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      THE underprivileged
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Малообеспеченные
                    </p>
                    <p className="text-sm italic">
                      Programs for THE underprivileged.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  2. Занятость и работа
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE unemployed</p>
                    <p className="text-xs text-zinc-600 mb-2">Безработные</p>
                    <p className="text-sm italic">
                      THE unemployed receive benefits.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE employed</p>
                    <p className="text-xs text-zinc-600 mb-2">Работающие</p>
                    <p className="text-sm italic">THE employed pay taxes.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE retired</p>
                    <p className="text-xs text-zinc-600 mb-2">Пенсионеры</p>
                    <p className="text-sm italic">THE retired get pensions.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      THE self-employed
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Самозанятые</p>
                    <p className="text-sm italic">
                      THE self-employed work alone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. Образование и развитие
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE educated</p>
                    <p className="text-xs text-zinc-600 mb-2">Образованные</p>
                    <p className="text-sm italic">THE educated earn more.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE uneducated</p>
                    <p className="text-xs text-zinc-600 mb-2">Необразованные</p>
                    <p className="text-sm italic">
                      THE uneducated need training.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE illiterate</p>
                    <p className="text-xs text-zinc-600 mb-2">Неграмотные</p>
                    <p className="text-sm italic">
                      Programs for THE illiterate.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      THE underdeveloped
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Слаборазвитые</p>
                    <p className="text-sm italic">Aid to THE underdeveloped.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  4. Социальное положение
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE privileged</p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Привилегированные
                    </p>
                    <p className="text-sm italic">
                      THE privileged have advantages.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      THE disadvantaged
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Обделённые</p>
                    <p className="text-sm italic">Help THE disadvantaged.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE oppressed</p>
                    <p className="text-xs text-zinc-600 mb-2">Угнетённые</p>
                    <p className="text-sm italic">
                      THE oppressed fight for rights.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      THE marginalized
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Маргинализированные
                    </p>
                    <p className="text-sm italic">
                      Rights for THE marginalized.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400 mt-4">
              <h4 className="font-bold text-yellow-900 mb-3 text-center">
                🔑 Важно запомнить!
              </h4>
              <div className="space-y-2 text-sm text-zinc-700">
                <p>
                  <strong>✅ Всегда множественное число:</strong> THE rich ARE
                  (не IS!)
                </p>
                <p>
                  <strong>✅ Всегда с THE:</strong> нельзя просто "rich", только
                  "THE rich"
                </p>
                <p>
                  <strong>✅ Означает группу:</strong> THE rich = all rich
                  people (все богатые)
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
        <Section title="👶👴 Возрастные группы">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              THE + прилагательное о возрасте
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **Возраст** — ещё одна очень частая категория! Молодые, старые,
              средний возраст.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Основные возрастные группы
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-blue-900">
                      THE young
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Молодые люди</p>
                    <p className="text-sm italic">THE young love technology.</p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Молодые любят технологии
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-purple-900">
                      THE old
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Старые люди</p>
                    <p className="text-sm italic">THE old need our respect.</p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Старики нуждаются в нашем уважении
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-green-900">
                      THE elderly
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Пожилые люди (более вежливо!)
                    </p>
                    <p className="text-sm italic">
                      THE elderly receive pensions.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Пожилые получают пенсии
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-orange-900">
                      THE middle-aged
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Люди среднего возраста
                    </p>
                    <p className="text-sm italic">
                      THE middle-aged often have families.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Люди среднего возраста часто имеют семьи
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-red-900">
                      THE aged
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Престарелые (формально)
                    </p>
                    <p className="text-sm italic">Care for THE aged.</p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Забота о престарелых
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-pink-900">
                      THE youth
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Молодёжь (особый случай!)
                    </p>
                    <p className="text-sm italic">THE youth are our future.</p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Молодёжь — наше будущее
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  📊 Примеры в контексте
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      <strong className="text-green-700">THE young</strong> are
                      more tech-savvy than{" "}
                      <strong className="text-purple-700">THE elderly</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Молодые более технически подкованы, чем пожилые.
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      Society should take care of{" "}
                      <strong className="text-blue-700">THE old</strong> and{" "}
                      <strong className="text-red-700">THE sick</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Общество должно заботиться о стариках и больных.
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      <strong className="text-orange-700">
                        THE middle-aged
                      </strong>{" "}
                      often work the hardest.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Люди среднего возраста часто работают усерднее всего.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">
                  ⚠️ Важное различие!
                </h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong className="text-green-700">THE elderly</strong>{" "}
                    более вежливо, чем{" "}
                    <strong className="text-red-700">THE old</strong>
                  </p>
                  <p>
                    <strong className="text-green-700">THE aged</strong> —
                    формальный стиль (документы, официальные тексты)
                  </p>
                  <p>
                    <strong className="text-blue-700">THE youth</strong> —
                    особый случай (можно THE youth IS или ARE)
                  </p>
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
        <Section title="🌍 Национальности — THE British, THE French">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-2xl font-bold text-cyan-900 mb-4">
              THE + национальность = все люди этой национальности
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **THE + прилагательное национальности** = **ВСЕ ЛЮДИ** этой
              национальности! Это работает с прилагательными на **-sh, -ch,
              -ese, -ss**.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Национальности на -sh / -ch
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE British</p>
                    <p className="text-xs text-zinc-600 mb-2">Британцы</p>
                    <p className="text-sm italic">THE British love tea.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE English</p>
                    <p className="text-xs text-zinc-600 mb-2">Англичане</p>
                    <p className="text-sm italic">THE English speak English.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Irish</p>
                    <p className="text-xs text-zinc-600 mb-2">Ирландцы</p>
                    <p className="text-sm italic">
                      THE Irish celebrate St. Patrick's Day.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Scottish</p>
                    <p className="text-xs text-zinc-600 mb-2">Шотландцы</p>
                    <p className="text-sm italic">THE Scottish wear kilts.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Welsh</p>
                    <p className="text-xs text-zinc-600 mb-2">Валлийцы</p>
                    <p className="text-sm italic">THE Welsh love rugby.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE French</p>
                    <p className="text-xs text-zinc-600 mb-2">Французы</p>
                    <p className="text-sm italic">THE French eat baguettes.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Spanish</p>
                    <p className="text-xs text-zinc-600 mb-2">Испанцы</p>
                    <p className="text-sm italic">THE Spanish love flamenco.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Polish</p>
                    <p className="text-xs text-zinc-600 mb-2">Поляки</p>
                    <p className="text-sm italic">
                      THE Polish are hard-working.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Danish</p>
                    <p className="text-xs text-zinc-600 mb-2">Датчане</p>
                    <p className="text-sm italic">THE Danish are very happy.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Finnish</p>
                    <p className="text-xs text-zinc-600 mb-2">Финны</p>
                    <p className="text-sm italic">THE Finnish love saunas.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Dutch</p>
                    <p className="text-xs text-zinc-600 mb-2">Голландцы</p>
                    <p className="text-sm italic">THE Dutch ride bikes.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Swedish</p>
                    <p className="text-xs text-zinc-600 mb-2">Шведы</p>
                    <p className="text-sm italic">
                      THE Swedish design furniture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  Национальности на -ese
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Chinese</p>
                    <p className="text-xs text-zinc-600 mb-2">Китайцы</p>
                    <p className="text-sm italic">
                      THE Chinese invented paper.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Japanese</p>
                    <p className="text-xs text-zinc-600 mb-2">Японцы</p>
                    <p className="text-sm italic">
                      THE Japanese love technology.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Portuguese</p>
                    <p className="text-xs text-zinc-600 mb-2">Португальцы</p>
                    <p className="text-sm italic">
                      THE Portuguese explore seas.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Vietnamese</p>
                    <p className="text-xs text-zinc-600 mb-2">Вьетнамцы</p>
                    <p className="text-sm italic">THE Vietnamese grow rice.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  Национальности на -ss
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE Swiss</p>
                    <p className="text-xs text-zinc-600 mb-2">Швейцарцы</p>
                    <p className="text-sm italic">THE Swiss make watches.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">
                  ⚠️ НО! НЕ все национальности!
                </h4>
                <div className="space-y-2 text-sm">
                  <p className="bg-red-100 rounded p-2">
                    ❌ <strong>THE Russian</strong> (неправильно!)
                  </p>
                  <p className="bg-green-100 rounded p-2">
                    ✅ <strong>Russians</strong> (правильно! Без THE, просто
                    множественное число)
                  </p>
                  <p className="text-xs text-zinc-600 mt-3">
                    <strong>Только</strong> национальности на{" "}
                    <strong>-sh, -ch, -ese, -ss</strong> используют THE +
                    прилагательное!
                  </p>
                  <p className="text-xs text-zinc-600">
                    Остальные: Russians, Germans, Italians, Americans (просто
                    множественное число!)
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
    return (
      <>
        <Section title="🏥 Здоровье и физическое состояние">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              THE + состояние здоровья
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **Болезни, инвалидность, травмы** — также используют эту
              конструкцию!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Основные группы по здоровью
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE sick</p>
                    <p className="text-xs text-zinc-600 mb-2">Больные</p>
                    <p className="text-sm italic">
                      THE sick need medical care.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE healthy</p>
                    <p className="text-xs text-zinc-600 mb-2">Здоровые</p>
                    <p className="text-sm italic">
                      THE healthy exercise daily.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE disabled</p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Инвалиды / люди с ограниченными возможностями
                    </p>
                    <p className="text-sm italic">THE disabled have rights.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      THE handicapped
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Инвалиды (старый термин)
                    </p>
                    <p className="text-sm italic">
                      Facilities for THE handicapped.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE injured</p>
                    <p className="text-xs text-zinc-600 mb-2">Раненые</p>
                    <p className="text-sm italic">
                      THE injured were taken to hospital.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE wounded</p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Раненые (на войне)
                    </p>
                    <p className="text-sm italic">THE wounded need help.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE blind</p>
                    <p className="text-xs text-zinc-600 mb-2">Слепые</p>
                    <p className="text-sm italic">THE blind read braille.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE deaf</p>
                    <p className="text-xs text-zinc-600 mb-2">Глухие</p>
                    <p className="text-sm italic">
                      THE deaf use sign language.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE mute</p>
                    <p className="text-xs text-zinc-600 mb-2">Немые</p>
                    <p className="text-sm italic">
                      THE mute communicate differently.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE paralyzed</p>
                    <p className="text-xs text-zinc-600 mb-2">Парализованные</p>
                    <p className="text-sm italic">Care for THE paralyzed.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      THE mentally ill
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Психически больные
                    </p>
                    <p className="text-sm italic">
                      Support for THE mentally ill.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE dying</p>
                    <p className="text-xs text-zinc-600 mb-2">Умирающие</p>
                    <p className="text-sm italic">THE dying deserve dignity.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  📊 Примеры в контексте
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      Hospitals provide care for{" "}
                      <strong className="text-blue-700">THE sick</strong> and{" "}
                      <strong className="text-red-700">THE injured</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Больницы обеспечивают уход за больными и ранеными.
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      <strong className="text-purple-700">THE blind</strong> and{" "}
                      <strong className="text-green-700">THE deaf</strong> have
                      special schools.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У слепых и глухих есть специальные школы.
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      Society must protect{" "}
                      <strong className="text-orange-700">THE disabled</strong>{" "}
                      and{" "}
                      <strong className="text-pink-700">THE vulnerable</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Общество должно защищать инвалидов и уязвимых.
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
    const items: FillItem[] = [
      {
        left: "",
        answers: ["THE rich", "the rich"],
        right: "are getting richer.",
        explanation: "Богатые люди → THE rich (множественное!)",
      },
      {
        left: "",
        answers: ["THE poor", "the poor"],
        right: "need our help.",
        explanation: "Бедные люди → THE poor",
      },
      {
        left: "",
        answers: ["THE young", "the young"],
        right: "love technology.",
        explanation: "Молодые люди → THE young",
      },
      {
        left: "",
        answers: ["THE elderly", "the elderly"],
        right: "deserve respect.",
        explanation: "Пожилые люди → THE elderly",
      },
      {
        left: "",
        answers: ["THE unemployed", "the unemployed"],
        right: "receive benefits.",
        explanation: "Безработные → THE unemployed",
      },
      {
        left: "",
        answers: ["THE British", "the British"],
        right: "love tea.",
        explanation: "Британцы → THE British (национальность на -sh!)",
      },
      {
        left: "",
        answers: ["THE sick", "the sick"],
        right: "need medical care.",
        explanation: "Больные → THE sick",
      },
      {
        left: "",
        answers: ["THE blind", "the blind"],
        right: "read braille.",
        explanation: "Слепые → THE blind",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Заполни пропуски">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-5 border-2 border-orange-400 mb-4">
            <p className="font-bold text-orange-900 mb-2 text-lg">
              🎯 THE + прилагательное!
            </p>
            <p className="text-sm text-zinc-700">
              Заполни пропуски: THE + прилагательное (социальные группы,
              возраст, национальности, здоровье)
            </p>
          </div>

          <CheckableExercise
            title="Adjectives as Nouns — 8 вопросов"
            instruction="Напиши THE + прилагательное."
            items={items}
          />
        </Section>
      </>
    );
  }

  if (step === 7) {
    return (
      <>
        <Section title="🌌 Абстрактные концепты — THE Unknown, THE Impossible">
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              THE + прилагательное = абстрактная концепция
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **THE + прилагательное** может также означать **АБСТРАКТНУЮ
              КОНЦЕПЦИЮ** — не группу людей, а саму идею, понятие! Часто в
              философии, литературе, науке.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  Абстрактные понятия
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE unknown</p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Неизвестное (то, что неизвестно)
                    </p>
                    <p className="text-sm italic">We fear THE unknown.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE impossible</p>
                    <p className="text-xs text-zinc-600 mb-2">Невозможное</p>
                    <p className="text-sm italic">
                      Nothing is impossible. We can achieve THE impossible.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE unexpected</p>
                    <p className="text-xs text-zinc-600 mb-2">Неожиданное</p>
                    <p className="text-sm italic">
                      Always expect THE unexpected.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      THE unthinkable
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Немыслимое</p>
                    <p className="text-sm italic">THE unthinkable happened.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE sublime</p>
                    <p className="text-xs text-zinc-600 mb-2">Возвышенное</p>
                    <p className="text-sm italic">
                      From THE sublime to THE ridiculous.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE ridiculous</p>
                    <p className="text-xs text-zinc-600 mb-2">Нелепое</p>
                    <p className="text-sm italic">
                      It borders on THE ridiculous.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE absurd</p>
                    <p className="text-xs text-zinc-600 mb-2">Абсурдное</p>
                    <p className="text-sm italic">Theatre of THE absurd.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      THE supernatural
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Сверхъестественное
                    </p>
                    <p className="text-sm italic">
                      Believe in THE supernatural.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE inevitable</p>
                    <p className="text-xs text-zinc-600 mb-2">Неизбежное</p>
                    <p className="text-sm italic">Accept THE inevitable.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">THE obvious</p>
                    <p className="text-xs text-zinc-600 mb-2">Очевидное</p>
                    <p className="text-sm italic">State THE obvious.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  📊 Примеры в контексте
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      Scientists explore{" "}
                      <strong className="text-purple-700">THE unknown</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Учёные исследуют неизвестное.
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      Sometimes{" "}
                      <strong className="text-blue-700">THE impossible</strong>{" "}
                      becomes possible.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Иногда невозможное становится возможным.
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      Life is full of{" "}
                      <strong className="text-green-700">THE unexpected</strong>
                      .
                    </p>
                    <p className="text-xs text-zinc-600">
                      Жизнь полна неожиданностей.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Важно!
                </h4>
                <div className="space-y-2 text-sm text-zinc-700">
                  <p>
                    <strong>Абстрактные концепты</strong> обычно воспринимаются
                    как **ЕДИНСТВЕННОЕ ЧИСЛО** (в отличие от групп людей!)
                  </p>
                  <p>
                    THE unknown <strong>IS</strong> scary. (не ARE!)
                  </p>
                  <p>Часто используется в **философии, литературе, науке**</p>
                </div>
              </div>
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
          "THE rich are getting richer",
          "the rich are getting richer",
          "THE rich are getting richer.",
          "the rich are getting richer.",
        ],
        right: "",
        explanation: "THE rich + ARE (множественное!)",
      },
      {
        left: "",
        answers: [
          "THE elderly need our respect",
          "the elderly need our respect",
          "THE elderly need our respect.",
          "the elderly need our respect.",
        ],
        right: "",
        explanation: "THE elderly (пожилые люди)",
      },
      {
        left: "",
        answers: [
          "THE British love tea",
          "the British love tea",
          "THE British love tea.",
          "the British love tea.",
        ],
        right: "",
        explanation: "THE British (британцы)",
      },
      {
        left: "",
        answers: [
          "THE unemployed receive benefits",
          "the unemployed receive benefits",
          "THE unemployed receive benefits.",
          "the unemployed receive benefits.",
        ],
        right: "",
        explanation: "THE unemployed (безработные)",
      },
      {
        left: "",
        answers: [
          "THE blind read braille",
          "the blind read braille",
          "THE blind read braille.",
          "the blind read braille.",
        ],
        right: "",
        explanation: "THE blind (слепые)",
      },
      {
        left: "",
        answers: [
          "We fear THE unknown",
          "we fear THE unknown",
          "We fear THE unknown.",
          "we fear THE unknown.",
          "We fear the unknown",
          "we fear the unknown",
          "We fear the unknown.",
          "we fear the unknown.",
        ],
        right: "",
        explanation: "THE unknown (неизвестное - абстракция)",
      },
    ];

    return (
      <>
        <Section title="🌐 Упражнение 2: Перевод с русского">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-400 mb-4">
            <p className="font-bold text-green-900 mb-2 text-lg">
              🇷🇺 → 🇬🇧 Переведи с русского!
            </p>
            <p className="text-sm text-zinc-700">
              Напиши ПОЛНОЕ предложение на английском!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Богатые становятся богаче.
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
                2️⃣ Пожилые нуждаются в нашем уважении.
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
                3️⃣ Британцы любят чай.
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
                4️⃣ Безработные получают пособия.
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
                5️⃣ Слепые читают шрифт Брайля.
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
                6️⃣ Мы боимся неизвестного.
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
    const items: FillItem[] = [
      {
        left: "",
        answers: ["THE rich ARE getting richer", "The rich are getting richer"],
        right: "",
        explanation: "THE rich + ARE (не IS!) — множественное число!",
      },
      {
        left: "",
        answers: ["Russians love vodka", "russians love vodka"],
        right: "",
        explanation:
          "Russians (не THE Russian!) — это не -sh/-ese/-ss национальность в контексте 'все русские'",
      },
      {
        left: "",
        answers: ["THE British drink tea", "The British drink tea"],
        right: "",
        explanation: "THE British — национальность на -sh → нужен THE!",
      },
      {
        left: "",
        answers: ["THE elderly NEED respect", "The elderly need respect"],
        right: "",
        explanation: "THE elderly + NEED (не NEEDS!) — множественное!",
      },
      {
        left: "",
        answers: ["THE unknown IS scary", "The unknown is scary"],
        right: "",
        explanation: "THE unknown (абстракция) + IS (единственное число!)",
      },
      {
        left: "",
        answers: ["THE poor HAVE rights", "The poor have rights"],
        right: "",
        explanation: "THE poor + HAVE (не HAS!) — множественное!",
      },
    ];

    return (
      <>
        <Section title="❌ Упражнение 3: Исправь ошибки">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
            <p className="font-bold text-red-900 mb-2 text-lg">
              🔧 Найди и исправь ошибку!
            </p>
            <p className="text-sm text-zinc-700">
              В каждом предложении есть ошибка. Напиши ПРАВИЛЬНЫЙ вариант!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-900 mb-3">
                1️⃣ ❌ THE rich IS getting richer.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[0]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-900 mb-3">
                2️⃣ ❌ THE Russians love vodka.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[1]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-900 mb-3">
                3️⃣ ❌ British drink tea.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[2]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-900 mb-3">
                4️⃣ ❌ THE elderly NEEDS respect.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[3]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-900 mb-3">
                5️⃣ ❌ THE unknown ARE scary.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[4]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-900 mb-3">
                6️⃣ ❌ THE poor HAS rights.
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
    return (
      <>
        <Section title="⚠️ 10 Критических ошибок русскоговорящих">
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-lg p-6 border-2 border-red-400 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Типичные ошибки с Adjectives as Nouns
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти ошибки делают **почти ВСЕ** русскоговорящие! Запомни их раз и
              навсегда!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-red-300">
                <h4 className="text-lg font-bold text-red-900 mb-3">
                  ❌ Ошибка 1: IS вместо ARE
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ THE rich <strong className="text-red-700">IS</strong>{" "}
                      getting richer.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильно! THE rich = группа людей (множественное!)
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ THE rich{" "}
                      <strong className="text-green-700">ARE</strong> getting
                      richer.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! Всегда ARE для групп людей!
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2 bg-yellow-50 rounded p-2">
                  <strong>В русском:</strong> "Богатые" = множественное число →
                  THE rich ARE (не IS!)
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-red-300">
                <h4 className="text-lg font-bold text-red-900 mb-3">
                  ❌ Ошибка 2: Забыли THE
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ <strong className="text-red-700">Poor</strong> need
                      help.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильно! Нужен артикль THE!
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ <strong className="text-green-700">THE poor</strong>{" "}
                      need help.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! THE обязателен!
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2 bg-yellow-50 rounded p-2">
                  <strong>В русском:</strong> "Бедные" (без артикля) → но в
                  английском THE poor (артикль обязателен!)
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-red-300">
                <h4 className="text-lg font-bold text-red-900 mb-3">
                  ❌ Ошибка 3: THE для всех национальностей
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ <strong className="text-red-700">THE Russians</strong>{" "}
                      drink vodka.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильно! Russian не на -sh/-ese/-ss!
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ <strong className="text-green-700">Russians</strong>{" "}
                      drink vodka.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! Просто множественное число!
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2 bg-yellow-50 rounded p-2">
                  <strong>Правило:</strong> THE только для -sh/-ch/-ese/-ss
                  (British, French, Chinese, Swiss). Остальные: Russians,
                  Germans, Italians.
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-red-300">
                <h4 className="text-lg font-bold text-red-900 mb-3">
                  ❌ Ошибка 4: Использование вместо people
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ THE poor{" "}
                      <strong className="text-red-700">peoples</strong> need
                      help.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильно! THE poor уже означает "бедные люди"!
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ <strong className="text-green-700">THE poor</strong>{" "}
                      need help.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! THE poor = бедные люди!
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2 bg-yellow-50 rounded p-2">
                  <strong>Важно:</strong> THE poor = poor people. Не добавляйте
                  "people"!
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-red-300">
                <h4 className="text-lg font-bold text-red-900 mb-3">
                  ❌ Ошибка 5: Абстракция с ARE
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ THE unknown{" "}
                      <strong className="text-red-700">ARE</strong> scary.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильно! Абстракция = единственное число!
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ THE unknown{" "}
                      <strong className="text-green-700">IS</strong> scary.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! Абстракция = IS (не ARE!)
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2 bg-yellow-50 rounded p-2">
                  <strong>Правило:</strong> THE rich (люди) = ARE. THE unknown
                  (концепция) = IS.
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-red-300">
                <h4 className="text-lg font-bold text-red-900 mb-3">
                  ❌ Ошибка 6: Неправильный глагол
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ THE elderly{" "}
                      <strong className="text-red-700">NEEDS</strong> care.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильно! THE elderly = множественное!
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ THE elderly{" "}
                      <strong className="text-green-700">NEED</strong> care.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! NEED (не NEEDS!)
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2 bg-yellow-50 rounded p-2">
                  <strong>В русском:</strong> "Пожилые нуждаются" →
                  множественное число!
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-red-300">
                <h4 className="text-lg font-bold text-red-900 mb-3">
                  ❌ Ошибка 7: A/AN перед THE + adjective
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ <strong className="text-red-700">A</strong> THE rich
                      man.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильно! THE rich = группа (множественное)!
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ <strong className="text-green-700">A rich man</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! Для одного человека!
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2 bg-yellow-50 rounded p-2">
                  <strong>Различие:</strong> THE rich = все богатые люди. A rich
                  man = один богатый человек.
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-red-300">
                <h4 className="text-lg font-bold text-red-900 mb-3">
                  ❌ Ошибка 8: Окончание -S
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ THE <strong className="text-red-700">richs</strong> are
                      getting richer.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильно! Не добавляйте -S!
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ THE <strong className="text-green-700">rich</strong>{" "}
                      are getting richer.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! THE rich (без -S!)
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2 bg-yellow-50 rounded p-2">
                  <strong>Правило:</strong> THE + прилагательное (без
                  изменений!) = группа людей.
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-red-300">
                <h4 className="text-lg font-bold text-red-900 mb-3">
                  ❌ Ошибка 9: THE old для предметов
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ I like{" "}
                      <strong className="text-red-700">THE old</strong> (про
                      старые вещи).
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильно! THE old = старые ЛЮДИ!
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ I like{" "}
                      <strong className="text-green-700">old things</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! Для вещей нужно добавить существительное!
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2 bg-yellow-50 rounded p-2">
                  <strong>Важно:</strong> THE + adjective работает ТОЛЬКО для
                  людей (или абстракций), НЕ для предметов!
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-red-300">
                <h4 className="text-lg font-bold text-red-900 mb-3">
                  ❌ Ошибка 10: Смешивание THE elderly и THE old
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ I respect{" "}
                      <strong className="text-red-700">THE old</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Может показаться грубым в формальном контексте!
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ I respect{" "}
                      <strong className="text-green-700">THE elderly</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Более вежливо и уважительно!
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2 bg-yellow-50 rounded p-2">
                  <strong>Совет:</strong> THE elderly более вежливо, чем THE
                  old. THE aged — формально.
                </p>
              </div>
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
        answers: ["THE rich", "the rich"],
        right: "are getting richer every year.",
        explanation: "Богатые люди → THE rich + ARE",
      },
      {
        left: "We must help",
        answers: ["THE poor", "the poor"],
        right: "and THE homeless.",
        explanation: "Бедные и бездомные → THE poor, THE homeless",
      },
      {
        left: "",
        answers: ["THE young", "the young"],
        right: "love technology more than THE elderly.",
        explanation: "Молодые и пожилые → THE young, THE elderly",
      },
      {
        left: "",
        answers: ["THE British", "the British"],
        right: "drink a lot of tea.",
        explanation: "Британцы → THE British (национальность на -sh!)",
      },
      {
        left: "Society should protect",
        answers: ["THE disabled", "the disabled"],
        right: "and THE vulnerable.",
        explanation: "Инвалиды и уязвимые → THE disabled, THE vulnerable",
      },
      {
        left: "Scientists explore",
        answers: ["THE unknown", "the unknown"],
        right: "every day.",
        explanation: "Неизвестное (абстракция) → THE unknown + IS",
      },
    ];

    return (
      <>
        <Section title="🏆 Финальный тест">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Проверь себя!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Заполни пропуски правильной формой (THE + adjective).
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест — 6 вопросов"
            instruction="Напиши THE + прилагательное."
            items={items}
          />
        </Section>

        <Section title="📚 Словарь для изучения — 20 новых выражений">
          <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-lg p-6 border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Новые выражения для словаря
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                <p className="font-semibold text-blue-900 mb-2">
                  1. THE rich — богатые
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE rich are getting richer.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                <p className="font-semibold text-green-900 mb-2">
                  2. THE poor — бедные
                </p>
                <p className="text-sm italic text-zinc-700">
                  We must help THE poor.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                <p className="font-semibold text-purple-900 mb-2">
                  3. THE unemployed — безработные
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE unemployed receive benefits.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
                <p className="font-semibold text-orange-900 mb-2">
                  4. THE homeless — бездомные
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE homeless need shelters.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-pink-200">
                <p className="font-semibold text-pink-900 mb-2">
                  5. THE elderly — пожилые
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE elderly deserve respect.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-red-200">
                <p className="font-semibold text-red-900 mb-2">
                  6. THE young — молодые
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE young love technology.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
                <p className="font-semibold text-indigo-900 mb-2">
                  7. THE sick — больные
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE sick need medical care.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-teal-200">
                <p className="font-semibold text-teal-900 mb-2">
                  8. THE disabled — инвалиды
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE disabled have rights.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
                <p className="font-semibold text-cyan-900 mb-2">
                  9. THE blind — слепые
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE blind read braille.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-lime-200">
                <p className="font-semibold text-lime-900 mb-2">
                  10. THE deaf — глухие
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE deaf use sign language.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-amber-200">
                <p className="font-semibold text-amber-900 mb-2">
                  11. THE British — британцы
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE British love tea.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
                <p className="font-semibold text-rose-900 mb-2">
                  12. THE French — французы
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE French eat baguettes.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-violet-200">
                <p className="font-semibold text-violet-900 mb-2">
                  13. THE Chinese — китайцы
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE Chinese invented paper.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-fuchsia-200">
                <p className="font-semibold text-fuchsia-900 mb-2">
                  14. THE Japanese — японцы
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE Japanese love technology.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
                <p className="font-semibold text-emerald-900 mb-2">
                  15. THE unknown — неизвестное
                </p>
                <p className="text-sm italic text-zinc-700">
                  We fear THE unknown.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-sky-200">
                <p className="font-semibold text-sky-900 mb-2">
                  16. THE impossible — невозможное
                </p>
                <p className="text-sm italic text-zinc-700">
                  We can achieve THE impossible.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-yellow-200">
                <p className="font-semibold text-yellow-900 mb-2">
                  17. THE unexpected — неожиданное
                </p>
                <p className="text-sm italic text-zinc-700">
                  Expect THE unexpected.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-stone-200">
                <p className="font-semibold text-stone-900 mb-2">
                  18. THE inevitable — неизбежное
                </p>
                <p className="text-sm italic text-zinc-700">
                  Accept THE inevitable.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">
                  19. THE wounded — раненые
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE wounded were taken to hospital.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
                <p className="font-semibold text-zinc-900 mb-2">
                  20. THE privileged — привилегированные
                </p>
                <p className="text-sm italic text-zinc-700">
                  THE privileged have advantages.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="📋 Шпаргалка — Adjectives as Nouns">
          <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              Краткая шпаргалка
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
                <h4 className="font-bold text-blue-900 mb-2 text-lg">
                  🔑 Основная формула
                </h4>
                <p className="text-sm text-zinc-700">
                  <strong>THE + adjective</strong> = группа людей (множественное
                  число!)
                </p>
                <p className="text-sm text-zinc-700 mt-1">
                  THE rich <strong>ARE</strong> getting richer. (не IS!)
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-green-300">
                <h4 className="font-bold text-green-900 mb-2 text-lg">
                  👥 Социальные группы
                </h4>
                <p className="text-sm text-zinc-700">
                  THE rich, THE poor, THE unemployed, THE homeless, THE needy,
                  THE wealthy, THE privileged
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
                <h4 className="font-bold text-purple-900 mb-2 text-lg">
                  👶👴 Возрастные группы
                </h4>
                <p className="text-sm text-zinc-700">
                  THE young, THE old, THE elderly (вежливо), THE middle-aged,
                  THE aged
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-cyan-300">
                <h4 className="font-bold text-cyan-900 mb-2 text-lg">
                  🌍 Национальности (только -sh/-ch/-ese/-ss!)
                </h4>
                <p className="text-sm text-zinc-700">
                  THE British, THE French, THE Chinese, THE Japanese, THE Swiss
                </p>
                <p className="text-sm text-red-700 mt-2">
                  ❌ THE Russians, THE Germans (неправильно!) → Russians,
                  Germans
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-red-300">
                <h4 className="font-bold text-red-900 mb-2 text-lg">
                  🏥 Здоровье
                </h4>
                <p className="text-sm text-zinc-700">
                  THE sick, THE healthy, THE disabled, THE blind, THE deaf, THE
                  injured, THE wounded
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-indigo-300">
                <h4 className="font-bold text-indigo-900 mb-2 text-lg">
                  🌌 Абстрактные концепты (единственное число!)
                </h4>
                <p className="text-sm text-zinc-700">
                  THE unknown, THE impossible, THE unexpected, THE inevitable
                </p>
                <p className="text-sm text-zinc-700 mt-1">
                  THE unknown <strong>IS</strong> scary. (не ARE!)
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-yellow-300">
                <h4 className="font-bold text-yellow-900 mb-2 text-lg">
                  ⚠️ Главные правила
                </h4>
                <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                  <li>Всегда с THE (не может быть без артикля!)</li>
                  <li>
                    Группы людей = множественное число (ARE, NEED, HAVE, WERE)
                  </li>
                  <li>Абстракции = единственное число (IS, WAS)</li>
                  <li>Не добавляйте -S! (THE rich, не THE richs)</li>
                  <li>Не для предметов! (old things, не THE old)</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-5 border-2 border-green-400">
                <h4 className="font-bold text-green-900 mb-3 text-lg text-center">
                  ✅ Что вы освоили?
                </h4>
                <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                  <li>
                    ✅ Понимать конструкцию THE + adjective = группа людей
                  </li>
                  <li>
                    ✅ Использовать правильное число (ARE для людей, IS для
                    абстракций)
                  </li>
                  <li>✅ Знать национальности на -sh/-ch/-ese/-ss</li>
                  <li>✅ Различать THE elderly (вежливо) и THE old</li>
                  <li>✅ Избегать 10 критических ошибок!</li>
                  <li>✅ Использовать 20 новых выражений в речи!</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return null;
}
