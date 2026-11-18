# 📘 VENDORA — Comprehensive Software Engineering & System Specification Manual

---

> **Project Title:** VENDORA — AI-Powered Event Vendor Recommendation & Cost Comparison Platform  
> **Tagline:** *"Plan your perfect event. Find the perfect vendors."*  
> **Target Audience:** Engineering Team Members, Academic Evaluators, System Architects, Full-Stack Developers  
> **Repository Root:** `/home/andy/Desktop/Major Project`  
> **Status:** Production-Ready Decoupled Full-Stack Architecture  

---

## 📑 Comprehensive Table of Contents

1. [Project Overview, Motivation & Scope](#1-project-overview-motivation--scope)
   - 1.1 Industry Background & The Problem
   - 1.2 Target Stakeholders & User Roles
   - 1.3 Key Features & Functional Scope
   - 1.4 Non-Functional Requirements & Metrics
2. [End-to-End System Architecture](#2-end-to-end-system-architecture)
   - 2.1 Multi-Tier Architecture Overview
   - 2.2 System Architecture Diagram
   - 2.3 Edge, Serverless & Deployment Model
3. [Technology Stack & In-Depth Rationale](#3-technology-stack--in-depth-rationale)
   - 3.1 Frontend Stack & Tooling
   - 3.2 Backend Runtime & Frameworks
   - 3.3 Database & ORM Layer
   - 3.4 Security & Utility Libraries
4. [Database Modeling & Relational Schema](#4-database-modeling--relational-schema)
   - 4.1 Entity Relationship Diagram (ERD)
   - 4.2 Detailed Entity Data Dictionary
   - 4.3 Database Integrity, Constraints & Indexes
5. [The Algorithmic Recommendation & Comparison Engine](#5-the-algorithmic-recommendation--comparison-engine)
   - 5.1 Multi-Criteria Mathematical Scoring Formula
   - 5.2 Criteria Definitions, Weights & Edge-Case Penalties
   - 5.3 The "Dream Team" Multi-Vendor Combinatorial Optimizer
   - 5.4 Side-by-Side Comparison Matrix Algorithm
6. [Frontend Architecture & Component System](#6-frontend-architecture--component-system)
   - 6.1 State Management via React Context (`AppContext`)
   - 6.2 Component Hierarchy & Directory Organization
   - 6.3 Routing & Role-Based Access Control (RBAC) Matrix
   - 6.4 Key Client-Side Workflows
7. [Backend Architecture & Complete REST API Reference](#7-backend-architecture--complete-rest-api-reference)
   - 7.1 Server Initialization & Middleware Pipeline
   - 7.2 Complete Endpoint Catalogue (Auth, Vendors, Events, Recommendations, Bookings, Reviews, Admin)
   - 7.3 Request Validation Schemas (Zod) & Error Handling
8. [Security Architecture, Authentication & Data Protection](#8-security-architecture-authentication--data-protection)
   - 8.1 Argon2 Password Hashing
   - 8.2 Signed HTTP-Only Cookie Session Security
   - 8.3 CSRF, XSS & SQL Injection Defense Layers
9. [Project Directory & File Structure](#9-project-directory--file-structure)
10. [Local Development, Environment Setup & Deployment](#10-local-development-environment-setup--deployment)
    - 10.1 System Prerequisites
    - 10.2 Step-by-Step Installation & Database Seeding
    - 10.3 Cloud Deployment Instructions (Vercel + Neon)
11. [Testing, Demonstration Script & Evaluation Guide](#11-testing-demonstration-script--evaluation-guide)
    - 11.1 Demo Accounts & Passwords
    - 11.2 End-to-End Presentation Walkthrough (5–7 Minute Script)
12. [Visual Architectural Assets & Diagrams Index](#12-visual-architectural-assets--diagrams-index)

---

## 1. Project Overview, Motivation & Scope

### 1.1 Industry Background & The Problem
Organizing events—whether grand Indian weddings, corporate seminars, milestone anniversaries, or birthday celebrations—requires orchestrating anywhere from 3 to 10 distinct service verticals simultaneously (Photography, Catering, Venue, Stage Decoration, Sound/DJ, Makeup, Florists, and Event Planners).

In the contemporary Indian and global market, event planning is severely hampered by:
1. **Severe Market Fragmentation:** Customers spend 30 to 60 hours hunting across Instagram profiles, fragmented WhatsApp business catalogs, and classifieds directories.
2. **Opaque Pricing & Hidden Surcharges:** Vendors rarely display structured package pricing upfront, leading to customer sticker shock and budget overruns averaging 25–40%.
3. **Lack of Comparative Decision Support:** Existing listing sites act as passive directories. They do not enable side-by-side comparison across pricing tiers, verified equipment, cancellation clauses, or experience.
4. **Availability & Vendor Ghosting:** Double-booking issues and lack of real-time schedule alignment lead to last-minute cancellations and immense stress.

### 1.2 Target Stakeholders & User Roles
VENDORA serves three primary stakeholders through dedicated interfaces:
- **Customer (Event Host / Planner):** Discovers vendors, configures event constraints, receives algorithmic recommendations, evaluates side-by-side matrices, and books packages.
- **Vendor (Service Provider / Business Owner):** Publishes service catalogs, tiered packages, portfolio media, and manages inbound booking leads with Accept/Decline actions.
- **Admin (Platform Operator / Quality Assurance):** Audits platform throughput, verifies business credentials/licenses, resolves conflicts, and monitors marketplace integrity.

### 1.3 Key Features & Functional Scope
- **Multi-Factor Algorithmic Recommendation:** Ranks vendors on a 0–100 scale using 7 distinct dimensions tailored to specific event parameters.
- **Dream Team Optimizer:** Automatically bundles compatible vendors across all required event categories into a cohesive package that fits strictly within the client's total budget.
- **Interactive Side-by-Side Comparison Matrix:** Compare 2 to 4 vendors simultaneously across prices, ratings, verified credentials, and deliverables.
- **End-to-End Booking Lifecycle:** Status flow: `PENDING` ➔ `CONFIRMED` / `DECLINED` ➔ `COMPLETED`.
- **Dynamic Real-Time Budget Meter:** Calculates real-time allocated spending against remaining funds as bookings are negotiated.
- **Verified Review Engine:** Verified clients can submit 1–5 star ratings and reviews that dynamically update vendor platform ratings and review counts.

### 1.4 Non-Functional Requirements & Metrics
- **Performance:** Sub-100ms response time for filtered marketplace searches; sub-200ms recommendation generation.
- **Data Integrity:** ACID-compliant relational transactions with foreign key cascades for user sessions, bookings, and recommendations.
- **Scalability:** Stateless API layer deployable as Vercel Serverless Functions with Neon serverless connection pooling.
- **Security:** Industry-standard Argon2 password hashing; HTTP-only session cookies; zero raw SQL vulnerability via Prisma ORM.

---

## 2. End-to-End System Architecture

### 2.1 Multi-Tier Architecture Overview
VENDORA implements a modern decoupled-monolith architecture. The frontend application is compiled into static HTML/CSS/JS bundles served via global CDNs, while the backend API functions as an Express app that runs locally as a Node.js daemon or in production as serverless micro-functions.

```
                              [ End-User Web Browser ]
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 │                                               │
       [ Static Asset Request ]                         [ REST API Request ]
                 ▼                                               ▼
       (Vercel Edge Network)                           (Vercel Serverless / Express)
        • React 18 SPA                                  • Cookie & Session Auth
        • Tailwind CSS Bundles                          • Role-Based Guard (RBAC)
        • Client-side Router                            • Zod Validation Engine
                 │                                               │
                 │                                               ▼
                 │                                    [ Domain Controllers ]
                 │                                    • Auth & Users
                 │                                    • Vendor Marketplace
                 │                                    • Recommendation Engine
                 │                                    • Booking Lifecycle
                 │                                               │
                 │                                               ▼
                 │                                      [ Prisma ORM Client ]
                 │                                               │
                 └───────────────────────┬───────────────────────┘
                                         ▼
                             [ PostgreSQL Database ]
                              (Neon Serverless DB)
```

### 2.2 System Architecture Diagram
The high-level architecture diagram is stored at [`Diagrams/3_system_architecture.png`](./Diagrams/3_system_architecture.png):

```mermaid
flowchart TD
    UserBrowser["End Users (Customer / Vendor / Admin)"]

    subgraph Edge["Network & Edge Gateway"]
        VercelEdge["Vercel Edge Network / CDN"]
        StaticAssets["Static Frontend SPA (/dist)"]
        APIGateway["Vercel Serverless Function Handler (/api/*)"]
    end

    subgraph AppServer["Backend Application Server"]
        Router["Express Application Router"]
        
        subgraph Middlewares["Security & Validation Middlewares"]
            Cors["CORS Handler"]
            CookieAuth["Session Cookie Authenticator"]
            RoleGuard["Role-Based Guard (RBAC)"]
            ZodValid["Zod Request Validator"]
        end

        subgraph CoreControllers["Business Logic & Controllers"]
            AuthCtrl["Auth Controller"]
            VendorCtrl["Vendor & Marketplace Controller"]
            EventCtrl["Event Planner Controller"]
            BookingCtrl["Booking Lifecycle Controller"]
            RecEngine["Recommendation & Comparison Engine"]
            AdminCtrl["Admin Audit & Analytics"]
        end
    end

    subgraph DataTier["Data Tier"]
        PrismaORM["Prisma Client ORM Engine"]
        PostgresDB[("Neon Serverless PostgreSQL Database")]
    end

    UserBrowser -->|"1. Requests HTML/JS/Assets"| StaticAssets
    UserBrowser -->|"2. REST API Requests (HTTPS & Cookie)"| APIGateway

    StaticAssets -. Hosted on .-> VercelEdge
    APIGateway --> Router

    Router --> Middlewares
    Middlewares --> CoreControllers
    CoreControllers --> PrismaORM
    PrismaORM -->|"Connection Pool / SQL"| PostgresDB
```

---

## 3. Technology Stack & In-Depth Rationale

```mermaid
flowchart TD
    subgraph ClientLayer["Frontend Layer (Client)"]
        React["React 18 (SPA)"]
        TS_Client["TypeScript"]
        Vite["Vite Bundler"]
        Tailwind["Tailwind CSS + Lucide Icons"]
        Router["React Router DOM v6"]
        Context["Auth & App Context (State)"]
    end

    subgraph TransportLayer["API & Communication Layer"]
        FetchClient["Axios / Fetch Client"]
        Cookies["Secure HTTP-Only Cookie Sessions"]
        JSON["REST / JSON payloads"]
    end

    subgraph ServerLayer["Backend Layer (Node.js)"]
        Express["Express.js Server / Serverless Funcs"]
        TS_Server["TypeScript"]
        Middleware["Auth & Session Middleware"]
        Argon2["Argon2 Password Hashing"]
        Zod["Zod Validation Engine"]
        Engine["Deterministic Recommendation Engine"]
    end

    subgraph DataLayer["Persistence & Database Layer"]
        Prisma["Prisma ORM (Client & Migrate)"]
        Postgres[("PostgreSQL (Neon Serverless DB)")]
    end

    subgraph DeploymentLayer["Cloud & Infrastructure"]
        Vercel["Vercel Cloud Platform"]
    end

    ClientLayer --> TransportLayer
    TransportLayer --> ServerLayer
    ServerLayer --> DataLayer
    ServerLayer -.-> DeploymentLayer
    ClientLayer -.-> DeploymentLayer
```

### 3.1 Frontend Stack & Tooling
- **React 18 & TypeScript:** Enables declarative UI rendering with strict compile-time type safety. React 18's concurrent features ensure zero-lag typing in complex search filter inputs.
- **Vite 5:** Replaces legacy Webpack setups. Provides near-instant Hot Module Replacement (HMR) and roll-up production treeshaking.
- **Tailwind CSS 3.4:** Eliminates CSS cascade bugs through utility classes, resulting in extremely lightweight production stylesheets and responsive layouts across mobile, tablet, and desktop viewports.
- **Lucide Icons:** Clean, accessible vector icon set ensuring visual clarity across UI widgets and badges.

### 3.2 Backend Runtime & Frameworks
- **Node.js & Express:** Lightweight, asynchronous, non-blocking I/O model capable of handling thousands of concurrent requests.
- **Serverless API Design (`/api/index.ts`):** Express app is structured so that it runs both as a long-running standalone Node server during local development and as an automatic serverless function on Vercel.
- **Zod 3.23:** Schema declaration and validation library. Validates all inbound JSON payloads at runtime before they reach business logic.

### 3.3 Database & ORM Layer
- **PostgreSQL 16 (Hosted on Neon):** Relational ACID-compliant storage that supports complex multi-table joins, transactions, and native array datatypes (`text[]` for styles and image URLs).
- **Prisma ORM:** Generates fully typed database queries, eliminates raw SQL injection vulnerabilities, and automates schema migrations.

### 3.4 Security & Utility Libraries
- **Argon2 (`argon2id`):** Password hashing algorithm that won the Password Hashing Competition (PHC), far superior to bcrypt and PBKDF2 against GPU-based cracking attacks.
- **Signed HTTP-Only Cookies:** Prevents script-based token access (mitigating XSS theft).
- **Helmet & Compression:** Protects against common web vulnerabilities (clickjacking, MIME-sniffing) and compresses response bodies via Gzip/Brotli.

---

## 4. Database Modeling & Relational Schema

### 4.1 Entity Relationship Diagram (ERD)
The database structure diagram is stored at [`Diagrams/2_database_structure.png`](./Diagrams/2_database_structure.png):

```mermaid
erDiagram
    User ||--o| VendorProfile : "has profile"
    User ||--o{ Session : "authenticates"
    User ||--o{ Event : "creates"
    User ||--o{ Booking : "requests"
    User ||--o{ Review : "writes"
    User ||--o{ SavedVendor : "bookmarks"

    Category ||--o{ VendorProfile : "categorizes"

    VendorProfile ||--o{ VendorService : "offers"
    VendorProfile ||--o{ VendorPackage : "provides"
    VendorProfile ||--o{ PortfolioItem : "showcases"
    VendorProfile ||--o{ Availability : "schedules"
    VendorProfile ||--o{ Booking : "receives"
    VendorProfile ||--o{ Review : "rated by"
    VendorProfile ||--o{ SavedVendor : "saved in"
    VendorProfile ||--o{ Recommendation : "scored for"

    Event ||--o{ Booking : "associates"
    Event ||--o{ Recommendation : "generates"

    User {
        string id PK
        string name
        string email UK
        string passwordHash
        string role "CUSTOMER | VENDOR | ADMIN"
        string phone
        string city
        datetime createdAt
    }

    Session {
        string id PK
        string userId FK
        string token UK
        datetime expiresAt
    }

    Category {
        string id PK
        string name UK
        string description
    }

    VendorProfile {
        string id PK
        string userId FK
        string categoryId FK
        string businessName
        string location
        int experienceYears
        int startingPrice
        float rating
        int reviewCount
        boolean verified
        boolean availability
        string[] styles
        string[] serviceAreas
    }

    Event {
        string id PK
        string userId FK
        string title
        string eventType
        datetime eventDate
        string city
        int guestCount
        int totalBudget
        string[] requiredServices
    }

    Booking {
        string id PK
        string eventId FK
        string vendorId FK
        string customerId FK
        string status "PENDING | CONFIRMED | DECLINED | COMPLETED"
        int agreedPrice
        datetime eventDate
        string notes
    }

    Review {
        string id PK
        string vendorId FK
        string customerId FK
        int rating "1 to 5"
        string comment
        datetime createdAt
    }

    Recommendation {
        string id PK
        string eventId FK
        string vendorId FK
        float overallScore
        float budgetFitScore
        float locationScore
        float ratingScore
    }
```

### 4.2 Detailed Entity Data Dictionary

#### 1. `User` Entity
| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | `String` (UUID) | Primary Key | Unique user identifier |
| `name` | `String` | Required | Full personal or representative name |
| `email` | `String` | Unique, Indexed | Login email address |
| `passwordHash` | `String` | Required | Argon2id salted hash |
| `role` | `String` | Default: `CUSTOMER` | Enum-like: `CUSTOMER`, `VENDOR`, `ADMIN` |
| `phone` | `String` | Optional | Contact phone number |
| `city` | `String` | Optional | User's primary location base |
| `avatar` | `String` | Optional | URL to profile picture |
| `createdAt` | `DateTime` | Auto now | Timestamp of registration |

#### 2. `VendorProfile` Entity
| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | `String` (UUID) | Primary Key | Unique vendor profile identifier |
| `userId` | `String` | Unique, Foreign Key | References `User(id)` with Cascade delete |
| `categoryId` | `String` | Foreign Key | References `Category(id)` |
| `businessName` | `String` | Required | Trading or studio name |
| `location` | `String` | Required | Base operating city (e.g. Pune, Mumbai) |
| `experienceYears`| `Int` | Default: 0 | Verified years in event industry |
| `startingPrice` | `Int` | Default: 0 | Minimum entry tier package price (INR) |
| `rating` | `Float` | Default: 0.0 | Dynamic calculated average (1.00–5.00) |
| `reviewCount` | `Int` | Default: 0 | Number of verified customer reviews |
| `verified` | `Boolean` | Default: false | Admin verification status flag |
| `availability` | `Boolean` | Default: true | Global booking acceptance flag |
| `styles` | `String[]` | Array | Tags (e.g. `Traditional`, `Royal`, `Candid`) |
| `serviceAreas` | `String[]` | Array | Geographic coverage list |

#### 3. `Event` Entity
| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | `String` (UUID) | Primary Key | Unique event identifier |
| `userId` | `String` | Foreign Key | References `User(id)` |
| `title` | `String` | Required | Event title (e.g., "Rohit & Neha Wedding") |
| `eventType` | `String` | Required | Category (Wedding, Corporate, Birthday) |
| `eventDate` | `DateTime` | Required | Planned event target date |
| `city` | `String` | Required | Host location |
| `guestCount` | `Int` | Required | Estimated attending guests |
| `totalBudget` | `Int` | Required | Total allocated expenditure in INR |
| `requiredServices`| `String[]` | Array | List of required category names |

#### 4. `Booking` Entity
| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | `String` (UUID) | Primary Key | Unique booking request identifier |
| `eventId` | `String` | Foreign Key | References `Event(id)` |
| `vendorId` | `String` | Foreign Key | References `VendorProfile(id)` |
| `customerId` | `String` | Foreign Key | References `User(id)` |
| `status` | `String` | Default: `PENDING` | `PENDING`, `CONFIRMED`, `DECLINED`, `COMPLETED` |
| `agreedPrice` | `Int` | Required | Final package price in INR |
| `eventDate` | `DateTime` | Required | Confirmed date of engagement |
| `notes` | `String` | Optional | Customer requirements or instructions |

### 4.3 Database Integrity, Constraints & Indexes
- **Indexes:** B-tree indexes are enforced on `User.email`, `User.role`, `VendorProfile.categoryId`, `VendorProfile.location`, and `Booking.status` to ensure sub-millisecond query performance.
- **Cascade Deletions:** Deleting a `User` cascades to delete their associated `Session`, `SavedVendor`, and `VendorProfile` entities.
- **Unique Constraints:** Composite unique constraints ensure that a user cannot bookmark the same vendor twice (`SavedVendor(userId, vendorId)`).

---

## 5. The Algorithmic Recommendation & Comparison Engine

The core differentiator of VENDORA is its deterministic, multi-factor recommendation engine located in [`server/src/services/recommendationService.ts`](file:///home/andy/Desktop/Major%20Project/server/src/services/recommendationService.ts).

### 5.1 Multi-Criteria Mathematical Scoring Formula
For any candidate vendor $v$ and event $e$, the aggregate compatibility score $S(v, e) \in [0, 100]$ is computed as:

$$S(v, e) = \sum_{k=1}^{7} \left( W_k \times S_k(v, e) \right)$$

Where $W_k$ is the assigned weight and $S_k(v, e) \in [0, 100]$ is the sub-score for criterion $k$.

### 5.2 Criteria Definitions, Weights & Penalties

| # | Criterion | Weight ($W_k$) | Computation & Normalization Logic |
|---|---|---|---|
| 1 | **Budget Fit** | **25%** | Evaluates vendor's starting price $P_v$ against the category budget slice $B_{cat} = \frac{B_{total}}{N_{services}}$.<br/>• If $P_v \le B_{cat}$: Score = 100.<br/>• If $P_v > B_{cat}$: Penalized linearly: $\max\left(0, 100 - \frac{P_v - B_{cat}}{B_{cat}} \times 100\right)$. |
| 2 | **Location Match** | **15%** | • If $v.location = e.city$: Score = 100.<br/>• Else if $e.city \in v.serviceAreas$: Score = 80.<br/>• Else: Score = 30 (travel surcharge implied). |
| 3 | **Rating Score** | **15%** | Evaluates quality adjusted for volume: $\text{Score} = \left(\frac{v.rating}{5.0}\right) \times 100 \times \min\left(1.0, \frac{v.reviewCount}{5}\right)$. |
| 4 | **Date Availability** | **15%** | • If vendor has an existing confirmed booking on $e.eventDate$: Score = 0 (Hard Conflict).<br/>• If explicit blockout date: Score = 0.<br/>• Otherwise: Score = 100. |
| 5 | **Style Alignment** | **15%** | Jaccard-style overlap: $\frac{|v.styles \cap e.styles|}{|e.styles|} \times 100$. If event specifies no style preference, defaults to 85. |
| 6 | **Experience Level** | **10%** | Scaled progressively: $\min\left(100, \frac{v.experienceYears}{10} \times 100\right)$. |
| 7 | **Event Type Fit** | **5%** | If $e.eventType \in v.eventTypes$: Score = 100; else Score = 50. |

### 5.3 The "Dream Team" Multi-Vendor Combinatorial Optimizer
When an event demands multiple categories (e.g. Photography + Catering + Stage Decoration), selecting the highest-rated individual vendor in each category may violate the user's total budget.

The optimizer algorithm solves this constraint satisfaction problem:
1. **Candidate Grouping:** Groups candidate vendors by required category $C_1, C_2, \dots, C_m$.
2. **Greedy Budget Knapsack:** Initializes with the top-scoring candidate per category.
3. **Budget Constraint Check:** If $\sum \text{Price}(v_i) \le B_{total}$, the initial bundle is accepted.
4. **Iterative Substitution:** If the sum exceeds $B_{total}$, the algorithm performs budget-optimal substitutions by swapping the vendor with the highest marginal cost per score point until the entire package satisfies the budget ceiling.
5. **Output Metrics:** The Dream Team returns the bundled total price, overall average rating, aggregate match score, and remaining unspent budget.

### 5.4 Side-by-Side Comparison Matrix Algorithm
The `/api/vendors/compare` endpoint accepts an array of 2 to 4 vendor IDs and constructs a normalized comparison matrix across:
- Pricing & Minimum booking deposit
- Star ratings & verified testimonial count
- Experience in years & Government verification badges
- Included package deliverables & hours of coverage
- Cancellation terms and travel policy

---

## 6. Frontend Architecture & Component System

The client is built using React 18, Vite, and Tailwind CSS. The component structure is designed around atomic design principles and role-based route separation.

### 6.1 State Management via React Context (`AppContext`)
Global application state is managed by `AppContext.tsx`, which exposes:
- `user`: Current authenticated user session object, role (`CUSTOMER`, `VENDOR`, `ADMIN`), and auth state.
- `activeEvent`: The active event currently being planned, including category budget allocations and guest counts.
- `savedVendors`: Set of bookmarked vendor IDs for instant UI bookmark toggling.
- `comparisonList`: Array of 2–4 vendor objects selected for side-by-side comparison.
- `toast`: Unified notification dispatch system for success, error, and info alerts.

### 6.2 Component Hierarchy & Directory Organization
```text
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx           # Standard button with primary/secondary/ghost variants
│   │   ├── Badge.tsx            # Verification and status pills
│   │   ├── Modal.tsx            # Accessible backdrop dialog
│   │   └── RatingStars.tsx      # Interactive and read-only star rendering
│   ├── marketplace/
│   │   ├── FilterSidebar.tsx    # Multi-facet filters (city, budget, rating, style)
│   │   ├── VendorCard.tsx       # Discovery grid card with image slider and quick-save
│   │   └── SearchBar.tsx        # Debounced instant search input
│   ├── comparison/
│   │   └── ComparisonTable.tsx  # Side-by-side comparison grid with diff highlighting
│   └── events/
│       ├── BudgetMeter.tsx      # Real-time visual progress bar of allocated vs spent
│       └── WizardStep.tsx       # Step transitions for event creation
├── layouts/
│   ├── MainLayout.tsx           # Navbar, Breadcrumbs, Main content container, Footer
│   └── AdminLayout.tsx          # Collapsible operational sidebar for administration
└── pages/
    ├── LandingPage.tsx          # High-converting homepage with live category previews
    ├── VendorDiscoveryPage.tsx  # Grid marketplace with real-time filtering & pagination
    ├── VendorDetailPage.tsx     # Full profile, package tiers, gallery, and booking CTA
    ├── ComparePage.tsx          # Side-by-side comparison view
    ├── NewEventPage.tsx         # 6-step event planning wizard
    ├── RecommendationsPage.tsx  # Algorithmic match scores & Dream Team package view
    ├── BookingsPage.tsx         # Booking status tracker & contract generator
    ├── vendor/
    │   └── VendorDashboardPage.tsx  # Inbound booking manager & package editor
    └── admin/
        └── AdminDashboardPage.tsx   # Platform analytics & verification pipeline
```

### 6.3 Routing & Role-Based Access Control (RBAC) Matrix
The routing tree in [`src/App.tsx`](file:///home/andy/Desktop/Major%20Project/src/App.tsx) enforces route security through custom route guard components:

| Route Path | View Component | Allowed Roles | Description |
|---|---|---|---|
| `/` | `LandingPage` | Public | Platform introduction and category exploration |
| `/vendors` | `VendorDiscoveryPage` | Public | Filterable vendor marketplace |
| `/vendors/:id` | `VendorDetailPage` | Public | Vendor business details and packages |
| `/compare` | `ComparePage` | Public | Side-by-side comparison matrix |
| `/login`, `/signup` | `LoginPage`, `SignupPage`| Public | Authentication portals |
| `/events/new` | `NewEventPage` | Customer | Multi-step event creation wizard |
| `/events` | `EventsListPage` | Customer | Overview of planned customer events |
| `/recommendations` | `RecommendationsPage` | Customer | AI match scores and Dream Team bundle |
| `/bookings` | `BookingsPage` | Customer | Inbound/Outbound booking lifecycle tracker |
| `/vendor/dashboard`| `VendorDashboardPage` | Vendor | Business performance & request management |
| `/admin` | `AdminDashboardPage` | Admin | Platform metrics and verification queue |

---

## 7. Backend Architecture & Complete REST API Reference

The backend runs an Express application located in `server/src/app.ts`.

### 7.1 Server Initialization & Middleware Pipeline
```mermaid
flowchart LR
    Req["Incoming HTTP Request"] --> Helmet["Helmet (Security Headers)"]
    Helmet --> Compression["Compression (Gzip)"]
    Compression --> CORS["CORS (Allowed Origins & Credentials)"]
    CORS --> CookieParser["CookieParser (Signed Cookies)"]
    CookieParser --> BodyParser["JSON BodyParser (2MB limit)"]
    BodyParser --> SessionMW["Session Middleware (DB lookup)"]
    SessionMW --> Router["Domain Routers (/api/*)"]
    Router --> ErrorHandler["Central Error Handler"]
    ErrorHandler --> Res["JSON Response"]
```

### 7.2 Complete Endpoint Catalogue

#### Authentication Endpoints (`/api/auth`)
- **`POST /api/auth/signup`**
  - *Body:* `{ name, email, password, role, phone?, city? }`
  - *Response:* `201 Created` with sanitized User object and session cookie.
- **`POST /api/auth/login`**
  - *Body:* `{ email, password }`
  - *Response:* `200 OK` with user details and signed HTTP-only session cookie.
- **`POST /api/auth/logout`**
  - *Action:* Invalidates session in PostgreSQL and clears `vendora_session` cookie.
- **`GET /api/auth/me`**
  - *Response:* `200 OK` with active user profile or `401 Unauthorized`.

#### Vendor Marketplace Endpoints (`/api/vendors`)
- **`GET /api/vendors`**
  - *Query Params:* `category`, `city`, `priceMin`, `priceMax`, `rating`, `verified`, `search`, `page`, `limit`.
  - *Response:* `{ vendors: VendorProfile[], total: number, pages: number }`.
- **`GET /api/vendors/:id`**
  - *Response:* Complete vendor record including packages, portfolio items, and reviews.
- **`POST /api/vendors/compare`**
  - *Body:* `{ vendorIds: string[] }` (Length: 2 to 4 IDs).
  - *Response:* Structured comparison matrix with aligned feature keys.

#### Events & Recommendations Endpoints (`/api/events`)
- **`GET /api/events`**
  - *Response:* Array of events created by the logged-in customer.
- **`POST /api/events`**
  - *Body:* `{ title, eventType, eventDate, city, guestCount, totalBudget, requiredServices, styles? }`.
  - *Response:* `201 Created` with the newly provisioned event record.
- **`GET /api/events/:id/recommendations`**
  - *Action:* Runs the 7-factor recommendation engine across all vendors matching required event categories.
  - *Response:* `{ rankedVendors: ScoredVendor[], dreamTeam: DreamTeamBundle }`.

#### Bookings Lifecycle Endpoints (`/api/bookings`)
- **`GET /api/bookings`**
  - *Action:* Role-aware query. Customers see their outbound bookings; Vendors see inbound requests for their services.
- **`POST /api/bookings`**
  - *Body:* `{ eventId, vendorId, agreedPrice, eventDate, notes? }`.
  - *Response:* `201 Created` booking with `status: "PENDING"`.
- **`PATCH /api/bookings/:id/status`**
  - *Body:* `{ status: "CONFIRMED" | "DECLINED" | "COMPLETED" }`.
  - *Access:* Resticted to the vendor assigned to the booking.

#### Administration Endpoints (`/api/admin`)
- **`GET /api/admin/metrics`**
  - *Access:* Admin only.
  - *Response:* `{ totalUsers, totalVendors, pendingVerifications, bookingVolumeINR }`.
- **`PATCH /api/admin/vendors/:id/verify`**
  - *Access:* Admin only.
  - *Body:* `{ verified: boolean }`.
  - *Action:* Updates verified status and reflects immediately on the public marketplace.

### 7.3 Request Validation Schemas (Zod)
All endpoints pass payloads through strict Zod schemas. For example, `eventCreateSchema`:
```typescript
export const createEventSchema = z.object({
  title: z.string().min(3).max(100),
  eventType: z.string(),
  eventDate: z.string().datetime(),
  city: z.string().min(2),
  guestCount: z.number().int().positive(),
  totalBudget: z.number().int().min(10000),
  requiredServices: z.array(z.string()).min(1),
  styles: z.array(z.string()).optional(),
});
```

---

## 8. Security Architecture, Authentication & Data Protection

### 8.1 Argon2 Password Hashing
Passwords are never stored in plaintext. VENDORA implements Argon2id with memory cost parameters:
- Algorithm: `Argon2id` (Hybrid version resisting both side-channel and GPU attacks)
- Salt: Cryptographically secure random 16-byte salt per hash.

### 8.2 Signed HTTP-Only Cookie Session Security
Instead of storing bearer tokens in `localStorage` (which is vulnerable to XSS attacks):
1. Upon successful authentication, the server creates a cryptographically random session token stored in PostgreSQL (`Session` model) with a 7-day expiration.
2. The session token is transmitted via an `HTTP-Only`, `Secure` (in production), `SameSite=Lax` signed cookie named `vendora_session`.
3. Inbound requests automatically deliver this cookie. The `sessionMiddleware` verifies the signature, fetches the session from PostgreSQL, checks expiration, and mounts `req.user`.

### 8.3 CSRF, XSS & SQL Injection Defense Layers
- **SQL Injection Prevention:** Prisma ORM parameterizes all SQL queries by design, completely neutralizing SQL injection risks.
- **XSS Sanitization:** React escapes string bindings in JSX automatically. Additionally, `helmet` disables `X-Powered-By` headers and injects security headers.
- **CORS Protection:** Configured in `server/src/app.ts` to allow only whitelisted frontend origins (`localhost:5173`, `localhost:3000`, and authorized production `.vercel.app` domains).

---

## 9. Project Directory & File Structure

```text
Major Project/
├── .env.example              # Template environment configuration file
├── package.json              # Monorepo dependencies and root execution scripts
├── tsconfig.json             # Root TypeScript compiler options
├── vite.config.ts            # Vite bundler options and proxy routing
├── vercel.json               # Serverless cloud deployment configuration
│
├── Diagrams/                 # Architectural visual assets
│   ├── README.md             # Diagrams index and documentation
│   ├── 1_technology_stack.*  # Tech stack (.mmd, .png, .svg)
│   ├── 2_database_structure.*# Database ERD (.mmd, .png, .svg)
│   ├── 3_system_architecture.*# System architecture (.mmd, .png, .svg)
│   ├── 4_frontend_design.*   # Frontend design & routing (.mmd, .png, .svg)
│   └── 5_backend_and_restapi.*# Sequence diagram (.mmd, .png, .svg)
│
├── prisma/                   # Database definition & ORM tooling
│   ├── schema.prisma         # Primary Prisma data model (PostgreSQL)
│   ├── seed.ts               # Database seeder populating realistic demo data
│   └── migrations/           # Version-controlled migration history
│
├── server/                   # Backend Express application
│   ├── package.json          # Backend-specific dependencies
│   ├── tsconfig.json         # Backend TypeScript compiler configuration
│   └── src/
│       ├── app.ts            # Express application setup and middleware mounts
│       ├── index.ts          # Local HTTP listener entry point
│       ├── lib/              # Database singleton (prisma.ts) and session utilities
│       ├── middleware/       # Authentication, validation, and error handlers
│       ├── routes/           # Domain REST controllers (auth, vendors, events, bookings, etc.)
│       └── services/         # Algorithmic recommendation and auth business logic
│
└── src/                      # Frontend React application
    ├── App.tsx               # Root routing component and role protection guards
    ├── main.tsx              # React DOM mounting entry point
    ├── index.css             # Tailwind CSS directives and custom styling
    ├── components/           # Reusable UI component modules
    ├── context/              # React Context providers (AppContext)
    ├── data/                 # Static mock fallbacks and metadata constants
    ├── layouts/              # MainLayout and AdminLayout wrappers
    ├── pages/                # Page route views for Customer, Vendor, and Admin
    └── services/             # Axios API client wrapper with request interceptors
```

---

## 10. Local Development, Environment Setup & Deployment

### 10.1 System Prerequisites
- **Node.js:** v18.0.0 or higher (v20+ recommended)
- **npm:** v9.0.0 or higher
- **PostgreSQL:** Remote Neon connection string or local PostgreSQL 14+ instance

### 10.2 Step-by-Step Installation & Database Seeding

#### 1. Install Root and Server Dependencies
```bash
# Navigate to the project root
cd "/home/andy/Desktop/Major Project"

# Install frontend and development tools
npm install

# Install backend dependencies
cd server && npm install && cd ..
```

#### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Ensure your `.env` contains:
```env
DATABASE_URL="postgresql://username:password@ep-sample-pooler.neon.tech/neondb?sslmode=require"
SESSION_SECRET="vendora-production-or-local-secret-key-32-chars-min"
PORT=5000
FRONTEND_URL="http://localhost:5173"
```

#### 3. Run Database Migrations & Seed Sample Data
```bash
# Synchronize database schema with PostgreSQL
npx prisma db push

# Populate initial categories, vendors, packages, reviews, and test accounts
npx tsx prisma/seed.ts
```

#### 4. Start Development Servers
You can run the full-stack system concurrently:

**Terminal 1 (Backend API Server):**
```bash
cd server
npm run dev
# Express server listening at http://localhost:5000
```

**Terminal 2 (Frontend Client):**
```bash
npm run dev
# Vite client running at http://localhost:5173
```

### 10.3 Cloud Deployment Instructions (Vercel + Neon)
1. **Database:** Create a free project on [Neon](https://neon.tech) and copy the pooled connection string into Vercel's environment variables as `DATABASE_URL`.
2. **Build Configuration:** Vercel automatically detects `vercel.json`:
   - Frontend builds via `vite build` into `dist/`.
   - API calls to `/api/(.*)` route to `server/src/app.ts` as a Serverless Function.

---

## 11. Testing, Demonstration Script & Evaluation Guide

### 11.1 Demo Accounts & Passwords
Pre-seeded accounts are provided with 1-click quick-fill buttons on the `/login` page:

| Persona | Email | Password | Primary Showcase Capabilities |
|---|---|---|---|
| **Customer** *(Host)* | `demo@vendora.app` | `Demo@12345` *(or `demo123`)* | Event planner wizard, budget allocation, Dream Team recommendations, side-by-side comparison, booking checkout. |
| **Vendor** *(Studio)* | `vendor@vendora.app`| `Vendor@12345` *(or `demo123`)* | Business portal, manage inbound booking requests, package catalog, pricing controls. |
| **Admin** *(Operator)* | `admin@vendora.app` | `Admin@12345` *(or `demo123`)* | Executive KPI analytics, vendor credential verification pipeline. |

> 💡 **Presentation Tip:** Use the dark bar at the top of the screen (`Switch View: Customer | Vendor | Admin`) for instant role transitions during demonstrations.

### 11.2 End-to-End Presentation Walkthrough (5–7 Minute Script)

```text
[Step 1: Introduction & Discovery] (1.5 mins)
1. Open http://localhost:5173. Showcase the clean landing page hero and value proposition.
2. Navigate to "Explore Vendors" (/vendors).
3. Demonstrate live filtering by Category ("Photography"), City ("Pune"), and Budget slider.
4. Select 2-3 vendors and click "Compare" to show the Side-by-Side Comparison Matrix (/compare).

[Step 2: Event Planning & Algorithmic Recommendation] (2 mins)
1. Log in as Customer (demo@vendora.app).
2. Go to "Plan Event" (/events/new).
3. Walk through the 6-step planning wizard: Name ("Anurag & Sneha Wedding"), Date, City, Guest Count (500), and Budget (₹15,00,000).
4. Select required services: Photography, Catering, Decoration.
5. Click "Generate Recommendations". Show the algorithmic match score breakdown (Budget fit, Style, Rating, Distance).
6. Highlight the "Dream Team" combination — explain how the knapsack optimizer assembled all 3 vendors strictly within the ₹15 Lakh budget!

[Step 3: Booking Lifecycle] (1 min)
1. Click "Book Package" on the recommended photographer.
2. Select target date, package tier ("Gold Package"), and submit request.
3. Show the Customer Dashboard (/dashboard) with the dynamic Budget Meter updating in real-time.

[Step 4: Vendor Portal] (1 min)
1. Click "Switch View: Vendor" in the top bar.
2. In the Vendor Hub (/vendor/dashboard), show the newly received booking request.
3. Click "Accept Booking" — note the immediate state transition to "CONFIRMED".

[Step 5: Admin Pipeline & Conclusion] (1 min)
1. Switch to "Admin" view (/admin).
2. Showcase platform KPIs (Total GMV volume, Active users, Vendor distribution).
3. Demonstrate the Vendor Verification Queue — click "Verify" on a newly registered vendor to grant the verified badge.
4. Conclude with architectural strengths: TypeScript end-to-end, Argon2 security, and Neon serverless scalability.
```

---

## 12. Visual Architectural Assets & Diagrams Index

All architecture diagrams are generated in high resolution and available directly in the [`Diagrams/`](./Diagrams/) directory:

| Diagram Name | PNG Image (Slides/Docs) | Vector SVG (Lossless) | Mermaid Source |
|---|---|---|---|
| **1. Technology Stack** | [`1_technology_stack.png`](./Diagrams/1_technology_stack.png) | [`1_technology_stack.svg`](./Diagrams/1_technology_stack.svg) | [`1_technology_stack.mmd`](./Diagrams/1_technology_stack.mmd) |
| **2. Database Structure (ERD)** | [`2_database_structure.png`](./Diagrams/2_database_structure.png) | [`2_database_structure.svg`](./Diagrams/2_database_structure.svg) | [`2_database_structure.mmd`](./Diagrams/2_database_structure.mmd) |
| **3. System Architecture** | [`3_system_architecture.png`](./Diagrams/3_system_architecture.png) | [`3_system_architecture.svg`](./Diagrams/3_system_architecture.svg) | [`3_system_architecture.mmd`](./Diagrams/3_system_architecture.mmd) |
| **4. Frontend Design & Routing** | [`4_frontend_design.png`](./Diagrams/4_frontend_design.png) | [`4_frontend_design.svg`](./Diagrams/4_frontend_design.svg) | [`4_frontend_design.mmd`](./Diagrams/4_frontend_design.mmd) |
| **5. Backend & REST API Flow** | [`5_backend_and_restapi.png`](./Diagrams/5_backend_and_restapi.png) | [`5_backend_and_restapi.svg`](./Diagrams/5_backend_and_restapi.svg) | [`5_backend_and_restapi.mmd`](./Diagrams/5_backend_and_restapi.mmd) |

---

*Document compiled and maintained by the VENDORA Core Engineering Team.*
