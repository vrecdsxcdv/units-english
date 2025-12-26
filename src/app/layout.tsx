import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import ClientChunkRecovery from "@/components/system/ClientChunkRecovery";
import {
  WebsiteStructuredData,
  EducationalOrganizationData,
} from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "English Learning Platform - Изучение английского от A1 до C2",
    template: "%s | English Learning Platform",
  },
  description: "Современная платформа для изучения английского языка с интерактивными уроками, AI-тьютором, тестами и отслеживанием прогресса. Обучение от A1 до C2 с персонализированным подходом.",
  keywords: [
    "английский язык",
    "изучение английского",
    "английский онлайн",
    "уроки английского",
    "английский A1",
    "английский A2",
    "английский B1",
    "английский B2",
    "английский C1",
    "английский C2",
    "грамматика английского",
    "AI преподаватель английского",
    "placement test",
    "тест на знание английского",
  ],
  authors: [{ name: "English Learning Platform" }],
  creator: "English Learning Platform",
  publisher: "English Learning Platform",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://english-learning.vercel.app",
    title: "English Learning Platform - Изучение английского от A1 до C2",
    description: "Современная платформа для изучения английского языка с интерактивными уроками, AI-тьютором и персонализированным подходом",
    siteName: "English Learning Platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Learning Platform",
    description: "Изучение английского языка от A1 до C2 с AI-тьютором",
  },
  verification: {
    // Добавьте сюда коды верификации когда будете регистрироваться в Google Search Console
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WebsiteStructuredData />
        <EducationalOrganizationData />
        <Providers>
          <ClientChunkRecovery />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
