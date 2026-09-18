import React from "react";
import { iconPaths } from "./iconPaths.js";

/** Lucide glyph rendered inline. Stroke-only, 2px, currentColor. */
export function Icon({ name, size = 20, strokeWidth = 2, color = "currentColor", label, style, ...rest }) {
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
