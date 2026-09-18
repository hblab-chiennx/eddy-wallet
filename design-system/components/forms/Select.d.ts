export interface SelectOption { value: string; label: string }
export interface SelectProps {
  label?: string;
  hint?: string;
  /** Strings, or {value,label} pairs. */
  options?: Array<string | SelectOption>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
