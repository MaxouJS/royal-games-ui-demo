"use client";

import { Booster } from "@objectifthunes/royal-games-ui";
import { Row } from "@/components/Stage";

export function Demo() {
  return (
    <Row loose>
      <Booster count={3}>🔨</Booster>
      <Booster count={1}>🧨</Booster>
      <Booster plus>🌀</Booster>
      <Booster off count={0}>🪄</Booster>
    </Row>
  );
}
