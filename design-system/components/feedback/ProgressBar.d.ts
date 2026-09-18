export interface ProgressBarProps {
  value?: number;
  max?: number;
  tone?: "teal" | "sun" | "berry" | "grape";
  label?: string;
  /** Right-aligned mono readout, e.g. "$12 of $40". */
  valueLabel?: string;
  height?: number;
  style?: React.CSSProperties;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
