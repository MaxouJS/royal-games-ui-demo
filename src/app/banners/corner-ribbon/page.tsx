import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/banners/corner-ribbon/")!;

const CODE =
  '<div style={{ position: "relative" }}>\n  <CornerRibbon><Ribbon size="small">\u221250%</Ribbon></CornerRibbon>\n  <Panel tone="paper">\u2026</Panel>\n</div>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Rotated sale/“popular” badge pinned to a card&apos;s top-right corner.
          Wrap the card in a relative container; the badge sits above the panel
          contour.
        </p>
      </Notes>
    </ExportPage>
  );
}
