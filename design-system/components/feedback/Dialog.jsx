import React from "react";
import { IconButton } from "../core/IconButton.jsx";
import { Button } from "../core/Button.jsx";
import { Icon } from "../core/Icon.jsx";

/** Centered modal for confirmations and short parent forms. */
export function Dialog({ open = true, title, description, icon, tone = "brand", parentOnly, children, confirmLabel, onConfirm, cancelLabel = "Cancel", onClose, style }) {
  if (!open) return null;
  const accent = tone === "danger" ? "var(--state-danger-soft)" : tone === "parent" ? "var(--surface-parent)" : "var(--brand-primary-soft)";
  const accentInk = tone === "danger" ? "var(--state-danger)" : tone === "parent" ? "var(--state-locked)" : "var(--brand-primary)";
  return (
    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", padding: "var(--space-5)", background: "rgba(6,49,43,0.42)", backdropFilter: "blur(3px)", zIndex: 50 }}>
      <div role="dialog" aria-modal="true" style={{
        width: "100%", maxWidth: 420, background: "var(--surface-card)", borderRadius: "var(--radius-xl)",
        border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-raised)", padding: "var(--space-6)",
        animation: "none", ...style,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-3)", alignItems: "flex-start" }}>
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
            {icon ? <span style={{ display: "grid", placeItems: "center", width: 44, height: 44, borderRadius: "var(--radius-md)", background: accent }}><Icon name={icon} size={22} color={accentInk} /></span> : null}
            <div>
              <h3 style={{ margin: 0 }}>{title}</h3>
              {parentOnly ? <span style={{ display: "inline-flex", gap: 4, alignItems: "center", marginTop: 3, fontSize: "var(--text-xs)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--state-locked)" }}><Icon name="lock" size={11} />Parent only</span> : null}
            </div>
          </div>
          {onClose ? <IconButton icon="x" label="Close" onClick={onClose} size={38} /> : null}
        </div>
        {description ? <p style={{ marginTop: "var(--space-3)", marginBottom: 0, color: "var(--text-body)" }}>{description}</p> : null}
        {children ? <div style={{ marginTop: "var(--space-4)", display: "grid", gap: "var(--space-4)" }}>{children}</div> : null}
        {confirmLabel ? (
          <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-6)" }}>
            <Button variant="secondary" fullWidth onClick={onClose}>{cancelLabel}</Button>
            <Button variant={tone === "danger" ? "danger" : "primary"} fullWidth onClick={onConfirm}>{confirmLabel}</Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
