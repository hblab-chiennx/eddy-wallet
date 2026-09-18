"use client";

import React from "react";
import { Icon } from "../core/Icon";

export interface SwitchProps {
  label: string;
  description?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Shows the lock glyph — the control is a Parent Mode privilege. */
  parentOnly?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Settings toggle. Optional parent-only lock marker. */
export function Switch({ label, description, checked = false, onChange, parentOnly, disabled, style, ...rest }: SwitchProps & Record<string, any>) {
  return (
    <label style={{ display: "flex", gap: "var(--space-4)", alignItems: "center", justifyContent: "space-between", minHeight: "var(--tap-min)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, ...style }}>
      <span style={{ minWidth: 0 }}>
        <span style={{ display: "flex", gap: 6, alignItems: "center", fontWeight: "var(--weight-semibold)", color: "var(--text-heading)" }}>
          {label}
          {parentOnly ? <Icon name="lock" size={13} color="var(--state-locked)" label="Parent only" /> : null}
        </span>
        {description ? <span style={{ display: "block", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{description}</span> : null}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} readOnly={!onChange} disabled={disabled} style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} {...rest} />
      <span style={{
        position: "relative", flex: "none", width: 52, height: 30, borderRadius: "var(--radius-pill)",
        background: checked ? "var(--brand-primary)" : "var(--ink-300)",
        transition: "background var(--dur-base) var(--ease-out)",
      }}>
        <span style={{
          position: "absolute", top: 3, left: checked ? 25 : 3, width: 24, height: 24, borderRadius: "50%",
          background: "var(--paper)", boxShadow: "0 1px 3px rgba(6,49,43,0.3)",
          transition: "left var(--dur-base) var(--ease-bounce)",
        }} />
      </span>
    </label>
  );
}
