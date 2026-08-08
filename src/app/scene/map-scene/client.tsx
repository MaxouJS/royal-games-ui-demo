"use client";

import { MapScene } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ position: "relative", width: 320, height: 240, borderRadius: 16, overflow: "hidden" }}>
      <MapScene style={{ background: "linear-gradient(180deg,#241448 0%,#3a2071 55%,#2c5a35 55.2%,#1d4527 100%)" }} />
    </div>
  );
}
