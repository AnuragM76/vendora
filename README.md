# VENDORA — AI-Powered Event Vendor Recommendation & Comparison Platform

> *"Plan your perfect event. Find the perfect vendors."*

A production-quality frontend prototype for an intelligent event planning and vendor discovery platform built for modern celebrations in India (Weddings, Engagements, Anniversaries, Corporate Galas, and Milestone Parties).

---

## 🌟 Key Highlights & Product Story

VENDORA is designed around the core principle:

> **"An intelligent event planning assistant that happens to have a vendor marketplace."**

The platform guides users through an intuitive discovery and booking lifecycle:
`DISCOVER` ➔ `UNDERSTAND` ➔ `COMPARE` ➔ `DECIDE` ➔ `BOOK`

---

## 🚀 Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS (Sophisticated palette: Warm Ivory `#FAF8F5`, Deep Charcoal `#171717`, Coral Terracotta `#C96B55`, Muted Gold `#C9A45C`, AI Violet `#7667C8`)
- **Typography**: Google Fonts (*Plus Jakarta Sans* for UI, *Playfair Display* for editorial headings)
- **Icons**: Lucide React
- **Routing**: React Router DOM (v6)
- **State & Persistence**: React Context API (`AppContext`) + `localStorage` for saving vendors, comparisons, active event plans, and bookings.

---

## ✨ Features Implemented

1. **Cinematic Hero & Planning Search Widget**:
   - Live query generator for event type, Indian city (Pune, Mumbai, Bengaluru, Nashik, Hyderabad), budget caps, and vendor categories.
2. **AI Recommendation & Compatibility Engine**:
   - Multi-factor algorithmic scoring (70–98%) factoring budget fit, location proximity, verified customer ratings, aesthetic style alignment, and calendar availability.
   - Transparent *"Why this vendor?"* modal breaking down the 5 weighted dimensions.
3. **Vendor Comparison Matrix (`/compare`)**:
   - Side-by-side comparison for up to 4 vendors.
   - Highlights best value, top rated, and highest experience.
   - Floating comparison tray persisting across routes with quick-clear and removal actions.
   - AI Decision Support synthesis providing automated recommendation reasons.
4. **Interactive Vendor Profiles (`/vendors/:id`)**:
   - High-resolution masonry photo gallery.
   - Tiered packages (*Essential*, *Signature / Premium*, *Luxury Heritage*) with deliverable feature checklists.
   - Interactive availability calendar showing booked vs available dates.
   - Verified review breakdowns with 5-star rating distributions.
   - One-click booking request modal with simulated submission and instant notification.
5. **Multi-Step Event Creation Wizard (`/events/new`)**:
   - 6-step guided wizard: Event Type ➔ Logistics & Date ➔ Interactive Budget Slider with automatic category allocation breakdown (Venue 30%, Catering 28%, Photography 18%, Decor 14%, Other 10%) ➔ Vendor Pillars ➔ Style Preferences ➔ Summary review.
6. **Customer Event Planning Dashboard (`/dashboard`)**:
   - Real-time budget utilization meter (Allocated vs Remaining).
   - Milestone progress tracker across vendor pillars.
   - Smart bundle recommendations (e.g. Photography + Decor combo saving ₹18,000).
   - Shortlisted vendors and upcoming booking cards.
7. **Role-Based Portals**:
   - **Customer Portal**: Planning, recommendations, saved vendors, bookings, profile.
   - **Vendor Portal (`/vendor/dashboard`)**: Profile completeness, booking requests (Accept / Decline actions), package manager, portfolio manager, availability calendar.
   - **Admin Portal (`/admin`)**: Platform KPI metrics (3,420 users, 148 vendors, ₹4.82 Cr volume), and vendor verification compliance table (Verify / Reject controls).
8. **Interactive Notifications**:
   - Live dropdown in navbar notifying users of booking status updates, AI match recommendations, and budget thresholds.

---

## 🧭 Routes Overview

### Public Routes
| Route | Description |
|---|---|
| `/` | Landing page with Hero search widget, category showcases, AI match preview, comparison preview, steps & testimonials |
| `/vendors` | Vendor discovery marketplace with live filters (category, city, price range, rating, experience, styles, verified only), sorting, and search |
| `/vendors/:id` | Comprehensive vendor profile with gallery, packages, availability calendar, reviews, and booking modal |
| `/compare` | Side-by-side comparison matrix with standout badges and AI decision support synthesis |
| `/about` | Product mission, Indian event tech story, and core principles |
| `/login` | Authentication page with 1-click demo role switcher |
| `/register` | Registration form with Customer vs Vendor account selection |

### Customer Dashboard Routes
| Route | Description |
|---|---|
| `/dashboard` | Main personal event planning command center |
| `/events` | List of events with active target switcher |
| `/events/new` | 6-step event wizard with budget allocation slider |
| `/recommendations` | Personalized AI recommendation engine with match breakdowns & smart packages |
| `/saved` | Saved shortlist with Grid / List view toggle |
| `/bookings` | Booking requests and contracts with status tabs & simulated downloads |
| `/profile` | Host personal details and aesthetic style preferences |
| `/settings` | Alert preferences and platform settings |

### Vendor & Admin Routes
| Route | Description |
|---|---|
| `/vendor/dashboard` | Vendor business hub with booking requests, packages, portfolio, and calendar |
| `/admin` | Admin dashboard with platform metrics and vendor verification pipeline |

---

## 👥 Demo Accounts (1-Click Switcher)

A dedicated demo switcher is integrated directly into the top banner of the application and on the login page:

| Role | Email | Password | Primary Experience |
|---|---|---|---|
| **Customer** | `demo@vendora.app` | `demo123` | Event Planning Command Center & Recommendations |
| **Vendor** | `vendor@vendora.app` | `demo123` | Lens & Light Studio Partner Hub & Booking Requests |
| **Admin** | `admin@vendora.app` | `demo123` | Platform Metrics & Vendor Verification Pipeline |

---

## 🗂️ Project Structure

```text
Major Project/
├── index.html                     # HTML entry point with luxury fonts (Playfair Display & Plus Jakarta Sans)
├── package.json                   # Dependencies (React, Lucide, Tailwind, React Router)
├── tailwind.config.js             # Sophisticated Indian event-tech color system & radius tokens
├── tsconfig.json                  # TypeScript compiler settings
├── vite.config.ts                 # Vite bundler configuration
└── src/
    ├── types/
    │   └── index.ts               # Core domain interfaces (Vendor, EventPlan, Booking, Package, etc.)
    ├── data/
    │   ├── vendors.ts             # 22 realistic Indian vendor datasets across 8 categories & 5 cities
    │   ├── events.ts              # Default event plans & sample event templates
    │   ├── bookings.ts            # Realistic bookings with Confirmed/Pending statuses
    │   └── users.ts               # Demo accounts for Customer, Vendor, and Admin
    ├── services/
    │   ├── vendorService.ts       # Marketplace filtering, search, and sorting logic
    │   ├── recommendationService.ts # Multi-criteria AI compatibility algorithm & explanation builder
    │   ├── eventService.ts        # Event persistence & retrieval abstraction
    │   ├── bookingService.ts      # Booking creation & status updates with localStorage
    │   └── authService.ts         # Authentication & role switching abstraction
    ├── context/
    │   └── AppContext.tsx         # Central state for saved vendors, comparisons, bookings & notifications
    ├── components/
    │   ├── common/
    │   │   ├── VerifiedBadge.tsx
    │   │   ├── RatingDisplay.tsx
    │   │   ├── PriceDisplay.tsx
    │   │   ├── MatchScoreBadge.tsx
    │   │   ├── AiMatchBreakdownModal.tsx
    │   │   └── CompareTray.tsx
    │   ├── vendor/
    │   │   ├── VendorCard.tsx
    │   │   └── FilterSidebar.tsx
    │   └── layout/
    │       ├── Navbar.tsx
    │       ├── Footer.tsx
    │       └── NotificationDropdown.tsx
    ├── layouts/
    │   ├── MainLayout.tsx         # Public layout with Navbar, Footer & floating CompareTray
    │   └── DashboardLayout.tsx    # Responsive sidebar layout for Customer, Vendor, and Admin
    └── pages/
        ├── LandingPage.tsx
        ├── VendorDiscoveryPage.tsx
        ├── VendorDetailPage.tsx
        ├── ComparePage.tsx
        ├── RecommendationsPage.tsx
        ├── NewEventPage.tsx
        ├── CustomerDashboardPage.tsx
        ├── SavedVendorsPage.tsx
        ├── BookingsPage.tsx
        ├── CustomerProfilePage.tsx
        ├── EventsListPage.tsx
        ├── SettingsPage.tsx
        ├── AboutPage.tsx
        ├── auth/
        │   ├── LoginPage.tsx
        │   └── RegisterPage.tsx
        ├── vendor/
        │   └── VendorDashboardPage.tsx
        └── admin/
            └── AdminDashboardPage.tsx
```

---

## 🔌 Future Backend Integration Ready

All operations are modeled via service abstractions (`vendorService`, `recommendationService`, `eventService`, `bookingService`, `authService`).

When migrating to a real backend in the future:
1. Replace mock calls in `src/services/` with `fetch()` or `axios` API calls:
   ```typescript
   // Current frontend prototype:
   getVendors: (filters) => { return filterLocalVendors(filters); }

   // Future backend integration:
   getVendors: async (filters) => {
     const res = await fetch(`/api/vendors?${new URLSearchParams(filters)}`);
     return res.json();
   }
   ```
2. Replace `calculateVendorMatch()` with your machine learning or vector search recommendation microservice (`GET /api/recommendations?eventId=...`).
3. Point `bookingService.createBooking()` to your backend reservation & payment gateway service.

---

## 💻 How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation & Launch
```bash
# 1. Install dependencies
npm install

# 2. Start the Vite development server
npm run dev

# 3. Open in your browser
http://localhost:5173
```

### Production Build
```bash
npm run build
npm run preview
```
