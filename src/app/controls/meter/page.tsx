import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/controls/meter/")!;

const CODE =
  '<Meter value={68} max={100} label="LEVEL 12" valueText="68%" />\n<Meter tone="gold" value={12} max={20} label="GOLD RUSH" valueText="12/20" />\n<Meter tone="accent" value={15} max={45} label="\u23f3 HURRY!" valueText="0:15" />';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A semantic meter with explicit host-owned bounds, label, and display
          text. The package clamps the visual fill without changing the value
          owned by your application.
        </p>
      </Notes>
    </ExportPage>
  );
}
