"use client";

import { Button, Coin, Strike } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <Button tone="accent" size="hero">
        PLAY
      </Button>
      <Button tone="positive">CLAIM</Button>
      <Button tone="gold">BUY</Button>
      <Button tone="primary" width="wide">
        OPTIONS
      </Button>
      <Button tone="paper" width="wide">
        RESTORE
      </Button>
      <Button tone="gold" size="small" width="extended">
        <Strike>€19.99</Strike>€9.99
      </Button>
      <Button tone="gold" size="small" startGraphic={<Coin size="small" />}>
        50
      </Button>
      <Button tone="primary" width="wide" startGraphic="⚙">
        Settings
      </Button>
      <Button tone="primary" size="small" width="standard" startGraphic="✉">
        Messages
      </Button>
      <Button tone="accent" disabled>
        PLAY
      </Button>
    </>
  );
}
