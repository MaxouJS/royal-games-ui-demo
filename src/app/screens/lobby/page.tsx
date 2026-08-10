import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { LobbyScreen } from "@/examples/screens";

const e = findExport("/screens/lobby/")!;

const CODE =
  '<Screen aria-label="Moonlit Keep lobby">\n  <Chrome>{/* identity and resource rows */}</Chrome>\n  <Body>\n    <Wordmark strap="Tonight\'s challenge">Moonlit Keep</Wordmark>\n    <Panel tone="paper">{/* challenge and progress */}</Panel>\n    <Panel tone="primary">{/* daily reward */}</Panel>\n  </Body>\n  <BottomStack>\n    <Dock edge="bottom" tone="paper"><Button tone="accent" width="wide">Continue</Button></Dock>\n    <TabBar aria-label="Primary" value={tab} onValueChange={setTab}>{tabs}</TabBar>\n  </BottomStack>\n</Screen>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview>
        <LobbyScreen />
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
