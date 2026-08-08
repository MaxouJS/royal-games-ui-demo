"use client";

import { GroupKicker, Panel, SettingsRow, Toggle } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ width: 300 }}>
      <Panel tone="paper">
        <GroupKicker>Audio</GroupKicker>
        <SettingsRow icon="♪" label="Music" control={<Toggle on />} />
      </Panel>
    </div>
  );
}
