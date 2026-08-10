import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/layout/action-group/")!;

const CODE = `<ActionGroup layout="stack" align="stretch">
  <Button tone="positive" width="full">CONTINUE</Button>
  <ActionGroup equal>
    <Button tone="primary" width="full">REPLAY</Button>
    <Button tone="primary" width="full">SHARE</Button>
  </ActionGroup>
</ActionGroup>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Use this component for the geometry between independent actions. The
          buttons retain stable package widths unless the group explicitly
          stretches or equalizes them.
        </p>
      </Notes>
    </ExportPage>
  );
}
