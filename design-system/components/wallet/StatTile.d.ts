export interface StatTileProps {
  label: string;
  /** Non-money value (count, streak). Ignored when money is set. */
  value?: string | number;
  /** Dollars — rendered through MoneyAmount. */
  money?: number;
  /** Small context line, e.g. "+$5 this week". */
  delta?: string;
  icon?: string;
  tone?: "neutral" | "teal" | "sun" | "berry" | "sky";
  style?: React.CSSProperties;
}
export declare function StatTile(props: StatTileProps): JSX.Element;
