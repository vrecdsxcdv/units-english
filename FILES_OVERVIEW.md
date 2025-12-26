# 📁 Files Overview — A1 Unified Structure

## Created Files

### 1. Main Server Page
**File:** `src/app/blocks/a1/page.tsx` (66 lines)
**Type:** Server Component (no "use client")
**Role:** Orchestrates all topics & steps

**Key functions:**
- Reads & validates `searchParams.t` and `searchParams.s`
- Renders appropriate theme component
- Shows sidebar + step navigator + content
- Handles prev/next navigation

**Imports from:**
- `@/components/lesson/Sidebar`
- `@/components/lesson/StepSquares`
- `@/components/lesson/nouns/Nouns`
- `@/components/lesson/adjectives/Adjectives`
- `@/components/lesson/comparison/Comparison`
- `@/components/lesson/greetings/Greetings`

---

### 2. Sidebar Navigation
**File:** `src/components/lesson/Sidebar.tsx` (43 lines)
**Type:** Client Component ("use client")
**Role:** Navigation between themes

**Features:**
- Shows 4 topics (nouns, adjectives, comparison, greetings)
- Highlights active topic
- Numbers each topic (1., 2., 3., 4.)
- All links point to `/blocks/a1?t={topic}&s=1`
- Gradient background with glassmorphism

**Props:**
```tsx
type Props = { activeTopic?: string }; // e.g., "nouns"
```

---

### 3. Nouns Theme (Complete)
**File:** `src/components/lesson/nouns/Nouns.tsx` (250+ lines)
**Type:** Client Component ("use client")
**Role:** All 10 steps for Nouns topic

**Structure:**
- Main component: `Nouns({ step })` with switch statement
- 10 step components: `Step1()` through `Step10()`
- Uses `<Section title="...">` for content blocks
- Includes vocabulary grid with IPA, translation

**Steps:**
1. Introduction to Nouns — concept + 10 vocab words
2. Singular Forms — a/an rules
3. Practice on Singular — exercises
4. Plural Forms — rules for pluralization
5. Practice on Plural — interactive games
6. Countable Nouns — countable category
7. Uncountable Nouns — uncountable category
8. Practice on Countable/Uncountable — mixed exercises
9. Common Errors and Tips — mistakes to avoid
10. Revision & Final Quiz — comprehensive review

**Props:**
```tsx
type Props = { step: number }; // 1..10
```

---

### 4. Adjectives Theme (Placeholder)
**File:** `src/components/lesson/adjectives/Adjectives.tsx` (13 lines)
**Type:** Client Component ("use client")
**Role:** Placeholder for future migration

**Current behavior:**
- Shows message that theme is in development
- Points to old location: `/blocks/[track]/adjectives`

**Status:** ⚙️ To be implemented

---

### 5. Comparison Theme (Placeholder)
**File:** `src/components/lesson/comparison/Comparison.tsx` (13 lines)
**Type:** Client Component ("use client")
**Role:** Placeholder for future migration

**Current behavior:**
- Shows message that theme is in development
- Points to old location: `/blocks/[track]/comparison`

**Status:** ⚙️ To be implemented

---

### 6. Greetings Theme (Placeholder)
**File:** `src/components/lesson/greetings/Greetings.tsx` (13 lines)
**Type:** Client Component ("use client")
**Role:** Placeholder for future migration

**Current behavior:**
- Shows message that theme is in development
- Points to old location: `/blocks/[track]/greetings`

**Status:** ⚙️ To be implemented

---

## Modified Files

### Section UI Component
**File:** `src/components/ui/Section.tsx` (22 lines)
**Changes:**
- Added optional `title?: string` prop
- If title provided, renders as `<h3>` with styling
- `className="text-lg font-semibold mb-3"`
- Maintains backward compatibility

**Before:**
```tsx
interface SectionProps {
  children: React.ReactNode;
  className?: string;
}
```

**After:**
```tsx
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string; // NEW
}

// In JSX:
{title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
{children}
```

---

## Deleted Files

### Old Separate Routes (Completely removed)
- ❌ `src/app/blocks/a1/nouns/` (entire directory)
  - Was: `page.tsx`
  - Was: `StepController.tsx`
- ❌ `src/app/blocks/a1/tobe/` (entire directory)
  - Was: `page.tsx`
  - Was: `StepController.tsx`

**Reason:** These separate routes were intercepting navigation and preventing unified searchParams-based routing.

---

## File Statistics

| Category | Count | Status |
|----------|-------|--------|
| **New Server Components** | 1 | ✅ Complete |
| **New Client Components** | 6 | ✅/⚙️ Mixed |
| **Complete Implementations** | 1 | ✅ (Nouns) |
| **Placeholders** | 3 | ⚙️ (Adj/Cmp/Gr) |
| **Modified Components** | 1 | ✅ (Section) |
| **Deleted Directories** | 2 | ❌ Removed |
| **Total Lines Added** | ~400 | - |

---

## Dependency Graph

```
page.tsx (Server)
├─ imports Sidebar.tsx (Client)
├─ imports StepSquares.tsx (Client, existing)
└─ imports topic components:
   ├─ Nouns.tsx (Client)
   │  └─ imports Section.tsx (UI)
   ├─ Adjectives.tsx (Client)
   │  └─ imports Section.tsx (UI)
   ├─ Comparison.tsx (Client)
   │  └─ imports Section.tsx (UI)
   └─ Greetings.tsx (Client)
      └─ imports Section.tsx (UI)

Sidebar.tsx (Client)
├─ uses Link from "next/link"
└─ (no other imports)

Nouns.tsx (Client)
└─ imports Section.tsx (UI)
   └─ imports motion from "framer-motion"
```

---

## Code Examples

### How to Access a Step
```tsx
// When user visits: /blocks/a1?t=nouns&s=3

// 1. Server gets params
const { t = "nouns", s = "1" } = await searchParams;
const step = Math.max(1, Number(s) || 1); // 3

// 2. Server renders component
<Nouns step={3} />

// 3. Client component switches
export default function Nouns({ step }: Props) {
  switch (step) {
    case 1: return <Step1 />;
    case 2: return <Step2 />;
    case 3: return <Step3 />;  // ← This one
    // ...
  }
}

// 4. Step3 renders content
function Step3() {
  return (
    <UiSection title="3. Practice on Singular Nouns">
      <ol className="list-decimal pl-6 space-y-2">
        <li>Matching — соотнесите слова с картинками.</li>
        {/* ... */}
      </ol>
    </UiSection>
  );
}
```

### How Sidebar Works
```tsx
// In Sidebar.tsx
const topics = [
  { id: "nouns", title: "Существительные" },
  { id: "adjectives", title: "Прилагательные" },
  { id: "comparison", title: "Степени сравнения" },
  { id: "greetings", title: "Приветствие" },
];

{topics.map((topic, idx) => (
  <Link
    key={topic.id}
    href={`/blocks/a1?t=${topic.id}&s=1`}  // Always start at s=1
    className={`... ${
      activeTopic === topic.id
        ? "bg-indigo-100 text-indigo-800 font-semibold"
        : "hover:bg-white/40 text-zinc-700"
    }`}
  >
    <span className="mr-2">{idx + 1}.</span>
    {topic.title}
  </Link>
))}
```

---

## Testing the Structure

### Test URLs
```bash
# Default: redirects to nouns, step 1
GET /blocks/a1

# Nouns theme
GET /blocks/a1?t=nouns&s=1    # ✓ Works - Step1 content
GET /blocks/a1?t=nouns&s=10   # ✓ Works - Step10 content

# Adjectives theme (placeholder)
GET /blocks/a1?t=adjectives&s=1  # ✓ Works - shows "in development"

# Invalid theme (should 404)
GET /blocks/a1?t=invalid&s=1  # ✗ 404 Page Not Found

# Invalid step (clamped to 1)
GET /blocks/a1?t=nouns&s=-5   # ✓ Works - treated as step 1
GET /blocks/a1?t=nouns&s=999  # ✓ Works - accepted (no max check)
```

---

## Quick Reference

| Component | File | Type | Status |
|-----------|------|------|--------|
| Page | `src/app/blocks/a1/page.tsx` | Server | ✅ Complete |
| Sidebar | `src/components/lesson/Sidebar.tsx` | Client | ✅ Complete |
| Nouns | `src/components/lesson/nouns/Nouns.tsx` | Client | ✅ Complete |
| Adjectives | `src/components/lesson/adjectives/Adjectives.tsx` | Client | ⚙️ Placeholder |
| Comparison | `src/components/lesson/comparison/Comparison.tsx` | Client | ⚙️ Placeholder |
| Greetings | `src/components/lesson/greetings/Greetings.tsx` | Client | ⚙️ Placeholder |
| Section | `src/components/ui/Section.tsx` | Client | ✅ Updated |

