"use client";

import { ResultAnchor, Panel, Ribbon, StarBurst } from "@objectifthunes/royal-games-ui";
import { Scene } from "@/components/Stage";

export function Demo() {
  return (
    <Scene h={300}>
      <ResultAnchor>
        <div className="stage-overlap">
          <Ribbon size="lg">Victory!</Ribbon>
        </div>
        <Panel tone="paper" faceStyle={{ paddingTop: 22 }}>
          <StarBurst earned={3} />
        </Panel>
      </ResultAnchor>
    </Scene>
  );
}
