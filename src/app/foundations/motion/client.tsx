"use client";

import { Board, GameTile, Button, usePlayOnView, bounce, type TileColor } from "@objectifthunes/royal-games-ui";

const COLORS: TileColor[] = ["purple", "green", "blue", "red", "green", "gold"];

export function Demo() {
  const { ref, replay } = usePlayOnView<HTMLDivElement>();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
      <div ref={ref} style={{ width: 280 }}>
        <Board columns={6} gap={5}>
          {Array.from({ length: 18 }, (_, i) => (
            <GameTile key={i} color={COLORS[(i * 5 + Math.floor(i / 6)) % 6 % COLORS.length]} index={i} />
          ))}
        </Board>
      </div>
      <Button tone="gold" size="sm" onClick={replay}>↻ REPLAY ENTRANCE</Button>
    </div>
  );
}

export function BounceDemo() {
  return (
    <Button tone="accent" onClick={(e) => bounce(e.currentTarget)}>
      TAP ME
    </Button>
  );
}
