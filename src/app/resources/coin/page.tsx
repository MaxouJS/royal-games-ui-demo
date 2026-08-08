import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/resources/coin/")!;

const CODE = "<Coin size=\"sm\" /> <Coin /> <Coin size=\"lg\" />";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>CSS-drawn gold coin with its enamel ring, no image assets. Three sizes; lives in counters, price buttons, reward lines and shop art.</p>
      </Notes>
    </ExportPage>
  );
}
