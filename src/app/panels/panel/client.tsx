"use client";

import { Panel, GroupKicker, Meter, Button } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <Panel tone="paper">
        <GroupKicker>Chapter 3</GroupKicker>
        <div className="stage-title">The East Gate</div>
        <Meter tone="gold" value={0.6} label="PROGRESS" valueLabel="12 / 20" />
        <div className="stage-mt"><Button tone="accent" block sheen>PLAY</Button></div>
      </Panel>
      <Panel tone="primary" faceStyle={{ display: "grid", placeItems: "center", gap: 8 }}>
        <span className="stage-art">🎁</span>
        <b className="stage-label">Daily Gift</b>
      </Panel>
    </Stack>
  );
}
