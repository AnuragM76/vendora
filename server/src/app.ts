import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import { sessionMiddleware } from './lib/session';
import { errorHandler } from './middleware/errorHandler';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import vendorRoutes from './routes/vendors';
import categoryRoutes from './routes/categories';
import eventRoutes from './routes/events';
import savedRoutes from './routes/saved';
import bookingRoutes from './routes/bookings';
import reviewRoutes from './routes/reviews';
import recommendationRoutes from './routes/recommendations';
import adminRoutes from './routes/admin';
import { prisma } from './lib/prisma';

dotenv.config();

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:4173',
  process.env.FRONTEND_URL,
].filter(Boolean) as string[];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (like mobile apps, curl, or same-origin Vercel deployments)
      if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive for MVP fullstack preview
    },
    credentials: true,
  })
);

app.use(cookieParser(process.env.SESSION_SECRET || 'vendora-local-dev-session-secret-2026'));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(sessionMiddleware);

// Health check
app.get('/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', database: 'connected' });
  } catch {
    res.status(503).json({ status: 'error', database: 'disconnected' });
  }
});

// Mount routes for /api/*
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/saved-vendors', savedRoutes);
app.use('/api/saved', savedRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/admin', adminRoutes);

// Also mount routes for /api/v1/* for backwards/version compatibility
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/vendors', vendorRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/saved-vendors', savedRoutes);
app.use('/api/v1/saved', savedRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/recommendations', recommendationRoutes);
app.use('/api/v1/admin', adminRoutes);

// Fallback 404 for unrecognized api routes
app.use('/api/*', (_req, res) => {
  res.status(404).json({ success: false, error: 'API endpoint not found' });
});

app.use(errorHandler);

export default app;
export { app };
