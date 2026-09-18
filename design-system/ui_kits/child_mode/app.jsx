const { TopBar, TabBar, IconButton, Dialog, AmountField, Input, Toast, Icon } = window.EddyWalletDesignSystem_7e6d2a;

const TABS = [
  { id: "home", label: "Wallet", icon: "wallet" },
  { id: "activity", label: "Activity", icon: "list" },
  { id: "loans", label: "Loans", icon: "hand-coins" },
  { id: "lessons", label: "Learn", icon: "graduation-cap" },
];
const TITLES = {
  home: ["Hi, Mia!", "Tuesday, 18 March"],
  activity: ["Your activity", "Every move your money made"],
  loans: ["Your loan", "Read-only — a parent sets the rules"],
  lessons: ["Learn", "6 short lessons about money"],
};

function App() {
  const [stage, setStage] = React.useState("role");
  const [tab, setTab] = React.useState("home");
  const [ask, setAsk] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  if (stage === "role") return <div className="eddy-shell"><RolePicker onPick={r => setStage(r === "child" ? "pin" : "parent")} /></div>;
  if (stage === "pin") return <div className="eddy-shell"><PinUnlock onDone={() => setStage("app")} onBack={() => setStage("role")} /></div>;
  if (stage === "parent") return (
    <div className="eddy-shell">
      <div style={{ display: "grid", alignContent: "center", justifyItems: "center", gap: "var(--space-4)", padding: "var(--space-8)", minHeight: "100vh", textAlign: "center" }}>
        <Icon name="shield-check" size={40} color="var(--state-locked)" />
        <h1 style={{ fontSize: "var(--text-h1)" }}>Parent Mode lives in its own kit</h1>
        <p style={{ color: "var(--text-muted)" }}>Open ui_kits/parent_mode/index.html for the parent dashboard, rules and approvals.</p>
        <button type="button" onClick={() => setStage("role")} style={{ background: "none", border: "none", color: "var(--text-link)", fontWeight: 700, cursor: "pointer" }}>Back</button>
      </div>
    </div>
  );

  const title = TITLES[tab][0], subtitle = TITLES[tab][1];
  return (
    <div className="eddy-shell">
      <TopBar title={title} subtitle={subtitle} actions={<IconButton icon="log-out" label="Switch user" onClick={() => setStage("role")} />} />
      <div className="eddy-scroll">
        {tab === "home" ? <ChildHome onNav={setTab} onRequest={() => setAsk(true)} /> : null}
        {tab === "activity" ? <ChildActivity /> : null}
        {tab === "loans" ? <ChildLoans /> : null}
        {tab === "lessons" ? <ChildLessons /> : null}
      </div>
      {sent ? <div style={{ position: "absolute", left: "var(--space-4)", right: "var(--space-4)", bottom: 96, zIndex: 40 }}><Toast tone="info" message="Sent to Dad" detail="You'll see it in your activity as soon as he says yes." /></div> : null}
      <TabBar items={TABS} value={tab} onChange={setTab} />
      <Dialog open={ask} title="Ask to spend" icon="arrow-up-right"
        description="Dad gets a note. Nothing leaves your wallet until he says yes."
        confirmLabel="Send it" cancelLabel="Never mind"
        onConfirm={() => { setAsk(false); setSent(true); setTimeout(() => setSent(false), 3000); }}
        onClose={() => setAsk(false)}>
        <AmountField label="How much?" value="4.25" max={CHILD.balance} />
        <Input label="What's it for?" defaultValue="Comic book" icon="gift" />
      </Dialog>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
