"use client";

import { Checkbox } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return (
    <DemoInner />
  );
}

function DemoInner() {
  const [c, setC] = useState(true);
  return (
    <>
      <Checkbox checked={c} onToggle={() => setC(!c)} />
      <Checkbox checked={!c} onToggle={() => setC(!c)} />
    </>
  );
}
