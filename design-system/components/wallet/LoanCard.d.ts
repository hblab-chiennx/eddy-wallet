export interface LoanCardProps {
  /** What the loan was for, in the child's words: "Lego set". */
  reason: string;
  borrowed?: number;
  repaid?: number;
  /** e.g. "Pay back $2 each Sunday · 3 payments left". */
  dueLabel?: string;
  status?: "on-track" | "due-soon" | "overdue" | "paid";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function LoanCard(props: LoanCardProps): JSX.Element;
