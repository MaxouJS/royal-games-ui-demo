"use client";

import { Dock, Button, LevelBadge } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <Dock edge="top" tone="velvet"><div className="stage-label center">TOP · VELVET</div></Dock>
      <Dock edge="bottom" tone="stone">
        <div className="stage-bar">
          <LevelBadge level={9} />
          <b className="stage-label">Castle Gates</b>
          <Button tone="accent" size="sm">GO</Button>
        </div>
      </Dock>
      <Dock edge="bottom" tone="parchment"><div className="stage-label center">BOTTOM · PARCHMENT</div></Dock>
    </Stack>
  );
}
