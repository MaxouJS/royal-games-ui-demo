import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/resources/timer-pill/")!;

const CODE = "<TimerPill>\u23f3 Ends in <b>2d 4h</b></TimerPill>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Recessed countdown pill; bold the value, keep the label soft. Events, sales, daily resets.</p>
      </Notes>
    </ExportPage>
  );
}
