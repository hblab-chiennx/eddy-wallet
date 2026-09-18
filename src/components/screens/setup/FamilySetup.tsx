"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ds/core/Badge";
import { Button } from "@/components/ds/core/Button";
import { Card } from "@/components/ds/core/Card";
import { Icon } from "@/components/ds/core/Icon";
import { SectionHeading } from "@/components/ds/core/SectionHeading";
import { AmountField } from "@/components/ds/forms/AmountField";
import { Checkbox } from "@/components/ds/forms/Checkbox";
import { Input } from "@/components/ds/forms/Input";
import { PinPad } from "@/components/ds/forms/PinPad";
import { Select } from "@/components/ds/forms/Select";
import { ParentOnlyChip } from "@/components/ds/wallet/ParentOnlyChip";
import { useFamily } from "@/lib/store";
import styles from "./FamilySetup.module.css";

const STEPS = ["Your account", "Add a child", "Set a PIN", "First rules"];

const WHAT_IT_IS: Array<[string, string]> = [
  ["piggy-bank", "A virtual wallet for allowance. No real money ever moves."],
  ["users", "One shared wallet: you deposit and set rules, your child tracks and learns."],
  ["graduation-cap", "Short lessons unlock as your child goes — balance, loans, interest."],
  ["triangle-alert", "v1 data lives in this browser only. No sync, no recovery."],
];

export function FamilySetup() {
  const router = useRouter();
  const { updateAllowanceRule, state } = useFamily();
  const [step, setStep] = React.useState(1);
  const [parentName, setParentName] = React.useState(state.family.parent.name);
  const [childName, setChildName] = React.useState(state.family.child.name);
  const [pin, setPin] = React.useState("");
  const [allowance, setAllowance] = React.useState(String(state.family.allowanceAmount.toFixed(2)));
  const [acknowledged, setAcknowledged] = React.useState(true);
  const [requireApproval, setRequireApproval] = React.useState(true);

  function finishSetup() {
    updateAllowanceRule({ ...state.allowanceRule, amount: Number(allowance) || state.allowanceRule.amount });
    router.push("/parent");
  }

  return (
    <div style={{ display: "grid", gap: "var(--space-5)" }}>
      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
        {STEPS.map((s, i) => (
          <button
            key={s}
            type="button"
            onClick={() => setStep(i + 1)}
            className={styles.stepButton}
            data-active={step === i + 1}
          >
            <span style={{ fontFamily: "var(--font-mono)" }}>{i + 1}</span>
            {s}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        <Card>
          {step === 1 ? (
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              <SectionHeading title="Create the family account" subtitle="You hold the account. Children unlock it with a PIN." />
              <Input label="Your name" value={parentName} onChange={(e) => setParentName(e.target.value)} icon="user" />
              <Input label="Email" defaultValue="parent@example.com" type="email" hint="Used for approval notices only." />
              <Checkbox
                label="I understand v1 stores everything in this browser"
                description="No sync, no backup. Clearing browser data loses the wallet history."
                checked={acknowledged}
                onChange={() => setAcknowledged((v) => !v)}
              />
              <Button variant="primary" iconRight="chevron-right" onClick={() => setStep(2)}>
                Next
              </Button>
            </div>
          ) : step === 2 ? (
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              <SectionHeading title="Add a child" subtitle="One child per wallet in v1." />
              <Input label="Child's name" value={childName} onChange={(e) => setChildName(e.target.value)} icon="user" hint="Shown at the top of their wallet." />
              <Select label="Age" options={["7", "8", "9", "10", "11", "12"]} />
              <Button variant="primary" iconRight="chevron-right" onClick={() => setStep(3)}>
                Next
              </Button>
            </div>
          ) : step === 3 ? (
            <div style={{ display: "grid", gap: "var(--space-4)", justifyItems: "center" }}>
              <SectionHeading title={`Set ${childName}'s PIN`} subtitle="Four numbers they can remember. You can reset it any time." style={{ width: "100%" }} />
              <PinPad value={pin} onChange={setPin} />
              <Button variant="primary" iconRight="chevron-right" fullWidth disabled={pin.length < 4} onClick={() => setStep(4)}>
                Next
              </Button>
            </div>
          ) : (
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              <SectionHeading title="First rules" subtitle="You can change all of this later." />
              <AmountField label="Weekly allowance" value={allowance} onChange={(e) => setAllowance(e.target.value)} />
              <Select label="Paid" options={["Every Sunday", "Every other Sunday", "1st of the month"]} />
              <Checkbox label="Require approval before spending" checked={requireApproval} onChange={() => setRequireApproval((v) => !v)} />
              <Button variant="accent" icon="party-popper" onClick={finishSetup}>
                Finish setup
              </Button>
            </div>
          )}
        </Card>

        <div style={{ display: "grid", gap: "var(--space-4)" }}>
          <Card tone="sunken">
            <SectionHeading level="h3" title="What Eddy Wallet is" />
            <div style={{ display: "grid", gap: "var(--space-3)", fontSize: "var(--text-sm)", color: "var(--text-body)" }}>
              {WHAT_IT_IS.map(([icon, text]) => (
                <div key={text} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                  <Icon name={icon} size={18} color="var(--brand-primary)" style={{ marginTop: 2 }} />
                  {text}
                </div>
              ))}
            </div>
          </Card>
          <Card tone="parent">
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <ParentOnlyChip />
              <Badge tone="sun" icon="triangle-alert">
                Undecided
              </Badge>
            </div>
            <div style={{ fontSize: "var(--text-sm)", color: "var(--sky-700)", marginTop: "var(--space-3)" }}>
              Second child and second guardian are open questions — this flow assumes one of each.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
