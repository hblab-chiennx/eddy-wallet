"use client";

import React from "react";
import { Button } from "@/components/ds/core/Button";
import { Card } from "@/components/ds/core/Card";
import { Icon } from "@/components/ds/core/Icon";
import { SectionHeading } from "@/components/ds/core/SectionHeading";
import { ProgressBar } from "@/components/ds/feedback/ProgressBar";
import { EmptyState } from "@/components/ds/feedback/EmptyState";
import { AmountField } from "@/components/ds/forms/AmountField";
import { Input } from "@/components/ds/forms/Input";
import { Select } from "@/components/ds/forms/Select";
import { LoanCard } from "@/components/ds/wallet/LoanCard";
import { useFamily } from "@/lib/store";
import styles from "./AllowanceRules.module.css";

export function ParentLoans() {
  const { state, createLoan, recordRepayment } = useFamily();
  const loan = state.loans.find((l) => l.status !== "paid");
  const [newAmount, setNewAmount] = React.useState("");
  const [newReason, setNewReason] = React.useState("");

  function markPaidOff() {
    if (!loan) return;
    recordRepayment(loan.id, loan.borrowed - loan.repaid);
  }

  function submitNewLoan() {
    const amount = Number(newAmount);
    if (!amount || !newReason) return;
    createLoan({ reason: newReason, borrowed: amount, dueLabel: "$2 from each allowance" });
    setNewAmount("");
    setNewReason("");
  }

  return (
    <div className={styles.grid}>
      {loan ? (
        <LoanCard {...loan}>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <Button variant="secondary" icon="pencil">
              Change terms
            </Button>
            <Button variant="primary" icon="check-check" onClick={markPaidOff}>
              Mark as paid off
            </Button>
          </div>
        </LoanCard>
      ) : (
        <EmptyState icon="hand-coins" title="No active loan" description="Create a new loan on the right when your child asks to borrow." />
      )}
      <div style={{ display: "grid", gap: "var(--space-5)" }}>
        <Card>
          <SectionHeading title="New loan" subtitle={`${state.family.child.name} asks; you decide the terms`} />
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <AmountField label="Amount to lend" value={newAmount} onChange={(e) => setNewAmount(e.target.value)} hint="Comes out of your deposits, not the child's balance." />
            <Select label="Pay back" options={["$2 from each allowance", "$5 from each allowance", "In one payment"]} />
            <Input label="Reason" value={newReason} onChange={(e) => setNewReason(e.target.value)} hint="What the loan is for, in the child's words." />
            <Button variant="primary" icon="hand-coins" fullWidth onClick={submitNewLoan}>
              Create loan
            </Button>
          </div>
        </Card>
        {loan ? (
          <Card tone="sunken">
            <SectionHeading level="h3" title={`What ${state.family.child.name} sees`} subtitle="Read-only, with the same numbers" />
            <ProgressBar tone="sun" value={loan.repaid} max={loan.borrowed} label="Still to pay back" valueLabel={`$${(loan.borrowed - loan.repaid).toFixed(2)} of $${loan.borrowed.toFixed(2)}`} />
            <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: "var(--space-3)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
              <Icon name="eye" size={15} />
              Transparency by default: the child sees every rule that affects them.
            </div>
          </Card>
        ) : null}
      </div>
    </div>
  );
}
