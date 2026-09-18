/**
 * Primary pressable control for both Child and Parent Mode.
 * @startingPoint section="Core" subtitle="Sticker buttons, all variants and sizes" viewport="700x300"
 */
export interface ButtonProps {
  /** primary = the main action; accent = celebratory/allowance; secondary = neutral; ghost = inline text action; danger = irreversible parent action. */
  variant?: "primary" | "accent" | "secondary" | "ghost" | "danger";
  /** sm inside rows/toolbars, md default, lg for the single hero action on a kid screen. */
  size?: "sm" | "md" | "lg";
  /** Leading Icon name. */
  icon?: string;
  /** Trailing Icon name — use for forward navigation ("chevron-right"). */
  iconRight?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
