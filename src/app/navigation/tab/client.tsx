"use client";

import { TabBar, Tab } from "@objectifthunes/royal-games-ui";
import { useState } from "react";
import { Scene } from "@/components/Stage";

export function Demo() {
  const [value, setValue] = useState("active");

  return (
    <Scene h={96}>
      <TabBar aria-label="Tab states" value={value} onValueChange={setValue}>
        <Tab value="inactive" icon="⌂">
          Inactive
        </Tab>
        <Tab value="active" icon="♛">
          Active
        </Tab>
        <Tab value="dotted" icon="⚙" dot>
          Dotted
        </Tab>
      </TabBar>
    </Scene>
  );
}
