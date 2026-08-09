import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/controls/progress-ring/")!;

const CODE =
  '<ProgressRing value={68} aria-label="Level progress">68%</ProgressRing>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Conic gold ring driven by a CSS variable, cooldowns, capture timers,
          circular progress.
        </p>
      </Notes>
    </ExportPage>
  );
}
