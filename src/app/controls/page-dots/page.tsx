import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/controls/page-dots/")!;

const CODE = "<PageDots count={4} index={page} />";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Carousel dots, the active dot stretches gold and breathes. Click the demo to advance.</p>
      </Notes>
    </ExportPage>
  );
}
