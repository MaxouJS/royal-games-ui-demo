"use client";

import { Button, Ribbon, Counter, Coin, Toggle, SkinProvider } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  const [on, setOn] = useState(true);
  return (
    <>
      <Ribbon>Chapter complete</Ribbon>
      <Button tone="accent">PLAY</Button>
      <Counter icon={<Coin />}>2,450</Counter>
      <Toggle on={on} onToggle={() => setOn(!on)} />
    </>
  );
}

export function SideBySide() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 14, width: "100%" }}>
      {(["enamel", "gloss"] as const).map((skin) => (
        <SkinProvider key={skin} skin={skin}>
          <div style={{ flex: 1, minWidth: 260, display: "flex", gap: 12, alignItems: "center", justifyContent: "center", padding: 18, borderRadius: 14, background: "#180e32" }}>
            <Button tone="accent">PLAY</Button>
            <Button tone="gold" size="sm">BUY</Button>
            <Counter icon={<Coin />}>2,450</Counter>
          </div>
        </SkinProvider>
      ))}
    </div>
  );
}
