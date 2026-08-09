import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/text/wordmark/")!;

const CODE = '<Wordmark strap="His Majesty awaits">ROYAL GAMES</Wordmark>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Code-native gold display wordmark with an optional ribbon strapline,
          the text stays selectable and localizable, no image assets.
        </p>
      </Notes>
    </ExportPage>
  );
}
