import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/social/settings/")!;

const CODE = `import { SettingsRow, GroupKicker } from "@objectifthunes/royal-games-ui";

<Panel tone="paper">
  <GroupKicker>Audio</GroupKicker>
  <SettingsRow icon="♪" label="Music" control={<Toggle on={music} onToggle={toggle} />} />
  <SettingsRow icon="♪" label="Volume" control={<Slider value={v} onChange={setV} />} />
  <SettingsRow icon="🌐︎" label="Language" value="English" chevron />
</Panel>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          One row, two endings: a <code>value</code> + <code>chevron</code> for navigation, or any
          <code> control</code> — Toggle, Slider, Button. Group them under kickers inside parchment panels.
        </p>
      </Notes>
    </ExportPage>
  );
}
