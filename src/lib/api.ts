/**
 * Typed integration boundary for a future backend.
 *
 * v1 is confirmed client-only (see repo README): all wallet/ledger data lives
 * in localStorage via `FamilyProvider` (see ./store.tsx). No implementation of
 * this interface talks to a network in v1 — it exists purely to document the
 * shape a future Node + Postgres backend (per README "Phase 2") would need to
 * implement for cross-device sync and server-enforced correctness.
 */
import type {
  AllowanceRule,
  FamilyState,
  LedgerEntry,
  Loan,
  SpendRequest,
} from "./types";

export interface WalletBackend {
  getFamilyState(familyId: string): Promise<FamilyState>;

  recordDeposit(familyId: string, amount: number, note: string): Promise<LedgerEntry>;
  recordWithdrawal(familyId: string, amount: number, note: string): Promise<LedgerEntry>;

  updateAllowanceRule(familyId: string, rule: AllowanceRule): Promise<AllowanceRule>;

  createLoan(familyId: string, loan: Omit<Loan, "id" | "repaid">): Promise<Loan>;
  recordRepayment(familyId: string, loanId: string, amount: number): Promise<Loan>;

  createSpendRequest(familyId: string, amount: number, reason: string): Promise<SpendRequest>;
  resolveSpendRequest(
    familyId: string,
    requestId: string,
    decision: "approved" | "declined"
  ): Promise<SpendRequest>;

  markLessonDone(familyId: string, lessonId: string): Promise<void>;
}

/**
 * No implementation ships in v1. A future backend integration provides one
 * (e.g. `new HttpWalletBackend(baseUrl)`) and swaps it in behind this same
 * interface — the UI layer (`store.tsx`) would not need to change shape.
 */
