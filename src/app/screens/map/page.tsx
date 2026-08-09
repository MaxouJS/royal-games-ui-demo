import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { MapScreen } from "@/examples/screens";

const e = findExport("/screens/map/")!;

const CODE =
  '<Screen aria-label="Royal Gardens map">\n  <FloatChrome><Button size="small">Back</Button></FloatChrome>\n  <MapScene aria-label="Royal Gardens route">\n    <MapPin variant="button" state="complete" stars={2} label="Replay level 11" onPress={replay}>11</MapPin>\n    <MapPin variant="button" state="current" label="Play level 12" onPress={play}>12</MapPin>\n    <MapPin variant="static" state="unavailable" label="Level 13 unavailable">13</MapPin>\n  </MapScene>\n  <BottomStack><TabBar aria-label="Primary" value={tab} onValueChange={setTab}>{tabs}</TabBar></BottomStack>\n</Screen>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview>
        <MapScreen />
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
