import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { findExport } from "@/components/exports";
import { AllScreens, DeviceRange } from "./overview-client";

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
      <Section>One object, any device</Section>
      <DeviceRange />
      <Notes>
        <p>
          Every dimension in the kit is a multiple of one screen-relative unit, so the same
          screen renders proportionally on any device width. No breakpoints, no overflow.
        </p>
      </Notes>
    </ExportPage>
  );
}
