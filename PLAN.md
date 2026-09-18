# Eddy Wallet — Frontend Implementation Plan (Phase 1)

Status: awaiting go-ahead. Do not begin Phase 2 scaffolding beyond what's noted below until approved.

## 1. Inputs reviewed

- `README.md` — v1 product requirements: client-only, localStorage ledger, virtual money only, US-only/COPPA scope, PIN-linked child access, no backend/PWA/public API in v1, 9 open product questions.
- `design-system/` (extracted from the supplied zip into the repo, see §2) — tokens, 27 components across `core/feedback/forms/navigation/wallet`, 50 Lucide icons, and two working reference UI kits (`ui_kits/parent_mode`, `ui_kits/child_mode`) that already click through every v1 screen with fake data.

## 2. Design system extraction

Extracted to `design-system/` at repo root (already committed in this branch, visible in the PR diff):
- `design-system/tokens/*.css` — colors, typography, spacing, motion, shape (CSS custom properties).
- `design-system/components/{core,feedback,forms,navigation,wallet}/*.jsx` + matching `.d.ts` + `.prompt.md` — 27 plain-JSX components with typed prop contracts.
- `design-system/assets/icons/*.svg` — 50 Lucide icons.
- `design-system/guidelines/*.html` — brand voice, color, type, spacing/layout, motion rules.
- `design-system/ui_kits/{parent_mode,child_mode}/*` — reference apps with screen-by-screen README maps and fake data (`data.js`).

This directory is reference/source material only — Phase 2 ports the components into the real Next.js app (converted to TypeScript) rather than importing the zip's JS bundle at runtime.

## 3. Confirmed stack

- **Next.js (App Router) + React + TypeScript.** Static/client-rendered — no server components doing data fetching, since v1 has no backend; App Router purely for file-based routing and layouts (Parent shell vs Child shell vs Setup).
- **Styling: CSS Modules + the design system's token CSS files, imported globally.** Rationale: the design tokens already ship as plain CSS custom properties (`var(--teal-600)`, `var(--space-4)`, etc.) consumed directly by the component JSX via inline `style` and class names — this is the grain of the existing components. CSS Modules give per-component scoping without a build-time CSS-in-JS dependency, and require zero changes to how the ported components already reference tokens. Tailwind was considered and rejected: it would require re-authoring all 27 components' styling rather than porting them.
- **State:** local React state + a small `localStorage`-backed store (a `FamilyProvider` context) mirroring the README's client-only ledger model. No external state library needed for v1's scope.
- **No test framework mandated by the brief; will add basic component smoke tests only if time allows post-build (not blocking).**

## 4. Routing / page structure

```
app/
  layout.tsx                 — root layout, loads token CSS, fonts
  page.tsx                   — entry: role picker ("Who's using Eddy?") or redirect based on setup state
  setup/
    page.tsx                 — Family Setup (4-step: account, child, PIN, first rules)
  parent/
    layout.tsx                — Sidebar + TopBar(mode="parent") shell, --page-max 1120px
    page.tsx                  — Parent Dashboard
    activity/page.tsx         — Parent Activity (full ledger, search/range/type filters)
    rules/page.tsx             — Allowance Rules + Loans & Repayments (rules tab)
    loans/page.tsx             — Loans & Repayments (loan management tab)
    lessons/page.tsx           — Lessons monitor (read-only)
    actions/page.tsx           — Parent-Only Actions (approval queue, deposit/withdraw, account controls)
  child/
    layout.tsx                — TopBar(mode="child") + TabBar shell, --kid-max 480px column
    page.tsx                  — Child Home (balance, savings goal, recent activity, next lesson)
    activity/page.tsx          — Child Activity feed
    loans/page.tsx             — Child Loans (read-only)
    lessons/page.tsx           — Child Lessons (track + reader)
```

Role/PIN gating: role picker and PIN unlock live at `app/page.tsx` (client component) and set a session flag (React context + sessionStorage) before allowing navigation into `/child/*`; `/parent/*` is gated by the parent being the device operator (no separate parent auth in v1, matching the README's "parent holds the real account" model).

## 5. Component architecture

Design-system components are ported as-is (converted `.jsx` → `.tsx` using the already-supplied `.d.ts` prop contracts) into `src/components/design-system/{core,feedback,forms,navigation,wallet}/`, preserving the category structure. No new visual primitives are built — every screen composes from these 27 plus the icon set.

App-specific composition lives in `src/components/screens/{parent,child,setup}/*` — one file per screen section (e.g. `ParentDashboard.tsx`, `ChildHome.tsx`), each importing only design-system components plus typed mock data from the data layer (§6). This mirrors the reference kits' own file split (`ParentDashboard.jsx`, `ChildHome.jsx`, etc.) so porting is close to mechanical.

Shared layout shells (`ParentShell`, `ChildShell`) wrap `TopBar`/`Sidebar`/`TabBar` per the kits' `app.jsx` pattern and live in `src/components/shells/`.

## 6. Mock data & backend-interface strategy

- `src/lib/types.ts` — TypeScript interfaces for the domain model (`Family`, `ParentProfile`, `ChildProfile`, `LedgerEntry`, `LedgerEntryType`, `AllowanceRule`, `Loan`, `RepaymentSchedule`, `Lesson`, `LessonProgress`, `PendingRequest`), derived from the `.d.ts` prop shapes already in the design system plus README's ledger/loan/lesson concepts.
- `src/lib/mockData.ts` — typed seed data (family, ledger, loan, lessons) adapted from the kits' `data.js` files, expanded to cover all 11 required areas.
- `src/lib/store.tsx` — a `FamilyProvider` React context that holds this data, persists to `localStorage` (per README's v1 client-only model), and exposes typed actions (`approveRequest`, `recordDeposit`, `recordWithdrawal`, `updateAllowanceRule`, `createLoan`, `recordRepayment`, `markLessonDone`) that mutate local state only — no network calls.
- `src/lib/api.ts` — a typed interface boundary (e.g. `interface WalletBackend { getFamily(): Promise<Family>; postDeposit(...): Promise<LedgerEntry>; ... }`) describing what a future Phase 2 Node/Postgres backend (per README) would implement. Only the `localStorage`-backed implementation of this interface ships in v1; this file exists purely as the documented integration point, not as working backend code.

## 7. Mapping: 11 required areas → screens/routes

| Area | Screen(s) / route(s) | Design-kit source |
|---|---|---|
| Family setup | `/setup` | `parent_mode/FamilySetup.jsx` |
| Parent dashboard | `/parent` | `parent_mode/ParentDashboard.jsx` |
| Child dashboard | `/child` | `child_mode/ChildHome.jsx` |
| Wallet balance | `BalanceCard` on `/parent` and `/child` | `wallet/BalanceCard.jsx` |
| Recent activity | `/parent/activity`, `/child/activity` | `ParentActivity.jsx`, `ChildActivity.jsx` |
| Deposits | Dialog in `/parent/actions` | `ParentActions.jsx` (deposit dialog) |
| Withdrawals | Dialog in `/parent/actions` | `ParentActions.jsx` (withdraw dialog) |
| Allowance rules | `/parent/rules` | `AllowanceRules.jsx` |
| Loans and repayments | `/parent/loans`, `/child/loans` | `AllowanceRules.jsx` (`ParentLoans`), `ChildLoans.jsx` |
| Educational lessons | `/parent/lessons` (monitor), `/child/lessons` (interactive) | `app.jsx` (`ParentLessons`), `ChildLessons.jsx` |
| Parent-only actions | `/parent/actions`, `ParentOnlyChip` used throughout | `ParentActions.jsx`, `wallet/ParentOnlyChip.jsx` |
| Access/permissions | Role picker + PIN unlock (`/`), `parentOnly` flags on ledger/switch/dialog props throughout | `child_mode/Entry.jsx` (`RolePicker`, `PinUnlock`) |

## 8. Responsive behavior (per design system's own layout rules)

- Child Mode: single column capped at `--kid-max` (480px), sticky `TopBar`, fixed bottom `TabBar` — matches `child_mode/app.jsx` shell exactly.
- Parent Mode: persistent `Sidebar` + `TopBar(mode="parent")` + content grid capped at `--page-max` (1120px), 2-up stat tiles on mobile per `guidelines/space-layout.html`.
- Will validate at representative mobile/tablet/desktop widths with `chrome-devtools-axi` in Phase 2 and capture evidence for the report.

## 9. Explicitly out of scope (per brief)

- No backend, database, or real API implementation — `src/lib/api.ts` is a typed boundary only.
- No real-money functionality anywhere; all balances/transactions are virtual, matching README language.
- No secrets/credentials of any kind (PIN is a local 4-digit mock unlock, not an auth credential).

---
Next: waiting for firstmate go-ahead before Phase 2 (full scaffold + implementation).
