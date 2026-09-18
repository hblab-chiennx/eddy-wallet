import type { Metadata } from "next";
import { FamilyProvider } from "@/lib/store";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Eddy Wallet",
  description: "A family's shared virtual wallet for teaching kids about money.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FamilyProvider>{children}</FamilyProvider>
      </body>
    </html>
  );
}
