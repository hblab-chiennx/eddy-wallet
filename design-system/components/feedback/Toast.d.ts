export interface ToastProps {
  tone?: "success" | "info" | "warning" | "danger";
  message: string;
  detail?: string;
  /** Sunbeam background + party icon — kid-facing wins only. */
  celebrate?: boolean;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
