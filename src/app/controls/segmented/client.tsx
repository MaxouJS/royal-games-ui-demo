"use client";

import { Segmented } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return (
    <DemoInner />
  );
}

function DemoInner() {
  const [range, setRange] = useState<"Daily" | "Weekly" | "All-time">("Daily");
  return <Segmented options={["Daily", "Weekly", "All-time"] as const} value={range} onChange={setRange} />;
}
