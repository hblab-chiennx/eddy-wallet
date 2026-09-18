export interface TabBarItem { id: string; label: string; icon: string }
export interface TabBarProps {
  items?: TabBarItem[];
  value?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}
export declare function TabBar(props: TabBarProps): JSX.Element;
