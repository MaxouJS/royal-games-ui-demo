"use client";

import { RankRow, YouBadge, Avatar, Coin, Panel } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ width: 340 }}>
      <Panel tone="primary" faceStyle={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <RankRow pos={5} avatar={<Avatar size="sm">🐰</Avatar>} name="Juno" score={<><Coin size="sm" />8,875</>} />
        <RankRow pos={6} me avatar={<Avatar size="sm">♛</Avatar>} name={<>Max <YouBadge /></>} score={<><Coin size="sm" />8,420</>} />
        <RankRow pos={7} avatar={<Avatar size="sm">🐱</Avatar>} name="Sable" score={<><Coin size="sm" />7,940</>} />
      </Panel>
    </div>
  );
}
