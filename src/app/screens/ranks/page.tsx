import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { RanksScreen } from "@/examples/screens";
import { readScreenSource } from "@/examples/readScreenSource";

const e = findExport("/screens/ranks/")!;

const CODE = readScreenSource("RanksScreen");

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview>
        <RanksScreen />
      </PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          This is the exact component rendered above. The podium owns the top
          composition, the list owns the scrollport, and navigation remains a
          separate lower shell slot.
        </p>
      </Notes>
    </ExportPage>
  );
}
