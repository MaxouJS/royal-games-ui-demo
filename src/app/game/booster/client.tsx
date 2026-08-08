"use client";

import { Booster } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ display: "flex", gap: 22, paddingTop: 8 }}>
      <Booster count={3}>🔨</Booster>
      <Booster count={1}>🧨</Booster>
      <Booster plus>🌀</Booster>
      <Booster off count={0}>🪄</Booster>
    </div>
  );
}
