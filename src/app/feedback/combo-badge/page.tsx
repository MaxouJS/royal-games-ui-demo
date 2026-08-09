import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/feedback/combo-badge/")!;

const CODE =
  '<ComboBadge aria-label="Combo times three">COMBO \u00d73</ComboBadge>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Loud accent badge for streaks and multipliers; pops in with the
          choreography.
        </p>
      </Notes>
    </ExportPage>
  );
}
