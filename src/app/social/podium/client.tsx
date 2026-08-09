"use client";

import { Podium, PodiumColumn, Avatar } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <Podium>
        <PodiumColumn place={2} avatar={<Avatar>🦊</Avatar>} name="Nora" />
        <PodiumColumn place={1} avatar={<Avatar size="lg">🐻</Avatar>} name="Elio" />
        <PodiumColumn place={3} avatar={<Avatar>🐸</Avatar>} name="Pip" />
      </Podium>
    </Stack>
  );
}
