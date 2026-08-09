"use client";

import {
  BundleCells,
  BundleCell,
  Coin,
  Gem,
} from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <BundleCells>
        <BundleCell label="12,000 coins">
          <Coin size="large" />
        </BundleCell>
        <BundleCell label="80 gems">
          <Gem size="large" />
        </BundleCell>
        <BundleCell label="Five boosts">
          <span className="stage-art">✦</span>
        </BundleCell>
      </BundleCells>
    </Stack>
  );
}
