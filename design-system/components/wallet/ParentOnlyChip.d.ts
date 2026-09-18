export interface ParentOnlyChipProps {
  label?: string;
  /** chip = inline next to a control; banner = above a whole parent-only block. */
  variant?: "chip" | "banner";
  style?: React.CSSProperties;
}
export declare function ParentOnlyChip(props: ParentOnlyChipProps): JSX.Element;
