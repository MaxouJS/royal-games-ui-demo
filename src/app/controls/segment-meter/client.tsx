"use client";

import { SegmentMeter } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <SegmentMeter filled={4} total={6} />
      <SegmentMeter filled={1} total={5} />
    </>
  );
}
