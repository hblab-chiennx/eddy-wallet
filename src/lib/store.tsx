"use client";

import React from "react";
import { createInitialFamilyState } from "./mockData";
import type { AllowanceRule, FamilyState, Loan } from "./types";

const STORAGE_KEY = "eddy-wallet:family-state:v1";

function loadState(): FamilyState {
  if (typeof window === "undefined") return createInitialFamilyState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialFamilyState();
    return JSON.parse(raw) as FamilyState;
  } catch {
    return createInitialFamilyState();
  }
}

function saveState(state: FamilyState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private mode, quota) — state stays in-memory for this session.
  }
}

function todayMeta(prefix: string) {
  return `Today · ${prefix}`;
}

interface FamilyContextValue {
  state: FamilyState;
  ready: boolean;
  recordDeposit: (amount: number, note: string) => void;
  recordWithdrawal: (amount: number, note: string) => void;
  updateAllowanceRule: (rule: AllowanceRule) => void;
  createLoan: (loan: Omit<Loan, "id" | "repaid" | "status">) => void;
  recordRepayment: (loanId: string, amount: number) => void;
  requestSpend: (amount: number, reason: string) => void;
  resolveSpendRequest: (requestId: string, decision: "approved" | "declined") => void;
  markLessonDone: (lessonId: string) => void;
  resetToSeedData: () => void;
}

const FamilyContext = React.createContext<FamilyContextValue | null>(null);

function nextId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

export function FamilyProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<FamilyState>(createInitialFamilyState);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    // One-time hydration from localStorage after mount, so server-rendered
    // markup (seed data) matches the client's first paint before this swap.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(loadState());
    setReady(true);
  }, []);

  React.useEffect(() => {
    if (ready) saveState(state);
  }, [state, ready]);

  const recordDeposit = React.useCallback(
    (amount: number, note: string) => {
      setState((prev) => ({
        ...prev,
        family: { ...prev.family, child: { ...prev.family.child, balance: prev.family.child.balance + amount } },
        ledger: [
          {
            id: nextId("deposit"),
            type: "deposit",
            title: note || "Deposit",
            meta: todayMeta("by " + prev.family.parent.name),
            amount,
            parentOnly: true,
            createdAt: new Date().toISOString(),
          },
          ...prev.ledger,
        ],
      }));
    },
    []
  );

  const recordWithdrawal = React.useCallback((amount: number, note: string) => {
    setState((prev) => ({
      ...prev,
      family: { ...prev.family, child: { ...prev.family.child, balance: prev.family.child.balance - amount } },
      ledger: [
        {
          id: nextId("withdraw"),
          type: "withdraw",
          title: note || "Withdrawal",
          meta: todayMeta("by " + prev.family.parent.name),
          amount,
          parentOnly: true,
          createdAt: new Date().toISOString(),
        },
        ...prev.ledger,
      ],
    }));
  }, []);

  const updateAllowanceRule = React.useCallback((rule: AllowanceRule) => {
    setState((prev) => ({ ...prev, allowanceRule: rule }));
  }, []);

  const createLoan = React.useCallback((loan: Omit<Loan, "id" | "repaid" | "status">) => {
    setState((prev) => ({
      ...prev,
      loans: [...prev.loans, { ...loan, id: nextId("loan"), repaid: 0, status: "on-track" }],
      ledger: [
        {
          id: nextId("loan-entry"),
          type: "loan",
          title: `Loan for ${loan.reason}`,
          meta: todayMeta(`approved by ${prev.family.parent.name}`),
          amount: loan.borrowed,
          parentOnly: true,
          createdAt: new Date().toISOString(),
        },
        ...prev.ledger,
      ],
    }));
  }, []);

  const recordRepayment = React.useCallback((loanId: string, amount: number) => {
    setState((prev) => ({
      ...prev,
      loans: prev.loans.map((l) => {
        if (l.id !== loanId) return l;
        const repaid = l.repaid + amount;
        const status = repaid >= l.borrowed ? "paid" : l.status;
        return { ...l, repaid, status };
      }),
      ledger: [
        {
          id: nextId("repayment"),
          type: "repayment",
          title: "Loan repayment",
          meta: todayMeta("automatic"),
          amount,
          createdAt: new Date().toISOString(),
        },
        ...prev.ledger,
      ],
    }));
  }, []);

  const requestSpend = React.useCallback((amount: number, reason: string) => {
    setState((prev) => ({
      ...prev,
      spendRequests: [
        { id: nextId("req"), amount, reason, requestedAt: new Date().toISOString(), status: "pending" },
        ...prev.spendRequests,
      ],
      ledger: [
        {
          id: nextId("spend"),
          type: "spend",
          title: reason || "Spend request",
          meta: todayMeta(`${prev.family.child.name} asked`),
          amount,
          pending: true,
          createdAt: new Date().toISOString(),
        },
        ...prev.ledger,
      ],
    }));
  }, []);

  const resolveSpendRequest = React.useCallback(
    (requestId: string, decision: "approved" | "declined") => {
      setState((prev) => {
        const request = prev.spendRequests.find((r) => r.id === requestId);
        const balanceDelta = decision === "approved" && request ? -request.amount : 0;
        return {
          ...prev,
          family: {
            ...prev.family,
            child: { ...prev.family.child, balance: prev.family.child.balance + balanceDelta },
          },
          spendRequests: prev.spendRequests.map((r) => (r.id === requestId ? { ...r, status: decision } : r)),
          ledger: prev.ledger.map((entry) =>
            entry.pending && request && entry.title === request.reason && entry.amount === request.amount
              ? { ...entry, pending: false }
              : entry
          ),
        };
      });
    },
    []
  );

  const markLessonDone = React.useCallback((lessonId: string) => {
    setState((prev) => {
      const idx = prev.lessons.findIndex((l) => l.id === lessonId);
      const lessons = prev.lessons.map((l, i) => {
        if (l.id === lessonId) return { ...l, state: "done" as const };
        if (i === idx + 1 && l.state === "locked") return { ...l, state: "available" as const };
        return l;
      });
      return {
        ...prev,
        lessons,
        ledger: [
          {
            id: nextId("lesson"),
            type: "lesson",
            title: prev.lessons[idx]?.title ?? "Lesson",
            meta: todayMeta("marked done"),
            points: 10,
            createdAt: new Date().toISOString(),
          },
          ...prev.ledger,
        ],
      };
    });
  }, []);

  const resetToSeedData = React.useCallback(() => {
    setState(createInitialFamilyState());
  }, []);

  const value = React.useMemo<FamilyContextValue>(
    () => ({
      state,
      ready,
      recordDeposit,
      recordWithdrawal,
      updateAllowanceRule,
      createLoan,
      recordRepayment,
      requestSpend,
      resolveSpendRequest,
      markLessonDone,
      resetToSeedData,
    }),
    [
      state,
      ready,
      recordDeposit,
      recordWithdrawal,
      updateAllowanceRule,
      createLoan,
      recordRepayment,
      requestSpend,
      resolveSpendRequest,
      markLessonDone,
      resetToSeedData,
    ]
  );

  return <FamilyContext.Provider value={value}>{children}</FamilyContext.Provider>;
}

export function useFamily() {
  const ctx = React.useContext(FamilyContext);
  if (!ctx) throw new Error("useFamily must be used within a FamilyProvider");
  return ctx;
}
