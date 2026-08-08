"use client";

import { Dim } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ position: "relative", width: 280, height: 140, borderRadius: 14, overflow: "hidden", background: "linear-gradient(180deg,#2c5a35,#173a20)" }}>
      <Dim />
      <div style={{ position: "relative", zIndex: 3, display: "grid", placeItems: "center", height: "100%", font: "800 15px/1 var(--rg-font-display)", color: "#fff4dc" }}>Scrim over the game</div>
    </div>
  );
}
