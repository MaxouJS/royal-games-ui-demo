"use client";

import {
  Counter,
  Counters,
  Coin,
  Gem,
  Heart,
  Bolt,
} from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <Counters aria-label="Player resources">
      <Counter graphic={<Coin />} onAdd={() => {}} addLabel="Buy coins">
        2,450
      </Counter>
      <Counter graphic={<Gem />} onAdd={() => {}} addLabel="Buy gems">
        12
      </Counter>
      <Counter graphic={<Heart />}>4</Counter>
      <Counter graphic={<Bolt />}>8/10</Counter>
    </Counters>
  );
}
