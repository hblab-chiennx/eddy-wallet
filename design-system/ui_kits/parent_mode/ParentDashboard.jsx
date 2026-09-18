const { BalanceCard, StatTile, Card, SectionHeading, ActivityRow, Button, LoanCard, ProgressBar, ParentOnlyChip, Icon } = window.EddyWalletDesignSystem_7e6d2a;

function ParentDashboard({ onNav, onDeposit }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-6)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)", gap: "var(--space-5)", alignItems: "start" }}>
        <BalanceCard owner={FAMILY.child + "'s wallet"} balance={FAMILY.balance}
          caption={"Virtual balance only — no real money moves. Next allowance: Sunday, $" + FAMILY.allowance + "."}
          chips={[{ icon: "repeat", label: FAMILY.cadence }, { icon: "percent", label: FAMILY.interest + "% on savings" }, { icon: "hand-coins", label: "1 active loan" }]}>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <Button variant="primary" icon="plus" onClick={onDeposit}>Deposit</Button>
            <Button variant="secondary" icon="minus" onClick={() => onNav("actions")}>Withdraw</Button>
            <Button variant="ghost" iconRight="chevron-right" onClick={() => onNav("actions")}>Parent-only actions</Button>
          </div>
        </BalanceCard>
        <Card tone="parent">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-3)" }}>
            <h3 style={{ margin: 0, color: "var(--sky-700)" }}>Waiting on you</h3>
            <ParentOnlyChip />
          </div>
          <div style={{ display: "grid", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
            {PENDING.map(p => (
              <div key={p.id} style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", padding: "var(--space-3)", background: "var(--paper)", borderRadius: "var(--radius-md)" }}>
                <Icon name="arrow-up-right" size={18} color="var(--berry-700)" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, color: "var(--text-heading)" }}>{p.title}</div>
                  <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{p.meta}</div>
                </div>
                <span className="eddy-money" style={{ color: "var(--money-out)" }}>{"$" + p.amount.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <Button variant="primary" fullWidth icon="check-check" style={{ marginTop: "var(--space-4)" }} onClick={() => onNav("actions")}>Review requests</Button>
        </Card>
      </div>

      <div className="p-grid">
        <StatTile label="Allowance paid" money={20} delta="4 payments this month" icon="hand-coins" tone="teal" />
        <StatTile label="Spent this month" money={18.75} delta="Across 4 purchases" icon="arrow-up-right" tone="berry" />
        <StatTile label="Interest earned" money={0.8} delta="2% on the savings balance" icon="percent" tone="teal" />
        <StatTile label="Lessons done" value="2 of 6" delta="Interest is up next" icon="graduation-cap" tone="sky" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)", gap: "var(--space-5)", alignItems: "start" }}>
        <div>
          <SectionHeading title="Recent activity" subtitle="One row shape for every kind of event" action="See all" onAction={() => onNav("activity")} />
          <Card padding="var(--space-4)">
            {LEDGER.slice(0, 6).map((l, i) => (
              <ActivityRow key={l.id} {...l} style={i === 5 ? { borderBottom: "none" } : undefined} />
            ))}
          </Card>
        </div>
        <div style={{ display: "grid", gap: "var(--space-4)" }}>
          <LoanCard {...LOAN} />
          <Card>
            <SectionHeading level="h3" title="Lesson progress" subtitle="Read-only monitor view" />
            <ProgressBar tone="grape" value={2} max={6} valueLabel="2 of 6" />
            <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginTop: "var(--space-3)" }}>
              Mia finished "Saving vs. spending" on Monday. You can see lessons but not mark them done.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
window.ParentDashboard = ParentDashboard;
