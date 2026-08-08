import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/game/booster/")!;

const CODE = "<Booster count={3}>\ud83d\udd28</Booster>\n<Booster plus>\ud83c\udf00</Booster>          {/* buy slot */}\n<Booster off count={0}>\ud83e\ude84</Booster> {/* depleted */}";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Booster tile with its count badge, the gold plus for buy slots, and a depleted state. Count badges pop in with the choreography.</p>
      </Notes>
    </ExportPage>
  );
}
