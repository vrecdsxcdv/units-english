import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Clearing all user-related data...');

  // Delete all pending registrations
  const pendingCount = await prisma.pendingRegistration.deleteMany({});
  console.log(`✓ Deleted ${pendingCount.count} pending registrations`);

  // Delete all email verification codes
  const codesCount = await prisma.emailVerificationCode.deleteMany({});
  console.log(`✓ Deleted ${codesCount.count} email verification codes`);

  // Delete all password reset tokens
  const tokensCount = await prisma.passwordResetToken.deleteMany({});
  console.log(`✓ Deleted ${tokensCount.count} password reset tokens`);

  // Delete user-related data first (to avoid foreign key constraints)
  const assessmentCount = await prisma.assessmentProgress.deleteMany({});
  console.log(`✓ Deleted ${assessmentCount.count} assessment progress records`);

  const placementCount = await prisma.placementAnswer.deleteMany({});
  console.log(`✓ Deleted ${placementCount.count} placement answers`);

  const chatMessagesCount = await prisma.chatMessage.deleteMany({});
  console.log(`✓ Deleted ${chatMessagesCount.count} chat messages`);

  const chatConversationsCount = await prisma.chatConversation.deleteMany({});
  console.log(`✓ Deleted ${chatConversationsCount.count} chat conversations`);

  const topicCompletionsCount = await prisma.topicCompletion.deleteMany({});
  console.log(`✓ Deleted ${topicCompletionsCount.count} topic completions`);

  const lessonProgressCount = await prisma.lessonProgress.deleteMany({});
  console.log(`✓ Deleted ${lessonProgressCount.count} lesson progress records`);

  const accountsCount = await prisma.account.deleteMany({});
  console.log(`✓ Deleted ${accountsCount.count} OAuth accounts`);

  const sessionsCount = await prisma.session.deleteMany({});
  console.log(`✓ Deleted ${sessionsCount.count} sessions`);

  // Now delete all users
  const usersCount = await prisma.user.deleteMany({});
  console.log(`✓ Deleted ${usersCount.count} users`);

  console.log('\n✅ Database cleared successfully!');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
