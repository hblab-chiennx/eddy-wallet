/**
 * Hero balance panel — the anchor element of the Child Home and Parent Dashboard.
 * @startingPoint section="Wallet" subtitle="Hero balance panel with status chips" viewport="700x320"
 */
export interface BalanceChip { label: string; icon?: string }
export interface BalanceCardProps {
  /** Uppercase eyebrow, e.g. "Mia's wallet". */
  owner?: string;
  balance?: number;
  /** One friendly sentence under the number. */
  caption?: string;
  chips?: BalanceChip[];
  tone?: "brand" | "inverse";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function BalanceCard(props: BalanceCardProps): JSX.Element;
