const { Tabs, Card, ActivityRow, Input, Select, SectionHeading, EmptyState } = window.EddyWalletDesignSystem_7e6d2a;

const MATCH = { Allowance: ["allowance"], Deposits: ["deposit", "interest"], Spending: ["spend", "withdraw"], Loans: ["loan", "repayment"], Lessons: ["lesson"] };

function ParentActivity() {
  const [filter, setFilter] = React.useState("All");
  const [q, setQ] = React.useState("");
  let rows = filter === "All" ? LEDGER : LEDGER.filter(l => MATCH[filter].includes(l.type));
  if (q) rows = rows.filter(l => l.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={{ display: "grid", gap: "var(--space-4)" }}>
      <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "flex-end" }}>
        <Input placeholder="Search activity" icon="search" value={q} onChange={e => setQ(e.target.value)} style={{ flex: 1, minWidth: 220 }} />
        <Select options={["Last 30 days", "This month", "Last 3 months", "All time"]} style={{ width: 180 }} />
      </div>
      <Tabs items={["All", "Allowance", "Deposits", "Spending", "Loans", "Lessons"]} value={filter} onChange={setFilter} />
      <Card padding="var(--space-4)">
        <SectionHeading level="h3" title={rows.length + " entries"} subtitle="Parent-only entries are flagged with a lock" />
        {rows.length ? rows.map((l, i) => (
          <ActivityRow key={l.id} {...l} style={i === rows.length - 1 ? { borderBottom: "none" } : undefined} />
        )) : <EmptyState icon="funnel" title="No entries match" description="Clear the search or pick another filter." />}
      </Card>
    </div>
  );
}
window.ParentActivity = ParentActivity;
