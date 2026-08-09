import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/layout/chrome/")!;

const CODE =
  '<Chrome>\n  <ChromeRow tone="velvet">\u2026identity\u2026</ChromeRow>\n  <ChromeRow tone="stone">\n    <ScreenName>Home</ScreenName>\n  </ChromeRow>\n</Chrome>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The two-tier header: velvet carries identity (profile, resources),
          stone carries context (screen name, contextual action). ChromeRow and
          ScreenName are its companions.
        </p>
      </Notes>
    </ExportPage>
  );
}
