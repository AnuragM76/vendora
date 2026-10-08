import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { AuthRequest, requireAuth } from '../lib/session';
import { recommendationService } from '../services/recommendationService';
import { z } from 'zod';

const router = Router();

const eventSchema = z.object({
  name: z.string().min(2).max(150),
  type: z.string().min(2).max(50),
  date: z.string(), // ISO string or YYYY-MM-DD
  location: z.string().min(2).max(100),
  guestCount: z.number().int().positive(),
  budget: z.number().int().positive(),
  style: z.array(z.string()).default([]),
  requirements: z.array(z.string()).default([]),
  budgetAllocations: z.record(z.number()).optional(),
  notes: z.string().max(1000).optional(),
});

// GET / - List all events belonging to the authenticated user
router.get('/', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const events = await prisma.event.findMany({
      where: { userId: req.user!.id },
      orderBy: { date: 'asc' },
      include: {
        _count: { select: { bookings: true } },
      },
    });
    res.json({ success: true, data: { events } });
  } catch (e) {
    next(e);
  }
});

// POST / - Create a new event and pre-generate recommendations
router.post('/', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const parse = eventSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({
        success: false,
        error: parse.error.errors[0]?.message || 'Invalid event parameters',
      });
    }

    const {
      name,
      type,
      date,
      location,
      guestCount,
      budget,
      style,
      requirements,
      budgetAllocations,
      notes,
    } = parse.data;

    const event = await prisma.event.create({
      data: {
        userId: req.user!.id,
        name,
        type,
        date: new Date(date),
        location,
        guestCount,
        budget,
        style,
        requirements,
        budgetAllocations: budgetAllocations || {
          venue: Math.round(budget * 0.30),
          catering: Math.round(budget * 0.28),
          photography: Math.round(budget * 0.18),
          decoration: Math.round(budget * 0.14),
          other: Math.round(budget * 0.10),
        },
        notes,
      },
    });

    // Run recommendation engine for this event
    const vendors = await prisma.vendorProfile.findMany({
      include: { category: true },
    });
    const ranked = await recommendationService.recommend(event, vendors);

    // Persist top recommendations into the database
    for (const r of ranked.slice(0, 10)) {
      await prisma.recommendation.upsert({
        where: { eventId_vendorId: { eventId: event.id, vendorId: r.vendorId } },
        update: {
          score: r.score,
          budgetScore: r.breakdown.budget,
          locationScore: r.breakdown.location,
          ratingScore: r.breakdown.rating,
          availabilityScore: r.breakdown.availability,
          styleScore: r.breakdown.style,
          experienceScore: r.breakdown.experience,
          reason: r.reason,
        },
        create: {
          eventId: event.id,
          vendorId: r.vendorId,
          score: r.score,
          budgetScore: r.breakdown.budget,
          locationScore: r.breakdown.location,
          ratingScore: r.breakdown.rating,
          availabilityScore: r.breakdown.availability,
          styleScore: r.breakdown.style,
          experienceScore: r.breakdown.experience,
          reason: r.reason,
        },
      });
    }

    res.status(201).json({ success: true, data: { event } });
  } catch (e) {
    next(e);
  }
});

// GET /:id - Single event details (ownership verified)
router.get('/:id', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const { id } = req.params;
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        bookings: {
          include: {
            vendor: { select: { businessName: true, location: true, featuredImage: true, category: true } },
          },
        },
      },
    });

    if (!event) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }

    if (event.userId !== req.user!.id && req.user!.role !== 'ADMIN') {
      return res.status(403).json({ success: false, error: 'Access denied: not your event' });
    }

    res.json({ success: true, data: { event } });
  } catch (e) {
    next(e);
  }
});

// PUT /:id - Update event (ownership verified)
router.put('/:id', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const { id } = req.params;
    const existing = await prisma.event.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }
    if (existing.userId !== req.user!.id && req.user!.role !== 'ADMIN') {
      return res.status(403).json({ success: false, error: 'Access denied: not your event' });
    }

    const {
      name,
      type,
      date,
      location,
      guestCount,
      budget,
      style,
      requirements,
      budgetAllocations,
      notes,
    } = req.body;

    const updated = await prisma.event.update({
      where: { id },
      data: {
        ...(name ? { name } : {}),
        ...(type ? { type } : {}),
        ...(date ? { date: new Date(date) } : {}),
        ...(location ? { location } : {}),
        ...(guestCount !== undefined ? { guestCount: parseInt(guestCount, 10) } : {}),
        ...(budget !== undefined ? { budget: parseInt(budget, 10) } : {}),
        ...(style ? { style } : {}),
        ...(requirements ? { requirements } : {}),
        ...(budgetAllocations ? { budgetAllocations } : {}),
        ...(notes !== undefined ? { notes } : {}),
      },
    });

    res.json({ success: true, data: { event: updated } });
  } catch (e) {
    next(e);
  }
});

// DELETE /:id - Delete event (ownership verified)
router.delete('/:id', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const { id } = req.params;
    const existing = await prisma.event.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }
    if (existing.userId !== req.user!.id && req.user!.role !== 'ADMIN') {
      return res.status(403).json({ success: false, error: 'Access denied: not your event' });
    }

    await prisma.event.delete({ where: { id } });
    res.json({ success: true, message: 'Event deleted successfully' });
  } catch (e) {
    next(e);
  }
});

export default router;
