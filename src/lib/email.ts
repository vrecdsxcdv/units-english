import * as nodemailer from "nodemailer";

// Development mode - log emails to console instead of sending
const DEV_MODE = process.env.NODE_ENV !== 'production';
const DEV_EMAIL_MODE = process.env.DEV_EMAIL_MODE === 'console';

// Create reusable transporter
function getTransporter() {
  // In development with console mode, use fake transporter
  if (DEV_MODE && DEV_EMAIL_MODE) {
    console.log('📧 Email mode: CONSOLE (dev mode - emails will be logged to console)');
    return nodemailer.createTransport({
      streamTransport: true,
      newline: 'unix',
      buffer: true,
    });
  }

  // For production or real email sending, validate credentials
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    throw new Error('EMAIL_USER and EMAIL_PASSWORD must be set in environment variables for real email sending');
  }

  // Configurable SMTP settings
  const host = process.env.SMTP_HOST || 'smtp.yandex.ru';
  const port = parseInt(process.env.SMTP_PORT || '587');
  const secure = port === 465;

  console.log(`📧 Email mode: SMTP (${host}:${port})`);

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    requireTLS: !secure,
    tls: {
      rejectUnauthorized: false,
      minVersion: 'TLSv1'
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 15000,
  });
}

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/verify-email?token=${encodeURIComponent(token)}`;

  // Log in development mode for debugging
  if (DEV_MODE) {
    console.log('\n========================================');
    console.log('📧 VERIFICATION EMAIL');
    console.log('========================================');
    console.log('To:', email);
    console.log('Subject: Confirm your email - Units English');
    console.log('🔗 VERIFICATION LINK:', verificationUrl);
    console.log('⏰ Expires in: 15 minutes');
    console.log('========================================\n');
  }

  // In dev console mode, just log and return (don't actually send)
  if (DEV_MODE && DEV_EMAIL_MODE) {
    console.log('✅ Verification link logged above (console mode)');
    return;
  }

  const mailOptions = {
    from: `"Units English" <${process.env.EMAIL_FROM || process.env.EMAIL_USER || 'noreply@unitsenglish.com'}>`,
    to: email,
    subject: "Confirm your email - Units English",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirm your email</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr>
                  <td style="padding: 40px 40px 20px 40px; text-align: center;">
                    <h1 style="margin: 0; color: #4f46e5; font-size: 28px; font-weight: bold;">
                      Confirm your email
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px 40px;">
                    <p style="margin: 0 0 20px 0; color: #333; font-size: 16px; line-height: 24px;">
                      Thank you for registering! Please confirm your email address by clicking the button below:
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                      <tr>
                        <td align="center">
                          <a href="${verificationUrl}"
                             style="display: inline-block; background-color: #4f46e5; color: #ffffff; text-decoration: none; padding: 14px 40px; border-radius: 6px; font-size: 16px; font-weight: bold;">
                            Confirm Email
                          </a>
                        </td>
                      </tr>
                    </table>
                    <p style="margin: 20px 0; color: #666; font-size: 14px; line-height: 20px;">
                      Or copy and paste this link into your browser:
                    </p>
                    <p style="margin: 0 0 20px 0; color: #4f46e5; font-size: 14px; word-break: break-all;">
                      ${verificationUrl}
                    </p>
                    <p style="margin: 20px 0 0 0; color: #999; font-size: 13px; line-height: 18px;">
                      This link will expire in 15 minutes. If you didn't register, please ignore this email.
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
    `,
    text: `
Confirm your email

Thank you for registering! Please confirm your email address by clicking the link below:

${verificationUrl}

This link will expire in 15 minutes. If you didn't register, please ignore this email.

© ${new Date().getFullYear()} Units English. All rights reserved.
    `.trim(),
  };

  const transporter = getTransporter();

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Verification email sent successfully!', info.messageId);
  } catch (error) {
    console.error('❌ Failed to send verification email:', error);
    throw error;
  }
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;

  // Log in development mode for debugging
  if (DEV_MODE) {
    console.log('\n========================================');
    console.log('🔐 PASSWORD RESET EMAIL');
    console.log('========================================');
    console.log('To:', email);
    console.log('Subject: Восстановление пароля - Units English');
    console.log('🔗 RESET LINK:', resetUrl);
    console.log('⏰ Expires in: 1 hour');
    console.log('========================================\n');
  }

  // In dev console mode, just log and return (don't actually send)
  if (DEV_MODE && DEV_EMAIL_MODE) {
    console.log('✅ Verification code logged above (console mode)');
    return;
  }

  const mailOptions = {
    from: `"Units English" <${process.env.EMAIL_USER || 'noreply@unitsenglish.com'}>`,
    to: email,
    subject: "Восстановление пароля - Units English",
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
  };

  const transporter = getTransporter();

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Password reset email sent successfully!', info.messageId);
  } catch (error) {
    console.error('❌ Failed to send password reset email:', error);
    throw error;
  }
}
