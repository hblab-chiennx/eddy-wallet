export interface AmountFieldProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hint?: string;
  /** Available balance — rendered as the default hint when hint is omitted. */
  max?: number;
  style?: React.CSSProperties;
}
export declare function AmountField(props: AmountFieldProps): JSX.Element;
