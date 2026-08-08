"use client";

import { Chrome, ChromeRow, ScreenName, ProfileChip, Avatar, Counters, Counter, Coin, Button } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ width: 340, borderRadius: 14, overflow: "hidden", background: "#180e32", paddingBottom: 14 }}>
      <Chrome>
        <ChromeRow tone="velvet">
          <ProfileChip avatar={<Avatar size="sm">♛</Avatar>} name="Max" caption="LEVEL 12" />
          <Counters><Counter icon={<Coin />} onAdd={() => {}}>2,450</Counter></Counters>
        </ChromeRow>
        <ChromeRow tone="stone">
          <ScreenName>Home</ScreenName>
          <Button tone="primary" size="sm" icon>⚙</Button>
        </ChromeRow>
      </Chrome>
    </div>
  );
}
