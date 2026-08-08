import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Bottom, Top, Parchment } from "./client";

const e = findExport("/panels/dock/")!;

const CODE = `import { Dock, BottomStack, TabBar } from "@objectifthunes/royal-games-ui";

// welded above the tab bar, inside a Screen:
<BottomStack>
  <Dock edge="bottom" tone="stone">…</Dock>
  <TabBar>…</TabBar>
</BottomStack>

// welded under the chrome:
<Dock edge="top" tone="velvet">…</Dock>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Bottom /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A dock is built exactly like a button: dark contour, gold frame, material face — so its
          border <b>wraps the rounded exposed corners</b> instead of dying against them. In a{" "}
          <code>BottomStack</code> the dock welds onto the tab bar and the active tab pops over the seam.
          Use <code>flush</code> to square a side for dock-on-dock welds.
        </p>
      </Notes>
      <Section>Top edge · velvet</Section>
      <Preview center><Top /></Preview>
      <Section>Parchment</Section>
      <Preview center><Parchment /></Preview>
    </ExportPage>
  );
}
