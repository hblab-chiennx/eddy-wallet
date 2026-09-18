"use client";

import React from "react";
import { Badge } from "@/components/ds/core/Badge";
import { Button } from "@/components/ds/core/Button";
import { Card } from "@/components/ds/core/Card";
import { Icon } from "@/components/ds/core/Icon";
import { Toast } from "@/components/ds/feedback/Toast";
import { ProgressBar } from "@/components/ds/feedback/ProgressBar";
import { LessonCard } from "@/components/ds/wallet/LessonCard";
import { useFamily } from "@/lib/store";

export function ChildLessons() {
  const { state, markLessonDone } = useFamily();
  const { lessons } = state;
  const [openId, setOpenId] = React.useState<string | null>(null);
  const [toast, setToast] = React.useState(false);

  const doneCount = lessons.filter((l) => l.state === "done").length;
  const lesson = openId ? lessons.find((l) => l.id === openId) : null;
  const lessonIndex = lesson ? lessons.findIndex((l) => l.id === lesson.id) : -1;

  if (lesson) {
    return (
      <div style={{ display: "grid", gap: "var(--space-5)", paddingTop: "var(--space-2)" }}>
        <Button variant="ghost" icon="chevron-left" onClick={() => setOpenId(null)} style={{ justifySelf: "start" }}>
          All lessons
        </Button>
        <Card sticker radius="var(--radius-xl)" tone="brand">
          <Badge tone="grape" icon="lightbulb">{`Lesson ${String(lessonIndex + 1).padStart(2, "0")}`}</Badge>
          <h1 style={{ marginTop: "var(--space-3)", fontSize: "var(--text-h1)" }}>{lesson.title}</h1>
          <p style={{ marginTop: 4, marginBottom: 0, color: "var(--teal-800)", fontWeight: 600 }}>{lesson.blurb}</p>
        </Card>
        <p style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--lh-body-lg)", margin: 0 }}>{lesson.body}</p>
        <Card tone="sunken" padding="var(--space-4)">
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
            <Icon name="coins" size={24} color="var(--sun-700)" />
            <div style={{ fontSize: "var(--text-sm)", color: "var(--text-body)" }}>
              <strong>Try it:</strong> leave $10 in your wallet all month and check back. Eddy will add {state.family.interestRatePercent}0 cents.
            </div>
          </div>
        </Card>
        <Button
          variant="primary"
          size="lg"
          icon="check"
          fullWidth
          disabled={lesson.state === "done"}
          onClick={() => {
            markLessonDone(lesson.id);
            setToast(true);
            setOpenId(null);
            setTimeout(() => setToast(false), 2600);
          }}
        >
          {lesson.state === "done" ? "Already done" : "I've read it"}
        </Button>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: "var(--space-4)", paddingTop: "var(--space-2)" }}>
      {toast ? <Toast celebrate message="Lesson done!" detail="The next one just unlocked." /> : null}
      <Card padding="var(--space-4)">
        <ProgressBar tone="grape" label="Your learning track" value={doneCount} max={lessons.length} valueLabel={`${doneCount} of ${lessons.length}`} />
      </Card>
      {lessons.map((l, i) => (
        <LessonCard key={l.id} index={i + 1} {...l} onClick={() => setOpenId(l.id)} />
      ))}
    </div>
  );
}
