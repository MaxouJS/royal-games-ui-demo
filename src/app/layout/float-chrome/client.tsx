"use client";

import {
  FloatChrome,
  Button,
  Ribbon,
  Counter,
  Heart,
} from "@objectifthunes/royal-games-ui";
import { Scene } from "@/components/Stage";

export function Demo() {
  return (
    <Scene h={92}>
      <FloatChrome>
        <Button tone="primary" size="small">
          Back
        </Button>
        <Ribbon size="small">World 2 · Emberfall</Ribbon>
        <Counter graphic={<Heart />}>4</Counter>
      </FloatChrome>
    </Scene>
  );
}
