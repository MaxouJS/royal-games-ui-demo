"use client";

import { TabBar, Tab } from "@objectifthunes/royal-games-ui";
import { useState } from "react";
import { Scene } from "@/components/Stage";

export function Demo() {
  return <DemoInner />;
}

function DemoInner() {
  const [active, setActive] = useState("home");
  const tabs = [
    { icon: "🛒", label: "Shop" },
    { icon: "♛", label: "Ranks" },
    { icon: "⌂", label: "Home" },
    { icon: "⚑", label: "Map" },
    { icon: "⚙", label: "More", dot: true },
  ];
  return (
    <Scene h={96}>
      <TabBar
        aria-label="Primary navigation"
        value={active}
        onValueChange={setActive}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            value={tab.label.toLowerCase()}
            icon={tab.icon}
            dot={tab.dot}
          >
            {tab.label}
          </Tab>
        ))}
      </TabBar>
    </Scene>
  );
}
