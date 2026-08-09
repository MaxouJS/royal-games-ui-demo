"use client";

import { Slider } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return (
    <DemoInner />
  );
}

function DemoInner() {
  const [v, setV] = useState(0.62);
  return <Slider value={v} onChange={setV} />;
}
