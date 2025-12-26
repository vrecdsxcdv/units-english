# Elastic Email HTTP API Integration

Настройка отправки email через **Elastic Email HTTP API v2** (НЕ SMTP).

## 📋 Требования

- Аккаунт в [Elastic Email](https://elasticemail.com/)
- API Key
- Верифицированный домен или email отправителя

---

## 🔧 Шаг 1: Получение API Key

1. Зайдите в [Elastic Email Dashboard](https://elasticemail.com/account/)
2. Перейдите в **Settings** → **API**
3. Нажмите **Create API Key**
4. Выберите права доступа:
   - ✅ **Email Send** (обязательно)
   - ❌ Остальные можно отключить
5. Скопируйте созданный API Key (он показывается только один раз!)

**Пример API Key:**
```
ABC123DEF456GHI789JKL012MNO345PQR678STU901VWX234YZ
```

---

## 🔧 Шаг 2: Верификация домена/email отправителя

### Вариант A: Верификация домена (рекомендуется для продакшена)

1. В Elastic Email перейдите в **Settings** → **Domains**
2. Добавьте ваш домен (например, `unitsenglish.com`)
3. Добавьте DNS записи (SPF, DKIM, DMARC) в настройки вашего домена
4. Дождитесь верификации (обычно 15-30 минут)

После верификации вы сможете отправлять с любых email на этом домене:
- `no-reply@unitsenglish.com`
- `support@unitsenglish.com`
- и т.д.

### Вариант B: Верификация одного email (для тестирования)

1. В Elastic Email перейдите в **Settings** → **Sender Emails**
2. Добавьте email (например, `no-reply@mydomain.com`)
3. Проверьте почту и кликните на ссылку верификации

---

## 🔧 Шаг 3: Настройка переменных окружения

Откройте файл `.env.local` и добавьте:

```bash
# Elastic Email HTTP API Configuration
ELASTIC_EMAIL_API_KEY=ВАШ_API_KEY_ИЗ_ШАГА_1
ELASTIC_EMAIL_FROM=no-reply@unitsenglish.com

# Базовый URL приложения (для ссылок в письмах)
NEXTAUTH_URL=https://unitsenglish.com
```

### Где взять значения:

| Переменная | Откуда взять | Пример |
|-----------|-------------|--------|
| `ELASTIC_EMAIL_API_KEY` | Settings → API → Create API Key | `ABC123...XYZ` |
| `ELASTIC_EMAIL_FROM` | Ваш верифицированный email | `no-reply@unitsenglish.com` |
| `NEXTAUTH_URL` | URL вашего сайта | `https://unitsenglish.com` |

---

## 🔧 Шаг 4: Использование в коде

### Импорт функции

```typescript
import { sendVerificationEmail } from '@/lib/email-elastic';
```

### Отправка письма верификации

```typescript
// 1. Сгенерировать токен (например, с помощью crypto)
import crypto from 'crypto';
const token = crypto.randomBytes(32).toString('hex');

// 2. Сохранить токен в БД с TTL 15 минут
const expires = new Date(Date.now() + 15 * 60 * 1000); // 15 минут
await prisma.emailVerificationCode.create({
  data: {
    email: 'user@example.com',
    code: token, // используем поле code для хранения токена
    expires,
  },
});

// 3. Отправить письмо
try {
  await sendVerificationEmail('user@example.com', token);
  console.log('✅ Email sent successfully');
} catch (error) {
  console.error('❌ Failed to send email:', error);
}
```

### Формат ссылки в письме

Пользователь получит письмо со ссылкой вида:
```
https://unitsenglish.com/verify-email?token=TOKEN
```

Где `TOKEN` — это значение, которое вы передали в функцию `sendVerificationEmail()`.

---

## 📊 HTTP запрос к Elastic Email (для справки)

Функция `sendVerificationEmail()` под капотом делает такой запрос:

```http
POST https://api.elasticemail.com/v2/email/send
Content-Type: application/x-www-form-urlencoded

apikey=ВАШ_API_KEY
&from=no-reply@unitsenglish.com
&fromName=Units English
&to=user@example.com
&subject=Confirm your email
&bodyHtml=<html>...</html>
&bodyText=Plain text version...
&isTransactional=true
```

### Параметры запроса:

| Параметр | Описание | Пример |
|----------|----------|--------|
| `apikey` | API ключ из Elastic Email | `ABC123...` |
| `from` | Email отправителя (верифицированный) | `no-reply@unitsenglish.com` |
| `fromName` | Имя отправителя | `Units English` |
| `to` | Email получателя | `user@example.com` |
| `subject` | Тема письма | `Confirm your email` |
| `bodyHtml` | HTML версия письма | `<html>...</html>` |
| `bodyText` | Текстовая версия (fallback) | `Confirm your email...` |
| `isTransactional` | Тип письма (true для не-маркетинга) | `true` |

### Пример успешного ответа:

```json
{
  "success": true,
  "data": {
    "transactionid": "550e8400-e29b-41d4-a716-446655440000",
    "messageid": "message-12345"
  }
}
```

### Пример ответа с ошибкой:

```json
{
  "success": false,
  "error": "Invalid API key"
}
```

---

## ✅ Безопасность и best practices

### 1. Защита API Key
- ❌ **НЕ коммитьте** `.env.local` в Git
- ✅ Храните API Key в переменных окружения
- ✅ Используйте разные API Keys для dev/staging/production

### 2. Валидация email
```typescript
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (!isValidEmail(email)) {
  throw new Error('Invalid email format');
}
```

### 3. Rate limiting
Elastic Email имеет лимиты (зависят от тарифа):
- Free: до 100 писем/день
- Платные планы: от 1000 писем/день

### 4. Обработка ошибок
Функция автоматически логирует все ошибки:
```typescript
try {
  await sendVerificationEmail(email, token);
} catch (error) {
  // Логируется автоматически в консоль
  // Ошибка пробрасывается дальше для обработки
  console.error('Email sending failed:', error);
  // Показать пользователю friendly сообщение
}
```

### 5. TTL токена (15 минут)
```typescript
// При генерации токена
const expires = new Date(Date.now() + 15 * 60 * 1000); // 15 минут

// При проверке токена
const verification = await prisma.emailVerificationCode.findFirst({
  where: {
    email,
    code: token,
    expires: { gte: new Date() }, // Проверка что не истёк
  },
});

if (!verification) {
  throw new Error('Invalid or expired token');
}
```

---

## 🧪 Тестирование

### Локальное тестирование

1. Создайте тестовый файл `test-elastic-email.ts`:

```typescript
import { sendVerificationEmail } from './src/lib/email-elastic';

const testEmail = 'your-email@gmail.com'; // Ваш тестовый email
const testToken = 'test-token-12345';

sendVerificationEmail(testEmail, testToken)
  .then(() => console.log('✅ Test email sent!'))
  .catch((error) => console.error('❌ Test failed:', error));
```

2. Запустите:
```bash
npx tsx test-elastic-email.ts
```

3. Проверьте:
   - Письмо пришло на `your-email@gmail.com`
   - Ссылка имеет формат: `https://unitsenglish.com/verify-email?token=test-token-12345`
   - Письмо не попало в спам

### Проверка в Elastic Email Dashboard

1. Перейдите в **Reports** → **Email Log**
2. Найдите отправленное письмо
3. Проверьте статус:
   - ✅ **Sent** — отправлено успешно
   - ✅ **Delivered** — доставлено получателю
   - ❌ **Bounced** — email не существует
   - ⚠️ **Spam** — попало в спам

---

## 🔍 Troubleshooting

### Проблема: "Invalid API key"
- Проверьте, что API Key скопирован полностью (без пробелов)
- Убедитесь, что переменная `ELASTIC_EMAIL_API_KEY` установлена в `.env.local`
- Перезапустите dev сервер после изменения `.env.local`

### Проблема: "Sender email not verified"
- Верифицируйте домен или email в Elastic Email Dashboard
- Убедитесь, что `ELASTIC_EMAIL_FROM` совпадает с верифицированным email

### Проблема: Письма попадают в спам
- Верифицируйте домен (добавьте SPF, DKIM, DMARC записи)
- Используйте `isTransactional: true` (уже настроено в коде)
- Избегайте спам-слов в теме и теле письма

### Проблема: 429 Too Many Requests
- Вы превысили лимит Elastic Email
- Проверьте тариф в Dashboard
- Добавьте rate limiting в код (например, max 1 письмо на email в минуту)

---

## 📚 Дополнительные ресурсы

- [Elastic Email API v2 Documentation](https://elasticemail.com/developers/api-documentation/rest-api)
- [Elastic Email Pricing](https://elasticemail.com/pricing)
- [Email Best Practices](https://elasticemail.com/resources/email-best-practices)

---

## 🎯 Готово!

Теперь ваше приложение отправляет email через Elastic Email HTTP API v2 без использования SMTP.

Основные преимущества:
- ✅ Простой HTTP API (не нужен nodemailer)
- ✅ Детальная статистика в Dashboard
- ✅ Высокая доставляемость (не блокируется провайдерами)
- ✅ Готово к продакшену
