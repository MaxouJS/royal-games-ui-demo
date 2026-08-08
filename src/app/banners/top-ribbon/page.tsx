import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/banners/top-ribbon/")!;

const CODE = "<div style={{ position: \"relative\" }}>\n  <TopRibbon><Ribbon size=\"sm\">Best value</Ribbon></TopRibbon>\n  <Panel tone=\"paper\">\u2026</Panel>\n</div>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Centers a small ribbon over a card&apos;s top edge, the classic featured-offer crown.</p>
      </Notes>
    </ExportPage>
  );
}
