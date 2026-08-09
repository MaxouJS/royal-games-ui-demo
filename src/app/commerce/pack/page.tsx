import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/commerce/pack/")!;

const CODE =
  '<PackRow>\n  <Pack art={<><Gem size="large" />80</>} action={<Button tone="gold" size="small">\u20ac1.99</Button>} />\n</PackRow>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Equal heights by construction: a fixed art zone over a full-width
          action. A PackRow of them can never go ragged.
        </p>
      </Notes>
    </ExportPage>
  );
}
