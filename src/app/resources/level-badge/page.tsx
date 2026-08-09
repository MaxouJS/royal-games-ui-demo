import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/resources/level-badge/")!;

const CODE = '<LevelBadge level={12} aria-label="Level 12" />';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Round stone medallion with the gold ring, level markers in docks, map
          footers and profiles.
        </p>
      </Notes>
    </ExportPage>
  );
}
