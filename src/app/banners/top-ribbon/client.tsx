"use client";

import { TopRibbon, Ribbon, Panel, Button } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ position: "relative", marginTop: 12, width: 280 }}>
      <TopRibbon><Ribbon size="sm">Best value</Ribbon></TopRibbon>
      <Panel tone="paper" faceStyle={{ textAlign: "center", paddingTop: 22 }}>
        <Button tone="gold" block sheen>€9.99 · BUY</Button>
      </Panel>
    </div>
  );
}
