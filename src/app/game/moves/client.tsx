"use client";

import { Moves } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <Moves value={24} />
      <Moves value={3} label="LEFT" />
    </>
  );
}
