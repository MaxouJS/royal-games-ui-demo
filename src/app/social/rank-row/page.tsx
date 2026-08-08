import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/social/rank-row/")!;

const CODE = "<RankRow pos={6} me\n  avatar={<Avatar size=\"sm\">\u265b</Avatar>}\n  name={<>Max <YouBadge /></>}\n  score={<><Coin size=\"sm\" />8,420</>}\n/>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Leaderboard entry; <code>me</code> wears the gold contour and glow, and <code>YouBadge</code> marks the name.</p>
      </Notes>
    </ExportPage>
  );
}
