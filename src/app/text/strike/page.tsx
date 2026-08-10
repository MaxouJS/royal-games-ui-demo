import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/text/strike/")!;

const CODE =
  '<Button tone="gold" width="extended"><Strike>\u20ac19.99</Strike>\u20ac9.99 \u00b7 BUY</Button>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Struck-through old price rendered inside a price button, the sale
          pattern.
        </p>
      </Notes>
    </ExportPage>
  );
}
