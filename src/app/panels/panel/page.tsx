import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo, Wells } from "./client";

const e = findExport("/panels/panel/")!;

const CODE = `import { Panel, Well, GroupKicker } from "@objectifthunes/royal-games-ui";

<Panel tone="paper">
  <GroupKicker>Chapter 3</GroupKicker>
  …
</Panel>
<Panel tone="primary">…</Panel>
<Well>Recessed content</Well>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The panel is the same three-layer construction as everything raised: contour, gold bevel,
          face. Panels <b>stretch to fill their box</b>, so side-by-side cards always align. The Well
          is its recessed counterpart — content reads as carved into the surface.
        </p>
      </Notes>
      <Section>Well</Section>
      <Preview><Wells /></Preview>
    </ExportPage>
  );
}
