export interface InputProps {
  label?: string;
  /** Helper text under the field. Hidden while an error shows. */
  hint?: string;
  error?: string;
  /** Leading Icon name. */
  icon?: string;
  /** Static leading text, e.g. "$". */
  prefix?: string;
  size?: "md" | "lg";
  id?: string;
  value?: string | number;
  placeholder?: string;
  type?: string;
  inputMode?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
