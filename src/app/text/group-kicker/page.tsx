import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/text/group-kicker/")!;

const CODE =
  '<Panel tone="paper">\n  <GroupKicker>Audio</GroupKicker>\n  \u2026rows\u2026\n</Panel>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Uppercase, letter-spaced section label for grouping rows inside panels
          and docks.
        </p>
      </Notes>
    </ExportPage>
  );
}
