import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/actions/button/")!;

const CODE = "<Button tone=\"accent\" size=\"hero\" sheen>PLAY</Button>\n<Button tone=\"positive\">CLAIM</Button>\n<Button tone=\"gold\" size=\"sm\"><Strike>\u20ac19.99</Strike>\u20ac9.99</Button>\n<Button tone=\"primary\" icon dot>\u2709</Button>\n<Button tone=\"accent\" disabled>PLAY</Button>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Five material tones, three sizes, icon squares, block width, hero sheen and the corner dot. Pressing sinks the face onto its bevel, <b>transform-only</b>, so neither the button nor its section ever moves. Disabled buttons ignore presses.</p>
      </Notes>
    </ExportPage>
  );
}
