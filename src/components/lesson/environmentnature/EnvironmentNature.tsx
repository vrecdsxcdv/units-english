"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function EnvironmentNature({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="🌍 Environment & Nature — 250 Words!">
          <div className="bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 rounded-lg p-6 border-2 border-green-500">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Environment & Nature — Окружающая среда и природа
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              Самая МАСШТАБНАЯ лексическая тема! **250 слов** про экологию,
              загрязнение, изменение климата, природу и решения экологических
              проблем!
            </p>

            <div className="bg-gradient-to-r from-red-50 to-orange-100 rounded-lg p-5 border-2 border-red-500 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                🔥 15 СТРАНИЦ! 250+ СЛОВ!
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-red-900 text-center">
                    Pollution Types
                  </p>
                  <p className="text-xs text-zinc-600">
                    air, water, soil, noise, light, plastic
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900 text-center">
                    Climate Change
                  </p>
                  <p className="text-xs text-zinc-600">
                    global warming, greenhouse gases, carbon footprint
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900 text-center">
                    Nature & Wildlife
                  </p>
                  <p className="text-xs text-zinc-600">
                    endangered species, habitat, biodiversity
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-purple-900 text-center">
                    Solutions
                  </p>
                  <p className="text-xs text-zinc-600">
                    renewable energy, recycle, conservation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-5 border-2 border-yellow-500 mb-4">
              <h3 className="font-bold text-yellow-900 mb-3 text-lg text-center">
                ⚠️ Почему это КРАЙНЕ важно?
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-red-900 mb-1">
                    1. Глобальный кризис
                  </p>
                  <p className="text-xs italic">
                    <strong>Climate change</strong> is the biggest challenge
                    facing humanity.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-blue-900 mb-1">
                    2. Экологические дискуссии
                  </p>
                  <p className="text-xs italic">
                    We need to reduce <strong>carbon emissions</strong> and{" "}
                    <strong>pollution</strong>.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-1">
                    3. Личная ответственность
                  </p>
                  <p className="text-xs italic">
                    Everyone should <strong>recycle</strong> and use{" "}
                    <strong>renewable energy</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-lg p-5 border-2 border-emerald-500">
              <h4 className="font-bold text-emerald-900 mb-3 text-center">
                💡 В этой МЕГА-ТЕМЕ вы изучите:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
                <div>
                  <p>✅ 250+ слов про экологию и природу</p>
                  <p>✅ Все типы загрязнений (воздух, вода, почва, шум)</p>
                  <p>✅ Причины и последствия загрязнений</p>
                  <p>
                    ✅ Climate change vocabulary (парниковый эффект, потепление)
                  </p>
                  <p>✅ Endangered animals & ecosystems</p>
                  <p>✅ Deforestation, desertification, ocean acidification</p>
                </div>
                <div>
                  <p>✅ Renewable energy sources (solar, wind, hydro)</p>
                  <p>✅ Recycling & waste management</p>
                  <p>✅ Conservation strategies</p>
                  <p>✅ Environmental disasters</p>
                  <p>✅ 3 большихтекста про экологию</p>
                  <p>✅ Множество упражнений на закрепление</p>
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
        <Section title="💨 Air Pollution — Загрязнение воздуха">
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-400 mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vocabulary про загрязнение воздуха
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Детальная лексика про **загрязнение воздуха**, **причины** и
              **последствия**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-gray-400">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded p-4">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      1. air pollution
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      загрязнение воздуха
                    </p>
                    <p className="text-sm italic">
                      <strong>Air pollution</strong> is a major health hazard.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      2. smog
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">смог</p>
                    <p className="text-sm italic">
                      The city is covered in <strong>smog</strong>.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      3. emissions / exhaust fumes
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      выбросы / выхлопные газы
                    </p>
                    <p className="text-sm italic">
                      Cars produce harmful <strong>emissions</strong>.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      4. carbon dioxide (CO2)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">углекислый газ</p>
                    <p className="text-sm italic">
                      Burning fossil fuels releases <strong>CO2</strong>.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      5. carbon monoxide (CO)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">угарный газ</p>
                    <p className="text-sm italic">
                      <strong>Carbon monoxide</strong> is poisonous.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      6. pollutants / contaminants
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      загрязняющие вещества
                    </p>
                    <p className="text-sm italic">
                      Industrial <strong>pollutants</strong> harm the
                      environment.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      7. toxic / poisonous
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      токсичный / ядовитый
                    </p>
                    <p className="text-sm italic">
                      These chemicals are <strong>toxic</strong>.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      8. factories / industrial plants
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      заводы / промышленные предприятия
                    </p>
                    <p className="text-sm italic">
                      <strong>Factories</strong> emit pollution.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      9. vehicles / automobiles
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      транспортные средства
                    </p>
                    <p className="text-sm italic">
                      <strong>Vehicles</strong> contribute to air pollution.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      10. fossil fuels
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      ископаемое топливо
                    </p>
                    <p className="text-sm italic">
                      Burning <strong>fossil fuels</strong> causes pollution.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      11. coal / oil / gas
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      уголь / нефть / газ
                    </p>
                    <p className="text-sm italic">
                      <strong>Coal</strong> power plants pollute the air.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      12. acid rain
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      кислотный дождь
                    </p>
                    <p className="text-sm italic">
                      Pollution causes <strong>acid rain</strong>.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      13. respiratory problems / diseases
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      респираторные заболевания
                    </p>
                    <p className="text-sm italic">
                      Air pollution causes <strong>respiratory problems</strong>
                      .
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      14. ozone layer
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">озоновый слой</p>
                    <p className="text-sm italic">
                      The <strong>ozone layer</strong> protects us from UV rays.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      15. ozone depletion
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      разрушение озонового слоя
                    </p>
                    <p className="text-sm italic">
                      <strong>Ozone depletion</strong> is dangerous.
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

  if (step === 3) {
    return (
      <>
        <Section title="💧 Water Pollution — Загрязнение воды">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-400 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Vocabulary про загрязнение воды
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Детальная лексика про **загрязнение водных ресурсов**, **причины**
              и **последствия**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-blue-400">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      1. water pollution
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      загрязнение воды
                    </p>
                    <p className="text-sm italic">
                      <strong>Water pollution</strong> threatens marine life.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      2. contaminated water
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      загрязнённая вода
                    </p>
                    <p className="text-sm italic">
                      Don't drink <strong>contaminated water</strong>.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      3. sewage
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">сточные воды</p>
                    <p className="text-sm italic">
                      Untreated <strong>sewage</strong> pollutes rivers.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      4. industrial waste
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      промышленные отходы
                    </p>
                    <p className="text-sm italic">
                      Factories dump <strong>industrial waste</strong> into
                      rivers.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      5. oil spill
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">разлив нефти</p>
                    <p className="text-sm italic">
                      The <strong>oil spill</strong> killed thousands of birds.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      6. chemical waste
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      химические отходы
                    </p>
                    <p className="text-sm italic">
                      <strong>Chemical waste</strong> is extremely dangerous.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      7. pesticides / fertilizers
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      пестициды / удобрения
                    </p>
                    <p className="text-sm italic">
                      <strong>Pesticides</strong> contaminate groundwater.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. plastic waste
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      пластиковые отходы
                    </p>
                    <p className="text-sm italic">
                      <strong>Plastic waste</strong> fills our oceans.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      9. microplastics
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">микропластик</p>
                    <p className="text-sm italic">
                      <strong>Microplastics</strong> are found in fish.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      10. ocean acidification
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      закисление океана
                    </p>
                    <p className="text-sm italic">
                      <strong>Ocean acidification</strong> harms coral reefs.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. marine life / aquatic life
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">морская жизнь</p>
                    <p className="text-sm italic">
                      Pollution threatens <strong>marine life</strong>.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. waterways / rivers / lakes
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      водные пути / реки / озёра
                    </p>
                    <p className="text-sm italic">
                      Protect our <strong>waterways</strong>.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. drinking water / freshwater
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      питьевая вода / пресная вода
                    </p>
                    <p className="text-sm italic">
                      <strong>Drinking water</strong> is scarce in many areas.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      14. water scarcity / shortage
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">нехватка воды</p>
                    <p className="text-sm italic">
                      <strong>Water scarcity</strong> affects millions.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      15. wastewater treatment
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      очистка сточных вод
                    </p>
                    <p className="text-sm italic">
                      <strong>Wastewater treatment</strong> is essential.
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
        <Section title="🌱 Soil & Land Pollution — Загрязнение почвы">
          <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-400 mb-4">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Vocabulary про загрязнение почвы и земли
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Детальная лексика про **загрязнение почвы**, **отходы** и
              **деградацию земель**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-amber-400">
                <div className="space-y-4">
                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      1. soil pollution / contamination
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      загрязнение почвы
                    </p>
                    <p className="text-sm italic">
                      <strong>Soil pollution</strong> reduces crop yields.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      2. landfill
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">свалка</p>
                    <p className="text-sm italic">
                      Waste is buried in <strong>landfills</strong>.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      3. garbage / trash / waste
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">мусор / отходы</p>
                    <p className="text-sm italic">
                      Reduce your <strong>waste</strong>.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      4. litter / littering
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      мусор (выброшенный) / мусорить
                    </p>
                    <p className="text-sm italic">
                      Don't <strong>litter</strong> in public spaces.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      5. toxic waste
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      токсичные отходы
                    </p>
                    <p className="text-sm italic">
                      <strong>Toxic waste</strong> must be disposed of safely.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      6. radioactive waste
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      радиоактивные отходы
                    </p>
                    <p className="text-sm italic">
                      <strong>Radioactive waste</strong> is extremely hazardous.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      7. decompose / biodegradable
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      разлагаться / биоразлагаемый
                    </p>
                    <p className="text-sm italic">
                      Organic waste <strong>decomposes</strong> naturally.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      8. non-biodegradable
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      небиоразлагаемый
                    </p>
                    <p className="text-sm italic">
                      Plastic is <strong>non-biodegradable</strong>.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      9. erosion
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">эрозия</p>
                    <p className="text-sm italic">
                      <strong>Erosion</strong> damages farmland.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      10. desertification
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">опустынивание</p>
                    <p className="text-sm italic">
                      <strong>Desertification</strong> turns land into desert.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      11. land degradation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      деградация земель
                    </p>
                    <p className="text-sm italic">
                      <strong>Land degradation</strong> reduces productivity.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      12. heavy metals
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      тяжёлые металлы
                    </p>
                    <p className="text-sm italic">
                      <strong>Heavy metals</strong> contaminate soil.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      13. hazardous materials
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      опасные материалы
                    </p>
                    <p className="text-sm italic">
                      Handle <strong>hazardous materials</strong> carefully.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      14. dump / dumping
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сбрасывать / свалка
                    </p>
                    <p className="text-sm italic">
                      Illegal <strong>dumping</strong> pollutes land.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      15. sanitary landfill
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      санитарная свалка
                    </p>
                    <p className="text-sm italic">
                      Modern <strong>sanitary landfills</strong> are safer.
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
        <Section title="🔊 Noise & Light Pollution — Шум и свет">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-400 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Vocabulary про шумовое и световое загрязнение
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Лексика про **менее очевидные**, но важные типы загрязнений!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-purple-400">
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      1. noise pollution
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      шумовое загрязнение
                    </p>
                    <p className="text-sm italic">
                      <strong>Noise pollution</strong> affects mental health.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      2. traffic noise
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">дорожный шум</p>
                    <p className="text-sm italic">
                      <strong>Traffic noise</strong> disturbs residents.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      3. industrial noise
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      промышленный шум
                    </p>
                    <p className="text-sm italic">
                      Factories produce <strong>industrial noise</strong>.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      4. light pollution
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      световое загрязнение
                    </p>
                    <p className="text-sm italic">
                      Cities suffer from <strong>light pollution</strong>.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      5. artificial light
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      искусственный свет
                    </p>
                    <p className="text-sm italic">
                      <strong>Artificial light</strong> disrupts wildlife.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      6. disturb / disturbance
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      беспокоить / нарушение
                    </p>
                    <p className="text-sm italic">
                      Noise <strong>disturbs</strong> sleep patterns.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. hearing loss
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">потеря слуха</p>
                    <p className="text-sm italic">
                      Loud noise causes <strong>hearing loss</strong>.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      8. visual pollution
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      визуальное загрязнение
                    </p>
                    <p className="text-sm italic">
                      Billboards create <strong>visual pollution</strong>.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      9. thermal pollution
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      тепловое загрязнение
                    </p>
                    <p className="text-sm italic">
                      Power plants cause <strong>thermal pollution</strong>.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. electromagnetic pollution
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      электромагнитное загрязнение
                    </p>
                    <p className="text-sm italic">
                      5G towers may cause{" "}
                      <strong>electromagnetic pollution</strong>.
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
        <Section title="🌡️ Climate Change & Global Warming — Изменение климата">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-400 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Vocabulary про изменение климата и глобальное потепление
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Самая **критичная** экологическая проблема современности!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-red-400">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      1. climate change
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      изменение климата
                    </p>
                    <p className="text-sm italic">
                      <strong>Climate change</strong> affects everyone.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      2. global warming
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      глобальное потепление
                    </p>
                    <p className="text-sm italic">
                      <strong>Global warming</strong> is accelerating.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      3. greenhouse gases (GHG)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      парниковые газы
                    </p>
                    <p className="text-sm italic">
                      <strong>Greenhouse gases</strong> trap heat.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      4. greenhouse effect
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      парниковый эффект
                    </p>
                    <p className="text-sm italic">
                      The <strong>greenhouse effect</strong> warms the planet.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      5. carbon footprint
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      углеродный след
                    </p>
                    <p className="text-sm italic">
                      Reduce your <strong>carbon footprint</strong>.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      6. carbon neutral / net zero
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      углеродно-нейтральный
                    </p>
                    <p className="text-sm italic">
                      Aim for <strong>net zero</strong> emissions.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      7. rising temperatures
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      повышение температур
                    </p>
                    <p className="text-sm italic">
                      <strong>Rising temperatures</strong> melt ice caps.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      8. melting ice caps / glaciers
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      таяние ледников
                    </p>
                    <p className="text-sm italic">
                      <strong>Melting glaciers</strong> raise sea levels.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. sea level rise
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      повышение уровня моря
                    </p>
                    <p className="text-sm italic">
                      <strong>Sea level rise</strong> threatens coastal cities.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. extreme weather
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      экстремальные погодные условия
                    </p>
                    <p className="text-sm italic">
                      <strong>Extreme weather</strong> events are increasing.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      11. drought / flooding
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      засуха / наводнения
                    </p>
                    <p className="text-sm italic">
                      <strong>Droughts</strong> destroy crops.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      12. hurricanes / typhoons
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      ураганы / тайфуны
                    </p>
                    <p className="text-sm italic">
                      <strong>Hurricanes</strong> are becoming stronger.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      13. wildfires / forest fires
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">лесные пожары</p>
                    <p className="text-sm italic">
                      <strong>Wildfires</strong> devastate ecosystems.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      14. heatwave
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">волна жары</p>
                    <p className="text-sm italic">
                      The <strong>heatwave</strong> killed thousands.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      15. climate crisis / emergency
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      климатический кризис
                    </p>
                    <p className="text-sm italic">
                      We face a <strong>climate emergency</strong>.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded p-4">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      16. Paris Agreement
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      Парижское соглашение
                    </p>
                    <p className="text-sm italic">
                      The <strong>Paris Agreement</strong> limits warming to
                      1.5°C.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      17. tipping point
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      точка невозврата
                    </p>
                    <p className="text-sm italic">
                      We're approaching a <strong>tipping point</strong>.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      18. irreversible damage
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      необратимый ущерб
                    </p>
                    <p className="text-sm italic">
                      Some damage is <strong>irreversible</strong>.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      19. atmospheric CO2 levels
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      уровни CO2 в атмосфере
                    </p>
                    <p className="text-sm italic">
                      <strong>CO2 levels</strong> are at record highs.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      20. methane emissions
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">выбросы метана</p>
                    <p className="text-sm italic">
                      <strong>Methane</strong> is a powerful greenhouse gas.
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

  if (step === 7) {
    return (
      <>
        <Section title="♻️ Recycling & Waste Management — Переработка">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-400 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Vocabulary про переработку и управление отходами
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Что мы можем **сделать сами** для спасения планеты!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-green-400">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      1. recycle / recycling
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      перерабатывать / переработка
                    </p>
                    <p className="text-sm italic">
                      <strong>Recycle</strong> paper, plastic, and glass.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. recyclable / non-recyclable
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      перерабатываемый / неперерабатываемый
                    </p>
                    <p className="text-sm italic">
                      Check if it's <strong>recyclable</strong>.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      3. recycling bin / container
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      контейнер для переработки
                    </p>
                    <p className="text-sm italic">
                      Put it in the <strong>recycling bin</strong>.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      4. separate / sort waste
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      разделять / сортировать мусор
                    </p>
                    <p className="text-sm italic">
                      <strong>Sort waste</strong> into categories.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      5. reuse / upcycle
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      повторно использовать / апсайклить
                    </p>
                    <p className="text-sm italic">
                      <strong>Reuse</strong> bags instead of buying new ones.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      6. reduce / cut down on
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сокращать / уменьшать
                    </p>
                    <p className="text-sm italic">
                      <strong>Reduce</strong> plastic consumption.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      7. the 3 Rs: Reduce, Reuse, Recycle
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      3 правила: сократить, переиспользовать, переработать
                    </p>
                    <p className="text-sm italic">
                      Follow <strong>the 3 Rs</strong>.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      8. compost / composting
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      компост / компостирование
                    </p>
                    <p className="text-sm italic">
                      <strong>Compost</strong> organic waste.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      9. single-use plastic
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      одноразовый пластик
                    </p>
                    <p className="text-sm italic">
                      Avoid <strong>single-use plastic</strong>.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      10. plastic bag / bottle
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      пластиковый пакет / бутылка
                    </p>
                    <p className="text-sm italic">
                      Use reusable <strong>bottles</strong>.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. reusable bag / container
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      многоразовая сумка / контейнер
                    </p>
                    <p className="text-sm italic">
                      Bring <strong>reusable bags</strong>.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. zero waste / waste-free
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">ноль отходов</p>
                    <p className="text-sm italic">
                      Strive for a <strong>zero waste</strong> lifestyle.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. packaging / wrapping
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      упаковка / обёртка
                    </p>
                    <p className="text-sm italic">
                      Reduce unnecessary <strong>packaging</strong>.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      14. eco-friendly / environmentally friendly
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">экологичный</p>
                    <p className="text-sm italic">
                      Choose <strong>eco-friendly</strong> products.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. sustainable / sustainability
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      устойчивый / устойчивость
                    </p>
                    <p className="text-sm italic">
                      <strong>Sustainability</strong> is essential.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded p-4">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      16. circular economy
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      циркулярная экономика
                    </p>
                    <p className="text-sm italic">
                      A <strong>circular economy</strong> minimizes waste.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      17. waste reduction
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сокращение отходов
                    </p>
                    <p className="text-sm italic">
                      <strong>Waste reduction</strong> saves resources.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      18. glass / metal / cardboard
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      стекло / металл / картон
                    </p>
                    <p className="text-sm italic">
                      <strong>Glass</strong> is 100% recyclable.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      19. e-waste (electronic waste)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      электронные отходы
                    </p>
                    <p className="text-sm italic">
                      Properly dispose of <strong>e-waste</strong>.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      20. dispose of / disposal
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      утилизировать / утилизация
                    </p>
                    <p className="text-sm italic">
                      <strong>Dispose of</strong> hazardous waste properly.
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

  if (step === 8) {
    return (
      <>
        <Section title="⚡ Renewable Energy & Conservation — Энергия">
          <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-400 mb-4">
            <h3 className="text-2xl font-bold text-yellow-900 mb-4">
              Vocabulary про возобновляемую энергию и сохранение ресурсов
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **Альтернативы** ископаемому топливу и **способы** экономии!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-yellow-400">
                <div className="space-y-4">
                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      1. renewable energy
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      возобновляемая энергия
                    </p>
                    <p className="text-sm italic">
                      <strong>Renewable energy</strong> is the future.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      2. solar power / solar panels
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      солнечная энергия / солнечные панели
                    </p>
                    <p className="text-sm italic">
                      <strong>Solar panels</strong> generate electricity.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      3. wind power / wind turbines
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      ветровая энергия / ветряные турбины
                    </p>
                    <p className="text-sm italic">
                      <strong>Wind turbines</strong> produce clean energy.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      4. hydroelectric power
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      гидроэлектроэнергия
                    </p>
                    <p className="text-sm italic">
                      <strong>Hydroelectric power</strong> uses water flow.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      5. geothermal energy
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      геотермальная энергия
                    </p>
                    <p className="text-sm italic">
                      <strong>Geothermal energy</strong> comes from Earth's
                      heat.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      6. biomass energy
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      биомассовая энергия
                    </p>
                    <p className="text-sm italic">
                      <strong>Biomass</strong> converts organic matter to fuel.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      7. clean / green energy
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      чистая / зелёная энергия
                    </p>
                    <p className="text-sm italic">
                      Invest in <strong>clean energy</strong>.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. energy efficiency
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      энергоэффективность
                    </p>
                    <p className="text-sm italic">
                      Improve <strong>energy efficiency</strong> at home.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. conserve energy / save energy
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      экономить энергию
                    </p>
                    <p className="text-sm italic">
                      <strong>Conserve energy</strong> by turning off lights.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. conservation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сохранение / консервация
                    </p>
                    <p className="text-sm italic">
                      <strong>Conservation</strong> protects natural resources.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. natural resources
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      природные ресурсы
                    </p>
                    <p className="text-sm italic">
                      Preserve <strong>natural resources</strong>.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. low-carbon / carbon-free
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      низкоуглеродный / безуглеродный
                    </p>
                    <p className="text-sm italic">
                      Transition to <strong>low-carbon</strong> technologies.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. electric vehicles (EVs)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">электромобили</p>
                    <p className="text-sm italic">
                      <strong>Electric vehicles</strong> reduce emissions.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      14. public transport / transportation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      общественный транспорт
                    </p>
                    <p className="text-sm italic">
                      Use <strong>public transport</strong> to reduce pollution.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. carbon capture / storage
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      улавливание углерода
                    </p>
                    <p className="text-sm italic">
                      <strong>Carbon capture</strong> technology is emerging.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded p-4">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      16. green technology
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      зелёные технологии
                    </p>
                    <p className="text-sm italic">
                      Invest in <strong>green technology</strong>.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      17. insulation / insulate
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      изоляция / изолировать
                    </p>
                    <p className="text-sm italic">
                      <strong>Insulate</strong> your home to save energy.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      18. LED bulbs / energy-saving bulbs
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      светодиодные лампы
                    </p>
                    <p className="text-sm italic">
                      Switch to <strong>LED bulbs</strong>.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      19. nuclear energy / power
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      ядерная энергия
                    </p>
                    <p className="text-sm italic">
                      <strong>Nuclear power</strong> is controversial.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      20. transition to renewables
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      переход на возобновляемые источники
                    </p>
                    <p className="text-sm italic">
                      The <strong>transition to renewables</strong> is urgent.
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

  if (step === 9) {
    return (
      <>
        <Section title="🦁 Wildlife & Endangered Species — Дикая природа">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-400 mb-4">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              Vocabulary про дикую природу и исчезающие виды
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Лексика про **защиту животных** и **биоразнообразие**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-orange-400">
                <div className="space-y-4">
                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      1. wildlife
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      дикая природа / дикие животные
                    </p>
                    <p className="text-sm italic">
                      Protect <strong>wildlife</strong> habitats.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      2. endangered species
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      исчезающие виды
                    </p>
                    <p className="text-sm italic">
                      Many animals are <strong>endangered species</strong>.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      3. extinct / extinction
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      вымерший / вымирание
                    </p>
                    <p className="text-sm italic">
                      Dinosaurs are <strong>extinct</strong>.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      4. threaten / threat
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      угрожать / угроза
                    </p>
                    <p className="text-sm italic">
                      Poaching <strong>threatens</strong> rhinos.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      5. biodiversity
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      биоразнообразие
                    </p>
                    <p className="text-sm italic">
                      <strong>Biodiversity</strong> is essential for ecosystems.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      6. ecosystem
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">экосистема</p>
                    <p className="text-sm italic">
                      Every <strong>ecosystem</strong> is interconnected.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      7. habitat / natural habitat
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">среда обитания</p>
                    <p className="text-sm italic">
                      Deforestation destroys <strong>habitats</strong>.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      8. habitat loss / destruction
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      потеря среды обитания
                    </p>
                    <p className="text-sm italic">
                      <strong>Habitat loss</strong> drives species to
                      extinction.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. poaching / poacher
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      браконьерство / браконьер
                    </p>
                    <p className="text-sm italic">
                      <strong>Poaching</strong> is illegal.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. illegal hunting / fishing
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      незаконная охота / рыбалка
                    </p>
                    <p className="text-sm italic">
                      Ban <strong>illegal hunting</strong>.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. overfishing
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      перелов / чрезмерный вылов
                    </p>
                    <p className="text-sm italic">
                      <strong>Overfishing</strong> depletes ocean stocks.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. conservation / preserve
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сохранение / охранять
                    </p>
                    <p className="text-sm italic">
                      <strong>Conservation</strong> efforts save species.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. nature reserve / protected area
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      природный заповедник
                    </p>
                    <p className="text-sm italic">
                      Visit a <strong>nature reserve</strong>.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      14. national park
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      национальный парк
                    </p>
                    <p className="text-sm italic">
                      <strong>National parks</strong> protect ecosystems.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. wildlife sanctuary
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      заповедник дикой природы
                    </p>
                    <p className="text-sm italic">
                      The <strong>sanctuary</strong> rescues injured animals.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded p-4">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      16. breeding program
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      программа разведения
                    </p>
                    <p className="text-sm italic">
                      <strong>Breeding programs</strong> help endangered
                      species.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      17. reintroduce / reintroduction
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      вернуть в природу / реинтродукция
                    </p>
                    <p className="text-sm italic">
                      <strong>Reintroduce</strong> species to the wild.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      18. ivory trade
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      торговля слоновой костью
                    </p>
                    <p className="text-sm italic">
                      The <strong>ivory trade</strong> kills elephants.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      19. trophy hunting
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      трофейная охота
                    </p>
                    <p className="text-sm italic">
                      <strong>Trophy hunting</strong> is controversial.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      20. coral reefs / coral bleaching
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      коралловые рифы / обесцвечивание кораллов
                    </p>
                    <p className="text-sm italic">
                      <strong>Coral bleaching</strong> is killing reefs.
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

  if (step === 10) {
    return (
      <>
        <Section title="🌳 Deforestation & Habitat Loss — Вырубка лесов">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-600 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Vocabulary про вырубку лесов и потерю среды обитания
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Лексика про **уничтожение лесов** и **последствия** для планеты!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-green-600">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      1. deforestation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">вырубка лесов</p>
                    <p className="text-sm italic">
                      <strong>Deforestation</strong> destroys rainforests.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      2. rainforest / tropical forest
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      тропический лес
                    </p>
                    <p className="text-sm italic">
                      The Amazon <strong>rainforest</strong> is shrinking.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      3. logging / illegal logging
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      лесозаготовка / незаконная рубка
                    </p>
                    <p className="text-sm italic">
                      <strong>Illegal logging</strong> must be stopped.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      4. clear-cutting / slash and burn
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сплошная вырубка / подсечно-огневое земледелие
                    </p>
                    <p className="text-sm italic">
                      <strong>Clear-cutting</strong> removes entire forests.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      5. reforestation / afforestation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      лесовосстановление / лесонасаждение
                    </p>
                    <p className="text-sm italic">
                      <strong>Reforestation</strong> projects plant new trees.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      6. tree planting / plant trees
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      посадка деревьев
                    </p>
                    <p className="text-sm italic">
                      <strong>Plant trees</strong> to fight climate change.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      7. forest fires / forest fire prevention
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      лесные пожары / предотвращение пожаров
                    </p>
                    <p className="text-sm italic">
                      <strong>Forest fires</strong> devastate ecosystems.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      8. biodiversity loss
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      потеря биоразнообразия
                    </p>
                    <p className="text-sm italic">
                      Deforestation causes <strong>biodiversity loss</strong>.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      9. palm oil plantations
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      плантации пальмового масла
                    </p>
                    <p className="text-sm italic">
                      <strong>Palm oil plantations</strong> replace forests.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      10. agricultural expansion
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      расширение сельского хозяйства
                    </p>
                    <p className="text-sm italic">
                      <strong>Agricultural expansion</strong> drives
                      deforestation.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      11. cattle ranching
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">скотоводство</p>
                    <p className="text-sm italic">
                      <strong>Cattle ranching</strong> clears forests.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      12. lungs of the Earth
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">лёгкие Земли</p>
                    <p className="text-sm italic">
                      Rainforests are the <strong>lungs of the Earth</strong>.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      13. carbon sink
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      поглотитель углерода
                    </p>
                    <p className="text-sm italic">
                      Forests act as <strong>carbon sinks</strong>.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      14. indigenous peoples / communities
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      коренные народы
                    </p>
                    <p className="text-sm italic">
                      <strong>Indigenous peoples</strong> protect forests.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      15. sustainable forestry
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      устойчивое лесное хозяйство
                    </p>
                    <p className="text-sm italic">
                      Practice <strong>sustainable forestry</strong>.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      16. timber / wood products
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      древесина / деревянные изделия
                    </p>
                    <p className="text-sm italic">
                      Buy certified <strong>timber</strong>.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      17. paper consumption
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      потребление бумаги
                    </p>
                    <p className="text-sm italic">
                      Reduce <strong>paper consumption</strong>.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded p-4">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      18. urbanization
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">урбанизация</p>
                    <p className="text-sm italic">
                      <strong>Urbanization</strong> destroys natural habitats.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      19. fragmentation / habitat fragmentation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      фрагментация среды обитания
                    </p>
                    <p className="text-sm italic">
                      Roads cause <strong>habitat fragmentation</strong>.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      20. old-growth forest / virgin forest
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      старовозрастной лес / девственный лес
                    </p>
                    <p className="text-sm italic">
                      Protect <strong>old-growth forests</strong>.
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

  if (step === 11) {
    return (
      <>
        <Section title="📖 Reading: The Environmental Crisis">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border-2 border-red-300 mb-6">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              📚 Текст 1: Our Planet in Peril
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-red-200 mb-4">
              <p className="text-base leading-relaxed mb-4">
                Our planet is facing an unprecedented{" "}
                <strong>environmental crisis</strong>.{" "}
                <strong>Climate change</strong>, driven by{" "}
                <strong>greenhouse gas emissions</strong> from burning{" "}
                <strong>fossil fuels</strong>, is accelerating at an alarming
                rate. Average global temperatures have risen by 1.2°C since
                pre-industrial times, causing <strong>melting ice caps</strong>,{" "}
                <strong>rising sea levels</strong>, and more frequent{" "}
                <strong>extreme weather</strong> events like{" "}
                <strong>hurricanes</strong>, <strong>droughts</strong>, and{" "}
                <strong>wildfires</strong>.
              </p>

              <p className="text-base leading-relaxed mb-4">
                <strong>Air pollution</strong> chokes our cities with{" "}
                <strong>smog</strong> and <strong>toxic emissions</strong>,
                causing <strong>respiratory diseases</strong> that kill millions
                annually. <strong>Water pollution</strong> from{" "}
                <strong>industrial waste</strong>, <strong>sewage</strong>, and{" "}
                <strong>plastic waste</strong> contaminates our rivers, lakes,
                and oceans. Scientists estimate that by 2050, there will be more{" "}
                <strong>microplastics</strong> in the ocean than fish.
              </p>

              <p className="text-base leading-relaxed mb-4">
                <strong>Deforestation</strong> destroys 10 million hectares of
                forest every year — the size of Iceland. The Amazon{" "}
                <strong>rainforest</strong>, often called the "
                <strong>lungs of the Earth</strong>," has lost 17% of its
                coverage due to <strong>illegal logging</strong>,{" "}
                <strong>cattle ranching</strong>, and{" "}
                <strong>agricultural expansion</strong>. This{" "}
                <strong>habitat loss</strong> drives countless species to{" "}
                <strong>extinction</strong>.
              </p>

              <p className="text-base leading-relaxed">
                <strong>Biodiversity</strong> is collapsing at an unprecedented
                rate. More than 1 million animal and plant species are now{" "}
                <strong>threatened</strong> with <strong>extinction</strong> due
                to human activities. <strong>Poaching</strong>,{" "}
                <strong>overfishing</strong>, and{" "}
                <strong>habitat destruction</strong> have pushed iconic species
                like tigers, elephants, and rhinos to the brink. If we don't act
                now, we risk passing an irreversible{" "}
                <strong>tipping point</strong>.
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
              <h4 className="text-xl font-bold text-red-900 mb-3">
                💡 Comprehension Questions
              </h4>

              <div className="space-y-3">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    1. What is causing climate change?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Greenhouse gas emissions from burning fossil fuels.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    2. What will happen to oceans by 2050 if nothing changes?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → There will be more microplastics than fish.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    3. Why is the Amazon rainforest called "the lungs of the
                    Earth"?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → It produces oxygen and absorbs CO2 (acts as a carbon
                    sink).
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    4. How many species are threatened with extinction?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → More than 1 million animal and plant species.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 12) {
    return (
      <>
        <Section title="🌿 Reading: Solutions & Hope">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              📚 Текст 2: What Can We Do?
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-green-300 mb-4">
              <p className="text-base leading-relaxed mb-4">
                Despite the dire warnings, there is still hope. The transition
                to <strong>renewable energy</strong> is accelerating worldwide.{" "}
                <strong>Solar panels</strong> and <strong>wind turbines</strong>{" "}
                are becoming cheaper than <strong>fossil fuels</strong>.
                Countries are investing in <strong>electric vehicles</strong>,{" "}
                <strong>public transport</strong>, and{" "}
                <strong>green technology</strong> to achieve{" "}
                <strong>carbon neutrality</strong> by 2050.
              </p>

              <p className="text-base leading-relaxed mb-4">
                Individual actions matter too. Following{" "}
                <strong>the 3 Rs — Reduce, Reuse, Recycle</strong> can
                significantly cut waste. Avoiding{" "}
                <strong>single-use plastic</strong>, using{" "}
                <strong>reusable bags</strong> and bottles, and choosing{" "}
                <strong>eco-friendly</strong> products all help.{" "}
                <strong>Composting</strong> organic waste and properly{" "}
                <strong>disposing of e-waste</strong> prevent{" "}
                <strong>soil pollution</strong>.
              </p>

              <p className="text-base leading-relaxed mb-4">
                <strong>Conservation</strong> efforts are showing results.{" "}
                <strong>Reforestation</strong> projects plant billions of trees
                annually. <strong>Protected areas</strong> like{" "}
                <strong>national parks</strong> and{" "}
                <strong>nature reserves</strong> safeguard critical{" "}
                <strong>habitats</strong>. <strong>Breeding programs</strong>{" "}
                have saved species like the giant panda from{" "}
                <strong>extinction</strong>, and some have been successfully{" "}
                <strong>reintroduced</strong> to the wild.
              </p>

              <p className="text-base leading-relaxed">
                Governments are enacting stricter environmental laws. The{" "}
                <strong>Paris Agreement</strong> unites nations to limit{" "}
                <strong>global warming</strong> to 1.5°C. Bans on{" "}
                <strong>illegal logging</strong>, <strong>poaching</strong>, and
                the <strong>ivory trade</strong> protect{" "}
                <strong>wildlife</strong>. Investment in{" "}
                <strong>wastewater treatment</strong>,{" "}
                <strong>sustainable forestry</strong>, and{" "}
                <strong>circular economy</strong> models shows we can balance
                human needs with planetary health. Every action counts — the
                future is in our hands.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-400">
              <h4 className="text-xl font-bold text-green-900 mb-3">
                💡 Comprehension Questions
              </h4>

              <div className="space-y-3">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    1. What are the 3 Rs?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Reduce, Reuse, Recycle.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    2. Why are renewable energy sources becoming popular?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → They are becoming cheaper than fossil fuels.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    3. Give two examples of conservation efforts mentioned.
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Reforestation projects and breeding programs.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    4. What is the goal of the Paris Agreement?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → To limit global warming to 1.5°C.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 13) {
    return (
      <>
        <Section title="✍️ Practice: Fill in the Blanks">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-400 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              📝 Упражнение 1: Вставьте правильные слова
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Choose the correct word from the list:{" "}
              <strong>
                emissions, endangered, deforestation, recycling, renewable,
                extinct, pollution, habitat, biodiversity, carbon footprint
              </strong>
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
                <CheckableExercise
                  items={[
                    {
                      left: "1. We need to reduce our",
                      answers: ["carbon footprint"],
                      right: "to help the planet.",
                      wide: true,
                    },
                    {
                      left: "2. Many species are",
                      answers: ["endangered"],
                      right: "due to habitat loss.",
                      wide: true,
                    },
                    {
                      left: "3. Dinosaurs are",
                      answers: ["extinct"],
                      right: "— they disappeared millions of years ago.",
                      wide: true,
                    },
                    {
                      left: "4.",
                      answers: ["Deforestation"],
                      right: "is destroying the Amazon rainforest.",
                      wide: true,
                    },
                    {
                      left: "5. Solar and wind are types of",
                      answers: ["renewable"],
                      right: "energy.",
                      wide: true,
                    },
                    {
                      left: "6. Air",
                      answers: ["pollution"],
                      right: "causes respiratory problems.",
                      wide: true,
                    },
                    {
                      left: "7. Car",
                      answers: ["emissions"],
                      right: "contribute to smog.",
                      wide: true,
                    },
                    {
                      left: "8.",
                      answers: ["Recycling"],
                      right: "plastic helps reduce waste.",
                      wide: true,
                    },
                    {
                      left: "9. Animals lose their",
                      answers: ["habitat"],
                      right: "when forests are cleared.",
                      wide: true,
                    },
                    {
                      left: "10. Protecting",
                      answers: ["biodiversity"],
                      right: "is essential for healthy ecosystems.",
                      wide: true,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 14) {
    return (
      <>
        <Section title="🎯 Practice: Translation & Application">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-400 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              📝 Упражнение 2: Переведите с русского на английский
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Используйте изученную лексику для перевода:
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
                <CheckableExercise
                  items={[
                    {
                      left: "1. Мы должны использовать возобновляемую энергию:",
                      answers: [
                        "We must use renewable energy",
                        "We should use renewable energy",
                        "We need to use renewable energy",
                      ],
                      wide: true,
                    },
                    {
                      left: "2. Загрязнение воды угрожает морской жизни:",
                      answers: [
                        "Water pollution threatens marine life",
                        "Water pollution is threatening marine life",
                      ],
                      wide: true,
                    },
                    {
                      left: "3. Мы должны прекратить вырубку лесов:",
                      answers: [
                        "We must stop deforestation",
                        "We need to stop deforestation",
                        "We should stop deforestation",
                      ],
                      wide: true,
                    },
                    {
                      left: "4. Пластик не разлагается естественным образом:",
                      answers: [
                        "Plastic doesn't decompose naturally",
                        "Plastic does not decompose naturally",
                      ],
                      wide: true,
                    },
                    {
                      left: "5. Исчезающие виды нуждаются в защите:",
                      answers: [
                        "Endangered species need protection",
                        "Endangered species require protection",
                      ],
                      wide: true,
                    },
                    {
                      left: "6. Переработка сокращает количество отходов:",
                      answers: [
                        "Recycling reduces waste",
                        "Recycling cuts waste",
                        "Recycling decreases waste",
                      ],
                      wide: true,
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-400 mb-6">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              📝 Упражнение 3: True or False?
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">
                  1. Fossil fuels are a renewable energy source.
                </p>
                <p className="text-sm text-red-700 italic">
                  → FALSE (They are non-renewable)
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">
                  2. Plastic is biodegradable.
                </p>
                <p className="text-sm text-red-700 italic">
                  → FALSE (It's non-biodegradable)
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">
                  3. Rainforests are called "the lungs of the Earth."
                </p>
                <p className="text-sm text-green-700 italic">→ TRUE</p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">
                  4. Wind turbines produce clean energy.
                </p>
                <p className="text-sm text-green-700 italic">→ TRUE</p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">
                  5. Deforestation increases biodiversity.
                </p>
                <p className="text-sm text-red-700 italic">
                  → FALSE (It destroys biodiversity)
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">
                  6. Electric vehicles reduce emissions.
                </p>
                <p className="text-sm text-green-700 italic">→ TRUE</p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 15) {
    return (
      <>
        <Section title="📚 Complete Vocabulary List — 250+ Words">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-400 mb-6">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              🎓 Полный список всех изученных слов
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Все 250+ слов по теме Environment & Nature, которые вы освоили!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* AIR POLLUTION */}
              <div className="bg-white rounded-lg p-4 border-2 border-gray-300">
                <h4 className="font-bold text-lg text-gray-900 mb-2">
                  💨 Air Pollution (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• air pollution</li>
                  <li>• smog</li>
                  <li>• emissions / exhaust fumes</li>
                  <li>• carbon dioxide (CO2)</li>
                  <li>• carbon monoxide (CO)</li>
                  <li>• pollutants / contaminants</li>
                  <li>• toxic / poisonous</li>
                  <li>• factories / industrial plants</li>
                  <li>• vehicles / automobiles</li>
                  <li>• fossil fuels</li>
                  <li>• coal / oil / gas</li>
                  <li>• acid rain</li>
                  <li>• respiratory problems</li>
                  <li>• ozone layer</li>
                  <li>• ozone depletion</li>
                </ul>
              </div>

              {/* WATER POLLUTION */}
              <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                <h4 className="font-bold text-lg text-blue-900 mb-2">
                  💧 Water Pollution (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• water pollution</li>
                  <li>• contaminated water</li>
                  <li>• sewage</li>
                  <li>• industrial waste</li>
                  <li>• oil spill</li>
                  <li>• chemical waste</li>
                  <li>• pesticides / fertilizers</li>
                  <li>• plastic waste</li>
                  <li>• microplastics</li>
                  <li>• ocean acidification</li>
                  <li>• marine life / aquatic life</li>
                  <li>• waterways / rivers / lakes</li>
                  <li>• drinking water / freshwater</li>
                  <li>• water scarcity</li>
                  <li>• wastewater treatment</li>
                </ul>
              </div>

              {/* SOIL & LAND */}
              <div className="bg-white rounded-lg p-4 border-2 border-amber-300">
                <h4 className="font-bold text-lg text-amber-900 mb-2">
                  🌱 Soil & Land Pollution (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• soil pollution</li>
                  <li>• landfill</li>
                  <li>• garbage / trash / waste</li>
                  <li>• litter / littering</li>
                  <li>• toxic waste</li>
                  <li>• radioactive waste</li>
                  <li>• decompose / biodegradable</li>
                  <li>• non-biodegradable</li>
                  <li>• erosion</li>
                  <li>• desertification</li>
                  <li>• land degradation</li>
                  <li>• heavy metals</li>
                  <li>• hazardous materials</li>
                  <li>• dump / dumping</li>
                  <li>• sanitary landfill</li>
                </ul>
              </div>

              {/* NOISE & LIGHT */}
              <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                <h4 className="font-bold text-lg text-purple-900 mb-2">
                  🔊 Noise & Light Pollution (10)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• noise pollution</li>
                  <li>• traffic noise</li>
                  <li>• industrial noise</li>
                  <li>• light pollution</li>
                  <li>• artificial light</li>
                  <li>• disturb / disturbance</li>
                  <li>• hearing loss</li>
                  <li>• visual pollution</li>
                  <li>• thermal pollution</li>
                  <li>• electromagnetic pollution</li>
                </ul>
              </div>

              {/* CLIMATE CHANGE */}
              <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                <h4 className="font-bold text-lg text-red-900 mb-2">
                  🌡️ Climate Change (20)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• climate change</li>
                  <li>• global warming</li>
                  <li>• greenhouse gases (GHG)</li>
                  <li>• greenhouse effect</li>
                  <li>• carbon footprint</li>
                  <li>• carbon neutral / net zero</li>
                  <li>• rising temperatures</li>
                  <li>• melting ice caps / glaciers</li>
                  <li>• sea level rise</li>
                  <li>• extreme weather</li>
                  <li>• drought / flooding</li>
                  <li>• hurricanes / typhoons</li>
                  <li>• wildfires / forest fires</li>
                  <li>• heatwave</li>
                  <li>• climate crisis / emergency</li>
                  <li>• Paris Agreement</li>
                  <li>• tipping point</li>
                  <li>• irreversible damage</li>
                  <li>• atmospheric CO2 levels</li>
                  <li>• methane emissions</li>
                </ul>
              </div>

              {/* RECYCLING */}
              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <h4 className="font-bold text-lg text-green-900 mb-2">
                  ♻️ Recycling & Waste (20)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• recycle / recycling</li>
                  <li>• recyclable / non-recyclable</li>
                  <li>• recycling bin / container</li>
                  <li>• separate / sort waste</li>
                  <li>• reuse / upcycle</li>
                  <li>• reduce / cut down on</li>
                  <li>• the 3 Rs</li>
                  <li>• compost / composting</li>
                  <li>• single-use plastic</li>
                  <li>• plastic bag / bottle</li>
                  <li>• reusable bag / container</li>
                  <li>• zero waste / waste-free</li>
                  <li>• packaging / wrapping</li>
                  <li>• eco-friendly</li>
                  <li>• sustainable / sustainability</li>
                  <li>• circular economy</li>
                  <li>• waste reduction</li>
                  <li>• glass / metal / cardboard</li>
                  <li>• e-waste</li>
                  <li>• dispose of / disposal</li>
                </ul>
              </div>

              {/* RENEWABLE ENERGY */}
              <div className="bg-white rounded-lg p-4 border-2 border-yellow-300">
                <h4 className="font-bold text-lg text-yellow-900 mb-2">
                  ⚡ Renewable Energy (20)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• renewable energy</li>
                  <li>• solar power / solar panels</li>
                  <li>• wind power / wind turbines</li>
                  <li>• hydroelectric power</li>
                  <li>• geothermal energy</li>
                  <li>• biomass energy</li>
                  <li>• clean / green energy</li>
                  <li>• energy efficiency</li>
                  <li>• conserve / save energy</li>
                  <li>• conservation</li>
                  <li>• natural resources</li>
                  <li>• low-carbon / carbon-free</li>
                  <li>• electric vehicles (EVs)</li>
                  <li>• public transport</li>
                  <li>• carbon capture / storage</li>
                  <li>• green technology</li>
                  <li>• insulation / insulate</li>
                  <li>• LED bulbs</li>
                  <li>• nuclear energy</li>
                  <li>• transition to renewables</li>
                </ul>
              </div>

              {/* WILDLIFE */}
              <div className="bg-white rounded-lg p-4 border-2 border-orange-300">
                <h4 className="font-bold text-lg text-orange-900 mb-2">
                  🦁 Wildlife & Endangered (20)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• wildlife</li>
                  <li>• endangered species</li>
                  <li>• extinct / extinction</li>
                  <li>• threaten / threat</li>
                  <li>• biodiversity</li>
                  <li>• ecosystem</li>
                  <li>• habitat / natural habitat</li>
                  <li>• habitat loss / destruction</li>
                  <li>• poaching / poacher</li>
                  <li>• illegal hunting / fishing</li>
                  <li>• overfishing</li>
                  <li>• conservation / preserve</li>
                  <li>• nature reserve / protected area</li>
                  <li>• national park</li>
                  <li>• wildlife sanctuary</li>
                  <li>• breeding program</li>
                  <li>• reintroduce / reintroduction</li>
                  <li>• ivory trade</li>
                  <li>• trophy hunting</li>
                  <li>• coral reefs / coral bleaching</li>
                </ul>
              </div>

              {/* DEFORESTATION */}
              <div className="bg-white rounded-lg p-4 border-2 border-green-600">
                <h4 className="font-bold text-lg text-green-900 mb-2">
                  🌳 Deforestation (20)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• deforestation</li>
                  <li>• rainforest / tropical forest</li>
                  <li>• logging / illegal logging</li>
                  <li>• clear-cutting / slash and burn</li>
                  <li>• reforestation / afforestation</li>
                  <li>• tree planting / plant trees</li>
                  <li>• forest fires</li>
                  <li>• biodiversity loss</li>
                  <li>• palm oil plantations</li>
                  <li>• agricultural expansion</li>
                  <li>• cattle ranching</li>
                  <li>• lungs of the Earth</li>
                  <li>• carbon sink</li>
                  <li>• indigenous peoples</li>
                  <li>• sustainable forestry</li>
                  <li>• timber / wood products</li>
                  <li>• paper consumption</li>
                  <li>• urbanization</li>
                  <li>• habitat fragmentation</li>
                  <li>• old-growth forest</li>
                </ul>
              </div>

              {/* ACTIONS & GENERAL */}
              <div className="bg-white rounded-lg p-4 border-2 border-indigo-300">
                <h4 className="font-bold text-lg text-indigo-900 mb-2">
                  🌍 Actions & General (15+)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• protect / protection</li>
                  <li>• save / rescue</li>
                  <li>• prevent / prevention</li>
                  <li>• reduce / reduction</li>
                  <li>• ban / prohibit</li>
                  <li>• harm / damage</li>
                  <li>• destroy / destruction</li>
                  <li>• cause / lead to</li>
                  <li>• affect / impact</li>
                  <li>• contribute to</li>
                  <li>• emit / release</li>
                  <li>• absorb / capture</li>
                  <li>• restore / restoration</li>
                  <li>• implement / enforce</li>
                  <li>• environmental awareness</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mt-6 border-2 border-green-400">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                🎯 Итого изучено:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-gray-900">250+</p>
                  <p className="text-sm text-gray-700">Words</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-blue-900">2</p>
                  <p className="text-sm text-gray-700">Reading Texts</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-green-900">3</p>
                  <p className="text-sm text-gray-700">Practice Exercises</p>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-800 text-center">
                  🌍 <strong>Congratulations!</strong> You've mastered
                  comprehensive environmental vocabulary covering pollution,
                  climate change, wildlife, energy, and conservation. You can
                  now discuss environmental issues confidently in English!
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return <div>Step {step} not found</div>;
}
