# Layer 2: Frontend Layer Architecture

## 1. Overview of the Frontend

The **Frontend Layer** is the client-facing single-page application (SPA) running entirely in the user's web browser. It is responsible for delivering a fluid, responsive, accessible, and fast user experience across desktop monitors, tablets, and smartphones.

Rather than traditional multi-page applications that trigger a full page reload for every navigation, Vendora uses a modern component-driven SPA architecture. The browser loads the initial HTML bundle once; subsequent page transitions, filtering, search operations, and modal interactions occur dynamically in memory through client-side routing and virtual DOM updates.

---

## 2. Technology Stack & Technical Rationale

| Technology | Version | Purpose in Vendora | Technical Rationale (Why this was chosen) |
| :--- | :--- | :--- | :--- |
| **React** | `^18.3.1` | UI Library & Component Engine | Virtual DOM reconciliation, declarative component state, hooks (`useState`, `useEffect`, `useMemo`, `useCallback`), and concurrent rendering features. |
| **TypeScript** | `~5.6.2` | Programming Language | Adds strict compile-time type checking to JavaScript. Prevents `undefined is not a function` errors, enforces strict props interfaces on components, and guarantees type consistency with backend entities. |
| **Vite** | `^6.0.1` | Build Tool & Local Dev Server | Powered by native ES modules (ESM) and Rollup. Provides near-instantaneous Hot Module Replacement (HMR, under 50ms) during development and highly optimized, tree-shaken production bundles. |
| **Tailwind CSS** | `^3.4.15` | Utility-First Styling System | Enables rapid UI development directly in JSX classes without writing separate bloated `.css` files. Automatically purges unused CSS in production, resulting in tiny stylesheet payloads (~60KB raw, ~10KB gzipped). |
| **React Router DOM** | `^6.28.0` | Client-Side SPA Routing | Enables seamless URL management, deep linking, nested routing layouts (`<DashboardLayout />`), protected navigation guards, and dynamic parameter parsing (`/vendors/:id`). |
| **Lucide React** | `^0.475.0` | Iconography System | High-performance, tree-shakable SVG icon library providing crisp, scalable visual cues (e.g., `Shield`, `Star`, `Award`, `Mic2`, `Paintbrush`, `Camera`). |
| **clsx & tailwind-merge**| `^2.1.1` & `^2.5.4` | Class Name Condensation | Allows dynamic composition of conditional Tailwind CSS utility classes without conflicts (e.g., resolving `p-4` vs `p-2` cleanly). |

---

## 3. Directory Structure & Architecture Breakdown

The frontend codebase is organized under `src/` following domain-driven and component-driven conventions:

```
src/
├── components/          # Reusable, atomic UI widgets
│   ├── auth/            # AuthModal, ProtectedRoute, RoleGuard
│   ├── booking/         # BookingModal, BookingCard, StatusBadge
│   ├── common/          # Button, Input, Modal, Badge, Toast
│   ├── event/           # EventTimeline, BudgetEstimator, Checklist
│   ├── layout/          # Navbar, Footer, MobileDrawer
│   ├── reviews/         # StarRating, ReviewForm, ReviewList
│   └── vendor/          # VendorCard, VendorFilterBar, ImageGallery
├── context/             # Global React Context providers (AuthContext, ThemeContext)
├── data/                # In-memory rich fallback dataset (vendors.ts with 110 listings)
├── layouts/             # Page wrappers and shells (DashboardLayout.tsx)
├── pages/               # Routed page views
│   ├── admin/           # AdminDashboardPage.tsx (Governance, Audits)
│   ├── vendor/          # VendorDashboardPage.tsx (Merchant Hub, Bookings)
│   ├── LandingPage.tsx  # Hero, Featured Vendors, Category Cards
│   ├── VendorsPage.tsx  # Filterable Catalog with Search & Pagination
│   ├── VendorDetailPage.tsx # Vendor Profile, Packages, Reviews, Inquiry
│   ├── NewEventPage.tsx # Event Wizard (Weddings, Retirements, Birthdays)
│   └── RecommendationsPage.tsx # Algorithmic recommendation engine
├── services/            # Client-side API abstraction layer (api.ts, vendorService.ts)
├── types/               # TypeScript interfaces and enum declarations (index.ts)
└── utils/               # Formatting helpers (currency, date, text helpers)
```

---

## 4. Key Architectural Patterns in the Frontend

### A. Role-Specific Visual Theming (Vendor vs. Admin Panels)
To prevent operational mistakes and ensure that administrative actions are clearly distinguished from merchant tools, the dashboard UI features dedicated styling per role:

1. **Vendor Portal ("Merchant Hub"):**
   - **Visual Identity:** Warm Obsidian & Amber Gold (`#181512` background, amber accents).
   - **Header Banner:** Displays *"Merchant Operations"* alongside a live green badge indicator and dynamic business name.
   - **Capabilities:** Package pricing, calendar availability, booking approvals, and customer inquiries.

2. **Admin Portal ("Root Governance"):**
   - **Visual Identity:** Deep Slate & Security Indigo (`#0f172a` slate background, zinc/cyan borders).
   - **Header Banner:** Displays *"Vendora Root Governance"* with a `Shield` security badge and pending compliance counters.
   - **Capabilities:** System audit log inspection, vendor verification toggles, platform-wide user control.

3. **Customer Portal:**
   - **Visual Identity:** Clean, warm parchment and modern cream background for intuitive browsing, bookmarking, and event planning.

### B. Dynamic Filtering & Search Engine
The catalog in `VendorsPage.tsx` features instant, client-side and server-supported multi-criteria filtering:
- **Category Filter:** 11 distinct categories (`Photography`, `Catering`, `Decoration`, `Venue`, `Makeup`, `DJ`, `Videography`, `Event Planning`, `Shadow`, `Live Painting`, `Anchors`).
- **City / Location Filter:** Filter by metropolitan hubs (Delhi NCR, Mumbai, Bengaluru, Jaipur, etc.).
- **Price Range & Rating Slicing:** Real-time range sliders filtering vendors by base pricing and minimum star rating (e.g., 4.5+ stars).
- **Search Query:** Substring keyword search across business names, bios, and service tags.

### C. The 110-Listing Curated Vendor Dataset (`src/data/vendors.ts`)
The application is pre-populated with **exactly 10 realistic, fully detailed vendor listings per category across all 11 categories (110 total listings)**:
- Each listing includes high-resolution Unsplash imagery (hero image + 3 portfolio gallery images), structured tiered pricing (`Silver`, `Gold`, `Platinum`), verified review history, location coordinates, and operational tags.
- This ensures that during a live demo or viva, the user can click through any category and showcase rich, varied content with zero blank screens or placeholder errors.

### D. Offline Resilience & Dual-Mode Fallback
The frontend uses an intelligent fallback mechanism:
- When the Express backend and PostgreSQL database are online, the client communicates via REST endpoints.
- If the backend is temporarily offline or running in a standalone preview mode, the client gracefully falls back to the in-memory dataset and mock session, ensuring that **the demonstration will never crash in front of examiners**.

---

## 5. How to Explain This Layer in Your Viva / Presentation

> *"In the frontend layer, we built a responsive Single Page Application using React 18, TypeScript, and Vite. We chose Tailwind CSS for streamlined styling and tiny production bundle sizes (~60KB). The frontend enforces clean role-based user interfaces: our Vendor Merchant Hub uses a distinctive warm obsidian and amber palette for business operations, while the Admin Governance panel uses a deep slate security layout. All 11 categories—including our newest categories like Shadow performers, Live Painting, and Anchors—as well as the Retirement event type are fully integrated with real-time filtering, responsive modal booking workflows, and strong TypeScript interfaces."*
