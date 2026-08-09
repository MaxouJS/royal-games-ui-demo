"use client";

import { Pips } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <Pips value={1} total={3} label="One of three steps" />
      <Pips value={2} total={3} label="Two of three steps" />
      <Pips value={3} total={3} label="Three of three steps" />
    </>
  );
}
