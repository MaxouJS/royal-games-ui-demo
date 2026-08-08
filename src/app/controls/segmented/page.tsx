import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/controls/segmented/")!;

const CODE = "<Segmented options={[\"Daily\", \"Weekly\", \"All-time\"]} value={range} onChange={setRange} />";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Single-select pill group for leaderboard ranges and view switches.</p>
      </Notes>
    </ExportPage>
  );
}
