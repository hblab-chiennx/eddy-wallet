"use client";

import React from "react";
import { Icon } from "../core/Icon";

export interface ToastProps {
  tone?: "success" | "info" | "warning" | "danger";
  message: string;
  detail?: string;
  /** Sunbeam background + party icon — kid-facing wins only. */
  celebrate?: boolean;
  style?: React.CSSProperties;
}

const TONES = {
  success: ["var(--state-success)", "circle-check"],
  info: ["var(--teal-800)", "info"],
  warning: ["var(--sun-700)", "triangle-alert"],
  danger: ["var(--state-danger)", "triangle-alert"],
};

/** Transient confirmation. Kid Mode gets the celebratory variant. */
export function Toast({ tone = "success", message, detail, celebrate, style, ...rest }: ToastProps & Record<string, any>) {
  const [ink, defaultIcon] = TONES[tone] || TONES.success;
  return (
    <div role="status" style={{
      display: "flex", gap: "var(--space-3)", alignItems: "center", padding: "12px 16px",
      background: celebrate ? "var(--brand-accent)" : "var(--surface-card)",
      border: "2px solid " + (celebrate ? "var(--sun-600)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-raised)", maxWidth: 420, ...style,
    }} {...rest}>
      <Icon name={celebrate ? "party-popper" : defaultIcon} size={22} color={celebrate ? "var(--ink-900)" : ink} />
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: "var(--weight-bold)", color: "var(--text-heading)" }}>{message}</div>
        {detail ? <div style={{ fontSize: "var(--text-sm)", color: celebrate ? "var(--sun-700)" : "var(--text-muted)" }}>{detail}</div> : null}
      </div>
    </div>
  );
}
