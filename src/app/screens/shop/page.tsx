import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { ShopScreen } from "@/examples/screens";

const e = findExport("/screens/shop/")!;

const CODE =
  '<Screen aria-label="Royal Vault shop">\n  <Chrome>{/* title and counters */}</Chrome>\n  <Body>\n    <TopRibbon><Ribbon size="small">Popular</Ribbon></TopRibbon>\n    <ShopRow art={<CoinPile coins={3} />} title="Coin purse" caption="2,400 coins" action={<Button tone="gold" size="small">\u20ac1.99</Button>} />\n    <PackRow>{packs}</PackRow>\n  </Body>\n  <BottomStack><TabBar aria-label="Primary" value={tab} onValueChange={setTab}>{tabs}</TabBar></BottomStack>\n</Screen>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview>
        <ShopScreen />
      </PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          Composed entirely from package components, no local CSS. Scroll it
          into view or hit ▶ MOTION to watch the entrance choreography;
          everything tappable is live.
        </p>
      </Notes>
    </ExportPage>
  );
}
