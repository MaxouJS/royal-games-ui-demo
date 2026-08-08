"use client";

import { TabBar, Tab } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  return (
    <DemoInner />
  );
}

function DemoInner() {
  const [active, setActive] = useState(2);
  const tabs = [
    { icon: "🛒", label: "Shop" },
    { icon: "♛", label: "Ranks" },
    { icon: "⌂", label: "Home" },
    { icon: "⚑", label: "Map" },
    { icon: "⚙", label: "More", dot: true },
  ];
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 380, height: 96, borderRadius: 14, overflow: "hidden", background: "#180e32" }}>
      <TabBar>
        {tabs.map((t, i) => (
          <Tab key={t.label} icon={t.icon} label={t.label} dot={t.dot} active={i === active} onClick={() => setActive(i)} />
        ))}
      </TabBar>
    </div>
  );
}
