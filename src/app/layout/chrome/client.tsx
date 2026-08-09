"use client";

import {
  Chrome,
  ChromeRow,
  ScreenName,
  ProfileChip,
  Avatar,
  Counters,
  Counter,
  Coin,
  Button,
} from "@objectifthunes/royal-games-ui";
import { Scene } from "@/components/Stage";

export function Demo() {
  return (
    <Scene h={124}>
      <Chrome>
        <ChromeRow tone="velvet">
          <ProfileChip
            avatar={<Avatar size="small">♛</Avatar>}
            name="Max"
            caption="LEVEL 12"
          />
          <Counters aria-label="Player resources">
            <Counter graphic={<Coin />} onAdd={() => {}} addLabel="Buy coins">
              2,450
            </Counter>
          </Counters>
        </ChromeRow>
        <ChromeRow tone="stone">
          <ScreenName>Home</ScreenName>
          <Button tone="primary" size="small">
            Settings
          </Button>
        </ChromeRow>
      </Chrome>
    </Scene>
  );
}
