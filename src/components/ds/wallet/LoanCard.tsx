"use client";

import React from "react";
import { MoneyAmount } from "./MoneyAmount";
import { ProgressBar } from "../feedback/ProgressBar";
import { Icon } from "../core/Icon";
import { Badge } from "../core/Badge";

export interface LoanCardProps {
  /** What the loan was for, in the child's words: "Lego set". */
  reason: string;
  borrowed?: number;
  repaid?: number;
  /** e.g. "Pay back $2 each Sunday · 3 payments left". */
  dueLabel?: string;
  status?: "on-track" | "due-soon" | "overdue" | "paid";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** A loan and its repayment progress. */
export function LoanCard({ reason, borrowed = 0, repaid = 0, dueLabel, status = "on-track", children, style }: LoanCardProps) {
  const left = Math.max(0, borrowed - repaid);
  const statusMap: Record<string, { tone: "teal" | "sun" | "berry" | "success"; label: string; icon: string }> = {
    "on-track": { tone: "teal", label: "On track", icon: "check" },
    "due-soon": { tone: "sun", label: "Due soon", icon: "clock" },
    overdue: { tone: "berry", label: "Overdue", icon: "triangle-alert" },
    paid: { tone: "success", label: "Paid off", icon: "check-check" },
  };
  const s = statusMap[status] || statusMap["on-track"];
  return (
    <div style={{ padding: "var(--space-5)", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-card)", ...style }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-3)", alignItems: "flex-start" }}>
        <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
          <span style={{ display: "grid", placeItems: "center", width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--sun-100)" }}>
            <Icon name="hand-coins" size={22} color="var(--sun-700)" />
          </span>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: "var(--weight-bold)", color: "var(--text-heading)" }}>{reason}</div>
            {dueLabel ? <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{dueLabel}</div> : null}
          </div>
        </div>
        <Badge tone={s.tone} icon={s.icon}>{s.label}</Badge>
      </div>
      <div style={{ marginTop: "var(--space-4)" }}>
        <ProgressBar tone={status === "overdue" ? "berry" : "sun"} value={repaid} max={borrowed}
          label={status === "paid" ? "All paid back" : "Still to pay back"}
          valueLabel={"$" + left.toFixed(2) + " of $" + borrowed.toFixed(2)} />
      </div>
      <div style={{ display: "flex", gap: "var(--space-5)", marginTop: "var(--space-4)" }}>
        <div><div className="eddy-label" style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>Borrowed</div><MoneyAmount value={borrowed} direction="neutral" /></div>
        <div><div style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>Paid back</div><MoneyAmount value={repaid} direction="in" /></div>
      </div>
      {children ? <div style={{ marginTop: "var(--space-5)" }}>{children}</div> : null}
    </div>
  );
}
