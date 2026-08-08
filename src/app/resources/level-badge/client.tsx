"use client";

import { LevelBadge } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <LevelBadge level={9} />
      <LevelBadge level={12} />
      <LevelBadge level="MAX" label="LVL" />
    </>
  );
}
