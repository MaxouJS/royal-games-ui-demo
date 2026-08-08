"use client";

import { MapPin } from "@objectifthunes/royal-games-ui";

export function Demo() {
  return (
    <div style={{ display: "flex", gap: 34, alignItems: "flex-start", padding: "14px 0 6px" }}>
      <MapPin stars={2} style={{ position: "static", translate: "none" }}>8</MapPin>
      <MapPin state="current" style={{ position: "static", translate: "none" }}>9</MapPin>
      <MapPin state="locked" style={{ position: "static", translate: "none" }}>10</MapPin>
    </div>
  );
}
