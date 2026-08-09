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
          Every phone is live: tabs switch, form controls work, and actions
          retain native browser behavior. Open a screen&apos;s own page from the
          sidebar for its source.
        </p>
      </Notes>
      <Section>One object, any device</Section>
      <DeviceRange />
      <Notes>
        <p>
          Screen geometry scales from the reference container, caps at the
          reviewed large-screen size, and uses the shorter axis in landscape to
          prevent oversized or colliding controls.
        </p>
      </Notes>
    </ExportPage>
  );
}
