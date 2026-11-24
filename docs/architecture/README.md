# Vendora Architecture & System Layers Documentation

Welcome to the comprehensive architecture documentation for **Vendora: The Multi-Vendor Event Services Marketplace**.

This documentation is structured into dedicated layer guides designed for technical presentations, system walkthroughs, and viva / project defense sessions with external evaluators. Each guide uses plain, accessible English while diving deep into technical specifics, architectural patterns, design decisions, and real-world code implementations.

---

## 📚 Documentation Index

1. **[01_SYSTEM_OVERVIEW.md](./01_SYSTEM_OVERVIEW.md)**
   - High-level 4-tier architectural blueprint.
   - Request-response lifecycle (from browser click to PostgreSQL disk write).
   - Core capabilities, actors, and overall system topology.
   - Quick reference cheat sheet for presentation day.

2. **[02_FRONTEND_LAYER.md](./02_FRONTEND_LAYER.md)**
   - **Tech Stack:** React 18, TypeScript 5.6, Vite 6, Tailwind CSS 3.4, Lucide Icons.
   - Client architecture, Single Page Application (SPA) routing with React Router 6.
   - State management, dynamic multi-step booking forms, recommendations engine UI.
   - Role-specific UI partitioning (Customer vs. Vendor Obsidian Hub vs. Admin Slate Governance).
   - Responsive layouts, client-side caching, and offline demo fallback resilience.

3. **[03_API_AND_COMMUNICATION_LAYER.md](./03_API_AND_COMMUNICATION_LAYER.md)**
   - **Tech Stack:** RESTful JSON APIs, Vite Reverse Proxy, CORS, Cookie-Parser, Zod schemas.
   - Communication protocols, request routing, and payload serialization.
   - Cookie-based authentication (`vendora_session`) with `httpOnly`, `sameSite: 'lax'`, and cryptographic signing.
   - Input validation pipelines using Zod (intercepting invalid data before it reaches the backend).
   - Security headers (Helmet CSP, HSTS, X-Frame-Options) and rate-limiting / error handling.

4. **[04_BACKEND_LAYER.md](./04_BACKEND_LAYER.md)**
   - **Tech Stack:** Node.js (v20+), Express.js 4, TypeScript, Argon2id, UUID v4.
   - Controller-Service design pattern and separation of concerns.
   - Authentication system: Argon2id hashing parameters, stateful session management, role-based access control (RBAC).
   - Core domain business logic: Booking lifecycle (PENDING → CONFIRMED → COMPLETED), Review rating calculation, and audit trail generation.
   - Error handling middleware and graceful shutdown procedures.

5. **[05_DATABASE_AND_PERSISTENCE_LAYER.md](./05_DATABASE_AND_PERSISTENCE_LAYER.md)**
   - **Tech Stack:** PostgreSQL 16 (Neon Serverless), Prisma ORM 6.19.3, Prisma Migrate, Connection Pooling.
   - Entity-Relationship (ER) model and schema architecture: User, VendorProfile, Category, Booking, Review, AuditLog.
   - Foreign key integrity, cascade delete constraints, and performance indexing.
   - ACID transaction guarantees (preventing double-bookings, atomic review aggregations).
   - Database migrations, seeding pipeline, and cold-start connection pooling resilience.

6. **[06_VIVA_AND_EXTERNAL_PRESENTATION_CHEATSHEET.md](./06_VIVA_AND_EXTERNAL_PRESENTATION_CHEATSHEET.md)**
   - Expected external examiner questions and clear, confident answers.
   - Architecture justifications: *"Why React over Angular?", "Why PostgreSQL over MongoDB?", "Why Prisma over raw SQL?", "Why Argon2 over bcrypt?"*
   - Step-by-step 3-minute presentation script and demo flow.

---

## 🏛️ High-Level 4-Tier Architecture Diagram

```
+-------------------------------------------------------------------------------+
|                             1. FRONTEND LAYER                                 |
|   React 18 + TypeScript + Vite + Tailwind CSS + Lucide React + React Router   |
|   [Customer Portal]    |    [Vendor Merchant Hub]    |   [Admin Governance]   |
+-------------------------------------------------------------------------------+
                                      |
                      HTTPS REST / JSON / HTTP-Only Cookies
                                      |
+-------------------------------------------------------------------------------+
|                      2. API & COMMUNICATION LAYER                             |
|   Express Router | Vite Proxy (/api) | Zod Schema Validation | Helmet | CORS  |
+-------------------------------------------------------------------------------+
                                      |
                        Decoded & Validated Invocations
                                      |
+-------------------------------------------------------------------------------+
|                              3. BACKEND LAYER                                 |
|   Node.js + Express Services | Argon2id Auth | RBAC Guard Middleware | UUID   |
|   [AuthService]  |  [VendorService]  |  [BookingService]  |  [ReviewService]  |
+-------------------------------------------------------------------------------+
                                      |
                             Type-Safe ORM Calls
                                      |
+-------------------------------------------------------------------------------+
|                     4. DATABASE & PERSISTENCE LAYER                           |
|   Prisma ORM 6 (Type-safe client & migrations) | Connection Pool (pgBouncer)  |
|   PostgreSQL 16 on Neon Database (ACID, Relational, B-Tree Indexes)           |
+-------------------------------------------------------------------------------+
```

---

## 🎯 How to Use This Documentation for Your Presentation

- **Start with `01_SYSTEM_OVERVIEW.md`** for a 60-second summary to set the context for the external evaluator.
- **Deep-dive into each individual layer file** (`02` to `05`) when the examiner asks specific questions about code structure, data flow, or technology choices.
- **Review `06_VIVA_AND_EXTERNAL_PRESENTATION_CHEATSHEET.md`** before walking into the presentation hall to rehearse common questions and justifications.
