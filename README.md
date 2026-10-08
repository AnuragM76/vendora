# VENDORA — AI-Powered Event Vendor Recommendation & Comparison Platform

> *"Plan your perfect event. Find the perfect vendors."*

A production-ready full-stack platform for intelligent event planning, vendor discovery, multi-criteria recommendation scoring, side-by-side comparison matrix, and end-to-end booking lifecycle management across India (Pune, Mumbai, Bengaluru, Nashik, Hyderabad).

---

## 🌟 Full-Stack Architecture

```text
                             VERCEL
                                │
               ┌────────────────┴────────────────┐
               │                                 │
            FRONTEND                            API
          React 18 + Vite               Express / Serverless
          Tailwind CSS                  HTTP-only Session Cookies
               │                                 │
               └────────────────┬────────────────┘
                                │
                              Prisma
                                │
                                ▼
                           PostgreSQL
                      (Neon Serverless DB)
                                │
                ┌───────────────┼───────────────┐
                │               │               │
              Users          Events          Vendors
                │               │               │
             Sessions        Bookings        Reviews
                                │
                                ▼
                      Deterministic Rule-Based
                       Recommendation Engine
```

---

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons, React Router DOM (v6)
- **Backend**: Express, TypeScript, Serverless API functions (compatible with Vercel deployment)
- **Database**: PostgreSQL (hosted on Neon Serverless PostgreSQL)
- **ORM**: Prisma Client & Prisma Migrate
- **Authentication**: Argon2 password hashing, secure HTTP-only signed cookie sessions, server-side session validation
- **Validation**: Zod schema validation
- **Recommendation Engine**: Multi-dimensional rule-based algorithmic scoring with future AI/ML extension interface (`RecommendationEngine`)
- **Deployment**: Vercel ready (`vercel.json`, optimized builds)

---

## ✨ Features Implemented

### 1. Customer Portal
- **Authentication**: Sign up with automatic validation (public signup allows `CUSTOMER` and `VENDOR` only; `ADMIN` accounts are seeded), sign in, session persistence, secure logout.
- **Event Planning**: Create, edit, and delete events with date, city, guest count, total budget, style preferences, and required service pillars.
- **Intelligent Recommendations**: Multi-factor scoring (Budget fit 25%, Location proximity 15%, Rating 15%, Availability 15%, Style fit 15%, Experience 10%, Event fit 5%) normalized from 0–100 with humanized explanations.
- **Optimized Multi-Vendor Combination**: Automatically computes a curated dream team across all required categories with total package price, average rating, match percentage, and remaining budget.
- **Vendor Marketplace**: Real database-backed search (case-insensitive across business name, category, location, and tags), filtering (category, city, price range, minimum rating, experience, verified, availability), sorting, and pagination.
- **Side-by-Side Comparison Matrix**: Select 2–4 vendors to compare prices, ratings, verified credentials, experience, and custom AI compatibility.
- **Persistent Saved Shortlist**: Save vendors directly into PostgreSQL with unique constraints.
- **Bookings**: Book vendor packages with live date selection, guest counts, and special notes.
- **Real-Time Budget Meter**: Calculates exact allocated budget and remaining funds from real confirmed/pending bookings.
- **Reviews**: Submit verified 1–5 star reviews with comments after event completion; aggregates vendor ratings server-side.

### 2. Vendor Portal (`/vendor/dashboard`)
- View booking requests from real event hosts.
- Accept (Confirm) or Decline (Reject) bookings with immediate status persistence in PostgreSQL.
- Business profile management, service catalog, tiered packages, portfolio gallery, and availability management.

### 3. Admin Portal (`/admin`)
- Platform analytics: total users, total vendors, verified vs pending vendors, total booking volume.
- Vendor verification workflow: Review vendor credentials and toggle verified status (updating vendor profile directly in database).
- Category management and user directory.

---

## 🔑 Demo Accounts

The database comes pre-seeded with realistic test accounts:

| Role | Email | Password |
|---|---|---|
| **Customer** | `demo@vendora.app` | `Demo@12345` |
| **Customer (Alt)** | `anurag@vendora.app` | `Demo@12345` |
| **Vendor** | `vendor@vendora.app` | `Vendor@12345` |
| **Admin** | `admin@vendora.app` | `Admin@12345` |

*(Note: 1-click quick-fill buttons are also available on the Login page for rapid demonstration)*

---

## 💻 Local Setup & Development

### 1. Clone & Install

```bash
git clone <repository-url>
cd "Major Project"
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and provide your PostgreSQL connection string:

```env
DATABASE_URL="postgresql://user:password@host/neondb?sslmode=require"
SESSION_SECRET="your-secure-session-secret"
NODE_ENV="development"
PORT=3000
FRONTEND_URL="http://localhost:5173"
```

### 3. Run Database Migrations & Seed

```bash
# Apply Prisma migrations to PostgreSQL
npx prisma migrate dev

# Seed database with categories, admin, customers, 22 vendors, packages, services, reviews, and events
npx prisma db seed
```

### 4. Run Development Server

```bash
# Starts both Express API (port 3000) and Vite frontend (port 5173) with API proxying
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🧪 Testing

Run the automated integration test suite:

```bash
npm test
```

This verifies:
- Database connectivity & health check
- Authentication (signup, duplicate email prevention, admin role restriction, password verification, cookie issuance, `/api/auth/me`)
- Events CRUD and user data isolation
- Vendor search, filtering, and comparison
- Rule-based recommendation engine & optimized multi-vendor combination calculation
- Saved vendors PostgreSQL persistence
- Booking creation and vendor status acceptance
- Review submission and server-side rating aggregation
- Admin metrics and vendor verification

---

## 🚢 Production Deployment (Vercel)

The project is structured to deploy smoothly to **Vercel** with a serverless backend and external PostgreSQL database (e.g. Neon):

1. **Connect Repository to Vercel**: Import the GitHub repository into your Vercel dashboard.
2. **Configure Environment Variables** in Vercel Project Settings:
   - `DATABASE_URL`: Your hosted PostgreSQL connection string (Neon, Supabase, etc.)
   - `SESSION_SECRET`: A long random secret string for session cookies
   - `NODE_ENV`: `production`
3. **Build & Output Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build` (runs `prisma generate && tsc -b && vite build`)
   - Output Directory: `dist`
4. **Deploy**:
   - Vercel automatically routes `/api/*` requests to the serverless function in `api/index.ts` using the rules in `vercel.json`, and serves static SPA assets from `dist/` with fallback routing to `index.html`.

---

## 📄 License

MIT License. Designed and engineered for VENDORA.
