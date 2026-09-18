"use client";

import React from "react";
import { Icon } from "./Icon";

export interface IconButtonProps {
  /** Icon name. */
  icon: string;
  /** Required accessible label — icon-only buttons never ship without one. */
  label: string;
  tone?: "plain" | "soft" | "outline";
  /** Box size in px. Never below 44 on kid-facing screens. */
  size?: number;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

const TONES = {
  plain: { background: "transparent", color: "var(--ink-600)", border: "2px solid transparent" },
  soft: { background: "var(--brand-primary-soft)", color: "var(--teal-800)", border: "2px solid transparent" },
  outline: { background: "var(--surface-card)", color: "var(--text-heading)", border: "2px solid var(--border-strong)" },
};

/** Square tap target for toolbar and row-level actions. */
export function IconButton({ icon, label, tone = "plain", size = 44, disabled, style, ...rest }: IconButtonProps & Record<string, any>) {
  const t = TONES[tone] || TONES.plain;
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button" aria-label={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: size, height: size, borderRadius: "var(--radius-md)",
        background: hover && !disabled && tone === "plain" ? "var(--ink-100)" : t.background,
        color: t.color, border: t.border, cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1, transition: "background var(--dur-fast) var(--ease-out)", ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={Math.round(size * 0.45)} />
    </button>
  );
}
