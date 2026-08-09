import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/banners/ribbon/")!;

const CODE =
  '<Ribbon size="large">Victory!</Ribbon>\n<Ribbon>Chapter complete</Ribbon>\n<Ribbon size="small">Best value</Ribbon>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The wings are real layered elements, an outline shell with the fill
          inset, so the contour follows the notch, scales with the font size,
          and can never be swallowed by a parent background.
        </p>
      </Notes>
    </ExportPage>
  );
}
