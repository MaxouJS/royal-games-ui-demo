"use client";

import { Button, Ribbon, Counter, Coin, Toggle, SkinProvider, Board, GameTile, usePlayOnView, type TileColor } from "@objectifthunes/royal-games-ui";
import { useState } from "react";
import { Row, Stack } from "@/components/Stage";

export function Demo() {
  const [on, setOn] = useState(true);
  return (
    <>
      <Ribbon>Chapter complete</Ribbon>
      <Button tone="accent">PLAY</Button>
      <Counter icon={<Coin />}>2,450</Counter>
      <Toggle on={on} onToggle={() => setOn(!on)} />
    </>
  );
}

export function SideBySide() {
  return (
    <div className="stage-duos">
      {(["enamel", "gloss"] as const).map((skin) => (
        <SkinProvider key={skin} skin={skin}>
          <div className="stage-duo">
            <Button tone="accent">PLAY</Button>
            <Button tone="gold" size="sm">BUY</Button>
            <Counter icon={<Coin />}>2,450</Counter>
          </div>
        </SkinProvider>
      ))}
    </div>
  );
}

const GRID: TileColor[] = [
  "purple", "green", "blue", "red", "gold", "green",
  "blue", "gold", "purple", "green", "red", "purple",
  "red", "blue", "gold", "purple", "green", "blue",
];

export function Motion() {
  const { ref, replay } = usePlayOnView<HTMLDivElement>();
  return (
    <Stack>
      <div ref={ref}>
        <Board columns={6} gap={5}>
          {GRID.map((color, i) => (
            <GameTile key={i} color={color} index={i} />
          ))}
        </Board>
      </div>
      <Row><Button tone="gold" size="sm" onClick={replay}>↻ REPLAY ENTRANCE</Button></Row>
    </Stack>
  );
}
