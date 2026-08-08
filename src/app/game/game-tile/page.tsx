import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/game/game-tile/")!;

const CODE = "<GameTile color=\"purple\" onClick={select} />\n<GameTile color=\"gold\" sel />    {/* selection ring + pulse */}\n<GameTile color=\"red\" boom />    {/* special sparkle */}\n<GameTile color=\"purple\" mini /> {/* inline, for objective chips */}";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Five colors with distinct glyphs, each a miniature raised piece, crown gloss, thick color-matched inner bevel. Tap around; selection is your state.</p>
      </Notes>
    </ExportPage>
  );
}
