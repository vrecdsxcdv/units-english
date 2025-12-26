"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ArticlesAdvanced({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="🌍 Articles — Продвинутое использование">
          <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-lg p-6 border-2 border-cyan-400">
            <h2 className="text-3xl font-bold text-cyan-900 mb-4">
              Артикли: A, AN, THE или Zero Article?
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              Артикли — одна из самых **сложных** тем для русскоязычных! В
              русском их нет, а в английском они **ВЕЗДЕ**. Особенно сложны:
              географические названия, музыкальные инструменты, и случаи, когда
              артикля **НЕТ ВООБЩЕ** (Zero Article)!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h3 className="text-lg font-bold text-green-900 mb-3 text-center">
                  A / AN
                </h3>
                <p className="text-sm mb-2 text-center">
                  Один из многих (неопределённый)
                </p>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    I need <strong className="text-green-700">a</strong> pen.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Мне нужна (какая-то) ручка
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h3 className="text-lg font-bold text-blue-900 mb-3 text-center">
                  THE
                </h3>
                <p className="text-sm mb-2 text-center">
                  Конкретный (определённый)
                </p>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    Give me <strong className="text-blue-700">the</strong> pen.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Дай мне (ту самую) ручку
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h3 className="text-lg font-bold text-purple-900 mb-3 text-center">
                  Ø (Zero)
                </h3>
                <p className="text-sm mb-2 text-center">Нет артикля вообще!</p>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    I like <strong className="text-purple-700">Ø</strong> music.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я люблю музыку (в общем)
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
                  <p>✅ Географические названия (THE или Ø?)</p>
                  <p>✅ Музыкальные инструменты</p>
                  <p>✅ Zero Article (когда НЕТ артикля)</p>
                </div>
                <div>
                  <p>✅ Meals, Transport, Buildings</p>
                  <p>✅ Abstractions & Uncountables</p>
                  <p>✅ 100+ примеров!</p>
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
        <Section title="🗺️ Географические названия — THE или Ø?">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              География: Когда THE, когда без артикля?
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Это **САМОЕ СЛОЖНОЕ** в артиклях! Некоторые названия требуют THE,
              другие — нет. Нужно **ЗАПОМНИТЬ** правила!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  ✅ БЕЗ артикля (Ø):
                </h4>

                <div className="space-y-3">
                  <div className="bg-white rounded p-3 border-l-4 border-green-500">
                    <p className="font-semibold text-green-900 mb-2">
                      1. Страны (почти все!)
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <p>Ø Russia</p>
                      <p>Ø France</p>
                      <p>Ø Japan</p>
                      <p>Ø Germany</p>
                      <p>Ø Italy</p>
                      <p>Ø Spain</p>
                      <p>Ø China</p>
                      <p>Ø Brazil</p>
                      <p>Ø Mexico</p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-green-500">
                    <p className="font-semibold text-green-900 mb-2">
                      2. Города
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <p>Ø Moscow</p>
                      <p>Ø London</p>
                      <p>Ø Paris</p>
                      <p>Ø Tokyo</p>
                      <p>Ø New York</p>
                      <p>Ø Rome</p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-green-500">
                    <p className="font-semibold text-green-900 mb-2">
                      3. Континенты
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <p>Ø Europe</p>
                      <p>Ø Asia</p>
                      <p>Ø Africa</p>
                      <p>Ø America</p>
                      <p>Ø Australia</p>
                      <p>Ø Antarctica</p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-green-500">
                    <p className="font-semibold text-green-900 mb-2">
                      4. Отдельные горы
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <p>Ø Mount Everest</p>
                      <p>Ø Elbrus</p>
                      <p>Ø Kilimanjaro</p>
                      <p>Ø Mont Blanc</p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-green-500">
                    <p className="font-semibold text-green-900 mb-2">
                      5. Отдельные острова
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <p>Ø Sicily</p>
                      <p>Ø Cyprus</p>
                      <p>Ø Madagascar</p>
                      <p>Ø Greenland</p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-green-500">
                    <p className="font-semibold text-green-900 mb-2">
                      6. Озёра
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <p>Ø Lake Baikal</p>
                      <p>Ø Lake Michigan</p>
                      <p>Ø Lake Geneva</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  ✅ С артиклем THE:
                </h4>

                <div className="space-y-3">
                  <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-900 mb-2">
                      1. Страны с "объединением" в названии
                    </p>
                    <div className="space-y-1 text-sm">
                      <p>
                        <strong>THE</strong> United States (США)
                      </p>
                      <p>
                        <strong>THE</strong> United Kingdom (Великобритания)
                      </p>
                      <p>
                        <strong>THE</strong> United Arab Emirates (ОАЭ)
                      </p>
                      <p>
                        <strong>THE</strong> Netherlands (Нидерланды)
                      </p>
                      <p>
                        <strong>THE</strong> Philippines (Филиппины)
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-900 mb-2">2. Реки</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <p>
                        <strong>THE</strong> Volga
                      </p>
                      <p>
                        <strong>THE</strong> Thames
                      </p>
                      <p>
                        <strong>THE</strong> Nile
                      </p>
                      <p>
                        <strong>THE</strong> Amazon
                      </p>
                      <p>
                        <strong>THE</strong> Danube
                      </p>
                      <p>
                        <strong>THE</strong> Mississippi
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-900 mb-2">
                      3. Моря и океаны
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <p>
                        <strong>THE</strong> Black Sea
                      </p>
                      <p>
                        <strong>THE</strong> Pacific Ocean
                      </p>
                      <p>
                        <strong>THE</strong> Atlantic
                      </p>
                      <p>
                        <strong>THE</strong> Mediterranean
                      </p>
                      <p>
                        <strong>THE</strong> Baltic Sea
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-900 mb-2">
                      4. Горные цепи (множественное число!)
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <p>
                        <strong>THE</strong> Alps
                      </p>
                      <p>
                        <strong>THE</strong> Urals
                      </p>
                      <p>
                        <strong>THE</strong> Himalayas
                      </p>
                      <p>
                        <strong>THE</strong> Andes
                      </p>
                      <p>
                        <strong>THE</strong> Rockies
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-900 mb-2">
                      5. Группы островов
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <p>
                        <strong>THE</strong> Canary Islands
                      </p>
                      <p>
                        <strong>THE</strong> Maldives
                      </p>
                      <p>
                        <strong>THE</strong> British Isles
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-900 mb-2">
                      6. Пустыни, каналы, регионы
                    </p>
                    <div className="space-y-1 text-sm">
                      <p>
                        <strong>THE</strong> Sahara Desert
                      </p>
                      <p>
                        <strong>THE</strong> Suez Canal
                      </p>
                      <p>
                        <strong>THE</strong> Middle East
                      </p>
                      <p>
                        <strong>THE</strong> Far East
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400 mt-4">
              <h4 className="font-bold text-yellow-900 mb-3 text-center">
                🔑 Как запомнить?
              </h4>
              <div className="space-y-2 text-sm text-zinc-700">
                <p>
                  <strong>БЕЗ THE:</strong> страны, города, континенты,
                  отдельные горы/острова/озёра
                </p>
                <p>
                  <strong>С THE:</strong> реки, моря, океаны, горные цепи,
                  группы островов, страны с "объединением"
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
        <Section title="🎹 Музыкальные инструменты — THE или Ø?">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Музыкальные инструменты: Когда THE?
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              С музыкальными инструментами **ДВА ВАРИАНТА**: с THE и без! Это
              зависит от контекста!
            </p>

            <div className="grid grid-cols-1 gap-4 mb-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  ✅ С артиклем THE (об игре на инструменте в целом)
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Когда говорим о **СПОСОБНОСТИ** играть на инструменте или **О
                  ДЕЙСТВИИ В ОБЩЕМ**:
                </p>
                <div className="space-y-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I can play <strong className="text-blue-700">THE</strong>{" "}
                      piano.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я умею играть на фортепиано (способность)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      She plays <strong className="text-blue-700">THE</strong>{" "}
                      guitar beautifully.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она красиво играет на гитаре (действие)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      He's learning{" "}
                      <strong className="text-blue-700">THE</strong> violin.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Он учится играть на скрипке
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      Do you play <strong className="text-blue-700">THE</strong>{" "}
                      drums?
                    </p>
                    <p className="text-xs text-zinc-600">
                      Ты играешь на барабанах?
                    </p>
                  </div>
                </div>

                <div className="bg-blue-100 rounded p-3 mt-3">
                  <p className="text-sm font-semibold text-blue-900">
                    💡 Полный список инструментов:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm mt-2">
                    <p>THE piano</p>
                    <p>THE guitar</p>
                    <p>THE violin</p>
                    <p>THE drums</p>
                    <p>THE flute</p>
                    <p>THE saxophone</p>
                    <p>THE trumpet</p>
                    <p>THE cello</p>
                    <p>THE bass</p>
                    <p>THE clarinet</p>
                    <p>THE harp</p>
                    <p>THE accordion</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  ✅ БЕЗ артикля Ø (о конкретном действии / роли)
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Когда инструмент — это **РОЛЬ** в группе или **КОНКРЕТНОЕ
                  ДЕЙСТВИЕ**:
                </p>
                <div className="space-y-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I play <strong className="text-green-700">Ø</strong> piano
                      in a band.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я играю на пианино в группе (роль в группе)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      She's on <strong className="text-green-700">Ø</strong>{" "}
                      guitar tonight.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она сегодня на гитаре (роль)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      He's <strong className="text-green-700">Ø</strong> drums
                      for this song.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Он на барабанах для этой песни (роль)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  🎭 Сравнение: THE vs Ø
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                    <p className="text-sm mb-1">
                      I play <strong>THE piano</strong>. (способность, в общем)
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Я умею играть на фортепиано
                    </p>
                    <p className="text-sm mb-1">
                      I play <strong>piano</strong> in a jazz band. (роль)
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я играю на пианино в джаз-группе
                    </p>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-green-500">
                    <p className="text-sm mb-1">
                      She learns <strong>THE guitar</strong>. (учится играть)
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Она учится играть на гитаре
                    </p>
                    <p className="text-sm mb-1">
                      She's on <strong>guitar</strong> tonight. (роль сегодня)
                    </p>
                    <p className="text-xs text-zinc-600">
                      Сегодня она на гитаре
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
              <h4 className="font-bold text-yellow-900 mb-3 text-center">
                🔑 Правило:
              </h4>
              <div className="space-y-2 text-sm text-zinc-700">
                <p>
                  <strong>Play THE piano</strong> = говорим О ДЕЙСТВИИ В ОБЩЕМ
                  (я умею, я учусь, я играю часто)
                </p>
                <p>
                  <strong>Play piano</strong> = говорим О РОЛИ (я пианист в
                  группе, я сегодня на пианино)
                </p>
                <p className="text-xs text-zinc-600 mt-2">
                  💡 На практике почти всегда используют THE! Без артикля —
                  только в специальных контекстах.
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
        <Section title="💧 Zero Article — Неисчисляемые (Uncountables)">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-2xl font-bold text-cyan-900 mb-4">
              Zero Article: Когда артикля НЕТ ВООБЩЕ!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **Неисчисляемые существительные** (uncountables) в **ОБЩЕМ
              СМЫСЛЕ** НЕ берут артикль! Это: жидкости, материалы, абстрактные
              понятия, информация.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. Жидкости и Еда (в общем смысле)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I like <strong className="text-blue-700">Ø water</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я люблю воду (в целом)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-blue-700">Ø Coffee</strong> is
                      good.
                    </p>
                    <p className="text-xs text-zinc-600">Кофе — это хорошо</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I drink <strong className="text-blue-700">Ø milk</strong>{" "}
                      every day.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я пью молоко каждый день
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-blue-700">Ø Tea</strong> is my
                      favorite.
                    </p>
                    <p className="text-xs text-zinc-600">Чай — мой любимый</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I eat <strong className="text-blue-700">Ø bread</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">Я ем хлеб</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-blue-700">Ø Rice</strong> is
                      healthy.
                    </p>
                    <p className="text-xs text-zinc-600">Рис полезен</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I love <strong className="text-blue-700">Ø cheese</strong>
                      .
                    </p>
                    <p className="text-xs text-zinc-600">Я люблю сыр</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-blue-700">Ø Sugar</strong> is bad.
                    </p>
                    <p className="text-xs text-zinc-600">Сахар вреден</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  2. Абстрактные понятия
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-purple-700">Ø Love</strong> is
                      important.
                    </p>
                    <p className="text-xs text-zinc-600">Любовь важна</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-purple-700">Ø Happiness</strong>{" "}
                      is key.
                    </p>
                    <p className="text-xs text-zinc-600">Счастье — ключ</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I need <strong className="text-purple-700">Ø time</strong>
                      .
                    </p>
                    <p className="text-xs text-zinc-600">Мне нужно время</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-purple-700">Ø Money</strong> can't
                      buy love.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Деньги не купят любовь
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-purple-700">Ø Knowledge</strong>{" "}
                      is power.
                    </p>
                    <p className="text-xs text-zinc-600">Знание — сила</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-purple-700">Ø Freedom</strong>{" "}
                      matters.
                    </p>
                    <p className="text-xs text-zinc-600">Свобода важна</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-purple-700">Ø Life</strong> is
                      short.
                    </p>
                    <p className="text-xs text-zinc-600">Жизнь коротка</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-purple-700">Ø Death</strong> is
                      inevitable.
                    </p>
                    <p className="text-xs text-zinc-600">Смерть неизбежна</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  3. Информация и Знания
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I need{" "}
                      <strong className="text-green-700">Ø information</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне нужна информация
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-green-700">Ø Advice</strong> is
                      valuable.
                    </p>
                    <p className="text-xs text-zinc-600">Совет ценен</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I have <strong className="text-green-700">Ø news</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">У меня есть новости</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-green-700">Ø Research</strong>{" "}
                      shows...
                    </p>
                    <p className="text-xs text-zinc-600">
                      Исследования показывают...
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  4. Материалы
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm">Ø gold</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm">Ø silver</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm">Ø wood</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm">Ø plastic</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm">Ø steel</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm">Ø glass</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-100 rounded-lg p-5 border-2 border-red-400">
                <h4 className="text-xl font-bold text-red-900 mb-3">
                  ⚠️ НО! С конкретным контекстом — THE!
                </h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I like <strong>Ø water</strong>. (в общем)
                    </p>
                    <p className="text-sm text-blue-700">
                      <strong>THE water</strong> in this bottle is cold.
                      (конкретная вода)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong>Ø Love</strong> is important. (любовь в целом)
                    </p>
                    <p className="text-sm text-blue-700">
                      <strong>THE love</strong> I have for you is deep.
                      (конкретная любовь)
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

  if (step === 5) {
    return (
      <>
        <Section title="🍽️ Zero Article — Meals, Transport, Buildings">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Еда, Транспорт, Здания — Когда БЕЗ артикля?
            </h3>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  1. Meals (приёмы пищи) — БЕЗ артикля!
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Когда говорим о **ДЕЙСТВИИ ПРИЁМА ПИЩИ**, артикля НЕТ!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I have{" "}
                      <strong className="text-orange-700">Ø breakfast</strong>{" "}
                      at 8.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я завтракаю в 8 (действие)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      Let's have{" "}
                      <strong className="text-orange-700">Ø lunch</strong>!
                    </p>
                    <p className="text-xs text-zinc-600">Давай пообедаем!</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      <strong className="text-orange-700">Ø Dinner</strong> is
                      ready.
                    </p>
                    <p className="text-xs text-zinc-600">Ужин готов</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      After{" "}
                      <strong className="text-orange-700">Ø breakfast</strong>
                      ...
                    </p>
                    <p className="text-xs text-zinc-600">После завтрака...</p>
                  </div>
                </div>

                <div className="bg-red-50 rounded p-3 mt-3">
                  <p className="text-sm font-semibold text-red-900 mb-2">
                    ⚠️ НО! С прилагательным — артикль появляется!
                  </p>
                  <div className="space-y-1 text-sm">
                    <p>
                      We had <strong>A delicious</strong> dinner. (с
                      прилагательным!)
                    </p>
                    <p>
                      <strong>THE breakfast</strong> we had was amazing.
                      (конкретный)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  2. Transport (транспорт) — БЕЗ артикля!
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  После **BY** транспорт БЕЗ артикля!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I go by <strong className="text-blue-700">Ø car</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">Я езжу на машине</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      She travels by{" "}
                      <strong className="text-blue-700">Ø train</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она путешествует на поезде
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      He came by{" "}
                      <strong className="text-blue-700">Ø bus</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Он приехал на автобусе
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I go by <strong className="text-blue-700">Ø bike</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я езжу на велосипеде
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      They fly by{" "}
                      <strong className="text-blue-700">Ø plane</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Они летают на самолёте
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      We go by{" "}
                      <strong className="text-blue-700">Ø metro</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">Мы ездим на метро</p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded p-3 mt-3">
                  <p className="text-sm font-semibold text-yellow-900">
                    💡 Исключение: on foot (пешком)
                  </p>
                  <p className="text-sm">
                    I go <strong>on foot</strong>. (БЕЗ артикля!)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. Buildings (здания) — Зависит от цели!
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Если идём **ПО НАЗНАЧЕНИЮ** — БЕЗ артикля! Если просто **КАК
                  МЕСТО** — С артиклем!
                </p>

                <div className="space-y-3">
                  <div className="bg-white rounded p-3 border-l-4 border-green-500">
                    <p className="font-semibold text-green-900 mb-2">
                      БЕЗ артикля (по назначению):
                    </p>
                    <div className="space-y-1 text-sm">
                      <p>
                        I go to <strong>Ø school</strong>. (учиться)
                      </p>
                      <p>
                        She's in <strong>Ø hospital</strong>. (как пациент)
                      </p>
                      <p>
                        He's in <strong>Ø prison</strong>. (как заключённый)
                      </p>
                      <p>
                        I go to <strong>Ø church</strong>. (молиться)
                      </p>
                      <p>
                        She's at <strong>Ø university</strong>. (учиться)
                      </p>
                      <p>
                        I'm at <strong>Ø work</strong>. (работать)
                      </p>
                      <p>
                        He's in <strong>Ø bed</strong>. (спать)
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-900 mb-2">
                      С артиклем (просто место):
                    </p>
                    <div className="space-y-1 text-sm">
                      <p>
                        I'm near <strong>THE school</strong>. (здание школы)
                      </p>
                      <p>
                        I visited him in <strong>THE hospital</strong>.
                        (навестить)
                      </p>
                      <p>
                        <strong>THE prison</strong> is old. (здание тюрьмы)
                      </p>
                      <p>
                        <strong>THE church</strong> is beautiful. (здание
                        церкви)
                      </p>
                      <p>
                        I'm sitting on <strong>THE bed</strong>. (мебель)
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded p-3">
                    <p className="text-sm font-semibold text-yellow-900 mb-2">
                      🔑 Правило:
                    </p>
                    <p className="text-sm">
                      <strong>БЕЗ THE</strong> = идём ПО НАЗНАЧЕНИЮ (учиться,
                      лечиться, молиться)
                    </p>
                    <p className="text-sm">
                      <strong>С THE</strong> = просто место, здание
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-100 rounded-lg p-5 border-2 border-red-400">
                <h4 className="text-xl font-bold text-red-900 mb-3">
                  4. Times of Day — БЕЗ артикля!
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm">at Ø night</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm">at Ø noon</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm">at Ø midnight</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm">at Ø dawn</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm">at Ø sunset</p>
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
        left: "I live in",
        answers: ["Russia", "russia"],
        right: ".",
        explanation: "Страны БЕЗ артикля!",
      },
      {
        left: "I visited",
        answers: ["THE United States", "the United States"],
        right: ".",
        explanation: "С 'United' → THE!",
      },
      {
        left: "Have you been to",
        answers: ["THE Alps", "the Alps"],
        right: "?",
        explanation: "Горные цепи → THE!",
      },
      {
        left: "",
        answers: ["THE Volga", "the Volga"],
        right: "is a long river.",
        explanation: "Реки → THE!",
      },
      {
        left: "I want to visit",
        answers: ["Mount Everest", "mount everest", "Mount everest"],
        right: ".",
        explanation: "Отдельная гора БЕЗ артикля!",
      },
      {
        left: "She lives near",
        answers: ["THE Black Sea", "the Black Sea"],
        right: ".",
        explanation: "Моря → THE!",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: География">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-5 border-2 border-orange-400 mb-4">
            <p className="font-bold text-orange-900 mb-2 text-lg">
              🗺️ Заполни пропуски: THE или Ø (ничего не пиши)?
            </p>
            <p className="text-sm text-zinc-700">
              Определи, нужен ли артикль THE для географических названий!
            </p>
          </div>

          <CheckableExercise
            title="География — 6 вопросов"
            instruction="Напиши THE + название или только название (без артикля)."
            items={items}
          />
        </Section>
      </>
    );
  }

  if (step === 7) {
    const items: FillItem[] = [
      {
        left: "I play",
        answers: ["THE piano", "the piano"],
        right: ".",
        explanation: "Музыкальные инструменты → THE!",
      },
      {
        left: "I like",
        answers: ["water", "Water"],
        right: ".",
        explanation: "Неисчисляемое в общем смысле → БЕЗ артикля!",
      },
      {
        left: "I go by",
        answers: ["car", "Car"],
        right: ".",
        explanation: "После BY транспорт БЕЗ артикля!",
      },
      {
        left: "I have",
        answers: ["breakfast", "Breakfast"],
        right: "at 8.",
        explanation: "Приём пищи → БЕЗ артикля!",
      },
      {
        left: "",
        answers: ["Love", "love"],
        right: "is important.",
        explanation: "Абстрактное понятие → БЕЗ артикля!",
      },
      {
        left: "I go to",
        answers: ["school", "School"],
        right: ".",
        explanation: "По назначению (учиться) → БЕЗ артикля!",
      },
      {
        left: "I need",
        answers: ["information", "Information"],
        right: ".",
        explanation: "Information — неисчисляемое → БЕЗ артикля!",
      },
      {
        left: "He's in",
        answers: ["THE hospital", "the hospital"],
        right: "(visiting a friend).",
        explanation: "Навестить друга → THE hospital (просто место)!",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 2: Смешанные случаи">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-400 mb-4">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              🎯 ВСЕ случаи вместе!
            </p>
            <p className="text-sm text-zinc-700">
              География, музыка, uncountables, transport, buildings — всё
              вместе!
            </p>
          </div>

          <CheckableExercise
            title="Смешанные случаи — 8 вопросов"
            instruction="Заполни пропуски: THE + слово или только слово."
            items={items}
          />
        </Section>
      </>
    );
  }

  if (step === 8) {
    return (
      <>
        <Section title="⚠️ 10 КРИТИЧЕСКИХ ошибок">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-400 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4 text-center">
              Типичные ошибки с артиклями
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 1: Артикль со страной
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I live in <strong>THE</strong> Russia.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Страны БЕЗ артикля!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I live in <strong>Russia</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 2: Забыли THE с рекой
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ <strong>Volga</strong> is a long river.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">Реки → THE!</p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ <strong>THE Volga</strong> is a long river.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 3: THE с неисчисляемым
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I like <strong>THE</strong> water.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Неисчисляемое в общем смысле → БЕЗ артикля!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I like <strong>water</strong>. (в общем)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 4: Забыли THE с музыкальным инструментом
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I play <strong>piano</strong>.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Инструменты → THE! (почти всегда)
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I play <strong>THE piano</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 5: THE после BY (транспорт)
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I go by <strong>THE</strong> car.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    После BY транспорт БЕЗ артикля!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I go by <strong>car</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 6: THE с breakfast
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I have <strong>THE</strong> breakfast at 8.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Приёмы пищи БЕЗ артикля!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I have <strong>breakfast</strong> at 8.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 7: THE с school (по назначению)
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I go to <strong>THE</strong> school. (учиться)
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    По назначению → БЕЗ артикля!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I go to <strong>school</strong>. (учусь)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 8: Забыли THE с USA
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I visited <strong>United States</strong>.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Страны с "United" → THE!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I visited <strong>THE United States</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 9: THE с абстрактным понятием
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ <strong>THE Love</strong> is important.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Абстракция в общем → БЕЗ артикля!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ <strong>Love</strong> is important.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 10: Забыли THE с горной цепью
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ <strong>Alps</strong> are beautiful.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Горные цепи (множественное!) → THE!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ <strong>THE Alps</strong> are beautiful.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-400">
            <h4 className="font-bold text-blue-900 mb-3 text-center">
              🔑 Как не ошибаться?
            </h4>
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                <strong>1. БЕЗ THE:</strong> страны, города, континенты, озёра,
                отдельные горы/острова
              </p>
              <p>
                <strong>2. С THE:</strong> реки, моря, горные цепи, группы
                островов
              </p>
              <p>
                <strong>3. БЕЗ THE:</strong> неисчисляемые (water, love, time),
                meals, transport (by car), buildings (по назначению)
              </p>
              <p>
                <strong>4. С THE:</strong> музыкальные инструменты (play THE
                piano)
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
        answers: ["I live in Russia", "I live in russia"],
        right: "",
        explanation: "Убрали THE перед Russia!",
      },
      {
        left: "",
        answers: ["THE Volga is a long river", "the Volga is a long river"],
        right: "",
        explanation: "Добавили THE перед Volga (река)!",
      },
      {
        left: "",
        answers: ["I like water", "I like Water"],
        right: "",
        explanation: "Убрали THE перед water (в общем)!",
      },
      {
        left: "",
        answers: ["I play THE piano", "I play the piano"],
        right: "",
        explanation: "Добавили THE перед piano!",
      },
      {
        left: "",
        answers: ["I go by car", "I go by Car"],
        right: "",
        explanation: "Убрали THE после by!",
      },
      {
        left: "",
        answers: ["I have breakfast at 8", "I have Breakfast at 8"],
        right: "",
        explanation: "Убрали THE перед breakfast!",
      },
    ];

    return (
      <>
        <Section title="❌ Упражнение 3: Исправь ошибки">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
            <p className="font-bold text-red-900 mb-2 text-lg">
              ❌ → ✅ Найди и исправь ошибку!
            </p>
            <p className="text-sm text-zinc-700">
              Каждое предложение содержит ОШИБКУ с артиклем. Напиши ПРАВИЛЬНЫЙ
              вариант!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                I live in THE Russia.
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
                Volga is a long river.
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
              <p className="text-sm text-zinc-900 mb-3">I like THE water.</p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант (вода в общем):
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
              <p className="text-sm text-zinc-900 mb-3">I play piano.</p>
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
              <p className="text-sm text-zinc-900 mb-3">I go by THE car.</p>
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
                I have THE breakfast at 8.
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
          "I visited THE United States",
          "I visited the United States",
          "I visited THE United States.",
          "I visited the United States.",
        ],
        right: "",
        explanation: "Страны с 'United' → THE!",
      },
      {
        left: "",
        answers: [
          "I like music",
          "I like Music",
          "I like music.",
          "I like Music.",
        ],
        right: "",
        explanation: "Музыка в общем → БЕЗ артикля!",
      },
      {
        left: "",
        answers: [
          "She plays THE guitar",
          "She plays the guitar",
          "She plays THE guitar.",
          "She plays the guitar.",
        ],
        right: "",
        explanation: "Музыкальные инструменты → THE!",
      },
      {
        left: "",
        answers: [
          "THE Alps are beautiful",
          "the Alps are beautiful",
          "THE Alps are beautiful.",
          "the Alps are beautiful.",
        ],
        right: "",
        explanation: "Горные цепи → THE!",
      },
      {
        left: "",
        answers: [
          "I go to school",
          "I go to School",
          "I go to school.",
          "I go to School.",
        ],
        right: "",
        explanation: "По назначению (учиться) → БЕЗ артикля!",
      },
      {
        left: "",
        answers: [
          "Love is important",
          "love is important",
          "Love is important.",
          "love is important.",
        ],
        right: "",
        explanation: "Абстракция → БЕЗ артикля!",
      },
    ];

    return (
      <>
        <Section title="🌐 Упражнение 4: Перевод с русского">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-400 mb-4">
            <p className="font-bold text-green-900 mb-2 text-lg">
              🇷🇺 → 🇬🇧 Переведи с русского!
            </p>
            <p className="text-sm text-zinc-700">
              Напиши ПОЛНОЕ предложение на английском с правильным артиклем!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Я посетил США.
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
                2️⃣ Мне нравится музыка. (в общем)
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
                3️⃣ Она играет на гитаре.
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
                4️⃣ Альпы красивы.
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
                5️⃣ Я хожу в школу. (учиться)
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
                6️⃣ Любовь важна.
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
        left: "1. I live in",
        answers: ["Moscow", "moscow"],
        right: ".",
        explanation: "Города БЕЗ артикля!",
      },
      {
        left: "2.",
        answers: ["THE Thames", "the Thames"],
        right: "is a river in London.",
        explanation: "Реки → THE!",
      },
      {
        left: "3. I like",
        answers: ["coffee", "Coffee"],
        right: ".",
        explanation: "Неисчисляемое в общем → БЕЗ артикля!",
      },
      {
        left: "4. She plays",
        answers: ["THE violin", "the violin"],
        right: ".",
        explanation: "Музыкальные инструменты → THE!",
      },
      {
        left: "5. I go by",
        answers: ["train", "Train"],
        right: ".",
        explanation: "После BY транспорт БЕЗ артикля!",
      },
      {
        left: "6. I have",
        answers: ["lunch", "Lunch"],
        right: "at noon.",
        explanation: "Meals → БЕЗ артикля!",
      },
      {
        left: "7.",
        answers: ["Time", "time"],
        right: "is money.",
        explanation: "Абстракция → БЕЗ артикля!",
      },
      {
        left: "8. I visited",
        answers: ["THE Netherlands", "the Netherlands"],
        right: ".",
        explanation: "Страна с 'объединением' → THE!",
      },
    ];

    return (
      <>
        <Section title="🏆 Финальный тест">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-500 mb-4">
            <h3 className="text-3xl font-bold text-yellow-900 mb-3 text-center">
              Финальная проверка знаний!
            </h3>
            <p className="text-sm text-zinc-700 mb-2 text-center">
              8 вопросов на **ВСЕ случаи использования артиклей**. Заполни
              пропуски!
            </p>
            <p className="text-sm font-semibold text-yellow-900 text-center">
              Цель: 7/8 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (8 вопросов)"
            instruction="Заполни пропуски: THE + слово или только слово (без артикля)."
            items={items}
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-6 border-2 border-green-500 mt-6">
            <h3 className="text-2xl font-bold text-green-900 mb-3 text-center">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы освоили продвинутое использование артиклей! Теперь вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>
                ✅ БЕЗОШИБОЧНО использовать THE с географическими названиями
              </li>
              <li>✅ Знать, когда БЕЗ артикля (страны, города, континенты)</li>
              <li>✅ Знать, когда С артиклем (реки, моря, горные цепи)</li>
              <li>✅ Использовать THE с музыкальными инструментами</li>
              <li>✅ Понимать Zero Article с uncountables</li>
              <li>✅ Знать правила для meals, transport, buildings</li>
              <li>
                ✅ Различать "school" (назначение) vs "THE school" (место)
              </li>
              <li>✅ Избегать 10 критических ошибок!</li>
            </ul>
          </div>
        </Section>

        <Section title="📋 Краткая памятка">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-400">
            <h4 className="font-bold text-indigo-900 mb-4 text-center text-xl">
              Articles — Все правила
            </h4>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-blue-400">
                <p className="font-semibold text-blue-900 mb-2 text-lg text-center">
                  География: БЕЗ THE
                </p>
                <div className="text-sm space-y-1">
                  <p>• Страны (Russia, France)</p>
                  <p>• Города (Moscow, London)</p>
                  <p>• Континенты (Europe, Asia)</p>
                  <p>• Отдельные горы (Mount Everest)</p>
                  <p>• Озёра (Lake Baikal)</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-400">
                <p className="font-semibold text-green-900 mb-2 text-lg text-center">
                  География: С THE
                </p>
                <div className="text-sm space-y-1">
                  <p>• Реки (THE Volga, THE Thames)</p>
                  <p>• Моря/Океаны (THE Black Sea)</p>
                  <p>• Горные цепи (THE Alps)</p>
                  <p>• Группы островов (THE Maldives)</p>
                  <p>• Страны с "United" (THE USA, THE UK)</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-400">
                <p className="font-semibold text-purple-900 mb-2 text-lg text-center">
                  Zero Article (БЕЗ артикля)
                </p>
                <div className="text-sm space-y-1">
                  <p>• Неисчисляемые (water, love, time)</p>
                  <p>• Приёмы пищи (breakfast, lunch)</p>
                  <p>• Транспорт после BY (by car, by train)</p>
                  <p>• Здания по назначению (to school, in hospital)</p>
                  <p>• Абстракции (life, death, freedom)</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-orange-400">
                <p className="font-semibold text-orange-900 mb-2 text-lg text-center">
                  Музыкальные инструменты
                </p>
                <div className="text-sm space-y-1">
                  <p>
                    • <strong>Play THE piano</strong> (в общем, способность)
                  </p>
                  <p>
                    • <strong>Play piano</strong> (роль в группе)
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
