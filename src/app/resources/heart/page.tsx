import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/resources/heart/")!;

const CODE =
  "<Heart />        {/* a life */}\n<Heart off />    {/* an empty slot */}\n<Counter graphic={<Heart />}>4</Counter>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Lives. The filled heart carries its own darker stroke; inside a
          Counter it quietly beats.
        </p>
      </Notes>
    </ExportPage>
  );
}
