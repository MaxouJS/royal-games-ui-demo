"use client";

import { Board, BoardCell, MergeItem } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ width: 260 }}>
      <Board columns={4} gap={6}>
        <BoardCell index={0}><MergeItem level={1}>🧹</MergeItem></BoardCell>
        <BoardCell index={1} />
        <BoardCell index={2} locked />
        <BoardCell index={3}><MergeItem level={0}>🎁</MergeItem></BoardCell>
      </Board>
    </div>
  );
}
