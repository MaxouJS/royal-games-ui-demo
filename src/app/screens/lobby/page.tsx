import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { readScreenSource } from "@/examples/readScreenSource";
import { LobbyScreen } from "@/examples/screens";

const e = findExport("/screens/lobby/")!;

const CODE = readScreenSource("LobbyScreen");

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview>
        <LobbyScreen />
      </PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          This is the exact component rendered above, including imports,
          responsive placement, state, and interaction wiring. Copy it as a
          starting screen and replace the example data and artwork with your
          game&apos;s values.
        </p>
      </Notes>
    </ExportPage>
  );
}
