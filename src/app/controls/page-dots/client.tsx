"use client";

import { PageDots } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return <DemoInner />;
}

function DemoInner() {
  const [page, setPage] = useState(0);
  return (
    <PageDots
      count={4}
      index={page}
      onPageChange={setPage}
      getPageLabel={(index) => `Open page ${index + 1}`}
    />
  );
}
