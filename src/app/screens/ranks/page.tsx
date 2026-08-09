import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { RanksScreen } from "@/examples/screens";

const e = findExport("/screens/ranks/")!;

const CODE =
  '<Screen aria-label="Royal League leaderboard">\n  <Chrome>{/* identity and resources */}</Chrome>\n  <Body>\n    <Podium aria-label="Top three players">{leaders}</Podium>\n    <Panel tone="primary">\n      <RankRow position={6} current name="Max" badge={<YouBadge>You</YouBadge>} score="8,420" />\n    </Panel>\n  </Body>\n  <BottomStack><TabBar aria-label="Primary" value={tab} onValueChange={setTab}>{tabs}</TabBar></BottomStack>\n</Screen>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview>
        <RanksScreen />
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
