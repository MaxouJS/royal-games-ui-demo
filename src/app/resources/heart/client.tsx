"use client";

import { Heart, Counter } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <Heart /><Heart /><Heart off /><Heart off />
      <Counter icon={<Heart />}>4</Counter>
    </>
  );
}
