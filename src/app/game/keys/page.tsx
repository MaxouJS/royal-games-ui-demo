import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/game/keys/")!;

const CODE = "<Keys>\n  <KeyRow>{\"QWERTY\u2026\".split(\"\").map((k) => <Key key={k} onClick={() => type(k)}>{k}</Key>)}</KeyRow>\n  <KeyRow><Key wide gold>\u23ce</Key> \u2026 <Key wide>\u232b</Key></KeyRow>\n</Keys>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Dark stone keys with ivory glyphs, the gold enter is the only accent. Arrangement and input handling belong to the game.</p>
      </Notes>
    </ExportPage>
  );
}
