"use client";

import { LetterRow, LetterTile } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <LetterRow row={0}>
        <LetterTile index={0} state="fill">S</LetterTile>
        <LetterTile index={1} state="near">T</LetterTile>
        <LetterTile index={2} state="ok">O</LetterTile>
        <LetterTile index={3} state="fill">R</LetterTile>
        <LetterTile index={4} state="fill">M</LetterTile>
      </LetterRow>
      <LetterRow row={1}>
        <LetterTile index={0} state="fill">R</LetterTile>
        <LetterTile index={1} state="fill">O</LetterTile>
        <LetterTile index={2} />
        <LetterTile index={3} />
        <LetterTile index={4} />
      </LetterRow>
    </div>
  );
}
