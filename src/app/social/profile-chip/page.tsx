import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/social/profile-chip/")!;

const CODE = "<ProfileChip avatar={<Avatar size=\"sm\">\u265b</Avatar>} name=\"Max\" caption=\"LEVEL 12\" />";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Persistent identity for the velvet chrome row: avatar, name, caption.</p>
      </Notes>
    </ExportPage>
  );
}
