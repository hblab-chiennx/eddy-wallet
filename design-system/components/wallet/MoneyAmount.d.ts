export interface MoneyAmountProps {
  /** Dollars. Sign is derived unless direction is passed. */
  value?: number;
  size?: "sm" | "md" | "lg" | "hero";
  /** Force colour + sign: in = teal, out = berry, neutral = ink. */
  direction?: "in" | "out" | "neutral";
  /** Prefix + / − . On for ledger rows, off for balances. */
  showSign?: boolean;
  currency?: string;
  style?: React.CSSProperties;
}
export declare function MoneyAmount(props: MoneyAmountProps): JSX.Element;
