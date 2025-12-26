# Deployment Guide

## ✅ PostgreSQL Migration Complete

The project has been successfully migrated from SQLite to PostgreSQL (Neon).

## Database Setup

### Current Configuration
- **Provider**: PostgreSQL (Neon)
- **Connection**: Pooled connection for serverless environments
- **Database URL**: Set in `.env` file

### Environment Variables Required

```env
# Database - Neon PostgreSQL
DATABASE_URL="postgresql://user:password@host.neon.tech/dbname?sslmode=require"
DIRECT_URL="postgresql://user:password@host.neon.tech/dbname?sslmode=require"

# NextAuth
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="https://yourdomain.com"

# OpenAI
OPENAI_API_KEY="your-openai-key"
```

## Deployment Platforms

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   vercel login
   vercel link
   ```

2. **Set Environment Variables**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add all variables from `.env` file
   - Make sure to use production URLs for `NEXTAUTH_URL`

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Database Migrations

For production database:
```bash
# Push schema changes
npx prisma db push

# Or create migration files
npx prisma migrate dev --name your_migration_name
npx prisma migrate deploy
```

## Pre-Deployment Checklist

- [x] ✅ Migrated to PostgreSQL
- [x] ✅ Database schema deployed
- [x] ✅ Connection tested
- [ ] Set production environment variables
- [ ] Update NEXTAUTH_URL to production domain
- [ ] Test all API routes
- [ ] Set up admin user
- [ ] Add monitoring/error tracking (e.g., Sentry)
- [ ] Set up backups for Neon database
- [ ] Configure CORS if needed
- [ ] Add rate limiting for API routes
- [ ] Set up CDN for static assets

## Security Notes

1. **Never commit `.env` file** - it's in `.gitignore`
2. **Rotate secrets** before production deployment
3. **Use separate databases** for dev/staging/production
4. **Enable SSL** for database connections (already enabled)
5. **Set up database backups** on Neon dashboard

## Monitoring

### Neon Dashboard
- Monitor connection pooling
- Check query performance
- Set up alerts for high usage

### Vercel Dashboard
- Monitor function execution time
- Check error logs
- Set up Vercel Analytics

## Backup Strategy

1. **Neon Automatic Backups**: Enabled by default
2. **Manual Backup Command**:
   ```bash
   npx prisma db pull
   # Creates a backup of schema
   ```

## Rollback Plan

If issues occur after deployment:
1. Revert to previous Vercel deployment
2. Check Neon query logs
3. Restore from backup if needed

## Performance Optimization

- Connection pooling is already configured
- Consider adding Redis for caching
- Use Vercel Edge Functions for static content
- Enable Prisma query caching in production

## Support

- Neon Documentation: https://neon.tech/docs
- Vercel Documentation: https://vercel.com/docs
- Prisma Documentation: https://www.prisma.io/docs
