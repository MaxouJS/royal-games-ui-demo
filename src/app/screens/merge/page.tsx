import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { MergeScreen } from "@/examples/screens";

const e = findExport("/screens/merge/")!;

const CODE = "<Screen>\n  <Dock edge=\"top\" tone=\"velvet\">\u2026title + tasks strip\u2026</Dock>\n  <Body>\n    <Board columns={5}>\n      <BoardCell index={0}><MergeItem level={2}>\ud83e\uddf9</MergeItem></BoardCell>\n      <BoardCell index={5}><MergeItem generator level={2}>\ud83d\udd6f\ufe0f</MergeItem></BoardCell>\n      <BoardCell index={4} locked />\n    </Board>\n  </Body>\n  <BottomStack>\n    <Dock edge=\"bottom\" tone=\"stone\">\u2026selected item + sell\u2026</Dock>\n  </BottomStack>\n</Screen>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview><MergeScreen /></PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          Composed entirely from package components — no local CSS. Scroll it into view or hit
          ▶ MOTION to watch the entrance choreography; everything tappable is live.
        </p>
      </Notes>
    </ExportPage>
  );
}
