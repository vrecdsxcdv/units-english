import { Resend } from 'resend';

// Lazy initialization to avoid build-time errors
let resend: Resend | null = null;

function getResendClient(): Resend {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export async function sendVerificationEmail(email: string, code: string) {
  // Используем верифицированный домен из env или дефолтный Resend домен
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Units English <onboarding@resend.dev>';
  const isDev = process.env.NODE_ENV !== 'production';
  const hasVerifiedDomain = !!process.env.RESEND_FROM_EMAIL;

  // В режиме разработки без верифицированного домена - показываем в консоли для не-owner emails
  const isOwnerEmail = email === 'lifematvej9@gmail.com';
  if (isDev && !hasVerifiedDomain && !isOwnerEmail) {
    console.log('\n========================================');
    console.log('📧 VERIFICATION EMAIL (DEV MODE)');
    console.log('========================================');
    console.log('To:', email);
    console.log('Subject: Подтвердите ваш email - Units English');
    console.log('🔢 VERIFICATION CODE:', code);
    console.log('⏰ Expires in: 15 minutes');
    console.log('========================================\n');
    console.log('✅ Verification code logged above (dev mode - Resend free tier limits)');
    console.log('💡 Tip: Verify your domain at resend.com/domains to send to all emails');
    return { success: true, mode: 'console' };
  }

  try {
    const { data, error } = await getResendClient().emails.send({
      from: fromEmail,
      to: [email],
      subject: 'Подтвердите ваш email - Units English',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 0;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <tr>
                      <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                        <h1 style="margin: 0; color: white; font-size: 28px; font-weight: 600;">Units English</h1>
                        <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">Подтверждение регистрации</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 40px 30px;">
                        <h2 style="margin: 0 0 20px 0; color: #1a202c; font-size: 24px; font-weight: 600;">Добро пожаловать!</h2>
                        <p style="margin: 0 0 20px 0; color: #4a5568; font-size: 16px; line-height: 1.6;">
                          Спасибо за регистрацию на платформе Units English. Для завершения регистрации введите код подтверждения:
                        </p>
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                          <tr>
                            <td align="center">
                              <div style="display: inline-block; padding: 24px 48px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);">
                                <div style="color: rgba(255, 255, 255, 0.8); font-size: 13px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px;">Код подтверждения</div>
                                <div style="color: white; font-size: 42px; font-weight: 700; letter-spacing: 8px; font-family: 'Courier New', monospace;">${code}</div>
                              </div>
                            </td>
                          </tr>
                        </table>
                        <p style="margin: 30px 0 0 0; color: #a0aec0; font-size: 13px; line-height: 1.6; text-align: center;">
                          ⏰ Код действителен в течение 15 минут
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="background-color: #f7fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                        <p style="margin: 0 0 10px 0; color: #718096; font-size: 14px;">
                          Если вы не регистрировались на Units English, просто проигнорируйте это письмо.
                        </p>
                        <p style="margin: 0; color: #a0aec0; font-size: 12px;">
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
      `,
    });

    if (error) {
      console.error('❌ Resend error:', error);
      throw error;
    }

    console.log('✅ Verification email sent successfully via Resend:', data);
    return data;
  } catch (error) {
    console.error('❌ Failed to send verification email:', error);
    throw error;
  }
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/reset-password?token=${encodeURIComponent(token)}`;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Units English <onboarding@resend.dev>';

  try {
    const { data, error } = await getResendClient().emails.send({
      from: fromEmail,
      to: [email],
      subject: 'Восстановление пароля - Units English',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #4f46e5;">Восстановление пароля</h2>
          <p>Вы запросили восстановление пароля для вашего аккаунта Units English.</p>
          <p>Нажмите на кнопку ниже, чтобы создать новый пароль:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}"
               style="background-color: #4f46e5; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Восстановить пароль
            </a>
          </div>
          <p style="color: #666; font-size: 14px;">
            Если вы не запрашивали восстановление пароля, просто проигнорируйте это письмо.
          </p>
          <p style="color: #666; font-size: 14px;">
            Ссылка действительна в течение 1 часа.
          </p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #999; font-size: 12px;">
            © 2025 Units English. Все права защищены.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('❌ Resend error:', error);
      throw error;
    }

    console.log('✅ Password reset email sent via Resend!', data?.id);
    return data;
  } catch (error) {
    console.error('❌ Failed to send password reset email via Resend:', error);
    throw error;
  }
}
