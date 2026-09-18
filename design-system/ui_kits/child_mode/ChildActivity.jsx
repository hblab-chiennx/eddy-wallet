const { Tabs, Card, ActivityRow, EmptyState, Icon } = window.EddyWalletDesignSystem_7e6d2a;

const FILTERS = ["All", "Allowance", "Spending", "Loans", "Lessons"];
const MATCH = { Allowance: ["allowance", "deposit", "interest"], Spending: ["spend", "withdraw"], Loans: ["loan", "repayment"], Lessons: ["lesson"] };

function ChildActivity() {
  const [filter, setFilter] = React.useState("All");
  const rows = filter === "All" ? ACTIVITY : ACTIVITY.filter(a => MATCH[filter].includes(a.type));
  return (
    <div style={{ display: "grid", gap: "var(--space-4)", paddingTop: "var(--space-2)" }}>
      <Tabs items={FILTERS} value={filter} onChange={setFilter} />
      <div style={{ display: "flex", gap: 6, alignItems: "center", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
        <Icon name="eye" size={15} />Everything here is visible to you and your parent.
      </div>
      <Card padding="var(--space-4)">
        {rows.length ? rows.map((a, i) => (
          <ActivityRow key={a.id} {...a} style={i === rows.length - 1 ? { borderBottom: "none" } : undefined} />
        )) : <EmptyState icon="funnel" title="Nothing of that kind yet" description="Try another filter — or come back after Sunday." />}
      </Card>
    </div>
  );
}
window.ChildActivity = ChildActivity;
