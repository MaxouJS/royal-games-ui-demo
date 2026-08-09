"use client";

import { MapPin } from "@objectifthunes/royal-games-ui";
import { Row } from "@/components/Stage";

export function Demo() {
  return (
    <Row align="top" loose>
      <MapPin stars={2}>8</MapPin>
      <MapPin state="current">9</MapPin>
      <MapPin state="locked">10</MapPin>
    </Row>
  );
}
