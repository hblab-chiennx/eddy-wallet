const { Card, SectionHeading, Input, AmountField, Select, Button, PinPad, Badge, Icon, ParentOnlyChip, Checkbox } = window.EddyWalletDesignSystem_7e6d2a;

function FamilySetup() {
  const [step, setStep] = React.useState(1);
  const [pin, setPin] = React.useState("");
  const steps = ["Your account", "Add a child", "Set a PIN", "First rules"];
  return (
    <div style={{ display: "grid", gap: "var(--space-5)" }}>
      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
        {steps.map((s, i) => (
          <button key={s} type="button" onClick={() => setStep(i + 1)}
            style={{ display: "flex", gap: 8, alignItems: "center", padding: "8px 14px", borderRadius: "var(--radius-pill)", border: "2px solid " + (step === i + 1 ? "var(--teal-800)" : "var(--border-subtle)"),
              background: step === i + 1 ? "var(--brand-primary)" : "var(--surface-card)", color: step === i + 1 ? "#fff" : "var(--text-muted)", font: "inherit", fontWeight: 700, fontSize: "var(--text-sm)", cursor: "pointer" }}>
            <span style={{ fontFamily: "var(--font-mono)" }}>{i + 1}</span>{s}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "var(--space-5)", alignItems: "start" }}>
        <Card>
          {step === 1 ? (
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              <SectionHeading title="Create the family account" subtitle="You hold the account. Children unlock it with a PIN." />
              <Input label="Your name" defaultValue="Dad" icon="user" />
              <Input label="Email" defaultValue="dad@example.com" type="email" hint="Used for approval notices only." />
              <Checkbox label="I understand v1 stores everything in this browser" description="No sync, no backup. Clearing browser data loses the wallet history." checked />
              <Button variant="primary" iconRight="chevron-right" onClick={() => setStep(2)}>Next</Button>
            </div>
          ) : step === 2 ? (
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              <SectionHeading title="Add a child" subtitle="One child per wallet in v1." />
              <Input label="Child's name" defaultValue="Mia" icon="user" hint="Shown at the top of her wallet." />
              <Select label="Age" options={["7", "8", "9", "10", "11", "12"]} />
              <Button variant="primary" iconRight="chevron-right" onClick={() => setStep(3)}>Next</Button>
            </div>
          ) : step === 3 ? (
            <div style={{ display: "grid", gap: "var(--space-4)", justifyItems: "center" }}>
              <SectionHeading title="Set Mia's PIN" subtitle="Four numbers she can remember. You can reset it any time." style={{ width: "100%" }} />
              <PinPad value={pin} onChange={setPin} />
              <Button variant="primary" iconRight="chevron-right" fullWidth disabled={pin.length < 4} onClick={() => setStep(4)}>Next</Button>
            </div>
          ) : (
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              <SectionHeading title="First rules" subtitle="You can change all of this later." />
              <AmountField label="Weekly allowance" value="5.00" />
              <Select label="Paid" options={["Every Sunday", "Every other Sunday", "1st of the month"]} />
              <Checkbox label="Require approval before Mia spends" checked />
              <Button variant="accent" icon="party-popper">Finish setup</Button>
            </div>
          )}
        </Card>

        <div style={{ display: "grid", gap: "var(--space-4)" }}>
          <Card tone="sunken">
            <SectionHeading level="h3" title="What Eddy Wallet is" />
            <div style={{ display: "grid", gap: "var(--space-3)", fontSize: "var(--text-sm)", color: "var(--text-body)" }}>
              {[["piggy-bank", "A virtual wallet for allowance. No real money ever moves."],
                ["users", "One shared wallet: you deposit and set rules, your child tracks and learns."],
                ["graduation-cap", "Short lessons unlock as your child goes — balance, loans, interest."],
                ["triangle-alert", "v1 data lives in this browser only. No sync, no recovery."]].map(([ic, t]) => (
                <div key={t} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                  <Icon name={ic} size={18} color="var(--brand-primary)" style={{ marginTop: 2 }} />{t}
                </div>
              ))}
            </div>
          </Card>
          <Card tone="parent">
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <ParentOnlyChip />
              <Badge tone="sun" icon="triangle-alert">Undecided</Badge>
            </div>
            <div style={{ fontSize: "var(--text-sm)", color: "var(--sky-700)", marginTop: "var(--space-3)" }}>
              Second child and second guardian are open questions — this flow assumes one of each.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
window.FamilySetup = FamilySetup;
