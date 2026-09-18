import React from "react";
import { Icon } from "./Icon.jsx";

const VARIANTS = {
  primary: { background: "var(--brand-primary)", color: "var(--text-inverse)", border: "2px solid var(--teal-800)", shadow: "var(--shadow-sticker)" },
  accent: { background: "var(--brand-accent)", color: "var(--ink-900)", border: "2px solid var(--sun-600)", shadow: "var(--shadow-sticker)" },
  secondary: { background: "var(--surface-card)", color: "var(--text-heading)", border: "2px solid var(--border-strong)", shadow: "var(--shadow-sticker)" },
  ghost: { background: "transparent", color: "var(--text-link)", border: "2px solid transparent", shadow: "none" },
  danger: { background: "var(--state-danger)", color: "var(--text-inverse)", border: "2px solid var(--berry-700)", shadow: "var(--shadow-sticker)" },
};
const SIZES = {
  sm: { height: 36, padding: "0 14px", fontSize: "var(--text-sm)", radius: "var(--radius-sm)", icon: 16 },
  md: { height: 48, padding: "0 20px", fontSize: "var(--text-body)", radius: "var(--radius-md)", icon: 18 },
  lg: { height: 56, padding: "0 28px", fontSize: "var(--text-body-lg)", radius: "var(--radius-lg)", icon: 22 },
};

/** The one pressable control. Sticker shadow compresses 2px on press. */
export function Button({ variant = "primary", size = "md", icon, iconRight, fullWidth, disabled, children, style, ...rest }) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [pressed, setPressed] = React.useState(false);
  return (
    <button
      type="button" disabled={disabled}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
        display: fullWidth ? "flex" : "inline-flex", width: fullWidth ? "100%" : undefined,
        alignItems: "center", justifyContent: "center", gap: "var(--space-2)",
        height: s.height, padding: s.padding, borderRadius: s.radius, fontSize: s.fontSize,
        fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)",
        background: v.background, color: v.color, border: v.border,
        boxShadow: pressed && !disabled ? "var(--shadow-sticker-press)" : v.shadow,
        transform: pressed && !disabled ? "translateY(2px)" : "none",
        transition: "transform var(--dur-instant) var(--ease-out), box-shadow var(--dur-instant) var(--ease-out), filter var(--dur-fast) var(--ease-out)",
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1,
        filter: pressed ? "none" : undefined, whiteSpace: "nowrap", ...style,
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={s.icon} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={s.icon} /> : null}
    </button>
  );
}
