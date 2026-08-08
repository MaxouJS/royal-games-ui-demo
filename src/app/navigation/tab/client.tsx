"use client";

import { TabBar, Tab } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 380, height: 96, borderRadius: 14, overflow: "hidden", background: "#180e32" }}>
      <TabBar>
        <Tab icon="⌂" label="Inactive" />
        <Tab icon="♛" label="Active" active />
        <Tab icon="⚙" label="Dotted" dot />
      </TabBar>
    </div>
  );
}
