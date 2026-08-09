import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/panels/well/")!;

const CODE = "<Well>\n  <span>SCORE</span><span>8,420</span>\n</Well>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The recessed counterpart to the Panel, content reads as carved into
          the surface. Scores, bundle contents, empty states.
        </p>
      </Notes>
    </ExportPage>
  );
}
