"use client";

import {
  SettingsRow,
  GroupKicker,
  Panel,
  Toggle,
  Slider,
} from "@objectifthunes/royal-games-ui";
import { useState } from "react";
import { Stack } from "@/components/Stage";

export function Demo() {
  return <DemoInner />;
}

function DemoInner() {
  const [music, setMusic] = useState(true);
  const [v, setV] = useState(0.62);
  return (
    <Stack>
      <Panel tone="paper">
        <GroupKicker>Audio</GroupKicker>
        <SettingsRow
          variant="control"
          icon="♪"
          label="Music"
          control={
            <Toggle
              aria-label="Music"
              checked={music}
              onChange={(event) => setMusic(event.currentTarget.checked)}
            />
          }
        />
        <SettingsRow
          variant="control"
          icon="♪"
          label="Volume"
          control={
            <Slider
              aria-label="Volume"
              min={0}
              max={1}
              step={0.01}
              value={v}
              onChange={(event) => setV(event.currentTarget.valueAsNumber)}
            />
          }
        />
        <SettingsRow
          variant="action"
          icon="🌐︎"
          label="Language"
          caption="English"
          onPress={() => {}}
        />
        <SettingsRow
          variant="action"
          icon="☁︎"
          label="Cloud save"
          caption="Synced · Last sync 2 min ago"
          onPress={() => {}}
        />
      </Panel>
    </Stack>
  );
}
