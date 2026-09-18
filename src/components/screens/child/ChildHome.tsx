"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ds/core/Button";
import { Card } from "@/components/ds/core/Card";
import { Icon } from "@/components/ds/core/Icon";
import { SectionHeading } from "@/components/ds/core/SectionHeading";
import { AmountField } from "@/components/ds/forms/AmountField";
import { Input } from "@/components/ds/forms/Input";
import { Dialog } from "@/components/ds/feedback/Dialog";
import { ProgressBar } from "@/components/ds/feedback/ProgressBar";
import { Toast } from "@/components/ds/feedback/Toast";
import { ActivityRow } from "@/components/ds/wallet/ActivityRow";
import { BalanceCard } from "@/components/ds/wallet/BalanceCard";
import { LessonCard } from "@/components/ds/wallet/LessonCard";
import { useFamily } from "@/lib/store";

export function ChildHome() {
  const router = useRouter();
  const { state, requestSpend } = useFamily();
  const { family, ledger, lessons } = state;
  const [ask, setAsk] = React.useState(false);
  const [amount, setAmount] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const goal = family.child.savingsGoal;
  const nextLesson = lessons.find((l) => l.state !== "done") ?? lessons[0];
  const nextLessonIndex = lessons.findIndex((l) => l.id === nextLesson.id);

  function submitRequest() {
    const value = Number(amount);
    if (!value || value <= 0) return;
    requestSpend(value, reason || "Spend request");
    setAsk(false);
    setAmount("");
    setReason("");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <div style={{ display: "grid", gap: "var(--space-6)", paddingTop: "var(--space-2)" }}>
      <BalanceCard
        owner={`${family.child.name}'s wallet`}
        balance={family.child.balance}
        caption={`Allowance lands ${family.allowanceCadence.replace("Every ", "")} · $${family.allowanceAmount} weekly`}
        chips={[
          { icon: "hand-coins", label: `$${family.allowanceAmount} weekly` },
          { icon: "percent", label: `${family.interestRatePercent}% on savings` },
        ]}
      >
        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          <Button variant="accent" icon="arrow-up-right" fullWidth onClick={() => setAsk(true)}>
            Ask to spend
          </Button>
          <Button variant="secondary" icon="list" fullWidth onClick={() => router.push("/child/activity")}>
            Activity
          </Button>
        </div>
      </BalanceCard>

      {goal ? (
        <Card sticker radius="var(--radius-xl)">
          <SectionHeading level="h3" title={`Saving for ${goal.label.toLowerCase()}`} subtitle="Every deposit gets you closer." />
          <ProgressBar value={family.child.balance} max={goal.target} valueLabel={`$${family.child.balance.toFixed(2)} of $${goal.target}`} />
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: "var(--space-3)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
            <Icon name="flame" size={15} color="var(--sun-600)" />
            Keep saving — you&apos;re getting closer every week.
          </div>
        </Card>
      ) : null}

      <div>
        <SectionHeading title="What happened lately" action="See all" onAction={() => router.push("/child/activity")} />
        <Card padding="var(--space-4)">
          {ledger.slice(0, 4).map((a, i) => (
            <ActivityRow key={a.id} {...a} style={i === 3 ? { borderBottom: "none" } : undefined} />
          ))}
        </Card>
      </div>

      <div>
        <SectionHeading title="Keep learning" subtitle="One lesson unlocks the next" action="All lessons" onAction={() => router.push("/child/lessons")} />
        <LessonCard index={nextLessonIndex + 1} {...nextLesson} onClick={() => router.push("/child/lessons")} />
      </div>

      {sent ? (
        <div style={{ position: "fixed", left: "var(--space-4)", right: "var(--space-4)", bottom: 96, maxWidth: "var(--kid-max)", margin: "0 auto", zIndex: 40 }}>
          <Toast tone="info" message={`Sent to ${family.parent.name}`} detail="You'll see it in your activity as soon as they say yes." />
        </div>
      ) : null}

      <Dialog
        open={ask}
        title="Ask to spend"
        icon="arrow-up-right"
        description={`${family.parent.name} gets a note. Nothing leaves your wallet until they say yes.`}
        confirmLabel="Send it"
        cancelLabel="Never mind"
        onConfirm={submitRequest}
        onClose={() => setAsk(false)}
      >
        <AmountField label="How much?" value={amount} onChange={(e) => setAmount(e.target.value)} max={family.child.balance} />
        <Input label="What's it for?" value={reason} onChange={(e) => setReason(e.target.value)} icon="gift" />
      </Dialog>
    </div>
  );
}
