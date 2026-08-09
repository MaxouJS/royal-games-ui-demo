"use client";

import { LevelBadge } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <LevelBadge level={9} aria-label="Level 9" />
      <LevelBadge level={12} aria-label="Level 12" />
      <LevelBadge level="MAX" label="LVL" aria-label="Maximum level" />
    </>
  );
}
