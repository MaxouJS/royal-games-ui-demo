"use client";

import { ShopRow, CoinPile, Button, Panel } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ width: 340 }}>
      <Panel tone="primary" faceStyle={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <ShopRow art={<CoinPile coins={1} />} title="Pouch of Coins" caption="900 coins" action={<Button tone="gold" size="sm">€0.99</Button>} />
        <ShopRow art={<CoinPile coins={2} />} title="Sack of Coins" caption="5,200 coins" action={<Button tone="gold" size="sm">€4.99</Button>} />
        <ShopRow art={<span style={{ fontSize: 28, lineHeight: "44px", display: "block", textAlign: "center" }}>🎬</span>} title="Free coins" caption="Watch an ad · 150 coins" action={<Button tone="positive" size="sm">FREE</Button>} />
      </Panel>
    </div>
  );
}
