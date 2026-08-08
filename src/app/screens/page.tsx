import { ExportPage, Notes } from "@/components/ExportPage";
import { findExport } from "@/components/exports";
import { AllScreens } from "./overview-client";

const e = findExport("/screens/")!;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <AllScreens />
      <Notes>
        <p>
          Every phone is live: scroll and each screen plays its entrance, tabs switch, tiles select,
          forms work. Open a screen&apos;s own page from the sidebar for its source.
        </p>
      </Notes>
    </ExportPage>
  );
}
