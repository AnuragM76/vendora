import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { requireAuth, requireRole } from '../lib/session';

const router = Router();

// GET /stats - Admin statistics
router.get('/stats', requireAuth, requireRole('ADMIN'), async (_req, res, next) => {
  try {
    const [
      totalUsers,
      totalVendors,
      verifiedVendors,
      pendingVendors,
      totalBookings,
      totalReviews,
      confirmedBookings,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.vendorProfile.count(),
      prisma.vendorProfile.count({ where: { verified: true } }),
      prisma.vendorProfile.count({ where: { verified: false } }),
      prisma.booking.count(),
      prisma.review.count(),
      prisma.booking.findMany({
        where: { status: 'CONFIRMED' },
        select: { amount: true },
      }),
    ]);

    const totalBookingVolume = confirmedBookings.reduce((sum, b) => sum + b.amount, 0);

    res.json({
      success: true,
      data: {
        totalUsers,
        totalVendors,
        verifiedVendors,
        pendingVendors,
        totalBookings,
        totalReviews,
        totalBookingVolume,
      },
    });
  } catch (e) {
    next(e);
  }
});

// GET /vendors - Admin vendor verification list
router.get('/vendors', requireAuth, requireRole('ADMIN'), async (_req, res, next) => {
  try {
    const vendors = await prisma.vendorProfile.findMany({
      orderBy: [{ verified: 'asc' }, { createdAt: 'desc' }],
      include: {
        category: true,
        user: { select: { email: true, phone: true } },
        _count: { select: { bookings: true, reviews: true } },
      },
    });
    res.json({ success: true, data: { vendors } });
  } catch (e) {
    next(e);
  }
});

export default router;
