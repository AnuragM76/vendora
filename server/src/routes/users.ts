import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { AuthRequest, requireAuth, requireRole } from '../lib/session';
import { z } from 'zod';

const router = Router();

// GET /profile
router.get('/profile', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        city: true,
        avatar: true,
        createdAt: true,
        vendorProfile: true,
      },
    });
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    res.json({ success: true, data: { user } });
  } catch (e) {
    next(e);
  }
});

// PUT /profile
const updateProfileSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  phone: z.string().max(20).optional(),
  city: z.string().max(100).optional(),
  avatar: z.string().url().optional(),
});

router.put('/profile', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const parse = updateProfileSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ success: false, error: parse.error.errors[0]?.message || 'Invalid input' });
    }

    const updated = await prisma.user.update({
      where: { id: req.user!.id },
      data: {
        ...(parse.data.name ? { name: parse.data.name } : {}),
        ...(parse.data.phone !== undefined ? { phone: parse.data.phone } : {}),
        ...(parse.data.city !== undefined ? { city: parse.data.city } : {}),
        ...(parse.data.avatar !== undefined ? { avatar: parse.data.avatar } : {}),
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        city: true,
        avatar: true,
      },
    });

    res.json({ success: true, data: { user: updated } });
  } catch (e) {
    next(e);
  }
});

// GET / (Admin only: list all users)
router.get('/', requireAuth, requireRole('ADMIN'), async (_req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        city: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, data: { users } });
  } catch (e) {
    next(e);
  }
});

export default router;
