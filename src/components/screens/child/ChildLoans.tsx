"use client";

import React from "react";
import { Card } from "@/components/ds/core/Card";
import { Icon } from "@/components/ds/core/Icon";
import { SectionHeading } from "@/components/ds/core/SectionHeading";
import { EmptyState } from "@/components/ds/feedback/EmptyState";
import { ActivityRow } from "@/components/ds/wallet/ActivityRow";
import { LoanCard } from "@/components/ds/wallet/LoanCard";
import { ParentOnlyChip } from "@/components/ds/wallet/ParentOnlyChip";
import { useFamily } from "@/lib/store";

export function ChildLoans() {
  const { state } = useFamily();
  const loan = state.loans[0];
  const repayments = state.ledger.filter((e) => e.type === "repayment");

  return (
    <div style={{ display: "grid", gap: "var(--space-5)", paddingTop: "var(--space-2)" }}>
      {loan ? <LoanCard {...loan} /> : <EmptyState icon="hand-coins" title="No active loan" description="You don't owe anything right now." />}
      <Card tone="parent" padding="var(--space-4)">
        <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
          <Icon name="shield-check" size={20} color="var(--state-locked)" />
          <div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <strong style={{ color: "var(--sky-700)" }}>Only a parent can change a loan</strong>
              <ParentOnlyChip />
            </div>
            <div style={{ fontSize: "var(--text-sm)", color: "var(--sky-700)", marginTop: 2 }}>
              Ask {state.family.parent.name} if you want to pay it back faster. You can always see it here.
            </div>
          </div>
        </div>
      </Card>
      {repayments.length ? (
        <div>
          <SectionHeading title="Payments so far" subtitle="Automatic repayments come out of your allowance" />
          <Card padding="var(--space-4)">
            {repayments.map((r, i) => (
              <ActivityRow key={r.id} {...r} style={i === repayments.length - 1 ? { borderBottom: "none" } : undefined} />
            ))}
          </Card>
        </div>
      ) : null}
    </div>
  );
}
