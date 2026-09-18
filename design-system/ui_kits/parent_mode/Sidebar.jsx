const { Icon, Badge, MoneyAmount } = window.EddyWalletDesignSystem_7e6d2a;

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: "house" },
  { id: "activity", label: "Activity", icon: "list" },
  { id: "rules", label: "Allowance rules", icon: "repeat" },
  { id: "loans", label: "Loans & repayments", icon: "hand-coins" },
  { id: "lessons", label: "Lessons", icon: "graduation-cap" },
  { id: "actions", label: "Parent-only actions", icon: "lock", count: PENDING.length },
  { id: "setup", label: "Family setup", icon: "users" },
];

function Sidebar({ value, onChange, onExit }) {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", padding: "var(--space-6) var(--space-5)", background: "var(--surface-card)", borderRight: "1px solid var(--border-subtle)" }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, letterSpacing: "-0.02em", color: "var(--teal-900)" }}>
        eddy<span style={{ color: "var(--brand-primary)" }}>wallet</span>
      </div>
      <div style={{ padding: "var(--space-4)", background: "var(--surface-parent)", border: "1px solid var(--sky-200)", borderRadius: "var(--radius-lg)" }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center", fontSize: "var(--text-xs)", fontWeight: 800, letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--sky-700)" }}>
          <Icon name="shield-check" size={13} />Parent Mode
        </div>
        <div style={{ marginTop: 4, fontWeight: 700, color: "var(--ink-900)" }}>{FAMILY.child}'s wallet</div>
        <MoneyAmount value={FAMILY.balance} size="lg" direction="neutral" />
      </div>
      <nav style={{ display: "grid", gap: 2 }}>
        {NAV.map(n => {
          const active = n.id === value;
          return (
            <button key={n.id} type="button" onClick={() => onChange(n.id)}
              style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", padding: "10px 12px", minHeight: 44, borderRadius: "var(--radius-md)", border: "none", cursor: "pointer", textAlign: "left",
                background: active ? "var(--brand-primary-soft)" : "transparent",
                color: active ? "var(--teal-800)" : "var(--text-body)", font: "inherit",
                fontWeight: active ? 700 : 600 }}>
              <Icon name={n.icon} size={18} />
              <span style={{ flex: 1 }}>{n.label}</span>
              {n.count ? <Badge tone="sun">{n.count}</Badge> : null}
            </button>
          );
        })}
      </nav>
      <button type="button" onClick={onExit} style={{ display: "flex", gap: 8, alignItems: "center", marginTop: "auto", padding: "10px 12px", background: "none", border: "none", color: "var(--text-muted)", font: "inherit", fontWeight: 600, cursor: "pointer" }}>
        <Icon name="log-out" size={18} />Switch user
      </button>
    </aside>
  );
}
window.Sidebar = Sidebar;
