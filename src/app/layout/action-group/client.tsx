"use client";

import { ActionGroup, Button } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <ActionGroup layout="stack" align="stretch">
      <Button tone="positive" width="full">
        CONTINUE
      </Button>
      <ActionGroup equal>
        <Button tone="primary" size="small" width="full">
          REPLAY
        </Button>
        <Button tone="primary" size="small" width="full">
          SHARE
        </Button>
      </ActionGroup>
    </ActionGroup>
  );
}
