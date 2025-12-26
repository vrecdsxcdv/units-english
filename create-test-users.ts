import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Creating 10 test users...\n');

  const testUsers = [
    { name: 'Alice Johnson', email: 'alice@test.com', level: 'a1' },
    { name: 'Bob Smith', email: 'bob@test.com', level: 'a1' },
    { name: 'Charlie Brown', email: 'charlie@test.com', level: 'b1' },
    { name: 'Diana Prince', email: 'diana@test.com', level: 'b1' },
    { name: 'Ethan Hunt', email: 'ethan@test.com', level: 'b2' },
    { name: 'Fiona Green', email: 'fiona@test.com', level: 'a1' },
    { name: 'George Wilson', email: 'george@test.com', level: 'b1' },
    { name: 'Hannah White', email: 'hannah@test.com', level: 'b2' },
    { name: 'Ivan Petrov', email: 'ivan@test.com', level: 'a1' },
    { name: 'Julia Roberts', email: 'julia@test.com', level: 'b1' },
  ];

  const password = await bcrypt.hash('password123', 10);

  for (let i = 0; i < testUsers.length; i++) {
    const userData = testUsers[i];

    try {
      // Create user
      const user = await prisma.user.create({
        data: {
          name: userData.name,
          email: userData.email,
          password: password,
          emailVerified: new Date(),
          streak: Math.floor(Math.random() * 30), // Random streak 0-30
          lastActiveDate: new Date().toISOString().split('T')[0],
        },
      });

      // Create assessment progress
      await prisma.assessmentProgress.create({
        data: {
          userId: user.id,
          level: userData.level,
          score: Math.floor(Math.random() * 20) + 1, // Random score 1-20
          completedAt: new Date(),
        },
      });

      // Create lesson progress with random completed topics
      const levels = ['a1', 'b1', 'b2'];
      for (const level of levels) {
        const topicsCount = Math.floor(Math.random() * 10); // 0-10 completed topics
        const completedTopics = Array.from({ length: topicsCount }, (_, idx) => `topic-${idx + 1}`);

        await prisma.lessonProgress.create({
          data: {
            userId: user.id,
            level: level,
            completedTopics: completedTopics,
            streak: Math.floor(Math.random() * 15),
            lastStudyDate: new Date(),
          },
        });
      }

      console.log(`✓ Created user ${i + 1}/10: ${userData.name} (${userData.email})`);
    } catch (error) {
      console.error(`✗ Failed to create user ${userData.email}:`, error);
    }
  }

  console.log('\n✅ Test users created successfully!');
  console.log('\nCredentials:');
  console.log('Email: any of the above emails');
  console.log('Password: password123');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
