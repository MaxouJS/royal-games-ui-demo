import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Match3Screen } from "@/examples/screens";

const e = findExport("/screens/match-3/")!;

const CODE = "<Screen>\n  <Dock edge=\"top\" tone=\"velvet\">\n    \u2026level ribbon, objectives, <Moves value={24} />\u2026\n    <Meter tone=\"gold\" value={0.72} label=\"SCORE 6,150\" valueLabel=\"TARGET 8,420\" />\n  </Dock>\n  <Body>\n    <Board columns={6}>\n      <GameTile color=\"purple\" index={0} sel={sel === 0} onClick={\u2026} />\n    </Board>\n  </Body>\n  <BottomStack>\n    <Dock edge=\"bottom\" tone=\"stone\">\u2026boosters\u2026</Dock>\n  </BottomStack>\n</Screen>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview><Match3Screen /></PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          Composed entirely from package components, no local CSS. Scroll it into view or hit
          ▶ MOTION to watch the entrance choreography; everything tappable is live.
        </p>
      </Notes>
    </ExportPage>
  );
}
