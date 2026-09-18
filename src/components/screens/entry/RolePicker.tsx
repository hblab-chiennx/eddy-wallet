"use client";

import React from "react";
import { Icon } from "@/components/ds/core/Icon";
import { useFamily } from "@/lib/store";

const ROLES = [
  {
    id: "child" as const,
    note: "Child Mode · needs your PIN",
    icon: "piggy-bank",
    tint: "var(--brand-primary-soft)",
    ink: "var(--teal-800)",
    border: "var(--teal-200)",
  },
  {
    id: "parent" as const,
    label: "Parent",
    note: "Deposits, rules and approvals",
    icon: "shield-check",
    tint: "var(--surface-parent)",
    ink: "var(--sky-700)",
    border: "var(--sky-200)",
  },
];

export function RolePicker({ onPick }: { onPick: (role: "child" | "parent") => void }) {
  const { state } = useFamily();
  return (
    <div
      style={{
        display: "grid",
        alignContent: "center",
        gap: "var(--space-6)",
        padding: "var(--space-8) var(--gutter-mobile)",
        minHeight: "100vh",
        maxWidth: "var(--kid-max)",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 30,
            letterSpacing: "-0.02em",
            color: "var(--teal-900)",
          }}
        >
          eddy<span style={{ color: "var(--brand-primary)" }}>wallet</span>
        </div>
        <h1 style={{ marginTop: "var(--space-5)", fontSize: "var(--text-display-2)", lineHeight: "var(--lh-display-2)" }}>
          Who&apos;s using Eddy?
        </h1>
        <p style={{ marginTop: "var(--space-2)", color: "var(--text-muted)" }}>One wallet, shared on this device.</p>
      </div>
      <div style={{ display: "grid", gap: "var(--space-4)" }}>
        {ROLES.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => onPick(r.id)}
            style={{
              display: "flex",
              gap: "var(--space-4)",
              alignItems: "center",
              textAlign: "left",
              padding: "var(--space-5)",
              background: r.tint,
              border: "2px solid " + r.border,
              borderRadius: "var(--radius-2xl)",
              boxShadow: "var(--shadow-sticker)",
              cursor: "pointer",
              font: "inherit",
            }}
          >
            <span
              style={{
                display: "grid",
                placeItems: "center",
                width: 60,
                height: 60,
                borderRadius: "var(--radius-xl)",
                background: "var(--paper)",
              }}
            >
              <Icon name={r.icon} size={30} color={r.ink} />
            </span>
            <span>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "var(--text-h1)",
                  color: "var(--text-heading)",
                }}
              >
                {r.id === "child" ? state.family.child.name : "Parent"}
              </span>
              <span style={{ display: "block", fontSize: "var(--text-sm)", color: r.ink, fontWeight: 600 }}>{r.note}</span>
            </span>
            <Icon name="chevron-right" size={22} color={r.ink} style={{ marginLeft: "auto" }} />
          </button>
        ))}
      </div>
      <p style={{ textAlign: "center", fontSize: "var(--text-sm)", color: "var(--text-muted)", margin: 0 }}>
        Eddy Wallet tracks allowance only — no real money ever moves.
      </p>
    </div>
  );
}
