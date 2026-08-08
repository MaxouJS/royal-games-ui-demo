import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo, States } from "./client";

const e = findExport("/game/match-3/")!;

const CODE = `import { Board, GameTile } from "@objectifthunes/royal-games-ui";

<Board columns={6}>
  <GameTile color="purple" index={0} onClick={select} />
  <GameTile color="gold" sel index={1} />     {/* selection ring + pulse */}
  <GameTile color="red" boom index={2} />     {/* special sparkle */}
</Board>

<GameTile color="purple" mini />  {/* inline size for objective chips */}`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Tap around — selection is your state, the tile just wears it. Five colors with distinct
          glyphs, each a miniature raised piece: crown gloss on top, thick color-matched bevel inside
          the bottom edge. Six columns is the validated density on a 352px phone.
        </p>
      </Notes>
      <Section>States</Section>
      <Preview><States /></Preview>
    </ExportPage>
  );
}
