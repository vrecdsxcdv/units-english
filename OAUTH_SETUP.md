# OAuth Setup Guide

## Обзор

Платформа теперь поддерживает три способа аутентификации:
1. **Email + Password** (credentials) - обычная регистрация (всегда доступна)
2. **Google OAuth** - вход через Google аккаунт (опционально)
3. **GitHub OAuth** - вход через GitHub аккаунт (опционально)

**Важно:** Кнопки OAuth появляются на страницах входа/регистрации **только если** соответствующие credentials добавлены в `.env` файл. Если credentials не настроены, пользователи увидят только форму входа с email и паролем.

---

## Что было реализовано

### 1. Backend изменения

#### Prisma Schema (`prisma/schema.prisma`)
Добавлены модели для поддержки OAuth:

```prisma
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime
  @@unique([identifier, token])
}
```

**User модель обновлена:**
- Добавлено `emailVerified: DateTime?`
- Добавлено `image: String?`
- Добавлены relations: `accounts Account[]` и `sessions Session[]`

#### NextAuth Configuration (`src/app/api/auth/[...nextauth]/route.ts`)

**Добавлено:**
- `PrismaAdapter` для работы с базой данных
- `GoogleProvider` для Google OAuth
- `GitHubProvider` для GitHub OAuth
- Callbacks для JWT и session

```typescript
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    Credentials({ /* ... */ })
  ],
  // ...
};
```

### 2. Frontend изменения

#### Login Page (`src/app/login/page.tsx`)
- Добавлены кнопки "Войти через Google" и "Войти через GitHub"
- Добавлен разделитель "Или войти с email"
- Улучшен UI с поддержкой dark mode

#### Register Page (`src/app/register/page.tsx`)
- Добавлены кнопки "Регистрация через Google" и "Регистрация через GitHub"
- Добавлен разделитель "Или зарегистрироваться с email"
- Улучшен UI с поддержкой dark mode

---

## Настройка OAuth провайдеров

### Google OAuth

#### 1. Создать OAuth приложение в Google Cloud Console

1. Перейти на [Google Cloud Console](https://console.cloud.google.com/)
2. Создать новый проект или выбрать существующий
3. Перейти в **APIs & Services** → **Credentials**
4. Нажать **Create Credentials** → **OAuth client ID**
5. Выбрать **Application type**: Web application
6. Настроить **Authorized redirect URIs**:
   - Development: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://your-domain.com/api/auth/callback/google`
7. Скопировать **Client ID** и **Client Secret**

#### 2. Добавить в .env

```bash
GOOGLE_CLIENT_ID="ваш-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="ваш-client-secret"
```

---

### GitHub OAuth

#### 1. Создать OAuth App в GitHub

1. Перейти на [GitHub Developer Settings](https://github.com/settings/developers)
2. Нажать **New OAuth App**
3. Заполнить форму:
   - **Application name**: English Learning Platform
   - **Homepage URL**: `http://localhost:3000` (или ваш production URL)
   - **Authorization callback URL**:
     - Development: `http://localhost:3000/api/auth/callback/github`
     - Production: `https://your-domain.com/api/auth/callback/github`
4. Нажать **Register application**
5. Сгенерировать **Client secret**
6. Скопировать **Client ID** и **Client Secret**

#### 2. Добавить в .env

```bash
GITHUB_CLIENT_ID="ваш-client-id"
GITHUB_CLIENT_SECRET="ваш-client-secret"
```

---

## Как это работает

### 1. OAuth Flow

**Когда пользователь нажимает "Войти через Google/GitHub":**

1. `signIn("google")` или `signIn("github")` вызывается на клиенте
2. NextAuth перенаправляет на OAuth провайдер
3. Пользователь авторизуется на стороне провайдера
4. Провайдер перенаправляет обратно на `/api/auth/callback/[provider]`
5. NextAuth:
   - Проверяет email пользователя
   - Если пользователь новый - создает в БД (таблица `User`)
   - Создает Account запись (таблица `Account`)
   - Создает Session (таблица `Session`)
6. Пользователь авторизован и перенаправлен на главную

### 2. Credentials Flow (Email + Password)

**Когда пользователь регистрируется/входит через email:**

1. POST на `/api/register` - создается User
2. `signIn("credentials", { email, password })` - вход
3. NextAuth создает JWT session
4. Пользователь авторизован

---

## Проверка работоспособности

### 1. Локальная разработка

```bash
# 1. Добавить credentials в .env
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
GITHUB_CLIENT_ID="..."
GITHUB_CLIENT_SECRET="..."

# 2. Применить миграцию (уже выполнено)
npx prisma db push

# 3. Запустить dev сервер
npm run dev

# 4. Открыть http://localhost:3000/login
# 5. Нажать "Войти через Google" или "Войти через GitHub"
```

### 2. Production

**Важно:** В production нужно обновить Authorized redirect URIs:

**Google:**
```
https://your-domain.com/api/auth/callback/google
```

**GitHub:**
```
https://your-domain.com/api/auth/callback/github
```

И обновить `.env`:
```bash
NEXTAUTH_URL="https://your-domain.com"
```

---

## Структура базы данных

После OAuth авторизации в БД создаются:

### User таблица
```sql
id: "clxxx..."
email: "user@gmail.com"
name: "John Doe"
emailVerified: 2025-12-23T10:00:00.000Z
image: "https://lh3.googleusercontent.com/..."
```

### Account таблица
```sql
id: "clxxx..."
userId: "clxxx..."
type: "oauth"
provider: "google" | "github"
providerAccountId: "123456789"
access_token: "ya29.xxx..."
refresh_token: "1//xxx..."
expires_at: 1735300000
```

### Session таблица (если используется database strategy)
```sql
id: "clxxx..."
sessionToken: "abc123..."
userId: "clxxx..."
expires: 2026-01-23T10:00:00.000Z
```

---

## Безопасность

### 1. Environment Variables
- **НИКОГДА** не коммитить `.env` в git
- Использовать `.env.example` для документирования
- Хранить secrets в защищенном месте (1Password, Vercel env, etc.)

### 2. Callback URLs
- Разрешить только доверенные домены
- В production использовать HTTPS
- Не разрешать wildcard domains

### 3. NextAuth Secret
```bash
# Генерация безопасного secret
openssl rand -base64 32
```

---

## Troubleshooting

### Ошибка: "Configuration error"
**Причина:** Не заданы `GOOGLE_CLIENT_ID` или `GITHUB_CLIENT_ID`

**Решение:**
```bash
# Проверить .env
cat .env | grep CLIENT_ID

# Добавить если отсутствуют
echo 'GOOGLE_CLIENT_ID="ваш-id"' >> .env
echo 'GOOGLE_CLIENT_SECRET="ваш-secret"' >> .env
```

### Ошибка: "Redirect URI mismatch"
**Причина:** Callback URL в OAuth app не совпадает с фактическим

**Решение:**
1. Проверить NEXTAUTH_URL в `.env`
2. Обновить Authorized redirect URIs в Google/GitHub console
3. Должно быть: `{NEXTAUTH_URL}/api/auth/callback/{provider}`

### Ошибка: "Access denied"
**Причина:** Пользователь отменил авторизацию

**Решение:** Пользователь должен повторить процесс и разрешить доступ

---

## Следующие шаги

### Email Verification для Credentials
Для обычной регистрации (email + password) можно добавить email verification:

1. Создать API endpoint для отправки verification email
2. Использовать `VerificationToken` модель
3. Интегрировать email сервис (Resend, SendGrid, Nodemailer)
4. Добавить страницу подтверждения email

### Добавить больше провайдеров
NextAuth поддерживает 50+ провайдеров:
- Facebook
- Twitter
- Apple
- Discord
- Twitch
- LinkedIn
- и т.д.

---

## Полезные ссылки

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [NextAuth Prisma Adapter](https://next-auth.js.org/adapters/prisma)
- [Google Cloud Console](https://console.cloud.google.com/)
- [GitHub OAuth Apps](https://github.com/settings/developers)
- [NextAuth Providers](https://next-auth.js.org/providers/)

---

**Дата создания:** 23 декабря 2025
**Автор:** Senior Full-Stack Engineer (Claude)
**Статус:** ✅ OAuth интеграция завершена
