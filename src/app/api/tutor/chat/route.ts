import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import OpenAI from "openai";
import { prisma } from "@/lib/prisma";

function getOpenAI() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "dummy-key-for-build",
  });
}

// Промпты для разных режимов
const SYSTEM_PROMPTS = {
  general: `Ты — опытный репетитор английского языка.

Твоя задача:
- Объяснять грамматику простым языком
- Давать примеры из реальной жизни
- Отвечать на вопросы учеников
- Быть дружелюбным и поддерживающим

Отвечай на русском языке, но используй английские примеры с переводом.
Будь конкретным и практичным.`,

  lesson: `Ты — личный помощник по текущему уроку английского.

Твоя задача:
- Объяснять непонятные моменты урока
- Давать дополнительные примеры
- Создавать упражнения по запросу
- Проверять правильность понимания

Будь терпеливым и объясняй пошагово.`,

  practice: `You are an English conversation practice partner.

Your role:
- Conduct conversations in English
- Correct mistakes gently with explanations
- Ask follow-up questions to keep the conversation going
- Encourage natural speech
- Adapt complexity to student's level

Keep responses natural and engaging. Mix English and Russian explanations when correcting mistakes.`,
};

// Генерация suggestions
function generateSuggestions(mode: string): string[] {
  switch (mode) {
    case "general":
      return ["Дай еще примеры", "Объясни проще", "Какие есть исключения?"];
    case "lesson":
      return [
        "Дай упражнение на закрепление",
        "Покажи еще примеры",
        "Какие ошибки часто делают?",
      ];
    case "practice":
      return [
        "Let's continue the conversation",
        "Ask me a question",
        "Give me feedback on my answers",
      ];
    default:
      return ["Продолжить", "Задать вопрос", "Узнать больше"];
  }
}

export async function POST(req: NextRequest) {
  try {
    // Проверяем наличие API ключа
    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY is not set");
      return NextResponse.json(
        {
          error:
            "OpenAI API key is not configured. Please contact administrator.",
        },
        { status: 500 }
      );
    }

    const session = await getServerSession();
    const body = await req.json();
    const {
      message,
      mode = "general",
      userId,
      conversationId,
      conversationHistory = [],
    } = body;

    // Валидация
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: "Message too long (max 1000 characters)" },
        { status: 400 }
      );
    }

    const currentUserId = userId || session?.user?.id;

    // Получаем или создаем conversation
    let conversation;
    if (conversationId && currentUserId) {
      conversation = await prisma.chatConversation.findUnique({
        where: { id: conversationId },
        include: { messages: { orderBy: { timestamp: "asc" } } },
      });
    }

    // Создаем новый conversation если нет
    if (!conversation && currentUserId) {
      conversation = await prisma.chatConversation.create({
        data: {
          userId: currentUserId,
          mode,
          title: message.substring(0, 50) + (message.length > 50 ? "..." : ""),
        },
        include: { messages: true },
      });
    }

    // Сохраняем сообщение пользователя
    if (conversation) {
      await prisma.chatMessage.create({
        data: {
          conversationId: conversation.id,
          role: "user",
          content: message,
        },
      });
    }

    // Получаем системный промпт
    const systemPrompt =
      SYSTEM_PROMPTS[mode as keyof typeof SYSTEM_PROMPTS] ||
      SYSTEM_PROMPTS.general;

    // Формируем историю для контекста
    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: systemPrompt },
    ];

    // Добавляем историю из БД или из параметра
    const historySource = conversation?.messages || conversationHistory;
    const recentHistory = historySource.slice(-5);

    for (const msg of recentHistory) {
      messages.push({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.content,
      });
    }

    // Добавляем текущее сообщение
    messages.push({ role: "user", content: message });

    // Вызываем OpenAI
    const openai = getOpenAI();
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const response =
      completion.choices[0]?.message?.content ||
      "Извините, не могу ответить на этот вопрос.";

    // Сохраняем ответ ассистента
    if (conversation) {
      await prisma.chatMessage.create({
        data: {
          conversationId: conversation.id,
          role: "assistant",
          content: response,
        },
      });
    }

    // Генерируем suggestions
    const suggestions = generateSuggestions(mode);

    return NextResponse.json({
      response,
      suggestions,
      conversationId: conversation?.id || `temp-${Date.now()}`,
      timestamp: new Date().toISOString(),
      model: "gpt-4o-mini",
    });
  } catch (error: any) {
    console.error("Chat API error:", error);
    console.error("Error details:", {
      message: error.message,
      status: error.status,
      type: error.type,
      code: error.code,
      stack: error.stack?.split("\n").slice(0, 3),
    });

    // Ошибки OpenAI API
    if (error.status === 429) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. Please try again later.",
          response:
            "Превышен лимит запросов к AI. Пожалуйста, попробуйте через минуту.",
        },
        { status: 429 }
      );
    }

    if (error.status === 401 || error.status === 403) {
      return NextResponse.json(
        {
          error: "Invalid API key",
          response:
            "Ошибка авторизации API. Проверьте настройки OPENAI_API_KEY.",
        },
        { status: 500 }
      );
    }

    // Ошибки сети/таймаут
    if (error.code === "ECONNREFUSED" || error.code === "ETIMEDOUT") {
      return NextResponse.json(
        {
          error: "Network error",
          response:
            "Не удалось подключиться к серверу AI. Проверьте подключение к интернету.",
        },
        { status: 503 }
      );
    }

    // Ошибки базы данных
    if (error.code?.startsWith("P")) {
      // Prisma error codes start with P
      console.error("Database error:", error.code);
      return NextResponse.json(
        {
          error: "Database error",
          response:
            "Ошибка базы данных. Сообщения сохраняются только локально.",
        },
        { status: 500 }
      );
    }

    // Ошибки парсинга JSON
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          error: "Invalid request format",
          response: "Неверный формат запроса. Попробуйте ещё раз.",
        },
        { status: 400 }
      );
    }

    // Общая ошибка
    return NextResponse.json(
      {
        error: "Failed to process message",
        response:
          "Извините, произошла ошибка. Попробуйте перезагрузить страницу или повторить позже.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
