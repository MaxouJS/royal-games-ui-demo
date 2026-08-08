"use client";

import { Ribbon, CornerRibbon, TopRibbon, Panel, Button } from "@objectifthunes/royal-games-ui";

export function Sizes() {
  return (
    <>
      <Ribbon size="lg">Victory!</Ribbon>
      <Ribbon>Chapter complete</Ribbon>
      <Ribbon size="sm">Best value</Ribbon>
      <Ribbon size="sm">New!</Ribbon>
    </>
  );
}

export function Placements() {
  return (
    <div style={{ position: "relative", marginTop: 14, width: 300 }}>
      <TopRibbon><Ribbon size="sm">Best value</Ribbon></TopRibbon>
      <CornerRibbon><Ribbon size="sm">−50%</Ribbon></CornerRibbon>
      <Panel tone="paper" faceStyle={{ textAlign: "center", paddingTop: 24 }}>
        <div style={{ font: "800 20px/1.2 var(--rg-font-display)", marginBottom: 12 }}>King&apos;s Coffer</div>
        <Button tone="gold" block sheen>€9.99 · BUY</Button>
      </Panel>
    </div>
  );
}
