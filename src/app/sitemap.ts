import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://english-learning.vercel.app";

  // Основные страницы
  const routes = [
    "",
    "/learn",
    "/assessment",
    "/tutor",
    "/reviews",
    "/login",
    "/register",
    "/profile",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Страницы блоков
  const blocks = ["a1", "b1", "c2"].map((level) => ({
    url: `${baseUrl}/blocks/${level}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Популярные темы для A1
  const a1Topics = [
    "nouns",
    "articles",
    "pronouns",
    "presentsimple",
    "presentcontinuous",
    "pastsimple",
    "futuresimple",
    "modals",
    "prepositions",
    "comparatives",
  ].map((topic) => ({
    url: `${baseUrl}/blocks/a1?t=${topic}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Популярные темы для B1
  const b1Topics = [
    "presentperfect",
    "passivevoice",
    "conditionals",
    "reportedspeech",
    "phrasalverbs",
    "pastperfect",
    "futureforms",
    "gerundsinfinitives",
  ].map((topic) => ({
    url: `${baseUrl}/blocks/b1?t=${topic}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...blocks, ...a1Topics, ...b1Topics];
}
