"use client";

import {
  Bolt,
  Button,
  Coin,
  Counter,
  Gem,
  Ribbon,
  TimerPill,
  Toggle,
} from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function HomeHero() {
  const [sound, setSound] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        padding: "8px 0",
      }}
    >
      <Ribbon size="large">Midnight Court</Ribbon>
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button tone="accent" size="hero" startGraphic={<Bolt />}>
          Play
        </Button>
        <Button tone="positive">Claim</Button>
        <Button tone="gold" size="small">
          Buy
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Counter
          graphic={<Coin />}
          onAdd={() => undefined}
          addLabel="Add coins"
        >
          2,450
        </Counter>
        <Counter graphic={<Gem />}>12</Counter>
        <TimerPill aria-label="Offer expires in two days and four hours">
          2d 4h
        </TimerPill>
        <Toggle
          aria-label="Sound effects"
          checked={sound}
          onChange={(event) => setSound(event.currentTarget.checked)}
        />
      </div>
    </div>
  );
}
