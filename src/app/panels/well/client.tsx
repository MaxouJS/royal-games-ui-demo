"use client";

import { Well } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <Well style={{ color: "#fff4dc", font: "800 14px/1.2 var(--rg-font-display)", width: 300, display: "flex", justifyContent: "space-between" }}>
      <span>SCORE</span><span>8,420</span>
    </Well>
  );
}
