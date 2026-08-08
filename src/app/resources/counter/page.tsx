import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/resources/counter/")!;

const CODE = "<Counters>\n  <Counter icon={<Coin />} onAdd={openShop}>2,450</Counter>\n  <Counter icon={<Heart />}>4</Counter>\n</Counters>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Recessed resource readout with the dark contour. Pass <code>onAdd</code> to grow the green plus. <code>Counters</code> is the row wrapper for chrome bars.</p>
      </Notes>
    </ExportPage>
  );
}
