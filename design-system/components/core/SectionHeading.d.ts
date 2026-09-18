export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Trailing link text, e.g. "See all". */
  action?: string;
  onAction?: () => void;
  icon?: string;
  level?: "h1" | "h2" | "h3";
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
