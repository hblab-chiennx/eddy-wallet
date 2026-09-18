import React from "react";
import { Icon } from "../core/Icon.jsx";
import { MoneyAmount } from "./MoneyAmount.jsx";

/** Compact metric tile for the Parent dashboard. */
export function StatTile({ label, value, money, delta, icon, tone = "neutral", style }) {
  const tint = { neutral: "var(--ink-100)", teal: "var(--teal-100)", sun: "var(--sun-100)", berry: "var(--berry-100)", sky: "var(--sky-100)" }[tone] || "var(--ink-100)";
  const ink = { neutral: "var(--ink-600)", teal: "var(--teal-800)", sun: "var(--sun-700)", berry: "var(--berry-700)", sky: "var(--sky-700)" }[tone] || "var(--ink-600)";
  return (
    <div style={{ padding: "var(--space-4)", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", ...style }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-2)" }}>
        <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</span>
        {icon ? <span style={{ display: "grid", placeItems: "center", width: 28, height: 28, borderRadius: "var(--radius-xs)", background: tint }}><Icon name={icon} size={15} color={ink} /></span> : null}
      </div>
      <div style={{ marginTop: 6 }}>
        {money != null ? <MoneyAmount value={money} size="lg" direction="neutral" />
          : <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", fontWeight: "var(--weight-bold)", color: "var(--text-heading)" }}>{value}</span>}
      </div>
      {delta ? <div style={{ marginTop: 2, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{delta}</div> : null}
    </div>
  );
}
