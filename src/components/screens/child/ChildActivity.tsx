"use client";

import React from "react";
import { Card } from "@/components/ds/core/Card";
import { Icon } from "@/components/ds/core/Icon";
import { Tabs } from "@/components/ds/navigation/Tabs";
import { EmptyState } from "@/components/ds/feedback/EmptyState";
import { ActivityRow } from "@/components/ds/wallet/ActivityRow";
import { useFamily } from "@/lib/store";
import type { LedgerEntryType } from "@/lib/types";

const FILTERS = ["All", "Allowance", "Spending", "Loans", "Lessons"] as const;
type Filter = (typeof FILTERS)[number];
const MATCH: Record<Exclude<Filter, "All">, LedgerEntryType[]> = {
  Allowance: ["allowance", "deposit", "interest"],
  Spending: ["spend", "withdraw"],
  Loans: ["loan", "repayment"],
  Lessons: ["lesson"],
};

export function ChildActivity() {
  const { state } = useFamily();
  const [filter, setFilter] = React.useState<Filter>("All");
  const rows = filter === "All" ? state.ledger : state.ledger.filter((a) => MATCH[filter].includes(a.type));

  return (
    <div style={{ display: "grid", gap: "var(--space-4)", paddingTop: "var(--space-2)" }}>
      <Tabs items={[...FILTERS]} value={filter} onChange={(id) => setFilter(id as Filter)} />
      <div style={{ display: "flex", gap: 6, alignItems: "center", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
        <Icon name="eye" size={15} />
        Everything here is visible to you and your parent.
      </div>
      <Card padding="var(--space-4)">
        {rows.length ? (
          rows.map((a, i) => <ActivityRow key={a.id} {...a} style={i === rows.length - 1 ? { borderBottom: "none" } : undefined} />)
        ) : (
          <EmptyState icon="funnel" title="Nothing of that kind yet" description="Try another filter — or come back after your next allowance." />
        )}
      </Card>
    </div>
  );
}
