import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { PodiumDemo, RowsDemo } from "./client";

const e = findExport("/social/leaderboard/")!;

const CODE = `import { Podium, PodiumColumn, RankRow, YouBadge } from "@objectifthunes/royal-games-ui";

<Podium>
  <PodiumColumn place={2} avatar={<Avatar>🦊</Avatar>} name="Nora" />
  <PodiumColumn place={1} avatar={<Avatar size="lg">🐻</Avatar>} name="Elio" />
  <PodiumColumn place={3} avatar={<Avatar>🐸</Avatar>} name="Pip" />
</Podium>

<RankRow pos={6} me name={<>Max <YouBadge /></>} score={<><Coin size="sm" />8,420</>} />`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><PodiumDemo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Pass podium columns in visual order — second, first, third — and first place gets the gold
          plinth. The <code>me</code> row wears the gold contour and glow.
        </p>
      </Notes>
      <Section>Season rows</Section>
      <Preview center><RowsDemo /></Preview>
    </ExportPage>
  );
}
