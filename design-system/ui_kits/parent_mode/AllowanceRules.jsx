const { Card, SectionHeading, AmountField, Select, Switch, Checkbox, Button, ParentOnlyChip, Toast, Badge, Icon, LoanCard, ProgressBar } = window.EddyWalletDesignSystem_7e6d2a;

function AllowanceRules() {
  const [amount, setAmount] = React.useState("5.00");
  const [approval, setApproval] = React.useState(true);
  const [interest, setInterest] = React.useState(true);
  const [saved, setSaved] = React.useState(false);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "var(--space-5)", alignItems: "start" }}>
      <Card>
        <SectionHeading title="Allowance" subtitle="Applies from the next payment onward" />
        <div style={{ display: "grid", gap: "var(--space-4)" }}>
          <AmountField label="Amount" value={amount} onChange={e => setAmount(e.target.value)} hint="Mia sees this as '$5 weekly' on her wallet." />
          <Select label="How often" options={["Every Sunday", "Every other Sunday", "1st of the month", "15th and 30th"]} />
          <Checkbox label="Pause allowance while a loan is overdue" description="Eddy tells Mia why, in kid language." />
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
            <Button variant="primary" icon="check" onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2400); }}>Save rules</Button>
            <ParentOnlyChip />
          </div>
          {saved ? <Toast tone="success" message="Rules saved" detail="Mia's wallet updates right away." /> : null}
        </div>
      </Card>

      <div style={{ display: "grid", gap: "var(--space-5)" }}>
        <Card tone="parent">
          <SectionHeading title="Controls" subtitle="Mia can see these; only you can change them" />
          <div style={{ display: "grid", gap: "var(--space-2)" }}>
            <Switch label="Require approval to spend" description="Requests wait in Parent-only actions." parentOnly checked={approval} onChange={() => setApproval(v => !v)} />
            <Switch label="Pay interest on savings" description="2% monthly on the balance left untouched." parentOnly checked={interest} onChange={() => setInterest(v => !v)} />
            <Switch label="Let Mia log spending herself" description="You review it afterwards instead of before." parentOnly checked={false} />
          </div>
        </Card>
        <Card>
          <SectionHeading title="Loan rules" subtitle="One active loan at a time" />
          <div style={{ display: "grid", gap: "var(--space-3)" }}>
            <Select label="Repayment" options={["$2 from each allowance", "$5 from each allowance", "Half of each allowance"]} />
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <Badge tone="sun" icon="triangle-alert">Undecided</Badge>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>Late-repayment behaviour is still an open product question.</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function ParentLoans({ onNav }) {
  const { Card: C } = window.EddyWalletDesignSystem_7e6d2a;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "var(--space-5)", alignItems: "start" }}>
      <LoanCard {...LOAN}>
        <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
          <Button variant="secondary" icon="pencil">Change terms</Button>
          <Button variant="primary" icon="check-check">Mark as paid off</Button>
        </div>
      </LoanCard>
      <div style={{ display: "grid", gap: "var(--space-5)" }}>
        <C>
          <SectionHeading title="New loan" subtitle="Mia asks; you decide the terms" />
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <AmountField label="Amount to lend" value="" hint="Comes out of your deposits, not Mia's balance." />
            <Select label="Pay back" options={["$2 from each allowance", "$5 from each allowance", "In one payment"]} />
            <Button variant="primary" icon="hand-coins" fullWidth>Create loan</Button>
          </div>
        </C>
        <C tone="sunken">
          <SectionHeading level="h3" title="What Mia sees" subtitle="Read-only, with the same numbers" />
          <ProgressBar tone="sun" value={12} max={20} label="Still to pay back" valueLabel="$8.00 of $20.00" />
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: "var(--space-3)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
            <Icon name="eye" size={15} />Transparency by default: the child sees every rule that affects her.
          </div>
        </C>
      </div>
    </div>
  );
}
Object.assign(window, { AllowanceRules, ParentLoans });
