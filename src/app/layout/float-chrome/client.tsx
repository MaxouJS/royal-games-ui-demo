"use client";

import { FloatChrome, Button, Ribbon, Counter, Heart } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ width: 340, borderRadius: 14, overflow: "hidden", background: "linear-gradient(180deg,#241448,#180e32)", padding: "6px 0 16px" }}>
      <FloatChrome>
        <Button tone="primary" size="sm" icon>‹</Button>
        <Ribbon size="sm">World 2 · Emberfall</Ribbon>
        <Counter icon={<Heart />}>4</Counter>
      </FloatChrome>
    </div>
  );
}
