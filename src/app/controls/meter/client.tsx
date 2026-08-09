"use client";

import { Meter } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <Meter value={68} label="Level 12" valueText="68 percent" />
      <Meter
        tone="gold"
        value={12}
        max={20}
        label="Gold rush"
        valueText="12 of 20"
      />
      <Meter
        tone="accent"
        value={35}
        label="Time remaining"
        valueText="45 seconds"
      />
    </Stack>
  );
}
