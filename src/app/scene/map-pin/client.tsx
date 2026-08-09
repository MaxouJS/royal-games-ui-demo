"use client";

import { MapPin } from "@objectifthunes/royal-games-ui";
import { Row } from "@/components/Stage";

export function Demo() {
  return (
    <Row align="top" loose>
      <MapPin
        variant="button"
        state="complete"
        stars={2}
        label="Replay level 8"
        onPress={() => {}}
      >
        8
      </MapPin>
      <MapPin
        variant="button"
        state="current"
        label="Play level 9"
        onPress={() => {}}
      >
        9
      </MapPin>
      <MapPin
        variant="static"
        state="unavailable"
        label="Level 10 is unavailable"
      >
        10
      </MapPin>
    </Row>
  );
}
