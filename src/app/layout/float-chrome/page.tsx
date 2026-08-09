import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/layout/float-chrome/")!;

const CODE =
  '<FloatChrome floating>\n  <Button tone="primary" size="small">Back</Button>\n  <Ribbon size="small">World 2 \u00b7 Emberfall</Ribbon>\n  <Counter graphic={<Heart />}>4</Counter>\n</FloatChrome>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Loose chrome row for scene screens, back action, title ribbon, one
          counter. <code>floating</code> positions it absolutely over the scene.
        </p>
      </Notes>
    </ExportPage>
  );
}
