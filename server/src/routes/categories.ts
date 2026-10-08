import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { requireAuth, requireRole } from '../lib/session';
import { z } from 'zod';

const router = Router();

// GET / - Public
router.get('/', async (_req, res, next) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: { select: { vendors: true } },
      },
    });
    res.json({ success: true, data: { categories } });
  } catch (e) {
    next(e);
  }
});

// POST / - Admin only
const createCategorySchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().max(255).optional(),
});

router.post('/', requireAuth, requireRole('ADMIN'), async (req, res, next) => {
  try {
    const parse = createCategorySchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ success: false, error: parse.error.errors[0]?.message || 'Invalid category data' });
    }

    const existing = await prisma.category.findUnique({ where: { name: parse.data.name } });
    if (existing) {
      return res.status(409).json({ success: false, error: 'Category already exists' });
    }

    const category = await prisma.category.create({
      data: parse.data,
    });
    res.status(201).json({ success: true, data: { category } });
  } catch (e) {
    next(e);
  }
});

export default router;
