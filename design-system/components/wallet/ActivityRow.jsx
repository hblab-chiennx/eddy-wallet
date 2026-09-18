import React from "react";
import { MoneyAmount } from "./MoneyAmount.jsx";
import { Icon } from "../core/Icon.jsx";

/** One ledger entry. Same shape for every event type — only the glyph and colour change. */
export const ACTIVITY_TYPES = {
  allowance: { icon: "hand-coins", bg: "var(--teal-100)", ink: "var(--teal-800)", label: "Allowance" },
  deposit: { icon: "arrow-down-left", bg: "var(--teal-100)", ink: "var(--teal-800)", label: "Deposit" },
  spend: { icon: "arrow-up-right", bg: "var(--berry-100)", ink: "var(--berry-700)", label: "Spending" },
  withdraw: { icon: "banknote", bg: "var(--berry-100)", ink: "var(--berry-700)", label: "Withdrawal" },
  loan: { icon: "hand-coins", bg: "var(--sun-100)", ink: "var(--sun-700)", label: "Loan" },
  repayment: { icon: "rotate-ccw", bg: "var(--sun-100)", ink: "var(--sun-700)", label: "Repayment" },
  interest: { icon: "percent", bg: "var(--teal-100)", ink: "var(--teal-800)", label: "Interest" },
  lesson: { icon: "graduation-cap", bg: "var(--grape-100)", ink: "var(--grape-700)", label: "Lesson" },
};

export function ActivityRow({ type = "allowance", title, meta, amount, points, pending, parentOnly, onClick, style }) {
  const t = ACTIVITY_TYPES[type] || ACTIVITY_TYPES.allowance;
  const clickable = !!onClick;
  return (
    <div onClick={onClick} role={clickable ? "button" : undefined} tabIndex={clickable ? 0 : undefined}
      style={{
        display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "12px 4px",
        borderBottom: "1px solid var(--border-subtle)", cursor: clickable ? "pointer" : "default", ...style,
      }}>
      <span style={{ display: "grid", placeItems: "center", width: 42, height: 42, flex: "none", borderRadius: "var(--radius-md)", background: t.bg }}>
        <Icon name={t.icon} size={20} color={t.ink} />
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center", fontWeight: "var(--weight-bold)", color: "var(--text-heading)" }}>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title || t.label}</span>
          {parentOnly ? <Icon name="lock" size={12} color="var(--state-locked)" label="Parent only" /> : null}
        </div>
        <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          {pending ? <span style={{ color: "var(--sun-700)", fontWeight: "var(--weight-bold)" }}>Waiting for a parent · </span> : null}{meta}
        </div>
      </div>
      {amount != null ? (
        <MoneyAmount value={amount} showSign direction={type === "spend" || type === "withdraw" || type === "repayment" ? "out" : "in"} />
      ) : points != null ? (
        <span style={{ display: "inline-flex", gap: 4, alignItems: "center", fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", color: "var(--grape-700)" }}>
          <Icon name="star" size={14} />{points}
        </span>
      ) : null}
    </div>
  );
}
