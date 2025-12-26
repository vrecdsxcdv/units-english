/**
 * Тестовый скрипт для проверки отправки email через Elastic Email HTTP API
 *
 * Использование:
 * 1. Убедитесь, что в .env.local настроены переменные:
 *    - ELASTIC_EMAIL_API_KEY
 *    - ELASTIC_EMAIL_FROM
 *    - NEXTAUTH_URL
 *
 * 2. Запустите:
 *    npx tsx test-elastic-verification.ts
 *
 * 3. Проверьте свою почту
 */

// Load environment variables from .env.local
import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(process.cwd(), '.env.local') });

import { sendVerificationEmail } from './src/lib/email-elastic';
import crypto from 'crypto';

// ⚠️ ЗАМЕНИТЕ НА ВАШИ ДАННЫЕ ДЛЯ ТЕСТИРОВАНИЯ
const TEST_EMAIL = 'lifematvej9@gmail.com'; // Ваш email для получения письма
const TEST_TOKEN = crypto.randomBytes(32).toString('hex'); // Генерируем тестовый токен

console.log('\n========================================');
console.log('🧪 ТЕСТ: Elastic Email HTTP API');
console.log('========================================\n');

console.log('📧 Получатель:', TEST_EMAIL);
console.log('🔑 Тестовый токен:', TEST_TOKEN);
console.log('🔗 Ссылка верификации будет:', `${process.env.NEXTAUTH_URL}/verify-email?token=${TEST_TOKEN}`);
console.log('\n⏳ Отправка письма...\n');

sendVerificationEmail(TEST_EMAIL, TEST_TOKEN)
  .then(() => {
    console.log('\n========================================');
    console.log('✅ ТЕСТ ПРОЙДЕН: Email успешно отправлен!');
    console.log('========================================\n');
    console.log('Что дальше:');
    console.log('1. Проверьте почту на ' + TEST_EMAIL);
    console.log('2. Если письмо не пришло, проверьте папку "Спам"');
    console.log('3. Проверьте логи выше на наличие ошибок\n');
  })
  .catch((error) => {
    console.error('\n========================================');
    console.error('❌ ТЕСТ НЕ ПРОЙДЕН: Ошибка отправки email');
    console.error('========================================\n');
    console.error('Детали ошибки:', error);
    console.error('\nВозможные причины:');
    console.error('1. Неверный ELASTIC_EMAIL_API_KEY в .env.local');
    console.error('2. Email отправителя не верифицирован в Elastic Email');
    console.error('3. Проблемы с интернет-соединением');
    console.error('4. NEXTAUTH_URL не настроен в .env.local\n');
    process.exit(1);
  });
