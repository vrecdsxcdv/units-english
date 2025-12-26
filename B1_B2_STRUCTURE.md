# 🚀 B1-B2 Unified Architecture

## ✅ Что реализовано

Создана единая архитектура для блоков B1 и B2, идентичная структуре A1 с адаптивными цветовыми схемами.

---

## 📁 Файловая структура

### Новые файлы

```
src/
├── app/
│   └── blocks/
│       ├── b1/
│       │   └── page.tsx        ← Единая страница B1 (как A1)
│       └── b2/
│           └── page.tsx        ← Единая страница B2 (как A1)
├── components/
│   └── lesson/
│       └── Sidebar.tsx         ← Обновлён: поддержка уровней
└── lib/
    └── topics.ts               ← Новый: конфигурация тем
```

---

## 🎨 Цветовые схемы по уровням

### A1-A2 — Indigo/Sky (синий)

```css
Gradient: from-indigo-50 → via-sky-50 → to-white
Active: bg-indigo-100 border-indigo-300
Progress: bg-indigo-400
```

### B1-B2 — Emerald/Teal (зелёный) — только для Sidebar

**Примечание:** Уроки B1 используют цветовую палитру A1-A2 (Indigo/Sky/Blue) для единообразия контента. Emerald/Teal используется ТОЛЬКО в sidebar для визуального различия уровней.

```css
Sidebar Gradient: from-emerald-50 → via-teal-50 → to-white
Sidebar Active: bg-emerald-100 border-emerald-300
Sidebar Progress: bg-emerald-400

Content Colors (уроки): Indigo/Sky/Blue (как A1-A2)
```

### B2-C1 — Purple/Pink (фиолетовый)

```css
Gradient: from-purple-50 → via-pink-50 → to-white
Active: bg-purple-100 border-purple-300
Progress: bg-purple-400
```

---

## 🔗 URL Структура

### Примеры маршрутов

```
/blocks/a1?t=nouns&s=3           → A1: Существительные, шаг 3
/blocks/b1?t=placeholder1&s=1    → B1: Тема 1, шаг 1
/blocks/b2?t=placeholder2&s=5    → B2: Тема 2, шаг 5
```

---

## 🧩 Компоненты

### 1. Page Component (B1/B2)

**Файлы:**

- `src/app/blocks/b1/page.tsx`
- `src/app/blocks/b2/page.tsx`

**Функции:**

- ✅ Валидация URL параметров (t, s)
- ✅ Рендеринг Sidebar с level prop
- ✅ StepSquares для навигации
- ✅ Placeholder контент (готов к заполнению)
- ✅ Навигация Назад/Далее
- ✅ CompletionButton на последнем шаге

### 2. Sidebar Component

**Файл:** `src/components/lesson/Sidebar.tsx`

**Новые возможности:**

- ✅ Prop `level` для выбора уровня (a1/b1/b2)
- ✅ Динамическая загрузка тем через `getTopicsByLevel()`
- ✅ Адаптивные цвета градиента
- ✅ Адаптивные цвета активного состояния
- ✅ Адаптивные цвета прогресс-бара

**Props:**

```typescript
type Props = {
  activeTopic?: string; // ID текущей темы
  level?: string; // 'a1' | 'b1' | 'b2'
};
```

### 3. Topics Configuration

**Файл:** `src/lib/topics.ts`

**Экспорты:**

```typescript
// Массивы тем
export const A1_TOPICS: Topic[] = [...];
export const B1_TOPICS: Topic[] = [...];
export const B2_TOPICS: Topic[] = [...];

// Хелперы
export function getTopicsByLevel(level: string): Topic[]
export function getLevelTitle(level: string): string
```

---

## 📝 Как добавить новую тему

### Шаг 1: Добавить в конфигурацию

**Файл:** `src/lib/topics.ts`

```typescript
export const B1_TOPICS: Topic[] = [
  { id: "placeholder1", title: "Тема 1 (в разработке)" },
  { id: "placeholder2", title: "Тема 2 (в разработке)" },
  { id: "placeholder3", title: "Тема 3 (в разработке)" },
  // Добавить новую тему:
  { id: "past-perfect", title: "Past Perfect" },
];
```

### Шаг 2: Обновить topics массив в page.tsx

**Файл:** `src/app/blocks/b1/page.tsx`

```typescript
const topics = [
  "placeholder1",
  "placeholder2",
  "placeholder3",
  "past-perfect", // Добавить ID
];

const topicTitles: Record<string, string> = {
  placeholder1: "Тема 1 (в разработке)",
  placeholder2: "Тема 2 (в разработке)",
  placeholder3: "Тема 3 (в разработке)",
  "past-perfect": "Past Perfect", // Добавить название
};
```

### Шаг 3: Создать компонент темы

**Файл:** `src/components/lesson/pastperfect/PastPerfect.tsx`

```typescript
"use client";

type Props = { step: number };

export default function PastPerfect({ step }: Props) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    // ... и так далее
    default:
      return <Step1 />;
  }
}

function Step1() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Past Perfect: Introduction</h2>
      <p>Контент шага 1...</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Past Perfect: Formation</h2>
      <p>Контент шага 2...</p>
    </div>
  );
}
```

### Шаг 4: Импортировать и добавить в switch

**Файл:** `src/app/blocks/b1/page.tsx`

```typescript
// В начале файла
import PastPerfect from "@/components/lesson/pastperfect/PastPerfect";

// В switch statement
switch (t) {
  case "placeholder1":
    Content = <PlaceholderContent />;
    break;
  case "past-perfect":
    Content = <PastPerfect step={step} key={`past-perfect-${step}`} />;
    break;
  // ...
}

// В stepCounts
const stepCounts: Record<string, number> = {
  placeholder1: 10,
  "past-perfect": 7, // Количество шагов
  // ...
};
```

---

## 🔄 Request Flow

```
User clicks: /blocks/b1?t=past-perfect&s=3
    ↓
page.tsx (Server Component)
    ├─ Validates: t ∈ topics[]
    ├─ Parses: step = 3
    ├─ Renders: <Sidebar level="b1" activeTopic="past-perfect" />
    ├─ Renders: <StepSquares steps={[...]} active={3} />
    ├─ Renders: <PastPerfect step={3} />
    └─ Renders: Navigation buttons
    ↓
Client receives HTML with:
    ├─ Green gradient sidebar (B1)
    ├─ Active topic: "Past Perfect"
    ├─ Step 3 content
    └─ Navigation: ← Назад | Шаг 3/7 | Далее →
```

---

## 🎯 Placeholder Контент

**Сейчас показывается:**

```tsx
<div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
  <div className="text-6xl">📚</div>
  <h2>Тема в разработке</h2>
  <p>Эта тема находится в процессе разработки...</p>
  <Link href="/blocks">← Вернуться к выбору уровня</Link>
</div>
```

**Когда готова тема:** замените на реальный компонент (см. Шаг 3-4 выше).

---

## 🚀 Преимущества новой структуры

### 1. Единый роут

- ✅ Все темы одного уровня через один URL: `/blocks/b1?t=X&s=Y`
- ✅ Нет необходимости создавать отдельные папки

### 2. Переиспользуемость

- ✅ Sidebar работает для всех уровней
- ✅ StepSquares универсальный
- ✅ Navigation логика единая

### 3. Масштабируемость

- ✅ Легко добавлять новые темы (4 простых шага)
- ✅ Легко добавлять новые уровни (C1, C2)
- ✅ Централизованная конфигурация тем

### 4. Консистентность

- ✅ Одинаковый UX для всех уровней
- ✅ Цветовая дифференциация по уровням
- ✅ Единая система навигации

---

## 📊 Сравнение: Старая vs Новая структура

### Старая (deprecated)

```
/blocks/[track]/[topic]/page.tsx
├─ Каждая тема = отдельная папка
├─ Дублирование кода
└─ Сложная навигация
```

### Новая ✅

```
/blocks/b1?t=topic&s=step
├─ Одна страница = весь уровень
├─ Централизованная конфигурация
└─ URL-based навигация
```

---

## 🔧 Техническая информация

### Server Component

- ✅ `page.tsx` — Server Component
- ✅ `await searchParams` — Next.js 15 async pattern
- ✅ `notFound()` — встроенная обработка 404

### Client Components

- ✅ `Sidebar.tsx` — Client Component (для Link navigation)
- ✅ `StepSquares.tsx` — Client Component (для интерактивности)
- ✅ Все topic компоненты — Client Components

### Props Flow

```
page.tsx (server)
    ├─ level="b1" → Sidebar
    ├─ activeTopic="topic-id" → Sidebar
    ├─ steps=[{n,href}...] → StepSquares
    └─ step={number} → TopicComponent
```

---

## 🎨 Визуальные различия по уровням

### Sidebar Gradients

**A1-A2 (Indigo/Sky):**

```
🟦🟦🟦
🔵🔵🔵
⚪⚪⚪
```

**B1-B2 (Emerald/Teal):**

```
🟩🟩🟩
💚💚💚
⚪⚪⚪
```

**B2-C1 (Purple/Pink):**

```
🟪🟪🟪
💜💜💜
⚪⚪⚪
```

---

## ✅ Чек-лист готовности

- ✅ Созданы страницы `/blocks/b1/page.tsx` и `/blocks/b2/page.tsx`
- ✅ Обновлён `Sidebar.tsx` с поддержкой уровней
- ✅ Создан `topics.ts` с конфигурацией
- ✅ Добавлены placeholder темы (3 на каждый уровень)
- ✅ Настроены цветовые схемы
- ✅ Работает навигация между шагами
- ✅ Работает навигация между темами
- ✅ CompletionButton на последнем шаге
- ✅ Нет linter ошибок

---

## 🚧 Что нужно добавить

### Для B1:

- [ ] Определить список тем (20-30 тем)
- [ ] Создать компоненты для каждой темы
- [ ] Заполнить контент (теория, примеры, упражнения)

### Для B2:

- [ ] Определить список тем (20-30 тем)
- [ ] Создать компоненты для каждой темы
- [ ] Заполнить контент (теория, примеры, упражнения)

### Общее:

- [ ] Добавить систему прогресса (сколько тем завершено)
- [ ] Интеграция с базой данных (сохранение прогресса)
- [ ] Сертификаты по завершению уровня

---

## 🎓 Примерный список тем для B1

```typescript
const B1_SUGGESTED_TOPICS = [
  "Past Perfect: Introduction",
  "Past Perfect vs Past Simple",
  "Present Perfect Continuous",
  "Future Perfect",
  "Used to / Would",
  "Passive Voice: Advanced",
  "Reported Speech",
  "Conditionals: Second Type",
  "Conditionals: Third Type",
  "Mixed Conditionals",
  "Relative Clauses: Advanced",
  "Modal Verbs: Deduction",
  "Modal Verbs: Past",
  "Phrasal Verbs: Common",
  "Phrasal Verbs: Advanced",
  "Linking Words: Contrast",
  "Linking Words: Cause/Effect",
  "Collocations: Common",
  "Idioms: Everyday",
  "Academic Vocabulary",
  "Business English Basics",
  "Review & Test B1",
];
```

---

## 📚 Документация

**Связанные файлы:**

- `ARCHITECTURE.md` — Общая архитектура A1
- `A1_STRUCTURE_SUMMARY.md` — Детали A1
- `FILES_OVERVIEW.md` — Обзор всех файлов

**Новый файл:**

- `B1_B2_STRUCTURE.md` — Этот файл

---

## 🎉 Итоги

**Создано:** Полная инфраструктура для B1 и B2 блоков  
**Готово к:** Заполнению контентом  
**Статус:** ✅ Production-ready (структура)  
**Последнее обновление:** Ноябрь 2025

---

**Made with ❤️ for Units English**
