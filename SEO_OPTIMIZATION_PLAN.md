# 🚀 ПЛАН SEO ОПТИМИЗАЦИИ — ПОЛНОЕ ВНЕДРЕНИЕ

**Дата:** 23 декабря 2025
**Статус:** В процессе внедрения
**Приоритет:** P0 (Критично)

---

## ✅ ЧТО УЖЕ СДЕЛАНО

### 1. Расширенная база SEO данных (✅ ГОТОВО)
- **Файл:** `src/lib/seo.ts` (ОБНОВЛЕН)
- Полная база всех тем A1 и B1 (100+ тем)
- Функция `generateDynamicLessonMetadata()` для query параметров
- Функция `generatePageMetadata()` для обычных страниц
- Поддержка canonical URLs
- Оптимизация длины title (45-60 симв) и description (120-160 симв)

---

## 🔴 КРИТИЧЕСКИЕ ЗАДАЧИ (P0) — СДЕЛАТЬ СЕЙЧАС

### Задача 1: Добавить `generateMetadata` в блоки A1, B1, B2

#### **Проблема:**
Сейчас все 183+ URL с query параметрами имеют одинаковый статический title.

**Пример дублей:**
```
/blocks/a1?t=nouns&s=1   → "Уровень A1 Elementary - Уроки английского..."
/blocks/a1?t=articles&s=1 → "Уровень A1 Elementary - Уроки английского..." (ТОТ ЖЕ!)
```

#### **Решение:**
Заменить `export const metadata` на `export async function generateMetadata`.

#### **Файлы для изменения:**
1. `src/app/blocks/a1/page.tsx`
2. `src/app/blocks/b1/page.tsx`
3. `src/app/blocks/b2/page.tsx`

#### **КОД ИЗМЕНЕНИЯ для A1:**

```typescript
// УДАЛИТЬ старый статический metadata:
export const metadata: Metadata = { ... }

// ДОБАВИТЬ динамический generateMetadata:
import { generateDynamicLessonMetadata, getTopicSEO, a1StepCounts } from "@/lib/seo";

type Props = { searchParams: Promise<{ t?: string; s?: string }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { t = "nouns", s = "1" } = await searchParams;
  const step = Math.max(1, Number(s) || 1);

  // Получаем SEO данные темы из базы
  const topicSEO = getTopicSEO(t);
  const totalSteps = a1StepCounts[t] || 10;

  return generateDynamicLessonMetadata({
    title: topicSEO.title,
    description: topicSEO.description,
    level: "a1",
    topicId: t,
    step,
    totalSteps,
    keywords: topicSEO.keywords,
  });
}
```

**Результат:**
```
/blocks/a1?t=nouns&s=1     → "Существительные (Nouns) — Шаг 1/5 — A1 Elementary"
/blocks/a1?t=nouns&s=3     → "Существительные (Nouns) — Шаг 3/5 — A1 Elementary"
/blocks/a1?t=articles&s=1  → "Артикли (Articles) — Шаг 1/3 — A1 Elementary"
```

**Canonical:** Все шаги канонически ссылаются на шаг 1 для избежания дублей.

---

### Задача 2: Добавить metadata для публичных страниц без SEO

#### **Страницы требующие metadata:**

| Файл | Title | Description | Keywords |
|------|-------|-------------|----------|
| `/learn/page.tsx` | "Мои уроки английского — Учебный план и прогресс" | "Персональная панель обучения: отслеживайте прогресс по уровням A1-C2..." | учебный план, прогресс |
| `/assessment/page.tsx` | "Тест на уровень английского — Бесплатный placement test" | "Пройдите бесплатный тест на определение уровня (A1-C2). 100 вопросов..." | placement test, тест уровень |
| `/tutor/page.tsx` | "AI-тьютор английского — Персональный преподаватель онлайн" | "Общайтесь с AI 24/7, практикуйте английский..." | AI тьютор, Speakly AI |
| `/reviews/page.tsx` | "Отзывы студентов — English Learning Platform" | "Читайте реальные отзывы студентов..." | отзывы студентов |
| `/blocks/page.tsx` | "Курсы английского по уровням — A1, B1, B2-C1" | "180+ уроков по уровням A1-C1..." | курсы по уровням |
| `/topics/page.tsx` | "Все темы английского — Грамматика A1-B1" | "70+ тем: грамматика, времена..." | темы английского |
| `/register/page.tsx` | "Регистрация — Начните учить английский бесплатно" | "Создайте аккаунт и начните учить A1-C2..." | регистрация английский |
| `/login/page.tsx` | "Вход — English Learning Platform" | "Войдите для продолжения обучения..." | - |

#### **КОД для каждой страницы:**

```typescript
import { generatePageMetadata } from "@/lib/seo";

// Пример для /learn/page.tsx
export const metadata = generatePageMetadata(
  "Мои уроки английского — Учебный план и прогресс",
  "Персональная панель обучения: отслеживайте прогресс по уровням A1-C2, продолжайте уроки и достигайте целей в изучении английского языка",
  "/learn",
  ["учебный план английский", "прогресс обучения", "дашборд английский", "мои уроки"]
);
```

---

### Задача 3: Добавить `noindex` для служебных страниц

#### **Файлы требующие noindex:**

| Файл | Robots |
|------|--------|
| `/profile/page.tsx` | noindex, nofollow |
| `/tutor/settings/page.tsx` | noindex, nofollow |
| `/tutor/history/page.tsx` | noindex, nofollow |
| `/admin/reviews/page.tsx` | noindex, nofollow |
| `/internal/auth-debug/page.tsx` | noindex, nofollow |
| `/experimental/articles/page.tsx` | noindex, follow |

#### **КОД:**

```typescript
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(
  "Мой профиль",
  "Личный профиль пользователя",
  "/profile",
  [],
  { index: false, follow: false } // ← noindex, nofollow
);
```

---

### Задача 4: Расширить sitemap.xml

#### **Проблема:**
Сейчас sitemap покрывает только 30 URL из 200+.

#### **Решение:**
Динамически генерировать ВСЕ темы уровней.

#### **Файл:** `src/app/sitemap.ts`

```typescript
import { MetadataRoute } from "next";
import { allTopicsSEO, a1StepCounts } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://english-learning.vercel.app";
  const now = new Date().toISOString();

  // Основные страницы
  const mainRoutes = [
    { url: "", priority: 1.0 },
    { url: "/learn", priority: 0.8 },
    { url: "/assessment", priority: 0.9 },
    { url: "/tutor", priority: 0.8 },
    { url: "/reviews", priority: 0.7 },
    { url: "/blocks", priority: 0.9 },
    { url: "/topics", priority: 0.8 },
    { url: "/register", priority: 0.6 },
    { url: "/login", priority: 0.5 },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route.priority,
  }));

  // Страницы блоков
  const blockRoutes = ["a1", "b1", "b2"].map((level) => ({
    url: `${baseUrl}/blocks/${level}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // ВСЕ темы A1 (только первый шаг каждой темы = canonical)
  const a1Topics = Object.keys(allTopicsSEO)
    .filter(topic => a1StepCounts[topic]) // Только A1 темы
    .map((topic) => ({
      url: `${baseUrl}/blocks/a1?t=${topic}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // TODO: Добавить B1 и B2 темы аналогично

  return [...mainRoutes, ...blockRoutes, ...a1Topics];
}
```

**Результат:** Sitemap будет содержать ~120 URL вместо 30.

---

### Задача 5: Расширить Structured Data

#### **Что добавить:**

1. **BreadcrumbStructuredData** для страниц уроков
2. **AggregateRating** для страницы reviews
3. **Review** schema для отдельных отзывов

#### **Файл:** `src/components/seo/StructuredData.tsx`

**ДОБАВИТЬ:**

```typescript
// Aggregate Rating для reviews
export function AggregateRatingStructuredData({
  ratingValue,
  reviewCount,
}: {
  ratingValue: number;
  reviewCount: number;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: ratingValue.toFixed(1),
    reviewCount,
    bestRating: 5,
    worstRating: 1,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Review schema для отдельного отзыва
export function ReviewStructuredData({
  author,
  rating,
  text,
  datePublished,
}: {
  author: string;
  rating: number;
  text: string;
  datePublished: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: text,
    datePublished,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

**Использование на странице /reviews:**

```typescript
// В components или на странице reviews
const avgRating = 4.8; // Вычислить из БД
const totalReviews = 142; // Из БД

<AggregateRatingStructuredData
  ratingValue={avgRating}
  reviewCount={totalReviews}
/>

{reviews.map(review => (
  <ReviewStructuredData
    key={review.id}
    author={review.userName}
    rating={review.rating}
    text={review.text}
    datePublished={review.createdAt.toISOString()}
  />
))}
```

---

## 🟡 ВАЖНЫЕ ЗАДАЧИ (P1) — ПОСЛЕ P0

### 1. Создать OG Images

**TODO:**
- Создать default OG image: `public/og-default.png` (1200×630px)
- Создать динамические OG images для уроков (опционально)

**Добавить в root layout:**

```typescript
export const metadata: Metadata = {
  // ...
  openGraph: {
    // ...
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'English Learning Platform - Изучение английского A1-C2',
      }
    ],
  },
};
```

### 2. Исправить Viewport Warning

**Проблема:** Next.js предупреждает о deprecated `viewport` в metadata.

**Решение:**

```typescript
// src/app/layout.tsx
// УДАЛИТЬ из metadata:
viewport: {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
},

// ДОБАВИТЬ export:
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
```

### 3. Добавить Preconnect для шрифтов

```typescript
// В layout.tsx <head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

---

## 📈 МЕТРИКИ УСПЕХА

После внедрения отслеживать:

| Метрика | До | Цель |
|---------|----|----|
| Уникальных title | 4 | 120+ |
| URL в sitemap | 30 | 120+ |
| Canonical URLs | 0 | 183+ |
| Страниц с metadata | 4 | 19 |
| noindex на служебных | 0 | 6 |
| Schema.org типов | 3 | 7+ |

---

## 📝 ЧЕКЛИСТ ВНЕДРЕНИЯ

### Критично (P0):
- [ ] Заменить статический metadata на generateMetadata в blocks/a1
- [ ] Заменить статический metadata на generateMetadata в blocks/b1
- [ ] Заменить статический metadata на generateMetadata в blocks/b2
- [ ] Добавить metadata в /learn
- [ ] Добавить metadata в /assessment
- [ ] Добавить metadata в /tutor
- [ ] Добавить metadata в /reviews
- [ ] Добавить metadata в /blocks
- [ ] Добавить metadata в /topics
- [ ] Добавить metadata в /register
- [ ] Добавить metadata в /login
- [ ] Добавить noindex в protected страницы
- [ ] Расширить sitemap.xml со всеми темами
- [ ] Добавить AggregateRating schema
- [ ] Добавить Review schema

### Важно (P1):
- [ ] Создать OG images
- [ ] Исправить viewport warning
- [ ] Добавить preconnect
- [ ] Добавить BreadcrumbStructuredData

### Опционально (P2):
- [ ] Динамические OG images для уроков
- [ ] Добавить hreflang для EN версии (если планируется)
- [ ] manifest.json для PWA

---

## 🔧 КАК ТЕСТИРОВАТЬ

### 1. Проверка metadata:
```bash
npm run build
# Проверить что нет warnings о дублях title
```

### 2. Проверка sitemap:
```
http://localhost:3000/sitemap.xml
# Должно быть 120+ URL
```

### 3. Проверка structured data:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

### 4. Проверка canonical:
```bash
curl -I http://localhost:3000/blocks/a1?t=nouns&s=5
# Должен быть Link header с canonical
```

---

## 💡 РЕКОМЕНДАЦИИ ДЛЯ БУДУЩЕГО

### При добавлении новой страницы:

1. **Всегда добавляйте metadata:**
```typescript
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(
  "Title 45-60 символов",
  "Description 120-160 символов",
  "/path",
  ["keyword1", "keyword2"]
);
```

2. **Для динамических страниц используйте generateMetadata:**
```typescript
export async function generateMetadata({ params }) {
  return generateDynamicLessonMetadata({...});
}
```

3. **Добавляйте в sitemap:**
```typescript
// src/app/sitemap.ts
{ url: `${baseUrl}/new-page`, priority: 0.7 }
```

4. **Добавляйте structured data если применимо:**
- Статьи → BlogPosting
- Продукты → Product
- События → Event
- FAQ → FAQPage

---

**Статус реализации:** 20% → 100% (после выполнения всех P0 задач)
**Следующий шаг:** Начать внедрение с generateMetadata для блоков
