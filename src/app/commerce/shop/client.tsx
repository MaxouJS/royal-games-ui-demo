"use client";

import { Panel, ShopRow, Pack, PackRow, BundleCell, BundleCells, CoinPile, Button, Strike, Gem, Coin, CornerRibbon, TopRibbon, Ribbon, GroupKicker } from "@objectifthunes/royal-games-ui";

export function Bundle() {
  return (
    <div style={{ position: "relative", marginTop: 14, width: 320 }}>
      <TopRibbon><Ribbon size="sm">Best value</Ribbon></TopRibbon>
      <CornerRibbon><Ribbon size="sm">−50%</Ribbon></CornerRibbon>
      <Panel tone="paper">
        <div style={{ textAlign: "center", margin: "8px 0 2px" }}>
          <GroupKicker>Royal Bundle</GroupKicker>
          <div style={{ font: "800 22px/1.1 var(--rg-font-display)" }}>King&apos;s Coffer</div>
        </div>
        <BundleCells>
          <BundleCell><Coin size="lg" />12,000</BundleCell>
          <BundleCell><Gem size="lg" />80</BundleCell>
          <BundleCell><span style={{ fontSize: 26, lineHeight: 1 }}>✦</span>5 boosts</BundleCell>
        </BundleCells>
        <Button tone="gold" block sheen><Strike>€19.99</Strike>€9.99 · BUY</Button>
      </Panel>
    </div>
  );
}

export function Rows() {
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

export function Packs() {
  return (
    <div style={{ width: 340 }}>
      <PackRow>
        <Pack art={<><Gem size="lg" />80</>} action={<Button tone="gold" size="sm" block>€1.99</Button>} />
        <Pack art={<><Gem size="lg" />500</>} action={<Button tone="gold" size="sm" block>€8.99</Button>} />
        <Pack art={<><Gem size="lg" />1200</>} action={<Button tone="gold" size="sm" block>€17.99</Button>} />
      </PackRow>
    </div>
  );
}
