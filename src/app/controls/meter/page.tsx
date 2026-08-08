import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/controls/meter/")!;

const CODE = "<Meter value={0.68} label=\"LEVEL 12\" valueLabel=\"68%\" />\n<Meter tone=\"gold\" value={0.6} label=\"GOLD RUSH\" valueLabel=\"12/20\" />\n<Meter tone=\"accent\" value={0.35} label=\"\u23f3 HURRY!\" valueLabel=\"0:45\" />";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Recessed track, raised material fill, and a slow ambient shimmer. Positive for XP, gold for events, accent for urgency.</p>
      </Notes>
    </ExportPage>
  );
}
