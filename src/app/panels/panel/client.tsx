"use client";

import { Panel, Well, GroupKicker, Meter, Button, TimerPill } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ display: "flex", gap: 14, flexWrap: "wrap", width: "100%" }}>
      <Panel tone="paper" style={{ flex: 1, minWidth: 250 }}>
        <GroupKicker>Chapter 3</GroupKicker>
        <div style={{ font: "800 22px/1.1 var(--rg-font-display)", margin: "4px 0 10px" }}>The East Gate</div>
        <Meter tone="gold" value={0.6} label="PROGRESS" valueLabel="12 / 20" />
        <div style={{ marginTop: 14 }}>
          <Button tone="accent" size="hero" block sheen>PLAY</Button>
        </div>
      </Panel>
      <Panel tone="primary" style={{ flex: 1, minWidth: 220 }} faceStyle={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center", textAlign: "center" }}>
        <span style={{ fontSize: 30, lineHeight: 1 }}>🎁</span>
        <b style={{ font: "800 14px/1 var(--rg-font-display)" }}>Daily Gift</b>
        <TimerPill>⏳ <b>2d 4h</b></TimerPill>
      </Panel>
    </div>
  );
}

export function Wells() {
  return (
    <Well style={{ color: "#fff4dc", font: "800 14px/1.2 var(--rg-font-display)", width: "100%", display: "flex", justifyContent: "space-between" }}>
      <span>SCORE</span>
      <span>8,420</span>
    </Well>
  );
}
