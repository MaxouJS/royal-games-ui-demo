import { ExportPage, Notes } from "@/components/ExportPage";
import { PhonePreview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { WordScreen } from "@/examples/screens";

const e = findExport("/screens/word/")!;

const CODE = "<Screen>\n  <Dock edge=\"top\" tone=\"stone\">\u2026title + hearts\u2026</Dock>\n  <Body>\n    \u2026streak chips\u2026\n    <LetterRow row={0}>\n      <LetterTile index={0} state=\"fill\">S</LetterTile>\n      <LetterTile index={2} state=\"ok\">O</LetterTile>\n    </LetterRow>\n    <Panel tone=\"primary\">\u2026hint for gems\u2026</Panel>\n  </Body>\n  <BottomStack>\n    <Dock edge=\"bottom\" tone=\"stone\"><Keys>\u2026</Keys></Dock>\n  </BottomStack>\n</Screen>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <PhonePreview><WordScreen /></PhonePreview>
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
