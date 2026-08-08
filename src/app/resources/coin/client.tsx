"use client";

import { Coin, Counter, Button } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <Coin size="sm" /><Coin /><Coin size="lg" />
      <Counter icon={<Coin />}>2,450</Counter>
      <Button tone="gold" size="sm"><Coin size="sm" />50</Button>
    </>
  );
}
