"use client";

import { PageDots } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return (
    <DemoInner />
  );
}

function DemoInner() {
  const [page, setPage] = useState(0);
  return (
    <span style={{ cursor: "pointer" }} onClick={() => setPage((page + 1) % 4)}>
      <PageDots count={4} index={page} />
    </span>
  );
}
