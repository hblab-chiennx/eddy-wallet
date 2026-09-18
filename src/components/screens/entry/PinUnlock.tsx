"use client";

import React from "react";
import { Button } from "@/components/ds/core/Button";
import { Icon } from "@/components/ds/core/Icon";
import { PinPad } from "@/components/ds/forms/PinPad";
import { useFamily } from "@/lib/store";

export function PinUnlock({ onDone, onBack }: { onDone: () => void; onBack: () => void }) {
  const { state } = useFamily();
  const [pin, setPin] = React.useState("");
  const [error, setError] = React.useState("");

  function handleChange(next: string) {
    setPin(next);
    if (error) setError("");
    if (next.length === 4) {
      if (next === state.family.child.pin) {
        onDone();
      } else {
        setError("That's not it. Try again!");
        setTimeout(() => setPin(""), 500);
      }
    }
  }

  return (
    <div
      style={{
        display: "grid",
        alignContent: "center",
        justifyItems: "center",
        gap: "var(--space-6)",
        padding: "var(--space-8) var(--gutter-mobile)",
        minHeight: "100vh",
        maxWidth: "var(--kid-max)",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <span
        style={{
          display: "grid",
          placeItems: "center",
          width: 64,
          height: 64,
          borderRadius: "var(--radius-xl)",
          background: "var(--brand-primary-soft)",
        }}
      >
        <Icon name="lock-open" size={30} color="var(--brand-primary)" />
      </span>
      <div>
        <h1 style={{ fontSize: "var(--text-h1)" }}>Hi {state.family.child.name}! What&apos;s your PIN?</h1>
        <p style={{ color: "var(--text-muted)", marginTop: 4 }}>Hint for this demo: {state.family.child.pin}</p>
      </div>
      <PinPad value={pin} onChange={handleChange} error={error} />
      <Button variant="ghost" icon="chevron-left" onClick={onBack}>
        Not {state.family.child.name}
      </Button>
    </div>
  );
}
