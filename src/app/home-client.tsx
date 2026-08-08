"use client";

import { Button, Ribbon, Counter, Coin, Gem, Toggle, GameTile, TimerPill } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function HomeHero() {
  const [on, setOn] = useState(true);
  const [sel, setSel] = useState(1);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center", padding: "8px 0" }}>
      <Ribbon size="lg">Midnight Court</Ribbon>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Button tone="accent" size="hero" sheen>PLAY</Button>
        <Button tone="positive">CLAIM</Button>
        <Button tone="gold" size="sm">BUY</Button>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
        <Counter icon={<Coin />} onAdd={() => {}}>2,450</Counter>
        <Counter icon={<Gem />} onAdd={() => {}}>12</Counter>
        <TimerPill>⏳ <b>2d 4h</b></TimerPill>
        <Toggle on={on} onToggle={() => setOn(!on)} />
        {(["red", "gold", "purple"] as const).map((c, i) => (
          <GameTile key={c} color={c} sel={sel === i} onClick={() => setSel(i)} style={{ width: 40 }} />
        ))}
      </div>
    </div>
  );
}
