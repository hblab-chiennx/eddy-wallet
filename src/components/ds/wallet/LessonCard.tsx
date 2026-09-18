"use client";

import React from "react";
import { Icon } from "../core/Icon";
import { Badge } from "../core/Badge";

export interface LessonCardProps {
  title: string;
  /** One line in kid language: "Money that grows while it waits." */
  blurb?: string;
  minutes?: number;
  state?: "available" | "done" | "locked";
  /** 1-based position in the track. */
  index?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/** A lesson tile in the learn track. */
export function LessonCard({ title, blurb, minutes, state = "available", index, onClick, style }: LessonCardProps) {
  const locked = state === "locked";
  const done = state === "done";
  return (
    <button type="button" onClick={locked ? undefined : onClick} disabled={locked}
      style={{
        display: "flex", gap: "var(--space-4)", alignItems: "center", width: "100%", textAlign: "left",
        padding: "var(--space-4)", borderRadius: "var(--radius-xl)",
        background: locked ? "var(--surface-sunken)" : "var(--surface-card)",
        border: "2px solid " + (done ? "var(--teal-200)" : locked ? "var(--cream-300)" : "var(--grape-200)"),
        boxShadow: locked ? "none" : "var(--shadow-sticker)",
        cursor: locked ? "not-allowed" : "pointer", opacity: locked ? 0.75 : 1, font: "inherit", ...style,
      }}>
      <span style={{ display: "grid", placeItems: "center", width: 52, height: 52, flex: "none", borderRadius: "var(--radius-lg)", background: done ? "var(--teal-100)" : locked ? "var(--ink-100)" : "var(--grape-100)" }}>
        {done ? <Icon name="circle-check-big" size={26} color="var(--teal-800)" />
          : locked ? <Icon name="lock" size={22} color="var(--ink-500)" />
          : <Icon name="lightbulb" size={26} color="var(--grape-700)" />}
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: "flex", gap: "var(--space-2)", alignItems: "center", marginBottom: 2 }}>
          {index != null ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--text-muted)" }}>{String(index).padStart(2, "0")}</span> : null}
          {done ? <Badge tone="success" icon="check">Done</Badge> : locked ? <Badge tone="neutral">Locked</Badge> : <Badge tone="grape" icon="sparkles">Next up</Badge>}
        </span>
        <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: "var(--weight-bold)", color: "var(--text-heading)" }}>{title}</span>
        {blurb ? <span style={{ display: "block", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{blurb}</span> : null}
      </span>
      {minutes != null && !locked ? <span style={{ display: "inline-flex", gap: 4, alignItems: "center", flex: "none", fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", color: "var(--text-muted)" }}><Icon name="clock" size={14} />{minutes} min</span> : null}
    </button>
  );
}
