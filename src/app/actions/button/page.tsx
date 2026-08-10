import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/actions/button/")!;

const CODE =
  '<Button tone="accent" size="hero">PLAY</Button>\n<Button tone="positive">CLAIM</Button>\n<Button tone="gold" size="small" startGraphic={<Coin />}>\u20ac9.99</Button>\n<Button tone="primary" width="wide">OPTIONS</Button>\n<Button tone="accent" disabled>PLAY</Button>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Five material tones, three authored heights, and stable compact,
          standard, wide, or full-width geometry. Label length never resizes the
          button. Pressing sinks the face onto its bevel using transforms, so
          surrounding layout remains stable. Disabled and loading buttons retain
          native button semantics.
        </p>
      </Notes>
    </ExportPage>
  );
}
