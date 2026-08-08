import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { SettingsScreen } from "@/examples/screens";

const e = findExport("/screens/settings/")!;

const CODE = "<Screen>\n  <Dock edge=\"top\" tone=\"stone\" flush>\u2026back + title\u2026</Dock>\n  <Dock edge=\"top\" tone=\"parchment\">\u2026profile row\u2026</Dock>\n  <Body>\n    <Panel tone=\"paper\">\n      <GroupKicker>Audio</GroupKicker>\n      <SettingsRow icon=\"\u266a\" label=\"Music\" control={<Toggle \u2026/>} />\n    </Panel>\n  </Body>\n  <BottomStack>\n    <Dock edge=\"bottom\" tone=\"stone\">\u2026restore / support\u2026</Dock>\n    <TabBar>\u2026</TabBar>\n  </BottomStack>\n</Screen>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview><SettingsScreen /></PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          Composed entirely from package components — no local CSS. Scroll it into view or hit
          ▶ MOTION to watch the entrance choreography; everything tappable is live.
        </p>
      </Notes>
    </ExportPage>
  );
}
