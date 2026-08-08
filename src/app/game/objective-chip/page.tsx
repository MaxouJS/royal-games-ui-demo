import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/game/objective-chip/")!;

const CODE = "<ObjectiveChip icon={<GameTile color=\"purple\" mini />}>12/30</ObjectiveChip>\n<ObjectiveChip done icon={<GameTile color=\"red\" mini />}>20/20 \u2713</ObjectiveChip>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Objective readout with a mini tile or glyph as its icon; <code>done</code> turns it emerald.</p>
      </Notes>
    </ExportPage>
  );
}
