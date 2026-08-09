import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/resources/avatar/")!;

const CODE =
  '<Avatar size="small">\ud83e\udd8a</Avatar>\n<Avatar>\u265b</Avatar>\n<Avatar size="large">\ud83d\udc3b</Avatar>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Gold-framed portrait tile with the outer contour. Emoji here; drop in
          an <code>&lt;img&gt;</code> in production.
        </p>
      </Notes>
    </ExportPage>
  );
}
