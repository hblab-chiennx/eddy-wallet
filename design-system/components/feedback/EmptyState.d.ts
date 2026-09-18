export interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  /** Usually a <Button>. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
