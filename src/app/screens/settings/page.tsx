import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { readScreenSource } from "@/examples/readScreenSource";
import { SettingsScreen } from "@/examples/screens";

const e = findExport("/screens/settings/")!;

const CODE = readScreenSource("SettingsScreen");

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview>
        <SettingsScreen />
      </PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          This is the exact controlled React component rendered above. The two
          top docks, scrolling form region, support dock, and navigation each
          consume their own layout slot without local CSS.
        </p>
      </Notes>
    </ExportPage>
  );
}
