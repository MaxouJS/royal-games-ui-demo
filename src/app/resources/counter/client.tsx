"use client";

import { Counter, Counters, Coin, Gem, Heart, Bolt } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <Counters>
      <Counter icon={<Coin />} onAdd={() => {}}>2,450</Counter>
      <Counter icon={<Gem />} onAdd={() => {}}>12</Counter>
      <Counter icon={<Heart />}>4</Counter>
      <Counter icon={<Bolt />}>8/10</Counter>
    </Counters>
  );
}
