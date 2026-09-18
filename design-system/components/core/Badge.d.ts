export interface BadgeProps {
  tone?: "neutral" | "teal" | "sun" | "berry" | "sky" | "grape" | "success";
  icon?: string;
  /** Uppercase + tracked — use for system labels, not for kid-facing copy. */
  uppercase?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
