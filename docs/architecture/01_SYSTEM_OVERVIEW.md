# Layer 1: System Overview & Architecture Blueprint

## 1. What is Vendora?

**Vendora** is a production-ready, full-stack multi-vendor marketplace platform built specifically for event services. It bridges the gap between clients organizing events (such as Weddings, Corporate Galas, Birthdays, Anniversaries, and Retirements) and service providers offering specialized event services (such as Photography, Catering, Decoration, Venues, Live Painting, Anchors, DJ, and Shadow performers).

The system enforces strict multi-tenancy with **three distinct actor roles**:
1. **Customers (Event Organizers / Clients):** Explore vendors across 11 categories, compare pricing and packages, request tailored quotes, build budget-aware event schedules, and book verified service providers.
2. **Vendors (Service Providers / Merchants):** Manage business portfolios, showcase high-resolution image galleries, set dynamic package pricing, review booking requests, accept/reject inquiries, and track revenue.
3. **Administrators (Platform Governance):** Monitor system health, approve/verify newly registered vendors, review platform-wide audit logs, audit dispute resolutions, and maintain category catalogs.

---

## 2. The 4-Tier Architectural Topology

Vendora follows an enterprise-standard **4-Tier Layered Architecture**. The four layers are decoupled, meaning changes to the database engine or UI styling can occur independently without breaking the contract between components.

```
       [ Client Browser (Desktop / Tablet / Mobile) ]
                              │
══════════════════════════════╪═════════════════════════════════════
  LAYER 1: FRONTEND LAYER     │  React 18 + Vite + Tailwind CSS
══════════════════════════════╪═════════════════════════════════════
  • Client-side routing (React Router 6)
  • State management & Local Caching
  • Distinct UI themes: Customer (Amber/Warm) vs. Vendor (Obsidian) vs. Admin (Slate)
  • Dynamic multi-step forms & recommendations
                              │
                              ▼  (HTTPS / REST / JSON / Cookies)
══════════════════════════════╪═════════════════════════════════════
  LAYER 2: API & COMM LAYER   │  Express Router + Reverse Proxy + Zod
══════════════════════════════╪═════════════════════════════════════
  • Reverse proxy configuration (Vite /api bridge)
  • Zod schema validation pipelines
  • Cookie-based session extraction (Signed HttpOnly cookies)
  • Cross-Origin Resource Sharing (CORS) & Security headers (Helmet)
                              │
                              ▼  (Clean, Type-Safe Domain Requests)
══════════════════════════════╪═════════════════════════════════════
  LAYER 3: BACKEND LAYER      │  Node.js + Express + TypeScript
══════════════════════════════╪═════════════════════════════════════
  • Controller-Service architecture pattern
  • Authentication engine (Argon2id hashing + Stateful Sessions)
  • Role-Based Access Control (RBAC middleware)
  • Domain Business logic: Bookings, Reviews, Approvals, Audit Trails
                              │
                              ▼  (Type-Safe Prisma Queries)
══════════════════════════════╪═════════════════════════════════════
  LAYER 4: DATABASE LAYER     │  PostgreSQL 16 + Prisma ORM
══════════════════════════════╪═════════════════════════════════════
  • Serverless PostgreSQL (Neon Database)
  • Strongly typed Prisma ORM schema (Users, Vendors, Categories, Bookings, Reviews)
  • Foreign-key relational integrity, Cascades, and B-Tree Indexes
  • ACID transaction isolation for booking state transitions
```

---

## 3. End-to-End Request-Response Lifecycle Walkthrough

To explain the flow smoothly to an external examiner, walk through what happens when a customer books a vendor:

1. **User Action (Frontend):**
   - The customer navigates to `/vendors/:id`, selects the "Gold Package", chooses an event date (e.g., `2026-12-15`), specifies the event type (`Retirement`), and clicks **"Submit Booking Request"**.
2. **Client Preparation (Frontend):**
   - The frontend validates form inputs locally (date cannot be in the past; package must be selected).
   - An asynchronous `fetch('/api/bookings', { method: 'POST', credentials: 'include', body: JSON.stringify(payload) })` request is dispatched.
3. **Transport & Proxy (API Layer):**
   - In development, the Vite dev server intercepts `/api/*` and proxies it to `http://localhost:3000`. In production, Express serves or handles `/api/*` directly.
   - The request passes through `cors()`, `helmet()` (security headers), and `cookieParser()` which extracts and cryptographically unsigns the `vendora_session` cookie.
4. **Validation & Authorization (API & Backend Layer):**
   - The route passes through the `authRequired` middleware. If no valid session token exists, it immediately returns `401 Unauthorized`.
   - The request body is piped into `bookingCreateSchema.safeParse(req.body)` using **Zod**. If any field is malformed (e.g., invalid date format), it returns `400 Bad Request` with structured error details.
5. **Business Logic Execution (Backend Layer):**
   - The `bookingService.createBooking()` method executes.
   - It checks whether the vendor exists and is active.
   - It verifies that the customer is not booking their own vendor profile.
   - It calculates the total price based on the selected package and initiates an audit log entry.
6. **Persistence & Transactions (Database Layer):**
   - Prisma runs an atomic query:
     ```prisma
     await prisma.booking.create({
       data: {
         customerId,
         vendorId,
         eventDate: new Date(payload.eventDate),
         eventType: payload.eventType,
         packageId: payload.packageId,
         status: 'PENDING',
         totalAmount: calculatedAmount
       }
     });
     ```
   - PostgreSQL creates the record, enforces foreign key constraints against `User` and `VendorProfile`, and assigns a UUID primary key.
7. **Response & UI Refresh (Frontend):**
   - Express responds with `201 Created` containing the booking object.
   - The React frontend receives the response, updates the local state, dismisses the modal, and shows a success toast notification: *"Your booking request was submitted! The vendor will review it shortly."*

---

## 4. Key Highlights for Tomorrow's Presentation

| Feature | How it is implemented | Why it matters to the evaluator |
| :--- | :--- | :--- |
| **Full Type Safety** | TypeScript across Frontend, Backend, and Prisma ORM | Zero runtime type mismatches; API contracts are strictly defined. |
| **Enterprise Security** | Argon2id password hashing + HttpOnly signed cookies | Eliminates XSS token theft common in simple `localStorage` JWT tutorials. |
| **Multi-Tenancy** | 3 independent user experiences (Customer, Vendor, Admin) | Demonstrates real marketplace operations beyond a basic CRUD app. |
| **ACID Compliance** | PostgreSQL relational database with Prisma transactions | Guarantees data consistency, audit trails, and strict referential integrity. |
| **Resilience / Fallback** | Dual-mode data fetching (PostgreSQL live with fallback demo seed) | The presentation will never freeze even if external network/database experiences hiccups. |
