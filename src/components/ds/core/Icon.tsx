"use client";

import React from "react";
import { iconPaths } from "./iconPaths";

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

/** Lucide glyph rendered inline. Stroke-only, 2px, currentColor. */
export function Icon({ name, size = 20, strokeWidth = 2, color = "currentColor", label, style, ...rest }: IconProps & Record<string, any>) {
  const body = iconPaths[name];
  if (!body) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      role={label ? "img" : "presentation"} aria-label={label} aria-hidden={label ? undefined : true}
      style={{ display: "block", flex: "none", ...style }}
      dangerouslySetInnerHTML={{ __html: body }}
      {...rest}
    />
  );
}
export const iconNames = Object.keys(iconPaths);
