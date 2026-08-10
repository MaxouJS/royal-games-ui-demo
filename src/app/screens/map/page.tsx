import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { MapScreen } from "@/examples/screens";
import { readScreenSource } from "@/examples/readScreenSource";

const e = findExport("/screens/map/")!;

const CODE = readScreenSource("MapScreen");

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview>
        <MapScreen />
      </PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          This is the exact component rendered above. Pin coordinates are
          authored in Screen design units, so the route remains aligned as the
          device changes size or orientation.
        </p>
      </Notes>
    </ExportPage>
  );
}
