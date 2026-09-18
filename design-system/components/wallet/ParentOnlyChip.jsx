import React from "react";
import { Icon } from "../core/Icon.jsx";

/** The parent-only marker. Every parent privilege is flagged wherever it appears. */
export function ParentOnlyChip({ label = "Parent only", variant = "chip", style }) {
  if (variant === "banner") {
    return (
      <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", padding: "10px 14px", background: "var(--surface-parent)", border: "1px solid var(--sky-200)", borderRadius: "var(--radius-md)", ...style }}>
        <Icon name="shield-check" size={18} color="var(--state-locked)" />
        <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", color: "var(--sky-700)" }}>{label}</span>
      </div>
    );
  }
  return (
    <span style={{ display: "inline-flex", gap: 4, alignItems: "center", padding: "3px 9px", borderRadius: "var(--radius-pill)", background: "var(--state-locked-soft)", color: "var(--state-locked)", fontSize: "var(--text-xs)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", whiteSpace: "nowrap", ...style }}>
      <Icon name="lock" size={11} strokeWidth={2.5} />{label}
    </span>
  );
}
