# Настройка отправки email через Yandex SMTP

## Проблема
Yandex SMTP не принимает обычный пароль от аккаунта. Нужен специальный **пароль приложения**.

## Решение: Создайте пароль приложения

### Шаг 1: Включите двухфакторную аутентификацию
1. Перейдите на https://id.yandex.ru/security
2. Включите двухфакторную аутентификацию (если еще не включена)

### Шаг 2: Создайте пароль приложения
1. Перейдите на https://id.yandex.ru/security/app-passwords
2. Нажмите "Создать пароль приложения"
3. Выберите "Почта" в качестве типа приложения
4. Скопируйте сгенерированный пароль (он выглядит примерно так: `abcd efgh ijkl mnop`)

### Шаг 3: Обновите .env.local
```bash
EMAIL_USER=ragulin.matveika@yandex.ru
EMAIL_PASSWORD=abcdefghijklmnop  # Пароль приложения БЕЗ пробелов
```

### Шаг 4: Проверьте настройку
```bash
npx tsx test-email.ts
```

## Рабочие настройки для Yandex SMTP

```javascript
{
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD  // Пароль приложения!
  }
}
```

## Альтернатива: Gmail SMTP

Если не хотите возиться с Yandex, можно использовать Gmail:

1. Включите двухфакторную аутентификацию в Google
2. Создайте пароль приложения: https://myaccount.google.com/apppasswords
3. Обновите настройки:
   ```bash
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```
4. В коде измените:
   ```javascript
   host: "smtp.gmail.com",
   port: 587,
   secure: false,
   ```

## Альтернатива: Resend (самое простое)

Используйте современный сервис Resend:

1. Зарегистрируйтесь на https://resend.com (бесплатно 100 писем/день)
2. Получите API ключ
3. Добавьте в .env.local:
   ```bash
   RESEND_API_KEY=re_xxx
   ```
4. Код становится проще - всего 3 строки!
