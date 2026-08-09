"use client";

import { Chrome, ChromeRow, ScreenName, ProfileChip, Avatar, Counters, Counter, Coin, Button } from "@objectifthunes/royal-games-ui";
import { Scene } from "@/components/Stage";

export function Demo() {
  return (
    <Scene h={124}>
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
    </Scene>
  );
}
