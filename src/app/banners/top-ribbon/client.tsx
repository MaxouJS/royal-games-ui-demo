"use client";

import { TopRibbon, Ribbon, Panel, Button } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <TopRibbon><Ribbon size="sm">Best value</Ribbon></TopRibbon>
      <Panel tone="paper" faceStyle={{ textAlign: "center", paddingTop: 22 }}>
        <Button tone="gold" block sheen>€9.99 · BUY</Button>
      </Panel>
    </Stack>
  );
}
