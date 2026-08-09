import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/controls/slider/")!;

const CODE =
  '<Slider aria-label="Effects volume" value={volume} onChange={(event) => setVolume(event.currentTarget.valueAsNumber)} />';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A themed native range input. Browser drag, keyboard steps, min/max,
          form behavior, and change events remain intact.
        </p>
      </Notes>
    </ExportPage>
  );
}
