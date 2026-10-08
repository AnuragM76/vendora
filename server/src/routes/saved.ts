import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { AuthRequest, requireAuth } from '../lib/session';

const router = Router();

// GET / - List all saved vendors for authenticated user
router.get(['/', '/saved-vendors'], requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const saved = await prisma.savedVendor.findMany({
      where: { userId: req.user!.id },
      include: {
        vendor: {
          include: {
            category: true,
            packages: { orderBy: { price: 'asc' } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    const vendorIds = saved.map((s) => s.vendorId);
    const vendors = saved.map((s) => s.vendor);

    res.json({
      success: true,
      data: {
        vendorIds,
        vendors,
      },
    });
  } catch (e) {
    next(e);
  }
});

// POST / - Save a vendor
router.post(['/', '/saved-vendors'], requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const { vendorId } = req.body;
    if (!vendorId) {
      return res.status(400).json({ success: false, error: 'vendorId is required' });
    }

    const existingVendor = await prisma.vendorProfile.findUnique({ where: { id: vendorId } });
    if (!existingVendor) {
      return res.status(404).json({ success: false, error: 'Vendor not found' });
    }

    const saved = await prisma.savedVendor.upsert({
      where: {
        userId_vendorId: {
          userId: req.user!.id,
          vendorId,
        },
      },
      update: {},
      create: {
        userId: req.user!.id,
        vendorId,
      },
    });

    res.status(201).json({ success: true, data: { saved } });
  } catch (e) {
    next(e);
  }
});

// DELETE /:vendorId - Remove a saved vendor
router.delete(['/:vendorId', '/saved-vendors/:vendorId'], requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const { vendorId } = req.params;
    await prisma.savedVendor.deleteMany({
      where: {
        userId: req.user!.id,
        vendorId,
      },
    });
    res.json({ success: true, message: 'Vendor removed from saved shortlist' });
  } catch (e) {
    next(e);
  }
});

export default router;
