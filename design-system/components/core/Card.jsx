import React from "react";
const TONES = {
  paper: { background: "var(--surface-card)", border: "1px solid var(--border-subtle)" },
  sunken: { background: "var(--surface-sunken)", border: "1px solid var(--cream-300)" },
  brand: { background: "var(--brand-primary-soft)", border: "1px solid var(--teal-200)" },
  parent: { background: "var(--surface-parent)", border: "1px solid var(--sky-200)" },
  inverse: { background: "var(--surface-inverse)", border: "1px solid var(--teal-900)" },
};

/** Content container. Soft shadow in Parent Mode, sticker shadow in Child Mode. */
export function Card({ tone = "paper", sticker = false, padding = "var(--space-5)", radius = "var(--radius-lg)", children, style, ...rest }) {
  const t = TONES[tone] || TONES.paper;
  return (
    <div
      style={{
        background: t.background, border: t.border, borderRadius: radius, padding,
        boxShadow: sticker ? "var(--shadow-sticker)" : "var(--shadow-card)",
        color: tone === "inverse" ? "var(--text-inverse)" : "var(--text-body)", ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
