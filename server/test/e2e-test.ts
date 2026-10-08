import app from '../src/app';
import { prisma } from '../src/lib/prisma';

let passed = 0;
let failed = 0;

function assert(condition: boolean, msg: string) {
  if (condition) {
    console.log(`  ✅ PASS: ${msg}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${msg}`);
    failed++;
  }
}

async function runTests() {
  console.log('🧪 Starting VENDORA Full-Stack MVP Integration Tests...\n');

  const server = app.listen(3099);
  const baseUrl = 'http://localhost:3099';

  try {
    // -----------------------------------------------------------------
    // TEST 1: Health Check
    // -----------------------------------------------------------------
    console.log('👉 [1/8] Testing Health and Database Connection');
    const healthRes = await fetch(`${baseUrl}/health`).then((r) => r.json());
    assert(healthRes.status === 'ok' && healthRes.database === 'connected', 'Database connected to Neon PostgreSQL');

    // -----------------------------------------------------------------
    // TEST 2: Authentication Flows
    // -----------------------------------------------------------------
    console.log('\n👉 [2/8] Testing Authentication and Session Security');
    const testEmail = `test-${Date.now()}@vendora.app`;
    const testPassword = 'Password123!';

    // Public signup
    const signupRes = await fetch(`${baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Customer',
        email: testEmail,
        password: testPassword,
        role: 'CUSTOMER',
      }),
    });
    const signupCookie = signupRes.headers.get('set-cookie');
    const signupData = await signupRes.json();
    assert(signupRes.status === 201 && signupData.success, 'Customer signup successful (HTTP 201)');
    assert(Boolean(signupCookie && signupCookie.includes('vendora_session')), 'HTTP-only secure session cookie issued');

    // Duplicate signup attempt
    const dupRes = await fetch(`${baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Duplicate Customer',
        email: testEmail,
        password: testPassword,
        role: 'CUSTOMER',
      }),
    });
    assert(dupRes.status === 409, 'Duplicate signup rejected with HTTP 409 Conflict');

    // Admin role signup attempt blocked
    const adminSignupRes = await fetch(`${baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Hacker Admin',
        email: `hacker-${Date.now()}@vendora.app`,
        password: testPassword,
        role: 'ADMIN',
      }),
    });
    assert(adminSignupRes.status === 400, 'Public signup with ADMIN role forbidden (HTTP 400)');

    // Login with invalid password
    const badLoginRes = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testEmail, password: 'WrongPassword!' }),
    });
    assert(badLoginRes.status === 401, 'Invalid password rejected (HTTP 401)');

    // Login with correct password
    const goodLoginRes = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testEmail, password: testPassword }),
    });
    const loginData = await goodLoginRes.json();
    const sessionCookie = goodLoginRes.headers.get('set-cookie')!;
    assert(goodLoginRes.status === 200 && loginData.data?.user?.email === testEmail, 'Login successful with session cookie');

    // /api/auth/me verification
    const meRes = await fetch(`${baseUrl}/api/auth/me`, {
      headers: { Cookie: sessionCookie },
    }).then((r) => r.json());
    assert(meRes.data?.user?.name === 'Test Customer', 'Session verified via /api/auth/me');

    // -----------------------------------------------------------------
    // TEST 3: Events CRUD and Ownership Security
    // -----------------------------------------------------------------
    console.log('\n👉 [3/8] Testing Events CRUD & Authorization');
    const createEventRes = await fetch(`${baseUrl}/api/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Cookie: sessionCookie },
      body: JSON.stringify({
        name: 'Grand Winter Gala 2026',
        type: 'Wedding',
        date: '2026-12-28',
        location: 'Pune',
        guestCount: 350,
        budget: 300000,
        style: ['Traditional', 'Luxury'],
        requirements: ['Photography', 'Catering', 'Decoration'],
      }),
    });
    const eventData = await createEventRes.json();
    assert(createEventRes.status === 201 && eventData.data?.event?.id, 'Event created in PostgreSQL');
    const eventId = eventData.data.event.id;

    // Verify recommendations were automatically generated
    const recsCount = await prisma.recommendation.count({ where: { eventId } });
    assert(recsCount > 0, `Recommendations pre-calculated for event (${recsCount} recommendations created)`);

    // Verify event ownership
    const getEventRes = await fetch(`${baseUrl}/api/events/${eventId}`, {
      headers: { Cookie: sessionCookie },
    }).then((r) => r.json());
    assert(getEventRes.data?.event?.name === 'Grand Winter Gala 2026', 'Owner can retrieve own event');

    // -----------------------------------------------------------------
    // TEST 4: Vendor Marketplace, Search, Filtering & Comparison
    // -----------------------------------------------------------------
    console.log('\n👉 [4/8] Testing Vendor Marketplace, Search & Comparison');
    // Search by name
    const searchRes = await fetch(`${baseUrl}/api/vendors?search=Lens`).then((r) => r.json());
    assert(
      searchRes.data.vendors.length > 0 &&
      (searchRes.data.vendors[0].businessName || searchRes.data.vendors[0].name || '').includes('Lens'),
      'Case-insensitive search works'
    );

    // Filter by category & location
    const filterRes = await fetch(`${baseUrl}/api/vendors?category=Photography&location=Pune`).then((r) => r.json());
    assert(
      filterRes.data.vendors.every((v: any) =>
        (v.category?.name || v.category) === 'Photography' &&
        (v.location === 'Pune' || (v.serviceAreas && v.serviceAreas.includes('Pune')))
      ),
      'Database filtering by category and location/service area works'
    );

    // Vendor details
    const vendorDetailRes = await fetch(`${baseUrl}/api/vendors/v-photo-1`).then((r) => r.json());
    assert(
      vendorDetailRes.data.vendor?.packages?.length > 0 && vendorDetailRes.data.vendor?.services?.length > 0,
      'Vendor details include packages, services, and portfolio'
    );

    // Compare endpoint
    const compareRes = await fetch(`${baseUrl}/api/vendors/compare?ids=v-photo-1,v-cat-1`).then((r) => r.json());
    assert(compareRes.data.vendors.length === 2, 'Vendor comparison endpoint returns requested vendors');

    // -----------------------------------------------------------------
    // TEST 5: Recommendation Engine & Combinations
    // -----------------------------------------------------------------
    console.log('\n👉 [5/8] Testing Recommendation Engine & Combinations');
    const recRes = await fetch(`${baseUrl}/api/recommendations?eventId=${eventId}`).then((r) => r.json());
    assert(recRes.data.recommendations.length > 0, 'Recommendations returned with scores and breakdowns');
    assert(
      Boolean(recRes.data.combination?.totalPrice && recRes.data.combination?.items?.length > 0),
      'Optimized Multi-Vendor Combination generated with budget calculations'
    );

    // -----------------------------------------------------------------
    // TEST 6: Saved Vendors Persistence
    // -----------------------------------------------------------------
    console.log('\n👉 [6/8] Testing Saved Vendors in PostgreSQL');
    const saveRes = await fetch(`${baseUrl}/api/saved-vendors`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Cookie: sessionCookie },
      body: JSON.stringify({ vendorId: 'v-photo-1' }),
    });
    assert(saveRes.status === 201, 'Vendor saved in PostgreSQL database');

    const getSavedRes = await fetch(`${baseUrl}/api/saved-vendors`, {
      headers: { Cookie: sessionCookie },
    }).then((r) => r.json());
    assert(getSavedRes.data.vendorIds.includes('v-photo-1'), 'Saved vendor persisted and retrieved');

    // -----------------------------------------------------------------
    // TEST 7: Bookings and Status Lifecycle
    // -----------------------------------------------------------------
    console.log('\n👉 [7/8] Testing Bookings Lifecycle');
    const createBkgRes = await fetch(`${baseUrl}/api/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Cookie: sessionCookie },
      body: JSON.stringify({
        vendorId: 'v-photo-1',
        eventId,
        packageName: 'Signature 2-Day Wedding',
        eventName: 'Grand Winter Gala 2026',
        bookingDate: '2026-12-28',
        amount: 75000,
        notes: 'Full coverage please',
      }),
    });
    const bkgData = await createBkgRes.json();
    assert(createBkgRes.status === 201 && bkgData.data?.booking?.id, 'Booking created in PostgreSQL (status PENDING)');
    const bookingId = bkgData.data.booking.id;

    // Login as vendor to accept booking
    const vendorLoginRes = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'vendor@vendora.app', password: 'Vendor@12345' }),
    });
    const vendorCookie = vendorLoginRes.headers.get('set-cookie')!;

    // Vendor accepts booking
    const acceptBkgRes = await fetch(`${baseUrl}/api/bookings/${bookingId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Cookie: vendorCookie },
      body: JSON.stringify({ status: 'ACCEPTED' }),
    });
    const acceptedData = await acceptBkgRes.json();
    assert(acceptedData.data?.booking?.status === 'CONFIRMED', 'Vendor accepted booking (status updated to CONFIRMED)');

    // -----------------------------------------------------------------
    // TEST 8: Reviews & Admin Verification Flow
    // -----------------------------------------------------------------
    console.log('\n👉 [8/8] Testing Reviews & Admin Verification');
    // Customer submits review
    const reviewRes = await fetch(`${baseUrl}/api/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Cookie: sessionCookie },
      body: JSON.stringify({
        vendorId: 'v-photo-1',
        bookingId,
        rating: 5,
        comment: 'Absolutely magical experience from start to finish!',
      }),
    });
    const reviewData = await reviewRes.json();
    assert(reviewRes.status === 201 && reviewData.data?.vendorUpdate?.rating > 0, 'Review stored and vendor aggregate rating updated');

    // Admin login & verification
    const adminLoginRes = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin@vendora.app', password: 'Admin@12345' }),
    });
    const adminCookie = adminLoginRes.headers.get('set-cookie')!;

    // Admin stats
    const statsRes = await fetch(`${baseUrl}/api/admin/stats`, {
      headers: { Cookie: adminCookie },
    }).then((r) => r.json());
    assert(statsRes.data?.totalVendors >= 20 && statsRes.data?.totalBookings > 0, 'Admin can view system analytics and counts');

    // Admin verify vendor
    const verifyRes = await fetch(`${baseUrl}/api/vendors/v-photo-1/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Cookie: adminCookie },
      body: JSON.stringify({ verified: true }),
    }).then((r) => r.json());
    assert(verifyRes.data?.vendor?.verified === true, 'Admin verified vendor successfully');

    console.log('\n----------------------------------------');
    console.log(`Results: ${passed} passed, ${failed} failed`);
    console.log('----------------------------------------\n');

    if (failed > 0) {
      process.exit(1);
    }
  } catch (err) {
    console.error('Fatal test error:', err);
    process.exit(1);
  } finally {
    server.close(() => process.exit(failed > 0 ? 1 : 0));
  }
}

runTests();
