"use client";

import { MergeItem } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <>
      <MergeItem solo level={1}>🧹</MergeItem>
      <MergeItem solo level={2}>🕯️</MergeItem>
      <MergeItem solo level={3}>🧸</MergeItem>
      <MergeItem solo generator level={2}>🕯️</MergeItem>
      <MergeItem solo level={0}>🎁</MergeItem>
    </>
  );
}
