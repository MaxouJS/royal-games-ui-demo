"use client";

import { ShopRow, CoinPile } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ display: "flex", gap: 40 }}>
      <span style={{ position: "relative", width: 52, height: 44, display: "inline-block" }}><CoinPile coins={1} /></span>
      <span style={{ position: "relative", width: 52, height: 44, display: "inline-block" }}><CoinPile coins={2} /></span>
      <span style={{ position: "relative", width: 52, height: 44, display: "inline-block" }}><CoinPile coins={3} /></span>
    </div>
  );
}
