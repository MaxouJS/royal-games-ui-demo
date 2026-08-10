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
          Every phone is a production-shaped React recipe: tabs switch, form
          controls work, actions expose host callbacks, and each structural
          region owns real layout space. Open a screen&apos;s page to copy the
          exact component rendered in its preview—there are no omitted rows,
          fake placeholders, or local screen CSS.
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
