import { v4 as uuidv4 } from 'uuid';
import { prisma } from './prisma';
import { Request, Response, NextFunction } from 'express';

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: 'CUSTOMER' | 'VENDOR' | 'ADMIN';
  phone?: string;
  city?: string;
  avatar?: string;
}

export interface AuthRequest extends Request {
  user?: SessionUser;
}

const SESSION_COOKIE = 'vendora_session';
const SESSION_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 30; // 30 days

export function sessionMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.signedCookies?.[SESSION_COOKIE];
  if (!token) {
    return next();
  }

  prisma.session
    .findUnique({ where: { token }, include: { user: true } })
    .then((session) => {
      if (!session || session.expiresAt < new Date()) {
        if (session) {
          prisma.session.delete({ where: { id: session.id } }).catch(() => {});
        }
        return next();
      }
      const u = session.user;
      req.user = {
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.role as SessionUser['role'],
        phone: u.phone ?? undefined,
        city: u.city ?? undefined,
        avatar: u.avatar ?? undefined,
      };
      next();
    })
    .catch(() => next());
}

export async function createSession(userId: string, res: Response) {
  const token = uuidv4();
  const expiresAt = new Date(Date.now() + SESSION_MAX_AGE_MS);
  await prisma.session.create({
    data: { token, userId, expiresAt },
  });
  res.cookie(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: SESSION_MAX_AGE_MS,
    signed: true,
  });
}

export async function destroySession(res: Response) {
  const token = res.signedCookies?.[SESSION_COOKIE];
  if (token) {
    await prisma.session.deleteMany({ where: { token } }).catch(() => {});
  }
  res.clearCookie(SESSION_COOKIE, { httpOnly: true, signed: true });
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  if (!req.user) {
    return res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Authentication required' } });
  }
  next();
}

export function requireRole(...roles: SessionUser['role'][]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Authentication required' } });
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: { code: 'FORBIDDEN', message: 'Insufficient permissions' } });
    }
    next();
  };
}