/**
 * Elastic Email HTTP API v2 Integration
 *
 * Отправка email через Elastic Email HTTP API (НЕ SMTP)
 * Документация: https://elasticemail.com/developers/api-documentation/rest-api
 */

interface ElasticEmailResponse {
  success: boolean;
  data?: {
    transactionid: string;
    messageid: string;
  };
  error?: string;
}

/**
 * Отправляет письмо подтверждения email через Elastic Email HTTP API v2
 *
 * @param email - Email получателя
 * @param token - Токен верификации (генерируется на сервере, хранится в БД)
 * @throws Error если отправка не удалась
 *
 * Требуемые переменные окружения:
 * - ELASTIC_EMAIL_API_KEY - API ключ из Elastic Email (Settings -> API -> Create API Key)
 * - ELASTIC_EMAIL_FROM - Email отправителя (должен быть верифицирован в Elastic Email)
 * - NEXTAUTH_URL - Базовый URL приложения (например: https://unitsenglish.com)
 */
export async function sendVerificationEmail(email: string, code: string): Promise<void> {
  // Валидация переменных окружения
  const apiKey = process.env.ELASTIC_EMAIL_API_KEY;
  const fromEmail = process.env.ELASTIC_EMAIL_FROM || 'no-reply@mydomain.com';

  if (!apiKey) {
    throw new Error('ELASTIC_EMAIL_API_KEY is not configured in environment variables');
  }

  // HTML шаблон письма с 6-значным кодом
  const htmlBody = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Код подтверждения</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px 40px; text-align: center;">
              <h1 style="margin: 0; color: #4f46e5; font-size: 28px; font-weight: bold;">
                Подтвердите email
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 20px 40px;">
              <p style="margin: 0 0 20px 0; color: #333; font-size: 16px; line-height: 24px;">
                Спасибо за регистрацию! Введите этот код для подтверждения:
              </p>

              <!-- Code -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <div style="display: inline-block; background-color: #f3f4f6; padding: 20px 40px; border-radius: 8px; font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #4f46e5;">
                      ${code}
                    </div>
                  </td>
                </tr>
              </table>

              <p style="margin: 20px 0 0 0; color: #999; font-size: 13px; line-height: 18px;">
                Код действителен 15 минут. Если вы не регистрировались, проигнорируйте это письмо.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px 40px 40px; border-top: 1px solid #eeeeee;">
              <p style="margin: 0; color: #999; font-size: 12px; text-align: center;">
                © ${new Date().getFullYear()} Units English. Все права защищены.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  // Plain text версия
  const textBody = `
Подтвердите email

Спасибо за регистрацию! Ваш код подтверждения:

${code}

Код действителен 15 минут. Если вы не регистрировались, проигнорируйте это письмо.

© ${new Date().getFullYear()} Units English. Все права защищены.
  `.trim();

  // Подготовка данных для Elastic Email API v2
  const formData = new URLSearchParams();
  formData.append('apikey', apiKey);
  formData.append('from', fromEmail);
  formData.append('fromName', 'Units English');
  formData.append('to', email);
  formData.append('subject', 'Код подтверждения - Units English');
  formData.append('bodyHtml', htmlBody);
  formData.append('bodyText', textBody);
  formData.append('isTransactional', 'true'); // Транзакционное письмо (не маркетинг)

  console.log(`📧 Sending verification email to ${email} via Elastic Email HTTP API...`);

  try {
    // HTTP запрос к Elastic Email API v2
    const response = await fetch('https://api.elasticemail.com/v2/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    // Получение ответа
    const responseText = await response.text();

    // Логирование полного ответа для отладки
    console.log('Elastic Email API Response:', {
      status: response.status,
      statusText: response.statusText,
      body: responseText,
    });

    // Проверка успешности запроса
    if (!response.ok) {
      throw new Error(
        `Elastic Email API error: ${response.status} ${response.statusText}. Response: ${responseText}`
      );
    }

    // Парсинг JSON ответа
    let result: ElasticEmailResponse;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      throw new Error(`Failed to parse Elastic Email response: ${responseText}`);
    }

    // Проверка успешности на уровне API
    if (!result.success) {
      throw new Error(
        `Elastic Email API returned success: false. Error: ${result.error || 'Unknown error'}`
      );
    }

    console.log('✅ Verification email sent successfully!', {
      transactionId: result.data?.transactionid,
      messageId: result.data?.messageid,
    });

  } catch (error) {
    // Детальное логирование ошибки
    console.error('❌ Failed to send verification email via Elastic Email:', {
      error: error instanceof Error ? error.message : String(error),
      email,
      stack: error instanceof Error ? error.stack : undefined,
    });

    // Пробрасываем ошибку дальше для обработки в вызывающем коде
    throw error;
  }
}

/**
 * Отправляет письмо для сброса пароля через Elastic Email HTTP API v2
 *
 * @param email - Email получателя
 * @param token - Токен сброса пароля
 */
export async function sendPasswordResetEmail(email: string, token: string): Promise<void> {
  const apiKey = process.env.ELASTIC_EMAIL_API_KEY;
  const fromEmail = process.env.ELASTIC_EMAIL_FROM || 'no-reply@mydomain.com';
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';

  if (!apiKey) {
    throw new Error('ELASTIC_EMAIL_API_KEY is not configured in environment variables');
  }

  const resetUrl = `${baseUrl}/reset-password?token=${encodeURIComponent(token)}`;

  const htmlBody = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset your password</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <tr>
            <td style="padding: 40px 40px 20px 40px; text-align: center;">
              <h1 style="margin: 0; color: #4f46e5; font-size: 28px; font-weight: bold;">
                Reset your password
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding: 20px 40px;">
              <p style="margin: 0 0 20px 0; color: #333; font-size: 16px; line-height: 24px;">
                You requested a password reset. Click the button below to create a new password:
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="${resetUrl}"
                       style="display: inline-block; background-color: #4f46e5; color: #ffffff; text-decoration: none; padding: 14px 40px; border-radius: 6px; font-size: 16px; font-weight: bold;">
                      Reset Password
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 20px 0 0 0; color: #999; font-size: 13px; line-height: 18px;">
                This link will expire in 1 hour. If you didn't request this, please ignore this email.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 20px 40px 40px 40px; border-top: 1px solid #eeeeee;">
              <p style="margin: 0; color: #999; font-size: 12px; text-align: center;">
                © ${new Date().getFullYear()} Units English. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const textBody = `
Reset your password

You requested a password reset. Click the link below to create a new password:

${resetUrl}

This link will expire in 1 hour. If you didn't request this, please ignore this email.

© ${new Date().getFullYear()} Units English. All rights reserved.
  `.trim();

  const formData = new URLSearchParams();
  formData.append('apikey', apiKey);
  formData.append('from', fromEmail);
  formData.append('fromName', 'Units English');
  formData.append('to', email);
  formData.append('subject', 'Reset your password');
  formData.append('bodyHtml', htmlBody);
  formData.append('bodyText', textBody);
  formData.append('isTransactional', 'true');

  console.log(`🔐 Sending password reset email to ${email} via Elastic Email HTTP API...`);

  try {
    const response = await fetch('https://api.elasticemail.com/v2/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const responseText = await response.text();

    console.log('Elastic Email API Response:', {
      status: response.status,
      statusText: response.statusText,
      body: responseText,
    });

    if (!response.ok) {
      throw new Error(
        `Elastic Email API error: ${response.status} ${response.statusText}. Response: ${responseText}`
      );
    }

    let result: ElasticEmailResponse;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      throw new Error(`Failed to parse Elastic Email response: ${responseText}`);
    }

    if (!result.success) {
      throw new Error(
        `Elastic Email API returned success: false. Error: ${result.error || 'Unknown error'}`
      );
    }

    console.log('✅ Password reset email sent successfully!', {
      transactionId: result.data?.transactionid,
      messageId: result.data?.messageid,
    });

  } catch (error) {
    console.error('❌ Failed to send password reset email via Elastic Email:', {
      error: error instanceof Error ? error.message : String(error),
      email,
      stack: error instanceof Error ? error.stack : undefined,
    });

    throw error;
  }
}
