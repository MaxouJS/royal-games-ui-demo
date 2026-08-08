"use client";

import { Dock, TabBar, Tab, Button } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ position: "relative", width: 320, height: 210, borderRadius: 16, overflow: "hidden", background: "#180e32" }}>
      <div className="rg-bottom-stack" style={{ position: "absolute" }}>
        <Dock edge="bottom" tone="stone">
          <Button tone="positive" size="sm" block>CLAIM</Button>
        </Dock>
        <TabBar>
          <Tab icon="🛒" label="Shop" />
          <Tab icon="⌂" label="Home" active />
          <Tab icon="⚑" label="Map" />
        </TabBar>
      </div>
    </div>
  );
}
