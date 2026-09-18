import React from "react";
import { MoneyAmount } from "./MoneyAmount.jsx";
import { Icon } from "../core/Icon.jsx";

/** Hero wallet balance. The anchor of both Home screens. */
export function BalanceCard({ owner = "Your wallet", balance = 0, caption, chips = [], tone = "brand", children, style }) {
  const inverse = tone === "inverse";
  return (
    <div style={{
      position: "relative", overflow: "hidden", padding: "var(--space-6)",
      borderRadius: "var(--radius-2xl)",
      background: inverse ? "var(--surface-inverse)" : "var(--brand-primary-soft)",
      border: "2px solid " + (inverse ? "var(--teal-900)" : "var(--teal-200)"),
      boxShadow: "var(--shadow-sticker)", ...style,
    }}>
      <Icon name="piggy-bank" size={150} color={inverse ? "rgba(255,255,255,0.08)" : "rgba(18,137,122,0.09)"} style={{ position: "absolute", right: -28, bottom: -34 }} />
      <div style={{ position: "relative" }}>
        <div style={{ fontSize: "var(--text-xs)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: inverse ? "var(--teal-300)" : "var(--teal-800)" }}>{owner}</div>
        <div style={{ marginTop: 4 }}>
          <MoneyAmount value={balance} size="hero" direction="neutral" style={{ color: inverse ? "var(--paper)" : "var(--teal-900)" }} />
        </div>
        {caption ? <div style={{ marginTop: 4, fontSize: "var(--text-body)", color: inverse ? "var(--teal-200)" : "var(--teal-800)", fontWeight: "var(--weight-semibold)" }}>{caption}</div> : null}
        {chips.length ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "var(--space-4)" }}>
            {chips.map((c, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: "var(--radius-pill)", background: inverse ? "rgba(255,255,255,0.12)" : "var(--paper)", color: inverse ? "var(--paper)" : "var(--teal-900)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)" }}>
                {c.icon ? <Icon name={c.icon} size={14} /> : null}{c.label}
              </span>
            ))}
          </div>
        ) : null}
        {children ? <div style={{ marginTop: "var(--space-5)" }}>{children}</div> : null}
      </div>
    </div>
  );
}
