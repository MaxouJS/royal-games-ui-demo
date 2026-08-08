"use client";

import { SpeechBubble, Avatar } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 10, paddingBottom: 10 }}>
      <Avatar size="lg">👵</Avatar>
      <SpeechBubble>Find me a <b>Level 3 candle</b>, dear!</SpeechBubble>
    </div>
  );
}
