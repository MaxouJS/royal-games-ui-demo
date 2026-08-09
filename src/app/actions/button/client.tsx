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
      <Button tone="primary">OPTIONS</Button>
      <Button tone="paper">RESTORE</Button>
      <Button tone="gold" size="small">
        <Strike>€19.99</Strike>€9.99
      </Button>
      <Button tone="gold" size="small" startGraphic={<Coin size="small" />}>
        50
      </Button>
      <Button tone="primary" startGraphic="⚙">
        Settings
      </Button>
      <Button tone="primary" size="small" startGraphic="✉">
        Messages
      </Button>
      <Button tone="accent" disabled>
        PLAY
      </Button>
    </>
  );
}
