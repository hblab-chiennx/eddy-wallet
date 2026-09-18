export interface TabItem { id: string; label: string }
export interface TabsProps {
  /** Strings, or {id,label} pairs. */
  items?: Array<string | TabItem>;
  value?: string;
  onChange?: (id: string) => void;
  size?: "sm" | "md";
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
