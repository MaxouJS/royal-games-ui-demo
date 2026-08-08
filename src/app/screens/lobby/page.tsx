import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { LobbyScreen } from "@/examples/screens";

const e = findExport("/screens/lobby/")!;

const CODE = "<Screen>\n  <Chrome>\u2026identity + context rows\u2026</Chrome>\n  <Body>\n    <Wordmark strapline=\"His Majesty awaits\">ROYAL GAMES</Wordmark>\n    <Panel tone=\"paper\">\u2026quest, objectives, hero PLAY\u2026</Panel>\n    <Panel tone=\"primary\">\u2026Royal Pass strip\u2026</Panel>\n  </Body>\n  <BottomStack>\n    <Dock edge=\"bottom\" tone=\"stone\">\u2026daily gift\u2026</Dock>\n    <TabBar>\u2026</TabBar>\n  </BottomStack>\n</Screen>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview><LobbyScreen /></PhonePreview>
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
