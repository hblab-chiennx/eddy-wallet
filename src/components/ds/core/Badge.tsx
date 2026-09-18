"use client";

import React from "react";
import { Icon } from "./Icon";

export interface BadgeProps {
  tone?: "neutral" | "teal" | "sun" | "berry" | "sky" | "grape" | "success";
  icon?: string;
  /** Uppercase + tracked — use for system labels, not for kid-facing copy. */
  uppercase?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const TONES = {
  neutral: ["var(--ink-100)", "var(--ink-700)"],
  teal: ["var(--teal-100)", "var(--teal-800)"],
  sun: ["var(--sun-100)", "var(--sun-700)"],
  berry: ["var(--berry-100)", "var(--berry-700)"],
  sky: ["var(--sky-100)", "var(--sky-700)"],
  grape: ["var(--grape-100)", "var(--grape-700)"],
  success: ["var(--state-success-soft)", "var(--state-success)"],
};

/** Small status pill. */
export function Badge({ tone = "neutral", icon, uppercase = false, children, style, ...rest }: BadgeProps & Record<string, any>) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 5, background: bg, color: fg,
        padding: "3px 10px", borderRadius: "var(--radius-pill)",
        fontSize: "var(--text-xs)", fontWeight: "var(--weight-bold)",
        letterSpacing: uppercase ? "var(--tracking-label)" : "var(--tracking-normal)",
        textTransform: uppercase ? "uppercase" : "none", whiteSpace: "nowrap", ...style,
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={12} strokeWidth={2.5} /> : null}
      {children}
    </span>
  );
}
