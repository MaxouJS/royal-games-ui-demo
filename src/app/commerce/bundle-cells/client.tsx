"use client";

import { BundleCells, BundleCell, Coin, Gem } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <BundleCells>
        <BundleCell><Coin size="lg" />12,000</BundleCell>
        <BundleCell><Gem size="lg" />80</BundleCell>
        <BundleCell><span className="stage-art">✦</span>5 boosts</BundleCell>
      </BundleCells>
    </Stack>
  );
}
