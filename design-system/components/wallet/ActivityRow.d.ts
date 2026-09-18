export interface ActivityRowProps {
  /** Event type — drives glyph, tint and the default title. */
  type?: "allowance" | "deposit" | "spend" | "withdraw" | "loan" | "repayment" | "interest" | "lesson";
  title?: string;
  /** Right-hand context line: date, who did it, note. */
  meta?: string;
  /** Dollars. Omit for non-money events (lessons) and pass points instead. */
  amount?: number;
  points?: number;
  /** Awaiting parent approval. */
  pending?: boolean;
  parentOnly?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function ActivityRow(props: ActivityRowProps): JSX.Element;
export declare const ACTIVITY_TYPES: Record<string, { icon: string; bg: string; ink: string; label: string }>;
