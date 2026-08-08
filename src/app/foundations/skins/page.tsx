import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo, SideBySide } from "./client";

const e = findExport("/foundations/skins/")!;

const CODE = `import "@objectifthunes/royal-games-ui/styles.css";
import { SkinProvider, useSkin } from "@objectifthunes/royal-games-ui";

<SkinProvider defaultSkin="enamel">
  <App />
</SkinProvider>

// anywhere below:
const { skin, setSkin } = useSkin();
setSkin(skin === "enamel" ? "gloss" : "enamel");`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          <b>Enamel</b> draws every component with a dark contour, a gold bevel frame and a matte
          material face. <b>Gloss</b> renders the same grammar borderless — gradients, extrusion
          shadows and a glossy cap. The stylesheet keys everything on <code>data-rg-skin</code>,
          so switching skins is one attribute — no re-render of your tree.
        </p>
      </Notes>
      <Section>Both skins, side by side</Section>
      <Preview><SideBySide /></Preview>
    </ExportPage>
  );
}
