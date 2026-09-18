import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Native select in brand clothing. */
export function Select({ label, hint, options = [], style, ...rest }) {
  return (
    <label style={{ display: "block", ...style }}>
      {label ? <span style={{ display: "block", fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", color: "var(--text-heading)", marginBottom: 6 }}>{label}</span> : null}
      <span style={{ display: "flex", alignItems: "center", height: 48, padding: "0 12px 0 14px", background: "var(--surface-card)", border: "2px solid var(--border-strong)", borderRadius: "var(--radius-md)" }}>
        <select style={{ flex: 1, minWidth: 0, appearance: "none", border: "none", outline: "none", background: "transparent", font: "inherit", fontWeight: "var(--weight-semibold)", color: "var(--text-heading)", cursor: "pointer" }} {...rest}>
          {options.map(o => (
            <option key={typeof o === "string" ? o : o.value} value={typeof o === "string" ? o : o.value}>
              {typeof o === "string" ? o : o.label}
            </option>
          ))}
        </select>
        <Icon name="chevron-down" size={18} color="var(--ink-500)" />
      </span>
      {hint ? <span style={{ display: "block", marginTop: 6, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{hint}</span> : null}
    </label>
  );
}
