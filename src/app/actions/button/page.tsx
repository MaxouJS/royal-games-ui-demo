import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Tones, Sizes, Prices } from "./client";

const e = findExport("/actions/button/")!;

const CODE = `import { Button, Strike, Coin } from "@objectifthunes/royal-games-ui";

<Button tone="accent" size="hero" sheen>PLAY</Button>
<Button tone="positive">CLAIM</Button>
<Button tone="gold" size="sm"><Strike>€19.99</Strike>€9.99</Button>
<Button tone="primary" icon dot>✉</Button>
<Button tone="accent" disabled>PLAY</Button>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Tones /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Five material tones over one construction. Hold one down: the face slides onto its
          thick bottom bevel (Enamel) or collapses its extrusion (Gloss) — <b>transform-only</b>,
          so the button and its section never move. Disabled buttons ignore presses entirely.
        </p>
      </Notes>
      <Section>Sizes, icons & badges</Section>
      <Preview><Sizes /></Preview>
      <Section>Price patterns</Section>
      <Preview><Prices /></Preview>
    </ExportPage>
  );
}
