# 📋 VENDORA — Demonstration & Presentation Guide

> **Project Title**: VENDORA — AI-Powered Event Vendor Recommendation & Comparison Platform  
> **Tagline**: *"Plan your perfect event. Find the perfect vendors."*  
> **Prepared for**: Project Presentation & Evaluation  

---

## ⚡ 1. How to Launch Tomorrow Morning

Open a terminal in the project directory:

```bash
cd "/home/andy/Desktop/Major Project"
npm run dev
```

Once running, open your web browser at:
👉 **[http://localhost:5173](http://localhost:5173)**

*(If port 5173 is ever occupied, Vite will show the assigned port in the terminal output, such as `http://localhost:5174`)*

---

## 🔑 2. Demo Accounts & Login Credentials

You can sign in manually on the **[`/login`](http://localhost:5173/login)** page, or simply click the **1-Click Demo Buttons** on the login screen or in the top navigation bar.

| Role | Email | Password | What You Can Demonstrate |
|---|---|---|---|
| **Event Customer** *(Primary)* | `demo@vendora.app` | `demo123` | • Event Dashboard & Budget Allocation<br>• AI Recommendations & Compatibility Breakdown<br>• Vendor Shortlisting & Comparison Matrix<br>• Booking Requests & Event Planning Wizard |
| **Vendor Partner** *(Secondary)* | `vendor@vendora.app` | `demo123` | • Lens & Light Studio Business Hub<br>• 12 Booking Requests (Accept / Decline actions)<br>• Published Packages & Pricing<br>• Portfolio Gallery & Availability Calendar |
| **Admin** *(Moderator)* | `admin@vendora.app` | `demo123` | • Platform KPIs (3,420 Users, ₹4.82 Cr Volume)<br>• Vendor Verification Pipeline (Verify / Reject)<br>• Government document compliance checks |

> 💡 **Presentation Pro-Tip**: You do not even need to log out to switch roles! Use the **"Switch View"** buttons in the dark bar at the very top of the screen (`Customer` \| `Vendor` \| `Admin`) for instant live transitions during your demo.

---

## 🗺️ 3. Key Navigation URLs (Quick Reference)

| Page | URL | Description |
|---|---|---|
| **Homepage** | `http://localhost:5173/` | Hero showcase, interactive planning widget, category cards, AI preview, and testimonials |
| **Vendor Marketplace** | `http://localhost:5173/vendors` | Searchable directory with live filters for category, city, budget, rating, and styles |
| **Sample Vendor Profile** | `http://localhost:5173/vendors/v-photo-1` | Lens & Light Studio: image gallery, packages, interactive calendar & booking modal |
| **AI Recommendations** | `http://localhost:5173/recommendations` | Algorithmic match scores (70–98%), "Why this vendor?" breakdown & smart bundled packages |
| **Comparison Matrix** | `http://localhost:5173/compare` | Side-by-side comparison table for up to 4 vendors with AI decision support |
| **Event Planning Wizard** | `http://localhost:5173/events/new` | 6-step wizard with interactive budget allocation slider |
| **Customer Dashboard** | `http://localhost:5173/dashboard` | Personal command center with budget usage, planning progress, and active bookings |
| **Saved Shortlist** | `http://localhost:5173/saved` | Grid / List view toggle of bookmarked vendors |
| **Bookings & Contracts** | `http://localhost:5173/bookings` | Booking cards with Confirmed/Pending statuses and simulated contract downloads |
| **Vendor Portal** | `http://localhost:5173/vendor/dashboard` | Vendor partner dashboard with booking requests management |
| **Admin Portal** | `http://localhost:5173/admin` | Platform analytics and interactive vendor approval pipeline |

---

## 🎯 4. Step-by-Step Presentation Script (5–7 Minute Walkthrough)

Follow this sequence to deliver an impressive, coherent story:

### Step 1: The Problem & Landing Page (`/`)
- **What to say**: *"Planning celebrations in India (weddings, corporate galas, milestone birthdays) is traditionally chaotic. People call dozens of vendors, get inconsistent quotes, and struggle to know if a vendor fits their budget and aesthetic."*
- **What to show**:
  1. Scroll through the homepage.
  2. Demonstrate the **Planning Search Widget** (*"What are you planning?"*, *"Pune"*, *"₹2,50,000"*, *"Photography"*).
  3. Click **"Find My Vendors"** to transition to the marketplace.

### Step 2: Vendor Marketplace & Filtering (`/vendors`)
- **What to say**: *"VENDORA provides a verified marketplace where hosts can filter by city, pricing caps, ratings, and specific aesthetic styles (Traditional, Candid, Royal, Minimalist)."*
- **What to show**:
  1. Slide the **Max Starting Price** slider or toggle **"Verified Vendors Only"**.
  2. Watch the vendor cards update in real time.
  3. Click the **Heart icon** on any card to save it, and click **"Compare"** to see the floating comparison tray pop up at the bottom right.

### Step 3: AI Recommendations & Transparent Scoring (`/recommendations`)
- **What to say**: *"This is our core differentiator. Instead of an uncurated list, our algorithm scores vendors across 5 dimensions: budget compatibility, location proximity, verified ratings, style match, and calendar availability."*
- **What to show**:
  1. Point out the **AI Match Badge** (e.g. `94% AI Match`).
  2. Click on the badge to open the **AI Compatibility Analysis Modal**.
  3. Show the breakdown meters (*Budget 96%, Location 98%, Rating 98%*) and the *"Why we recommend this vendor"* explanation.
  4. Highlight the **Smart Event Packages** showing bundled savings of ₹24,000.

### Step 4: Side-by-Side Comparison Matrix (`/compare`)
- **What to say**: *"Once hosts have a shortlist, our comparison matrix stacks up to 4 vendors side-by-side to eliminate analysis paralysis."*
- **What to show**:
  1. Point out how the best value starting price and top rating are automatically tagged.
  2. Highlight the bottom **✦ AI Decision Support** panel summarizing *Best Overall*, *Best Value*, and *Best Rated* with algorithmic reasoning.

### Step 5: Vendor Detail & Booking Simulation (`/vendors/v-photo-1`)
- **What to say**: *"Each vendor profile provides complete transparency on deliverables, packages, and calendar dates."*
- **What to show**:
  1. Show the photo gallery and tiered packages (*Essential*, *Signature*, *Royal Heritage*).
  2. Point out the **Live Availability Calendar** showing available vs booked days.
  3. Click **"Check Availability & Book"** and submit a booking request. Show the instant confirmation.

### Step 6: Customer Command Center (`/dashboard`)
- **What to say**: *"After booking, the customer dashboard acts as a personal planning command center."*
- **What to show**:
  1. The **Budget Utilization Bar** (Allocated ₹1,65,000 vs Remaining ₹85,000).
  2. The **Planning Progress Tracker** showing completion across Venue, Photography, Catering, and Decor.
  3. The **AI Optimization Insight** showing cost-saving combinations.

### Step 7: Vendor & Admin Portals (`/vendor/dashboard` & `/admin`)
- **What to say**: *"VENDORA supports multi-sided stakeholders. Vendors can manage booking inquiries, and admins maintain quality control."*
- **What to show**:
  1. Switch to **Vendor View**: show booking requests and click **Accept & Lock Date**.
  2. Switch to **Admin View**: show the platform KPIs and the **Vendor Verification Pipeline** where you can click **Verify** or **Reject**.

---

## 💡 5. Answers to Anticipated Professor / Evaluator Questions

### Q1: "Is this connected to a real AI model or backend?"
> *"For this phase, this is a **production-ready frontend prototype**. All data is managed through modular service abstractions (`recommendationService`, `vendorService`, `bookingService`). The simulated AI scoring calculates compatibility dynamically based on real mathematical weights. In the next phase, these services will connect to a Python/FastAPI microservice running machine learning recommendation models and a PostgreSQL database."*

### Q2: "Does data persist if I refresh the page?"
> *"Yes. User shortlists, comparisons, active event plans, and bookings are persisted in browser `localStorage`, so your demo remains completely intact during refreshes."*

### Q3: "What happens if a user compares more than 4 vendors?"
> *"The platform enforces a clean 4-vendor comparison limit to prevent visual clutter and cognitive overload, providing clear user feedback if exceeded."*

---

## 🛠️ 6. Quick Troubleshooting

- **Want a clean slate before presenting?**
  Open DevTools (`F12`), go to **Application** ➔ **Local Storage** ➔ Click **Clear All**, then refresh the page. The application will restore its clean default showcase data.
- **Port already in use?**
  If terminal says port 5173 is in use, look at the terminal URL output or run:
  ```bash
  npx kill-port 5173
  npm run dev
  ```
