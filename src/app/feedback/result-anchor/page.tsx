import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/feedback/result-anchor/")!;

const CODE =
  '<Dim />\n<ResultAnchor>\n  <Ribbon size="large">Victory!</Ribbon>\n  <Panel tone="paper">\u2026score, rewards, meter\u2026</Panel>\n</ResultAnchor>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Positions a Panel as the modal result sheet; it pops in before its
          stars burst.
        </p>
      </Notes>
    </ExportPage>
  );
}
