import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/controls/toggle/")!;

const CODE =
  '<Toggle aria-label="Music" checked={music} onChange={(event) => setMusic(event.currentTarget.checked)} />';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A native checkbox presented as a switch. State remains fully
          controlled through standard input props.
        </p>
      </Notes>
    </ExportPage>
  );
}
