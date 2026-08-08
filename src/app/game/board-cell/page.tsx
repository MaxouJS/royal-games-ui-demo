import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/game/board-cell/")!;

const CODE = "<BoardCell index={0}><MergeItem level={1}>\ud83e\uddf9</MergeItem></BoardCell>\n<BoardCell index={1} />           {/* empty socket */}\n<BoardCell index={2} locked />    {/* cobwebbed */}";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>The recessed socket: filled, empty, or locked behind cobwebs. <code>index</code> staggers the board&apos;s entrance wave.</p>
      </Notes>
    </ExportPage>
  );
}
