const { TopBar, Card, SectionHeading, LessonCard, ProgressBar, ParentOnlyChip, IconButton, Icon } = window.EddyWalletDesignSystem_7e6d2a;

const HEAD = {
  dashboard: ["Mia's wallet", "Tuesday, 18 March · 2 requests waiting"],
  activity: ["Activity", "Every entry in the family ledger"],
  rules: ["Allowance rules", "What Eddy pays, and when"],
  loans: ["Loans & repayments", "One active loan"],
  lessons: ["Lessons", "Monitor view — read-only"],
  actions: ["Parent-only actions", "Approvals, deposits and account controls"],
  setup: ["Family setup", "First-run flow"],
};

function ParentLessons() {
  const lessons = [
    { title: "What's in a wallet?", blurb: "Your balance is just what's left.", minutes: 2, state: "done" },
    { title: "Saving vs. spending", blurb: "Why waiting can get you more.", minutes: 4, state: "done" },
    { title: "What is interest?", blurb: "Money that grows while it waits.", minutes: 3, state: "available" },
    { title: "Borrowing and paying back", blurb: "A loan is a promise.", minutes: 4, state: "locked" },
    { title: "Needs and wants", blurb: "Both are fine. They're different.", minutes: 3, state: "locked" },
    { title: "Making a plan", blurb: "Pick a goal, then split your money.", minutes: 5, state: "locked" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 300px", gap: "var(--space-5)", alignItems: "start" }}>
      <div style={{ display: "grid", gap: "var(--space-3)" }}>
        {lessons.map((l, i) => <LessonCard key={l.title} index={i + 1} {...l} />)}
      </div>
      <div style={{ display: "grid", gap: "var(--space-4)" }}>
        <Card>
          <SectionHeading level="h3" title="Progress" />
          <ProgressBar tone="grape" value={2} max={6} valueLabel="2 of 6" />
        </Card>
        <Card tone="parent">
          <ParentOnlyChip variant="banner" label="You can read every lesson — only Mia can mark one done." />
          <div style={{ display: "flex", gap: 6, alignItems: "flex-start", fontSize: "var(--text-sm)", color: "var(--sky-700)", marginTop: "var(--space-3)" }}>
            <Icon name="eye" size={15} style={{ marginTop: 2 }} />Lessons are the one place Eddy is deliberately not parent-controlled.
          </div>
        </Card>
      </div>
    </div>
  );
}

function App() {
  const [view, setView] = React.useState("dashboard");
  const [deposit, setDeposit] = React.useState(false);
  const head = HEAD[view];
  return (
    <div className="p-shell">
      <Sidebar value={view} onChange={setView} onExit={() => setView("setup")} />
      <div style={{ minWidth: 0, display: "flex", flexDirection: "column" }}>
        <TopBar mode="parent" title={head[0]} subtitle={head[1]}
          actions={<React.Fragment><IconButton icon="bell" label="Alerts" /><IconButton icon="settings" label="Settings" /></React.Fragment>}
          style={{ padding: "18px var(--gutter-desktop)" }} />
        <div className="p-main" style={{ paddingTop: "var(--space-6)" }}>
          {view === "dashboard" ? <ParentDashboard onNav={setView} onDeposit={() => { setView("actions"); setDeposit(true); }} /> : null}
          {view === "activity" ? <ParentActivity /> : null}
          {view === "rules" ? <AllowanceRules /> : null}
          {view === "loans" ? <ParentLoans /> : null}
          {view === "lessons" ? <ParentLessons /> : null}
          {view === "actions" ? <ParentActions deposit={deposit} setDeposit={setDeposit} /> : null}
          {view === "setup" ? <FamilySetup /> : null}
        </div>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
