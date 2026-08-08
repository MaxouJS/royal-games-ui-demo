"use client";

import { Podium, PodiumColumn, Avatar } from "@objectifthunes/royal-games-ui";

export function Demo() {
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
