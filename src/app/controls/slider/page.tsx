import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/controls/slider/")!;

const CODE = "<Slider value={volume} onChange={setVolume} />   {/* 0..1 */}";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Gold-knobbed volume slider. The pointer-capture drag lives in <code>useSliderDrag</code>, reusable for custom scrubbers.</p>
      </Notes>
    </ExportPage>
  );
}
