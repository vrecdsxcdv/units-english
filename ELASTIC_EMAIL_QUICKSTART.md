# 🚀 Быстрый старт: Elastic Email HTTP API

## 1️⃣ Получите API Key

1. Войдите в [Elastic Email Dashboard](https://elasticemail.com/account/)
2. **Settings** → **API** → **Create API Key**
3. Выберите права: **Email Send** ✅
4. Скопируйте API Key (показывается только один раз!)

## 2️⃣ Верифицируйте отправителя

### Вариант A: Верификация домена (для продакшена)

1. **Settings** → **Domains** → добавьте ваш домен
2. Добавьте DNS записи (SPF, DKIM, DMARC)
3. Дождитесь верификации

### Вариант B: Верификация email (для теста)

1. **Settings** → **Sender Emails** → добавьте email
2. Проверьте почту и кликните на ссылку

## 3️⃣ Настройте переменные окружения

Откройте `.env.local` и обновите:

```bash
# Elastic Email HTTP API
ELASTIC_EMAIL_API_KEY=ВАШ_API_KEY_ИЗ_ШАГА_1
ELASTIC_EMAIL_FROM=no-reply@unitsenglish.com

# URL вашего приложения
NEXTAUTH_URL=http://localhost:3000  # для dev
# NEXTAUTH_URL=https://unitsenglish.com  # для production
```

## 4️⃣ Готово!

Перезапустите dev сервер:

```bash
npm run dev
```

Теперь при регистрации пользователь получит письмо со ссылкой:
```
https://unitsenglish.com/verify-email?token=abc123...
```

---

## 🧪 Тестирование

Создайте файл `test-elastic-email.ts`:

```typescript
import { sendVerificationEmail } from './src/lib/email-elastic';

sendVerificationEmail('your-email@gmail.com', 'test-token-12345')
  .then(() => console.log('✅ Email sent!'))
  .catch(console.error);
```

Запустите:
```bash
npx tsx test-elastic-email.ts
```

---

## 📖 Полная документация

См. [ELASTIC_EMAIL_SETUP.md](./ELASTIC_EMAIL_SETUP.md) для подробной информации.

---

## ❓ Troubleshooting

**"Invalid API key"** → Проверьте, что API Key скопирован полностью
**"Sender not verified"** → Верифицируйте домен/email в Elastic Email Dashboard
**Письма в спаме** → Верифицируйте домен (добавьте SPF, DKIM записи)
