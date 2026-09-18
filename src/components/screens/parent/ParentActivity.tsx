"use client";

import React from "react";
import { Card } from "@/components/ds/core/Card";
import { SectionHeading } from "@/components/ds/core/SectionHeading";
import { EmptyState } from "@/components/ds/feedback/EmptyState";
import { Input } from "@/components/ds/forms/Input";
import { Select } from "@/components/ds/forms/Select";
import { Tabs } from "@/components/ds/navigation/Tabs";
import { ActivityRow } from "@/components/ds/wallet/ActivityRow";
import { useFamily } from "@/lib/store";
import type { LedgerEntryType } from "@/lib/types";

const FILTERS = ["All", "Allowance", "Deposits", "Spending", "Loans", "Lessons"] as const;
type Filter = (typeof FILTERS)[number];
const MATCH: Record<Exclude<Filter, "All">, LedgerEntryType[]> = {
  Allowance: ["allowance"],
  Deposits: ["deposit", "interest"],
  Spending: ["spend", "withdraw"],
  Loans: ["loan", "repayment"],
  Lessons: ["lesson"],
};

export function ParentActivity() {
  const { state } = useFamily();
  const [filter, setFilter] = React.useState<Filter>("All");
  const [query, setQuery] = React.useState("");

  let rows = filter === "All" ? state.ledger : state.ledger.filter((l) => MATCH[filter].includes(l.type));
  if (query) rows = rows.filter((l) => l.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div style={{ display: "grid", gap: "var(--space-4)" }}>
      <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "flex-end" }}>
        <Input placeholder="Search activity" icon="search" value={query} onChange={(e) => setQuery(e.target.value)} style={{ flex: 1, minWidth: 220 }} />
        <Select options={["Last 30 days", "This month", "Last 3 months", "All time"]} style={{ width: 180 }} />
      </div>
      <Tabs items={[...FILTERS]} value={filter} onChange={(id) => setFilter(id as Filter)} />
      <Card padding="var(--space-4)">
        <SectionHeading level="h3" title={`${rows.length} entries`} subtitle="Parent-only entries are flagged with a lock" />
        {rows.length ? (
          rows.map((l, i) => <ActivityRow key={l.id} {...l} style={i === rows.length - 1 ? { borderBottom: "none" } : undefined} />)
        ) : (
          <EmptyState icon="funnel" title="No entries match" description="Clear the search or pick another filter." />
        )}
      </Card>
    </div>
  );
}
