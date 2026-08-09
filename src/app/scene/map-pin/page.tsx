import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/scene/map-pin/")!;

const CODE =
  '<MapPin variant="button" state="complete" stars={2} label="Replay level 8" onPress={replayLevel}>8</MapPin>\n<MapPin variant="button" state="current" label="Play level 9" onPress={playLevel}>9</MapPin>\n<MapPin variant="static" state="unavailable" label="Level 10 is unavailable">10</MapPin>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Level markers with explicit complete, current, and unavailable states.
          Choose a button, link, or static variant so semantics match the
          navigation behavior; the host still owns route placement and progress.
        </p>
      </Notes>
    </ExportPage>
  );
}
