import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { MapScreen } from "@/examples/screens";

const e = findExport("/screens/map/")!;

const CODE = "<Screen>\n  <MapScene>\u2026painted path (inline SVG)\u2026\n    <MapPin index={0} stars={2} style={{ left: u(70), top: u(590) }}>7</MapPin>\n    <MapPin index={2} state=\"current\" style={{ left: u(150), top: u(388) }}>9</MapPin>\n  </MapScene>\n  <FloatChrome floating>\u2026back, world ribbon, hearts\u2026</FloatChrome>\n  <BottomStack>\n    <Dock edge=\"bottom\" tone=\"stone\">\u2026objective + chapter meter\u2026</Dock>\n    <TabBar>\u2026</TabBar>\n  </BottomStack>\n</Screen>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview><MapScreen /></PhonePreview>
      <Source code={CODE} />
      <Notes>
        <p>
          Composed entirely from package components, no local CSS. Scroll it into view or hit
          ▶ MOTION to watch the entrance choreography; everything tappable is live.
        </p>
      </Notes>
    </ExportPage>
  );
}
