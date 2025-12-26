"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function FrontingEmphasis({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📊 Fronting & Emphasis — Выделение для эмфазы">
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Fronting & Emphasis — Вынос элементов в начало для усиления
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              ***Fronting*** — это вынос какого-либо элемента предложения в ***начало*** для создания ***эмфатического эффекта*** (усиления)! Используется в литературе, публичных выступлениях и формальной речи!
            </p>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg p-5 border-2 border-cyan-400 mb-4">
              <h3 className="font-bold text-cyan-900 mb-3 text-lg text-center">
                🔑 Что такое Fronting?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900 text-center">
                    Обычный порядок
                  </p>
                  <p className="text-xs text-zinc-600 text-center mb-2">
                    Subject + Verb + Object/Complement
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    We rarely see such dedication.
                  </p>
                  <p className="text-xs text-zinc-600">(нейтрально)</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900 text-center">
                    Fronting
                  </p>
                  <p className="text-xs text-zinc-600 text-center mb-2">
                    Object/Complement + Subject + Verb
                  </p>
                  <p className="text-xs text-zinc-600 italic font-bold">
                    ***Rarely*** do we see such dedication.
                  </p>
                  <p className="text-xs text-zinc-600">(эмфаза!)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                ⚠️ Зачем это нужно?
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-blue-900 mb-1">
                    1. Эмфаза (усиление смысла)
                  </p>
                  <p className="text-xs italic">
                    ***Such*** was his anger that he left immediately.
                  </p>
                  <p className="text-xs text-zinc-600">
                    (Его гнев был ***настолько*** силён! — акцент на степени)
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-1">
                    2. Драматический эффект
                  </p>
                  <p className="text-xs italic">
                    ***Gone*** are the days when we could relax.
                  </p>
                  <p className="text-xs text-zinc-600">
                    (Ушли те дни... — драматическое повествование)
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-purple-900 mb-1">
                    3. Формальный стиль
                  </p>
                  <p className="text-xs italic">
                    ***Most important*** is your health.
                  </p>
                  <p className="text-xs text-zinc-600">
                    (В официальных речах, статьях)
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
                  <p>✅ Fronting adjectives (***Beautiful*** was the sunset)</p>
                  <p>✅ Fronting objects (***This book*** I must read)</p>
                  <p>✅ ***Such/So*** structures</p>
                </div>
                <div>
                  <p>✅ ***Here/There*** fronting</p>
                  <p>✅ Fronting adverbials</p>
                  <p>✅ 60+ примеров использования</p>
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
        <Section title="🔵 Fronting Adjectives — Вынос прилагательных">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Fronting прилагательных для эмфазы
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Прилагательное можно вынести в ***начало предложения*** для создания ***сильной эмфазы***! Инверсия: Adjective + BE + Subject!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  1. Adjective + BE + Subject
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    Adjective + BE + Subject
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    ***Beautiful*** was the sunset.
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    (Обычно: The sunset was beautiful.)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Beautiful*** was the sunset over the ocean.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The sunset was beautiful.)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Magnificent*** was the palace we visited.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The palace was magnificent.)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Wonderful*** was the experience.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The experience was wonderful.)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Amazing*** was her performance last night.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (Her performance was amazing.)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Terrible*** was the news we received.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The news was terrible.)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Extraordinary*** was his talent.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (His talent was extraordinary.)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Impressive*** was the size of the building.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The size was impressive.)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Devastating*** was the impact of the storm.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The impact was devastating.)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Brilliant*** was the solution he proposed.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The solution was brilliant.)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Horrifying*** was the scene before us.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The scene was horrifying.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  2. Comparatives & Superlatives Fronting
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***More important*** than money is your health.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (Your health is more important than money.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Most significant*** was the discovery of DNA.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The discovery was most significant.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Greater*** than all expectations was the result.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The result was greater than expected.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Worse*** than anything was the silence.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The silence was worse than anything.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Less obvious*** was the underlying problem.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The problem was less obvious.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Формула
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>Adjective + BE + Subject</strong>
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  Используй для ***сильной эмфазы*** качества или состояния!
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
        <Section title="🟢 SUCH/SO Fronting — Такой/настолько">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Fronting с SUCH и SO для усиления
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              ***SUCH*** и ***SO*** можно вынести в начало для ***драматической эмфазы***! Требуется инверсия!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. SUCH + BE + Subject + THAT
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    SUCH + BE + Noun + THAT...
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    ***Such*** was his anger that he left immediately.
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    (His anger was such that he left.)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Such*** was his anger that he stormed out.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (His anger was so strong...)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Such*** was her beauty that everyone stared.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (Her beauty was so striking...)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Such*** was the noise that we couldn't hear.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The noise was so loud...)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Such*** was his shock that he couldn't speak.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (He was so shocked...)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Such*** was the confusion that nobody knew what to do.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The confusion was extreme...)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Such*** was her talent that she became famous.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (Her talent was exceptional...)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Such*** was the damage that repairs took months.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The damage was extensive...)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Such*** was his excitement that he couldn't sleep.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (He was extremely excited...)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. SO + Adjective + BE + Subject + THAT
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    SO + Adjective + BE + Subject + THAT...
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    ***So*** tired was I that I fell asleep immediately.
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    (I was so tired that...)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***So*** beautiful was the view that we took photos.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The view was so beautiful...)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***So*** loud was the music that we couldn't talk.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The music was so loud...)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***So*** angry was he that he shouted at everyone.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (He was so angry...)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***So*** excited were the children that they couldn't sit still.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The children were so excited...)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***So*** complicated was the task that nobody finished.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The task was so complicated...)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***So*** strong was the wind that trees fell down.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The wind was so strong...)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Запомни!
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  ***SUCH*** + BE + noun | ***SO*** + adjective + BE + subject
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  Используй для ***драматической эмфазы*** степени!
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
        <Section title="🟣 Fronting Objects — Вынос объектов">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Fronting дополнений для эмфазы
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              ***Объект*** (дополнение) можно вынести в начало для ***контраста*** или ***эмфазы***! Инверсия обычно НЕ требуется!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. Object + Subject + Verb
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    Object + Subject + Verb (без инверсии!)
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    ***This book*** I must read before Monday.
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    (I must read this book... — акцент на объекте!)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***This problem*** we must solve immediately.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (We must solve this problem.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Her advice*** I will never forget.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (I will never forget her advice.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***These mistakes*** I have already corrected.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (I have corrected these mistakes.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***That movie*** I really want to see.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (I want to see that movie.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***His words*** I cannot forget.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (I cannot forget his words.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***This decision*** we made together.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (We made this decision.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Your help*** I truly appreciate.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (I appreciate your help.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***The truth*** he finally told us.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (He told us the truth.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. Contrast — Контраст между объектами
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">15 примеров с контрастом</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Coffee*** I love, but ***tea*** I can't stand.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (Контраст: кофе vs чай)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***This plan*** we accepted, but ***that one*** we rejected.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (Контраст: этот план vs тот план)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***His honesty*** I admire, but ***his temper*** I fear.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (Контраст: честность vs характер)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***The results*** we have, but ***the reasons*** we don't understand.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (Контраст: результаты vs причины)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Money*** he has, but ***happiness*** he lacks.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (Контраст: деньги vs счастье)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Формула
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>Object + Subject + Verb (БЕЗ инверсии!)</strong>
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  Используй для ***контраста*** или ***эмфазы*** объекта!
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
        <Section title="🔴 HERE/THERE Fronting — Указание места">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Fronting с HERE/THERE и другими наречиями места
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              ***HERE***, ***THERE*** и другие наречия места можно вынести в начало! Инверсия зависит от типа подлежащего!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. HERE/THERE + Verb + Noun (инверсия!)
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    HERE/THERE + Verb + Noun Subject
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    ***Here*** comes the bus!
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    (The bus comes here.)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Here*** comes the train!
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The train is coming!)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***There*** goes the last chance!
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The last chance is going!)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Here*** is your coffee.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (Your coffee is here.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***There*** stands the old church.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The old church stands there.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Here*** lies the problem.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The problem lies here.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. HERE/THERE + Pronoun + Verb (БЕЗ инверсии!)
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    HERE/THERE + Pronoun + Verb (обычный порядок!)
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    ***Here*** he comes! (НЕ "Here comes he"!)
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    (Если подлежащее — местоимение, инверсии НЕТ!)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Here*** we are!
                      </p>
                      <p className="text-xs text-zinc-600">
                        (We are here!)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***There*** she goes!
                      </p>
                      <p className="text-xs text-zinc-600">
                        (She is going!)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Here*** it is!
                      </p>
                      <p className="text-xs text-zinc-600">
                        (It is here!)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***There*** they are!
                      </p>
                      <p className="text-xs text-zinc-600">
                        (They are there!)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. Other Place Adverbials
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        ***On the table*** lay the keys.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The keys lay on the table.)
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        ***In the garden*** stood a magnificent tree.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (A tree stood in the garden.)
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        ***At the top of the hill*** sits the castle.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The castle sits there.)
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        ***Under the bridge*** flows the river.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The river flows under.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">
                  ⚠️ Критическое правило!
                </h4>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-2 text-center font-bold text-red-900">
                    Инверсия ТОЛЬКО если подлежащее — существительное!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">
                        ✅ Here comes ***the bus***.
                      </p>
                      <p className="text-xs text-zinc-600">(существительное → инверсия)</p>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">
                        ✅ Here ***he*** comes.
                      </p>
                      <p className="text-xs text-zinc-600">(местоимение → БЕЗ инверсии)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Запомни!
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  HERE/THERE + Verb + ***Noun*** (инверсия!)
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  HERE/THERE + ***Pronoun*** + Verb (БЕЗ инверсии!)
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
        <Section title="🟠 Past Participle Fronting — Вынос причастий">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300 mb-4">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              Fronting причастий прошедшего времени (V3)
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              ***Past participle*** (V3) можно вынести в начало для ***драматического эффекта*** в повествовании!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. Past Participle + BE + Subject
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    V3 + BE + Subject
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    ***Gone*** are the days when we were young.
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    (The days are gone...)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Gone*** are the days of our youth.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (Those days are gone.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Lost*** are all my hopes and dreams.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (All hopes are lost.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Forgotten*** are the lessons of the past.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The lessons are forgotten.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Finished*** is the project we worked on.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The project is finished.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Broken*** is the promise he made.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The promise is broken.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Destroyed*** was the city by the earthquake.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The city was destroyed.)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Written*** in stone are the ancient laws.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The laws are written...)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        ***Hidden*** beneath the surface was the truth.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (The truth was hidden.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. Dramatic Narrative — Драматическое повествование
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Scattered*** across the floor were the papers.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (Papers were scattered.)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Hanging*** on the wall was a portrait.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (A portrait was hanging.)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Lying*** on the ground was a wounded soldier.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (A soldier was lying.)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        ***Shattered*** into pieces was my confidence.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (My confidence was shattered.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Формула
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>Past Participle (V3) + BE + Subject</strong>
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  Используй для ***драматического*** повествования!
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
        left: "",
        answers: ["Beautiful", "Beautiful was"],
        right: "was the sunset over the mountains. (adjective fronting)",
        explanation: "Adjective + BE + Subject",
        wide: true,
      },
      {
        left: "",
        answers: ["Such", "Such was"],
        right: "was his anger that he left immediately. (such fronting)",
        explanation: "SUCH + BE + noun + THAT",
        wide: true,
      },
      {
        left: "",
        answers: ["This book", "This book I"],
        right: "I must read before Monday. (object fronting)",
        explanation: "Object + Subject + Verb (без инверсии!)",
        wide: true,
      },
      {
        left: "Here comes",
        answers: ["the bus", "the bus."],
        right: "(here fronting with noun)",
        explanation: "HERE + Verb + Noun (инверсия!)",
      },
      {
        left: "Here",
        answers: ["he comes", "he comes."],
        right: "(here fronting with pronoun)",
        explanation: "HERE + Pronoun + Verb (БЕЗ инверсии!)",
        wide: true,
      },
      {
        left: "",
        answers: ["Gone", "Gone are"],
        right: "are the days when we were young. (participle fronting)",
        explanation: "Past Participle + BE + Subject",
        wide: true,
      },
    ];

    return (
      <>
        <Section title="🎯 Финальный тест + Шпаргалка">
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              Финальный тест: Fronting & Emphasis
            </h3>
          </div>

          <CheckableExercise
            title="Финальный тест — 6 вопросов"
            instruction="Вставь правильное слово/слова."
            items={items}
          />

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 mt-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📋 Шпаргалка: Fronting & Emphasis
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">
                  1️⃣ Fronting Adjectives
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Adjective + BE + Subject</strong>
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  ***Beautiful*** was the sunset.
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">
                  2️⃣ SUCH/SO Fronting
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>SUCH + BE + Noun + THAT</strong>
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  ***Such*** was his anger that he left.
                </p>
                <p className="text-sm text-zinc-700 mt-2">
                  <strong>SO + Adjective + BE + Subject + THAT</strong>
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  ***So*** tired was I that I fell asleep.
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-purple-900 mb-2">
                  3️⃣ Fronting Objects
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Object + Subject + Verb (БЕЗ инверсии!)</strong>
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  ***This book*** I must read.
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-red-900 mb-2">
                  4️⃣ HERE/THERE Fronting
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>HERE/THERE + Verb + Noun</strong> (инверсия!)
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  ***Here*** comes the bus.
                </p>
                <p className="text-sm text-zinc-700 mt-2">
                  <strong>HERE/THERE + Pronoun + Verb</strong> (БЕЗ инверсии!)
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  ***Here*** he comes.
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-orange-900 mb-2">
                  5️⃣ Past Participle Fronting
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>V3 + BE + Subject</strong>
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  ***Gone*** are the days of our youth.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded p-4">
                <p className="font-bold text-red-900 mb-2 text-center">
                  🔑 Золотое правило
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  Fronting — для ***эмфазы***, ***контраста*** и ***драматического эффекта***!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  Инверсия зависит от типа подлежащего (noun vs pronoun)!
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
