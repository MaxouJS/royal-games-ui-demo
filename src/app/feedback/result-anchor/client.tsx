"use client";

import { ResultAnchor, Panel, Ribbon, StarBurst } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ position: "relative", width: 300, height: 300, borderRadius: 16, overflow: "hidden", background: "#180e32" }}>
      <ResultAnchor style={{ top: 40 }}>
        <div style={{ textAlign: "center", marginBottom: -14, position: "relative", zIndex: 2 }}>
          <Ribbon size="lg">Victory!</Ribbon>
        </div>
        <Panel tone="paper" faceStyle={{ paddingTop: 22 }}>
          <StarBurst earned={3} />
        </Panel>
      </ResultAnchor>
    </div>
  );
}
