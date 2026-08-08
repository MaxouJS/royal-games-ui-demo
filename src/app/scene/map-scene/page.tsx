import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/scene/map-scene/")!;

const CODE = "<MapScene>\n  {/* inline SVG path, MapPins\u2026 */}\n</MapScene>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Painted night backdrop with CSS stars and a parchment moon. Position pins and an SVG path inside it; it fills its Screen.</p>
      </Notes>
    </ExportPage>
  );
}
