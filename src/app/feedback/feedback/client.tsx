"use client";

import { Toast, Spinner, SpeechBubble, ComboBadge, Medal, Chest, StarBurst, Coin, Avatar, Panel, Button, Version } from "@objectifthunes/royal-games-ui";

export function Alerts() {
  return (
    <>
      <Toast><Coin />+120 coins collected!</Toast>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
        <Spinner />
        <span style={{ font: "800 13px/1 var(--rg-font-display)", color: "#bcb0de" }}>SUMMONING THE COURT…</span>
      </span>
    </>
  );
}

export function Dialogue() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 10, paddingBottom: 10 }}>
      <Avatar size="lg">👵</Avatar>
      <SpeechBubble>Find me a <b>Level 3 candle</b>, dear!</SpeechBubble>
    </div>
  );
}

export function Rewards() {
  return (
    <>
      <ComboBadge>COMBO ×3</ComboBadge>
      <Chest glow />
      <Medal tier="gold">1</Medal>
      <Medal tier="silver">2</Medal>
      <Medal tier="bronze">3</Medal>
    </>
  );
}

export function Sheet() {
  return (
    <div style={{ width: 300 }}>
      <Panel tone="paper" faceStyle={{ textAlign: "center" }}>
        <StarBurst earned={3} />
        <div style={{ font: "700 12px/1.4 var(--rg-font-body)", color: "#8a6d3b", margin: "4px 0 12px" }}>
          You will lose one ♥ and your progress.
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Button tone="paper" size="sm" block style={{ flex: 1 }}>STAY</Button>
          <Button tone="accent" size="sm" block style={{ flex: 1 }}>QUIT</Button>
        </div>
      </Panel>
      <Version>royal-games-ui · v0.1.0</Version>
    </div>
  );
}
