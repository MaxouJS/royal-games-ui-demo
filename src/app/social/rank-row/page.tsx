import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/social/rank-row/")!;

const CODE =
  '<RankRow position={6} current\n  avatar={<Avatar size="small">\u265b</Avatar>}\n  name="Max"\n  badge={<YouBadge>You</YouBadge>}\n  score={<><Coin size="small" />8,420</>}\n/>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Stable host-provided slots for position, avatar, name, score, and
          badge. <code>current</code> applies the local-player highlight without
          sorting or formatting any host data.
        </p>
      </Notes>
    </ExportPage>
  );
}
