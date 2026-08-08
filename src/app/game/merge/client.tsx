"use client";

import { Board, BoardCell, MergeItem } from "@objectifthunes/royal-games-ui";

const ITEMS: Array<{ e?: string; l?: number; gen?: boolean; lock?: boolean }> = [
  { e: "🧹", l: 1 }, { e: "🧹", l: 2 }, {}, { e: "🪣", l: 1 }, { lock: true },
  { e: "🕯️", l: 2, gen: true }, { e: "🔑", l: 2 }, {}, { e: "✂️", l: 1 }, { e: "✂️", l: 2 },
  { e: "🪞", l: 1 }, {}, { e: "🎁", l: 0 }, { e: "🫖", l: 1 }, {},
  {}, { e: "📜", l: 1 }, { e: "🫖", l: 2 }, {}, { e: "🧸", l: 3 },
];

export function Demo() {
  return (
    <div style={{ width: 320 }}>
      <Board columns={5} gap={6}>
        {ITEMS.map((c, i) => (
          <BoardCell key={i} index={i} locked={c.lock}>
            {c.e && <MergeItem level={c.l} generator={c.gen}>{c.e}</MergeItem>}
          </BoardCell>
        ))}
      </Board>
    </div>
  );
}

export function Solo() {
  return (
    <>
      <MergeItem solo level={2}>🕯️</MergeItem>
      <MergeItem solo level={3}>🧸</MergeItem>
      <MergeItem solo generator level={1}>🕯️</MergeItem>
    </>
  );
}
