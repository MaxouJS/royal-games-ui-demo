import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/controls/segmented/")!;

const CODE =
  '<Segmented aria-label="Ranking period" options={[{ value: "daily", label: "Daily" }, { value: "weekly", label: "Weekly" }]} value={range} onValueChange={setRange} />';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Controlled radio-group semantics with roving keyboard focus. Options
          expose stable values separately from their rendered labels.
        </p>
      </Notes>
    </ExportPage>
  );
}
