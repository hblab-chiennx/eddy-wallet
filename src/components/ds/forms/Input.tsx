"use client";

import React from "react";
import { Icon } from "../core/Icon";

export interface InputProps {
  label?: string;
  /** Helper text under the field. Hidden while an error shows. */
  hint?: string;
  error?: string;
  /** Leading Icon name. */
  icon?: string;
  /** Static leading text, e.g. "$". */
  prefix?: string;
  size?: "md" | "lg";
  id?: string;
  value?: string | number;
  placeholder?: string;
  type?: string;
  inputMode?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

/** Text/number field with label, hint and error. */
export function Input({ label, hint, error, icon, prefix, id, size = "md", style, ...rest }: InputProps & Record<string, any>) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || "in-" + (label || "field").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const h = size === "lg" ? 56 : 48;
  return (
    <label htmlFor={inputId} style={{ display: "block", ...style }}>
      {label ? <span style={{ display: "block", fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", color: "var(--text-heading)", marginBottom: 6 }}>{label}</span> : null}
      <span style={{
        display: "flex", alignItems: "center", gap: "var(--space-2)", height: h, padding: "0 14px",
        background: "var(--surface-card)", borderRadius: "var(--radius-md)",
        border: "2px solid " + (error ? "var(--state-danger)" : focus ? "var(--brand-primary)" : "var(--border-strong)"),
        boxShadow: focus ? "var(--ring-focus)" : "none",
        transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      }}>
        {icon ? <Icon name={icon} size={18} color="var(--ink-500)" /> : null}
        {prefix ? <span style={{ fontFamily: "var(--font-mono)", fontWeight: "var(--weight-bold)", color: "var(--ink-500)" }}>{prefix}</span> : null}
        <input
          id={inputId} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", font: "inherit", fontSize: size === "lg" ? "var(--text-body-lg)" : "var(--text-body)", color: "var(--text-heading)" }}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      </span>
      {error ? (
        <span style={{ display: "flex", gap: 4, alignItems: "center", marginTop: 6, fontSize: "var(--text-sm)", color: "var(--state-danger)", fontWeight: "var(--weight-semibold)" }}>
          <Icon name="triangle-alert" size={14} />{error}
        </span>
      ) : hint ? (
        <span style={{ display: "block", marginTop: 6, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{hint}</span>
      ) : null}
    </label>
  );
}
