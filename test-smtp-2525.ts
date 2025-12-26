import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config({ path: '.env.local' });

async function test() {
  console.log('Testing ElasticEmail on port 2525...\n');
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    requireTLS: true,
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    console.log('Verifying...');
    await transporter.verify();
    console.log('✅ Connection verified!');
    
    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Test from Units English',
      text: 'Test email',
      html: '<b>Test email</b>',
    });
    
    console.log('✅ Email sent!', info.messageId);
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

test();
