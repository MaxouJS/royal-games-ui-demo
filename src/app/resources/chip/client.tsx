"use client";

import { Chip } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return (
    <DemoInner />
  );
}

function DemoInner() {
  const [pick, setPick] = useState(1);
  return (
    <>
      {["Easy", "Normal", "Hard"].map((d, i) => (
        <Chip key={d} on={pick === i} onClick={() => setPick(i)}>{d}</Chip>
      ))}
      <Chip on>✦ Boosted</Chip>
    </>
  );
}
