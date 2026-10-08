import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { AuthRequest } from '../lib/session';
import { recommendationService } from '../services/recommendationService';

const router = Router();

// GET / - Recommendations for an event
router.get('/', async (req: AuthRequest, res, next) => {
  try {
    const eventId = req.query.eventId as string | undefined;

    let targetEvent: any = null;

    if (eventId) {
      targetEvent = await prisma.event.findUnique({
        where: { id: eventId },
      });
    } else if (req.user) {
      // Find user's latest event
      targetEvent = await prisma.event.findFirst({
        where: { userId: req.user.id },
        orderBy: { createdAt: 'desc' },
      });
    }

    // If still no event, pick the first event in database as reference
    if (!targetEvent) {
      targetEvent = await prisma.event.findFirst({
        orderBy: { createdAt: 'desc' },
      });
    }

    if (!targetEvent) {
      return res.status(404).json({ success: false, error: 'No active event found to generate recommendations' });
    }

    // Retrieve vendors with category, packages, and reviews
    const vendors = await prisma.vendorProfile.findMany({
      include: {
        category: true,
        packages: { orderBy: { price: 'asc' } },
        reviews: { take: 3, orderBy: { createdAt: 'desc' } },
      },
    });

    const recommendations = await recommendationService.recommend(targetEvent, vendors);
    const combination = recommendationService.generateCombination(targetEvent, recommendations);

    res.json({
      success: true,
      data: {
        event: targetEvent,
        recommendations,
        combination,
      },
    });
  } catch (e) {
    next(e);
  }
});

export default router;
