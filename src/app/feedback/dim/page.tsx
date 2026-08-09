import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/feedback/dim/")!;

const CODE = "<Dim />\n<ResultAnchor>\u2026sheet\u2026</ResultAnchor>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Full-screen scrim behind result sheets and modals; fades in with the
          choreography.
        </p>
      </Notes>
    </ExportPage>
  );
}
