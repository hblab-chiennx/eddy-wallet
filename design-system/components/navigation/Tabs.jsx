import React from "react";
/** Inline segmented filter (activity types, date ranges). */
export function Tabs({ items = [], value, onChange, size = "md", style }) {
  const h = size === "sm" ? 34 : 40;
  return (
    <div role="tablist" style={{ display: "flex", gap: 4, padding: 4, background: "var(--surface-sunken)", borderRadius: "var(--radius-pill)", overflowX: "auto", ...style }}>
      {items.map(it => {
        const id = typeof it === "string" ? it : it.id;
        const label = typeof it === "string" ? it : it.label;
        const active = id === value;
        return (
          <button key={id} role="tab" aria-selected={active} type="button" onClick={() => onChange && onChange(id)}
            style={{
              height: h, padding: "0 16px", borderRadius: "var(--radius-pill)", border: "none", cursor: "pointer",
              background: active ? "var(--surface-card)" : "transparent",
              boxShadow: active ? "0 1px 2px rgba(6,49,43,0.14)" : "none",
              color: active ? "var(--text-heading)" : "var(--text-muted)",
              fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", whiteSpace: "nowrap",
              transition: "background var(--dur-fast) var(--ease-out)",
            }}>
            {label}
          </button>
        );
      })}
    </div>
  );
}
