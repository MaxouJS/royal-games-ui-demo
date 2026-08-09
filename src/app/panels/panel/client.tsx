"use client";

import {
  Panel,
  GroupKicker,
  Meter,
  Button,
} from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <Panel tone="paper">
        <GroupKicker>Chapter 3</GroupKicker>
        <div className="stage-title">The East Gate</div>
        <Meter
          tone="gold"
          value={12}
          max={20}
          label="PROGRESS"
          valueText="12 / 20"
        />
        <div className="stage-mt">
          <Button tone="accent">PLAY</Button>
        </div>
      </Panel>
      <Panel tone="primary">
        <div className="stage-centered-stack">
          <span className="stage-art">🎁</span>
          <b className="stage-label">Daily Gift</b>
        </div>
      </Panel>
    </Stack>
  );
}
