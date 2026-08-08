import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/game/board/")!;

const CODE = "<Board columns={6}>\n  <GameTile color=\"red\" index={0} />\n  \u2026\n</Board>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Frameless play grid, pieces sit straight on the screen with a consistent gutter. Six columns is the validated match-3 density; five for merge.</p>
      </Notes>
    </ExportPage>
  );
}
