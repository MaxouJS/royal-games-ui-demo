import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/feedback/speech-bubble/")!;

const CODE =
  '<Avatar size="large">NPC</Avatar>\n<SpeechBubble>Find me a <b>Level 3 candle</b>, dear!</SpeechBubble>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Parchment dialogue bubble whose tail is a clipped shape with its own
          contour, character quests, tutorials.
        </p>
      </Notes>
    </ExportPage>
  );
}
