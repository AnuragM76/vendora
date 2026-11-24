# Layer 6: Viva & External Presentation Cheat Sheet

This document is your secret weapon for your presentation and viva with the external examiner tomorrow. It contains direct answers to tough technical questions, comparison tables, and a structured 3-minute presentation script.

---

## 🎤 The 3-Minute Presentation Script (Read or Memorize This)

### Step 1: Introduction (30 seconds)
> *"Good morning, esteemed examiners. Today, I am proud to present **Vendora**, an enterprise-grade multi-vendor event marketplace platform. Organizing an event—whether a wedding, corporate conference, or retirement ceremony—is notoriously fragmented. Clients struggle to find trusted service providers, compare transparent packages, and coordinate bookings. Vendora solves this through an end-to-end digital marketplace uniting customers, service vendors, and platform administrators."*

### Step 2: System Architecture & Layer Breakdown (60 seconds)
> *"To ensure scalability, security, and maintainability, we designed Vendora using a strict 4-tier decoupled architecture:*
> 1. *Our **Frontend Layer** is built with **React 18, TypeScript, and Vite**, utilizing **Tailwind CSS**. We have built distinct user experiences: a warm merchant hub for vendors and a deep slate governance panel for administrators.*
> 2. *Our **API & Communication Layer** uses **Express Router** with **Zod schema validation**, ensuring incoming payloads are strictly verified before reaching domain logic, and **HttpOnly signed cookies** to prevent XSS attacks.*
> 3. *Our **Backend Layer** operates on **Node.js and TypeScript** with a Controller-Service design pattern. Passwords are secured using **Argon2id**, the gold standard in cryptographic hashing.*
> 4. *Our **Database & Persistence Layer** is powered by **PostgreSQL 16** via **Prisma ORM**, guaranteeing full ACID compliance, foreign-key relational integrity, and type-safe database queries."*

### Step 3: Core Features & Live Demo Highlights (60 seconds)
> *"In our live platform, we support **11 distinct service categories**—including traditional ones like Photography, Catering, and Venues, as well as specialized modern offerings like **Live Painting, Anchors, and Shadow performers**—with **110 fully populated vendor listings**. We also support milestone event planning, including the newly added **Retirement** event type. Let us demonstrate how a customer books a vendor, how the vendor receives the notification in their merchant hub, and how an administrator audits the transaction."*

### Step 4: Conclusion (30 seconds)
> *"Vendora is fully tested with automated end-to-end integration test suites and is deployed with production builds. I am now open to your questions and technical discussions. Thank you."*

---

## ❓ Top 10 Technical Questions External Examiners Love to Ask

### Q1: *"Why did you choose PostgreSQL over MongoDB (NoSQL)?"*
- **Ideal Answer:**
  > *"Event marketplaces are inherently relational. A customer places a booking for a specific vendor; that vendor offers specific packages in predefined categories; and reviews must strictly tie to completed bookings. PostgreSQL provides foreign-key integrity, ACID transaction guarantees (critical for preventing double-bookings), and complex JOIN capabilities. In a document database like MongoDB, maintaining consistency across bookings, vendor reviews, and user roles would require error-prone application-level code without native ACID guarantees."*

---

### Q2: *"Why did you use Prisma ORM instead of writing raw SQL or using Sequelize/Mongoose?"*
- **Ideal Answer:**
  > *"Prisma provides true end-to-end type safety. When we define our schema in `schema.prisma`, Prisma automatically generates a TypeScript client whose types mirror the database exactly. If we rename or modify a column, the TypeScript compiler immediately catches every broken reference across the backend at compile time, eliminating an entire class of runtime SQL syntax errors. Additionally, Prisma handles migrations deterministically and protects against SQL injection through automatic parameterization."*

---

### Q3: *"How is user authentication secured? Why not just use JWT in `localStorage`?"*
- **Ideal Answer:**
  > *"Storing JWTs in `localStorage` is vulnerable to Cross-Site Scripting (XSS)—any malicious script running in the browser can read `localStorage` and steal the token. In Vendora, we use **server-side stateful sessions stored in PostgreSQL**, delivered via **HttpOnly, Secure, SameSite cookies**. JavaScript cannot read `HttpOnly` cookies, preventing XSS token theft. Furthermore, if an account is compromised, an administrator can instantly revoke the session in the database, which is impossible with stateless JWTs until they expire."*

---

### Q4: *"Why did you use Argon2id instead of bcrypt for password hashing?"*
- **Ideal Answer:**
  > *"Argon2id won the international Password Hashing Competition (PHC). While bcrypt is CPU-bound, Argon2id is **memory-hard**. It requires both significant CPU cycles and dedicated RAM (64 MB in our configuration) to compute. This makes Argon2id mathematically immune to mass cracking on specialized GPU clusters and ASIC hardware, providing enterprise-grade security for user credentials."*

---

### Q5: *"What is Zod, and what problem does it solve in your API layer?"*
- **Ideal Answer:**
  > *"TypeScript types only exist at compile time; once code is compiled to JavaScript and runs in production, type information disappears. Zod provides **runtime validation**. When a user sends a JSON payload to `/api/bookings`, Zod verifies that `eventDate` is a valid date, `guestCount` is a positive integer, and `eventType` matches our allowed enum. If invalid data is sent, Zod halts the request immediately with clear error messages before any database or backend code is executed."*

---

### Q6: *"How do you differentiate between Customer, Vendor, and Admin users?"*
- **Ideal Answer:**
  > *"We enforce multi-tenancy at two levels:*
  > 1. *At the **backend level**, we use **Role-Based Access Control (RBAC)** middleware (`requireRole('VENDOR')`, `requireRole('ADMIN')`). Unauthorized users receive a `403 Forbidden` response.*
  > 2. *At the **frontend level**, each role has a distinct visual workspace: Customers have a browsing and planning interface, Vendors operate in an obsidian-and-amber 'Merchant Hub' to manage packages and bookings, and Admins operate in a slate governance portal to review audit logs and approve vendors."*

---

### Q7: *"What happens if two customers try to book the same vendor for the same date?"*
- **Ideal Answer:**
  > *"Our backend runs booking creation through an atomic transactional check. Before a booking status is transitioned to `CONFIRMED`, our service queries existing confirmed bookings for that `vendorId` on that `eventDate`. If a conflicting confirmed booking exists, the transaction aborts and returns a conflict error, preventing double-bookings."*

---

### Q8: *"Why did you use Vite instead of Create React App (CRA)?"*
- **Ideal Answer:**
  > *"Create React App is officially deprecated by the React team and relies on slow Webpack bundling that re-bundles code on every change. Vite uses native browser ES Modules (ESM) and Esbuild written in Go. This results in instant server startups (< 300ms) and lightning-fast Hot Module Replacement (HMR < 50ms), drastically speeding up development while producing smaller, highly optimized production bundles with Rollup."*

---

### Q9: *"How are fake reviews prevented on the platform?"*
- **Ideal Answer:**
  > *"Vendora enforces a strict domain rule: a review can only be submitted if it is linked to a valid `bookingId` whose status is `COMPLETED`, and the author must be the `customerId` associated with that booking. Furthermore, a unique constraint on `bookingId` in our database schema ensures that one booking can never receive more than one review."*

---

### Q10: *"What are the new categories and features added to the platform recently?"*
- **Ideal Answer:**
  > *"We recently expanded our marketplace with three high-demand specialized categories:*
  > 1. ***Shadow Performers:** Visual shadow-play artists for storytelling.*
  > 2. ***Live Painting:** Fine artists who paint wedding/milestone moments in real-time.*
  > 3. ***Anchors / Emcees:** Professional stage hosts for corporate and private galas.*
  > *Each category features 10 complete vendor listings with pricing tiers and portfolio photos (giving 110 listings total across all 11 categories). We also integrated **Retirement** as a primary milestone event type across the booking wizard and recommendation engine."*
