"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { RolePicker } from "@/components/screens/entry/RolePicker";
import { PinUnlock } from "@/components/screens/entry/PinUnlock";

export default function EntryPage() {
  const router = useRouter();
  const [stage, setStage] = React.useState<"role" | "pin">("role");

  function handlePick(role: "child" | "parent") {
    if (role === "parent") {
      router.push("/parent");
    } else {
      setStage("pin");
    }
  }

  if (stage === "pin") {
    return <PinUnlock onDone={() => router.push("/child")} onBack={() => setStage("role")} />;
  }
  return <RolePicker onPick={handlePick} />;
}
