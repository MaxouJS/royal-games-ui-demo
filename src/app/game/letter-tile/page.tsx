import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/game/letter-tile/")!;

const CODE = "<LetterRow row={0}>\n  <LetterTile index={0} state=\"fill\">S</LetterTile>\n  <LetterTile index={1} state=\"near\">T</LetterTile>   {/* gold: wrong spot */}\n  <LetterTile index={2} state=\"ok\">O</LetterTile>     {/* emerald: correct */}\n  <LetterTile index={3} />                            {/* empty socket */}\n</LetterRow>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Sockets when empty, mini enamel when judged. Rows flip in row by row, letter by letter via <code>row</code> and <code>index</code>. Word grids belong inside the dark gold-framed card.</p>
      </Notes>
    </ExportPage>
  );
}
