"use client";

import { Board, GameTile, type TileColor } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

const ROWS: TileColor[][] = [
  ["purple", "green", "blue", "red", "green", "gold"],
  ["blue", "red", "green", "purple", "red", "gold"],
  ["green", "purple", "red", "blue", "gold", "green"],
  ["red", "gold", "purple", "green", "blue", "red"],
];

export function Demo() {
  const [sel, setSel] = useState(16);
  return (
    <div style={{ width: 300 }}>
      <Board columns={6} gap={5}>
        {ROWS.flat().map((c, i) => (
          <GameTile key={i} color={c} index={i} sel={i === sel} boom={i === 7} onClick={() => setSel(i)} />
        ))}
      </Board>
    </div>
  );
}

export function States() {
  return (
    <>
      <GameTile color="red" style={{ width: 44 }} />
      <GameTile color="blue" style={{ width: 44 }} />
      <GameTile color="green" style={{ width: 44 }} />
      <GameTile color="gold" style={{ width: 44 }} />
      <GameTile color="purple" style={{ width: 44 }} />
      <GameTile color="blue" sel style={{ width: 44 }} />
      <GameTile color="red" boom style={{ width: 44 }} />
      <GameTile color="purple" mini />
    </>
  );
}
