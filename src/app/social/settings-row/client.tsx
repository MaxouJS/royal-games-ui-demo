"use client";

import { SettingsRow, GroupKicker, Panel, Toggle, Slider } from "@objectifthunes/royal-games-ui";
import { useState } from "react";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <DemoInner />
  );
}

function DemoInner() {
  const [music, setMusic] = useState(true);
  const [v, setV] = useState(0.62);
  return (
    <Stack>
      <Panel tone="paper">
        <GroupKicker>Audio</GroupKicker>
        <SettingsRow icon="♪" label="Music" control={<Toggle on={music} onToggle={() => setMusic(!music)} />} />
        <SettingsRow icon="♪" label="Volume" control={<Slider value={v} onChange={setV} />} />
        <SettingsRow icon="🌐︎" label="Language" value="English" chevron />
        <SettingsRow icon="☁︎" label="Cloud save" caption="Last sync 2 min ago" value="Synced ✓" chevron />
      </Panel>
    </Stack>
  );
}
