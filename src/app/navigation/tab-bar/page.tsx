import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/navigation/tab-bar/")!;

const CODE = `import { TabBar, Tab } from "@objectifthunes/royal-games-ui";

const [active, setActive] = useState(2);

<TabBar>
  <Tab icon="🛒" label="Shop"  active={active === 0} onClick={() => setActive(0)} />
  <Tab icon="♛" label="Ranks" active={active === 1} onClick={() => setActive(1)} />
  <Tab icon="⌂" label="Home"  active={active === 2} onClick={() => setActive(2)} />
  <Tab icon="⚑" label="Map"   active={active === 3} onClick={() => setActive(3)} />
  <Tab icon="⚙" label="More"  active={active === 4} dot onClick={() => setActive(4)} />
</TabBar>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Tap the tabs — the active one renders as a <b>full raised gold button</b> popping out of the
          plinth, and springs when it lands. The component is graphical: which tab is active lives in
          your state, the Tab just renders it. The gold rail keeps its contour on the outer edge only.
        </p>
      </Notes>
    </ExportPage>
  );
}
