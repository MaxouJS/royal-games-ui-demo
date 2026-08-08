"use client";

import { RankRow, Podium, PodiumColumn, YouBadge, Avatar, Coin, Panel } from "@objectifthunes/royal-games-ui";

export function PodiumDemo() {
  return (
    <div style={{ width: 320 }}>
      <Podium>
        <PodiumColumn place={2} avatar={<Avatar>🦊</Avatar>} name="Nora" />
        <PodiumColumn place={1} avatar={<Avatar size="lg">🐻</Avatar>} name="Elio" />
        <PodiumColumn place={3} avatar={<Avatar>🐸</Avatar>} name="Pip" />
      </Podium>
    </div>
  );
}

export function RowsDemo() {
  return (
    <div style={{ width: 340 }}>
      <Panel tone="primary" faceStyle={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <RankRow pos={4} avatar={<Avatar size="sm">🦉</Avatar>} name="Wren" score={<><Coin size="sm" />9,180</>} />
        <RankRow pos={5} avatar={<Avatar size="sm">🐰</Avatar>} name="Juno" score={<><Coin size="sm" />8,875</>} />
        <RankRow pos={6} me avatar={<Avatar size="sm">♛</Avatar>} name={<>Max <YouBadge /></>} score={<><Coin size="sm" />8,420</>} />
        <RankRow pos={7} avatar={<Avatar size="sm">🐱</Avatar>} name="Sable" score={<><Coin size="sm" />7,940</>} />
      </Panel>
    </div>
  );
}
