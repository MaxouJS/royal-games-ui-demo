import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/text/version/")!;

const CODE = "<Version>royal-games-ui \u00b7 v0.1.2</Version>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Muted build footnote for settings footers.</p>
      </Notes>
    </ExportPage>
  );
}
