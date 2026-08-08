import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { CountersDemo, Badges, Chips } from "./client";

const e = findExport("/resources/counters/")!;

const CODE = `import { Counter, Coin, Gem, Heart, Chip, LevelBadge, TimerPill } from "@objectifthunes/royal-games-ui";

<Counter icon={<Coin />} onAdd={openShop}>2,450</Counter>
<Counter icon={<Heart />}>4</Counter>   {/* the heart beats */}
<LevelBadge level={12} />
<TimerPill>⏳ Ends in <b>2d 4h</b></TimerPill>
<Chip on={picked} onClick={pick}>Normal</Chip>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><CountersDemo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Everything recessed carries the dark contour; the coin, gem, heart and stars are drawn in
          CSS with their own enamel strokes — no image assets ship with the package. Pass{" "}
          <code>onAdd</code> to a Counter and it grows the green plus.
        </p>
      </Notes>
      <Section>Badges & avatars</Section>
      <Preview><Badges /></Preview>
      <Section>Chips</Section>
      <Preview><Chips /></Preview>
    </ExportPage>
  );
}
