"use client";

import { TimerPill } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <TimerPill aria-label="Two days and four hours remaining">
        ⏳ <b>2d 4h</b>
      </TimerPill>
      <TimerPill aria-label="Event ends in fourteen hours">
        ⏳ Ends in <b>14h</b>
      </TimerPill>
      <TimerPill aria-label="Gold Rush ends in two days and four hours">
        ⚑ Gold Rush · <b>2d 4h</b>
      </TimerPill>
    </>
  );
}
