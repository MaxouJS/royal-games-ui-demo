"use client";

import { Screen, Body, Wordmark } from "@objectifthunes/royal-games-ui";
import { Scene } from "@/components/Stage";

export function Demo() {
  return (
    <Scene h={320}>
      <Screen>
        <Body style={{ justifyContent: "center", alignItems: "center" }}>
          <Wordmark>ROYAL GAMES</Wordmark>
        </Body>
      </Screen>
    </Scene>
  );
}
