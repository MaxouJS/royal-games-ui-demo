import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/feedback/chest/")!;

const CODE =
  "<Chest decorative>\u265b</Chest>\n<Chest decorative glow>\u2726</Chest>   {/* host artwork in a claimable frame */}";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A frame for host-supplied chest artwork. Mark decorative art as such,
          or provide <code>decorative={false}</code> and a title when the
          graphic itself conveys information.
        </p>
      </Notes>
    </ExportPage>
  );
}
