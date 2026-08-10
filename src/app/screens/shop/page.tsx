import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { readScreenSource } from "@/examples/readScreenSource";
import { ShopScreen } from "@/examples/screens";

const e = findExport("/screens/shop/")!;

const CODE = readScreenSource("ShopScreen");

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview>
        <ShopScreen />
      </PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          This is the exact component rendered above. Offer ribbons remain
          anchored to their panels, product rows align independently of price
          text, and the body scrolls above the welded offer/navigation stack.
        </p>
      </Notes>
    </ExportPage>
  );
}
