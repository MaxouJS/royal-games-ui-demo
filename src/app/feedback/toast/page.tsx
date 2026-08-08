import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/feedback/toast/")!;

const CODE = "<Toast><Coin />+120 coins collected!</Toast>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Framed announcement pill for rewards and saves. Enters with a rise inside any playing scope.</p>
      </Notes>
    </ExportPage>
  );
}
