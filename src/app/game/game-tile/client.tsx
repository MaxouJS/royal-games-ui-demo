"use client";

import { Board, GameTile, type TileColor } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return (
    <DemoInner />
  );
}

const ROWS: TileColor[][] = [
  ["purple", "green", "blue", "red", "green", "gold"],
  ["blue", "red", "green", "purple", "red", "gold"],
  ["green", "purple", "red", "blue", "gold", "green"],
];

function DemoInner() {
  const [sel, setSel] = useState(8);
  return (
    <div style={{ width: 300 }}>
      <Board columns={6} gap={5}>
        {ROWS.flat().map((c, i) => (
          <GameTile key={i} color={c} index={i} sel={i === sel} boom={i === 4} onClick={() => setSel(i)} />
        ))}
      </Board>
    </div>
  );
}
