"use client";

import { SpeechBubble, Avatar } from "@objectifthunes/royal-games-ui";
import { Row } from "@/components/Stage";

export function Demo() {
  return (
    <Row align="end">
      <Avatar size="lg">👵</Avatar>
      <SpeechBubble>Find me a <b>Level 3 candle</b>, dear!</SpeechBubble>
    </Row>
  );
}
