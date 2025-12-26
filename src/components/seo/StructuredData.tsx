export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "English Learning Platform",
    description:
      "Современная платформа для изучения английского языка от A1 до C2",
    url: "https://english-learning.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://english-learning.vercel.app/blocks?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function EducationalOrganizationData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "English Learning Platform",
    description:
      "Онлайн платформа для изучения английского языка с интерактивными уроками, AI-тьютором и системой отслеживания прогресса",
    url: "https://english-learning.vercel.app",
    sameAs: [
      // Добавьте ссылки на соцсети когда будут
      // "https://facebook.com/yourpage",
      // "https://twitter.com/yourpage",
    ],
    offers: {
      "@type": "Offer",
      category: "Education",
      priceCurrency: "RUB",
      price: "0",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function CourseStructuredData({
  level,
  name,
  description,
}: {
  level: string;
  name: string;
  description: string;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${name} - Уровень ${level.toUpperCase()}`,
    description,
    provider: {
      "@type": "Organization",
      name: "English Learning Platform",
      url: "https://english-learning.vercel.app",
    },
    educationalLevel: level.toUpperCase(),
    inLanguage: "ru",
    availableLanguage: ["en", "ru"],
    isAccessibleForFree: true,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT10H", // 10 часов на каждый уровень
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function FAQStructuredData({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
