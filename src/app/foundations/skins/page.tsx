import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo, SideBySide, Motion } from "./client";

const e = findExport("/foundations/skins/")!;

const CODE = `import "@objectifthunes/royal-games-ui/styles.css";
import { SkinProvider, useSkin } from "@objectifthunes/royal-games-ui";

<SkinProvider defaultSkin="enamel">
  <App />
</SkinProvider>

// anywhere below:
const { skin, setSkin } = useSkin();
setSkin(skin === "enamel" ? "gloss" : "enamel");`;

const MOTION_CODE = `import { usePlayOnView, bounce } from "@objectifthunes/royal-games-ui";

const { ref, replay } = usePlayOnView<HTMLDivElement>();

<div ref={ref}>                       {/* plays when scrolled into view */}
  <Board columns={6}>
    <GameTile color="red" index={0} /> {/* index staggers the entrance */}
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
          <b>Enamel</b> draws every component with a dark contour, a gold bevel frame and a matte
          material face. <b>Gloss</b> renders the same grammar borderless, gradients, extrusion
          shadows and a glossy cap. The stylesheet keys everything on <code>data-rg-skin</code>,
          so switching skins is one attribute, no re-render of your tree.
        </p>
      </Notes>
      <Section>Both skins, side by side</Section>
      <Preview><SideBySide /></Preview>
      <Section>Motion is everywhere</Section>
      <Preview center><Motion /></Preview>
      <Source code={MOTION_CODE} />
      <Notes>
        <p>
          There is no motion module to opt into, every preview on this site is a live motion scope,
          and so is every package <code>Screen</code>. <code>usePlayOnView</code> marks any element as
          a choreography scope (<code>replay()</code> restarts it), <code>bounce()</code> pops a piece
          on tap, and ▶ MOTION in the header replays the whole page. Board pieces stagger via their{" "}
          <code>index</code>, letter rows flip via <code>row</code>. Reduced motion silences it all.
        </p>
      </Notes>
    </ExportPage>
  );
}
