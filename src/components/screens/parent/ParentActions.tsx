"use client";

import React from "react";
import { Badge } from "@/components/ds/core/Badge";
import { Button } from "@/components/ds/core/Button";
import { Card } from "@/components/ds/core/Card";
import { Icon } from "@/components/ds/core/Icon";
import { SectionHeading } from "@/components/ds/core/SectionHeading";
import { Dialog } from "@/components/ds/feedback/Dialog";
import { EmptyState } from "@/components/ds/feedback/EmptyState";
import { Toast } from "@/components/ds/feedback/Toast";
import { AmountField } from "@/components/ds/forms/AmountField";
import { Input } from "@/components/ds/forms/Input";
import { Select } from "@/components/ds/forms/Select";
import { Switch } from "@/components/ds/forms/Switch";
import { ActivityRow } from "@/components/ds/wallet/ActivityRow";
import { ParentOnlyChip } from "@/components/ds/wallet/ParentOnlyChip";
import { useFamily } from "@/lib/store";
import styles from "./ParentActions.module.css";

interface ToastState {
  tone: "success" | "info" | "warning" | "danger";
  message: string;
  detail?: string;
}

export function ParentActions() {
  const { state, resolveSpendRequest, recordDeposit, recordWithdrawal } = useFamily();
  const queue = state.spendRequests.filter((r) => r.status === "pending");
  const [toast, setToast] = React.useState<ToastState | null>(null);
  const [depositOpen, setDepositOpen] = React.useState(false);
  const [withdrawOpen, setWithdrawOpen] = React.useState(false);
  const [depositAmount, setDepositAmount] = React.useState("10.00");
  const [depositNote, setDepositNote] = React.useState("");
  const [withdrawAmount, setWithdrawAmount] = React.useState("5.00");
  const [withdrawReason, setWithdrawReason] = React.useState("");
  const [childEnabled, setChildEnabled] = React.useState(true);
  const [showInterest, setShowInterest] = React.useState(true);

  function flashToast(next: ToastState) {
    setToast(next);
    setTimeout(() => setToast(null), 2800);
  }

  function resolve(id: string, ok: boolean) {
    const item = queue.find((q) => q.id === id);
    resolveSpendRequest(id, ok ? "approved" : "declined");
    if (!item) return;
    flashToast(
      ok
        ? { tone: "success", message: "Approved", detail: `${item.reason} · $${item.amount.toFixed(2)} left ${state.family.child.name}'s wallet` }
        : { tone: "info", message: "Declined", detail: `${state.family.child.name} sees a short note, not a rejection.` }
    );
  }

  function submitDeposit() {
    const amount = Number(depositAmount);
    if (!amount) return;
    recordDeposit(amount, depositNote);
    setDepositOpen(false);
    flashToast({ tone: "success", message: "Deposit added", detail: `$${amount.toFixed(2)} to ${state.family.child.name}'s wallet` });
  }

  function submitWithdraw() {
    const amount = Number(withdrawAmount);
    if (!amount) return;
    recordWithdrawal(amount, withdrawReason);
    setWithdrawOpen(false);
    flashToast({ tone: "info", message: "Withdrawal logged", detail: `${state.family.child.name}'s balance is now $${(state.family.child.balance - amount).toFixed(2)}` });
  }

  return (
    <div style={{ display: "grid", gap: "var(--space-5)" }}>
      <ParentOnlyChip
        variant="banner"
        label={`Everything on this screen is parent-only. ${state.family.child.name} can see that it exists — they can't act on it.`}
      />

      <div className={styles.grid}>
        <Card>
          <SectionHeading title="Approval queue" subtitle={`${queue.length} waiting`} />
          {queue.length ? (
            queue.map((item) => (
              <div key={item.id} style={{ display: "grid", gap: "var(--space-3)", padding: "var(--space-4) 0", borderBottom: "1px solid var(--border-subtle)" }}>
                <ActivityRow type="spend" title={item.reason} meta="Requested today" amount={item.amount} style={{ borderBottom: "none", padding: 0 }} />
                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                  <Button size="sm" variant="primary" icon="check" onClick={() => resolve(item.id, true)}>
                    Approve
                  </Button>
                  <Button size="sm" variant="secondary" icon="x" onClick={() => resolve(item.id, false)}>
                    Decline
                  </Button>
                  <Button size="sm" variant="ghost" icon="info">
                    Ask {state.family.child.name} about it
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <EmptyState icon="check-check" title="All caught up" description={`New requests from ${state.family.child.name} land here.`} />
          )}
        </Card>

        <div style={{ display: "grid", gap: "var(--space-5)" }}>
          <Card>
            <SectionHeading title="Move money" subtitle="Virtual balance only" />
            <div style={{ display: "grid", gap: "var(--space-3)" }}>
              <Button variant="primary" icon="plus" fullWidth onClick={() => setDepositOpen(true)}>
                Deposit to {state.family.child.name}&apos;s wallet
              </Button>
              <Button variant="danger" icon="minus" fullWidth onClick={() => setWithdrawOpen(true)}>
                Withdraw from {state.family.child.name}&apos;s wallet
              </Button>
              <div style={{ display: "flex", gap: 6, alignItems: "flex-start", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
                <Icon name="info" size={15} style={{ marginTop: 2 }} />
                Every move shows up in {state.family.child.name}&apos;s activity with your name on it.
              </div>
            </div>
          </Card>
          <Card tone="parent">
            <SectionHeading title="Account controls" />
            <div style={{ display: "grid", gap: "var(--space-2)" }}>
              <Switch
                label={`${state.family.child.name} can use Child Mode`}
                description="Turning this off hides the wallet from the role picker."
                parentOnly
                checked={childEnabled}
                onChange={() => setChildEnabled((v) => !v)}
              />
              <Switch label="Show interest in Child Mode" parentOnly checked={showInterest} onChange={() => setShowInterest((v) => !v)} />
            </div>
            <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-4)", flexWrap: "wrap" }}>
              <Button size="sm" variant="secondary" icon="rotate-ccw">
                Reset PIN
              </Button>
              <Button size="sm" variant="ghost" icon="trash">
                Remove child
              </Button>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: "var(--space-3)" }}>
              <Badge tone="sun" icon="triangle-alert">
                Undecided
              </Badge>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--sky-700)" }}>PIN re-authentication flow is an open question.</span>
            </div>
          </Card>
        </div>
      </div>

      {toast ? (
        <div style={{ position: "fixed", right: "var(--space-6)", bottom: "var(--space-6)", zIndex: 60 }}>
          <Toast {...toast} />
        </div>
      ) : null}

      <Dialog
        open={depositOpen}
        title={`Deposit to ${state.family.child.name}'s wallet`}
        icon="plus"
        tone="parent"
        parentOnly
        description={`Adds to their virtual balance. ${state.family.child.name} will see it in their activity straight away.`}
        confirmLabel="Add it"
        onConfirm={submitDeposit}
        onClose={() => setDepositOpen(false)}
      >
        <AmountField label="How much?" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} />
        <Input label={`Note for ${state.family.child.name}`} value={depositNote} onChange={(e) => setDepositNote(e.target.value)} icon="pencil" />
        <Select label="Count it as" options={["Extra (one-off)", "Chore bonus", "Gift from family"]} />
      </Dialog>

      <Dialog
        open={withdrawOpen}
        title={`Withdraw $${Number(withdrawAmount || 0).toFixed(2)}?`}
        icon="minus"
        tone="danger"
        parentOnly
        description={`${state.family.child.name}'s balance goes from $${state.family.child.balance.toFixed(2)} to $${(
          state.family.child.balance - Number(withdrawAmount || 0)
        ).toFixed(2)}. The entry appears in their activity with your name on it.`}
        confirmLabel="Withdraw"
        onConfirm={submitWithdraw}
        onClose={() => setWithdrawOpen(false)}
      >
        <AmountField label="How much?" value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} max={state.family.child.balance} />
        <Input label={`Reason (${state.family.child.name} sees this)`} value={withdrawReason} onChange={(e) => setWithdrawReason(e.target.value)} />
      </Dialog>
    </div>
  );
}
