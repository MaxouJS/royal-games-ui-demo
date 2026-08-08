import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/forms/controls/")!;

const CODE = `import { Toggle, Slider, Checkbox, Segmented, Field, PageDots } from "@objectifthunes/royal-games-ui";

<Toggle on={music} onToggle={toggleMusic} />
<Slider value={volume} onChange={setVolume} />   {/* reports 0..1 */}
<Checkbox checked={agreed} onToggle={toggle} />
<Segmented options={["Daily", "Weekly", "All-time"]} value={range} onChange={setRange} />
<Field icon="♛" placeholder="Kingdom name…" />
<PageDots count={4} index={page} />`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Fully controlled and fully graphical: the components render your state and report intent.
          The slider&apos;s pointer-capture drag lives in <code>useSliderDrag</code>, reusable for any
          custom scrubber. The field grows a gold focus glow via <code>:focus-within</code>.
        </p>
      </Notes>
    </ExportPage>
  );
}
