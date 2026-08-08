"use client";

import { Dock, Button, LevelBadge, Ribbon, Counter, Heart, GroupKicker } from "@objectifthunes/royal-games-ui";

export function Bottom() {
  return (
    <div style={{ width: 340 }}>
      <Dock edge="bottom" tone="stone">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LevelBadge level={9} />
          <div style={{ flex: 1 }}>
            <b style={{ font: "800 15px/1.2 var(--rg-font-display)" }}>Castle Gates</b>
            <div style={{ font: "700 11px/1.3 var(--rg-font-body)", color: "#bcb0de" }}>Beat it with 3 ★ to earn a chest</div>
          </div>
          <Button tone="accent" size="sm">GO</Button>
        </div>
      </Dock>
    </div>
  );
}

export function Top() {
  return (
    <div style={{ width: 340 }}>
      <Dock edge="top" tone="velvet">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <Button tone="primary" size="sm" icon>‹</Button>
          <Ribbon size="sm">World 2 · Emberfall</Ribbon>
          <Counter icon={<Heart />}>4</Counter>
        </div>
      </Dock>
    </div>
  );
}

export function Parchment() {
  return (
    <div style={{ width: 340 }}>
      <Dock edge="bottom" tone="parchment">
        <GroupKicker>Orders</GroupKicker>
        <Button tone="positive" block>DELIVER</Button>
      </Dock>
    </div>
  );
}
