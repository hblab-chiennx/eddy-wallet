# Eddy Wallet

Eddy Wallet is a responsive web application for children to manage their allowances, replacing informal tracking methods like notebooks or memory. It tracks a child's virtual-only wallet balance (never real money) and gradually teaches basic financial concepts — balance, loans, repayments, and interest on savings — in an age-appropriate way.

## What is Eddy Wallet

Eddy Wallet gives a family a single shared wallet for a child's allowance. Parents deposit funds, set rules, and oversee activity; children track their balance, review their history, and learn financial basics through simple lessons. All balances are virtual and educational — no real money ever moves through the app.

## Roles

Two roles share one family wallet:

- **Parent Mode**: deposit funds, manage withdrawals, configure allowance rules, manage loans/repayments and savings-interest rules, manage child accounts and permissions, and review the child's activity.
- **Child Mode**: view balance, view activity/transaction history, view loans/repayment info, and read educational lessons. Primarily read-only.

## v1 architecture

- **Client-only for v1**: a static frontend with all wallet/ledger data held in the browser's localStorage. There is no backend, no database, no cross-device sync, and no automatic backups in v1 — this is an explicit, informed trade-off. Clearing browser data or switching devices loses the family's wallet history, and there is no recovery path in v1.
- **Child access**: a PIN-linked flow local to the shared family device, not an independent login or credential. The parent holds the real account; the child unlocks it with a PIN.
- **US-only compliance scope** for v1 (COPPA-relevant); EU/UK GDPR-K compliance is a candidate for a later phase.
- **No PWA/offline support** in v1 beyond a basic installable manifest.
- **No public API** in v1.
- The ledger schema is kept minimal for now rather than pre-built for a future real-money/card integration.

### Phase 2 (designed, not built for v1)

A fully custom Node.js + Postgres backend is designed as the future path, for when the product needs real cross-device sync or server-enforced correctness:

- Money modeled as an append-only double-entry ledger for correctness.
- Postgres Row-Level-Security-based parent/child authorization.
- Docker Compose for local development only, with managed Postgres (Render or Neon) in production.
- Render preferred over Vercel + Supabase for portability.
- Point-in-time backup recovery added at first real-user launch, not during internal testing.

## v1 screens and flows

- **Family setup**: first-run flow to create the family/parent account, add a child, and set the child's PIN.
- **Role picker**: a shared-device "Who's using Eddy Wallet?" screen (Parent vs. Child).
- **Parent Mode**: dashboard, Wallet Balance, Recent Activity (with type filters), Allowance Rules, Loans & Repayments, Lessons (read-only monitor view), and a Parent-Only Actions screen (approval queue, deposit/withdraw, account controls). Every parent-only control is visually flagged as such wherever it appears.
- **Child Mode**: Home (balance), Activity (kid-friendly transaction feed), Loans (view-only), and Lessons (read a lesson, mark done, unlocks the next one).

## Not yet decided

The following product decisions are still open:

1. What happens on a **late loan repayment** (grace period, penalty, auto-notify the parent)?
2. Does every child spend/withdraw request need **explicit parent approval**, or can a parent just log it after the fact?
3. Design convention for a single **Recent Activity entry** across very different event types (allowance, loan, lesson, interest, spend).
4. How does the app support a **second child** on the same shared device (the current prototype only supports one)?
5. What is the **PIN reset/change flow**, and how does a parent re-authenticate to do it?
6. Is **savings interest** a real calculated v1 mechanic, or illustrative/educational copy only?
7. Can there be **more than one parent/guardian** on the account?
8. Is a **chore-based allowance bonus** in or out of scope for v1?
9. Target **child age range**, and whether regional (non-US) market competitors should be researched further.
