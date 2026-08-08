"use client";

import { Board, GameTile, type TileColor } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <DemoInner />
  );
}

const GRID: TileColor[] = [
  "purple", "green", "blue", "red", "gold", "green",
  "blue", "gold", "purple", "green", "red", "purple",
  "red", "blue", "gold", "purple", "green", "blue",
];

function DemoInner() {
  return (
    <div style={{ width: 300 }}>
      <Board columns={6} gap={5}>
        {GRID.map((color, i) => (
          <GameTile key={i} color={color} index={i} />
        ))}
      </Board>
    </div>
  );
}
