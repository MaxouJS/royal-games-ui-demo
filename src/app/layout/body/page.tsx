import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/layout/body/")!;

const CODE =
  '<Body style={{ paddingBottom: 180 }}>\n  <Panel tone="paper">\u2026</Panel>\n  <Panel tone="primary">\u2026</Panel>\n</Body>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Its children cascade upward one by one during the entrance
          choreography. Give it extra bottom padding matching your dock stack.
        </p>
      </Notes>
    </ExportPage>
  );
}
