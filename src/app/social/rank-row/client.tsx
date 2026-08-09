"use client";

import {
  RankRow,
  YouBadge,
  Avatar,
  Coin,
  Panel,
} from "@objectifthunes/royal-games-ui";
import { Stack } from "@/components/Stage";

export function Demo() {
  return (
    <Stack>
      <Panel tone="primary">
        <div className="stage-row-stack">
          <RankRow
            position={5}
            avatar={<Avatar size="small">🐰</Avatar>}
            name="Juno"
            score={
              <>
                <Coin size="small" />
                8,875
              </>
            }
          />
          <RankRow
            position={6}
            current
            avatar={<Avatar size="small">♛</Avatar>}
            name="Max"
            badge={<YouBadge>You</YouBadge>}
            score={
              <>
                <Coin size="small" />
                8,420
              </>
            }
          />
          <RankRow
            position={7}
            avatar={<Avatar size="small">🐱</Avatar>}
            name="Sable"
            score={
              <>
                <Coin size="small" />
                7,940
              </>
            }
          />
        </div>
      </Panel>
    </Stack>
  );
}
