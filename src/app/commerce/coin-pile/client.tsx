"use client";

import { CoinPile } from "@objectifthunes/royal-games-ui";
import { Row } from "@/components/Stage";

export function Demo() {
  return (
    <Row loose>
      <span className="stage-slot">
        <CoinPile coins={1} />
      </span>
      <span className="stage-slot">
        <CoinPile coins={2} />
      </span>
      <span className="stage-slot">
        <CoinPile coins={3} />
      </span>
    </Row>
  );
}
