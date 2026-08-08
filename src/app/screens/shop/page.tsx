import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { ShopScreen } from "@/examples/screens";

const e = findExport("/screens/shop/")!;

const CODE = "<Screen>\n  <Dock edge=\"top\" tone=\"stone\">\u2026title ribbon + counters\u2026</Dock>\n  <Body>\n    <TopRibbon><Ribbon size=\"sm\">Best value</Ribbon></TopRibbon>\n    <CornerRibbon><Ribbon size=\"sm\">\u221250%</Ribbon></CornerRibbon>\n    <Panel tone=\"paper\">\u2026bundle cells + <Strike>\u20ac19.99</Strike>\u20ac9.99 BUY\u2026</Panel>\n    <Panel tone=\"primary\"><PackRow>\u2026gem packs\u2026</PackRow></Panel>\n  </Body>\n  <BottomStack>\n    <Dock edge=\"bottom\" tone=\"velvet\">\u2026free coins offer\u2026</Dock>\n    <TabBar>\u2026</TabBar>\n  </BottomStack>\n</Screen>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview><ShopScreen /></PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          Composed entirely from package components — no local CSS. Scroll it into view or hit
          ▶ MOTION to watch the entrance choreography; everything tappable is live.
        </p>
      </Notes>
    </ExportPage>
  );
}
