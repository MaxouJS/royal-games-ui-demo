import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/resources/star/")!;

const CODE = '<Star /> <Star /> <Star off />\n<Star size="large" />';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The rating star with its gold-dark enamel stroke. For the big victory
          burst, use <code>StarBurst</code>.
        </p>
      </Notes>
    </ExportPage>
  );
}
