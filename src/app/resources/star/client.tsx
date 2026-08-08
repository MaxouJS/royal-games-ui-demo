"use client";

import { Star } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <Star /><Star /><Star off />
      <Star size={40} /><Star size={40} off />
    </>
  );
}
