export interface LessonCardProps {
  title: string;
  /** One line in kid language: "Money that grows while it waits." */
  blurb?: string;
  minutes?: number;
  state?: "available" | "done" | "locked";
  /** 1-based position in the track. */
  index?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function LessonCard(props: LessonCardProps): JSX.Element;
