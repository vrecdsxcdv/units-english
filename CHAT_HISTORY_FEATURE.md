# 💾 История чатов - Сохранение в БД

## ✅ Что реализовано

Теперь **все чаты сохраняются в базу данных** и привязаны к пользователям!

---

## 📦 Изменения

### 1. База данных (SQLite)

**Добавлены модели:**

```prisma
model ChatConversation {
  id        String   @id
  userId    String
  mode      String   // "general" | "lesson" | "practice"
  title     String?  // Автогенерируемый заголовок
  createdAt DateTime
  updatedAt DateTime
  messages  ChatMessage[]
}

model ChatMessage {
  id             String   @id
  conversationId String
  role           String   // "user" | "assistant"
  content        String
  timestamp      DateTime
}
```

**База данных:** `prisma/dev.db` (SQLite для локальной разработки)

---

### 2. API Endpoints

#### POST /api/tutor/chat

**Новые возможности:**

- ✅ Автоматически создает новый `conversation` при первом сообщении
- ✅ Сохраняет ВСЕ сообщения (user и assistant) в БД
- ✅ Возвращает `conversationId` для продолжения чата
- ✅ Загружает историю из БД для контекста

#### GET /api/tutor/history

**Возвращает:**

- Список всех разговоров пользователя
- Последнее сообщение в каждом разговоре
- Количество сообщений
- Режим (general/lesson/practice)

#### DELETE /api/tutor/history?id={conversationId}

**Удаляет:**

- Разговор и все сообщения (cascade delete)

---

### 3. Frontend

#### ChatInterface.tsx

**Изменения:**

- ✅ Хранит `conversationId` в state
- ✅ Передает `conversationId` в каждом запросе
- ✅ Автоматически сохраняет новый ID

#### History Page

**Работает:**

- ✅ Показывает реальные разговоры из БД
- ✅ Кнопка удаления работает
- ✅ Фильтрация по режимам (mode)

---

## 🚀 Как это работает

### Flow сохранения чата:

```
1. Пользователь: "Explain Present Simple"
         ↓
2. ChatInterface → POST /api/tutor/chat
   {
     message: "Explain Present Simple",
     mode: "general",
     conversationId: null  // Первое сообщение
   }
         ↓
3. API создает новый Conversation:
   - title: "Explain Present Simple"
   - mode: "general"
   - userId: "user-123"
         ↓
4. API сохраняет сообщение пользователя:
   - role: "user"
   - content: "Explain Present Simple"
         ↓
5. API вызывает OpenAI → получает ответ
         ↓
6. API сохраняет ответ ассистента:
   - role: "assistant"
   - content: "Present Simple is..."
         ↓
7. API возвращает:
   {
     response: "Present Simple is...",
     conversationId: "clxxxxx"  // Новый ID!
   }
         ↓
8. ChatInterface сохраняет conversationId
         ↓
9. Следующие сообщения отправляются с этим ID
         ↓
10. API загружает историю из БД для контекста
```

---

## 📊 Структура БД

```
User
  └── ChatConversation (1:many)
       ├── id: "clxxxxx"
       ├── mode: "general"
       ├── title: "Explain Present Simple"
       └── ChatMessage[] (1:many)
            ├── { role: "user", content: "Explain..." }
            ├── { role: "assistant", content: "Present Simple is..." }
            ├── { role: "user", content: "Give examples" }
            └── { role: "assistant", content: "Sure! I go..." }
```

---

## ✨ Преимущества

### Для пользователей:

- ✅ **История сохраняется** - можно вернуться к старым чатам
- ✅ **Контекст сохраняется** - продолжение разговора с историей
- ✅ **Можно удалить** - ненужные чаты легко удаляются

### Для разработчика:

- ✅ **Просто** - SQLite не требует настройки
- ✅ **Быстро** - локальная БД работает мгновенно
- ✅ **Надежно** - Prisma ORM с типами TypeScript

---

## 🔧 Команды

### Просмотреть БД:

```bash
npx prisma studio
```

Откроется: http://localhost:5555

### Сбросить БД:

```bash
rm prisma/dev.db
npx prisma migrate dev
```

### Создать новую миграцию:

```bash
npx prisma migrate dev --name your_migration_name
```

---

## 📝 Примеры использования

### Получить историю:

```typescript
const response = await fetch("/api/tutor/history");
const { conversations } = await response.json();

// conversations:
// [
//   {
//     id: "clxxxxx",
//     title: "Explain Present Simple",
//     mode: "general",
//     lastMessage: "Thank you!",
//     messageCount: 12,
//     timestamp: "2025-11-12T19:43:23.000Z"
//   }
// ]
```

### Удалить разговор:

```typescript
await fetch("/api/tutor/history?id=clxxxxx", {
  method: "DELETE",
});
```

### Продолжить существующий чат:

```typescript
await fetch("/api/tutor/chat", {
  method: "POST",
  body: JSON.stringify({
    message: "Give more examples",
    mode: "general",
    conversationId: "clxxxxx", // Существующий ID
  }),
});
```

---

## 🚀 Деплой на Production

### Переключение на PostgreSQL:

1. Обновите `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

2. Добавьте в `.env`:

```env
DATABASE_URL=postgresql://user:pass@host:5432/dbname
```

3. Создайте миграцию:

```bash
npx prisma migrate deploy
```

---

## ✅ Готово!

Теперь все чаты сохраняются автоматически! 🎉

**Проверьте:**

1. Откройте http://localhost:3001/tutor
2. Напишите несколько сообщений
3. Откройте http://localhost:3001/tutor/history
4. Увидите свой разговор в истории!

---

**Версия:** 3.0 (with DB persistence)  
**Обновлено:** Ноябрь 2025
