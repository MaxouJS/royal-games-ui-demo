"use client";

import { Toggle } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return <DemoInner />;
}

function DemoInner() {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);
  return (
    <>
      <Toggle aria-label="Music" checked={a} onChange={() => setA(!a)} />
      <Toggle aria-label="Haptics" checked={b} onChange={() => setB(!b)} />
    </>
  );
}
