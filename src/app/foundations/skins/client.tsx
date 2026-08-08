"use client";

import { Button, Ribbon, Counter, Coin, Toggle, SkinProvider, Board, GameTile, usePlayOnView, type TileColor } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  const [on, setOn] = useState(true);
  return (
    <>
      <Ribbon>Chapter complete</Ribbon>
      <Button tone="accent">PLAY</Button>
      <Counter icon={<Coin />}>2,450</Counter>
      <Toggle on={on} onToggle={() => setOn(!on)} />
    </>
  );
}

export function SideBySide() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 14, width: "100%" }}>
      {(["enamel", "gloss"] as const).map((skin) => (
        <SkinProvider key={skin} skin={skin}>
          <div style={{ flex: 1, minWidth: 260, display: "flex", gap: 12, alignItems: "center", justifyContent: "center", padding: 18, borderRadius: 14, background: "#180e32" }}>
            <Button tone="accent">PLAY</Button>
            <Button tone="gold" size="sm">BUY</Button>
            <Counter icon={<Coin />}>2,450</Counter>
          </div>
        </SkinProvider>
      ))}
    </div>
  );
}

const GRID: TileColor[] = [
  "purple", "green", "blue", "red", "gold", "green",
  "blue", "gold", "purple", "green", "red", "purple",
  "red", "blue", "gold", "purple", "green", "blue",
];

export function Motion() {
  const { ref, replay } = usePlayOnView<HTMLDivElement>();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
      <div ref={ref} style={{ width: 280 }}>
        <Board columns={6} gap={5}>
          {GRID.map((color, i) => (
            <GameTile key={i} color={color} index={i} />
          ))}
        </Board>
      </div>
      <Button tone="gold" size="sm" onClick={replay}>↻ REPLAY ENTRANCE</Button>
    </div>
  );
}
