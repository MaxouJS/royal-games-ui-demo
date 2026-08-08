"use client";

import { BundleCells, BundleCell, Coin, Gem } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ width: 320 }}>
      <BundleCells>
        <BundleCell><Coin size="lg" />12,000</BundleCell>
        <BundleCell><Gem size="lg" />80</BundleCell>
        <BundleCell><span style={{ fontSize: 26, lineHeight: 1 }}>✦</span>5 boosts</BundleCell>
      </BundleCells>
    </div>
  );
}
