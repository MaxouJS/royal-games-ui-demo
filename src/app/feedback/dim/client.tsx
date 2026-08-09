"use client";

import { Dim } from "@objectifthunes/royal-games-ui";
import { Scene } from "@/components/Stage";

export function Demo() {
  return (
    <Scene field h={140}>
      <Dim />
      <div className="stage-center stage-label">Scrim over the game</div>
    </Scene>
  );
}
