import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import { randomUUID } from 'crypto';
import { config } from 'dotenv';
import rateLimit from 'express-rate-limit';

config();

const app = express();
const PORT = process.env.PORT || 3001;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

// Security check: ensure admin token is set
if (!ADMIN_TOKEN) {
  console.error('ERROR: ADMIN_TOKEN environment variable is not set!');
  console.error('Please set ADMIN_TOKEN in your .env file for security.');
  process.exit(1);
}

// Initialize SQLite database
const db = new Database('reviews.db');

// Create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS reviews (
    reviewId TEXT PRIMARY KEY,
    id TEXT NOT NULL,
    text TEXT NOT NULL,
    isTrue INTEGER NOT NULL DEFAULT 0,
    createdAt INTEGER NOT NULL
  )
`);

// Middleware - CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : true; // true allows all origins in development

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());

// Rate limiting for review submissions
const reviewRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: { error: 'Too many reviews submitted. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Helper function to sanitize text input (prevent XSS)
const sanitizeText = (text) => {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

// Auth middleware for admin routes
const requireAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  if (token !== ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden: Invalid token' });
  }

  next();
};

// ==================== PUBLIC ENDPOINTS ====================

// GET /reviews/approved - Get all approved reviews
app.get('/reviews/approved', (req, res) => {
  try {
    const reviews = db.prepare(`
      SELECT id, text, isTrue
      FROM reviews
      WHERE isTrue = 1
      ORDER BY createdAt DESC
    `).all();

    // Convert isTrue from 0/1 to boolean
    const formatted = reviews.map(r => ({
      id: r.id,
      text: r.text,
      isTrue: r.isTrue === 1
    }));

    res.json(formatted);
  } catch (error) {
    console.error('Error fetching approved reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /reviews - Create a new review (always isTrue=false) with rate limiting
app.post('/reviews', reviewRateLimiter, (req, res) => {
  try {
    const { id, text } = req.body;

    // Validation
    if (!id || typeof id !== 'string' || id.length < 2 || id.length > 40) {
      return res.status(400).json({ error: 'Invalid id: must be 2-40 characters' });
    }

    if (!text || typeof text !== 'string' || text.length < 10 || text.length > 500) {
      return res.status(400).json({ error: 'Invalid text: must be 10-500 characters' });
    }

    // Sanitize inputs to prevent XSS
    const sanitizedId = sanitizeText(id);
    const sanitizedText = sanitizeText(text);

    const reviewId = randomUUID();
    const createdAt = Date.now();

    db.prepare(`
      INSERT INTO reviews (reviewId, id, text, isTrue, createdAt)
      VALUES (?, ?, ?, 0, ?)
    `).run(reviewId, sanitizedId, sanitizedText, createdAt);

    res.status(201).json({
      reviewId,
      id: sanitizedId,
      text: sanitizedText,
      isTrue: false,
      message: 'Review submitted for moderation'
    });
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ==================== ADMIN ENDPOINTS ====================

// GET /admin/reviews - Get all reviews (admin only) with pagination
app.get('/admin/reviews', requireAdmin, (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const offset = (page - 1) * limit;

    // Get total count
    const totalCount = db.prepare('SELECT COUNT(*) as count FROM reviews').get();

    // Get paginated reviews
    const reviews = db.prepare(`
      SELECT reviewId, id, text, isTrue, createdAt
      FROM reviews
      ORDER BY createdAt DESC
      LIMIT ? OFFSET ?
    `).all(limit, offset);

    const formatted = reviews.map(r => ({
      reviewId: r.reviewId,
      id: r.id,
      text: r.text,
      isTrue: r.isTrue === 1,
      createdAt: r.createdAt
    }));

    res.json({
      reviews: formatted,
      pagination: {
        page,
        limit,
        total: totalCount.count,
        totalPages: Math.ceil(totalCount.count / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching all reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PATCH /admin/reviews/:reviewId/approve - Approve a review
app.patch('/admin/reviews/:reviewId/approve', requireAdmin, (req, res) => {
  try {
    const { reviewId } = req.params;

    const result = db.prepare(`
      UPDATE reviews SET isTrue = 1 WHERE reviewId = ?
    `).run(reviewId);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json({ message: 'Review approved', reviewId });
  } catch (error) {
    console.error('Error approving review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PATCH /admin/reviews/:reviewId/reject - Reject a review (set isTrue=false)
app.patch('/admin/reviews/:reviewId/reject', requireAdmin, (req, res) => {
  try {
    const { reviewId } = req.params;

    const result = db.prepare(`
      UPDATE reviews SET isTrue = 0 WHERE reviewId = ?
    `).run(reviewId);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json({ message: 'Review rejected', reviewId });
  } catch (error) {
    console.error('Error rejecting review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /admin/reviews/:reviewId - Delete a review
app.delete('/admin/reviews/:reviewId', requireAdmin, (req, res) => {
  try {
    const { reviewId } = req.params;

    const result = db.prepare(`
      DELETE FROM reviews WHERE reviewId = ?
    `).run(reviewId);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json({ message: 'Review deleted', reviewId });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server (0.0.0.0 for cloud deployment)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Reviews server running on port ${PORT}`);
  console.log(`Admin token configured: ${ADMIN_TOKEN ? 'Yes' : 'No'}`);
});
