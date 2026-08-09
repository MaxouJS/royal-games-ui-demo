"use client";

import { Chip } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return <DemoInner />;
}

function DemoInner() {
  const [pick, setPick] = useState(1);
  return (
    <>
      {["Easy", "Normal", "Hard"].map((d, i) => (
        <Chip key={d} pressed={pick === i} onPressedChange={() => setPick(i)}>
          {d}
        </Chip>
      ))}
      <Chip pressed onPressedChange={() => {}}>
        ✦ Boosted
      </Chip>
    </>
  );
}
