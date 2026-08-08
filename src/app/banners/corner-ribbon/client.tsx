"use client";

import { CornerRibbon, Ribbon, Panel, Button } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ position: "relative", marginTop: 10, width: 280 }}>
      <CornerRibbon><Ribbon size="sm">−50%</Ribbon></CornerRibbon>
      <Panel tone="paper" faceStyle={{ textAlign: "center" }}>
        <div style={{ font: "800 18px/1.2 var(--rg-font-display)", margin: "6px 0 12px" }}>King&apos;s Coffer</div>
        <Button tone="gold" block>€9.99 · BUY</Button>
      </Panel>
    </div>
  );
}
