"use client";

import CheckableExercise, { FillItem } from "@/components/lesson/CheckableExercise";

interface Props {
  step: number;
}

export default function DescribingGraphs({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-3">📊 Describing Graphs & Trends</h2>
          <p className="text-lg opacity-90">
            Научитесь описывать графики, диаграммы и тренды на английском языке
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">🎯 Что вы изучите:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">✓</span>
              <span className="text-slate-700">Глаголы для описания роста и падения</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">✓</span>
              <span className="text-slate-700">Наречия и прилагательные для степени изменения</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">✓</span>
              <span className="text-slate-700">Описание стабильности и колебаний</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">✓</span>
              <span className="text-slate-700">Структура описания графика для IELTS</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 text-center">
            <div className="text-5xl mb-3">📈</div>
            <p className="text-sm font-medium text-slate-700">Line Graph</p>
            <p className="text-xs text-slate-500">Линейный график</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 text-center">
            <div className="text-5xl mb-3">📊</div>
            <p className="text-sm font-medium text-slate-700">Bar Chart</p>
            <p className="text-xs text-slate-500">Столбчатая диаграмма</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 text-center">
            <div className="text-5xl mb-3">🥧</div>
            <p className="text-sm font-medium text-slate-700">Pie Chart</p>
            <p className="text-xs text-slate-500">Круговая диаграмма</p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <p className="text-amber-800">
            <strong>💡 Где используется:</strong> IELTS Academic Writing Task 1, бизнес-презентации,
            аналитические отчёты, деловая переписка
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Verbs for Upward Trends
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">📈 Глаголы для роста (Upward Trends)</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">Умеренный рост</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• <strong>increase</strong> — увеличиваться</li>
                <li>• <strong>rise</strong> — расти, подниматься</li>
                <li>• <strong>grow</strong> — расти</li>
                <li>• <strong>climb</strong> — подниматься постепенно</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Резкий рост</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• <strong>surge</strong> — резко возрасти</li>
                <li>• <strong>soar</strong> — взлететь</li>
                <li>• <strong>rocket</strong> — взлететь (очень резко)</li>
                <li>• <strong>double</strong> — удвоиться</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm"><strong>Sales increased by 20%</strong> last quarter.</p>
              <p className="text-xs text-slate-500 mt-1">Продажи увеличились на 20% в прошлом квартале.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm"><strong>Demand surged</strong> during the holiday season.</p>
              <p className="text-xs text-slate-500 mt-1">Спрос резко вырос в праздничный сезон.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm"><strong>Profits doubled</strong> in just two years.</p>
              <p className="text-xs text-slate-500 mt-1">Прибыль удвоилась всего за два года.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>📝 Порядок по силе:</strong> rise/increase (обычный) → climb (постепенный) →
            surge (резкий) → soar/rocket (очень резкий)
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Verbs for Downward Trends
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">📉 Глаголы для падения (Downward Trends)</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800 mb-2">Умеренное падение</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• <strong>decrease</strong> — уменьшаться</li>
                <li>• <strong>fall</strong> — падать, снижаться</li>
                <li>• <strong>decline</strong> — снижаться постепенно</li>
                <li>• <strong>drop</strong> — падать</li>
              </ul>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">Резкое падение</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• <strong>plummet</strong> — резко упасть</li>
                <li>• <strong>plunge</strong> — обрушиться</li>
                <li>• <strong>slump</strong> — резко упасть (надолго)</li>
                <li>• <strong>halve</strong> — сократиться вдвое</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm"><strong>Unemployment decreased by 2%</strong> this year.</p>
              <p className="text-xs text-slate-500 mt-1">Безработица снизилась на 2% в этом году.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm"><strong>Share prices plummeted</strong> after the scandal.</p>
              <p className="text-xs text-slate-500 mt-1">Цены акций резко упали после скандала.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm"><strong>Production costs halved</strong> after automation.</p>
              <p className="text-xs text-slate-500 mt-1">Производственные затраты сократились вдвое после автоматизации.</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-xl p-4 border border-red-200">
          <p className="text-sm text-red-800">
            <strong>📝 Порядок по силе:</strong> decrease/fall (обычное) → decline (постепенное) →
            drop (резкое) → plunge/plummet (очень резкое)
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Stability and Fluctuation
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">➡️ Стабильность и колебания</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                <span>➖</span> Стабильность
              </h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• <strong>remain stable</strong> — оставаться стабильным</li>
                <li>• <strong>stay constant</strong> — оставаться постоянным</li>
                <li>• <strong>level off</strong> — выровняться</li>
                <li>• <strong>plateau</strong> — выйти на плато</li>
                <li>• <strong>remain unchanged</strong> — оставаться неизменным</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                <span>〰️</span> Колебания
              </h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• <strong>fluctuate</strong> — колебаться</li>
                <li>• <strong>vary</strong> — варьироваться</li>
                <li>• <strong>oscillate</strong> — колебаться регулярно</li>
                <li>• <strong>go up and down</strong> — то расти, то падать</li>
                <li>• <strong>be erratic</strong> — быть нестабильным</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm">The price <strong>remained stable</strong> at around $50 for the entire year.</p>
              <p className="text-xs text-slate-500 mt-1">Цена оставалась стабильной на уровне около $50 весь год.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm">Sales <strong>fluctuated</strong> between 1,000 and 1,500 units per month.</p>
              <p className="text-xs text-slate-500 mt-1">Продажи колебались между 1000 и 1500 единиц в месяц.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm">After the initial rise, growth <strong>levelled off</strong> in the second half.</p>
              <p className="text-xs text-slate-500 mt-1">После первоначального роста, рост выровнялся во второй половине.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: Adverbs and Adjectives
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">📝 Наречия и прилагательные</h2>

          <div className="mb-6">
            <h3 className="font-bold text-indigo-800 mb-3">Степень изменения</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-indigo-50 rounded-lg p-3 text-center border border-indigo-200">
                <p className="font-bold text-slate-800">sharply</p>
                <p className="text-xs text-slate-500">резко</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-3 text-center border border-indigo-200">
                <p className="font-bold text-slate-800">dramatically</p>
                <p className="text-xs text-slate-500">значительно</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-3 text-center border border-indigo-200">
                <p className="font-bold text-slate-800">rapidly</p>
                <p className="text-xs text-slate-500">быстро</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-3 text-center border border-indigo-200">
                <p className="font-bold text-slate-800">significantly</p>
                <p className="text-xs text-slate-500">существенно</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200">
                <p className="font-bold text-slate-800">gradually</p>
                <p className="text-xs text-slate-500">постепенно</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200">
                <p className="font-bold text-slate-800">steadily</p>
                <p className="text-xs text-slate-500">стабильно</p>
              </div>
              <div className="bg-slate-100 rounded-lg p-3 text-center border border-slate-300">
                <p className="font-bold text-slate-800">slightly</p>
                <p className="text-xs text-slate-500">незначительно</p>
              </div>
              <div className="bg-slate-100 rounded-lg p-3 text-center border border-slate-300">
                <p className="font-bold text-slate-800">marginally</p>
                <p className="text-xs text-slate-500">минимально</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-3">Две формы — одно значение:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-green-700 mb-2">Adverb + Verb</h4>
                <ul className="text-sm space-y-1">
                  <li>• Sales increased <strong>sharply</strong></li>
                  <li>• Prices rose <strong>dramatically</strong></li>
                  <li>• Growth slowed <strong>gradually</strong></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">Adjective + Noun</h4>
                <ul className="text-sm space-y-1">
                  <li>• There was a <strong>sharp</strong> increase</li>
                  <li>• There was a <strong>dramatic</strong> rise</li>
                  <li>• There was a <strong>gradual</strong> slowdown</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <p className="text-sm text-amber-800">
            <strong>💡 Правило:</strong> Наречие идёт после глагола (increased sharply),
            прилагательное — перед существительным (a sharp increase).
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 6: Time Expressions
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🕐 Выражения времени</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">📍 Точки во времени</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• in January / in 2020</li>
                <li>• at the beginning of</li>
                <li>• at the end of</li>
                <li>• by the end of the year</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">📅 Периоды времени</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• over the period</li>
                <li>• during the decade</li>
                <li>• from 2010 to 2020</li>
                <li>• throughout the year</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">🔄 Изменения</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• between ... and ...</li>
                <li>• over the next decade</li>
                <li>• in the first half</li>
                <li>• by mid-year</li>
              </ul>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">⚖️ Сравнения</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• compared to / with</li>
                <li>• in comparison with</li>
                <li>• the same period last year</li>
                <li>• year-on-year</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm"><strong>Between 2015 and 2020</strong>, the number of users increased from 1 million to 5 million.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm">Sales peaked <strong>at the end of December</strong> before declining in January.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm"><strong>Compared to the previous year</strong>, profits rose by 15%.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 7: Prepositions
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🔗 Предлоги с числами</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-3 text-lg">BY</h4>
              <p className="text-sm text-slate-700 mb-2">На сколько изменилось</p>
              <div className="bg-white p-3 rounded mt-2">
                <p className="text-sm font-medium">Sales increased <span className="text-indigo-600">by</span> 20%</p>
                <p className="text-xs text-slate-500 mt-1">Продажи выросли на 20%</p>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-3 text-lg">FROM ... TO</h4>
              <p className="text-sm text-slate-700 mb-2">От ... до ...</p>
              <div className="bg-white p-3 rounded mt-2">
                <p className="text-sm font-medium">Sales rose <span className="text-purple-600">from</span> 100 <span className="text-purple-600">to</span> 150</p>
                <p className="text-xs text-slate-500 mt-1">Продажи выросли с 100 до 150</p>
              </div>
            </div>

            <div className="bg-pink-50 p-5 rounded-lg border border-pink-200">
              <h4 className="font-bold text-pink-800 mb-3 text-lg">OF</h4>
              <p className="text-sm text-slate-700 mb-2">С существительными</p>
              <div className="bg-white p-3 rounded mt-2">
                <p className="text-sm font-medium">An increase <span className="text-pink-600">of</span> 10%</p>
                <p className="text-xs text-slate-500 mt-1">Рост на 10%</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Ещё предлоги:</h4>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Sales peaked <strong>at</strong> $2 million</li>
              <li>• The rate stood <strong>at</strong> 5%</li>
              <li>• Growth remained <strong>around</strong> 10%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 8: Structure
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">📋 Структура описания графика</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</span>
              <div>
                <h4 className="font-bold text-slate-800">Introduction</h4>
                <p className="text-sm text-slate-600 mb-2">Что показывает график + период</p>
                <p className="text-sm text-indigo-700 italic">
                  &quot;The graph shows the changes in unemployment rates between 2010 and 2020.&quot;
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</span>
              <div>
                <h4 className="font-bold text-slate-800">Overview</h4>
                <p className="text-sm text-slate-600 mb-2">Общая тенденция (без цифр!)</p>
                <p className="text-sm text-green-700 italic">
                  &quot;Overall, there was a significant decrease in unemployment over the period.&quot;
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</span>
              <div>
                <h4 className="font-bold text-slate-800">Details (Body 1)</h4>
                <p className="text-sm text-slate-600 mb-2">Описание первой части с цифрами</p>
                <p className="text-sm text-amber-700 italic">
                  &quot;In 2010, the rate stood at 8%, but it then rose sharply to 10% by 2012.&quot;
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-rose-50 rounded-lg border border-rose-200">
              <span className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</span>
              <div>
                <h4 className="font-bold text-slate-800">Details (Body 2)</h4>
                <p className="text-sm text-slate-600 mb-2">Описание второй части/сравнения</p>
                <p className="text-sm text-rose-700 italic">
                  &quot;Following this peak, unemployment declined steadily to just 4% by 2020.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>⚠️ Для IELTS:</strong> Overview обязателен! Пишите его сразу после Introduction.
            Без него максимум 5 баллов.
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 9: Exercise
  // ═══════════════════════════════════════════════════════════════════
  if (step === 9) {
    const items: FillItem[] = [
      {
        left: "Sales",
        right: "sharply in the first quarter.",
        answers: ["increased", "rose", "grew"],
      },
      {
        left: "There was a",
        right: "decline in profits.",
        answers: ["significant", "sharp", "dramatic"],
      },
      {
        left: "Prices increased",
        right: "20%.",
        answers: ["by"],
      },
      {
        left: "The number of users rose",
        right: "1 million",
        answers: ["from"],
      },
      {
        left: "",
        right: "5 million.",
        answers: ["to"],
      },
      {
        left: "The rate remained",
        right: "throughout the year.",
        answers: ["stable", "constant", "steady", "unchanged"],
      },
      {
        left: "",
        right: "2015 and 2020, exports doubled.",
        answers: ["between"],
      },
      {
        left: "Sales",
        right: "between 100 and 150 units.",
        answers: ["fluctuated", "varied"],
      },
      {
        left: "After the rise, growth",
        right: "off in the second half.",
        answers: ["levelled", "leveled"],
      },
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">✏️ Упражнение: Заполните пропуски</h2>
          <p className="text-slate-600 mb-6">
            Вставьте подходящие слова. Может быть несколько правильных вариантов.
          </p>
          <CheckableExercise
            title="Describing Graphs — Practice"
            items={items}
          />
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 10: Final Summary
  // ═══════════════════════════════════════════════════════════════════
  if (step === 10) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-3">🎉 Отлично!</h2>
          <p className="text-lg opacity-90">
            Теперь вы умеете описывать графики и тренды на английском!
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">📚 Что вы изучили:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">✓ Глаголы</h4>
              <p className="text-sm text-slate-700">
                Рост: increase, rise, surge, soar<br/>
                Падение: decrease, fall, plummet, drop<br/>
                Стабильность: remain stable, level off
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">✓ Наречия и прилагательные</h4>
              <p className="text-sm text-slate-700">
                sharply, dramatically, gradually, slightly<br/>
                a sharp increase, a dramatic rise
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">✓ Предлоги</h4>
              <p className="text-sm text-slate-700">
                by 20%, from 100 to 150, an increase of 10%
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">✓ Структура</h4>
              <p className="text-sm text-slate-700">
                Introduction → Overview → Details (Body 1 & 2)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
          <h3 className="font-bold text-indigo-800 mb-2">🎯 Следующие шаги:</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-0.5">→</span>
              <span>Практикуйтесь на реальных графиках из IELTS Cambridge</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-0.5">→</span>
              <span>Старайтесь использовать разнообразную лексику</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-0.5">→</span>
              <span>Пишите Overview без конкретных цифр</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return null;
}
