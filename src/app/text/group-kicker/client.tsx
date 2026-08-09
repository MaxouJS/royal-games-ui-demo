"use client";

import { GroupKicker, Panel, SettingsRow, Toggle } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <Panel tone="paper">
        <GroupKicker>Audio</GroupKicker>
        <SettingsRow icon="♪" label="Music" control={<Toggle on />} />
      </Panel>
    </Stack>
  );
}
