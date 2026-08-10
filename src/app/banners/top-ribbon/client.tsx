"use client";

import {
  TopRibbon,
  Ribbon,
  Panel,
  Button,
} from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <TopRibbon>
        <Ribbon size="small">Best value</Ribbon>
      </TopRibbon>
      <Panel tone="paper">
        <Button tone="gold" width="wide">
          €9.99 · BUY
        </Button>
      </Panel>
    </Stack>
  );
}
