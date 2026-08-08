"use client";

import { Button, Coin, Strike } from "@objectifthunes/royal-games-ui";

export function Tones() {
  return (
    <>
      <Button tone="accent">PLAY</Button>
      <Button tone="positive">CLAIM</Button>
      <Button tone="gold">BUY</Button>
      <Button tone="primary">OPTIONS</Button>
      <Button tone="paper">RESTORE</Button>
      <Button tone="accent" disabled>PLAY</Button>
    </>
  );
}

export function Sizes() {
  return (
    <>
      <Button tone="accent" size="hero" sheen>PLAY</Button>
      <Button tone="positive">CLAIM</Button>
      <Button tone="positive" size="sm">GO</Button>
      <Button tone="primary" icon>⚙</Button>
      <Button tone="gold" icon>♥</Button>
      <Button tone="accent" size="sm" icon>✕</Button>
      <Button tone="primary" size="sm" icon dot>✉</Button>
    </>
  );
}

export function Prices() {
  return (
    <>
      <Button tone="gold" size="sm"><Strike>€19.99</Strike>€9.99</Button>
      <Button tone="gold" size="sm"><Coin size="sm" />50</Button>
      <Button tone="positive" size="sm">FREE</Button>
    </>
  );
}
