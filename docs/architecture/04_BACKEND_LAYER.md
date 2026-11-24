# Layer 4: Backend Layer Architecture

## 1. Overview of the Backend Layer

The **Backend Layer** contains the core business logic, algorithmic workflows, authentication engine, and state machines of Vendora. It is written in **Node.js** with **Express** and **TypeScript**, enforcing strict architectural boundaries between incoming transport endpoints, application services, and persistence models.

The backend is stateless in its process memory (meaning any server instance can handle any incoming request as long as it has access to the database session store), making it horizontally scalable and cloud-ready for platforms like Render, AWS ECS, or Vercel Serverless.

---

## 2. Technology Stack & Technical Rationale

| Technology | Version | Purpose in Vendora | Technical Rationale (Why this was chosen) |
| :--- | :--- | :--- | :--- |
| **Node.js** | `v20+ LTS` | Asynchronous Runtime Environment | High-throughput non-blocking I/O, event-loop driven execution ideal for high-volume concurrent web marketplace requests. |
| **Express.js** | `^4.22.3` | Backend Web Framework | Minimalist, robust, and mature. Provides straightforward middleware chaining and route encapsulation without the steep overhead or magic of heavier frameworks. |
| **TypeScript** | `~5.6.2` | Compile-Time Type Safety | Enforces strict static typings across models, request contexts, controller methods, and service return types. |
| **Argon2 (argon2id)** | `^0.40.3` | Password Hashing Engine | The winner of the Password Hashing Competition (PHC). Far superior to legacy MD5, SHA-256, or standard bcrypt because it is mathematically resistant to GPU and ASIC side-channel hardware cracking attacks. |
| **UUID (v4)** | `^10.0.0` | Universally Unique Identifiers | Generates cryptographically secure 128-bit random IDs for users, vendors, bookings, and audit records, preventing sequential ID enumeration attacks. |
| **TSX** | `^4.23.15` | Fast TypeScript Execution Engine | Used for rapid development watches and running integration test harnesses without requiring manual intermediate compilation steps. |

---

## 3. Architecture Pattern: Controller-Service-Repository

To keep the codebase maintainable and testable, Vendora strictly applies the **Controller-Service** design pattern:

```
[ HTTP Request from API Gateway ]
               │
               ▼
┌───────────────────────────────┐
│          CONTROLLER           │  (e.g., bookingController.ts)
│  • Extracts HTTP parameters   │
│  • Invokes validation schema  │
│  • Calls service methods      │
│  • Returns HTTP status codes  │
└───────────────────────────────┘
               │
               ▼
┌───────────────────────────────┐
│            SERVICE            │  (e.g., bookingService.ts)
│  • Enforces business rules    │
│  • Checks role permissions    │
│  • Calculates pricing/totals  │
│  • Emits audit log events     │
└───────────────────────────────┘
               │
               ▼
┌───────────────────────────────┐
│      PERSISTENCE (ORM)        │  (Prisma Client / Database Layer)
│  • Executes ACID transactions │
│  • Manages DB connection pool │
└───────────────────────────────┘
```

---

## 4. Authentication & Security Engine

### A. Argon2id Password Hashing
When a user registers or updates their password, Vendora hashes the secret using Argon2id with memory-hard parameters:
```typescript
import argon2 from 'argon2';

export async function hashPassword(plainText: string): Promise<string> {
  return await argon2.hash(plainText, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16, // 64 MB of RAM requirement
    timeCost: 3,         // 3 iterations
    parallelism: 1       // 1 thread
  });
}
```
**Why this matters in a viva:** Unlike bcrypt which only stresses the CPU, Argon2id requires significant RAM (memory-hardness). An attacker attempting to crack stolen hashes on specialized GPU farms will exhaust memory, making brute-force cracking economically and computationally infeasible.

### B. Stateful Session Management
Vendora implements secure stateful sessions stored directly in the database:
1. When a user submits valid credentials, the server creates a `Session` record in PostgreSQL with a unique cryptographically random token and an expiration timestamp (e.g., 7 days).
2. The server sets an HTTP cookie:
   ```typescript
   res.cookie('vendora_session', sessionToken, {
     httpOnly: true,                         // Inaccessible to JavaScript (blocks XSS)
     secure: process.env.NODE_ENV === 'production', // Transmitted only via HTTPS
     sameSite: 'lax',                        // Protects against CSRF attacks
     maxAge: 7 * 24 * 60 * 60 * 1000         // 7 days
   });
   ```
3. When the user logs out, the server revokes the session token in the database and clears the browser cookie.

### C. Role-Based Access Control (RBAC) Middleware
Routes are guarded by explicit permission gates:
```typescript
export function requireRole(...allowedRoles: Array<'CUSTOMER' | 'VENDOR' | 'ADMIN'>) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: `Forbidden: Access restricted to [${allowedRoles.join(', ')}]` 
      });
    }
    next();
  };
}
```

---

## 5. Domain Business Workflows

### A. Booking Lifecycle State Machine
Bookings progress through strict, valid state transitions:

```
[ Customer Submits ] ───► PENDING
                            │
               ┌────────────┴────────────┐
               ▼                         ▼
          [ Vendor Confirms ]      [ Vendor Rejects / Cancelled ]
               │                         │
               ▼                         ▼
           CONFIRMED                  CANCELLED
               │
          [ Event Concluded ]
               │
               ▼
           COMPLETED ───► Customer Unlocks Review Submission
```

- **Invariant:** A customer can only write a review for a vendor if they have a booking in the `COMPLETED` state. This completely prevents fake reviews and spam ratings.

### B. Comprehensive Audit Logging System
Administrative actions and sensitive state changes automatically trigger entries in the `AuditLog` table:
- Who initiated the action (User UUID).
- What action occurred (`VENDOR_APPROVED`, `BOOKING_CANCELLED`, `ROLE_CHANGED`).
- Timestamp and client IP address.

---

## 6. How to Explain This Layer in Your Viva / Presentation

> *"The backend layer is built with Node.js, Express, and TypeScript using a clean Controller-Service architecture. We handle identity and authentication using stateful database sessions backed by Argon2id password hashing—the gold standard in cryptographic password storage. We also enforce a strict Role-Based Access Control model so customers, vendors, and admins can only access their respective capabilities. Crucially, our business logic enforces business rules—such as a booking state machine that only allows verified customers with completed events to submit reviews."*
