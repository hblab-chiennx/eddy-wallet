/**
 * Numeric PIN entry — the child's unlock on a shared family device.
 * @startingPoint section="Flows" subtitle="Child PIN unlock keypad" viewport="700x400"
 */
export interface PinPadProps {
  length?: number;
  value?: string;
  onChange?: (next: string) => void;
  error?: string;
  style?: React.CSSProperties;
}
export declare function PinPad(props: PinPadProps): JSX.Element;
