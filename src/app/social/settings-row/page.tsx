import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/social/settings-row/")!;

const CODE = "<SettingsRow icon=\"\u266a\" label=\"Music\" control={<Toggle on={music} onToggle={toggle} />} />\n<SettingsRow icon=\"\ud83c\udf10\ufe0e\" label=\"Language\" value=\"English\" chevron />";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>One row, two endings: a value + chevron for navigation, or any trailing control. Group them under kickers in parchment panels.</p>
      </Notes>
    </ExportPage>
  );
}
