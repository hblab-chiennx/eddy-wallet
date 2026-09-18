import React from "react";
const SIZES = { sm: "var(--text-sm)", md: "var(--text-money)", lg: "var(--text-money-lg)", hero: "var(--text-money-hero)" };

/** The single way money is rendered. Mono, tabular, signed by direction. */
export function MoneyAmount({ value = 0, size = "md", direction, showSign = false, currency = "$", style, ...rest }) {
  const dir = direction || (value > 0 ? "in" : value < 0 ? "out" : "neutral");
  const color = dir === "in" ? "var(--money-in)" : dir === "out" ? "var(--money-out)" : "var(--money-neutral)";
  const abs = Math.abs(value).toFixed(2);
  const sign = showSign ? (dir === "in" ? "+" : dir === "out" ? "\u2212" : "") : "";
  return (
    <span style={{
      fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontWeight: "var(--weight-bold)",
      fontSize: SIZES[size] || SIZES.md, letterSpacing: size === "hero" ? "-0.02em" : "0",
      color, whiteSpace: "nowrap", ...style,
    }} {...rest}>
      {sign}{currency}{abs}
    </span>
  );
}
