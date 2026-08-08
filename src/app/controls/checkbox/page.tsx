import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/controls/checkbox/")!;

const CODE = "<Checkbox checked={agreed} onToggle={toggle} />";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Recessed until checked, then gold enamel with the tick.</p>
      </Notes>
    </ExportPage>
  );
}
