"use client";

import { Panel, SettingsRow, GroupKicker, Toggle, Slider } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  const [music, setMusic] = useState(true);
  const [sounds, setSounds] = useState(true);
  const [volume, setVolume] = useState(0.62);
  return (
    <div style={{ width: 340 }}>
      <Panel tone="paper">
        <GroupKicker>Audio</GroupKicker>
        <SettingsRow icon="♪" label="Music" control={<Toggle on={music} onToggle={() => setMusic(!music)} />} />
        <SettingsRow icon="🔔︎" label="Sounds" control={<Toggle on={sounds} onToggle={() => setSounds(!sounds)} />} />
        <SettingsRow icon="♪" label="Volume" control={<Slider value={volume} onChange={setVolume} style={{ width: 150 }} />} />
      </Panel>
      <div style={{ height: 12 }} />
      <Panel tone="paper">
        <GroupKicker>Game</GroupKicker>
        <SettingsRow icon="🌐︎" label="Language" value="English" chevron />
        <SettingsRow icon="☁︎" label="Cloud save" caption="Last sync 2 min ago" value="Synced ✓" chevron />
      </Panel>
    </div>
  );
}
