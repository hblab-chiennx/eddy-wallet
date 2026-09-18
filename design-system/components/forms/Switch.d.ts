export interface SwitchProps {
  label: string;
  description?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Shows the lock glyph — the control is a Parent Mode privilege. */
  parentOnly?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
