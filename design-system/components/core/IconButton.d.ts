export interface IconButtonProps {
  /** Icon name. */
  icon: string;
  /** Required accessible label — icon-only buttons never ship without one. */
  label: string;
  tone?: "plain" | "soft" | "outline";
  /** Box size in px. Never below 44 on kid-facing screens. */
  size?: number;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
