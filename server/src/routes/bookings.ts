import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { AuthRequest, requireAuth } from '../lib/session';
import { z } from 'zod';

const router = Router();

const bookingSchema = z.object({
  vendorId: z.string().min(1),
  eventId: z.string().optional(),
  packageId: z.string().optional(),
  packageName: z.string().min(1),
  eventName: z.string().min(1),
  bookingDate: z.string(),
  amount: z.number().int().positive(),
  guestCount: z.number().int().positive().optional(),
  notes: z.string().max(500).optional(),
});

// GET / - Retrieve bookings according to role
router.get('/', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const userRole = req.user!.role;
    let where: any = {};

    if (userRole === 'ADMIN') {
      // Admins see all bookings
      where = {};
    } else if (userRole === 'VENDOR') {
      // Vendors see bookings targeted at their vendor profile
      const vendorProfile = await prisma.vendorProfile.findUnique({
        where: { userId: req.user!.id },
      });
      if (!vendorProfile) {
        return res.json({ success: true, data: { bookings: [] } });
      }
      where = { vendorId: vendorProfile.id };
    } else {
      // Customers see only their own bookings
      where = { userId: req.user!.id };
    }

    const bookings = await prisma.booking.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        vendor: {
          include: { category: true },
        },
        user: {
          select: { id: true, name: true, email: true, phone: true, avatar: true },
        },
        event: {
          select: { id: true, name: true, location: true, guestCount: true, date: true },
        },
        package: true,
      },
    });

    res.json({ success: true, data: { bookings } });
  } catch (e) {
    next(e);
  }
});

// POST / - Create a new booking
router.post('/', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const parse = bookingSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({
        success: false,
        error: parse.error.errors[0]?.message || 'Invalid booking details',
      });
    }

    const {
      vendorId,
      eventId,
      packageId,
      packageName,
      eventName,
      bookingDate,
      amount,
      guestCount,
      notes,
    } = parse.data;

    // Verify vendor exists
    const vendor = await prisma.vendorProfile.findUnique({ where: { id: vendorId } });
    if (!vendor) {
      return res.status(404).json({ success: false, error: 'Vendor not found' });
    }

    const booking = await prisma.booking.create({
      data: {
        userId: req.user!.id,
        vendorId,
        eventId: eventId || null,
        packageId: packageId || null,
        packageName,
        eventName,
        bookingDate: new Date(bookingDate),
        amount,
        guestCount: guestCount || null,
        notes: notes || null,
        status: 'PENDING',
      },
      include: {
        vendor: { include: { category: true } },
      },
    });

    res.status(201).json({ success: true, data: { booking } });
  } catch (e) {
    next(e);
  }
});

// GET /:id - Single booking
router.get('/:id', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const { id } = req.params;
    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        vendor: { include: { category: true } },
        user: { select: { id: true, name: true, email: true, phone: true } },
        event: true,
      },
    });

    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }

    // Authorization: User, Vendor of profile, or Admin
    const isOwner = booking.userId === req.user!.id;
    const isVendor = (await prisma.vendorProfile.findUnique({ where: { userId: req.user!.id } }))?.id === booking.vendorId;
    const isAdmin = req.user!.role === 'ADMIN';

    if (!isOwner && !isVendor && !isAdmin) {
      return res.status(403).json({ success: false, error: 'Unauthorized to view this booking' });
    }

    res.json({ success: true, data: { booking } });
  } catch (e) {
    next(e);
  }
});

// PATCH /:id/status - Update booking status
router.patch('/:id/status', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const { id } = req.params;
    let { status } = req.body;

    if (!status) {
      return res.status(400).json({ success: false, error: 'status is required' });
    }

    // Normalize status string
    const s = status.toUpperCase();
    let normalizedStatus: string = s;
    if (s === 'ACCEPTED') normalizedStatus = 'CONFIRMED';
    if (s === 'DECLINED') normalizedStatus = 'REJECTED';

    const validStatuses = ['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED', 'REJECTED'];
    if (!validStatuses.includes(normalizedStatus)) {
      return res.status(400).json({ success: false, error: `Invalid status. Valid values: ${validStatuses.join(', ')}` });
    }

    const booking = await prisma.booking.findUnique({ where: { id } });
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }

    // Authorization check
    const isOwner = booking.userId === req.user!.id;
    const vendorProfile = await prisma.vendorProfile.findUnique({ where: { userId: req.user!.id } });
    const isVendor = vendorProfile?.id === booking.vendorId;
    const isAdmin = req.user!.role === 'ADMIN';

    // Customers can only cancel their booking
    if (isOwner && !isVendor && !isAdmin) {
      if (normalizedStatus !== 'CANCELLED') {
        return res.status(403).json({ success: false, error: 'Customers can only cancel bookings' });
      }
    } else if (!isVendor && !isAdmin) {
      return res.status(403).json({ success: false, error: 'Not authorized to update booking status' });
    }

    const updated = await prisma.booking.update({
      where: { id },
      data: { status: normalizedStatus },
      include: {
        vendor: { include: { category: true } },
        user: { select: { id: true, name: true, email: true } },
      },
    });

    res.json({ success: true, data: { booking: updated } });
  } catch (e) {
    next(e);
  }
});

export default router;
