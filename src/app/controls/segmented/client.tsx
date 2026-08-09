"use client";

import { Segmented } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return <DemoInner />;
}

function DemoInner() {
  const [range, setRange] = useState("daily");
  return (
    <Segmented
      aria-label="Ranking period"
      options={[
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
        { value: "all", label: "All-time" },
      ]}
      value={range}
      onValueChange={setRange}
    />
  );
}
