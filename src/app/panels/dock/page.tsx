import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/panels/dock/")!;

const CODE =
  '<BottomStack>\n  <Dock edge="bottom" tone="stone">\u2026</Dock>\n  <TabBar aria-label="Primary" value={tab} onValueChange={setTab}>\u2026</TabBar>\n</BottomStack>\n\n<Dock edge="top" tone="primary">\u2026</Dock>\n<Dock edge="top" tone="stone" flush>\u2026</Dock>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Edge-welded panels built like buttons, contour, gold frame, face, so
          the border wraps the curved exposed corners. Inside a{" "}
          <code>BottomStack</code> they weld onto the tab bar.
        </p>
      </Notes>
    </ExportPage>
  );
}
