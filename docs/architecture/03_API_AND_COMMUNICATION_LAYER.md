# Layer 3: API & Communication Layer Architecture

## 1. Overview of the API & Communication Layer

The **API & Communication Layer** acts as the digital highway and security gateway connecting the frontend client (running in the user's browser) to the backend business logic and database. 

It handles protocol translation, request reverse-proxying, input validation, cryptographic session cookie verification, cross-origin security, and uniform error reporting. Without this layer, the backend would be directly exposed to arbitrary, unvalidated, and potentially malicious payloads from the internet.

---

## 2. Technology Stack & Technical Rationale

| Technology | Version | Purpose in Vendora | Technical Rationale (Why this was chosen) |
| :--- | :--- | :--- | :--- |
| **Express Router** | `^4.22.3` | Endpoint Routing & Dispatch | Lightweight, battle-tested modular routing that decomposes APIs into clean domain controllers (`/api/auth`, `/api/vendors`, `/api/bookings`, `/api/reviews`). |
| **Vite Dev Proxy** | `^6.0.1` | Local Reverse Proxy | Eliminates CORS issues during development by seamlessly rewriting requests from `http://localhost:5173/api/*` to `http://localhost:3000/api/*`. |
| **Zod** | `^3.25.76` | Schema Validation & Typing | TypeScript-first runtime data validation. Intercepts and parses incoming JSON payloads, catching missing, malformed, or malicious fields before they reach service methods. |
| **Cookie-Parser** | `^1.4.7` | Signed Cookie Parsing | Parses and cryptographically verifies HTTP cookies sent in the `Cookie` request header, extracting session identifiers securely. |
| **CORS** | `^2.8.5` | Cross-Origin Resource Sharing | Enforces browser security policies to ensure only whitelisted origins can request protected resources with credentials included. |
| **Helmet** | `^7.2.0` | Security HTTP Header Hardening | Automatically sets critical defense-in-depth headers such as `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, and `Strict-Transport-Security`. |
| **Compression** | `^1.8.2` | Gzip / Deflate Payload Compression | Compresses outgoing JSON response bodies on the wire, cutting network bandwidth consumption by up to 70% for large vendor lists. |

---

## 3. Communication Architecture & Protocol Specs

### A. Protocol & Serialization
- **Protocol:** HTTP/1.1 over TLS (HTTPS in production environments).
- **Data Serialization:** Standardized JSON (`application/json`).
- **Transport Security:** HTTP-Only, Secure, SameSite cookies for identity tokens; bearer payload over JSON body for transactional data.

### B. Standard RESTful Endpoint Catalog

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              AUTHENTICATION                                 │
├───────────────┬────────────────────────────┬────────────────────────────────┤
│ POST          │ /api/auth/register         │ Register new customer / vendor │
│ POST          │ /api/auth/login            │ Authenticate & issue cookie    │
│ POST          │ /api/auth/logout           │ Revoke session & clear cookie  │
│ GET           │ /api/auth/me               │ Fetch current session user     │
├───────────────┴────────────────────────────┴────────────────────────────────┤
│                                 VENDORS                                     │
├───────────────┬────────────────────────────┬────────────────────────────────┤
│ GET           │ /api/vendors               │ List vendors (filters/search)  │
│ GET           │ /api/vendors/:id           │ Fetch complete vendor profile  │
│ POST          │ /api/vendors               │ Create vendor profile (vendor) │
│ PUT           │ /api/vendors/:id           │ Update vendor details / pricing│
│ GET           │ /api/vendors/categories    │ List all 11 active categories  │
├───────────────┴────────────────────────────┴────────────────────────────────┤
│                                BOOKINGS                                     │
├───────────────┬────────────────────────────┬────────────────────────────────┤
│ GET           │ /api/bookings              │ Get user / vendor bookings     │
│ POST          │ /api/bookings              │ Submit a new booking request   │
│ PUT           │ /api/bookings/:id/status   │ Accept, reject, or complete    │
├───────────────┴────────────────────────────┴────────────────────────────────┤
│                                 REVIEWS                                     │
├───────────────┬────────────────────────────┬────────────────────────────────┤
│ GET           │ /api/vendors/:id/reviews   │ List approved vendor reviews   │
│ POST          │ /api/reviews               │ Submit review (verified clients│
├───────────────┴────────────────────────────┴────────────────────────────────┤
│                                  ADMIN                                      │
├───────────────┬────────────────────────────┬────────────────────────────────┤
│ GET           │ /api/admin/metrics         │ Platform overview & statistics │
│ GET           │ /api/admin/audit-logs      │ Review system activity trail   │
│ PUT           │ /api/admin/vendors/:id     │ Approve or suspend vendor      │
└───────────────┴────────────────────────────┴────────────────────────────────┘
```

---

## 4. Security Pipelines & Middleware Chain

Every request that hits the server travels through a structured pipeline of middleware filters before reaching the controller:

```
[ Incoming HTTP Request ]
          │
          ▼
┌─────────────────────────┐
│   1. Helmet Security    │  Sets HTTP headers (HSTS, No-Sniff, XSS-Protection)
└─────────────────────────┘
          │
          ▼
┌─────────────────────────┐
│     2. CORS Filter      │  Validates origin; ensures credentials: true allowed
└─────────────────────────┘
          │
          ▼
┌─────────────────────────┐
│   3. Body & Cookies     │  express.json() parses body; cookieParser() unsigns cookie
└─────────────────────────┘
          │
          ▼
┌─────────────────────────┐
│   4. Rate Limiter       │  Guards against brute-force login attempts
└─────────────────────────┘
          │
          ▼
┌─────────────────────────┐
│  5. Session Auth Guard  │  Validates vendora_session cookie against database session
└─────────────────────────┘
          │
          ▼
┌─────────────────────────┐
│   6. Zod Schema Guard   │  Parses and validates payload types, bounds, and enums
└─────────────────────────┘
          │
          ▼
[ Domain Controller Execution ]
```

---

## 5. Input Validation with Zod (Deep Dive)

Rather than trusting whatever the client sends over the wire, **Zod schemas** validate and sanitize inputs at runtime.

### Example: Booking Request Validation Schema
```typescript
import { z } from 'zod';

export const bookingCreateSchema = z.object({
  vendorId: z.string().uuid("Invalid vendor identifier format"),
  eventDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format; must be ISO-8601 string"
  }),
  eventType: z.enum([
    'Wedding',
    'Corporate',
    'Birthday',
    'Anniversary',
    'Retirement',    // Newly added milestone event type
    'Other'
  ]),
  guestCount: z.number().int().positive().max(10000),
  packageId: z.string().min(1, "Package selection is required"),
  specialRequests: z.string().max(1000).optional()
});
```
If a user submits an event date in an invalid format or an event type not in the enum, Zod aborts the execution before the database is touched and returns a standardized response:
```json
{
  "success": false,
  "error": "Validation Error",
  "details": [
    { "field": "eventType", "message": "Invalid enum value. Expected 'Retirement' | 'Wedding'..." }
  ]
}
```

---

## 6. How to Explain This Layer in Your Viva / Presentation

> *"The API and Communication Layer acts as our platform's secure gateway. All client communications happen over RESTful JSON endpoints. We handle CORS and cookie parsing with cryptographic signing, storing our session identifiers inside HttpOnly cookies so they are completely immune to browser script theft. Crucially, we enforce strict runtime validation using Zod: every booking, registration, and review payload is checked against strict schemas before hitting our business logic, guaranteeing that malformed data never enters our database."*
