"use client";

import { Slider } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return <DemoInner />;
}

function DemoInner() {
  const [v, setV] = useState(62);
  return (
    <Slider
      aria-label="Effects volume"
      value={v}
      onChange={(event) => setV(event.currentTarget.valueAsNumber)}
    />
  );
}
