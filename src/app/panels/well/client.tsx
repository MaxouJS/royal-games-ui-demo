"use client";

import { Well } from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <Well className="stage-bar">
        <b className="stage-label">SCORE</b>
        <span className="stage-label">8,420</span>
      </Well>
    </Stack>
  );
}
