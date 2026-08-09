"use client";

import { Gem, Counter, Button } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <Gem size="small" />
      <Gem />
      <Gem size="large" />
      <Counter graphic={<Gem />}>12</Counter>
      <Button tone="gold" size="small" startGraphic={<Gem size="small" />}>
        2
      </Button>
    </>
  );
}
