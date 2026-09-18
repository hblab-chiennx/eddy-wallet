"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ds/core/Button";
import { Card } from "@/components/ds/core/Card";
import { Icon } from "@/components/ds/core/Icon";
import { SectionHeading } from "@/components/ds/core/SectionHeading";
import { ProgressBar } from "@/components/ds/feedback/ProgressBar";
import { ActivityRow } from "@/components/ds/wallet/ActivityRow";
import { BalanceCard } from "@/components/ds/wallet/BalanceCard";
import { LoanCard } from "@/components/ds/wallet/LoanCard";
import { ParentOnlyChip } from "@/components/ds/wallet/ParentOnlyChip";
import { StatTile } from "@/components/ds/wallet/StatTile";
import { useFamily } from "@/lib/store";
import styles from "./ParentDashboard.module.css";

export function ParentDashboard() {
  const router = useRouter();
  const { state } = useFamily();
  const { family, ledger, loans, lessons, spendRequests } = state;
  const pending = spendRequests.filter((r) => r.status === "pending");
  const doneLessons = lessons.filter((l) => l.state === "done").length;
  const nextLesson = lessons.find((l) => l.state !== "done");

  const allowancePaid = ledger.filter((l) => l.type === "allowance").reduce((sum, l) => sum + (l.amount ?? 0), 0);
  const spentThisMonth = ledger
    .filter((l) => (l.type === "spend" || l.type === "withdraw") && !l.pending)
    .reduce((sum, l) => sum + (l.amount ?? 0), 0);
  const interestEarned = ledger.filter((l) => l.type === "interest").reduce((sum, l) => sum + (l.amount ?? 0), 0);

  return (
    <div style={{ display: "grid", gap: "var(--space-6)" }}>
      <div className={styles.heroGrid}>
        <BalanceCard
          owner={`${family.child.name}'s wallet`}
          balance={family.child.balance}
          caption={`Virtual balance only — no real money moves. Next allowance: ${family.allowanceCadence}, $${family.allowanceAmount}.`}
          chips={[
            { icon: "repeat", label: family.allowanceCadence },
            { icon: "percent", label: `${family.interestRatePercent}% on savings` },
            { icon: "hand-coins", label: `${loans.filter((l) => l.status !== "paid").length} active loan` },
          ]}
        >
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <Button variant="primary" icon="plus" onClick={() => router.push("/parent/actions")}>
              Deposit
            </Button>
            <Button variant="secondary" icon="minus" onClick={() => router.push("/parent/actions")}>
              Withdraw
            </Button>
            <Button variant="ghost" iconRight="chevron-right" onClick={() => router.push("/parent/actions")}>
              Parent-only actions
            </Button>
          </div>
        </BalanceCard>
        <Card tone="parent">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-3)" }}>
            <h3 style={{ margin: 0, color: "var(--sky-700)" }}>Waiting on you</h3>
            <ParentOnlyChip />
          </div>
          <div style={{ display: "grid", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
            {pending.length ? (
              pending.map((p) => (
                <div
                  key={p.id}
                  style={{
                    display: "flex",
                    gap: "var(--space-3)",
                    alignItems: "center",
                    padding: "var(--space-3)",
                    background: "var(--paper)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <Icon name="arrow-up-right" size={18} color="var(--berry-700)" />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, color: "var(--text-heading)" }}>{p.reason}</div>
                    <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>Requested today</div>
                  </div>
                  <span className="eddy-money" style={{ color: "var(--money-out)" }}>
                    ${p.amount.toFixed(2)}
                  </span>
                </div>
              ))
            ) : (
              <div style={{ fontSize: "var(--text-sm)", color: "var(--sky-700)" }}>No requests waiting right now.</div>
            )}
          </div>
          <Button variant="primary" fullWidth icon="check-check" style={{ marginTop: "var(--space-4)" }} onClick={() => router.push("/parent/actions")}>
            Review requests
          </Button>
        </Card>
      </div>

      <div className={styles.statGrid}>
        <StatTile label="Allowance paid" money={allowancePaid} delta="This month" icon="hand-coins" tone="teal" />
        <StatTile label="Spent this month" money={spentThisMonth} delta="Across recent purchases" icon="arrow-up-right" tone="berry" />
        <StatTile label="Interest earned" money={interestEarned} delta={`${family.interestRatePercent}% on the savings balance`} icon="percent" tone="teal" />
        <StatTile label="Lessons done" value={`${doneLessons} of ${lessons.length}`} delta={nextLesson ? `${nextLesson.title} is up next` : "All done"} icon="graduation-cap" tone="sky" />
      </div>

      <div className={styles.heroGrid}>
        <div>
          <SectionHeading title="Recent activity" subtitle="One row shape for every kind of event" action="See all" onAction={() => router.push("/parent/activity")} />
          <Card padding="var(--space-4)">
            {ledger.slice(0, 6).map((l, i) => (
              <ActivityRow key={l.id} {...l} style={i === 5 ? { borderBottom: "none" } : undefined} />
            ))}
          </Card>
        </div>
        <div style={{ display: "grid", gap: "var(--space-4)" }}>
          {loans[0] ? <LoanCard {...loans[0]} /> : null}
          <Card>
            <SectionHeading level="h3" title="Lesson progress" subtitle="Read-only monitor view" />
            <ProgressBar tone="grape" value={doneLessons} max={lessons.length} valueLabel={`${doneLessons} of ${lessons.length}`} />
            <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginTop: "var(--space-3)" }}>
              You can see every lesson but only {family.child.name} can mark one done.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
