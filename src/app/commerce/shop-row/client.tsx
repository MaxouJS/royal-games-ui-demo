"use client";

import { ShopRow, CoinPile, Button, Panel } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <Panel tone="primary" faceStyle={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <ShopRow art={<CoinPile coins={1} />} title="Pouch of Coins" caption="900 coins" action={<Button tone="gold" size="sm">€0.99</Button>} />
        <ShopRow art={<CoinPile coins={2} />} title="Sack of Coins" caption="5,200 coins" action={<Button tone="gold" size="sm">€4.99</Button>} />
        <ShopRow art={<span className="stage-art">🎬</span>} title="Free coins" caption="Watch an ad · 150 coins" action={<Button tone="positive" size="sm">FREE</Button>} />
      </Panel>
    </Stack>
  );
}
