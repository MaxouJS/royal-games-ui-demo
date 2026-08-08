import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Bundle, Rows, Packs } from "./client";

const e = findExport("/commerce/shop/")!;

const CODE = `import { ShopRow, Pack, PackRow, BundleCells, BundleCell, CoinPile } from "@objectifthunes/royal-games-ui";

<ShopRow
  art={<CoinPile coins={2} />}
  title="Sack of Coins"
  caption="5,200 coins"
  action={<Button tone="gold" size="sm">€4.99</Button>}
/>

<PackRow>
  <Pack art={<><Gem size="lg" />80</>} action={<Button tone="gold" size="sm" block>€1.99</Button>} />
</PackRow>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Bundle /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Packs are equal-height <b>by construction</b> — fixed art zone over a full-width action —
          so a row of them can never go ragged. Shop rows never wrap their copy and price buttons
          share a minimum width.
        </p>
      </Notes>
      <Section>Store rows</Section>
      <Preview center><Rows /></Preview>
      <Section>Gem packs</Section>
      <Preview center><Packs /></Preview>
    </ExportPage>
  );
}
