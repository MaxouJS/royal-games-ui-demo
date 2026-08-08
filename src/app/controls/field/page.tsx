import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/controls/field/")!;

const CODE = "<Field icon=\"\u265b\" placeholder=\"Kingdom name\u2026\" />";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Recessed text field that grows a gold focus glow. Accepts every native input prop.</p>
      </Notes>
    </ExportPage>
  );
}
