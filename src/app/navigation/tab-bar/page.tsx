import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/navigation/tab-bar/")!;

const CODE = "const [active, setActive] = useState(2);\n\n<TabBar>\n  <Tab icon=\"\u2302\" label=\"Home\" active={active === 2} onClick={() => setActive(2)} />\n  <Tab icon=\"\u2699\" label=\"More\" dot onClick={() => setActive(4)} />\n</TabBar>";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Red plinth, gold rail with the contour on its outer edge only, equal-width tabs. Tap around, which tab is active is your state; the bar just renders it.</p>
      </Notes>
    </ExportPage>
  );
}
