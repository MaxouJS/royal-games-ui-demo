"use client";

import { Pips, MergeItem } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <Pips level={1} /><Pips level={2} /><Pips level={3} />
      <MergeItem solo level={2}>🕯️</MergeItem>
    </>
  );
}
