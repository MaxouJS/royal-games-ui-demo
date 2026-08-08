import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/resources/chip/")!;

const CODE = "<Chip on={picked} onClick={pick}>Normal</Chip>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Pill choice for difficulty pickers and filters. Selected chips go gold with the contour ring; presses nudge, selection is your state.</p>
      </Notes>
    </ExportPage>
  );
}
