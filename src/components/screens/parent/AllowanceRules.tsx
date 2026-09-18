"use client";

import React from "react";
import { Badge } from "@/components/ds/core/Badge";
import { Button } from "@/components/ds/core/Button";
import { Card } from "@/components/ds/core/Card";
import { SectionHeading } from "@/components/ds/core/SectionHeading";
import { Toast } from "@/components/ds/feedback/Toast";
import { AmountField } from "@/components/ds/forms/AmountField";
import { Checkbox } from "@/components/ds/forms/Checkbox";
import { Select } from "@/components/ds/forms/Select";
import { Switch } from "@/components/ds/forms/Switch";
import { ParentOnlyChip } from "@/components/ds/wallet/ParentOnlyChip";
import { useFamily } from "@/lib/store";
import styles from "./AllowanceRules.module.css";

const CADENCE_OPTIONS = ["Every Sunday", "Every other Sunday", "1st of the month", "15th and 30th"];

export function AllowanceRules() {
  const { state, updateAllowanceRule } = useFamily();
  const rule = state.allowanceRule;
  const [amount, setAmount] = React.useState(String(rule.amount.toFixed(2)));
  const [cadenceLabel, setCadenceLabel] = React.useState(rule.cadenceLabel);
  const [requireApproval, setRequireApproval] = React.useState(true);
  const [interestEnabled, setInterestEnabled] = React.useState(rule.savingsInterestEnabled);
  const [saved, setSaved] = React.useState(false);

  function save() {
    updateAllowanceRule({
      ...rule,
      amount: Number(amount) || rule.amount,
      cadenceLabel,
      savingsInterestEnabled: interestEnabled,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2400);
  }

  return (
    <div className={styles.grid}>
      <Card>
        <SectionHeading title="Allowance" subtitle="Applies from the next payment onward" />
        <div style={{ display: "grid", gap: "var(--space-4)" }}>
          <AmountField
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            hint={`${state.family.child.name} sees this as '$${amount} weekly' on their wallet.`}
          />
          <Select label="How often" options={CADENCE_OPTIONS} value={cadenceLabel} onChange={(e) => setCadenceLabel(e.target.value)} />
          <Checkbox label="Pause allowance while a loan is overdue" description="Eddy tells the child why, in kid language." />
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
            <Button variant="primary" icon="check" onClick={save}>
              Save rules
            </Button>
            <ParentOnlyChip />
          </div>
          {saved ? <Toast tone="success" message="Rules saved" detail={`${state.family.child.name}'s wallet updates right away.`} /> : null}
        </div>
      </Card>

      <div style={{ display: "grid", gap: "var(--space-5)" }}>
        <Card tone="parent">
          <SectionHeading title="Controls" subtitle={`${state.family.child.name} can see these; only you can change them`} />
          <div style={{ display: "grid", gap: "var(--space-2)" }}>
            <Switch
              label="Require approval to spend"
              description="Requests wait in Parent-only actions."
              parentOnly
              checked={requireApproval}
              onChange={() => setRequireApproval((v) => !v)}
            />
            <Switch
              label="Pay interest on savings"
              description={`${rule.savingsInterestPercent}% monthly on the balance left untouched.`}
              parentOnly
              checked={interestEnabled}
              onChange={() => setInterestEnabled((v) => !v)}
            />
            <Switch
              label="Let the child log spending themselves"
              description="You review it afterwards instead of before."
              parentOnly
              checked={false}
              disabled
            />
          </div>
        </Card>
        <Card>
          <SectionHeading title="Loan rules" subtitle="One active loan at a time" />
          <div style={{ display: "grid", gap: "var(--space-3)" }}>
            <Select label="Repayment" options={["$2 from each allowance", "$5 from each allowance", "Half of each allowance"]} />
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <Badge tone="sun" icon="triangle-alert">
                Undecided
              </Badge>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>Late-repayment behaviour is still an open product question.</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
