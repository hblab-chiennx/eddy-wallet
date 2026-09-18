import React from "react";
/** Big money entry used by deposit/withdraw/allowance flows. */
export function AmountField({ label, value = "", onChange, hint, max, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={style}>
      {label ? <div style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", color: "var(--text-heading)", marginBottom: 6 }}>{label}</div> : null}
      <div style={{
        display: "flex", alignItems: "center", gap: 6, padding: "14px 18px",
        background: "var(--surface-card)", borderRadius: "var(--radius-lg)",
        border: "2px solid " + (focus ? "var(--brand-primary)" : "var(--border-strong)"),
        boxShadow: focus ? "var(--ring-focus)" : "none",
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-money-lg)", fontWeight: "var(--weight-bold)", color: "var(--ink-400)" }}>$</span>
        <input
          value={value} onChange={onChange} inputMode="decimal" placeholder="0.00"
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: "var(--text-money-lg)", fontWeight: "var(--weight-bold)", color: "var(--text-heading)" }}
          {...rest}
        />
      </div>
      {hint || max != null ? (
        <div style={{ marginTop: 6, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          {hint || "Wallet balance: $" + Number(max).toFixed(2)}
        </div>
      ) : null}
    </div>
  );
}
