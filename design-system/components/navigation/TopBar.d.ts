export interface TopBarProps {
  title: string;
  subtitle?: string;
  back?: boolean;
  onBack?: () => void;
  /** "parent" adds the Sky top rail and shield glyph that marks Parent Mode. */
  mode?: "child" | "parent";
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function TopBar(props: TopBarProps): JSX.Element;
