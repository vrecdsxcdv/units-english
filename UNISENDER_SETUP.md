# Настройка UniSender для отправки email

## Регистрация в UniSender

1. Перейдите на https://www.unisender.com/ru/
2. Нажмите "Регистрация" / "Попробовать бесплатно"
3. Заполните форму регистрации (email, пароль)
4. Подтвердите email

## Получение SMTP доступа

После регистрации:

1. Войдите в личный кабинет: https://cp.unisender.com
2. Перейдите в раздел "Настройки" → "SMTP"
3. Включите SMTP доступ
4. Получите данные:
   - **SMTP сервер**: `smtp.unisender.com`
   - **Порт**: 587 (STARTTLS) или 465 (SSL)
   - **Логин**: ваш email от UniSender
   - **Пароль**: пароль от аккаунта UniSender

## Настройка в проекте

Обновите `.env.local`:

```bash
# UniSender SMTP Configuration
SMTP_HOST=smtp.unisender.com
SMTP_PORT=587
EMAIL_USER=ваш-email@example.com
EMAIL_PASSWORD=ваш-пароль
```

## Тестирование

После настройки запустите:

```bash
npx tsx test-email.ts
```

## Бесплатный тариф

UniSender предоставляет бесплатно:
- До 1500 писем в месяц
- Полный функционал
- Техническая поддержка

## Альтернатива: Resend (еще проще!)

Если хотите максимально простую настройку:

1. Регистрация: https://resend.com
2. Получите API ключ (бесплатно 3000 писем/месяц)
3. Всего 3 строки кода!

```bash
RESEND_API_KEY=re_xxxxx
```

Resend работает через HTTPS API (не SMTP), поэтому никогда не блокируется.
