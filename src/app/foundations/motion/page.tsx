import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo, BounceDemo } from "./client";

const e = findExport("/foundations/motion/")!;

const CODE = `import { usePlayOnView, bounce } from "@objectifthunes/royal-games-ui";

const { ref, replay } = usePlayOnView<HTMLDivElement>();

<div ref={ref}>            {/* gets .rg-play when scrolled into view */}
  <Board columns={6}>
    <GameTile color="red" index={0} />   {/* index staggers the entrance */}
  </Board>
</div>
<Button onClick={replay}>Replay</Button>
<Button onClick={(e) => bounce(e.currentTarget)}>Juice</Button>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The stylesheet owns the choreography: chrome drops, content cascades, docks rise, pieces
          pop with their <code>index</code> stagger, letter tiles flip per row. Components only carry
          the <code>rg-play</code> class and the <code>--i</code>/<code>--r</code> indices. Everything
          is transform/opacity-only and fully silenced by <code>prefers-reduced-motion</code>.
        </p>
      </Notes>
      <Section>Tap bounce</Section>
      <Preview center><BounceDemo /></Preview>
    </ExportPage>
  );
}
