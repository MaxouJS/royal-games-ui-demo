import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/panels/panel/")!;

const CODE =
  '<Panel tone="paper">\u2026</Panel>\n<Panel tone="primary" density="compact">\u2026</Panel>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The ornate frame: contour, gold bevel, material face, in parchment and
          stone. Panels stretch to fill their box so side-by-side cards always
          align.
        </p>
      </Notes>
    </ExportPage>
  );
}
