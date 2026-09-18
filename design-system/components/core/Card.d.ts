export interface CardProps {
  tone?: "paper" | "sunken" | "brand" | "parent" | "inverse";
  /** Hard offset shadow instead of the soft one — Child Mode surfaces. */
  sticker?: boolean;
  padding?: string;
  radius?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
