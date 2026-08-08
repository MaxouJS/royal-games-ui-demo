"use client";

import { LetterRow, LetterTile, GroupKicker } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ width: 320, background: "linear-gradient(180deg,#2a1752,#1a0f38)", borderRadius: 16, padding: "14px 10px", display: "flex", flexDirection: "column", gap: 8, border: "2px solid #4a2b06", boxShadow: "inset 0 0 0 3px #f0b93c" }}>
      <GroupKicker style={{ textAlign: "center", color: "#8b80b4" }}>Guess the royal word</GroupKicker>
      <LetterRow row={0}>
        {[["S", "fill"], ["T", "near"], ["O", "ok"], ["R", "fill"], ["M", "fill"]].map(([ch, st], i) => (
          <LetterTile key={i} index={i} state={st as never}>{ch}</LetterTile>
        ))}
      </LetterRow>
      <LetterRow row={1}>
        {[["R", "ok"], ["O", "ok"], ["Y", "near"], ["A", "fill"], ["L", "ok"]].map(([ch, st], i) => (
          <LetterTile key={i} index={i} state={st as never}>{ch}</LetterTile>
        ))}
      </LetterRow>
      <LetterRow row={2}>
        <LetterTile index={0} state="fill">R</LetterTile>
        <LetterTile index={1} state="fill">O</LetterTile>
        <LetterTile index={2} />
        <LetterTile index={3} />
        <LetterTile index={4} />
      </LetterRow>
    </div>
  );
}
