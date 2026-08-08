"use client";

import { Chrome, ChromeRow, ScreenName, FloatChrome, ProfileChip, Avatar, Counters, Counter, Coin, Gem, Button, Ribbon, Heart } from "@objectifthunes/royal-games-ui";

export function TwoTier() {
  return (
    <div style={{ width: 340, borderRadius: 14, overflow: "hidden", background: "#180e32", paddingBottom: 16 }}>
      <Chrome>
        <ChromeRow tone="velvet">
          <ProfileChip avatar={<Avatar size="sm">♛</Avatar>} name="Max" caption="LEVEL 12" />
          <Counters>
            <Counter icon={<Coin />} onAdd={() => {}}>2,450</Counter>
            <Counter icon={<Gem />} onAdd={() => {}}>12</Counter>
          </Counters>
        </ChromeRow>
        <ChromeRow tone="stone">
          <ScreenName>Home</ScreenName>
          <Button tone="primary" size="sm" icon>⚙</Button>
        </ChromeRow>
      </Chrome>
    </div>
  );
}

export function Floating() {
  return (
    <div style={{ width: 340, borderRadius: 14, overflow: "hidden", background: "linear-gradient(180deg,#241448,#180e32)", padding: "8px 0 18px" }}>
      <FloatChrome>
        <Button tone="primary" size="sm" icon>‹</Button>
        <Ribbon size="sm">World 2 · Emberfall</Ribbon>
        <Counter icon={<Heart />}>4</Counter>
      </FloatChrome>
    </div>
  );
}
