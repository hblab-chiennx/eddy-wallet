const { Button, Card, Icon, PinPad } = window.EddyWalletDesignSystem_7e6d2a;

function RolePicker({ onPick }) {
  return (
    <div style={{ display: "grid", alignContent: "center", gap: "var(--space-6)", padding: "var(--space-8) var(--gutter-mobile)", minHeight: "100vh" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, letterSpacing: "-0.02em", color: "var(--teal-900)" }}>
          eddy<span style={{ color: "var(--brand-primary)" }}>wallet</span>
        </div>
        <h1 style={{ marginTop: "var(--space-5)", fontSize: "var(--text-display-2)", lineHeight: "var(--lh-display-2)" }}>Who's using Eddy?</h1>
        <p style={{ marginTop: "var(--space-2)", color: "var(--text-muted)" }}>One wallet, shared on this device.</p>
      </div>
      <div style={{ display: "grid", gap: "var(--space-4)" }}>
        {[
          { id: "child", label: "Mia", note: "Child Mode · needs your PIN", icon: "piggy-bank", tint: "var(--brand-primary-soft)", ink: "var(--teal-800)", border: "var(--teal-200)" },
          { id: "parent", label: "Parent", note: "Deposits, rules and approvals", icon: "shield-check", tint: "var(--surface-parent)", ink: "var(--sky-700)", border: "var(--sky-200)" },
        ].map(r => (
          <button key={r.id} type="button" onClick={() => onPick(r.id)}
            style={{ display: "flex", gap: "var(--space-4)", alignItems: "center", textAlign: "left", padding: "var(--space-5)", background: r.tint, border: "2px solid " + r.border, borderRadius: "var(--radius-2xl)", boxShadow: "var(--shadow-sticker)", cursor: "pointer", font: "inherit" }}>
            <span style={{ display: "grid", placeItems: "center", width: 60, height: 60, borderRadius: "var(--radius-xl)", background: "var(--paper)" }}>
              <Icon name={r.icon} size={30} color={r.ink} />
            </span>
            <span>
              <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-h1)", color: "var(--text-heading)" }}>{r.label}</span>
              <span style={{ display: "block", fontSize: "var(--text-sm)", color: r.ink, fontWeight: 600 }}>{r.note}</span>
            </span>
            <Icon name="chevron-right" size={22} color={r.ink} style={{ marginLeft: "auto" }} />
          </button>
        ))}
      </div>
      <p style={{ textAlign: "center", fontSize: "var(--text-sm)", color: "var(--text-muted)", margin: 0 }}>
        Eddy Wallet tracks allowance only — no real money ever moves.
      </p>
    </div>
  );
}

function PinUnlock({ onDone, onBack }) {
  const [pin, setPin] = React.useState("");
  const [error, setError] = React.useState("");
  React.useEffect(() => {
    if (pin.length === 4) {
      if (pin === "1234") onDone();
      else { setError("That's not it. Try again!"); setTimeout(() => { setPin(""); }, 500); }
    } else if (error) setError("");
  }, [pin]);
  return (
    <div style={{ display: "grid", alignContent: "center", justifyItems: "center", gap: "var(--space-6)", padding: "var(--space-8) var(--gutter-mobile)", minHeight: "100vh", textAlign: "center" }}>
      <span style={{ display: "grid", placeItems: "center", width: 64, height: 64, borderRadius: "var(--radius-xl)", background: "var(--brand-primary-soft)" }}>
        <Icon name="lock-open" size={30} color="var(--brand-primary)" />
      </span>
      <div>
        <h1 style={{ fontSize: "var(--text-h1)" }}>Hi Mia! What's your PIN?</h1>
        <p style={{ color: "var(--text-muted)", marginTop: 4 }}>Hint for this demo: 1234</p>
      </div>
      <PinPad value={pin} onChange={setPin} error={error} />
      <Button variant="ghost" icon="chevron-left" onClick={onBack}>Not Mia</Button>
    </div>
  );
}

Object.assign(window, { RolePicker, PinUnlock });
