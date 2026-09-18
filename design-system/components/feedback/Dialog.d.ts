export interface DialogProps {
  open?: boolean;
  title: string;
  description?: string;
  icon?: string;
  tone?: "brand" | "danger" | "parent";
  /** Stamps the PARENT ONLY label under the title. */
  parentOnly?: boolean;
  children?: React.ReactNode;
  confirmLabel?: string;
  onConfirm?: () => void;
  cancelLabel?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
