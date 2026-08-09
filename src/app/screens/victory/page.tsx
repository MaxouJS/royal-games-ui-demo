import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { VictoryScreen } from "@/examples/screens";

const e = findExport("/screens/victory/")!;

const CODE =
  '<Screen aria-label="Victory results">\n  <Dim />\n  <ResultAnchor>\n    <Ribbon size="large">Victory!</Ribbon>\n    <Panel tone="paper">\n      <StarBurst earned={3} total={3} label="Three out of three stars earned" />\n      <Well>SCORE \u00b7 8,420</Well>\n      <Meter value={68} max={100} label="LEVEL 12" valueText="68%" />\n    </Panel>\n  </ResultAnchor>\n  <BottomStack><Dock edge="bottom" tone="paper"><Button tone="positive" size="hero">Claim rewards</Button></Dock></BottomStack>\n</Screen>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview>
        <VictoryScreen />
      </PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          Composed entirely from package components, no local CSS. Scroll it
          into view or hit ▶ MOTION to watch the entrance choreography;
          everything tappable is live.
        </p>
      </Notes>
    </ExportPage>
  );
}
