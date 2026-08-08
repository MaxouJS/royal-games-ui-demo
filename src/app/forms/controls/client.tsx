"use client";

import { Toggle, Slider, Checkbox, Segmented, Field, PageDots } from "@objectifthunes/royal-games-ui";
import { useState } from "react";

export function Demo() {
  const [music, setMusic] = useState(true);
  const [haptics, setHaptics] = useState(false);
  const [volume, setVolume] = useState(0.62);
  const [agreed, setAgreed] = useState(true);
  const [range, setRange] = useState<"Daily" | "Weekly" | "All-time">("Daily");
  const [page, setPage] = useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <Toggle on={music} onToggle={() => setMusic(!music)} />
        <Toggle on={haptics} onToggle={() => setHaptics(!haptics)} />
        <Checkbox checked={agreed} onToggle={() => setAgreed(!agreed)} />
        <Checkbox checked={!agreed} onToggle={() => setAgreed(!agreed)} />
      </div>
      <Slider value={volume} onChange={setVolume} />
      <Segmented options={["Daily", "Weekly", "All-time"] as const} value={range} onChange={setRange} />
      <Field icon="♛" placeholder="Kingdom name…" defaultValue="Camelot" fieldStyle={{ width: 260 }} />
      <span style={{ cursor: "pointer" }} onClick={() => setPage((page + 1) % 4)}>
        <PageDots count={4} index={page} />
      </span>
    </div>
  );
}
