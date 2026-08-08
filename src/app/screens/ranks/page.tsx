import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { RanksScreen } from "@/examples/screens";

const e = findExport("/screens/ranks/")!;

const CODE = "<Screen>\n  <Dock edge=\"top\" tone=\"velvet\">\n    <Ribbon size=\"sm\">Season Ranks</Ribbon>\n    <Podium>\u20262nd, 1st, 3rd\u2026</Podium>\n  </Dock>\n  <Body>\n    <Panel tone=\"primary\">\n      <RankRow pos={6} me name={<>Max <YouBadge /></>} score={\u2026} />\n    </Panel>\n  </Body>\n  <BottomStack><TabBar>\u2026</TabBar></BottomStack>\n</Screen>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview><RanksScreen /></PhonePreview>
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
