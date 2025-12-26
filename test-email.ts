import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

async function testConfig(port: number, secure: boolean) {
  console.log(`\nTesting port ${port} (secure: ${secure})...`);

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;

  if (!user || !pass) {
    console.error('  ✗ EMAIL_USER or EMAIL_PASSWORD not set');
    return false;
  }

  // Get SMTP host from env or default
  const host = process.env.SMTP_HOST || 'smtp.unisender.com';

  const config: any = {
    host,
    port,
    secure,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
    logger: true, // Enable logging
    debug: true,  // Enable debug output
  };

  // For port 587, add STARTTLS settings
  if (port === 587) {
    config.requireTLS = true;
    config.tls = {
      rejectUnauthorized: false, // For debugging
      minVersion: 'TLSv1'
    };
  }

  const transporter = nodemailer.createTransport(config);

  try {
    console.log('  Verifying SMTP connection...');
    await Promise.race([
      transporter.verify(),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Connection timeout')), 5000)
      )
    ]);
    console.log('  ✓ SMTP connection verified!');

    console.log('  Sending test email...');
    const info = await transporter.sendMail({
      from: `"Units English Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Test Email from Units English",
      text: "This is a test email to verify Yandex SMTP configuration.",
      html: "<b>This is a test email to verify Yandex SMTP configuration.</b>",
    });

    console.log('  ✓ Email sent successfully!');
    console.log('  Message ID:', info.messageId);
    return true;
  } catch (error: any) {
    console.error('  ✗ Error:', error.message || error);
    return false;
  }
}

async function testEmail() {
  const host = process.env.SMTP_HOST || 'smtp.unisender.com';
  console.log(`Testing ${host} email configuration...\n`);
  console.log('SMTP_HOST:', host);
  console.log('EMAIL_USER:', process.env.EMAIL_USER || 'NOT SET');
  console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '***SET***' : 'NOT SET');

  // Test different configurations - try 587 first since it's accessible
  const configs = [
    { port: 587, secure: false, name: 'TLS (587) - STARTTLS' },
    { port: 465, secure: true, name: 'SSL (465)' },
  ];

  for (const config of configs) {
    console.log(`\n[${config.name}]`);
    const success = await testConfig(config.port, config.secure);
    if (success) {
      console.log(`\n✅ SUCCESS! Use port ${config.port} with secure=${config.secure}`);
      process.exit(0);
    }
  }

  console.log('\n❌ All configurations failed.');
  process.exit(1);
}

testEmail();
