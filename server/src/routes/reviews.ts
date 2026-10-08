import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { AuthRequest, requireAuth } from '../lib/session';
import { z } from 'zod';

const router = Router();

const reviewSchema = z.object({
  vendorId: z.string().min(1),
  bookingId: z.string().optional(),
  rating: z.number().min(1).max(5),
  comment: z.string().min(5).max(1000),
  eventType: z.string().optional(),
});

// GET / - List reviews for a vendor
router.get('/', async (req, res, next) => {
  try {
    const { vendorId } = req.query;
    if (!vendorId) {
      return res.status(400).json({ success: false, error: 'vendorId is required' });
    }

    const reviews = await prisma.review.findMany({
      where: { vendorId: vendorId as string },
      orderBy: { createdAt: 'desc' },
      include: {
        user: { select: { id: true, name: true, avatar: true } },
      },
    });

    res.json({ success: true, data: { reviews } });
  } catch (e) {
    next(e);
  }
});

// POST / - Create a new review and recompute aggregate vendor rating
router.post('/', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const parse = reviewSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({
        success: false,
        error: parse.error.errors[0]?.message || 'Invalid review data',
      });
    }

    const { vendorId, bookingId, rating, comment, eventType } = parse.data;

    // Check if vendor exists
    const vendor = await prisma.vendorProfile.findUnique({ where: { id: vendorId } });
    if (!vendor) {
      return res.status(404).json({ success: false, error: 'Vendor not found' });
    }

    // Optional booking validation: if bookingId is provided, ensure it belongs to user
    if (bookingId) {
      const bkg = await prisma.booking.findUnique({ where: { id: bookingId } });
      if (bkg && bkg.userId !== req.user!.id && req.user!.role !== 'ADMIN') {
        return res.status(403).json({ success: false, error: 'Not authorized for this booking' });
      }
    }

    const review = await prisma.review.create({
      data: {
        userId: req.user!.id,
        vendorId,
        bookingId: bookingId || null,
        rating,
        comment,
        userName: req.user!.name,
        eventType: eventType || 'Celebration',
      },
    });

    // Recompute vendor aggregate rating and reviewCount server-side
    const allReviews = await prisma.review.findMany({
      where: { vendorId },
      select: { rating: true },
    });

    const newReviewCount = allReviews.length;
    const avgRating =
      newReviewCount > 0
        ? Math.round((allReviews.reduce((sum, r) => sum + r.rating, 0) / newReviewCount) * 10) / 10
        : rating;

    await prisma.vendorProfile.update({
      where: { id: vendorId },
      data: {
        rating: avgRating,
        reviewCount: newReviewCount,
      },
    });

    res.status(201).json({
      success: true,
      data: {
        review,
        vendorUpdate: { rating: avgRating, reviewCount: newReviewCount },
      },
    });
  } catch (e) {
    next(e);
  }
});

export default router;
