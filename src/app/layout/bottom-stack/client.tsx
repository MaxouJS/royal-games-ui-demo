"use client";

import { Dock, TabBar, Tab, Button } from "@objectifthunes/royal-games-ui";
import { Scene } from "@/components/Stage";

export function Demo() {
  return (
    <Scene h={210}>
      <div className="rg-bottom-stack">
        <Dock edge="bottom" tone="stone">
          <Button tone="positive" size="sm" block>CLAIM</Button>
        </Dock>
        <TabBar>
          <Tab icon="🛒" label="Shop" />
          <Tab icon="⌂" label="Home" active />
          <Tab icon="⚑" label="Map" />
        </TabBar>
      </div>
    </Scene>
  );
}
