import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/commerce/shop-row/")!;

const CODE =
  '<ShopRow\n  art={<CoinPile coins={2} />}\n  title="Sack of Coins"\n  caption="5,200 coins"\n  action={<Button tone="gold" size="small">\u20ac4.99</Button>}\n/>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Art, copy, price action, the copy never wraps and price buttons share
          a minimum width, so rows stay even.
        </p>
      </Notes>
    </ExportPage>
  );
}
