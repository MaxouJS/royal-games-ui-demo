import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/game/word/")!;

const CODE = `import { LetterRow, LetterTile } from "@objectifthunes/royal-games-ui";

<LetterRow row={0}>
  <LetterTile index={0} state="fill">S</LetterTile>
  <LetterTile index={1} state="near">T</LetterTile>   {/* gold: wrong spot */}
  <LetterTile index={2} state="ok">O</LetterTile>     {/* emerald: correct */}
  <LetterTile index={3} />                            {/* empty socket */}
</LetterRow>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Word grids are small centered objects, so they <b>get the card</b> — the dark gold-framed
          panel shown here. Tiles flip in row by row, letter by letter, using the <code>row</code> and{" "}
          <code>index</code> staggers inside any playing scope.
        </p>
      </Notes>
    </ExportPage>
  );
}
