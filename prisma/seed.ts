import { PrismaClient } from '@prisma/client';
import { hash, argon2id } from 'argon2';
import { mockVendors } from '../src/data/vendors';

const prisma = new PrismaClient();

const CATEGORY_NAMES = [
  'Photography',
  'Catering',
  'Decoration',
  'Venue',
  'Makeup',
  'DJ',
  'Videography',
  'Event Planning',
  'Mehendi',
  'Florist',
];

async function hashPwd(pwd: string) {
  return hash(pwd, { type: argon2id, memoryCost: 65536, timeCost: 3, parallelism: 4 });
}

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clean existing data in reverse order of foreign keys
  await prisma.recommendation.deleteMany();
  await prisma.review.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.savedVendor.deleteMany();
  await prisma.availability.deleteMany();
  await prisma.portfolioItem.deleteMany();
  await prisma.vendorPackage.deleteMany();
  await prisma.vendorService.deleteMany();
  await prisma.vendorProfile.deleteMany();
  await prisma.event.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();

  console.log('🧹 Cleaned existing records.');

  // 1. Seed Categories
  const categoryMap = new Map<string, string>();
  for (const name of CATEGORY_NAMES) {
    const cat = await prisma.category.create({
      data: {
        name,
        description: `Professional ${name} specialists for luxury and traditional events.`,
      },
    });
    categoryMap.set(name, cat.id);
  }
  console.log(`✅ Seeded ${categoryMap.size} categories.`);

  // 2. Seed Admin User
  const adminPasswordHash = await hashPwd('Admin@12345');
  const adminUser = await prisma.user.create({
    data: {
      id: 'usr-admin-1',
      name: 'Vendora Admin Team',
      email: 'admin@vendora.app',
      passwordHash: adminPasswordHash,
      role: 'ADMIN',
      phone: '+91 99999 12345',
      city: 'Pune',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
  });
  console.log(`✅ Seeded admin: ${adminUser.email}`);

  // 3. Seed Customers
  const customerPasswordHash = await hashPwd('Demo@12345');
  const demoCustomer = await prisma.user.create({
    data: {
      id: 'usr-customer-1',
      name: 'Anurag Sharma',
      email: 'demo@vendora.app',
      passwordHash: customerPasswordHash,
      role: 'CUSTOMER',
      phone: '+91 98221 00921',
      city: 'Pune',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
  });

  const customer2 = await prisma.user.create({
    data: {
      id: 'usr-customer-2',
      name: 'Anurag & Shravani',
      email: 'anurag@vendora.app',
      passwordHash: customerPasswordHash,
      role: 'CUSTOMER',
      phone: '+91 98221 00922',
      city: 'Pune',
    },
  });

  const customer3 = await prisma.user.create({
    data: {
      id: 'usr-customer-3',
      name: 'Priya Singhania',
      email: 'priya@vendora.app',
      passwordHash: customerPasswordHash,
      role: 'CUSTOMER',
      phone: '+91 98221 00923',
      city: 'Mumbai',
    },
  });
  console.log('✅ Seeded 3 customer accounts.');

  // 4. Seed Vendors
  const vendorPasswordHash = await hashPwd('Vendor@12345');

  for (let idx = 0; idx < mockVendors.length; idx++) {
    const mv = mockVendors[idx];
    const isPrimaryDemoVendor = mv.id === 'v-photo-1';
    const vendorEmail = isPrimaryDemoVendor ? 'vendor@vendora.app' : `vendor-${mv.id}@vendora.app`;

    const vendorUser = await prisma.user.create({
      data: {
        id: `usr-vendor-${idx + 1}`,
        name: mv.name,
        email: vendorEmail,
        passwordHash: vendorPasswordHash,
        role: 'VENDOR',
        phone: mv.contact.phone,
        city: mv.location,
        avatar: mv.featuredImage,
      },
    });

    let catId = categoryMap.get(mv.category);
    if (!catId) {
      // Fallback create category if not in pre-defined list
      const newCat = await prisma.category.create({
        data: { name: mv.category, description: `${mv.category} services` },
      });
      categoryMap.set(mv.category, newCat.id);
      catId = newCat.id;
    }

    const vendorProfile = await prisma.vendorProfile.create({
      data: {
        id: mv.id,
        userId: vendorUser.id,
        businessName: mv.name,
        categoryId: catId,
        description: mv.description,
        shortDescription: mv.shortDescription,
        location: mv.location,
        experienceYears: mv.experience,
        startingPrice: mv.startingPrice,
        rating: mv.rating,
        reviewCount: mv.reviewCount,
        verified: mv.verified,
        availability: mv.availability,
        featured: mv.featured || false,
        featuredImage: mv.featuredImage,
        images: mv.images,
        styles: mv.styles,
        languages: mv.languages,
        serviceAreas: mv.serviceAreas,
        eventTypes: mv.eventTypes,
        contactPhone: mv.contact.phone,
        contactEmail: mv.contact.email,
        contactInstagram: mv.contact.instagram,
        contactAddress: mv.contact.address,
      },
    });

    // Seed Services
    for (const serviceName of mv.services) {
      await prisma.vendorService.create({
        data: {
          vendorId: vendorProfile.id,
          name: serviceName,
          description: `Custom ${serviceName} curated for your special occasion.`,
          price: Math.round(mv.startingPrice * 0.8),
        },
      });
    }

    // Seed Packages
    for (const pkg of mv.packages) {
      await prisma.vendorPackage.create({
        data: {
          id: `${mv.id}-${pkg.id}`,
          vendorId: vendorProfile.id,
          name: pkg.name,
          description: pkg.description,
          price: pkg.price,
          features: pkg.features,
          popular: pkg.popular || false,
        },
      });
    }

    // Seed Portfolio
    for (let pIdx = 0; pIdx < mv.images.length; pIdx++) {
      await prisma.portfolioItem.create({
        data: {
          vendorId: vendorProfile.id,
          title: `${mv.name} Highlight #${pIdx + 1}`,
          imageUrl: mv.images[pIdx],
          description: `Real event capture by ${mv.name}`,
        },
      });
    }

    // Seed Availability dates
    const dates = [
      new Date('2026-12-24T00:00:00Z'),
      new Date('2026-12-25T00:00:00Z'),
      new Date('2027-01-10T00:00:00Z'),
      new Date('2027-02-15T00:00:00Z'),
    ];
    for (const d of dates) {
      await prisma.availability.create({
        data: {
          vendorId: vendorProfile.id,
          date: d,
          available: mv.availability,
          note: mv.availability ? 'Open for bookings' : 'Fully booked',
        },
      });
    }

    // Seed Reviews
    for (const rev of mv.reviews) {
      await prisma.review.create({
        data: {
          vendorId: vendorProfile.id,
          userId: demoCustomer.id,
          userName: rev.userName,
          rating: rev.rating,
          comment: rev.comment,
          eventType: rev.eventType,
          createdAt: new Date(rev.date || '2026-08-01'),
        },
      });
    }
  }

  console.log(`✅ Seeded ${mockVendors.length} vendor profiles with services, packages, portfolio, and reviews.`);

  // 5. Seed Events for demo customer
  const event1 = await prisma.event.create({
    data: {
      id: 'ev-demo-1',
      userId: demoCustomer.id,
      name: 'Anurag & Shravani Wedding Celebration',
      type: 'Wedding',
      date: new Date('2026-12-24T00:00:00Z'),
      location: 'Pune',
      guestCount: 300,
      budget: 250000,
      style: ['Traditional', 'Modern', 'Candid', 'Vegetarian'],
      requirements: ['Photography', 'Catering', 'Decoration', 'Venue', 'Makeup', 'DJ'],
      budgetAllocations: {
        venue: 75000,
        photography: 45000,
        catering: 70000,
        decoration: 35000,
        other: 25000,
      },
      notes: 'Sunset pheras followed by evening reception. Looking for experienced vendors with strong ratings.',
    },
  });

  const event2 = await prisma.event.create({
    data: {
      id: 'ev-demo-2',
      userId: demoCustomer.id,
      name: '25th Silver Anniversary Gala',
      type: 'Anniversary',
      date: new Date('2027-02-15T00:00:00Z'),
      location: 'Mumbai',
      guestCount: 150,
      budget: 180000,
      style: ['Luxury', 'Modern'],
      requirements: ['Venue', 'Catering', 'Photography', 'DJ'],
      budgetAllocations: {
        venue: 60000,
        photography: 30000,
        catering: 55000,
        decoration: 25000,
        other: 10000,
      },
      notes: 'Silver jubilee evening reception banquet.',
    },
  });

  console.log('✅ Seeded 2 customer events.');

  // 6. Seed Saved Vendors for demoCustomer
  const savedIds = ['v-photo-1', 'v-cat-1', 'v-dec-1'];
  for (const vId of savedIds) {
    await prisma.savedVendor.create({
      data: {
        userId: demoCustomer.id,
        vendorId: vId,
      },
    });
  }
  console.log('✅ Seeded saved vendors.');

  // 7. Seed Bookings
  const sampleBookings = [
    {
      id: 'bkg-101',
      userId: demoCustomer.id,
      vendorId: 'v-photo-1',
      eventId: event1.id,
      packageId: 'v-photo-1-p-1',
      packageName: 'Essential Day',
      amount: 45000,
      status: 'CONFIRMED',
      eventName: event1.name,
      bookingDate: new Date('2026-12-24T00:00:00Z'),
      guestCount: 300,
      notes: 'Full day coverage requested.',
    },
    {
      id: 'bkg-102',
      userId: demoCustomer.id,
      vendorId: 'v-cat-1',
      eventId: event1.id,
      packageId: 'v-cat-1-p-1',
      packageName: 'Gold Royal Spread',
      amount: 70000,
      status: 'PENDING',
      eventName: event1.name,
      bookingDate: new Date('2026-12-24T00:00:00Z'),
      guestCount: 300,
      notes: 'Buffet setup with live stations.',
    },
    {
      id: 'bkg-103',
      userId: demoCustomer.id,
      vendorId: 'v-dec-1',
      eventId: event1.id,
      packageId: 'v-dec-1-p-1',
      packageName: 'Vibrant Floral Charm',
      amount: 60000,
      status: 'CONFIRMED',
      eventName: event1.name,
      bookingDate: new Date('2026-12-24T00:00:00Z'),
      guestCount: 300,
      notes: 'Floral archway and mandap decor.',
    },
    {
      id: 'bkg-104',
      userId: demoCustomer.id,
      vendorId: 'v-mu-1',
      eventId: event1.id,
      packageId: 'v-mu-1-p-1',
      packageName: 'Bridal HD Signature',
      amount: 18000,
      status: 'CONFIRMED',
      eventName: event1.name,
      bookingDate: new Date('2026-12-23T00:00:00Z'),
      guestCount: 1,
      notes: 'Bridal makeup appointment.',
    },
    {
      id: 'bkg-105',
      userId: demoCustomer.id,
      vendorId: 'v-dj-1',
      eventId: event2.id,
      packageId: 'v-dj-1-p-1',
      packageName: 'Club Sound Standard',
      amount: 35000,
      status: 'COMPLETED',
      eventName: event2.name,
      bookingDate: new Date('2026-08-15T00:00:00Z'),
      guestCount: 150,
      notes: 'Bollywood music tracks for celebration.',
    },
  ];

  for (const bkg of sampleBookings) {
    const pkg = await prisma.vendorPackage.findFirst({
      where: {
        vendorId: bkg.vendorId,
        name: { contains: bkg.packageName, mode: 'insensitive' },
      },
    }) || await prisma.vendorPackage.findFirst({
      where: { vendorId: bkg.vendorId },
    });

    await prisma.booking.create({
      data: {
        id: bkg.id,
        userId: bkg.userId,
        vendorId: bkg.vendorId,
        eventId: bkg.eventId,
        packageId: pkg?.id || null,
        packageName: bkg.packageName,
        amount: bkg.amount,
        status: bkg.status,
        eventName: bkg.eventName,
        bookingDate: bkg.bookingDate,
        guestCount: bkg.guestCount,
        notes: bkg.notes,
      },
    });
  }
  console.log('✅ Seeded 5 initial bookings.');

  // 8. Seed Recommendations for event1
  const demoRecs = [
    {
      eventId: event1.id,
      vendorId: 'v-photo-1',
      score: 96,
      budgetScore: 95,
      locationScore: 98,
      ratingScore: 98,
      availabilityScore: 100,
      styleScore: 94,
      experienceScore: 90,
      reason: 'Exceptional candid style match and verified Pune presence within photography budget.',
    },
    {
      eventId: event1.id,
      vendorId: 'v-cat-1',
      score: 94,
      budgetScore: 92,
      locationScore: 98,
      ratingScore: 98,
      availabilityScore: 100,
      styleScore: 90,
      experienceScore: 92,
      reason: 'Perfect 300-guest scale catering capability with high rating in Pune.',
    },
    {
      eventId: event1.id,
      vendorId: 'v-dec-1',
      score: 92,
      budgetScore: 90,
      locationScore: 98,
      ratingScore: 96,
      availabilityScore: 100,
      styleScore: 95,
      experienceScore: 88,
      reason: 'Strong floral aesthetic alignment and exact budget tier fit.',
    },
  ];

  for (const rec of demoRecs) {
    await prisma.recommendation.create({ data: rec });
  }
  console.log('✅ Seeded initial recommendations.');

  console.log('\n🎉 Database seeding finished successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
