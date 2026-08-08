import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/feedback/star-burst/")!;

const CODE = "<StarBurst earned={3} />\n<StarBurst earned={2} />   {/* third star stays empty */}";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>The victory three-star burst, each star pops in sequence inside a playing scope.</p>
      </Notes>
    </ExportPage>
  );
}
