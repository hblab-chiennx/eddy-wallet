/**
 * Domain types for Eddy Wallet v1.
 * All money values are virtual/educational dollars — never real currency.
 */

export type LedgerEntryType =
  | "allowance"
  | "deposit"
  | "spend"
  | "withdraw"
  | "loan"
  | "repayment"
  | "interest"
  | "lesson";

export interface ParentProfile {
  id: string;
  name: string;
}

export interface ChildProfile {
  id: string;
  name: string;
  pin: string;
  balance: number;
  savingsGoal?: { label: string; target: number };
}

export interface FamilySettings {
  parent: ParentProfile;
  child: ChildProfile;
  allowanceAmount: number;
  allowanceCadence: string;
  interestRatePercent: number;
}

export interface LedgerEntry {
  id: string;
  type: LedgerEntryType;
  title: string;
  meta: string;
  amount?: number;
  points?: number;
  pending?: boolean;
  parentOnly?: boolean;
  createdAt: string;
}

export type LoanStatus = "on-track" | "due-soon" | "overdue" | "paid";

export interface Loan {
  id: string;
  reason: string;
  borrowed: number;
  repaid: number;
  dueLabel: string;
  status: LoanStatus;
}

export type AllowanceFrequency = "weekly" | "biweekly" | "monthly";

export interface AllowanceRule {
  amount: number;
  frequency: AllowanceFrequency;
  cadenceLabel: string;
  autoDeposit: boolean;
  savingsInterestEnabled: boolean;
  savingsInterestPercent: number;
}

export type LessonState = "available" | "done" | "locked";

export interface Lesson {
  id: string;
  title: string;
  blurb: string;
  minutes: number;
  state: LessonState;
  body: string;
}

export interface SpendRequest {
  id: string;
  amount: number;
  reason: string;
  requestedAt: string;
  status: "pending" | "approved" | "declined";
}

export interface FamilyState {
  family: FamilySettings;
  ledger: LedgerEntry[];
  loans: Loan[];
  allowanceRule: AllowanceRule;
  lessons: Lesson[];
  spendRequests: SpendRequest[];
}
