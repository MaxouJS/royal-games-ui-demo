"use client";

import { SegmentMeter } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <SegmentMeter value={4} total={6} label="Four of six energy cells" />
      <SegmentMeter value={1} total={5} label="One of five energy cells" />
    </>
  );
}
