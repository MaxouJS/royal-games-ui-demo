import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo, SideBySide, Motion } from "./client";

const e = findExport("/foundations/skins/")!;

const CODE = `import "@objectifthunes/royal-games-ui/tokens.css";
import { SkinProvider, useSkin } from "@objectifthunes/royal-games-ui";

<SkinProvider defaultSkin="enamel">
  <App />
</SkinProvider>

// anywhere below:
const { skin, setSkin } = useSkin();
setSkin(skin === "enamel" ? "gloss" : "enamel");`;

const MOTION_CODE = `import { useEntranceMotion } from "@objectifthunes/royal-games-ui";

const { ref, playing, replay } = useEntranceMotion<HTMLDivElement>();

<div
  ref={ref}
  className={playing ? "rg-entering rg-play" : undefined}
>
  <Coin decorative={false} title="Coin" size="large" />
  <Gem decorative={false} title="Gem" size="large" />
</div>
<Button width="wide" onClick={replay}>Replay entrance</Button>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          <b>Enamel</b> draws every component with a dark contour, a gold bevel
          frame and a matte material face. <b>Gloss</b> renders the same grammar
          borderless, gradients, extrusion shadows and a glossy cap. The
          stylesheet keys everything on <code>data-rg-skin</code>, so switching
          skins is one attribute, no re-render of your tree.
        </p>
      </Notes>
      <Section>Both skins, side by side</Section>
      <Preview>
        <SideBySide />
      </Preview>
      <Section>Motion is everywhere</Section>
      <Preview center>
        <Motion />
      </Preview>
      <Source code={MOTION_CODE} />
      <Notes>
        <p>
          There is no motion module to opt into, every preview on this site is a
          live motion scope, and so is every package <code>Screen</code>.{" "}
          <code>useEntranceMotion</code> owns a local choreography scope and
          exposes its active state; <code>replay()</code> restarts that scope.
          The ▶ MOTION control in the header replays the whole page. Reduced
          motion is respected by the package.
        </p>
      </Notes>
    </ExportPage>
  );
}
