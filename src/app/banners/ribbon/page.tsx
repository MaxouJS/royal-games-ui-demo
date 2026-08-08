import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Sizes, Placements } from "./client";

const e = findExport("/banners/ribbon/")!;

const CODE = `import { Ribbon, TopRibbon, CornerRibbon } from "@objectifthunes/royal-games-ui";

<Ribbon size="lg">Victory!</Ribbon>
<Ribbon>Chapter complete</Ribbon>

<div style={{ position: "relative" }}>
  <TopRibbon><Ribbon size="sm">Best value</Ribbon></TopRibbon>
  <CornerRibbon><Ribbon size="sm">−50%</Ribbon></CornerRibbon>
  <Panel tone="paper">…</Panel>
</div>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Sizes /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The wings are <b>real elements</b> — an outline layer with the fill inset inside it — so the
          contour genuinely follows the notch, scales with the ribbon&apos;s font size, and can never be
          swallowed by a parent background. Ribbons reserve their wing margins, so neighbours in tight
          rows never paint over them.
        </p>
      </Notes>
      <Section>Card placements</Section>
      <Preview center><Placements /></Preview>
    </ExportPage>
  );
}
