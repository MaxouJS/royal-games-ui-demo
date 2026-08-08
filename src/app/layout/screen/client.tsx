"use client";

import { Screen, Body, Wordmark } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ width: 300, height: 320, borderRadius: 18, overflow: "hidden" }}>
      <Screen style={{ background: "linear-gradient(180deg,#241448,#180e32)" }}>
        <Body style={{ justifyContent: "center", alignItems: "center" }}>
          <Wordmark>ROYAL GAMES</Wordmark>
        </Body>
      </Screen>
    </div>
  );
}
