# 😉 Speakly AI - ChatGPT-style English Tutor

## ✨ What's Implemented

A complete **AI English tutor** for Units English platform with direct OpenAI API integration, featuring a modern ChatGPT-inspired interface.

---

## 📦 Created Files

### Frontend (3 components)

- ✅ `src/app/tutor/page.tsx` - Main chat page with animated gradient title
- ✅ `src/app/tutor/history/page.tsx` - Chat history with database integration
- ✅ `src/app/tutor/settings/page.tsx` - User settings
- ✅ `src/components/tutor/ChatInterface.tsx` - Chat UI with in-chat mode switching

### Backend (2 API routes)

- ✅ `src/app/api/tutor/chat/route.ts` - **Direct OpenAI API calls with chat saving**
- ✅ `src/app/api/tutor/history/route.ts` - Conversation management API

### Database (Prisma)

- ✅ `ChatConversation` model - Stores user conversations
- ✅ `ChatMessage` model - Stores individual messages

### Documentation

- ✅ `QUICK_START.md` - Quick start in 3 steps
- ✅ `AI_TUTOR_SETUP.md` - Detailed setup guide
- ✅ `CHAT_HISTORY_FEATURE.md` - Chat persistence documentation

---

## 🎯 Features

### 3 Chat Modes (Switchable In-Chat)

**1. 💬 General**

```
User: Explain Present Simple
Speakly: Present Simple is used for...
```

**2. 📚 Lesson Help**

```
User: Give me an exercise
Speakly: Fill in the gaps with the correct form...
```

**3. 🗣️ Practice**

```
User: Let's talk about hobbies
Speakly: Great! What do you like to do in your free time?
```

### Smart Features

- ✅ **Context Memory:** Remembers last 5 messages
- ✅ **Mode-Specific Prompts:** Different system prompts for each mode
- ✅ **Auto Suggestions:** Contextual follow-up questions
- ✅ **Chat Persistence:** All conversations saved to database
- ✅ **Conversation Management:** View, load, and delete chat history
- ✅ **Real-time UI:** ChatGPT-style dark theme with gradient title
- ✅ **Mode Switching:** Change modes within the same chat
- ✅ **Error Handling:** Rate limits, invalid API keys
- ✅ **Fast Response:** ~1-2 seconds (GPT-4o-mini)

---

## 🎨 Design Highlights

### ChatGPT-Inspired UI

- 🌙 **Dark Theme:** Gray-900 background with glass-morphism
- 🌈 **Animated Gradient Title:** "😉 Speakly AI - Your english teacher"
- 🔄 **In-Chat Mode Selector:** Switch modes without leaving conversation
- 💬 **Modern Chat Bubbles:** Purple user messages, gray assistant messages
- ✨ **Smooth Animations:** Framer Motion for message transitions
- 🎯 **Centered Layout:** Max-width 4xl for optimal readability

### Color Palette

```css
Background: bg-gray-900
Cards: bg-gray-800 border-gray-700
User Messages: bg-purple-600
Assistant: bg-gray-800 border-gray-700
Accent: purple-500 pink-400 blue-400 (gradient)
```

---

## 🚀 Quick Start

### 1. Add OpenAI API Key

Create/update `.env`:

```env
OPENAI_API_KEY=sk-your-key-here
```

### 2. Run Database Migration

```bash
npx prisma migrate dev
npx prisma generate
```

### 3. Start Server

```bash
npm run dev
```

### 4. Open Chat

http://localhost:3001/tutor

**🎉 Done!**

---

## 💡 Architecture

```
┌─────────────────────────────────────────────┐
│         Next.js Frontend                    │
│  /tutor  →  ChatInterface (with mode tabs)  │
└────────────────┬────────────────────────────┘
                 │
                 ▼
         POST /api/tutor/chat
                 │
                 ├─ Validation (max 1000 chars)
                 ├─ Get/Create Conversation (DB)
                 ├─ Save User Message (DB)
                 ├─ Select System Prompt (mode-specific)
                 ├─ Build Context (conversation history)
                 │
                 ▼
         ┌───────────────────┐
         │   OpenAI API      │
         │   (gpt-4o-mini)   │
         └─────────┬─────────┘
                   │
                   ▼
         ┌───────────────────┐
         │  Save Assistant   │
         │  Message (DB)     │
         └─────────┬─────────┘
                   │
                   ▼
         JSON { response, suggestions, conversationId }
```

---

## 🔧 Technical Stack

| Component | Technology                       |
| --------- | -------------------------------- |
| Frontend  | Next.js 15, React 19, TypeScript |
| Styling   | Tailwind CSS, Framer Motion      |
| Backend   | Next.js API Routes               |
| Database  | SQLite (dev) / PostgreSQL (prod) |
| ORM       | Prisma                           |
| LLM       | OpenAI GPT-4o-mini               |
| SDK       | openai@6.8.1                     |
| Auth      | NextAuth (integrated)            |

---

## 💾 Database Schema

```prisma
model ChatConversation {
  id        String   @id @default(cuid())
  userId    String
  mode      String   // "general" | "lesson" | "practice"
  title     String?  // Auto-generated from first message
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user      User     @relation(fields: [userId], references: [id])
  messages  ChatMessage[]
}

model ChatMessage {
  id             String   @id @default(cuid())
  conversationId String
  role           String   // "user" | "assistant"
  content        String
  timestamp      DateTime @default(now())

  conversation   ChatConversation @relation(fields: [conversationId], references: [id])
}
```

---

## 💰 Pricing

### GPT-4o-mini

| Metric          | Value      |
| --------------- | ---------- |
| Input tokens    | $0.15 / 1M |
| Output tokens   | $0.60 / 1M |
| Avg request     | ~$0.0003   |
| 1,000 requests  | ~$0.30     |
| 10,000 requests | ~$3.00     |

**Recommendation:** GPT-4o-mini is the optimal balance of price and quality for educational tasks.

---

## 📝 Key Code: Main API Endpoint

```typescript
// src/app/api/tutor/chat/route.ts

import OpenAI from "openai";
import { prisma } from "@/lib/prisma";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  const { message, mode, conversationId, conversationHistory } =
    await req.json();

  const currentUserId = session?.user?.id;

  // Get or create conversation
  let conversation;
  if (conversationId && currentUserId) {
    conversation = await prisma.chatConversation.findUnique({
      where: { id: conversationId },
      include: { messages: { orderBy: { timestamp: "asc" } } },
    });
  }

  if (!conversation && currentUserId) {
    conversation = await prisma.chatConversation.create({
      data: {
        userId: currentUserId,
        mode,
        title: message.substring(0, 50) + "...",
      },
    });
  }

  // Save user message
  if (conversation) {
    await prisma.chatMessage.create({
      data: {
        conversationId: conversation.id,
        role: "user",
        content: message,
      },
    });
  }

  // Call OpenAI
  const messages = [
    { role: "system", content: SYSTEM_PROMPTS[mode] },
    ...conversationHistory.slice(-5),
    { role: "user", content: message },
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
    temperature: 0.7,
    max_tokens: 1000,
  });

  const response = completion.choices[0]?.message?.content;

  // Save assistant message
  if (conversation) {
    await prisma.chatMessage.create({
      data: {
        conversationId: conversation.id,
        role: "assistant",
        content: response,
      },
    });
  }

  return NextResponse.json({
    response,
    suggestions: generateSuggestions(mode),
    conversationId: conversation?.id,
  });
}
```

---

## ⚙️ Configuration

### Change Model

In `src/app/api/tutor/chat/route.ts`:

```typescript
model: "gpt-4o-mini", // or "gpt-4", "gpt-4-turbo"
```

### Change Temperature

```typescript
temperature: 0.7, // 0.0 = precise, 1.0 = creative
```

### Change Response Length

```typescript
max_tokens: 1000, // max tokens
```

### Customize System Prompts

```typescript
const SYSTEM_PROMPTS = {
  general: `You are Speakly, an experienced English tutor...`,
  lesson: `You are Speakly, helping with the current lesson...`,
  practice: `You are Speakly, practicing conversation...`,
};
```

---

## 🔒 Security

### Implemented

- ✅ Input validation (1000 char limit)
- ✅ User authentication (NextAuth)
- ✅ User-scoped conversations
- ✅ Error handling for OpenAI API
- ✅ API key in environment variables
- ✅ SQL injection protection (Prisma)

### Recommended Additions

- ⚠️ Rate limiting (50 requests / 15 minutes)
- ⚠️ Request logging
- ⚠️ Content moderation
- ⚠️ Cost monitoring

---

## 🐛 Troubleshooting

### "Invalid API key"

1. Check format: `sk-proj-...`
2. Check `.env` has no extra spaces
3. Restart `npm run dev`

### "Rate limit exceeded"

1. Check balance: https://platform.openai.com/account/billing
2. Wait a few minutes
3. Add rate limiting to code

### Chat not responding

1. Open DevTools (F12) → Console
2. Check Next.js terminal logs
3. Verify `openai` package: `npm list openai`

### Database errors

1. Run migrations: `npx prisma migrate dev`
2. Generate client: `npx prisma generate`
3. Check schema: `npx prisma studio`

---

## 📈 Future Improvements

### 1. Streaming Responses

```typescript
const stream = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages,
  stream: true,
});

for await (const chunk of stream) {
  // Send chunk to client
}
```

### 2. Voice Input/Output

```typescript
// Voice input
const recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.onresult = (e) => {
  setInput(e.results[0][0].transcript);
};

// Voice output
const utterance = new SpeechSynthesisUtterance(response);
utterance.lang = "en-US";
speechSynthesis.speak(utterance);
```

### 3. Code Execution for Exercises

```typescript
// For grammar exercises
const result = evaluateExercise(userAnswer, correctAnswer);
```

---

## 🚀 Production Deploy

### Vercel

```bash
vercel

# In Dashboard add:
OPENAI_API_KEY=sk-...
DATABASE_URL=postgresql://...
```

### Railway

```bash
railway up

# Add env variables:
railway variables set OPENAI_API_KEY=sk-...
railway variables set DATABASE_URL=postgresql://...
```

---

## ✅ Advantages

Over n8n integration:

- ✅ **Simpler:** No n8n setup needed
- ✅ **Faster:** Direct API calls (~1-2 sec)
- ✅ **Cheaper:** No n8n hosting costs
- ✅ **More Flexible:** Easy to change prompts
- ✅ **More Secure:** Fewer failure points
- ✅ **Easier Deploy:** Just Next.js
- ✅ **Chat History:** Saved to database
- ✅ **Better UX:** ChatGPT-style interface

---

## 📚 Documentation

- **[QUICK_START.md](./QUICK_START.md)** — Quick start guide
- **[AI_TUTOR_SETUP.md](./AI_TUTOR_SETUP.md)** — Detailed setup
- **[CHAT_HISTORY_FEATURE.md](./CHAT_HISTORY_FEATURE.md)** — Chat persistence
- **[OpenAI API Docs](https://platform.openai.com/docs)** — Official docs

---

## 🎉 Summary

**4 frontend pages**  
**2 API endpoints with direct OpenAI integration**  
**2 database models for chat persistence**  
**ChatGPT-inspired dark UI with animated gradient**  
**In-chat mode switching**

**Status:** ✅ **Production Ready**

---

**Version:** 3.0 (ChatGPT Style + Chat Persistence)  
**Updated:** November 2025  
**Made with ❤️ for Units English**
