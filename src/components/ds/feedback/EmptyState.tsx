"use client";

import React from "react";
import { Icon } from "../core/Icon";

export interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  /** Usually a <Button>. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Friendly nothing-here block. */
export function EmptyState({ icon = "sparkles", title, description, action, style }: EmptyStateProps) {
  return (
    <div style={{ display: "grid", justifyItems: "center", textAlign: "center", gap: "var(--space-2)", padding: "var(--space-8) var(--space-5)", ...style }}>
      <span style={{ display: "grid", placeItems: "center", width: 64, height: 64, borderRadius: "var(--radius-xl)", background: "var(--brand-primary-soft)", marginBottom: "var(--space-2)" }}>
        <Icon name={icon} size={30} color="var(--brand-primary)" />
      </span>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: "var(--weight-bold)", color: "var(--text-heading)" }}>{title}</div>
      {description ? <div style={{ maxWidth: 320, fontSize: "var(--text-body)", color: "var(--text-muted)" }}>{description}</div> : null}
      {action ? <div style={{ marginTop: "var(--space-3)" }}>{action}</div> : null}
    </div>
  );
}
