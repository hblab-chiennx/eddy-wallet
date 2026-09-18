"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { IconButton } from "@/components/ds/core/IconButton";
import { TabBar } from "@/components/ds/navigation/TabBar";
import { TopBar } from "@/components/ds/navigation/TopBar";
import styles from "./ChildShell.module.css";

const TABS = [
  { id: "home", label: "Wallet", icon: "wallet", href: "/child" },
  { id: "activity", label: "Activity", icon: "list", href: "/child/activity" },
  { id: "loans", label: "Loans", icon: "hand-coins", href: "/child/loans" },
  { id: "lessons", label: "Learn", icon: "graduation-cap", href: "/child/lessons" },
];

const TITLES: Record<string, [string, string]> = {
  "/child": ["Your wallet", "See what you have and what's happening"],
  "/child/activity": ["Your activity", "Every move your money made"],
  "/child/loans": ["Your loan", "Read-only — a parent sets the rules"],
  "/child/lessons": ["Learn", "Short lessons about money"],
};

export function ChildShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const activeTab = TABS.find((t) => t.href === pathname)?.id ?? "home";
  const [title, subtitle] = TITLES[pathname] ?? TITLES["/child"];

  return (
    <div className={styles.shell}>
      <TopBar
        title={title}
        subtitle={subtitle}
        actions={<IconButton icon="log-out" label="Switch user" onClick={() => router.push("/")} />}
      />
      <div className={styles.scroll}>{children}</div>
      <TabBar
        items={TABS}
        value={activeTab}
        onChange={(id) => {
          const target = TABS.find((t) => t.id === id);
          if (target) router.push(target.href);
        }}
      />
    </div>
  );
}
