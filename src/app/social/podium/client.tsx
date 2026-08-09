"use client";

import { Podium, PodiumColumn, Avatar } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <Podium aria-label="Weekly leaders">
        <PodiumColumn
          place={2}
          avatar={<Avatar>🦊</Avatar>}
          name="Nora"
          score="9,210"
        />
        <PodiumColumn
          place={1}
          avatar={<Avatar size="large">🐻</Avatar>}
          name="Elio"
          score="9,880"
        />
        <PodiumColumn
          place={3}
          avatar={<Avatar>🐸</Avatar>}
          name="Pip"
          score="8,940"
        />
      </Podium>
    </Stack>
  );
}
