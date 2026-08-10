import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { readScreenSource } from "@/examples/readScreenSource";
import { VictoryScreen } from "@/examples/screens";

const e = findExport("/screens/victory/")!;

const CODE = readScreenSource("VictoryScreen");

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview>
        <VictoryScreen />
      </PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          This is the exact component rendered above. The result card occupies
          the content slot while the action dock consumes real lower-screen
          space, so neither layer depends on guessed absolute offsets.
        </p>
      </Notes>
    </ExportPage>
  );
}
