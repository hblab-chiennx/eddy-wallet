"use client";

import React from "react";
import { Card } from "@/components/ds/core/Card";
import { Icon } from "@/components/ds/core/Icon";
import { SectionHeading } from "@/components/ds/core/SectionHeading";
import { ProgressBar } from "@/components/ds/feedback/ProgressBar";
import { LessonCard } from "@/components/ds/wallet/LessonCard";
import { ParentOnlyChip } from "@/components/ds/wallet/ParentOnlyChip";
import { useFamily } from "@/lib/store";
import styles from "./AllowanceRules.module.css";

export function ParentLessons() {
  const { state } = useFamily();
  const { lessons, family } = state;
  const doneCount = lessons.filter((l) => l.state === "done").length;

  return (
    <div className={styles.grid}>
      <div style={{ display: "grid", gap: "var(--space-3)" }}>
        {lessons.map((l, i) => (
          <LessonCard key={l.id} index={i + 1} {...l} />
        ))}
      </div>
      <div style={{ display: "grid", gap: "var(--space-4)" }}>
        <Card>
          <SectionHeading level="h3" title="Progress" />
          <ProgressBar tone="grape" value={doneCount} max={lessons.length} valueLabel={`${doneCount} of ${lessons.length}`} />
        </Card>
        <Card tone="parent">
          <ParentOnlyChip variant="banner" label={`You can read every lesson — only ${family.child.name} can mark one done.`} />
          <div style={{ display: "flex", gap: 6, alignItems: "flex-start", fontSize: "var(--text-sm)", color: "var(--sky-700)", marginTop: "var(--space-3)" }}>
            <Icon name="eye" size={15} style={{ marginTop: 2 }} />
            Lessons are the one place Eddy is deliberately not parent-controlled.
          </div>
        </Card>
      </div>
    </div>
  );
}
