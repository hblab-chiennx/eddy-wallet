"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Badge } from "@/components/ds/core/Badge";
import { Icon } from "@/components/ds/core/Icon";
import { IconButton } from "@/components/ds/core/IconButton";
import { TopBar } from "@/components/ds/navigation/TopBar";
import { MoneyAmount } from "@/components/ds/wallet/MoneyAmount";
import { useFamily } from "@/lib/store";
import styles from "./ParentShell.module.css";

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: "house", href: "/parent" },
  { id: "activity", label: "Activity", icon: "list", href: "/parent/activity" },
  { id: "rules", label: "Allowance rules", icon: "repeat", href: "/parent/rules" },
  { id: "loans", label: "Loans & repayments", icon: "hand-coins", href: "/parent/loans" },
  { id: "lessons", label: "Lessons", icon: "graduation-cap", href: "/parent/lessons" },
  { id: "actions", label: "Parent-only actions", icon: "lock", href: "/parent/actions" },
];

const HEAD: Record<string, [string, string]> = {
  "/parent": ["Dashboard", "Overview, requests and recent activity"],
  "/parent/activity": ["Activity", "Every entry in the family ledger"],
  "/parent/rules": ["Allowance rules", "What Eddy pays, and when"],
  "/parent/loans": ["Loans & repayments", "Manage the active loan"],
  "/parent/lessons": ["Lessons", "Monitor view — read-only"],
  "/parent/actions": ["Parent-only actions", "Approvals, deposits and account controls"],
};

export function ParentShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { state } = useFamily();
  const pendingCount = state.spendRequests.filter((r) => r.status === "pending").length;
  const [title, subtitle] = HEAD[pathname] ?? HEAD["/parent"];

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.wordmark}>
          eddy<span style={{ color: "var(--brand-primary)" }}>wallet</span>
        </div>
        <div className={styles.walletSummary}>
          <div className={styles.walletSummaryLabel}>
            <Icon name="shield-check" size={13} />
            Parent Mode
          </div>
          <div style={{ marginTop: 4, fontWeight: 700, color: "var(--ink-900)" }}>{state.family.child.name}&apos;s wallet</div>
          <MoneyAmount value={state.family.child.balance} size="lg" direction="neutral" />
        </div>
        <nav className={styles.nav}>
          {NAV.map((n) => {
            const active = n.href === pathname;
            return (
              <button
                key={n.id}
                type="button"
                onClick={() => router.push(n.href)}
                className={`${styles.navItem} ${active ? styles.navItemActive : ""}`}
              >
                <Icon name={n.icon} size={18} />
                <span className={styles.navLabel}>{n.label}</span>
                {n.id === "actions" && pendingCount > 0 ? <Badge tone="sun">{pendingCount}</Badge> : null}
              </button>
            );
          })}
          <button type="button" onClick={() => router.push("/setup")} className={styles.navItem}>
            <Icon name="users" size={18} />
            <span className={styles.navLabel}>Family setup</span>
          </button>
        </nav>
        <button type="button" onClick={() => router.push("/")} className={styles.exitButton}>
          <Icon name="log-out" size={18} />
          Switch user
        </button>
      </aside>
      <div style={{ minWidth: 0, display: "flex", flexDirection: "column" }}>
        <TopBar
          mode="parent"
          title={title}
          subtitle={subtitle}
          actions={
            <>
              <IconButton icon="bell" label="Alerts" />
              <IconButton icon="settings" label="Settings" />
            </>
          }
          style={{ padding: "18px var(--gutter-desktop)" }}
        />
        <div className={styles.main} style={{ paddingTop: "var(--space-6)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
