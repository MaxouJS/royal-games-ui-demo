"use client";

import { Gem, Counter, Button } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <Gem size="sm" /><Gem /><Gem size="lg" />
      <Counter icon={<Gem />}>12</Counter>
      <Button tone="gold" size="sm"><Gem style={{ width: 14, height: 14 }} />2</Button>
    </>
  );
}
