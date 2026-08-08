import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/game/merge-item/")!;

const CODE = "<MergeItem level={2}>\ud83d\udd6f\ufe0f</MergeItem>\n<MergeItem generator level={2}>\ud83d\udd6f\ufe0f</MergeItem>   {/* gold + ready glow */}\n<MergeItem level={0}>\ud83c\udf81</MergeItem>             {/* no pips (chest) */}\n<MergeItem solo level={2}>\ud83d\udd6f\ufe0f</MergeItem>        {/* outside a cell */}";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Miniature raised piece with gold level pips; generators go gold and glow when ready. Pure graphics, merging is your game&apos;s job.</p>
      </Notes>
    </ExportPage>
  );
}
