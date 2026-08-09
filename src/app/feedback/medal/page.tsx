import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/feedback/medal/")!;

const CODE =
  '<Medal decorative metal="gold">1</Medal>\n<Medal decorative metal="silver">2</Medal>\n<Medal decorative metal="bronze">3</Medal>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Host content framed in one of three authored metals. Meaningful medal
          art can opt out of decorative mode with an explicit title.
        </p>
      </Notes>
    </ExportPage>
  );
}
