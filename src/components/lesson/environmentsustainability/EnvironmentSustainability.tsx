"use client";

import { useState } from "react";

type Props = { step: number };

export default function EnvironmentSustainability({ step }: Props) {
  switch (step) {
    case 1: return <Step1 />;
    case 2: return <Step2 />;
    case 3: return <Step3 />;
    case 4: return <Step4 />;
    case 5: return <Step5 />;
    case 6: return <Step6 />;
    case 7: return <Step7 />;
    case 8: return <Step8 />;
    case 9: return <Step9 />;
    case 10: return <Step10 />;
    default: return <Step1 />;
  }
}

/* ============ STEP 1: Introduction ============ */
function Step1() {
  const [activeSection, setActiveSection] = useState<"intro" | "why" | "topics">("intro");

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🌍</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Environment & Sustainability</h2>
        <p className="text-xl text-gray-600">Экология и устойчивое развитие</p>
      </div>

      <div className="flex justify-center gap-2 flex-wrap">
        {[
          { id: "intro", label: "Введение", icon: "📚" },
          { id: "why", label: "Зачем изучать", icon: "🎯" },
          { id: "topics", label: "Темы урока", icon: "📋" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id as "intro" | "why" | "topics")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeSection === tab.id
                ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {activeSection === "intro" && (
        <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 p-8">
          <h3 className="text-2xl font-bold text-emerald-700 mb-4">Добро пожаловать!</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Этот урок посвящён <strong>экологической терминологии</strong> — одной из важнейших тем современности.
            Изменение климата, устойчивое развитие и охрана окружающей среды обсуждаются на всех уровнях —
            от бытовых разговоров до международных саммитов.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
              <div className="text-3xl mb-2">🌱</div>
              <h4 className="font-bold text-emerald-800">Устойчивое развитие</h4>
              <p className="text-gray-600 text-sm">ESG, зелёная экономика, возобновляемые ресурсы</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="text-3xl mb-2">🏭</div>
              <h4 className="font-bold text-green-800">Загрязнение</h4>
              <p className="text-gray-600 text-sm">Выбросы, отходы, углеродный след</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
              <div className="text-3xl mb-2">🌊</div>
              <h4 className="font-bold text-teal-800">Климат</h4>
              <p className="text-gray-600 text-sm">Глобальное потепление, парниковые газы</p>
            </div>
            <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200">
              <div className="text-3xl mb-2">🦁</div>
              <h4 className="font-bold text-cyan-800">Биоразнообразие</h4>
              <p className="text-gray-600 text-sm">Вымирающие виды, экосистемы</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === "why" && (
        <div className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-8">
          <h3 className="text-2xl font-bold text-green-700 mb-4">Зачем учить экологическую лексику?</h3>
          <div className="space-y-4">
            {[
              { icon: "📰", title: "Понимание новостей", desc: "Климатические саммиты, экологические катастрофы — всё это ежедневные новости" },
              { icon: "💼", title: "Карьера", desc: "ESG-специалисты, экологи, зелёная энергетика — быстрорастущие отрасли" },
              { icon: "🎓", title: "Образование", desc: "Экологические темы включены в международные экзамены (IELTS, TOEFL)" },
              { icon: "🗣️", title: "Дискуссии", desc: "Участие в обсуждениях о будущем планеты на международном уровне" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === "topics" && (
        <div className="bg-white rounded-2xl shadow-lg border-2 border-teal-200 p-8">
          <h3 className="text-2xl font-bold text-teal-700 mb-4">Что мы изучим:</h3>
          <div className="grid gap-3">
            {[
              { step: 2, title: "Core Environment Terms", desc: "carbon footprint, biodiversity, deforestation, greenwashing" },
              { step: 3, title: "Climate Change", desc: "global warming, greenhouse gases, emissions" },
              { step: 4, title: "Pollution & Waste", desc: "contamination, toxic, landfill, microplastics" },
              { step: 5, title: "Energy & Resources", desc: "renewable, fossil fuels, solar, wind power" },
              { step: 6, title: "Conservation", desc: "preservation, endangered species, habitat" },
              { step: 7, title: "Sustainability", desc: "eco-friendly, sustainable, zero waste, circular economy" },
              { step: 8, title: "Environmental Policy", desc: "regulations, carbon tax, Paris Agreement" },
              { step: 9, title: "Phrases & Collocations", desc: "устойчивые выражения и словосочетания" },
              { step: 10, title: "Interactive Practice", desc: "упражнения с проверкой ответов" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4 p-3 bg-gradient-to-r from-gray-50 to-teal-50 rounded-xl border border-teal-100">
                <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-full flex items-center justify-center font-bold">{item.step}</span>
                <div>
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl p-6 border-2 border-emerald-300">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-emerald-800 mb-2">Интересный факт</h3>
            <p className="text-gray-700">
              Термин <strong>&quot;carbon footprint&quot;</strong> стал популярным после рекламной кампании BP в 2005 году.
              Сейчас это один из самых используемых экологических терминов в мире.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ STEP 2: Core Terms ============ */
function Step2() {
  const terms = [
    {
      term: "Carbon footprint",
      pronunciation: "/ˈkɑːbən ˈfʊtprɪnt/",
      translation: "углеродный след",
      definition: "The total amount of greenhouse gases produced by human activities, measured in units of carbon dioxide",
      examples: ["Flying has a larger carbon footprint than taking the train.", "Companies are trying to reduce their carbon footprint."],
      related: ["carbon emissions", "carbon neutral", "carbon offset"],
    },
    {
      term: "Biodiversity",
      pronunciation: "/ˌbaɪəʊdaɪˈvɜːsəti/",
      translation: "биоразнообразие",
      definition: "The variety of plant and animal life in a particular habitat or in the world as a whole",
      examples: ["The Amazon rainforest is home to incredible biodiversity.", "Loss of biodiversity threatens ecosystems worldwide."],
      related: ["ecosystem", "species", "habitat", "extinction"],
    },
    {
      term: "Deforestation",
      pronunciation: "/diːˌfɒrɪˈsteɪʃən/",
      translation: "вырубка лесов",
      definition: "The action of clearing forests or trees, usually for agriculture or urban development",
      examples: ["Deforestation in the Amazon has accelerated in recent years.", "Deforestation contributes significantly to climate change."],
      related: ["logging", "clear-cutting", "reforestation", "afforestation"],
    },
    {
      term: "Greenwashing",
      pronunciation: "/ˈɡriːnwɒʃɪŋ/",
      translation: "гринвошинг (экологичный имидж без реальных действий)",
      definition: "Misleading marketing that makes products or companies appear more environmentally friendly than they actually are",
      examples: ["Many consumers are learning to spot greenwashing tactics.", "The company was accused of greenwashing their polluting practices."],
      related: ["eco-friendly", "sustainable", "marketing", "misleading"],
    },
    {
      term: "Ecosystem",
      pronunciation: "/ˈiːkəʊsɪstəm/",
      translation: "экосистема",
      definition: "A biological community of interacting organisms and their physical environment",
      examples: ["Coral reefs are fragile ecosystems.", "Human activity is disrupting natural ecosystems."],
      related: ["habitat", "biome", "food chain", "ecological"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🌿</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Core Environment Terms</h2>
        <p className="text-xl text-gray-600">Ключевые экологические термины</p>
      </div>

      <div className="space-y-6">
        {terms.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold">{item.term}</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{item.pronunciation}</span>
              </div>
              <p className="text-emerald-100 mt-1">{item.translation}</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">Definition:</h4>
                <p className="text-gray-700">{item.definition}</p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">Examples:</h4>
                <ul className="space-y-2">
                  {item.examples.map((ex, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">▸</span>
                      <span className="text-gray-700 italic">{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <h4 className="font-semibold text-emerald-700 mb-2">Related terms:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.related.map((r, i) => (
                    <span key={i} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ STEP 3: Climate Change ============ */
function Step3() {
  const terms = [
    { term: "Global warming", pronunciation: "/ˈɡləʊbəl ˈwɔːmɪŋ/", translation: "глобальное потепление", definition: "A gradual increase in the overall temperature of the Earth's atmosphere", examples: ["Global warming is causing polar ice caps to melt.", "Scientists warn about the effects of global warming."], related: ["climate change", "temperature rise", "heating"] },
    { term: "Greenhouse gases", pronunciation: "/ˈɡriːnhaʊs ˈɡæsɪz/", translation: "парниковые газы", definition: "Gases that trap heat in the atmosphere, including CO2, methane, and nitrous oxide", examples: ["Greenhouse gases are the main cause of climate change.", "Reducing greenhouse gas emissions is a global priority."], related: ["CO2", "methane", "emissions", "atmosphere"] },
    { term: "Emissions", pronunciation: "/ɪˈmɪʃənz/", translation: "выбросы", definition: "The production and discharge of gases or radiation into the atmosphere", examples: ["The factory was fined for illegal emissions.", "Electric cars produce zero direct emissions."], related: ["pollutants", "exhaust", "discharge", "carbon emissions"] },
    { term: "Climate crisis", pronunciation: "/ˈklaɪmət ˈkraɪsɪs/", translation: "климатический кризис", definition: "The serious and urgent threat posed by climate change to the environment and human welfare", examples: ["Young activists are demanding action on the climate crisis.", "The climate crisis requires immediate global action."], related: ["climate emergency", "environmental crisis", "global threat"] },
    { term: "Sea level rise", pronunciation: "/siː ˈlevəl raɪz/", translation: "повышение уровня моря", definition: "An increase in the level of the world's oceans due to global warming", examples: ["Sea level rise threatens coastal communities.", "Some islands may disappear due to sea level rise."], related: ["flooding", "coastal erosion", "melting ice"] },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🌡️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Climate Change</h2>
        <p className="text-xl text-gray-600">Изменение климата</p>
      </div>

      <div className="space-y-6">
        {terms.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold">{item.term}</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{item.pronunciation}</span>
              </div>
              <p className="text-orange-100 mt-1">{item.translation}</p>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700"><strong className="text-orange-700">Definition:</strong> {item.definition}</p>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Examples:</h4>
                {item.examples.map((ex, i) => <p key={i} className="text-gray-700 italic ml-4">▸ {ex}</p>)}
              </div>
              <div className="flex flex-wrap gap-2 pt-3 border-t">
                {item.related.map((r, i) => <span key={i} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">{r}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6 border-2 border-orange-300">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📊</span>
          <div>
            <h3 className="font-bold text-xl text-orange-800 mb-2">Факт</h3>
            <p className="text-gray-700">Средняя температура Земли уже повысилась на <strong>1.1°C</strong> с доиндустриальной эпохи. Учёные предупреждают: превышение <strong>1.5°C</strong> приведёт к необратимым последствиям.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ STEP 4: Pollution & Waste ============ */
function Step4() {
  const terms = [
    { term: "Contamination", pronunciation: "/kənˌtæmɪˈneɪʃən/", translation: "загрязнение, заражение", definition: "The presence of a harmful or unwanted substance in something", examples: ["Water contamination is a serious health risk.", "Soil contamination from chemicals affects agriculture."], related: ["pollute", "toxic", "hazardous"] },
    { term: "Landfill", pronunciation: "/ˈlændfɪl/", translation: "свалка, полигон отходов", definition: "A site for disposing of waste materials by burying them underground", examples: ["Most plastic ends up in landfills.", "The city is running out of landfill space."], related: ["waste disposal", "garbage dump", "waste management"] },
    { term: "Microplastics", pronunciation: "/ˈmaɪkrəʊplæstɪks/", translation: "микропластик", definition: "Tiny plastic particles less than 5mm that pollute environments and enter food chains", examples: ["Microplastics have been found in drinking water.", "Fish consume microplastics in the ocean."], related: ["plastic pollution", "ocean pollution", "particles"] },
    { term: "Toxic waste", pronunciation: "/ˈtɒksɪk weɪst/", translation: "токсичные отходы", definition: "Waste material that can cause death or injury to living creatures", examples: ["The company illegally dumped toxic waste.", "Toxic waste must be disposed of safely."], related: ["hazardous waste", "chemical waste", "industrial waste"] },
    { term: "Air quality", pronunciation: "/eə ˈkwɒləti/", translation: "качество воздуха", definition: "A measure of how clean or polluted the air is", examples: ["Air quality in major cities has improved.", "Poor air quality causes respiratory problems."], related: ["smog", "particulate matter", "pollution index"] },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🏭</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Pollution & Waste</h2>
        <p className="text-xl text-gray-600">Загрязнение и отходы</p>
      </div>

      <div className="space-y-6">
        {terms.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-gray-300 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold">{item.term}</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{item.pronunciation}</span>
              </div>
              <p className="text-gray-300 mt-1">{item.translation}</p>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700"><strong className="text-gray-700">Definition:</strong> {item.definition}</p>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Examples:</h4>
                {item.examples.map((ex, i) => <p key={i} className="text-gray-700 italic ml-4">▸ {ex}</p>)}
              </div>
              <div className="flex flex-wrap gap-2 pt-3 border-t">
                {item.related.map((r, i) => <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{r}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ STEP 5: Energy & Resources ============ */
function Step5() {
  const terms = [
    { term: "Renewable energy", pronunciation: "/rɪˈnjuːəbəl ˈenədʒi/", translation: "возобновляемая энергия", definition: "Energy from sources that are naturally replenished, such as sunlight, wind, and water", examples: ["Germany gets 40% of its electricity from renewable energy.", "Investment in renewable energy is growing rapidly."], related: ["solar", "wind", "hydropower", "clean energy"] },
    { term: "Fossil fuels", pronunciation: "/ˈfɒsəl fjuːəlz/", translation: "ископаемое топливо", definition: "Natural fuels formed from the remains of living organisms, including coal, oil, and gas", examples: ["Burning fossil fuels releases CO2.", "We need to transition away from fossil fuels."], related: ["coal", "oil", "natural gas", "petroleum"] },
    { term: "Solar power", pronunciation: "/ˈsəʊlə ˈpaʊə/", translation: "солнечная энергия", definition: "Energy from the sun converted into thermal or electrical energy", examples: ["Solar power is becoming increasingly affordable.", "Many homes now have solar panels."], related: ["photovoltaic", "solar panels", "solar farm"] },
    { term: "Wind turbine", pronunciation: "/wɪnd ˈtɜːbaɪn/", translation: "ветрогенератор", definition: "A device that converts wind energy into electricity", examples: ["Offshore wind turbines generate massive amounts of power.", "The country installed thousands of wind turbines."], related: ["wind farm", "wind power", "offshore wind"] },
    { term: "Natural resources", pronunciation: "/ˈnætʃrəl rɪˈzɔːsɪz/", translation: "природные ресурсы", definition: "Materials or substances occurring in nature that can be exploited for economic gain", examples: ["We must protect our natural resources.", "Many countries depend on exporting natural resources."], related: ["raw materials", "minerals", "timber", "water"] },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">⚡</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Energy & Resources</h2>
        <p className="text-xl text-gray-600">Энергия и ресурсы</p>
      </div>

      <div className="space-y-6">
        {terms.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-yellow-200 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold">{item.term}</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{item.pronunciation}</span>
              </div>
              <p className="text-yellow-100 mt-1">{item.translation}</p>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700"><strong className="text-yellow-700">Definition:</strong> {item.definition}</p>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Examples:</h4>
                {item.examples.map((ex, i) => <p key={i} className="text-gray-700 italic ml-4">▸ {ex}</p>)}
              </div>
              <div className="flex flex-wrap gap-2 pt-3 border-t">
                {item.related.map((r, i) => <span key={i} className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">{r}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ STEP 6: Conservation ============ */
function Step6() {
  const terms = [
    { term: "Endangered species", pronunciation: "/ɪnˈdeɪndʒəd ˈspiːʃiːz/", translation: "вымирающие виды", definition: "A species at risk of extinction because of human activity or environmental changes", examples: ["The panda is an endangered species.", "Laws protect endangered species from hunting."], related: ["extinction", "threatened", "protected species", "wildlife"] },
    { term: "Habitat", pronunciation: "/ˈhæbɪtæt/", translation: "среда обитания", definition: "The natural home or environment of an animal, plant, or organism", examples: ["Deforestation destroys animal habitats.", "Wetlands provide important habitats for birds."], related: ["environment", "ecosystem", "natural home"] },
    { term: "Conservation", pronunciation: "/ˌkɒnsəˈveɪʃən/", translation: "охрана природы, консервация", definition: "The protection and preservation of natural environments and wildlife", examples: ["Conservation efforts have saved the bald eagle.", "Marine conservation is crucial for ocean health."], related: ["preservation", "protection", "wildlife management"] },
    { term: "Wildlife", pronunciation: "/ˈwaɪldlaɪf/", translation: "дикая природа", definition: "Wild animals collectively; native fauna of a region", examples: ["Safari parks protect African wildlife.", "Urban development threatens local wildlife."], related: ["fauna", "wild animals", "nature"] },
    { term: "Nature reserve", pronunciation: "/ˈneɪtʃə rɪˈzɜːv/", translation: "природный заповедник", definition: "An area of land managed to conserve wildlife and natural features", examples: ["The nature reserve is home to rare birds.", "Visitors must follow rules in the nature reserve."], related: ["national park", "sanctuary", "protected area"] },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🦁</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Conservation</h2>
        <p className="text-xl text-gray-600">Охрана природы</p>
      </div>

      <div className="space-y-6">
        {terms.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-green-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold">{item.term}</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{item.pronunciation}</span>
              </div>
              <p className="text-green-100 mt-1">{item.translation}</p>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700"><strong className="text-green-700">Definition:</strong> {item.definition}</p>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Examples:</h4>
                {item.examples.map((ex, i) => <p key={i} className="text-gray-700 italic ml-4">▸ {ex}</p>)}
              </div>
              <div className="flex flex-wrap gap-2 pt-3 border-t">
                {item.related.map((r, i) => <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">{r}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ STEP 7: Sustainability ============ */
function Step7() {
  const terms = [
    { term: "Sustainable", pronunciation: "/səˈsteɪnəbəl/", translation: "устойчивый", definition: "Able to be maintained without depleting natural resources or causing ecological damage", examples: ["We need more sustainable farming practices.", "The company committed to sustainable production."], related: ["sustainability", "eco-friendly", "green"] },
    { term: "Eco-friendly", pronunciation: "/ˈiːkəʊ ˈfrendli/", translation: "экологичный", definition: "Not harmful to the environment", examples: ["Consumers prefer eco-friendly products.", "The hotel uses eco-friendly cleaning supplies."], related: ["environmentally friendly", "green", "sustainable"] },
    { term: "Zero waste", pronunciation: "/ˈzɪərəʊ weɪst/", translation: "безотходный", definition: "A philosophy aimed at eliminating all waste through recycling and reuse", examples: ["The zero waste movement is growing globally.", "She tries to live a zero waste lifestyle."], related: ["waste-free", "recycling", "reduce, reuse, recycle"] },
    { term: "Circular economy", pronunciation: "/ˈsɜːkjələ iˈkɒnəmi/", translation: "циркулярная экономика", definition: "An economic system aimed at eliminating waste through continual use of resources", examples: ["The circular economy turns waste into resources.", "Companies are adopting circular economy principles."], related: ["recycling", "reuse", "sustainable economy"] },
    { term: "Carbon neutral", pronunciation: "/ˈkɑːbən ˈnjuːtrəl/", translation: "углеродно-нейтральный", definition: "Making no net release of carbon dioxide to the atmosphere", examples: ["The company aims to be carbon neutral by 2030.", "Carbon neutral products offset their emissions."], related: ["net zero", "carbon offset", "emissions reduction"] },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">♻️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Sustainability</h2>
        <p className="text-xl text-gray-600">Устойчивое развитие</p>
      </div>

      <div className="space-y-6">
        {terms.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-teal-200 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold">{item.term}</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{item.pronunciation}</span>
              </div>
              <p className="text-teal-100 mt-1">{item.translation}</p>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700"><strong className="text-teal-700">Definition:</strong> {item.definition}</p>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Examples:</h4>
                {item.examples.map((ex, i) => <p key={i} className="text-gray-700 italic ml-4">▸ {ex}</p>)}
              </div>
              <div className="flex flex-wrap gap-2 pt-3 border-t">
                {item.related.map((r, i) => <span key={i} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">{r}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ STEP 8: Environmental Policy ============ */
function Step8() {
  const terms = [
    { term: "Carbon tax", pronunciation: "/ˈkɑːbən tæks/", translation: "углеродный налог", definition: "A tax on fossil fuels based on the amount of carbon dioxide they emit", examples: ["Several countries have implemented a carbon tax.", "The carbon tax encourages cleaner energy use."], related: ["emissions trading", "environmental tax", "pollution tax"] },
    { term: "Paris Agreement", pronunciation: "/ˈpærɪs əˈɡriːmənt/", translation: "Парижское соглашение", definition: "An international treaty on climate change adopted in 2015 to limit global warming", examples: ["195 countries signed the Paris Agreement.", "The Paris Agreement aims to limit warming to 1.5°C."], related: ["climate treaty", "COP", "UN climate conference"] },
    { term: "Environmental regulations", pronunciation: "/ɪnˌvaɪrənˈmentəl reɡjuˈleɪʃənz/", translation: "экологические нормы", definition: "Laws and rules designed to protect the environment", examples: ["Companies must comply with environmental regulations.", "Stricter environmental regulations are needed."], related: ["environmental law", "compliance", "standards"] },
    { term: "ESG", pronunciation: "/iː es dʒiː/", translation: "ESG (экология, социальная ответственность, управление)", definition: "Environmental, Social, and Governance criteria used to evaluate companies", examples: ["Investors increasingly consider ESG factors.", "The company improved its ESG rating."], related: ["sustainable investing", "corporate responsibility", "green finance"] },
    { term: "Net zero", pronunciation: "/net ˈzɪərəʊ/", translation: "нулевые выбросы", definition: "Achieving a balance between the greenhouse gases emitted and those removed from atmosphere", examples: ["Many countries have pledged to reach net zero by 2050.", "Net zero requires massive investment in clean energy."], related: ["carbon neutral", "emissions reduction", "climate target"] },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📜</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Environmental Policy</h2>
        <p className="text-xl text-gray-600">Экологическая политика</p>
      </div>

      <div className="space-y-6">
        {terms.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold">{item.term}</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{item.pronunciation}</span>
              </div>
              <p className="text-blue-100 mt-1">{item.translation}</p>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700"><strong className="text-blue-700">Definition:</strong> {item.definition}</p>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Examples:</h4>
                {item.examples.map((ex, i) => <p key={i} className="text-gray-700 italic ml-4">▸ {ex}</p>)}
              </div>
              <div className="flex flex-wrap gap-2 pt-3 border-t">
                {item.related.map((r, i) => <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{r}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ STEP 9: Phrases & Collocations ============ */
function Step9() {
  const collocations = {
    environment: [
      { phrase: "protect the environment", translation: "защищать окружающую среду" },
      { phrase: "harm the environment", translation: "наносить вред окружающей среде" },
      { phrase: "environmental impact", translation: "воздействие на окружающую среду" },
      { phrase: "environmental awareness", translation: "экологическая осведомлённость" },
    ],
    climate: [
      { phrase: "tackle climate change", translation: "бороться с изменением климата" },
      { phrase: "combat global warming", translation: "противодействовать глобальному потеплению" },
      { phrase: "climate action", translation: "климатические меры" },
      { phrase: "climate emergency", translation: "климатическая чрезвычайная ситуация" },
    ],
    emissions: [
      { phrase: "reduce emissions", translation: "сокращать выбросы" },
      { phrase: "cut carbon emissions", translation: "снижать углеродные выбросы" },
      { phrase: "zero emissions", translation: "нулевые выбросы" },
      { phrase: "emission standards", translation: "нормы выбросов" },
    ],
    sustainability: [
      { phrase: "sustainable development", translation: "устойчивое развитие" },
      { phrase: "go green", translation: "переходить на экологичный образ жизни" },
      { phrase: "environmentally friendly", translation: "экологически чистый" },
      { phrase: "green initiative", translation: "экологическая инициатива" },
    ],
  };

  const expressions = [
    { phrase: "leave a smaller footprint", translation: "оставлять меньший след", example: "We can all leave a smaller footprint by using public transport." },
    { phrase: "go carbon neutral", translation: "стать углеродно-нейтральным", example: "Many airlines now offer options to go carbon neutral." },
    { phrase: "turn the tide on", translation: "переломить ситуацию", example: "We must turn the tide on plastic pollution." },
    { phrase: "at stake", translation: "под угрозой", example: "The future of our planet is at stake." },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🔗</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Phrases & Collocations</h2>
        <p className="text-xl text-gray-600">Устойчивые выражения</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(collocations).map(([category, phrases]) => (
          <div key={category} className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-4">
              <h3 className="text-xl font-bold capitalize">{category} Collocations</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {phrases.map((item, i) => (
                  <li key={i} className="flex justify-between items-start gap-2 p-2 bg-gray-50 rounded-lg">
                    <span className="font-medium text-emerald-700">{item.phrase}</span>
                    <span className="text-gray-600 text-sm text-right">{item.translation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg border-2 border-teal-200 p-6">
        <h3 className="text-2xl font-bold text-teal-700 mb-4">💬 Useful Expressions</h3>
        <div className="space-y-4">
          {expressions.map((item, i) => (
            <div key={i} className="p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <span className="font-bold text-teal-700 text-lg">{item.phrase}</span>
                <span className="text-gray-600 italic">{item.translation}</span>
              </div>
              <p className="text-gray-700 text-sm bg-white/50 p-2 rounded-lg">
                <span className="text-teal-500">Example: </span>{item.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============ STEP 10: Interactive Practice ============ */
function Step10() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean | null>>({});
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setResults((prev) => ({ ...prev, [id]: null }));
  };

  const checkAnswer = (id: string, correctAnswers: string[]) => {
    const userAnswer = (answers[id] || "").toLowerCase().trim();
    const isCorrect = correctAnswers.some((c) => c.toLowerCase() === userAnswer);
    setResults((prev) => ({ ...prev, [id]: isCorrect }));
  };

  const fillInTheBlank = [
    { id: "q1", question: "Companies often engage in _____ to appear more environmentally friendly than they are.", answers: ["greenwashing"], hint: "ложная экологичность" },
    { id: "q2", question: "The _____ of the Amazon rainforest is a major environmental concern.", answers: ["deforestation"], hint: "вырубка лесов" },
    { id: "q3", question: "Flying has a larger carbon _____ than taking the train.", answers: ["footprint"], hint: "след" },
    { id: "q4", question: "_____ gases trap heat in the atmosphere.", answers: ["greenhouse"], hint: "парниковые" },
    { id: "q5", question: "Solar and wind power are examples of _____ energy.", answers: ["renewable"], hint: "возобновляемая" },
    { id: "q6", question: "The panda is an _____ species.", answers: ["endangered"], hint: "вымирающий" },
    { id: "q7", question: "Many countries signed the Paris _____ in 2015.", answers: ["agreement"], hint: "соглашение" },
    { id: "q8", question: "The company aims to be carbon _____ by 2030.", answers: ["neutral"], hint: "нейтральный" },
  ];

  const translations = [
    { id: "t1", russian: "Углеродный след", answers: ["carbon footprint"] },
    { id: "t2", russian: "Биоразнообразие", answers: ["biodiversity"] },
    { id: "t3", russian: "Глобальное потепление", answers: ["global warming"] },
    { id: "t4", russian: "Устойчивое развитие", answers: ["sustainable development"] },
    { id: "t5", russian: "Вымирающие виды", answers: ["endangered species"] },
  ];

  const checkAllAnswers = () => {
    [...fillInTheBlank, ...translations].forEach((item) => {
      const userAnswer = (answers[item.id] || "").toLowerCase().trim();
      const isCorrect = item.answers.some((c) => c.toLowerCase() === userAnswer);
      setResults((prev) => ({ ...prev, [item.id]: isCorrect }));
    });
    setShowResults(true);
  };

  const getResultColor = (id: string) => results[id] === null ? "border-gray-300" : results[id] ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50";
  const getResultIcon = (id: string) => results[id] === null ? null : results[id] ? "✅" : "❌";
  const correctCount = Object.values(results).filter((r) => r === true).length;
  const totalQuestions = fillInTheBlank.length + translations.length;

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📝</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Practice & Exercises</h2>
        <p className="text-xl text-gray-600">Практика с проверкой ответов</p>
      </div>

      {/* Fill in the blanks */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 p-6">
        <h3 className="text-2xl font-bold text-emerald-700 mb-4">✏️ Fill in the Blanks</h3>
        <div className="space-y-4">
          {fillInTheBlank.map((item, i) => (
            <div key={item.id} className={`rounded-xl p-4 border-2 ${getResultColor(item.id)} transition-all`}>
              <div className="flex items-start gap-2 mb-3">
                <span className="font-bold text-emerald-600">{i + 1}.</span>
                <p className="text-gray-800 flex-1">{item.question}</p>
                {getResultIcon(item.id) && <span className="text-xl">{getResultIcon(item.id)}</span>}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="text" value={answers[item.id] || ""} onChange={(e) => handleInputChange(item.id, e.target.value)} placeholder="Введите ответ..." className="flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 border-gray-300" />
                <button onClick={() => checkAnswer(item.id, item.answers)} className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition font-semibold">Проверить</button>
              </div>
              <p className="text-sm text-gray-500 italic mt-2">Подсказка: {item.hint}</p>
              {results[item.id] === false && <p className="text-sm text-red-600 mt-2">Правильный ответ: <strong>{item.answers[0]}</strong></p>}
            </div>
          ))}
        </div>
      </div>

      {/* Translation */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-6">
        <h3 className="text-2xl font-bold text-green-700 mb-4">🌐 Translate to English</h3>
        <div className="space-y-4">
          {translations.map((item, i) => (
            <div key={item.id} className={`rounded-xl p-4 border-2 ${getResultColor(item.id)} transition-all`}>
              <div className="flex items-start gap-2 mb-3">
                <span className="font-bold text-green-600">{i + 1}.</span>
                <p className="text-gray-800 font-medium flex-1">{item.russian}</p>
                {getResultIcon(item.id) && <span className="text-xl">{getResultIcon(item.id)}</span>}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="text" value={answers[item.id] || ""} onChange={(e) => handleInputChange(item.id, e.target.value)} placeholder="Enter translation..." className="flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border-gray-300" />
                <button onClick={() => checkAnswer(item.id, item.answers)} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold">Проверить</button>
              </div>
              {results[item.id] === false && <p className="text-sm text-red-600 mt-2">Правильный ответ: <strong>{item.answers[0]}</strong></p>}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button onClick={checkAllAnswers} className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl hover:from-emerald-600 hover:to-green-600 transition font-bold text-xl shadow-lg">
          Проверить все ответы
        </button>
      </div>

      {showResults && (
        <div className={`rounded-2xl p-6 border-2 shadow-lg ${correctCount === totalQuestions ? "bg-gradient-to-r from-green-100 to-emerald-100 border-green-300" : correctCount >= totalQuestions * 0.7 ? "bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-300" : "bg-gradient-to-r from-red-100 to-rose-100 border-red-300"}`}>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{correctCount === totalQuestions ? "🎉" : correctCount >= totalQuestions * 0.7 ? "👍" : "📚"}</span>
            <div>
              <h3 className="font-bold text-2xl text-gray-800 mb-1">Результат: {correctCount} из {totalQuestions}</h3>
              <p className="text-gray-700">{correctCount === totalQuestions ? "Отлично! Вы справились со всеми заданиями!" : correctCount >= totalQuestions * 0.7 ? "Хороший результат! Повторите ошибки." : "Стоит повторить материал."}</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl p-6 border-2 border-emerald-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎓</span>
          <div>
            <h3 className="font-bold text-xl text-emerald-800 mb-2">Поздравляем!</h3>
            <p className="text-gray-700">Вы изучили более <strong>40 экологических терминов</strong>. Теперь вы можете:</p>
            <ul className="mt-3 space-y-1 text-gray-700">
              <li>✅ Понимать новости об изменении климата</li>
              <li>✅ Обсуждать экологические проблемы на английском</li>
              <li>✅ Распознавать greenwashing в рекламе</li>
              <li>✅ Участвовать в дискуссиях об устойчивом развитии</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
