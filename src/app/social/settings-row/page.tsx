import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/social/settings-row/")!;

const CODE =
  '<SettingsRow variant="control" icon="\u266a" label="Music" control={<Toggle aria-label="Music" checked={music} onChange={changeMusic} />} />\n<SettingsRow variant="action" icon="\ud83c\udf10\ufe0e" label="Language" caption="English" onPress={openLanguage} />';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A discriminated row whose root is static, a native button, a link, or
          a non-interactive wrapper around a control. The API prevents nested
          interactive elements.
        </p>
      </Notes>
    </ExportPage>
  );
}
