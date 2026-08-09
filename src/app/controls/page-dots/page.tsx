import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/controls/page-dots/")!;

const CODE =
  "<PageDots count={4} index={page} onPageChange={setPage} getPageLabel={(index) => `Open page ${index + 1}`} />";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Bounded carousel position. Supplying <code>onPageChange</code> and
          <code>getPageLabel</code> promotes every dot to a named native button.
        </p>
      </Notes>
    </ExportPage>
  );
}
