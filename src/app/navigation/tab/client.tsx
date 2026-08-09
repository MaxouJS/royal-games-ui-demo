"use client";

import { TabBar, Tab } from "@objectifthunes/royal-games-ui";
import { Scene } from "@/components/Stage";

export function Demo() {
  return (
    <Scene h={96}>
      <TabBar>
        <Tab icon="⌂" label="Inactive" />
        <Tab icon="♛" label="Active" active />
        <Tab icon="⚙" label="Dotted" dot />
      </TabBar>
    </Scene>
  );
}
