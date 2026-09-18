"use client";

import React from "react";
import { Icon } from "../core/Icon";

export interface PinPadProps {
  length?: number;
  value?: string;
  onChange?: (next: string) => void;
  error?: string;
  style?: React.CSSProperties;
}

const KEYS = ["1","2","3","4","5","6","7","8","9","","0","del"];

/** 4-digit PIN entry for the shared-device child unlock. */
export function PinPad({ length = 4, value = "", onChange, error, style }: PinPadProps) {
  const press = (k: string) => {
    if (!onChange) return;
    if (k === "del") onChange(value.slice(0, -1));
    else if (k && value.length < length) onChange(value + k);
  };
  return (
    <div style={{ display: "grid", gap: "var(--space-6)", justifyItems: "center", ...style }}>
      <div style={{ display: "flex", gap: "var(--space-3)" }}>
        {Array.from({ length }).map((_, i) => (
          <span key={i} style={{
            width: 18, height: 18, borderRadius: "50%",
            background: i < value.length ? "var(--brand-primary)" : "transparent",
            border: "2px solid " + (error ? "var(--state-danger)" : i < value.length ? "var(--teal-800)" : "var(--border-strong)"),
            transition: "background var(--dur-fast) var(--ease-bounce)",
          }} />
        ))}
      </div>
      {error ? <div style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", color: "var(--state-danger)" }}>{error}</div> : null}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 72px)", gap: "var(--space-3)" }}>
        {KEYS.map((k, i) => k === "" ? <span key={i} /> : (
          <button key={i} type="button" onClick={() => press(k)} aria-label={k === "del" ? "Delete" : k}
            style={{
              height: 64, borderRadius: "var(--radius-lg)", background: "var(--surface-card)",
              border: "2px solid var(--border-strong)", boxShadow: "var(--shadow-sticker)",
              fontFamily: "var(--font-mono)", fontSize: "var(--text-money-lg)", fontWeight: "var(--weight-bold)",
              color: "var(--text-heading)", cursor: "pointer", display: "grid", placeItems: "center",
            }}>
            {k === "del" ? <Icon name="delete" size={22} /> : k}
          </button>
        ))}
      </div>
    </div>
  );
}
