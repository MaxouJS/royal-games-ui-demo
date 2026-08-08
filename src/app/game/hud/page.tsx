import { ExportPage, Notes, Section } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Hud, Boosters, Pins } from "./client";

const e = findExport("/game/hud/")!;

const CODE = `import { Moves, ObjectiveChip, Booster, MapPin } from "@objectifthunes/royal-games-ui";

<Moves value={24} />
<ObjectiveChip icon={<GameTile color="purple" mini />}>12/30</ObjectiveChip>
<Booster count={3}>🔨</Booster>
<Booster plus>🌀</Booster>          {/* buy slot */}
<MapPin stars={2}>8</MapPin>
<MapPin state="current">9</MapPin>  {/* halo pulse + bob */}
<MapPin state="locked">10</MapPin>`;

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Hud /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Objective chips take a <code>mini</code> game tile as their icon and turn emerald when{" "}
          <code>done</code>. Boosters carry count badges, a gold plus for buy slots, and a depleted
          state. Pins position absolutely over your painted map via <code>style</code>.
        </p>
      </Notes>
      <Section>Boosters</Section>
      <Preview><Boosters /></Preview>
      <Section>Map pins</Section>
      <Preview center><Pins /></Preview>
    </ExportPage>
  );
}
