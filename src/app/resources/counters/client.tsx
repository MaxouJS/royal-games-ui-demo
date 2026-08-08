"use client";

import { Counter, Coin, Gem, Heart, Star, Bolt, Chip, LevelBadge, TimerPill, Avatar } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function CountersDemo() {
  return (
    <>
      <Counter icon={<Coin />} onAdd={() => {}}>2,450</Counter>
      <Counter icon={<Gem />} onAdd={() => {}}>12</Counter>
      <Counter icon={<Heart />}>4</Counter>
      <Counter icon={<Bolt />}>8/10</Counter>
    </>
  );
}

export function Badges() {
  return (
    <>
      <LevelBadge level={12} />
      <TimerPill>⏳ <b>2d 4h</b></TimerPill>
      <Avatar>♛</Avatar>
      <Avatar size="sm">🦊</Avatar>
      <Avatar size="lg">🐻</Avatar>
      <span><Star /><Star /><Star off /></span>
    </>
  );
}

export function Chips() {
  const [pick, setPick] = useState(1);
  return (
    <>
      {["Easy", "Normal", "Hard"].map((d, i) => (
        <Chip key={d} on={pick === i} onClick={() => setPick(i)}>{d}</Chip>
      ))}
      <Chip on>✦ Boosted</Chip>
    </>
  );
}
