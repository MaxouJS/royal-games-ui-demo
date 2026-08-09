"use client";

import { Coin, Counter, Button } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <Coin size="small" />
      <Coin />
      <Coin size="large" />
      <Counter graphic={<Coin />}>2,450</Counter>
      <Button tone="gold" size="small" startGraphic={<Coin size="small" />}>
        50
      </Button>
    </>
  );
}
