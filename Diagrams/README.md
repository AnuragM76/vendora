# Project Architecture & Design Diagrams

This folder contains the complete architectural and structural diagrams for the project, provided in editable Mermaid (`.mmd`), vector graphics (`.svg`), and presentation-ready raster image (`.png`) formats.

---

### 1. Technology Stack
- **Source**: [`1_technology_stack.mmd`](./1_technology_stack.mmd)
- **Vector (SVG)**: [`1_technology_stack.svg`](./1_technology_stack.svg)
- **Image (PNG)**: [`1_technology_stack.png`](./1_technology_stack.png)
- **Description**: Displays the layer-by-layer breakdown: Frontend (React, Vite, Tailwind), Transport/Session layer, Backend (Express, Argon2, Zod, Recommendation Engine), Data Layer (Prisma, PostgreSQL), and Deployment (Vercel).

---

### 2. Database Structure (ERD)
- **Source**: [`2_database_structure.mmd`](./2_database_structure.mmd)
- **Vector (SVG)**: [`2_database_structure.svg`](./2_database_structure.svg)
- **Image (PNG)**: [`2_database_structure.png`](./2_database_structure.png)
- **Description**: Comprehensive Entity-Relationship diagram showing `User`, `VendorProfile`, `Category`, `VendorPackage`, `PortfolioItem`, `Event`, `Booking`, `Review`, `SavedVendor`, and `Recommendation` entities with foreign keys and cardinality.

---

### 3. System Architecture
- **Source**: [`3_system_architecture.mmd`](./3_system_architecture.mmd)
- **Vector (SVG)**: [`3_system_architecture.svg`](./3_system_architecture.svg)
- **Image (PNG)**: [`3_system_architecture.png`](./3_system_architecture.png)
- **Description**: High-level system diagram mapping end users through Vercel Edge CDN, static asset routing, API Gateway serverless handlers, backend middleware and controllers, and Neon PostgreSQL serverless database.

---

### 4. Frontend Component & Routing Design
- **Source**: [`4_frontend_design.mmd`](./4_frontend_design.mmd)
- **Vector (SVG)**: [`4_frontend_design.svg`](./4_frontend_design.svg)
- **Image (PNG)**: [`4_frontend_design.png`](./4_frontend_design.png)
- **Description**: Visualizes React Router v6 tree, Role-Based Route guards (Public, Customer, Vendor, Admin), and feature page modules (Marketplace, Comparison, Planner, Recommendations, Dashboards).

---

### 5. Backend & REST API Flow
- **Source**: [`5_backend_and_restapi.mmd`](./5_backend_and_restapi.mmd)
- **Vector (SVG)**: [`5_backend_and_restapi.svg`](./5_backend_and_restapi.svg)
- **Image (PNG)**: [`5_backend_and_restapi.png`](./5_backend_and_restapi.png)
- **Description**: Sequence diagram demonstrating end-to-end API execution paths: Auth/Session token generation, Multi-criteria Algorithmic Recommendation calculation, and Booking creation with database persistence.
