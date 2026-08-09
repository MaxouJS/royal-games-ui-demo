import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/commerce/coin-pile/")!;

const CODE = "<ShopRow art={<CoinPile coins={3} />} \u2026 />";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          One, two or three overlapping coins for tiered shop art, sized for the
          ShopRow art slot.
        </p>
      </Notes>
    </ExportPage>
  );
}
