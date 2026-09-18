"use client";

import React from "react";
import { Icon } from "../core/Icon";
import { IconButton } from "../core/IconButton";

export interface TopBarProps {
  title: string;
  subtitle?: string;
  back?: boolean;
  onBack?: () => void;
  /** "parent" adds the Sky top rail and shield glyph that marks Parent Mode. */
  mode?: "child" | "parent";
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Screen header. mode="parent" shows the blue parent rail. */
export function TopBar({ title, subtitle, back, onBack, mode = "child", actions, style }: TopBarProps) {
  const parent = mode === "parent";
  return (
    <header style={{
      display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "14px var(--gutter-mobile)",
      background: parent ? "var(--surface-card)" : "transparent",
      borderBottom: parent ? "1px solid var(--border-subtle)" : "none",
      boxShadow: parent ? "inset 0 3px 0 var(--sky-600)" : "none", ...style,
    }}>
      {back ? <IconButton icon="chevron-left" label="Back" onClick={onBack} tone="outline" size={40} /> : null}
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <h2 style={{ margin: 0, fontSize: "var(--text-h2)" }}>{title}</h2>
          {parent ? <Icon name="shield-check" size={16} color="var(--state-locked)" label="Parent Mode" /> : null}
        </div>
        {subtitle ? <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{subtitle}</div> : null}
      </div>
      {actions ? <div style={{ display: "flex", gap: "var(--space-1)" }}>{actions}</div> : null}
    </header>
  );
}
