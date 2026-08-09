"use client";

import { Dock, Button, LevelBadge } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <Dock edge="top" tone="primary">
        <div className="stage-label center">TOP · PRIMARY</div>
      </Dock>
      <Dock edge="bottom" tone="stone">
        <div className="stage-bar">
          <LevelBadge level={9} aria-label="Level 9" />
          <b className="stage-label">Castle Gates</b>
          <Button tone="accent" size="small">
            GO
          </Button>
        </div>
      </Dock>
      <Dock edge="bottom" tone="paper">
        <div className="stage-label center">BOTTOM · PAPER</div>
      </Dock>
    </Stack>
  );
}
