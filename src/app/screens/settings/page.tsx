import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { SettingsScreen } from "@/examples/screens";

const e = findExport("/screens/settings/")!;

const CODE =
  '<Screen aria-label="Settings">\n  <Chrome>{/* identity and resources */}</Chrome>\n  <Body>\n    <Segmented aria-label="Difficulty" options={difficultyOptions} value={difficulty} onValueChange={setDifficulty} />\n    <Panel tone="paper">\n      <SettingsRow variant="control" icon="\u266a" label="Haptic feedback" control={<Toggle aria-label="Haptic feedback" checked={haptics} onChange={changeHaptics} />} />\n      <SettingsRow variant="control" label="Daily reminder" control={<Checkbox aria-label="Daily reminder" checked={reminder} onChange={changeReminder} />} />\n    </Panel>\n  </Body>\n  <BottomStack><TabBar aria-label="Primary" value={tab} onValueChange={setTab}>{tabs}</TabBar></BottomStack>\n</Screen>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview>
        <SettingsScreen />
      </PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          Composed entirely from package components, no local CSS. Scroll it
          into view or hit ▶ MOTION to watch the entrance choreography;
          everything tappable is live.
        </p>
      </Notes>
    </ExportPage>
  );
}
