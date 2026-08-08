import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/resources/gem/")!;

const CODE = "<Gem size=\"sm\" /> <Gem /> <Gem size=\"lg\" />";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>CSS-drawn amethyst, clip-path cut with the contour in Enamel. The premium currency glyph.</p>
      </Notes>
    </ExportPage>
  );
}
