"use client";

import { ObjectiveChip, GameTile, Star } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <ObjectiveChip icon={<GameTile color="purple" mini />}>12/30</ObjectiveChip>
      <ObjectiveChip done icon={<GameTile color="red" mini />}>20/20 ✓</ObjectiveChip>
      <ObjectiveChip icon={<Star size={12} />}>31/60</ObjectiveChip>
      <ObjectiveChip>🔥 Streak 4</ObjectiveChip>
    </>
  );
}
