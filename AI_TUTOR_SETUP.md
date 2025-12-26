# 🚀 ИИ Репетитор - Быстрая установка

## ⚡ Запуск за 2 минуты

### Шаг 1: Получите OpenAI API ключ (1 минута)

1. Зарегистрируйтесь на https://platform.openai.com
2. Перейдите в **API Keys**
3. Нажмите **Create new secret key**
4. Скопируйте ключ: `sk-...`

**Важно:** Сохраните ключ в безопасном месте!

---

### Шаг 2: Добавьте ключ в .env (30 секунд)

```bash
# Откройте .env файл
echo "OPENAI_API_KEY=sk-ваш-ключ-здесь" >> .env
```

Или вручную добавьте в `.env`:

```env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
```

---

### Шаг 3: Установите OpenAI SDK (30 секунд)

```bash
npm install openai
```

---

### Шаг 4: Запустите Next.js (10 секунд)

```bash
npm run dev
```

---

### Шаг 5: Откройте чат (10 секунд)

Перейдите на: **http://localhost:3001/tutor**

**🎉 Готово!** Начните общаться с ИИ репетитором!

---

## ✅ Проверка работы

### Тест 1: General Mode

```
Вы: Explain Present Simple
Репетитор: Present Simple — это простое настоящее время...
```

### Тест 2: Lesson Mode

```
Вы: Дай упражнение на закрепление
Репетитор: Вот упражнение: Fill in the gaps...
```

### Тест 3: Practice Mode

```
You: Let's talk about hobbies
Tutor: Great! What do you like to do in your free time?
```

---

## 💰 Стоимость

### GPT-4o-mini (используется по умолчанию)

- **$0.15** за 1M входящих токенов
- **$0.60** за 1M исходящих токенов
- **~$0.0003** за один запрос (~800 токенов)
- **~$0.30** за 1000 запросов

**Пример:**

- 10,000 запросов = ~$3
- 100,000 запросов = ~$30

---

## 🎯 Возможности

### 3 режима работы:

✅ **General** - Общие вопросы по английскому  
✅ **Lesson** - Помощь по текущему уроку  
✅ **Practice** - Практика разговорной речи

### Умный контекст:

✅ Помнит последние 5 сообщений  
✅ Разные промпты для каждого режима  
✅ Автоматические suggestions после ответа  
✅ Валидация ввода (макс 1000 символов)

---

## 🛠️ Настройка (опционально)

### Изменить модель

В файле `src/app/api/tutor/chat/route.ts`:

```typescript
const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini", // или "gpt-4", "gpt-4-turbo"
  // ...
});
```

### Изменить температуру (креативность)

```typescript
temperature: 0.7, // 0.0 = точные, 1.0 = креативные
```

### Изменить длину ответа

```typescript
max_tokens: 1000, // макс токенов в ответе
```

---

## 🔒 Безопасность

### Rate Limiting (рекомендуется)

Добавьте в `src/app/api/tutor/chat/route.ts`:

```typescript
// Простой rate limiter
const rateLimits = new Map<string, number[]>();

function checkRateLimit(userId: string): boolean {
  const now = Date.now();
  const userRequests = rateLimits.get(userId) || [];

  // Оставляем только запросы за последние 15 минут
  const recentRequests = userRequests.filter(
    (time) => now - time < 15 * 60 * 1000
  );

  if (recentRequests.length >= 50) {
    return false; // Превышен лимит
  }

  recentRequests.push(now);
  rateLimits.set(userId, recentRequests);
  return true;
}

// В POST handler:
if (!checkRateLimit(userId || session?.user?.id || "anon")) {
  return NextResponse.json({ error: "Too many requests" }, { status: 429 });
}
```

---

## 🐛 Troubleshooting

### Ошибка: "Invalid API key"

**Решение:**

1. Проверьте, что ключ начинается с `sk-`
2. Проверьте, что ключ в `.env` без лишних пробелов
3. Перезапустите `npm run dev`

### Ошибка: "Rate limit exceeded"

**Решение:**

1. Проверьте баланс на https://platform.openai.com/account/billing
2. Подождите несколько минут
3. Уменьшите частоту запросов

### Ошибка: "Module not found: openai"

**Решение:**

```bash
npm install openai
npm run dev
```

### Чат не отвечает

**Решение:**

1. Откройте консоль браузера (F12)
2. Проверьте ошибки
3. Проверьте логи терминала Next.js
4. Убедитесь что API ключ правильный

---

## 📊 Мониторинг расходов

### OpenAI Dashboard

Отслеживайте расходы на:
https://platform.openai.com/account/usage

### Установите лимиты

1. Откройте: https://platform.openai.com/account/limits
2. Установите **Monthly budget limit**
3. Включите **Email notifications**

---

## 🚀 Production Deploy

### Vercel

```bash
# Установите Vercel CLI
npm i -g vercel

# Деплой
vercel

# Добавьте env variable в Vercel Dashboard:
OPENAI_API_KEY=sk-...
```

### Railway

```bash
# Установите Railway CLI
npm i -g @railway/cli

# Деплой
railway up

# Добавьте env variable:
railway variables set OPENAI_API_KEY=sk-...
```

---

## 📈 Улучшения

### 1. Сохранение истории в БД

Обновите Prisma schema:

```prisma
model ChatMessage {
  id             String   @id @default(cuid())
  userId         String
  role           String
  content        String
  mode           String
  timestamp      DateTime @default(now())
}
```

### 2. Голосовой ввод

```typescript
// В ChatInterface.tsx
const recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.onresult = (e) => {
  setInput(e.results[0][0].transcript);
};
```

### 3. Streaming ответов

```typescript
const stream = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: messages,
  stream: true,
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content;
  // Отправляйте chunk клиенту
}
```

---

## ✅ Чеклист

- [ ] OpenAI API ключ получен
- [ ] Ключ добавлен в `.env`
- [ ] `npm install openai` выполнен
- [ ] `npm run dev` запущен
- [ ] Чат доступен на `/tutor`
- [ ] Все 3 режима работают
- [ ] Suggestions отображаются
- [ ] История сообщений сохраняется (UI)

---

## 📚 Дополнительно

### API Documentation

- **OpenAI Chat API:** https://platform.openai.com/docs/api-reference/chat
- **OpenAI Node SDK:** https://github.com/openai/openai-node

### Альтернативные модели

```typescript
// GPT-4 Turbo (быстрее GPT-4)
model: "gpt-4-turbo";

// GPT-4 (самое высокое качество)
model: "gpt-4";

// GPT-3.5 Turbo (дешевле)
model: "gpt-3.5-turbo";
```

---

**🎉 Ваш ИИ репетитор готов!**

**Начните использовать:** http://localhost:3001/tutor

---

**Версия:** 2.0 (без n8n)  
**Обновлено:** Ноябрь 2025
