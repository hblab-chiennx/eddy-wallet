import React from "react";
import { Icon } from "./Icon.jsx";

/** Row heading with optional trailing action. */
export function SectionHeading({ title, subtitle, action, onAction, icon, level = "h2", style, ...rest }) {
  const Tag = level;
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--space-4)", marginBottom: "var(--space-3)", ...style }} {...rest}>
      <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
        {icon ? <Icon name={icon} size={20} color="var(--brand-primary)" /> : null}
        <div>
          <Tag style={{ margin: 0 }}>{title}</Tag>
          {subtitle ? <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginTop: 2 }}>{subtitle}</div> : null}
        </div>
      </div>
      {action ? (
        <button type="button" onClick={onAction} style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "none", border: "none", padding: "6px 2px", color: "var(--text-link)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-sm)", cursor: "pointer" }}>
          {action}<Icon name="chevron-right" size={16} />
        </button>
      ) : null}
    </div>
  );
}
