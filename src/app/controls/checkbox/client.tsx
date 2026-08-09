"use client";

import { Checkbox } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return <DemoInner />;
}

function DemoInner() {
  const [c, setC] = useState(true);
  return (
    <>
      <Checkbox
        aria-label="First option"
        checked={c}
        onChange={() => setC(!c)}
      />
      <Checkbox
        aria-label="Second option"
        checked={!c}
        onChange={() => setC(!c)}
      />
    </>
  );
}
