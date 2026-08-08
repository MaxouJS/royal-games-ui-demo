"use client";

import { Moves, ObjectiveChip, Booster, GameTile, MapPin } from "@objectifthunes/royal-games-ui";

export function Hud() {
  return (
    <>
      <Moves value={24} />
      <ObjectiveChip icon={<GameTile color="purple" mini />}>12/30</ObjectiveChip>
      <ObjectiveChip done icon={<GameTile color="red" mini />}>20/20 ✓</ObjectiveChip>
    </>
  );
}

export function Boosters() {
  return (
    <>
      <Booster count={3}>🔨</Booster>
      <Booster count={1}>🧨</Booster>
      <Booster plus>🌀</Booster>
      <Booster off count={0}>🪄</Booster>
    </>
  );
}

export function Pins() {
  return (
    <div style={{ display: "flex", gap: 34, alignItems: "flex-start", padding: "16px 0 8px" }}>
      <MapPin stars={2} style={{ position: "static", translate: "none" }}>8</MapPin>
      <MapPin state="current" style={{ position: "static", translate: "none" }}>9</MapPin>
      <MapPin state="locked" style={{ position: "static", translate: "none" }}>10</MapPin>
    </div>
  );
}
