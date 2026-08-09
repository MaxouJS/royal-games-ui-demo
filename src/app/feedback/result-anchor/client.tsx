"use client";

import {
  ResultAnchor,
  Panel,
  Ribbon,
  StarBurst,
} from "@objectifthunes/royal-games-ui";
import { Scene } from "@/components/Stage";

export function Demo() {
  return (
    <Scene h={300}>
      <ResultAnchor>
        <div className="stage-overlap">
          <Ribbon size="large">Victory!</Ribbon>
        </div>
        <Panel tone="paper" density="tall">
          <StarBurst
            earned={3}
            total={3}
            label="Three out of three stars earned"
          />
        </Panel>
      </ResultAnchor>
    </Scene>
  );
}
