import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Bottom nav for Child Mode (and narrow Parent Mode). */
export function TabBar({ items = [], value, onChange, style }) {
  return (
    <nav style={{
      display: "grid", gridAutoFlow: "column", gridAutoColumns: "1fr", alignItems: "stretch",
      background: "var(--surface-card)", borderTop: "1px solid var(--border-subtle)",
      padding: "6px 8px 10px", ...style,
    }}>
      {items.map(it => {
        const active = it.id === value;
        return (
          <button key={it.id} type="button" onClick={() => onChange && onChange(it.id)} aria-current={active ? "page" : undefined}
            style={{
              display: "grid", justifyItems: "center", gap: 3, padding: "8px 4px", minHeight: "var(--tap-min)",
              background: "none", border: "none", cursor: "pointer",
              color: active ? "var(--brand-primary)" : "var(--ink-500)",
            }}>
            <span style={{ display: "grid", placeItems: "center", width: 44, height: 30, borderRadius: "var(--radius-pill)", background: active ? "var(--brand-primary-soft)" : "transparent", transition: "background var(--dur-fast) var(--ease-out)" }}>
              <Icon name={it.icon} size={21} strokeWidth={active ? 2.4 : 2} />
            </span>
            <span style={{ fontSize: "var(--text-xs)", fontWeight: active ? "var(--weight-bold)" : "var(--weight-semibold)" }}>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
