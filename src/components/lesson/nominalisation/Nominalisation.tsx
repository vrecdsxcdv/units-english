"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Nominalisation({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="🔄 Nominalisation — Номинализация">
          <div className="bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-400">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">
              Nominalisation — Превращаем глаголы и прилагательные в существительные!
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              ***Номинализация*** — это процесс превращения ***глаголов*** и ***прилагательных*** в ***существительные***! Используется для создания более ***формального*** и ***академического*** стиля письма!
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400 mb-4">
              <h3 className="font-bold text-blue-900 mb-3 text-lg text-center">
                🎯 Что такое Nominalisation?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-purple-900 text-center">
                    Verb → Noun
                  </p>
                  <p className="text-xs text-zinc-600 text-center mb-2">
                    Глагол → Существительное
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    ***decide*** → decision
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    ***grow*** → growth
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900 text-center">
                    Adjective → Noun
                  </p>
                  <p className="text-xs text-zinc-600 text-center mb-2">
                    Прилагательное → Существительное
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    ***happy*** → happiness
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    ***difficult*** → difficulty
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-orange-900 text-center">
                    Более формально!
                  </p>
                  <p className="text-xs text-zinc-600 text-center mb-2">
                    Academic Style
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    We decided → Our ***decision***
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    It's important → The ***importance***
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-5 border-2 border-rose-400 mb-4">
              <h3 className="font-bold text-rose-900 mb-3 text-lg text-center">
                💡 Зачем это нужно?
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-blue-900 mb-1">
                    1. Формальный стиль (Academic writing)
                  </p>
                  <p className="text-xs">
                    ❌ We decided to change the policy.
                  </p>
                  <p className="text-xs">
                    ✅ The ***decision*** to change the policy was made.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-1">
                    2. Краткость и ёмкость
                  </p>
                  <p className="text-xs">
                    ❌ The economy grew significantly.
                  </p>
                  <p className="text-xs">
                    ✅ Significant economic ***growth*** occurred.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-purple-900 mb-1">
                    3. Объективность (избегаем личных форм)
                  </p>
                  <p className="text-xs">
                    ❌ I think this is very important.
                  </p>
                  <p className="text-xs">
                    ✅ The ***importance*** of this cannot be overstated.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
              <h4 className="font-bold text-amber-900 mb-3 text-center">
                📚 В этой теме мы изучим:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
                <div>
                  <p>✅ Verb → Noun (-tion, -ment, -ance, -ence)</p>
                  <p>✅ Adjective → Noun (-ness, -ity, -cy)</p>
                  <p>✅ Irregular forms (grow → growth, die → death)</p>
                </div>
                <div>
                  <p>✅ Zero-derivation (increase, decrease)</p>
                  <p>✅ 100+ примеров трансформаций</p>
                  <p>✅ Применение в академическом письме</p>
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
        <Section title="🔵 Verb → Noun: -TION / -SION">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Самый популярный суффикс: -TION / -SION
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Суффиксы ***-tion*** и ***-sion*** — самые частые для образования существительных от глаголов! Обрати внимание на изменения в основе!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-violet-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  1. -TION (самый частый!)
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-purple-900 mb-2">
                    Verb + -tion = Noun
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    decide → deci***sion*** | educate → educa***tion***
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">30 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="bg-purple-50 rounded p-2">
                      <p className="font-semibold text-purple-900">decide → decision</p>
                      <p className="text-xs text-zinc-600 italic">решать → решение</p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="font-semibold text-purple-900">create → creation</p>
                      <p className="text-xs text-zinc-600 italic">создавать → создание</p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="font-semibold text-purple-900">educate → education</p>
                      <p className="text-xs text-zinc-600 italic">обучать → образование</p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="font-semibold text-purple-900">inform → information</p>
                      <p className="text-xs text-zinc-600 italic">информировать → информация</p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="font-semibold text-purple-900">examine → examination</p>
                      <p className="text-xs text-zinc-600 italic">исследовать → исследование</p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="font-semibold text-purple-900">communicate → communication</p>
                      <p className="text-xs text-zinc-600 italic">общаться → общение</p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="font-semibold text-purple-900">describe → description</p>
                      <p className="text-xs text-zinc-600 italic">описывать → описание</p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="font-semibold text-purple-900">produce → production</p>
                      <p className="text-xs text-zinc-600 italic">производить → производство</p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="font-semibold text-purple-900">reduce → reduction</p>
                      <p className="text-xs text-zinc-600 italic">сокращать → сокращение</p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="font-semibold text-purple-900">introduce → introduction</p>
                      <p className="text-xs text-zinc-600 italic">вводить → введение</p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="font-semibold text-purple-900">construct → construction</p>
                      <p className="text-xs text-zinc-600 italic">строить → строительство</p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="font-semibold text-purple-900">react → reaction</p>
                      <p className="text-xs text-zinc-600 italic">реагировать → реакция</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg p-5 border-2 border-cyan-400">
                <h4 className="text-xl font-bold text-cyan-900 mb-3">
                  2. -SION (после d, de, mit, s)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-cyan-900 mb-2">20 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="bg-cyan-50 rounded p-2">
                      <p className="font-semibold text-cyan-900">decide → decision</p>
                      <p className="text-xs text-zinc-600 italic">решать → решение</p>
                    </div>
                    <div className="bg-cyan-50 rounded p-2">
                      <p className="font-semibold text-cyan-900">divide → division</p>
                      <p className="text-xs text-zinc-600 italic">делить → деление</p>
                    </div>
                    <div className="bg-cyan-50 rounded p-2">
                      <p className="font-semibold text-cyan-900">provide → provision</p>
                      <p className="text-xs text-zinc-600 italic">обеспечивать → обеспечение</p>
                    </div>
                    <div className="bg-cyan-50 rounded p-2">
                      <p className="font-semibold text-cyan-900">explode → explosion</p>
                      <p className="text-xs text-zinc-600 italic">взрываться → взрыв</p>
                    </div>
                    <div className="bg-cyan-50 rounded p-2">
                      <p className="font-semibold text-cyan-900">expand → expansion</p>
                      <p className="text-xs text-zinc-600 italic">расширять → расширение</p>
                    </div>
                    <div className="bg-cyan-50 rounded p-2">
                      <p className="font-semibold text-cyan-900">admit → admission</p>
                      <p className="text-xs text-zinc-600 italic">допускать → допуск</p>
                    </div>
                    <div className="bg-cyan-50 rounded p-2">
                      <p className="font-semibold text-cyan-900">permit → permission</p>
                      <p className="text-xs text-zinc-600 italic">разрешать → разрешение</p>
                    </div>
                    <div className="bg-cyan-50 rounded p-2">
                      <p className="font-semibold text-cyan-900">submit → submission</p>
                      <p className="text-xs text-zinc-600 italic">представлять → представление</p>
                    </div>
                    <div className="bg-cyan-50 rounded p-2">
                      <p className="font-semibold text-cyan-900">discuss → discussion</p>
                      <p className="text-xs text-zinc-600 italic">обсуждать → обсуждение</p>
                    </div>
                    <div className="bg-cyan-50 rounded p-2">
                      <p className="font-semibold text-cyan-900">confuse → confusion</p>
                      <p className="text-xs text-zinc-600 italic">путать → путаница</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Правило написания
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  Если глагол заканчивается на ***-te***, убираем ***e*** и добавляем ***-tion***
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  crea***te*** → crea***tion*** | educa***te*** → educa***tion***
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
        <Section title="🟢 Verb → Noun: -MENT / -ANCE / -ENCE">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Другие популярные суффиксы для глаголов
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Суффиксы ***-ment***, ***-ance*** и ***-ence*** тоже очень часто используются для образования существительных!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-50 to-green-100 rounded-lg p-5 border-2 border-emerald-400">
                <h4 className="text-xl font-bold text-emerald-900 mb-3">
                  1. -MENT (действие или результат)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-emerald-900 mb-2">25 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="font-semibold text-emerald-900">develop → development</p>
                      <p className="text-xs text-zinc-600 italic">развивать → развитие</p>
                    </div>
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="font-semibold text-emerald-900">improve → improvement</p>
                      <p className="text-xs text-zinc-600 italic">улучшать → улучшение</p>
                    </div>
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="font-semibold text-emerald-900">achieve → achievement</p>
                      <p className="text-xs text-zinc-600 italic">достигать → достижение</p>
                    </div>
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="font-semibold text-emerald-900">manage → management</p>
                      <p className="text-xs text-zinc-600 italic">управлять → управление</p>
                    </div>
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="font-semibold text-emerald-900">agree → agreement</p>
                      <p className="text-xs text-zinc-600 italic">соглашаться → соглашение</p>
                    </div>
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="font-semibold text-emerald-900">treat → treatment</p>
                      <p className="text-xs text-zinc-600 italic">лечить → лечение</p>
                    </div>
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="font-semibold text-emerald-900">require → requirement</p>
                      <p className="text-xs text-zinc-600 italic">требовать → требование</p>
                    </div>
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="font-semibold text-emerald-900">invest → investment</p>
                      <p className="text-xs text-zinc-600 italic">инвестировать → инвестиция</p>
                    </div>
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="font-semibold text-emerald-900">govern → government</p>
                      <p className="text-xs text-zinc-600 italic">управлять → правительство</p>
                    </div>
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="font-semibold text-emerald-900">assess → assessment</p>
                      <p className="text-xs text-zinc-600 italic">оценивать → оценка</p>
                    </div>
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="font-semibold text-emerald-900">enjoy → enjoyment</p>
                      <p className="text-xs text-zinc-600 italic">наслаждаться → наслаждение</p>
                    </div>
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="font-semibold text-emerald-900">employ → employment</p>
                      <p className="text-xs text-zinc-600 italic">нанимать → трудоустройство</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  2. -ANCE / -ENCE (состояние или качество)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">25 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-900">perform → performance</p>
                      <p className="text-xs text-zinc-600 italic">выполнять → выполнение</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-900">appear → appearance</p>
                      <p className="text-xs text-zinc-600 italic">появляться → появление</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-900">resist → resistance</p>
                      <p className="text-xs text-zinc-600 italic">сопротивляться → сопротивление</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-900">accept → acceptance</p>
                      <p className="text-xs text-zinc-600 italic">принимать → принятие</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-900">exist → existence</p>
                      <p className="text-xs text-zinc-600 italic">существовать → существование</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-900">depend → dependence</p>
                      <p className="text-xs text-zinc-600 italic">зависеть → зависимость</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-900">differ → difference</p>
                      <p className="text-xs text-zinc-600 italic">отличаться → различие</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-900">prefer → preference</p>
                      <p className="text-xs text-zinc-600 italic">предпочитать → предпочтение</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-900">occur → occurrence</p>
                      <p className="text-xs text-zinc-600 italic">происходить → происшествие</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-900">refer → reference</p>
                      <p className="text-xs text-zinc-600 italic">ссылаться → ссылка</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-900">interfere → interference</p>
                      <p className="text-xs text-zinc-600 italic">вмешиваться → вмешательство</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-900">maintain → maintenance</p>
                      <p className="text-xs text-zinc-600 italic">поддерживать → обслуживание</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="font-bold text-orange-900 mb-3 text-center">
                  ⚠️ Как выбрать -ANCE или -ENCE?
                </h4>
                <div className="bg-white rounded p-3">
                  <p className="text-sm text-zinc-700 text-center">
                    К сожалению, строгого правила нет! Нужно ***запоминать***!
                  </p>
                  <p className="text-sm text-zinc-700 text-center mt-2">
                    Но есть подсказка: если глагол на ***-ate***, то обычно ***-ance***
                  </p>
                  <p className="text-xs text-zinc-600 text-center mt-1 italic">
                    toler***ate*** → toler***ance*** | import***ant*** → import***ance***
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
        <Section title="🟣 Adjective → Noun: -NESS / -ITY">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Превращаем прилагательные в существительные
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Для прилагательных используем суффиксы ***-ness*** (простой) и ***-ity*** (латинского происхождения)!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-pink-50 to-rose-100 rounded-lg p-5 border-2 border-pink-400">
                <h4 className="text-xl font-bold text-pink-900 mb-3">
                  1. -NESS (самый простой и продуктивный!)
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-pink-900 mb-2">
                    Adjective + -ness = Noun
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    Просто добавляем ***-ness*** к прилагательному!
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-pink-900 mb-2">30 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="bg-pink-50 rounded p-2">
                      <p className="font-semibold text-pink-900">happy → happiness</p>
                      <p className="text-xs text-zinc-600 italic">счастливый → счастье</p>
                    </div>
                    <div className="bg-pink-50 rounded p-2">
                      <p className="font-semibold text-pink-900">sad → sadness</p>
                      <p className="text-xs text-zinc-600 italic">грустный → грусть</p>
                    </div>
                    <div className="bg-pink-50 rounded p-2">
                      <p className="font-semibold text-pink-900">kind → kindness</p>
                      <p className="text-xs text-zinc-600 italic">добрый → доброта</p>
                    </div>
                    <div className="bg-pink-50 rounded p-2">
                      <p className="font-semibold text-pink-900">dark → darkness</p>
                      <p className="text-xs text-zinc-600 italic">тёмный → темнота</p>
                    </div>
                    <div className="bg-pink-50 rounded p-2">
                      <p className="font-semibold text-pink-900">weak → weakness</p>
                      <p className="text-xs text-zinc-600 italic">слабый → слабость</p>
                    </div>
                    <div className="bg-pink-50 rounded p-2">
                      <p className="font-semibold text-pink-900">ill → illness</p>
                      <p className="text-xs text-zinc-600 italic">больной → болезнь</p>
                    </div>
                    <div className="bg-pink-50 rounded p-2">
                      <p className="font-semibold text-pink-900">aware → awareness</p>
                      <p className="text-xs text-zinc-600 italic">осознающий → осознание</p>
                    </div>
                    <div className="bg-pink-50 rounded p-2">
                      <p className="font-semibold text-pink-900">effective → effectiveness</p>
                      <p className="text-xs text-zinc-600 italic">эффективный → эффективность</p>
                    </div>
                    <div className="bg-pink-50 rounded p-2">
                      <p className="font-semibold text-pink-900">useful → usefulness</p>
                      <p className="text-xs text-zinc-600 italic">полезный → полезность</p>
                    </div>
                    <div className="bg-pink-50 rounded p-2">
                      <p className="font-semibold text-pink-900">lonely → loneliness</p>
                      <p className="text-xs text-zinc-600 italic">одинокий → одиночество</p>
                    </div>
                    <div className="bg-pink-50 rounded p-2">
                      <p className="font-semibold text-pink-900">fair → fairness</p>
                      <p className="text-xs text-zinc-600 italic">справедливый → справедливость</p>
                    </div>
                    <div className="bg-pink-50 rounded p-2">
                      <p className="font-semibold text-pink-900">thick → thickness</p>
                      <p className="text-xs text-zinc-600 italic">толстый → толщина</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-violet-50 to-purple-100 rounded-lg p-5 border-2 border-violet-400">
                <h4 className="text-xl font-bold text-violet-900 mb-3">
                  2. -ITY / -TY (латинские корни)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-violet-900 mb-2">30 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="bg-violet-50 rounded p-2">
                      <p className="font-semibold text-violet-900">possible → possibility</p>
                      <p className="text-xs text-zinc-600 italic">возможный → возможность</p>
                    </div>
                    <div className="bg-violet-50 rounded p-2">
                      <p className="font-semibold text-violet-900">able → ability</p>
                      <p className="text-xs text-zinc-600 italic">способный → способность</p>
                    </div>
                    <div className="bg-violet-50 rounded p-2">
                      <p className="font-semibold text-violet-900">popular → popularity</p>
                      <p className="text-xs text-zinc-600 italic">популярный → популярность</p>
                    </div>
                    <div className="bg-violet-50 rounded p-2">
                      <p className="font-semibold text-violet-900">real → reality</p>
                      <p className="text-xs text-zinc-600 italic">реальный → реальность</p>
                    </div>
                    <div className="bg-violet-50 rounded p-2">
                      <p className="font-semibold text-violet-900">active → activity</p>
                      <p className="text-xs text-zinc-600 italic">активный → активность</p>
                    </div>
                    <div className="bg-violet-50 rounded p-2">
                      <p className="font-semibold text-violet-900">complex → complexity</p>
                      <p className="text-xs text-zinc-600 italic">сложный → сложность</p>
                    </div>
                    <div className="bg-violet-50 rounded p-2">
                      <p className="font-semibold text-violet-900">similar → similarity</p>
                      <p className="text-xs text-zinc-600 italic">похожий → схожесть</p>
                    </div>
                    <div className="bg-violet-50 rounded p-2">
                      <p className="font-semibold text-violet-900">diverse → diversity</p>
                      <p className="text-xs text-zinc-600 italic">разнообразный → разнообразие</p>
                    </div>
                    <div className="bg-violet-50 rounded p-2">
                      <p className="font-semibold text-violet-900">secure → security</p>
                      <p className="text-xs text-zinc-600 italic">безопасный → безопасность</p>
                    </div>
                    <div className="bg-violet-50 rounded p-2">
                      <p className="font-semibold text-violet-900">pure → purity</p>
                      <p className="text-xs text-zinc-600 italic">чистый → чистота</p>
                    </div>
                    <div className="bg-violet-50 rounded p-2">
                      <p className="font-semibold text-violet-900">curious → curiosity</p>
                      <p className="text-xs text-zinc-600 italic">любопытный → любопытство</p>
                    </div>
                    <div className="bg-violet-50 rounded p-2">
                      <p className="font-semibold text-violet-900">responsible → responsibility</p>
                      <p className="text-xs text-zinc-600 italic">ответственный → ответственность</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3 text-center">
                  ⚠️ Изменения в основе с -ITY
                </h4>
                <div className="bg-white rounded p-3">
                  <p className="text-sm text-zinc-700 mb-2">
                    Часто происходят изменения в корне слова!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    <div className="bg-red-50 rounded p-2">
                      <p>diffic***ult*** → diffic***ulty*** (меняется окончание)</p>
                    </div>
                    <div className="bg-red-50 rounded p-2">
                      <p>electr***ic*** → electr***icity*** (меняется окончание)</p>
                    </div>
                    <div className="bg-red-50 rounded p-2">
                      <p>san***e*** → san***ity*** (убирается -e)</p>
                    </div>
                    <div className="bg-red-50 rounded p-2">
                      <p>pur***e*** → pur***ity*** (убирается -e)</p>
                    </div>
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
        <Section title="🔴 Irregular Forms — Нестандартные формы">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Особые случаи номинализации
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Некоторые существительные образуются ***нестандартно*** — нужно ***запомнить*** их формы!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  1. Изменение гласных (Vowel changes)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-orange-900 mb-2">20 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="bg-orange-50 rounded p-2">
                      <p className="font-semibold text-orange-900">grow → growth</p>
                      <p className="text-xs text-zinc-600 italic">расти → рост (ow → o)</p>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <p className="font-semibold text-orange-900">die → death</p>
                      <p className="text-xs text-zinc-600 italic">умирать → смерть (ie → ea)</p>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <p className="font-semibold text-orange-900">lose → loss</p>
                      <p className="text-xs text-zinc-600 italic">терять → потеря (se → ss)</p>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <p className="font-semibold text-orange-900">choose → choice</p>
                      <p className="text-xs text-zinc-600 italic">выбирать → выбор (oo → oi)</p>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <p className="font-semibold text-orange-900">live → life</p>
                      <p className="text-xs text-zinc-600 italic">жить → жизнь (v → f)</p>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <p className="font-semibold text-orange-900">prove → proof</p>
                      <p className="text-xs text-zinc-600 italic">доказывать → доказательство (v → f)</p>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <p className="font-semibold text-orange-900">believe → belief</p>
                      <p className="text-xs text-zinc-600 italic">верить → вера (v → f)</p>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <p className="font-semibold text-orange-900">know → knowledge</p>
                      <p className="text-xs text-zinc-600 italic">знать → знание (полностью меняется!)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-100 rounded-lg p-5 border-2 border-teal-400">
                <h4 className="text-xl font-bold text-teal-900 mb-3">
                  2. Zero-derivation (одна и та же форма!)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-teal-900 mb-2">20 примеров (Verb = Noun)</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="bg-teal-50 rounded p-2">
                      <p className="font-semibold text-teal-900">increase (verb) → increase (noun)</p>
                      <p className="text-xs text-zinc-600 italic">увеличивать → увеличение</p>
                    </div>
                    <div className="bg-teal-50 rounded p-2">
                      <p className="font-semibold text-teal-900">decrease (verb) → decrease (noun)</p>
                      <p className="text-xs text-zinc-600 italic">уменьшать → уменьшение</p>
                    </div>
                    <div className="bg-teal-50 rounded p-2">
                      <p className="font-semibold text-teal-900">change (verb) → change (noun)</p>
                      <p className="text-xs text-zinc-600 italic">менять → изменение</p>
                    </div>
                    <div className="bg-teal-50 rounded p-2">
                      <p className="font-semibold text-teal-900">use (verb) → use (noun)</p>
                      <p className="text-xs text-zinc-600 italic">использовать → использование</p>
                    </div>
                    <div className="bg-teal-50 rounded p-2">
                      <p className="font-semibold text-teal-900">help (verb) → help (noun)</p>
                      <p className="text-xs text-zinc-600 italic">помогать → помощь</p>
                    </div>
                    <div className="bg-teal-50 rounded p-2">
                      <p className="font-semibold text-teal-900">study (verb) → study (noun)</p>
                      <p className="text-xs text-zinc-600 italic">изучать → исследование</p>
                    </div>
                    <div className="bg-teal-50 rounded p-2">
                      <p className="font-semibold text-teal-900">control (verb) → control (noun)</p>
                      <p className="text-xs text-zinc-600 italic">контролировать → контроль</p>
                    </div>
                    <div className="bg-teal-50 rounded p-2">
                      <p className="font-semibold text-teal-900">result (verb) → result (noun)</p>
                      <p className="text-xs text-zinc-600 italic">приводить к → результат</p>
                    </div>
                    <div className="bg-teal-50 rounded p-2">
                      <p className="font-semibold text-teal-900">research (verb) → research (noun)</p>
                      <p className="text-xs text-zinc-600 italic">исследовать → исследование</p>
                    </div>
                    <div className="bg-teal-50 rounded p-2">
                      <p className="font-semibold text-teal-900">experience (verb) → experience (noun)</p>
                      <p className="text-xs text-zinc-600 italic">испытывать → опыт</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-lg p-5 border-2 border-indigo-400">
                <h4 className="text-xl font-bold text-indigo-900 mb-3">
                  3. Полностью другое слово
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-indigo-900 mb-2">15 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="bg-indigo-50 rounded p-2">
                      <p className="font-semibold text-indigo-900">think → thought</p>
                      <p className="text-xs text-zinc-600 italic">думать → мысль</p>
                    </div>
                    <div className="bg-indigo-50 rounded p-2">
                      <p className="font-semibold text-indigo-900">succeed → success</p>
                      <p className="text-xs text-zinc-600 italic">преуспевать → успех</p>
                    </div>
                    <div className="bg-indigo-50 rounded p-2">
                      <p className="font-semibold text-indigo-900">fail → failure</p>
                      <p className="text-xs text-zinc-600 italic">провалиться → провал</p>
                    </div>
                    <div className="bg-indigo-50 rounded p-2">
                      <p className="font-semibold text-indigo-900">speak → speech</p>
                      <p className="text-xs text-zinc-600 italic">говорить → речь</p>
                    </div>
                    <div className="bg-indigo-50 rounded p-2">
                      <p className="font-semibold text-indigo-900">sell → sale</p>
                      <p className="text-xs text-zinc-600 italic">продавать → продажа</p>
                    </div>
                    <div className="bg-indigo-50 rounded p-2">
                      <p className="font-semibold text-indigo-900">see → sight</p>
                      <p className="text-xs text-zinc-600 italic">видеть → зрение</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  💡 Совет
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  Нестандартные формы нужно ***запоминать*** через практику!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  Чем чаще встречается слово, тем вероятнее у него нестандартная форма!
                </p>
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
        <Section title="📝 Applying Nominalisation — Применение">
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Как использовать номинализацию в академическом письме
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Посмотрим, как ***трансформировать*** простые предложения в ***формальный академический стиль*** с помощью номинализации!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-sky-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Before & After Examples
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-4">
                    <p className="text-xs text-red-700 font-semibold mb-1">❌ Informal (Personal)</p>
                    <p className="text-sm text-zinc-700 mb-2">
                      The government ***decided*** to reduce taxes. This ***will improve*** the economy.
                    </p>
                    <p className="text-xs text-green-700 font-semibold mb-1">✅ Formal (Nominalised)</p>
                    <p className="text-sm text-zinc-700">
                      The government's ***decision*** to reduce taxes will lead to economic ***improvement***.
                    </p>
                  </div>

                  <div className="bg-white rounded p-4">
                    <p className="text-xs text-red-700 font-semibold mb-1">❌ Informal</p>
                    <p className="text-sm text-zinc-700 mb-2">
                      Technology ***has developed*** rapidly. This ***affects*** how we communicate.
                    </p>
                    <p className="text-xs text-green-700 font-semibold mb-1">✅ Formal</p>
                    <p className="text-sm text-zinc-700">
                      Rapid technological ***development*** has had a significant ***effect*** on communication.
                    </p>
                  </div>

                  <div className="bg-white rounded p-4">
                    <p className="text-xs text-red-700 font-semibold mb-1">❌ Informal</p>
                    <p className="text-sm text-zinc-700 mb-2">
                      The population ***is growing***. This ***creates*** pressure on resources.
                    </p>
                    <p className="text-xs text-green-700 font-semibold mb-1">✅ Formal</p>
                    <p className="text-sm text-zinc-700">
                      Population ***growth*** leads to the ***creation*** of pressure on resources.
                    </p>
                  </div>

                  <div className="bg-white rounded p-4">
                    <p className="text-xs text-red-700 font-semibold mb-1">❌ Informal</p>
                    <p className="text-sm text-zinc-700 mb-2">
                      Scientists ***discovered*** a new species. This is very ***important***.
                    </p>
                    <p className="text-xs text-green-700 font-semibold mb-1">✅ Formal</p>
                    <p className="text-sm text-zinc-700">
                      The ***discovery*** of a new species is of great ***importance***.
                    </p>
                  </div>

                  <div className="bg-white rounded p-4">
                    <p className="text-xs text-red-700 font-semibold mb-1">❌ Informal</p>
                    <p className="text-sm text-zinc-700 mb-2">
                      The company ***failed*** because it didn't ***adapt*** to market changes.
                    </p>
                    <p className="text-xs text-green-700 font-semibold mb-1">✅ Formal</p>
                    <p className="text-sm text-zinc-700">
                      The company's ***failure*** resulted from a lack of ***adaptation*** to market changes.
                    </p>
                  </div>

                  <div className="bg-white rounded p-4">
                    <p className="text-xs text-red-700 font-semibold mb-1">❌ Informal</p>
                    <p className="text-sm text-zinc-700 mb-2">
                      People ***prefer*** online shopping because it is ***convenient***.
                    </p>
                    <p className="text-xs text-green-700 font-semibold mb-1">✅ Formal</p>
                    <p className="text-sm text-zinc-700">
                      The ***preference*** for online shopping stems from its ***convenience***.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-100 rounded-lg p-5 border-2 border-amber-400">
                <h4 className="font-bold text-amber-900 mb-3 text-center">
                  ✨ Преимущества номинализации
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="font-semibold text-blue-900 text-sm mb-1">📊 Более формально</p>
                    <p className="text-xs text-zinc-600">
                      Звучит более профессионально и академично
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-semibold text-green-900 text-sm mb-1">🎯 Более кратко</p>
                    <p className="text-xs text-zinc-600">
                      Сжимает информацию в меньшее количество слов
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-semibold text-purple-900 text-sm mb-1">🔬 Объективно</p>
                    <p className="text-xs text-zinc-600">
                      Убирает субъективность и личные местоимения
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-semibold text-orange-900 text-sm mb-1">📝 Академично</p>
                    <p className="text-xs text-zinc-600">
                      Подходит для эссе, отчётов, статей
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3 text-center">
                  ⚠️ Но не переборщи!
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  Слишком много номинализации делает текст ***тяжёлым*** и ***трудночитаемым***!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  Используй баланс между активными глаголами и существительными!
                </p>
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
        left: "decide →",
        answers: ["decision"],
        right: "(verb to noun)",
        explanation: "decide (глагол) → decision (существительное)",
      },
      {
        left: "happy →",
        answers: ["happiness"],
        right: "(adjective to noun)",
        explanation: "happy (прилагательное) → happiness (существительное)",
        wide: true,
      },
      {
        left: "grow →",
        answers: ["growth"],
        right: "(irregular form)",
        explanation: "grow → growth (нестандартная форма с изменением гласной)",
      },
      {
        left: "develop →",
        answers: ["development"],
        right: "(-ment suffix)",
        explanation: "develop → development (суффикс -ment)",
        wide: true,
      },
      {
        left: "important →",
        answers: ["importance"],
        right: "(-ance suffix)",
        explanation: "important → importance (суффикс -ance)",
      },
      {
        left: "possible →",
        answers: ["possibility"],
        right: "(-ity suffix)",
        explanation: "possible → possibility (суффикс -ity)",
        wide: true,
      },
    ];

    return (
      <>
        <Section title="🎯 Финальный тест + Шпаргалка">
          <div className="bg-gradient-to-r from-indigo-50 via-violet-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-400 mb-4">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">
              Финальный тест: Nominalisation
            </h3>
          </div>

          <CheckableExercise
            title="Финальный тест — 6 вопросов"
            instruction="Преврати слова в существительные."
            items={items}
          />

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 mt-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📋 Шпаргалка: Nominalisation
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-purple-900 mb-2">
                  1️⃣ Verb → Noun: -TION / -SION
                </p>
                <p className="text-sm text-zinc-700">
                  decide → deci***sion*** | educate → educa***tion*** | discuss → discu***ssion***
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">
                  2️⃣ Verb → Noun: -MENT
                </p>
                <p className="text-sm text-zinc-700">
                  develop → develop***ment*** | improve → improve***ment*** | achieve → achieve***ment***
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">
                  3️⃣ Verb → Noun: -ANCE / -ENCE
                </p>
                <p className="text-sm text-zinc-700">
                  perform → perform***ance*** | exist → exist***ence*** | differ → differ***ence***
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-pink-900 mb-2">
                  4️⃣ Adjective → Noun: -NESS
                </p>
                <p className="text-sm text-zinc-700">
                  happy → happi***ness*** | kind → kind***ness*** | dark → dark***ness***
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-violet-900 mb-2">
                  5️⃣ Adjective → Noun: -ITY / -TY
                </p>
                <p className="text-sm text-zinc-700">
                  possible → possibil***ity*** | real → real***ity*** | active → activ***ity***
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-orange-900 mb-2">
                  6️⃣ Irregular Forms
                </p>
                <p className="text-sm text-zinc-700">
                  grow → ***growth*** | die → ***death*** | lose → ***loss*** | choose → ***choice***
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-teal-900 mb-2">
                  7️⃣ Zero-derivation (same form)
                </p>
                <p className="text-sm text-zinc-700">
                  increase, decrease, change, use, help, study, control
                </p>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded p-4">
                <p className="font-bold text-rose-900 mb-2 text-center">
                  🔑 Золотое правило
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  Номинализация делает текст более ***формальным*** и ***академичным***!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  Используй для эссе, отчётов и научных работ!
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
