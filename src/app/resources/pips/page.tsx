import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/resources/pips/")!;

const CODE =
  '<Pips value={2} total={3} label="Two of three upgrades" />\n<Pips value={4} total={5} label="Four of five upgrades" />';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Labelled, bounded progress pips. The host owns both the current value
          and total, so the component never infers upgrade rules.
        </p>
      </Notes>
    </ExportPage>
  );
}
