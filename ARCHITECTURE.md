# A1 Unified Architecture

## 🏗️ Directory Structure

```
src/
├── app/
│   └── blocks/
│       └── a1/
│           └── page.tsx                    ← Single server component for all themes
│
└── components/
    ├── lesson/
    │   ├── Sidebar.tsx                     ← Theme navigation (4 topics)
    │   ├── StepSquares.tsx                 ← Step selector (1-10)
    │   ├── nouns/
    │   │   └── Nouns.tsx                   ← 10 steps (complete)
    │   ├── adjectives/
    │   │   └── Adjectives.tsx              ← 10 steps (placeholder)
    │   ├── comparison/
    │   │   └── Comparison.tsx              ← 10 steps (placeholder)
    │   └── greetings/
    │       └── Greetings.tsx               ← 10 steps (placeholder)
    └── ui/
        └── Section.tsx                     ← Section component with title prop
```

---

## 🔄 Request Flow

```
User Request
    ↓
/blocks/a1?t=nouns&s=3
    ↓
page.tsx (Server)
├─ await searchParams
├─ validate: t ∈ ["nouns", "adjectives", "comparison", "greetings"]
├─ render <Sidebar activeTopic="nouns" />
├─ render <StepSquares total={10} value={2} onChange={...} />
├─ render <Nouns step={3} />
└─ render navigation buttons
    ↓
HTML with:
├─ Sidebar showing "Существительные" highlighted
├─ StepSquares with steps 1-10, step 3 active (blue)
├─ Step 3 content (Introduction to Nouns continued)
└─ Prev/Next buttons (Назад / Далее)
```

---

## 📍 URL Mapping

| URL | Component | Props |
|-----|-----------|-------|
| `/blocks/a1` | Redirect → `/blocks/a1?t=nouns&s=1` | - |
| `/blocks/a1?t=nouns&s=1` | `<Nouns step={1} />` | - |
| `/blocks/a1?t=nouns&s=10` | `<Nouns step={10} />` | - |
| `/blocks/a1?t=adjectives&s=5` | `<Adjectives step={5} />` | - |
| `/blocks/a1?t=comparison&s=7` | `<Comparison step={7} />` | - |
| `/blocks/a1?t=greetings&s=2` | `<Greetings step={2} />` | - |

---

## 🧩 Component Composition

### Page.tsx (Server Component)
```tsx
page.tsx
├─ await searchParams
├─ validate & parse
├─ select Content based on topic
└─ render:
    ├─ Sidebar
    ├─ StepSquares
    ├─ Content (Nouns | Adjectives | Comparison | Greetings)
    └─ Navigation
```

### Sidebar.tsx (Client Component)
```tsx
Sidebar
├─ Loop topics: ["nouns", "adjectives", "comparison", "greetings"]
├─ For each topic:
│  ├─ Link href="/blocks/a1?t={topic}&s=1"
│  ├─ Active state if activeTopic === topic
│  └─ Label + number
```

### Nouns.tsx (Client Component)
```tsx
Nouns
├─ switch (step)
│  ├─ case 1: <Step1 />
│  ├─ case 2: <Step2 />
│  ├─ ...
│  └─ case 10: <Step10 />
└─ Each step:
   ├─ <Section title="...">...</Section>
   ├─ Vocabulary grid
   ├─ Examples
   └─ Practice
```

---

## 🔐 Data Flow & Validation

```
User clicks sidebar link
    ↓
Link: /blocks/a1?t=nouns&s=1
    ↓
page.tsx receives { searchParams: Promise<{ t?: string; s?: string }> }
    ↓
await searchParams → { t: "nouns", s: "1" }
    ↓
Validate:
├─ topics.includes(t) ? ✓ : notFound()
├─ step = Math.max(1, Number(s) || 1)
└─ step valid → render
    ↓
<Nouns step={1} />
    ↓
switch(1) → <Step1 />
```

---

## 🎨 Styling & UI

### Sidebar
- Background: gradient (indigo-50 → white)
- Active state: indigo-100, bold font, indigo-300 border
- Inactive: hover bg-white/40, transparent border

### StepSquares
- Each square: 8x8 (md: 9x9)
- Active: indigo-600 bg, white text
- Completed: emerald-500 bg, white text
- Inactive: white bg, zinc-200 border

### Section Component
- Border: var(--border)
- BG: var(--panel)
- Padding: p-4 md:p-6
- Title: h3, text-lg font-semibold, mb-3 (if provided)
- Animation: fade in + slide up (motion)

### Navigation Buttons
- Prev/Next: Link components
- Styling: px-6 py-2 rounded-lg border
- Next: bg-indigo-600 text-white
- Completed: bg-emerald-500 text-white

---

## 🚦 Error Handling

```
If t not in ["nouns", "adjectives", "comparison", "greetings"]
    ↓
notFound()
    ↓
Display Next.js 404 page
```

---

## 📊 Topics Configuration

```tsx
const topics = [
  { id: "nouns", title: "Существительные" },
  { id: "adjectives", title: "Прилагательные" },
  { id: "comparison", title: "Степени сравнения" },
  { id: "greetings", title: "Приветствие и знакомство" },
];
```

Each topic has:
- ✅ 10 steps (s=1..10)
- ✅ Sidebar entry with number
- ✅ Component in /components/lesson/{topic}/{Topic}.tsx
- ✅ URL pattern: /blocks/a1?t={id}&s={step}

---

## 🔄 Navigation Patterns

### Sidebar Click
```
Click "Прилагательные"
    ↓
Link to /blocks/a1?t=adjectives&s=1
    ↓
page.tsx renders <Adjectives step={1} />
    ↓
Sidebar shows "Прилагательные" as active
```

### Далее Button
```
Click "Далее →" on step 3
    ↓
Link to /blocks/a1?t=nouns&s=4 (same topic, next step)
    ↓
page.tsx re-renders with new step
    ↓
Nouns component switches to <Step4 />
```

### Назад Button
```
Click "← Назад" on step 5
    ↓
Link to /blocks/a1?t=nouns&s=4 (same topic, prev step)
    ↓
page.tsx re-renders with previous step
```

---

## ✨ Key Features

1. **Single Route**: All themes & steps use `/blocks/a1?t=X&s=Y`
2. **No Page Intercepting**: Old `/blocks/a1/nouns/` route removed
3. **Server-Side Validation**: searchParams validated on server
4. **Key Remounting**: `key={topic-${step}}` ensures fresh render
5. **Sidebar Sync**: activeTopic prop keeps sidebar in sync
6. **Mobile Responsive**: md: breakpoints for sidebar width
7. **Beautiful UI**: Gradient sidebar, animated sections
8. **Accessible**: aria-labels, semantic HTML

---

## 🎯 Next Steps

- [ ] Implement StepSquares onClick handler
- [ ] Add localStorage for last visited step/topic
- [ ] Migrate adjectives content
- [ ] Migrate comparison content
- [ ] Migrate greetings content
- [ ] Add progress tracking
- [ ] Add certificate/completion logic

