const { Card, SectionHeading, Button, Dialog, AmountField, Input, Select, ParentOnlyChip, ActivityRow, Toast, Icon, Badge, EmptyState, Switch } = window.EddyWalletDesignSystem_7e6d2a;

function ParentActions({ deposit, setDeposit }) {
  const [queue, setQueue] = React.useState(PENDING);
  const [toast, setToast] = React.useState(null);
  const [confirm, setConfirm] = React.useState(null);

  const resolve = (id, ok) => {
    const item = queue.find(q => q.id === id);
    setQueue(q => q.filter(x => x.id !== id));
    setToast(ok
      ? { tone: "success", message: "Approved", detail: item.title + " · $" + item.amount.toFixed(2) + " left Mia's wallet" }
      : { tone: "info", message: "Declined", detail: "Mia sees a short note, not a rejection." });
    setTimeout(() => setToast(null), 2800);
  };

  return (
    <div style={{ display: "grid", gap: "var(--space-5)" }}>
      <ParentOnlyChip variant="banner" label="Everything on this screen is parent-only. Mia can see that it exists — she can't act on it." />

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)", gap: "var(--space-5)", alignItems: "start" }}>
        <Card>
          <SectionHeading title="Approval queue" subtitle={queue.length + " waiting"} />
          {queue.length ? queue.map(item => (
            <div key={item.id} style={{ display: "grid", gap: "var(--space-3)", padding: "var(--space-4) 0", borderBottom: "1px solid var(--border-subtle)" }}>
              <ActivityRow {...item} style={{ borderBottom: "none", padding: 0 }} />
              <div style={{ display: "flex", gap: "var(--space-3)" }}>
                <Button size="sm" variant="primary" icon="check" onClick={() => resolve(item.id, true)}>Approve</Button>
                <Button size="sm" variant="secondary" icon="x" onClick={() => resolve(item.id, false)}>Decline</Button>
                <Button size="sm" variant="ghost" icon="info">Ask Mia about it</Button>
              </div>
            </div>
          )) : <EmptyState icon="check-check" title="All caught up" description="New requests from Mia land here." />}
        </Card>

        <div style={{ display: "grid", gap: "var(--space-5)" }}>
          <Card>
            <SectionHeading title="Move money" subtitle="Virtual balance only" />
            <div style={{ display: "grid", gap: "var(--space-3)" }}>
              <Button variant="primary" icon="plus" fullWidth onClick={() => setDeposit(true)}>Deposit to Mia's wallet</Button>
              <Button variant="danger" icon="minus" fullWidth onClick={() => setConfirm("withdraw")}>Withdraw from Mia's wallet</Button>
              <div style={{ display: "flex", gap: 6, alignItems: "flex-start", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
                <Icon name="info" size={15} style={{ marginTop: 2 }} />Every move shows up in Mia's activity with your name on it.
              </div>
            </div>
          </Card>
          <Card tone="parent">
            <SectionHeading title="Account controls" />
            <div style={{ display: "grid", gap: "var(--space-2)" }}>
              <Switch label="Mia can use Child Mode" description="Turning this off hides the wallet from the role picker." parentOnly checked />
              <Switch label="Show interest in Child Mode" parentOnly checked />
            </div>
            <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-4)", flexWrap: "wrap" }}>
              <Button size="sm" variant="secondary" icon="rotate-ccw">Reset PIN</Button>
              <Button size="sm" variant="ghost" icon="trash">Remove child</Button>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: "var(--space-3)" }}>
              <Badge tone="sun" icon="triangle-alert">Undecided</Badge>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--sky-700)" }}>PIN re-authentication flow is an open question.</span>
            </div>
          </Card>
        </div>
      </div>

      {toast ? <div style={{ position: "fixed", right: "var(--space-6)", bottom: "var(--space-6)", zIndex: 60 }}><Toast {...toast} /></div> : null}

      <Dialog open={deposit} title="Deposit to Mia's wallet" icon="plus" tone="parent" parentOnly
        description="Adds to her virtual balance. She'll see it in her activity straight away."
        confirmLabel="Add it" onConfirm={() => { setDeposit(false); setToast({ tone: "success", message: "Deposit added", detail: "$10.00 to Mia's wallet" }); setTimeout(() => setToast(null), 2800); }}
        onClose={() => setDeposit(false)}>
        <AmountField label="How much?" value="10.00" />
        <Input label="Note for Mia" defaultValue="Helping Grandma with the garden" icon="pencil" />
        <Select label="Count it as" options={["Extra (one-off)", "Chore bonus", "Gift from family"]} />
      </Dialog>

      <Dialog open={confirm === "withdraw"} title="Withdraw $5.00?" icon="minus" tone="danger" parentOnly
        description="Mia's balance goes from $42.50 to $37.50. The entry appears in her activity with your name on it."
        confirmLabel="Withdraw" onConfirm={() => { setConfirm(null); setToast({ tone: "info", message: "Withdrawal logged", detail: "Mia's balance is now $37.50" }); setTimeout(() => setToast(null), 2800); }}
        onClose={() => setConfirm(null)}>
        <AmountField label="How much?" value="5.00" max={42.5} />
        <Input label="Reason (Mia sees this)" defaultValue="Cash for the school fair" />
      </Dialog>
    </div>
  );
}
window.ParentActions = ParentActions;
