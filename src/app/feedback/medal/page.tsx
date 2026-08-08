import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/feedback/medal/")!;

const CODE = "<Medal tier=\"gold\">1</Medal>\n<Medal tier=\"silver\">2</Medal>\n<Medal tier=\"bronze\">3</Medal>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Podium medallions in the three metals, each with the crown highlight and contour.</p>
      </Notes>
    </ExportPage>
  );
}
