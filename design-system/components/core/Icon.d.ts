export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "piggy-bank"). See iconNames for the full set. */
  name: string;
  /** Pixel box. 16 inline with text, 20 default, 24 in nav, 32+ in kid illustrations. */
  size?: number;
  strokeWidth?: number;
  color?: string;
  /** Sets role="img" + aria-label. Omit for decorative icons. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element | null;
export declare const iconNames: string[];
