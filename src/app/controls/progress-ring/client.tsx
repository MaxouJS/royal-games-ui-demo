"use client";

import { ProgressRing } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <ProgressRing value={68} aria-label="Level progress">
        68%
      </ProgressRing>
      <ProgressRing value={25} aria-label="Time remaining">
        0:45
      </ProgressRing>
    </>
  );
}
