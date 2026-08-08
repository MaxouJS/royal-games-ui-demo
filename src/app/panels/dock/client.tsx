"use client";

import { Dock, Button, LevelBadge } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ width: 340, display: "flex", flexDirection: "column", gap: 18 }}>
      <Dock edge="top" tone="velvet"><div style={{ textAlign: "center", font: "800 14px/1 var(--rg-font-display)", padding: "4px 0" }}>TOP · VELVET</div></Dock>
      <Dock edge="bottom" tone="stone">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LevelBadge level={9} />
          <b style={{ flex: 1, font: "800 15px/1 var(--rg-font-display)" }}>Castle Gates</b>
          <Button tone="accent" size="sm">GO</Button>
        </div>
      </Dock>
      <Dock edge="bottom" tone="parchment"><div style={{ textAlign: "center", font: "800 14px/1 var(--rg-font-display)", padding: "4px 0" }}>BOTTOM · PARCHMENT</div></Dock>
    </div>
  );
}
