import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import {
  VOCABOS_SYSTEM_PROMPT_V3,
  buildContextAnchor,
  detectUserIntent,
  validateTutorResponse,
  cleanResponse,
  getRegenerationHint,
  createDefaultContext,
  type UserContext,
  type SessionPhase,
  type SkillVector,
} from "@/lib/tutor";

// OpenRouter API configuration
const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

// DeepSeek model - works from Russia, great quality
const MODEL = "deepseek/deepseek-chat-v3-0324";

// Retry configuration
const RETRY_DELAYS = [1000, 2000, 5000];
const REQUEST_TIMEOUT = 90000;

// Sleep helper
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

async function generateChatCompletion(
  messages: ChatMessage[],
  apiKey: string,
  temperature: number = 0.7
): Promise<string> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= RETRY_DELAYS.length; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

      const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": process.env.NEXTAUTH_URL || "http://localhost:3000",
          "X-Title": "VocabOS English Learning",
        },
        body: JSON.stringify({
          model: MODEL,
          messages,
          temperature,
          top_p: 0.95,
          max_tokens: 2048,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Handle rate limit with retry
      if (response.status === 429) {
        const retryAfter = response.headers.get("retry-after");
        const waitTime = retryAfter
          ? parseInt(retryAfter) * 1000
          : RETRY_DELAYS[attempt] || 5000;
        console.log(
          `Rate limited, waiting ${waitTime}ms before retry ${attempt + 1}...`
        );
        await sleep(waitTime);
        continue;
      }

      if (!response.ok) {
        const error = await response.text();
        console.error("OpenRouter error:", response.status, error);
        throw new Error(`OpenRouter error: ${response.status}`);
      }

      const data = (await response.json()) as {
        choices: Array<{ message: { content: string } }>;
      };

      return data.choices[0]?.message?.content || "";
    } catch (error) {
      lastError = error as Error;
      if (attempt < RETRY_DELAYS.length) {
        console.log(`Request failed, retrying in ${RETRY_DELAYS[attempt]}ms...`);
        await sleep(RETRY_DELAYS[attempt]);
      }
    }
  }

  throw lastError || new Error("Failed after retries");
}

// Determine session phase from message count and conversation state
function determinePhase(messageCount: number, hasConfirmedPlan: boolean): SessionPhase {
  if (hasConfirmedPlan) return 'TEACHING';
  if (messageCount <= 6) return 'ONBOARDING';
  return 'TEACHING';
}

// Check if user confirmed plan (simple heuristics)
function checkPlanConfirmation(messages: { role: string; content: string }[]): boolean {
  const confirmationPatterns = [
    /поехали/i,
    /давай/i,
    /начн[её]м/i,
    /ок(ей)?/i,
    /хорошо/i,
    /согласен/i,
    /подходит/i,
    /нравится/i,
    /да,?\s*(план|так)/i,
  ];

  // Check last 3 user messages for confirmation
  const userMessages = messages
    .filter(m => m.role === 'user')
    .slice(-3)
    .map(m => m.content);

  for (const msg of userMessages) {
    for (const pattern of confirmationPatterns) {
      if (pattern.test(msg)) return true;
    }
  }

  return false;
}

// Generate suggestions based on phase and intent
function generateSuggestions(phase: SessionPhase, mode: string): string[] {
  if (phase === 'ONBOARDING') {
    return [
      "Хочу на IELTS",
      "Для работы",
      "Просто для себя",
    ];
  }

  switch (mode) {
    case "general":
      return ["Дай ещё примеры", "Объясни проще", "Дай упражнение"];
    case "lesson":
      return ["Практика грамматики", "Учить слова", "Разговорная практика"];
    case "practice":
      return ["Продолжить", "Объясни ещё раз", "Другая тема"];
    default:
      return ["Практика грамматики", "Учить слова", "Поговорим"];
  }
}

// Count tokens (rough estimate: 1 token ≈ 4 chars for mixed RU/EN)
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

// Get or create skill vector for user
async function getOrCreateSkillVector(userId: string): Promise<SkillVector> {
  let skillVector = await prisma.skillVector.findUnique({
    where: { userId },
  });

  if (!skillVector) {
    skillVector = await prisma.skillVector.create({
      data: { userId },
    });
  }

  return {
    grammar: skillVector.grammar,
    vocabulary: skillVector.vocabulary,
    pronunciation: skillVector.pronunciation,
    listening: skillVector.listening,
    speaking: skillVector.speaking,
    slang: skillVector.slang,
    wordFormation: skillVector.wordFormation,
    fluency: skillVector.fluency,
    writing: skillVector.writing,
    comprehension: skillVector.comprehension,
  };
}

// Get user memories
async function getUserMemories(userId: string, limit: number = 10): Promise<string[]> {
  const memories = await prisma.userMemory.findMany({
    where: {
      userId,
      isActive: true,
    },
    orderBy: [
      { importance: 'desc' },
      { accessCount: 'desc' },
    ],
    take: limit,
  });

  // Update access count
  if (memories.length > 0) {
    await prisma.userMemory.updateMany({
      where: {
        id: { in: memories.map(m => m.id) },
      },
      data: {
        accessCount: { increment: 1 },
        lastAccessedAt: new Date(),
      },
    });
  }

  return memories.map(m => `[${m.memoryType}] ${m.content}`);
}

// Extract and save memories from conversation (simple extraction)
async function extractAndSaveMemories(
  userId: string,
  userMessage: string,
  assistantResponse: string,
  messageId: string
): Promise<void> {
  // Simple pattern-based extraction
  const factPatterns = [
    { pattern: /работаю?\s+(в|на)\s+(.+?)(?:[,.]|$)/i, type: 'fact' },
    { pattern: /(?:я\s+)?(?:из|живу в)\s+(.+?)(?:[,.]|$)/i, type: 'context' },
    { pattern: /(?:мне|мой возраст)\s+(\d+)\s*(?:лет|года)/i, type: 'fact' },
    { pattern: /(?:хочу|планирую|собираюсь)\s+(.+?)(?:[,.]|$)/i, type: 'goal' },
    { pattern: /(?:люблю|нравится|предпочитаю)\s+(.+?)(?:[,.]|$)/i, type: 'preference' },
    { pattern: /(?:не люблю|не нравится|ненавижу)\s+(.+?)(?:[,.]|$)/i, type: 'preference' },
    { pattern: /(?:готовлюсь к|сдаю)\s+(IELTS|TOEFL|экзамен)/i, type: 'goal' },
    { pattern: /уровень\s+(A1|A2|B1|B2|C1|C2)/i, type: 'skill_note' },
  ];

  const newMemories: { type: string; content: string }[] = [];

  for (const { pattern, type } of factPatterns) {
    const match = userMessage.match(pattern);
    if (match) {
      const content = match[0].trim();
      // Check if similar memory already exists
      const existing = await prisma.userMemory.findFirst({
        where: {
          userId,
          content: { contains: content.substring(0, 20) },
          isActive: true,
        },
      });

      if (!existing) {
        newMemories.push({ type, content });
      }
    }
  }

  // Save new memories
  for (const mem of newMemories) {
    try {
      await prisma.userMemory.create({
        data: {
          userId,
          memoryType: mem.type,
          content: mem.content,
          sourceMessageId: messageId,
          importance: mem.type === 'goal' ? 0.8 : 0.5,
        },
      });
    } catch (error) {
      console.error('Failed to save memory:', error);
    }
  }
}

// Atomic message insert with seqNum
async function insertMessage(
  conversationId: string,
  role: string,
  content: string,
  tokenCount?: number
): Promise<{ id: string; seqNum: number }> {
  // Get next seqNum atomically
  const result = await prisma.$transaction(async (tx) => {
    // Get current max seqNum
    const lastMessage = await tx.chatMessage.findFirst({
      where: { conversationId },
      orderBy: { seqNum: 'desc' },
      select: { seqNum: true },
    });

    const nextSeqNum = (lastMessage?.seqNum ?? 0) + 1;

    // Insert message
    const message = await tx.chatMessage.create({
      data: {
        conversationId,
        role,
        content,
        seqNum: nextSeqNum,
        tokenCount,
      },
    });

    // Update conversation stats
    await tx.chatConversation.update({
      where: { id: conversationId },
      data: {
        messageCount: { increment: 1 },
        totalTokens: { increment: tokenCount || 0 },
        updatedAt: new Date(),
      },
    });

    return { id: message.id, seqNum: nextSeqNum };
  });

  return result;
}

export async function POST(req: NextRequest) {
  try {
    // Check for API key - support both OpenRouter and OpenAI
    const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error("No AI API key configured");
      return NextResponse.json(
        {
          error: "AI API key is not configured",
          response: "AI не настроен. Пожалуйста, добавьте OPENROUTER_API_KEY в .env",
        },
        { status: 500 }
      );
    }

    // Determine which API to use
    const useOpenRouter = !!process.env.OPENROUTER_API_KEY;

    const session = await getServerSession(authOptions);
    const body = await req.json();
    const {
      message,
      mode = "general",
      conversationId: providedConversationId,
      conversationHistory = [],
    } = body;

    // Validation
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: "Message too long (max 2000 characters)" },
        { status: 400 }
      );
    }

    const currentUserId = session?.user?.id;
    const userTokens = estimateTokens(message);

    // Get or create conversation
    let conversation;
    let conversationId = providedConversationId;

    if (conversationId && currentUserId) {
      conversation = await prisma.chatConversation.findUnique({
        where: { id: conversationId },
        include: {
          messages: {
            orderBy: { seqNum: 'asc' },
            where: { role: { not: 'system' } },
          },
        },
      });
    }

    // Create new conversation if needed
    if (!conversation && currentUserId) {
      conversation = await prisma.chatConversation.create({
        data: {
          userId: currentUserId,
          mode,
          title: message.substring(0, 50) + (message.length > 50 ? "..." : ""),
          sessionPhase: 'ONBOARDING',
        },
        include: { messages: true },
      });
      conversationId = conversation.id;
    }

    // Save user message
    let userMessageId: string | undefined;
    if (conversation) {
      const result = await insertMessage(
        conversation.id,
        "user",
        message,
        userTokens
      );
      userMessageId = result.id;
    }

    // Build conversation history
    const historySource = conversation?.messages || conversationHistory;
    const recentHistory = historySource.slice(-10);

    // Determine session phase
    const messagesInSession = recentHistory.length + 1;
    const hasConfirmedPlan = checkPlanConfirmation(recentHistory);
    const sessionPhase = determinePhase(messagesInSession, hasConfirmedPlan);

    // Update conversation phase if changed
    if (conversation && conversation.sessionPhase !== sessionPhase) {
      await prisma.chatConversation.update({
        where: { id: conversation.id },
        data: { sessionPhase },
      });
    }

    // Detect user intent
    const intent = detectUserIntent(message);

    // Build user context
    let skillVector: SkillVector;
    let memories: string[] = [];
    let learningGoal: UserContext['learningGoal'] = 'life';

    if (currentUserId) {
      // Load skill vector from DB
      skillVector = await getOrCreateSkillVector(currentUserId);

      // Load memories
      memories = await getUserMemories(currentUserId, 10);

      // Try to detect goal from memories
      const goalMemory = memories.find(m => m.includes('[goal]'));
      if (goalMemory) {
        if (/ielts/i.test(goalMemory)) learningGoal = 'IELTS';
        else if (/работ/i.test(goalMemory)) learningGoal = 'work';
        else if (/путешеств/i.test(goalMemory)) learningGoal = 'travel';
      }
    } else {
      skillVector = createDefaultContext().skillVector;
    }

    const userContext: UserContext = {
      userLevel: 'A1', // TODO: get from assessment
      skillVector,
      learningGoal,
      interests: [],
      dailyTimeMinutes: 15,
      sessionPhase,
      messagesInSession,
      fatigue: 'low',
      intent,
    };

    // Add memories to context as interests/notes
    if (memories.length > 0) {
      userContext.interests = memories.slice(0, 5).map(m =>
        m.replace(/^\[[^\]]+\]\s*/, '')
      );
    }

    // Build context anchor
    const contextAnchor = buildContextAnchor(userContext);

    // Add memories section to context
    const memoriesSection = memories.length > 0
      ? `\n\n╔══════════════════════════════════════════════════════════════════╗
║                    ДОЛГОСРОЧНАЯ ПАМЯТЬ                           ║
╠══════════════════════════════════════════════════════════════════╣
${memories.map(m => `║ ${m}`).join('\n')}
╚══════════════════════════════════════════════════════════════════╝`
      : '';

    // Build system prompt with context
    const fullSystemPrompt = `${VOCABOS_SYSTEM_PROMPT_V3}\n\n${contextAnchor}${memoriesSection}`;

    // Build messages array
    const messages: ChatMessage[] = [
      { role: "system", content: fullSystemPrompt },
    ];

    // Add history
    for (const msg of recentHistory) {
      messages.push({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.content,
      });
    }

    // Add current message
    messages.push({ role: "user", content: message });

    let responseText: string;
    let regenerated = false;

    if (useOpenRouter) {
      // Use OpenRouter with DeepSeek
      responseText = await generateChatCompletion(messages, apiKey);

      // Validate response
      const validation = validateTutorResponse(responseText, sessionPhase, intent);

      if (validation.shouldRegenerate) {
        console.log("Response validation failed, regenerating...", validation.errors);

        // Add regeneration hint to system prompt
        const hint = getRegenerationHint(validation);
        const regenerationMessages: ChatMessage[] = [
          { role: "system", content: fullSystemPrompt + hint },
          ...messages.slice(1), // Skip original system message
        ];

        // Regenerate with lower temperature
        responseText = await generateChatCompletion(regenerationMessages, apiKey, 0.5);
        regenerated = true;
      }

      // Log warnings (don't block)
      if (validation.warnings.length > 0) {
        console.log("Response warnings:", validation.warnings);
      }

      // Clean response (remove markdown etc)
      responseText = cleanResponse(responseText);

    } else {
      // Fallback to OpenAI
      const OpenAI = (await import("openai")).default;
      const openai = new OpenAI({ apiKey });

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages as any,
        temperature: 0.7,
        max_tokens: 2048,
      });

      responseText = completion.choices[0]?.message?.content || "Извините, не могу ответить.";
      responseText = cleanResponse(responseText);
    }

    const responseTokens = estimateTokens(responseText);

    // Save assistant message
    if (conversation) {
      await insertMessage(
        conversation.id,
        "assistant",
        responseText,
        responseTokens
      );
    }

    // Extract and save memories from conversation
    if (currentUserId && userMessageId) {
      // Run async, don't wait
      extractAndSaveMemories(currentUserId, message, responseText, userMessageId).catch(
        err => console.error('Memory extraction failed:', err)
      );
    }

    // Generate suggestions based on phase
    const suggestions = generateSuggestions(sessionPhase, mode);

    return NextResponse.json({
      response: responseText,
      suggestions,
      conversationId: conversationId || `temp-${Date.now()}`,
      timestamp: new Date().toISOString(),
      model: useOpenRouter ? MODEL : "gpt-4o-mini",
      // Debug info (only in development)
      ...(process.env.NODE_ENV === "development" && {
        debug: {
          sessionPhase,
          messagesInSession,
          intent,
          regenerated,
          memoriesCount: memories.length,
        },
      }),
    });
  } catch (error: any) {
    console.error("Chat API error:", error);
    console.error("Error details:", {
      message: error.message,
      status: error.status,
      type: error.type,
      code: error.code,
    });

    // Rate limit error
    if (error.status === 429) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          response: "Превышен лимит запросов. Пожалуйста, подождите минуту.",
        },
        { status: 429 }
      );
    }

    // Auth error
    if (error.status === 401 || error.status === 403) {
      return NextResponse.json(
        {
          error: "Invalid API key",
          response: "Ошибка авторизации API. Проверьте настройки API ключа.",
        },
        { status: 500 }
      );
    }

    // Network error
    if (error.code === "ECONNREFUSED" || error.code === "ETIMEDOUT") {
      return NextResponse.json(
        {
          error: "Network error",
          response: "Не удалось подключиться к AI. Проверьте интернет.",
        },
        { status: 503 }
      );
    }

    // Database error
    if (error.code?.startsWith("P")) {
      return NextResponse.json(
        {
          error: "Database error",
          response: "Ошибка базы данных. Сообщения сохраняются локально.",
        },
        { status: 500 }
      );
    }

    // General error
    return NextResponse.json(
      {
        error: "Failed to process message",
        response: "Извините, произошла ошибка. Попробуйте ещё раз.",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
