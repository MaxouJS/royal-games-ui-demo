import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/controls/checkbox/")!;

const CODE =
  '<Checkbox aria-label="Accept terms" checked={agreed} onChange={(event) => setAgreed(event.currentTarget.checked)} />';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A styled native checkbox: controlled through <code>checked</code> and
          <code>onChange</code>, keyboard-operable, and explicitly named.
        </p>
      </Notes>
    </ExportPage>
  );
}
