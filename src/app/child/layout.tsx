import { ChildShell } from "@/components/shells/ChildShell";

export default function ChildLayout({ children }: { children: React.ReactNode }) {
  return <ChildShell>{children}</ChildShell>;
}
