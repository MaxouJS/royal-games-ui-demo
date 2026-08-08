"use client";

import { Spinner } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
      <Spinner />
      <span style={{ font: "800 13px/1 var(--rg-font-display)", color: "#bcb0de" }}>SUMMONING THE COURT…</span>
    </span>
  );
}
