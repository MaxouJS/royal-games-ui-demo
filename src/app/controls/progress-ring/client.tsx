"use client";

import { ProgressRing } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <ProgressRing value={68}>68%</ProgressRing>
      <ProgressRing value={25}>0:45</ProgressRing>
    </>
  );
}
