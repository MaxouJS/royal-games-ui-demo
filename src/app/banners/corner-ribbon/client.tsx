"use client";

import { CornerRibbon, Ribbon, Panel, Button } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <CornerRibbon><Ribbon size="sm">−50%</Ribbon></CornerRibbon>
      <Panel tone="paper" faceStyle={{ textAlign: "center" }}>
        <div className="stage-title">King&apos;s Coffer</div>
        <Button tone="gold" block>€9.99 · BUY</Button>
      </Panel>
    </Stack>
  );
}
