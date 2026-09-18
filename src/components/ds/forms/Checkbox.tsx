"use client";

import React from "react";
import { Icon } from "../core/Icon";

export interface CheckboxProps {
  label: string;
  description?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Checkbox with a chunky tap area. */
export function Checkbox({ label, description, checked = false, onChange, disabled, style, ...rest }: CheckboxProps & Record<string, any>) {
  return (
    <label style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", minHeight: "var(--tap-min)", padding: "6px 0", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, ...style }}>
      <input type="checkbox" checked={checked} onChange={onChange} readOnly={!onChange} disabled={disabled} style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} {...rest} />
      <span style={{
        display: "grid", placeItems: "center", width: 26, height: 26, flex: "none", marginTop: 2,
        borderRadius: "var(--radius-xs)", background: checked ? "var(--brand-primary)" : "var(--surface-card)",
        border: "2px solid " + (checked ? "var(--teal-800)" : "var(--border-strong)"),
        transition: "background var(--dur-fast) var(--ease-out)",
      }}>
        {checked ? <Icon name="check" size={16} color="var(--text-inverse)" strokeWidth={3} /> : null}
      </span>
      <span>
        <span style={{ display: "block", fontWeight: "var(--weight-semibold)", color: "var(--text-heading)" }}>{label}</span>
        {description ? <span style={{ display: "block", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{description}</span> : null}
      </span>
    </label>
  );
}
