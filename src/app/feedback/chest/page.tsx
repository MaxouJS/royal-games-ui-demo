import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/feedback/chest/")!;

const CODE = "<Chest />        {/* idle */}\n<Chest glow />   {/* claimable */}";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Reward chest; <code>glow</code> pulses the gold halo that says “open me”.</p>
      </Notes>
    </ExportPage>
  );
}
