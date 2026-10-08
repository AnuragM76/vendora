import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { AuthRequest, requireAuth, requireRole } from '../lib/session';
import { z } from 'zod';

const router = Router();

// GET /compare?ids=v1,v2,v3 (Must be declared before /:id)
router.get('/compare', async (req, res, next) => {
  try {
    const idsParam = req.query.ids as string;
    if (!idsParam) {
      return res.status(400).json({ success: false, error: 'Vendor IDs required in ?ids= query parameter' });
    }
    const ids = idsParam.split(',').map((s) => s.trim()).filter(Boolean);
    if (ids.length === 0) {
      return res.json({ success: true, data: { vendors: [] } });
    }

    const vendors = await prisma.vendorProfile.findMany({
      where: { id: { in: ids } },
      include: {
        category: true,
        packages: { orderBy: { price: 'asc' } },
        services: true,
        portfolioItems: true,
        reviews: { orderBy: { createdAt: 'desc' }, take: 5 },
      },
    });

    res.json({ success: true, data: { vendors } });
  } catch (e) {
    next(e);
  }
});

// GET / - Search, Filter, Sort, Paginate
router.get('/', async (req, res, next) => {
  try {
    const {
      category,
      location,
      minPrice,
      maxPrice,
      minRating,
      experience,
      verified,
      availability,
      search,
      searchQuery,
      sort,
      sortBy,
      page = '1',
      limit = '12',
    } = req.query;

    const pageNum = Math.max(1, parseInt(page as string, 10) || 1);
    const limitNum = Math.min(50, Math.max(1, parseInt(limit as string, 10) || 12));
    const skip = (pageNum - 1) * limitNum;

    const where: any = {};
    const andClauses: any[] = [];

    // Search query
    const q = ((search || searchQuery) as string | undefined)?.trim();
    if (q) {
      andClauses.push({
        OR: [
          { businessName: { contains: q, mode: 'insensitive' } },
          { location: { contains: q, mode: 'insensitive' } },
          { description: { contains: q, mode: 'insensitive' } },
          { category: { name: { contains: q, mode: 'insensitive' } } },
          { styles: { has: q } },
        ],
      });
    }

    // Category filter
    if (category && category !== 'All') {
      andClauses.push({
        category: { name: { equals: category as string, mode: 'insensitive' } },
      });
    }

    // Location filter
    if (location && location !== 'All') {
      const locStr = location as string;
      andClauses.push({
        OR: [
          { location: { contains: locStr, mode: 'insensitive' } },
          { serviceAreas: { has: locStr } },
        ],
      });
    }

    if (andClauses.length > 0) {
      where.AND = andClauses;
    }

    // Price range
    if (minPrice !== undefined && minPrice !== '') {
      where.startingPrice = { ...(where.startingPrice || {}), gte: parseInt(minPrice as string, 10) };
    }
    if (maxPrice !== undefined && maxPrice !== '') {
      where.startingPrice = { ...(where.startingPrice || {}), lte: parseInt(maxPrice as string, 10) };
    }

    // Rating
    if (minRating !== undefined && minRating !== '') {
      where.rating = { gte: parseFloat(minRating as string) };
    }

    // Experience
    if (experience !== undefined && experience !== '') {
      where.experienceYears = { gte: parseInt(experience as string, 10) };
    }

    // Verified
    if (verified === 'true' || verified === true) {
      where.verified = true;
    }

    // Availability
    if (availability === 'true' || availability === true) {
      where.availability = true;
    }

    // Sorting
    const sortField = (sort || sortBy || 'recommended') as string;
    let orderBy: any = {};
    switch (sortField) {
      case 'rating':
        orderBy = { rating: 'desc' };
        break;
      case 'price_asc':
      case 'price-low':
        orderBy = { startingPrice: 'asc' };
        break;
      case 'price_desc':
      case 'price-high':
        orderBy = { startingPrice: 'desc' };
        break;
      case 'experience':
        orderBy = { experienceYears: 'desc' };
        break;
      case 'reviews':
        orderBy = { reviewCount: 'desc' };
        break;
      case 'recommended':
      default:
        orderBy = [{ rating: 'desc' }, { reviewCount: 'desc' }];
        break;
    }

    const [total, vendors] = await Promise.all([
      prisma.vendorProfile.count({ where }),
      prisma.vendorProfile.findMany({
        where,
        orderBy,
        skip,
        take: limitNum,
        include: {
          category: true,
          packages: { take: 3, orderBy: { price: 'asc' } },
          services: { take: 5 },
        },
      }),
    ]);

    res.json({
      success: true,
      data: {
        vendors,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total,
          totalPages: Math.ceil(total / limitNum),
        },
      },
    });
  } catch (e) {
    next(e);
  }
});

// GET /:id - Single vendor details
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const vendor = await prisma.vendorProfile.findUnique({
      where: { id },
      include: {
        category: true,
        services: true,
        packages: { orderBy: { price: 'asc' } },
        portfolioItems: { orderBy: { createdAt: 'desc' } },
        availabilities: { take: 30, orderBy: { date: 'asc' } },
        reviews: { orderBy: { createdAt: 'desc' } },
      },
    });

    if (!vendor) {
      return res.status(404).json({ success: false, error: 'Vendor not found' });
    }

    res.json({ success: true, data: { vendor } });
  } catch (e) {
    next(e);
  }
});

// POST /:id/verify - Admin only verify/reject
router.post('/:id/verify', requireAuth, requireRole('ADMIN'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const { verified } = req.body;
    const updated = await prisma.vendorProfile.update({
      where: { id },
      data: { verified: Boolean(verified) },
    });
    res.json({ success: true, data: { vendor: updated } });
  } catch (e) {
    next(e);
  }
});

// PUT /:id - Vendor update own profile or Admin
router.put('/:id', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const { id } = req.params;
    const existing = await prisma.vendorProfile.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ success: false, error: 'Vendor profile not found' });
    }

    // Check authorization: must be the vendor or admin
    if (req.user!.role !== 'ADMIN' && existing.userId !== req.user!.id) {
      return res.status(403).json({ success: false, error: 'Not authorized to edit this vendor profile' });
    }

    const {
      businessName,
      description,
      shortDescription,
      location,
      experienceYears,
      startingPrice,
      availability,
      styles,
      languages,
      serviceAreas,
      eventTypes,
      contactPhone,
      contactEmail,
      contactInstagram,
      contactAddress,
      featuredImage,
      images,
      categoryId,
    } = req.body;

    const updated = await prisma.vendorProfile.update({
      where: { id },
      data: {
        ...(businessName ? { businessName } : {}),
        ...(description !== undefined ? { description } : {}),
        ...(shortDescription !== undefined ? { shortDescription } : {}),
        ...(location ? { location } : {}),
        ...(experienceYears !== undefined ? { experienceYears: parseInt(experienceYears, 10) } : {}),
        ...(startingPrice !== undefined ? { startingPrice: parseInt(startingPrice, 10) } : {}),
        ...(availability !== undefined ? { availability: Boolean(availability) } : {}),
        ...(styles ? { styles } : {}),
        ...(languages ? { languages } : {}),
        ...(serviceAreas ? { serviceAreas } : {}),
        ...(eventTypes ? { eventTypes } : {}),
        ...(contactPhone !== undefined ? { contactPhone } : {}),
        ...(contactEmail !== undefined ? { contactEmail } : {}),
        ...(contactInstagram !== undefined ? { contactInstagram } : {}),
        ...(contactAddress !== undefined ? { contactAddress } : {}),
        ...(featuredImage !== undefined ? { featuredImage } : {}),
        ...(images ? { images } : {}),
        ...(categoryId ? { categoryId } : {}),
      },
    });

    res.json({ success: true, data: { vendor: updated } });
  } catch (e) {
    next(e);
  }
});

// SERVICES: POST /:id/services
router.post('/:id/services', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const { id } = req.params;
    const vendor = await prisma.vendorProfile.findUnique({ where: { id } });
    if (!vendor || (req.user!.role !== 'ADMIN' && vendor.userId !== req.user!.id)) {
      return res.status(403).json({ success: false, error: 'Unauthorized' });
    }

    const { name, description, price } = req.body;
    const service = await prisma.vendorService.create({
      data: {
        vendorId: id,
        name,
        description,
        price: parseInt(price, 10) || 0,
      },
    });
    res.status(201).json({ success: true, data: { service } });
  } catch (e) {
    next(e);
  }
});

// PACKAGES: POST /:id/packages
router.post('/:id/packages', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const { id } = req.params;
    const vendor = await prisma.vendorProfile.findUnique({ where: { id } });
    if (!vendor || (req.user!.role !== 'ADMIN' && vendor.userId !== req.user!.id)) {
      return res.status(403).json({ success: false, error: 'Unauthorized' });
    }

    const { name, description, price, features = [], popular = false } = req.body;
    const pkg = await prisma.vendorPackage.create({
      data: {
        vendorId: id,
        name,
        description,
        price: parseInt(price, 10),
        features,
        popular: Boolean(popular),
      },
    });
    res.status(201).json({ success: true, data: { package: pkg } });
  } catch (e) {
    next(e);
  }
});

// PORTFOLIO: POST /:id/portfolio
router.post('/:id/portfolio', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const { id } = req.params;
    const vendor = await prisma.vendorProfile.findUnique({ where: { id } });
    if (!vendor || (req.user!.role !== 'ADMIN' && vendor.userId !== req.user!.id)) {
      return res.status(403).json({ success: false, error: 'Unauthorized' });
    }

    const { title, imageUrl, description } = req.body;
    const item = await prisma.portfolioItem.create({
      data: {
        vendorId: id,
        title,
        imageUrl,
        description,
      },
    });
    res.status(201).json({ success: true, data: { item } });
  } catch (e) {
    next(e);
  }
});

// AVAILABILITY: POST /:id/availability
router.post('/:id/availability', requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const { id } = req.params;
    const vendor = await prisma.vendorProfile.findUnique({ where: { id } });
    if (!vendor || (req.user!.role !== 'ADMIN' && vendor.userId !== req.user!.id)) {
      return res.status(403).json({ success: false, error: 'Unauthorized' });
    }

    const { date, available = true, note } = req.body;
    const record = await prisma.availability.upsert({
      where: { vendorId_date: { vendorId: id, date: new Date(date) } },
      update: { available: Boolean(available), note },
      create: {
        vendorId: id,
        date: new Date(date),
        available: Boolean(available),
        note,
      },
    });
    res.json({ success: true, data: { availability: record } });
  } catch (e) {
    next(e);
  }
});

export default router;
