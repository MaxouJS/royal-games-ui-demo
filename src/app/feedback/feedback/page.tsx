import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Alerts, Dialogue, Rewards, Sheet } from "./client";

const e = findExport("/feedback/feedback/")!;

const CODE = `import { Toast, Spinner, SpeechBubble, ComboBadge, Medal, Chest, StarBurst } from "@objectifthunes/royal-games-ui";

<Toast><Coin />+120 coins collected!</Toast>
<SpeechBubble>Find me a <b>Level 3 candle</b>, dear!</SpeechBubble>
<ComboBadge>COMBO ×3</ComboBadge>
<Chest glow />
<Medal tier="gold">1</Medal>
<StarBurst earned={3} />`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Alerts /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The bubble&apos;s tail is a clipped shape with its own contour; the chest&apos;s glow marks it
          claimable; the star burst plays its staggered entrance inside any <code>rg-play</code> scope
          (a package <code>Screen</code>, or your own <code>usePlayOnView</code> target).
        </p>
      </Notes>
      <Section>Dialogue</Section>
      <Preview><Dialogue /></Preview>
      <Section>Rewards</Section>
      <Preview><Rewards /></Preview>
      <Section>Modal composition</Section>
      <Preview center><Sheet /></Preview>
    </ExportPage>
  );
}
