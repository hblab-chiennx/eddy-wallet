const { BalanceCard, Card, SectionHeading, ActivityRow, ProgressBar, Button, Icon, LessonCard } = window.EddyWalletDesignSystem_7e6d2a;

function ChildHome({ onNav, onRequest }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-6)", paddingTop: "var(--space-2)" }}>
      <BalanceCard owner="Mia's wallet" balance={CHILD.balance}
        caption="Allowance lands Sunday — 3 days to go."
        chips={[{ icon: "hand-coins", label: "$" + CHILD.allowance + " weekly" }, { icon: "percent", label: CHILD.interest + "% on savings" }]}>
        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          <Button variant="accent" icon="arrow-up-right" fullWidth onClick={onRequest}>Ask to spend</Button>
          <Button variant="secondary" icon="list" fullWidth onClick={() => onNav("activity")}>Activity</Button>
        </div>
      </BalanceCard>

      <Card sticker radius="var(--radius-xl)">
        <SectionHeading level="h3" title={"Saving for a " + GOAL.name.toLowerCase()} subtitle="You're over halfway there." />
        <ProgressBar value={GOAL.saved} max={GOAL.target} valueLabel={"$" + GOAL.saved.toFixed(2) + " of $" + GOAL.target} />
        <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: "var(--space-3)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          <Icon name="flame" size={15} color="var(--sun-600)" />
          {"You saved $" + CHILD.savedThisMonth + " this month — your best yet."}
        </div>
      </Card>

      <div>
        <SectionHeading title="What happened lately" action="See all" onAction={() => onNav("activity")} />
        <Card padding="var(--space-4)">
          {ACTIVITY.slice(0, 4).map((a, i) => (
            <ActivityRow key={a.id} {...a} style={i === 3 ? { borderBottom: "none" } : undefined} />
          ))}
        </Card>
      </div>

      <div>
        <SectionHeading title="Keep learning" subtitle="One lesson unlocks the next" action="All lessons" onAction={() => onNav("lessons")} />
        <LessonCard index={3} {...LESSONS[2]} onClick={() => onNav("lessons")} />
      </div>
    </div>
  );
}
window.ChildHome = ChildHome;
