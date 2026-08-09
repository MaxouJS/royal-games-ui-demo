"use client";

import { Meter } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <Meter value={0.68} label="LEVEL 12" valueLabel="68%" />
      <Meter tone="gold" value={0.6} label="GOLD RUSH" valueLabel="12/20" />
      <Meter tone="accent" value={0.35} label="⏳ HURRY!" valueLabel="0:45" />
    </Stack>
  );
}
