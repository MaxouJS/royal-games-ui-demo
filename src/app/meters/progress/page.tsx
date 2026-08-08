import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Meters, Rings } from "./client";

const e = findExport("/meters/progress/")!;

const CODE = `import { Meter, SegmentMeter, ProgressRing } from "@objectifthunes/royal-games-ui";

<Meter value={0.68} label="LEVEL 12" valueLabel="68%" />
<Meter tone="gold" value={0.6} label="GOLD RUSH" valueLabel="12/20" />
<SegmentMeter filled={4} total={6} />
<ProgressRing value={68}>68%</ProgressRing>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Meters /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Fills carry a slow shimmer sweep — ambient, quiet, always on. Tracks are recessed with the
          contour; fills are raised material. The ring is a conic gradient driven by a CSS variable.
        </p>
      </Notes>
      <Section>Rings, segments & lives</Section>
      <Preview center><Rings /></Preview>
    </ExportPage>
  );
}
