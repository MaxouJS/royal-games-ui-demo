import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { VictoryScreen } from "@/examples/screens";

const e = findExport("/screens/victory/")!;

const CODE = "<Screen>\n  <Dim />\n  <ResultAnchor>\n    <Ribbon size=\"lg\">Victory!</Ribbon>\n    <Panel tone=\"paper\">\n      <StarBurst earned={3} />\n      <Well>SCORE \u00b7 8,420</Well>\n      <Meter value={0.68} label=\"LEVEL 12\" valueLabel=\"68%\" />\n    </Panel>\n  </ResultAnchor>\n  <BottomStack>\n    <Dock edge=\"bottom\" tone=\"velvet\">\n      <Button tone=\"positive\" size=\"hero\" block sheen>CONTINUE</Button>\n    </Dock>\n  </BottomStack>\n</Screen>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview><VictoryScreen /></PhonePreview>
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
