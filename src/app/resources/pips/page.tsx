import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/resources/pips/")!;

const CODE = "<Pips level={2} />          {/* \u25cf\u25cf\u25cb */}\n<Pips level={4} max={5} />";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Gold level pips with their dark rings. MergeItem renders them for you; standalone they mark upgrade tiers anywhere.</p>
      </Notes>
    </ExportPage>
  );
}
