import React from "react";
/** Track for savings goals, lesson progress, and repayment. */
export function ProgressBar({ value = 0, max = 100, tone = "teal", label, valueLabel, height = 14, style }) {
  const pct = Math.max(0, Math.min(100, (value / (max || 1)) * 100));
  const fill = { teal: "var(--brand-primary)", sun: "var(--sun-500)", berry: "var(--state-danger)", grape: "var(--grape-600)" }[tone] || "var(--brand-primary)";
  return (
    <div style={style}>
      {label || valueLabel ? (
        <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-3)", marginBottom: 6, fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", color: "var(--text-heading)" }}>
          <span>{label}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", color: "var(--text-muted)" }}>{valueLabel}</span>
        </div>
      ) : null}
      <div style={{ height, borderRadius: "var(--radius-pill)", background: "var(--ink-200)", overflow: "hidden" }}>
        <div style={{ width: pct + "%", height: "100%", borderRadius: "var(--radius-pill)", background: fill, transition: "width var(--dur-slow) var(--ease-out)" }} />
      </div>
    </div>
  );
}
