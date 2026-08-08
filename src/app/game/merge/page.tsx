import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo, Solo } from "./client";

const e = findExport("/game/merge/")!;

const CODE = `import { Board, BoardCell, MergeItem } from "@objectifthunes/royal-games-ui";

<Board columns={5}>
  <BoardCell index={0}><MergeItem level={2}>🧹</MergeItem></BoardCell>
  <BoardCell index={1}><MergeItem generator level={2}>🕯️</MergeItem></BoardCell>
  <BoardCell index={2} locked />
  <BoardCell index={3} />
</Board>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The board is <b>frameless</b>: sockets sit straight on the screen with a consistent gutter.
          Items are miniature raised pieces with gold level pips; <code>generator</code> turns the face
          gold with the ready glow. Pure graphics — merging is your game&apos;s job.
        </p>
      </Notes>
      <Section>Standalone items</Section>
      <Preview center><Solo /></Preview>
    </ExportPage>
  );
}
