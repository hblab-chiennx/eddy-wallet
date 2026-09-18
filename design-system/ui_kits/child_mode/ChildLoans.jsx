const { LoanCard, Card, SectionHeading, ActivityRow, ParentOnlyChip, Icon } = window.EddyWalletDesignSystem_7e6d2a;

function ChildLoans() {
  return (
    <div style={{ display: "grid", gap: "var(--space-5)", paddingTop: "var(--space-2)" }}>
      <LoanCard {...LOAN} />
      <Card tone="parent" padding="var(--space-4)">
        <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
          <Icon name="shield-check" size={20} color="var(--state-locked)" />
          <div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <strong style={{ color: "var(--sky-700)" }}>Only a parent can change a loan</strong>
              <ParentOnlyChip />
            </div>
            <div style={{ fontSize: "var(--text-sm)", color: "var(--sky-700)", marginTop: 2 }}>
              Ask Dad if you want to pay it back faster. You can always see it here.
            </div>
          </div>
        </div>
      </Card>
      <div>
        <SectionHeading title="Payments so far" subtitle="$2 comes out automatically each Sunday" />
        <Card padding="var(--space-4)">
          {["9 March", "2 March", "24 Feb", "17 Feb", "10 Feb", "3 Feb"].map((d, i, arr) => (
            <ActivityRow key={d} type="repayment" title="Lego loan payment" meta={d + " · automatic"} amount={2} style={i === arr.length - 1 ? { borderBottom: "none" } : undefined} />
          ))}
        </Card>
      </div>
    </div>
  );
}
window.ChildLoans = ChildLoans;
