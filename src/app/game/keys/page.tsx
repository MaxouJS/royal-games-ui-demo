import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/game/keys/")!;

const CODE = `import { Keys, KeyRow, Key } from "@objectifthunes/royal-games-ui";

<Keys>
  <KeyRow>{"QWERTYUIOP".split("").map((k) => <Key key={k} onClick={() => type(k)}>{k}</Key>)}</KeyRow>
  <KeyRow>{"ASDFGHJKL".split("").map((k) => <Key key={k}>{k}</Key>)}</KeyRow>
  <KeyRow>
    <Key wide gold>⏎</Key>
    {"ZXCVBNM".split("").map((k) => <Key key={k}>{k}</Key>)}
    <Key wide>⌫</Key>
  </KeyRow>
</Keys>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Keys are dark — stone faces, ivory glyphs, the gold enter as the only accent — because a
          light keyboard in a dark theme is nonsense. Arrangement and input handling belong to the
          game; the package ships the pieces.
        </p>
      </Notes>
    </ExportPage>
  );
}
