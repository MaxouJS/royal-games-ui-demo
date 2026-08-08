import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { TwoTier, Floating } from "./client";

const e = findExport("/navigation/chrome/")!;

const CODE = `import { Chrome, ChromeRow, ScreenName, ProfileChip, Counters, Counter } from "@objectifthunes/royal-games-ui";

<Chrome>
  <ChromeRow tone="velvet">
    <ProfileChip avatar={<Avatar size="sm">♛</Avatar>} name="Max" caption="LEVEL 12" />
    <Counters>
      <Counter icon={<Coin />} onAdd={buyCoins}>2,450</Counter>
    </Counters>
  </ChromeRow>
  <ChromeRow tone="stone">
    <ScreenName>Home</ScreenName>
  </ChromeRow>
</Chrome>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><TwoTier /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The two-tier header: a velvet identity row (who you are, what you own) over a stone context
          row (where you are). Over scenes, use <code>FloatChrome</code> instead — a loose row for a
          back button, a title ribbon and a counter.
        </p>
      </Notes>
      <Section>Floating scene chrome</Section>
      <Preview center><Floating /></Preview>
    </ExportPage>
  );
}
