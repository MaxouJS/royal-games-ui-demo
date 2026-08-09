import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/layout/bottom-stack/")!;

const CODE =
  '<BottomStack>\n  <Dock edge="bottom" tone="stone">\u2026</Dock>\n  <TabBar aria-label="Primary" value={tab} onValueChange={setTab}>\u2026</TabBar>\n</BottomStack>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Anchors docks and the tab bar to the bottom edge and welds them in
          order, the dock&apos;s face meets the plinth at the gold rail seam,
          and the active tab pops over it.
        </p>
      </Notes>
    </ExportPage>
  );
}
