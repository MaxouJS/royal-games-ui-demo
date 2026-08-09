import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/layout/screen/")!;

const CODE =
  '<Screen aria-label="Game lobby">\n  <Chrome>\u2026</Chrome>\n  <Body>\u2026</Body>\n  <BottomStack>\u2026</BottomStack>\n</Screen>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The app screen shell: night backdrop, flex column, motion scope. It
          fills whatever container you give it, a phone frame here, the viewport
          in a Capacitor app.
        </p>
      </Notes>
    </ExportPage>
  );
}
