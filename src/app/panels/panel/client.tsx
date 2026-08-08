"use client";

import { Panel, GroupKicker, Meter, Button } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ display: "flex", gap: 14, flexWrap: "wrap", width: "100%", maxWidth: 560 }}>
      <Panel tone="paper" style={{ flex: 1, minWidth: 240 }}>
        <GroupKicker>Chapter 3</GroupKicker>
        <div style={{ font: "800 22px/1.1 var(--rg-font-display)", margin: "4px 0 10px" }}>The East Gate</div>
        <Meter tone="gold" value={0.6} label="PROGRESS" valueLabel="12 / 20" />
        <div style={{ marginTop: 14 }}><Button tone="accent" block sheen>PLAY</Button></div>
      </Panel>
      <Panel tone="primary" style={{ flex: 1, minWidth: 200 }} faceStyle={{ display: "grid", placeItems: "center", gap: 8 }}>
        <span style={{ fontSize: 30 }}>🎁</span>
        <b style={{ font: "800 14px/1 var(--rg-font-display)" }}>Daily Gift</b>
      </Panel>
    </div>
  );
}
