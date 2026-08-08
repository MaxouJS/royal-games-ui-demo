import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/scene/map-pin/")!;

const CODE = "<MapPin stars={2} style={{ left: 70, top: 590 }}>8</MapPin>\n<MapPin state=\"current\" style={{ left: 150, top: 388 }}>9</MapPin>   {/* halo + bob */}\n<MapPin state=\"locked\" style={{ left: 120, top: 272 }}>10</MapPin>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Level markers over the painted world: done pins carry their stars, the current pin pulses its halo and bobs, locked pins go stone. Position absolutely via <code>style</code>; <code>index</code> staggers their spring-in.</p>
      </Notes>
    </ExportPage>
  );
}
