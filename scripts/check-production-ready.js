#!/usr/bin/env node

/**
 * Production Readiness Checker
 * Checks if the project is ready for production deployment
 */

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

const checks = {
  passed: [],
  failed: [],
  warnings: []
};

function pass(message) {
  checks.passed.push(message);
  console.log('✅', message);
}

function fail(message) {
  checks.failed.push(message);
  console.log('❌', message);
}

function warn(message) {
  checks.warnings.push(message);
  console.log('⚠️ ', message);
}

async function checkEnvironmentVariables() {
  console.log('\n📋 Checking Environment Variables...\n');

  const required = ['DATABASE_URL', 'NEXTAUTH_SECRET', 'NEXTAUTH_URL', 'OPENAI_API_KEY'];

  for (const key of required) {
    if (process.env[key]) {
      pass(`${key} is set`);
    } else {
      fail(`${key} is missing`);
    }
  }

  // Check if DATABASE_URL is PostgreSQL
  if (process.env.DATABASE_URL) {
    if (process.env.DATABASE_URL.includes('postgresql://')) {
      pass('Using PostgreSQL database');
    } else {
      fail('Not using PostgreSQL - SQLite is not suitable for production');
    }
  }

  // Check NEXTAUTH_URL
  if (process.env.NEXTAUTH_URL) {
    if (process.env.NEXTAUTH_URL.includes('localhost')) {
      warn('NEXTAUTH_URL is set to localhost - update for production');
    }
  }
}

async function checkDatabaseConnection() {
  console.log('\n🗄️  Checking Database Connection...\n');

  try {
    await prisma.$connect();
    pass('Database connection successful');

    // Check if tables exist
    const userCount = await prisma.user.count();
    pass(`User table accessible (${userCount} users)`);

    const reviewCount = await prisma.review.count();
    pass(`Review table accessible (${reviewCount} reviews)`);

    await prisma.$disconnect();
  } catch (error) {
    fail(`Database connection failed: ${error.message}`);
  }
}

async function checkFiles() {
  console.log('\n📁 Checking Project Files...\n');

  const requiredFiles = [
    'package.json',
    'prisma/schema.prisma',
    '.gitignore'
  ];

  for (const file of requiredFiles) {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      pass(`${file} exists`);
    } else {
      fail(`${file} is missing`);
    }
  }

  // Check for next config (either .js or .ts)
  const hasNextConfig = fs.existsSync(path.join(process.cwd(), 'next.config.js')) ||
                        fs.existsSync(path.join(process.cwd(), 'next.config.ts')) ||
                        fs.existsSync(path.join(process.cwd(), 'next.config.mjs'));
  if (hasNextConfig) {
    pass('next.config exists');
  } else {
    fail('next.config file is missing');
  }

  // Check if .env is in .gitignore
  const gitignorePath = path.join(process.cwd(), '.gitignore');
  if (fs.existsSync(gitignorePath)) {
    const gitignore = fs.readFileSync(gitignorePath, 'utf-8');
    if (gitignore.includes('.env')) {
      pass('.env is in .gitignore');
    } else {
      fail('.env is not in .gitignore - security risk!');
    }
  }
}

async function checkDependencies() {
  console.log('\n📦 Checking Dependencies...\n');

  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

  const requiredDeps = {
    '@prisma/client': 'Database ORM',
    'next': 'Framework',
    'next-auth': 'Authentication',
    'react': 'UI Library'
  };

  for (const [dep, description] of Object.entries(requiredDeps)) {
    if (packageJson.dependencies[dep] || packageJson.devDependencies[dep]) {
      pass(`${dep} installed (${description})`);
    } else {
      fail(`${dep} is missing (${description})`);
    }
  }
}

async function checkSecurity() {
  console.log('\n🔒 Security Checks...\n');

  // Check if using HTTPS for production URLs
  if (process.env.NEXTAUTH_URL && !process.env.NEXTAUTH_URL.includes('localhost')) {
    if (process.env.NEXTAUTH_URL.startsWith('https://')) {
      pass('NEXTAUTH_URL uses HTTPS');
    } else {
      fail('NEXTAUTH_URL should use HTTPS in production');
    }
  }

  // Check NEXTAUTH_SECRET strength
  if (process.env.NEXTAUTH_SECRET) {
    if (process.env.NEXTAUTH_SECRET.length >= 32) {
      pass('NEXTAUTH_SECRET is strong enough');
    } else {
      fail('NEXTAUTH_SECRET is too short (should be at least 32 characters)');
    }
  }

  // Check for exposed secrets in code
  warn('Remember to review code for any hardcoded secrets or API keys');
}

async function printSummary() {
  console.log('\n' + '='.repeat(60));
  console.log('📊 PRODUCTION READINESS SUMMARY');
  console.log('='.repeat(60) + '\n');

  console.log(`✅ Passed: ${checks.passed.length}`);
  console.log(`❌ Failed: ${checks.failed.length}`);
  console.log(`⚠️  Warnings: ${checks.warnings.length}\n`);

  if (checks.failed.length === 0 && checks.warnings.length === 0) {
    console.log('🎉 Your project is ready for production deployment!\n');
    process.exit(0);
  } else if (checks.failed.length === 0) {
    console.log('✅ Your project is ready for production deployment!');
    console.log('⚠️  Please review the warnings above.\n');
    process.exit(0);
  } else {
    console.log('❌ Your project is NOT ready for production deployment.');
    console.log('Please fix the failed checks above.\n');
    process.exit(1);
  }
}

async function main() {
  console.log('🚀 Production Readiness Check\n');
  console.log('Checking if your project is ready for deployment...\n');

  try {
    await checkEnvironmentVariables();
    await checkDatabaseConnection();
    await checkFiles();
    await checkDependencies();
    await checkSecurity();
    await printSummary();
  } catch (error) {
    console.error('\n❌ Fatal error during checks:', error.message);
    process.exit(1);
  }
}

main();
