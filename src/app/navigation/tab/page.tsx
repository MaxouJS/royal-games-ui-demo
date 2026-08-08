import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/navigation/tab/")!;

const CODE = "<Tab icon=\"\u2302\" label=\"Home\" />                 {/* resting */}\n<Tab icon=\"\u265b\" label=\"Ranks\" active />         {/* full raised pop-out */}\n<Tab icon=\"\u2699\" label=\"More\" dot />             {/* notification dot */}";

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>The active tab renders as a complete raised gold button, contour, frame, face, popping out of the plinth and springing on arrival. The dot pins to the icon.</p>
      </Notes>
    </ExportPage>
  );
}
