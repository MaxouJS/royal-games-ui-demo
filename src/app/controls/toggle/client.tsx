"use client";

import { Toggle } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return (
    <DemoInner />
  );
}

function DemoInner() {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);
  return (
    <>
      <Toggle on={a} onToggle={() => setA(!a)} />
      <Toggle on={b} onToggle={() => setB(!b)} />
    </>
  );
}
