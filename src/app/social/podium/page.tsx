import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/social/podium/")!;

const CODE = "<Podium>\n  <PodiumColumn place={2} avatar={<Avatar>\ud83e\udd8a</Avatar>} name=\"Nora\" />\n  <PodiumColumn place={1} avatar={<Avatar size=\"lg\">\ud83d\udc3b</Avatar>} name=\"Elio\" />\n  <PodiumColumn place={3} avatar={<Avatar>\ud83d\udc38</Avatar>} name=\"Pip\" />\n</Podium>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Pass columns in visual order, second, first, third. First place stands on the gold plinth.</p>
      </Notes>
    </ExportPage>
  );
}
