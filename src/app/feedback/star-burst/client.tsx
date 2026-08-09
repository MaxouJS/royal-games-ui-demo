"use client";

import { StarBurst } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <StarBurst earned={3} total={3} label="Three out of three stars earned" />
      <StarBurst earned={2} total={3} label="Two out of three stars earned" />
    </>
  );
}
