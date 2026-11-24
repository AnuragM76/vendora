# Layer 5: Database & Persistence Layer Architecture

## 1. Overview of the Persistence Layer

The **Database & Persistence Layer** is the foundation of Vendora, providing durable, ACID-compliant storage for all marketplace assets, user accounts, business profiles, bookings, reviews, and security audit records.

Vendora couples **PostgreSQL 16** (hosted on Neon Serverless) with **Prisma ORM 6**. This combination provides the strict relational integrity of SQL with the productivity and compile-time type safety of TypeScript.

---

## 2. Technology Stack & Technical Rationale

| Technology | Version | Purpose in Vendora | Technical Rationale (Why this was chosen) |
| :--- | :--- | :--- | :--- |
| **PostgreSQL** | `16.x` | Relational Database Management System (RDBMS) | Full ACID compliance, foreign key constraints, high-performance B-tree indexing, and relational table structures ideal for multi-vendor marketplaces. |
| **Neon Database** | `Serverless` | Cloud PostgreSQL Host | Modern cloud architecture with autoscaling, zero-maintenance branching, and integrated PgBouncer connection pooling. |
| **Prisma ORM** | `^6.19.3` | Object-Relational Mapping (ORM) | Declarative schema modeling (`schema.prisma`), automated SQL migration generation (`prisma migrate`), and auto-generated type-safe database queries. Eliminates SQL injection vulnerabilities entirely. |
| **Prisma Client** | `^6.19.3` | Type-Safe Database Client | Generates TypeScript interfaces mirroring the exact database schema at compile-time. If a column name changes in SQL, TypeScript catches all broken references across the app before deployment. |

---

## 3. Entity-Relationship (ER) Model & Schema Architecture

Below is the relational mapping of the Vendora database:

```
┌──────────────────┐               ┌────────────────────────┐
│      User        │ 1           1 │     VendorProfile      │
│──────────────────│───────────────│────────────────────────│
│ id (PK, UUID)    │               │ id (PK, UUID)          │
│ email (Unique)   │               │ userId (FK, Unique)    │
│ passwordHash     │               │ businessName           │
│ role (Enum)      │               │ bio, location, price   │
│ createdAt        │               │ isVerified (Boolean)   │
└──────────────────┘               └────────────────────────┘
         │ 1                                   │ 1
         │                                     │
         │ *                                   │ *
┌──────────────────┐               ┌────────────────────────┐
│     Session      │               │     VendorCategory     │
│──────────────────│               │────────────────────────│
│ id (PK, UUID)    │               │ vendorId (FK)          │
│ userId (FK)      │               │ categoryId (FK)        │
│ token (Unique)   │               └────────────────────────┘
│ expiresAt        │                           │ *
└──────────────────┘                           │
                                               │ 1
┌──────────────────┐               ┌────────────────────────┐
│     Booking      │ *           1 │        Category        │
│──────────────────│───────────────│────────────────────────│
│ id (PK, UUID)    │               │ id (PK, UUID)          │
│ customerId (FK)  │               │ name (Unique)          │
│ vendorId (FK)    │               │ slug, icon, bannerUrl  │
│ eventDate        │               └────────────────────────┘
│ eventType (Enum) │                           │
│ status (Enum)    │                           │
│ totalAmount      │                           │
└──────────────────┘                           │
         │ 1                                   │
         │                                     │
         │ 1                                   │
┌──────────────────┐                           │
│      Review      │                           │
│──────────────────│                           │
│ id (PK, UUID)    │                           │
│ bookingId (FK, U)│                           │
│ customerId (FK)  │                           │
│ vendorId (FK)    │                           │
│ rating (1..5)    │                           │
│ comment          │                           │
└──────────────────┘                           │
                                               │
┌──────────────────┐                           │
│     AuditLog     │                           │
│──────────────────│                           │
│ id (PK, UUID)    │                           │
│ actorId (FK)     │                           │
│ action, target   │                           │
│ timestamp        │                           │
└──────────────────┘                           │
```

---

## 4. Key Relational Tables in Detail

### 1. `User` Table
- Stores base identity and authentication data for all actors.
- **Fields:** `id` (UUIDv4), `email` (Indexed, Unique), `passwordHash` (Argon2id string), `fullName`, `role` (`CUSTOMER` | `VENDOR` | `ADMIN`), `createdAt`, `updatedAt`.

### 2. `VendorProfile` Table
- Extends the `User` table via a strict **1-to-1 foreign key relation** (`userId`).
- **Fields:** `businessName`, `city`, `startingPrice`, `ratingAvg` (Decimal), `reviewCount` (Int), `isVerified` (Boolean), `images` (JSON array of URLs), `packages` (JSON array of tiered offerings).

### 3. `Category` Table
- Stores the 11 marketplace service categories:
  - `Photography`, `Catering`, `Decoration`, `Venue`, `Makeup`, `DJ`, `Videography`, `Event Planning`, `Shadow`, `Live Painting`, `Anchors`.

### 4. `Booking` Table
- Represents a transactional contract between a Customer and a Vendor.
- **Fields:** `customerId` (FK -> User), `vendorId` (FK -> VendorProfile), `eventDate`, `eventType` (`Wedding` | `Corporate` | `Birthday` | `Anniversary` | `Retirement` | `Other`), `status` (`PENDING` | `CONFIRMED` | `COMPLETED` | `CANCELLED`), `totalAmount`.

### 5. `Review` Table
- Stores verified customer feedback.
- **Unique Constraint on `bookingId`:** Enforces that one completed booking can receive at most one review, preventing review ballot-stuffing.

### 6. `AuditLog` Table
- Append-only security ledger recording sensitive platform operations.

---

## 5. ACID Transactions & Data Integrity

### Why ACID Matters:
- **Atomicity:** When a customer cancels a booking, both the booking state transition to `CANCELLED` and the recording of the audit log occur within a single database transaction (`prisma.$transaction`). Either both succeed, or both roll back.
- **Consistency:** Foreign key cascades guarantee that if a vendor profile is deleted, orphaned category mappings are cleanly removed without corrupting the database.
- **Isolation:** Concurrent booking requests for the same vendor on the same date are isolated through PostgreSQL's row-level locking.
- **Durability:** Neon PostgreSQL writes all transactions to durable Write-Ahead Logging (WAL) before acknowledging success to the application.

---

## 6. How to Explain This Layer in Your Viva / Presentation

> *"In the database and persistence layer, we use PostgreSQL 16 hosted on Neon Serverless, managed through Prisma ORM 6. We chose a relational model because an event marketplace requires strict data consistency: customers book specific vendors, vendors belong to specific categories, and reviews must link to verified completed bookings. Prisma provides compile-time type safety—meaning if our database schema changes, our entire application code is verified before runtime. We also leverage ACID transactions to ensure that booking updates and audit logs are recorded reliably without race conditions."*
