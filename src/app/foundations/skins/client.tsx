"use client";

import {
  Button,
  Coin,
  Counter,
  Gem,
  Heart,
  Ribbon,
  SkinProvider,
  Toggle,
  useEntranceMotion,
} from "@objectifthunes/royal-games-ui";
import { useState } from "react";
import { Row, Stack } from "@/components/Stage";

export function Demo() {
  const [sound, setSound] = useState(true);

  return (
    <>
      <Ribbon>Chapter complete</Ribbon>
      <Button tone="accent">Play</Button>
      <Counter graphic={<Coin />}>2,450</Counter>
      <Toggle
        aria-label="Sound effects"
        checked={sound}
        onChange={(event) => setSound(event.currentTarget.checked)}
      />
    </>
  );
}

export function SideBySide() {
  return (
    <div className="stage-duos">
      {(["enamel", "gloss"] as const).map((skin) => (
        <SkinProvider key={skin} skin={skin}>
          <div className="stage-duo">
            <Button tone="accent">Play</Button>
            <Button tone="gold" size="small">
              Buy
            </Button>
            <Counter graphic={<Coin />}>2,450</Counter>
          </div>
        </SkinProvider>
      ))}
    </div>
  );
}

export function Motion() {
  const { ref, playing, replay } = useEntranceMotion<HTMLDivElement>();

  return (
    <Stack>
      <div ref={ref} className={playing ? "rg-entering rg-play" : undefined}>
        <Row>
          <span className="rg-entrance-item">
            <Coin decorative={false} title="Coin" size="large" />
          </span>
          <span className="rg-entrance-item">
            <Gem decorative={false} title="Gem" size="large" />
          </span>
          <span className="rg-entrance-item">
            <Heart decorative={false} title="Heart" size="large" />
          </span>
        </Row>
      </div>
      <Row>
        <Button tone="gold" size="small" width="wide" onClick={replay}>
          Replay entrance
        </Button>
      </Row>
    </Stack>
  );
}
